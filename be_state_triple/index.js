/// <reference types="ctx-core/object" />
/// <reference types="van-type-delegate" />
/// <reference types="./index.d.ts" />
import { be_ } from '@ctx-core/object'
import { reactive_state__new } from '../state/index.js'
/** @typedef {import('van-type-delegate').State}State */
/**
 *
 * @param {Be<State>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_state_triple_T}
 * @private
 */
export function be_state_triple__new(be_OR_val__new, config) {
	/** @type {Be<State>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(ctx=>reactive_state__new(ctx, be_OR_val__new(ctx)),
				config)
	return [
		be,
		ctx=>be(ctx).val,
		(ctx, val)=>{
			be(ctx).val = val
		},
	]
}
