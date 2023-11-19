import { be_ } from '@ctx-core/object'
import { reactive_state__new } from '../state/index.js'
/** @typedef {import('../be_/index.d.ts').be__val__new_T} */
/** @typedef {import('./index.d.ts').be_state_triple_T} */
/** @typedef {import('./index.d.ts').be_state_triple__new__arg_a_T} */
/**
 *
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_state_triple_T}
 * @private
 */
export function be_state_triple__new(val__new) {
	let oninit
	const be_state_triple = [
		be_(ctx=>{
			let state = reactive_state__new(ctx, val__new(ctx))
			oninit?.(ctx, state)
			return state
		}),
		ctx=>be_state_triple[0](ctx).val,
		(ctx, val)=>{
			be_state_triple[0](ctx).val = val
		},
	]
	be_state_triple.config = params=>(be_state_triple[0].config(params), be_state_triple)
	be_state_triple.oninit = _oninit=>(oninit = _oninit, be_state_triple)
	return be_state_triple
}
