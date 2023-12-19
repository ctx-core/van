/// <reference types="ctx-core" />
/// <reference types="./index.d.ts" />
import { be_, ctx__set } from 'ctx-core/be'
/** @type {Be<vanx_T|null>} */
export const vanx_ = be_(
	()=>null,
	{ id: 'vanx_' })
/**
 * @param {Ctx}ctx
 * @param {vanx_T}vanx
 */
export function vanx__set(ctx, vanx) {
	ctx__set(ctx, vanx_, vanx)
}
