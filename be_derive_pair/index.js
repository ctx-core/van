import { be_ } from '@ctx-core/object'
import { reactive_derive__new } from '../state/index.js'
/** @typedef {import('../be_/index.d.ts').be__val__new_T} */
/** @typedef {import('./index.d.ts').be_derive_pair_T} */
/** @typedef {import('./index.d.ts').be_derive_pair__new__arg_a_T} */
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
