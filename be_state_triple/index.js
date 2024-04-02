/// <reference types="ctx-core" />
/// <reference types="van-type-delegate" />
/// <reference types="./index.d.ts" />
import { be_ } from 'ctx-core/be'
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
/**
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_state_triple_T}
 */
export function id_be_state_triple__new(id, val__new) {
	return be_state_triple__new(val__new, { id })
}
/**
 * @param {string}ns
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_state_triple_T}
 */
export function ns_be_state_triple__new(ns, val__new) {
	return be_state_triple__new(val__new, { ns })
}
/**
 * @param {string}ns
 * @param {string}id
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_state_triple_T}
 */
export function ns_id_be_state_triple__new(ns, id, val__new) {
	return be_state_triple__new(val__new, { ns, id })
}
