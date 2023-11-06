import { html__fragment_ } from '@ctx-core/dom'
import { van_internals_ } from '../van'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('van-type-delegate').PlateElement}PlateElement */
/**
 * @param {Ctx}ctx
 * @param {string}html
 * @returns {DocumentFragment|PlateElement}
 * @constructor
 */
export function V_raw(ctx, html) {
	if (globalThis['window']) return html__fragment_(html)
	const { elementProto } = van_internals_(ctx)
	return Object.setPrototypeOf({
		renderToBuf(buf) {
			buf.push(html)
		},
		render: elementProto.render
	}, elementProto)
}
