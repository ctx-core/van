import { compact } from '@ctx-core/array'
import { fragment_ } from '@ctx-core/dom'
import { van_internals_ } from '../van'
export function V_fragment(ctx, ..._children) {
	if (globalThis['window']) return window__fragment_()
	const { elementProto, plainValue, protoOf } = van_internals_(ctx)
	const children = compact(_children)
	return Object.setPrototypeOf({
		children,
		renderToBuf(buf) {
			for (const c of this.children) {
				const plainC = plainValue(c)
				protoOf(plainC) === elementProto
					? plainC.renderToBuf(buf)
					// TODO: use buf.push(escape(plainC!.toString())) instead?
					: buf.push(plainC.toString())
			}
		},
		render: elementProto.render
	}, elementProto)
	function window__fragment_() {
		const fragment = fragment_()
		const div = H_(ctx).div(...children)
		let child
		while (child = div.firstChild) {
			fragment.appendChild(child)
		}
		return fragment
	}
}
