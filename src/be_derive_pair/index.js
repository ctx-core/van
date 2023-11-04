import { be_ } from '@ctx-core/object'
import { _be_state_arg_triple__new } from '../_be_state_arg_triple'
/** @typedef {import('./index.d.ts').be_derive_pair_T}be_derive_pair_T */
/** @typedef {import('./index.d.ts').be_derive_pair__new__arg_a_T}be_derive_pair___arg_a_T */
/**
 * @param {be_derive_pair___arg_a_T}arg_a
 * @returns {be_derive_pair_T}
 * @private
 */
export function be_derive_pair__new(...arg_a) {
	const [
		id,
		derive__new,
		be__params
	] = _be_state_arg_triple__new(...arg_a)
	if (!derive__new) throw new Error('be_derive_pair__new|derive__new argument is required')
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, derive__new, be__params)
			: _be_(derive__new, be__params)
	const val_ = ctx=>val$_(ctx).val
	return [
		val$_,
		val_,
	]
}
