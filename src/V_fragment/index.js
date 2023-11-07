import { compact } from '@ctx-core/array'
import { fragment_ } from '@ctx-core/dom'
import { van_, van_internals_ } from '../van/index.js'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('van-type-delegate').ChildDom}ChildDom */
/**
 * @param {{ ctx:Ctx }|Ctx}props_OR_ctx
 * @param {ChildDom[]}_children
 * @returns {DocumentFragment|any}
 * @constructor
 */
export function V_fragment(props_OR_ctx, ..._children) {
	if (globalThis['window']) return window__fragment_()
	let ctx = props_OR_ctx?.ctx ?? props_OR_ctx
	let { elementProto, plainValue, protoOf } = van_internals_(ctx)
	let children = compact(_children)
	return Object.setPrototypeOf({
		children,
		renderToBuf(buf) {
			for (let c of this.children) {
				let plainC = plainValue(c)
				protoOf(plainC) === elementProto
					? plainC.renderToBuf(buf)
					// TODO: use buf.push(escape(plainC!.toString())) instead?
					: buf.push(plainC.toString())
			}
		},
		render: elementProto.render
	}, elementProto)
	function window__fragment_() {
		let fragment = fragment_()
		let div = van_(ctx).tags.div(...children)
		let child
		while (child = div.firstChild) {
			fragment.appendChild(child)
		}
		return fragment
	}
}
