import { be_arg_triple__new } from '@ctx-core/object'
import { be_state_triple__new } from '../be_state_triple'
import { reactive_state__new } from '../state'
import { van_ } from '../van'
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('../be_state_triple').be_state_triple_T}be_state_triple_T */
/** @typedef {import('./index.d.ts').val__be_state_triple__new__arg_a_T}val__be_state_triple__new__arg_a_T */
/**
 * @param {val__be_state_triple__new__arg_a_T}arg_a
 * @returns {be_state_triple_T<unknown>}
 */
export function val__be_state_triple__new(...arg_a) {
	let [id, val__new, be__params] = be_arg_triple__new(...arg_a)
	if (!val__new) throw new Error('val__be_state_triple_|val__new argument is required')
	return be_state_triple__new(
		id,
		ctx=>reactive_state__new(ctx, val__new(ctx)),
		be__params)
}
