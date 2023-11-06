import { be_arg_triple__new } from '@ctx-core/object'
import { be_derive_pair__new } from '../be_derive_pair'
import { reactive_derive__new } from '../state'
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('van-type-delegate').VanShape}VanShape */
/** @typedef {import('../be_derive_pair').be_derive_pair_T}be_derive_pair_T */
/** @typedef {import('./index.d.ts').val__be_derive_pair__new__arg_a_T}val__be_derive_pair__new__arg_a_T */
/**
 * @param {val__be_derive_pair__new__arg_a_T}rest_a
 * @returns {be_derive_pair_T<unknown>}
 */
export function val__be_derive_pair__new(...rest_a) {
	const [id, val__new, be__params] = be_arg_triple__new(...rest_a)
	if (!val__new) throw new Error('val__be_derive_pair__new|val__new argument is required')
	return be_derive_pair__new(
		id,
		ctx=>reactive_derive__new(ctx, ()=>val__new(ctx)),
		be__params)
}
