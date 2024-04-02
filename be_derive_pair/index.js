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
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_derive_pair_T}
 */
export function id_be_derive_pair__new(id, val__new) {
	return be_derive_pair__new(val__new, { id })
}
/**
 * @param {string}ns
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_derive_pair_T}
 */
export function ns_be_derive_pair__new(ns, val__new) {
	return be_derive_pair__new(val__new, { ns })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_derive_pair_T}
 */
export function ns_id_be_derive_pair__new(ns, id, val__new) {
	return be_derive_pair__new(val__new, { ns, id })
}
