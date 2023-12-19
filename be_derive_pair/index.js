/// <reference types="../be_/index.d.ts" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
import { reactive_derive__new } from '../state/index.js'
/**
 * @param {Be<State>|be__val__new_T<unknown>}be_OR_val__new
 * @param {be_config_T}[config]
 * @returns {be_derive_pair_T}
 * @private
 */
export function be_derive_pair__new(be_OR_val__new, config) {
	/** @type {Be<State>} */
	let be =
		be_OR_val__new.is_be
			? be_OR_val__new
			: be_(
				ctx=>
					reactive_derive__new(ctx, ()=>
						be_OR_val__new(ctx)),
				config)
	return [
		be,
		ctx=>be(ctx).val,
	]
}
