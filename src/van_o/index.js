import { be_ } from '@ctx-core/object'
import { _be_state_arg_triple__new } from '../_be_state_arg_triple'
import { be_derive_pair__new } from '../be_derive_pair'
import { be_state_triple__new } from '../be_state_triple'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('van-type-delegate').ChildDom}ChildDom */
/** @typedef {import('van-type-delegate').State}State */
/** @typedef {import('van-type-delegate').VanShape}VanShape */
/** @typedef {import('../be_derive_pair').be_derive_pair_T}be_derive_pair_T */
/** @typedef {import('./index.d.ts').val__be_derive_pair__new__arg_a_T}val__be_derive_pair__new__arg_a_T */
/** @typedef {import('./index.d.ts').van_internals_T}van_internals_T */
/** @typedef {import('./index.d.ts').van_o_T}van_triple_T */
/**
 * @param {(van:VanShape)=>VanShape}_
 * @returns {van_triple_T}
 */
export function van_o__new(_) {
	let _van_a_ = be_('_van_a_', ()=>[])
	let _van_internals_a_ = be_('_van_internals_a_', ctx=>[])
	/**
	 * @param {Ctx}ctx
	 * @returns {VanShape}
	 */
	let van_ = ctx=>_van_a_(ctx)[0]
	/**
	 * @param {Ctx}ctx
	 * @param {VanShape}van
	 */
	let van__set = (ctx, van)=>{
		_van_a_(ctx)[0] = _(van)
		const protoOf = Object.getPrototypeOf, funcProto = protoOf(protoOf), objProto = protoOf({})
		const stateProto = protoOf(van.state())
		_van_internals_a_(ctx)[0] = {
			protoOf,
			funcProto,
			objProto,
			elementProto: protoOf(van.tags.div()),
			stateProto,
			/**
			 * @param {Exclude<ChildDom, null|undefined>}v
			 * @param {string}[k]
			 */
			plainValue(v, k) {
				let protoOfV = protoOf(v ?? 0)
				return protoOfV === stateProto
					? (/** @type {State} */v).val
					: protoOfV === funcProto && (!k?.startsWith('on') || v._isBindingFunc)
						? v(undefined)
						: v
			}
		}
	}
	/**
	 * @param {Ctx}ctx
	 * @returns {van_internals_T|undefined}
	 * @private
	 */
	const van_internals_ = ctx=>_van_internals_a_(ctx)[0]
	/**
	 * @param {val__be_derive_pair__new__arg_a_T}arg_a
	 * @returns {be_derive_pair_T<State<unknown>, Ctx>}
	 */
	const val__be_derive_pair__new = (...arg_a)=>{
		const [id, val__new, be__params] = _be_state_arg_triple__new(...arg_a)
		if (!val__new) throw new Error('val__be_derive_pair__new|val__new argument is required')
		return be_derive_pair__new(
			id,
			ctx=>van_(ctx).derive(()=>val__new(ctx)),
			be__params)
	}
	const val__be_state_triple__new = (...arg_a)=>{
		let [id, val__new, be__params] = _be_state_arg_triple__new(...arg_a)
		if (!val__new) throw new Error('val__be_state_triple_|val__new argument is required')
		return be_state_triple__new(
			id,
			ctx=>van_(ctx).state(val__new(ctx)),
			be__params)
	}
	const H_ = be_('H_', ctx=>van_(ctx).tags)
	const S_ = be_('S_', ctx=>
		van_(ctx).tagsNS('http://www.w3.org/2000/svg'))
	return {
		van_,
		van__set,
		van_internals_,
		val__be_derive_pair__new,
		val__be_state_triple__new,
		H_,
		S_,
	}
}
