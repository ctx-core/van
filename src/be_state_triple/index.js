import { be_ } from '@ctx-core/object'
import { _be_state_arg_triple__new } from '../_be_state_arg_triple'
/** @typedef {import('./index.d.ts').be_state_triple_T}be_state_triple_T */
/** @typedef {import('./index.d.ts').be_state_triple__new__arg_a_T}be_state_triple___arg_a_T */
/**
 *
 * @param {be_state_triple___arg_a_T}arg_a
 * @returns {be_state_triple_T}
 * @private
 */
export function be_state_triple__new(...arg_a) {
	let [
		id,
		state__new,
		be__params
	] = _be_state_arg_triple__new(...arg_a)
	const _be_ =
		(be__params && be__params.be_)
		?? be_
	const val$_ =
		id
			? _be_(id, state__new, be__params)
			: _be_(state__new, be__params)
	const val_ = ctx=>val$_(ctx).val
	const val__set = (ctx, val)=>{
		val$_(ctx).val = val
	}
	return [
		val$_,
		val_,
		val__set
	]
}
