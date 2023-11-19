import { be_, ctx__set } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Be} */
/** @typedef {import('@ctx-core/object').Ctx} */
/** @typedef {import('./index.d.ts').vanx_T} */
/** @type {Be<vanx_T|null>} */
export const vanx_ = be_(()=>null).config({ id: 'vanx_' })
/**
 * @param {Ctx}ctx
 * @param {vanx_T}vanx
 */
export function vanx__set(ctx, vanx) {
	ctx__set(ctx, vanx_, vanx)
}