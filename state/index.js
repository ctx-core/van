/// <reference types="van-type-delegate" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { van_, van_internals_ } from '../van/index.js'
let van_state_o_ = be_(()=>({
	curDeps: undefined
}), { id: 'van_state_o_' })
export function reactive_state__new(ctx, initVal) {
	let van = van_(ctx)
	let state
	if (is_van_core_(van)) state = van.state(initVal)
	else {
		let { stateProto } = van_internals_(ctx)
		const van_state_o = van_state_o_(ctx)
		state = {
			__proto__: stateProto,
			_val: initVal,
			_oldVal: initVal,
			_listeners: new Set,
			get val() {
				van_state_o.curDeps?.add(this)
				return this._val
			},
			get oldVal() {
				van_state_o.curDeps?.add(this)
				return this._oldVal
			},
			set val(v) {
				// Aliasing `this` to reduce the bundle size.
				let s = this
				if (v !== s._val) {
					s._val = v
					let listeners = s._listeners
					for (let l of listeners) {
						let ref_state = l.s.deref()
						if (ref_state) {
							ref_state.val = l.f()
							s._oldVal = v
						} else {
							listeners.delete(l)
						}
					}
				}
			},
		}
	}
	return state
}
export function reactive_derive__new(ctx, f, s = reactive_state__new(ctx), dom) {
	let van = van_(ctx)
	if (is_van_core_(van)) return van.derive(f, s, dom)
	let deps = new Set
	let listener = { f, s: new WeakRef(s) }
	let van_state_o = van_state_o_(ctx)
	// begin runAndCaptureDeps
	let prevDeps = van_state_o.curDeps
	van_state_o.curDeps = deps
	try {
		s.val = f()
	} catch (e) {
		console.error(e)
		s.val = undefined
	} finally {
		van_state_o.curDeps = prevDeps
	}
	// end runAndCaptureDeps
	for (let d of deps) d._listeners.add(listener)
	return s
}
/**
 * @param {VanShape}van
 * @returns {boolean}
 * @private
 */
function is_van_core_(van) {
	return !!van?.hydrate
}
