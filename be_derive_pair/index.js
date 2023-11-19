import { be_ } from '@ctx-core/object'
import { reactive_derive__new } from '../state/index.js'
/** @typedef {import('../be_/index.d.ts').be__val__new_T} */
/** @typedef {import('./index.d.ts').be_derive_pair_T} */
/** @typedef {import('./index.d.ts').be_derive_pair__new__arg_a_T} */
/**
 *
 * @param {be__val__new_T<unknown>}val__new
 * @returns {be_derive_pair_T}
 * @private
 */
export function be_derive_pair__new(val__new) {
	let oninit
	const be_derive_pair = [
		be_(ctx=>{
			let state = reactive_derive__new(ctx, ()=>val__new(ctx))
			oninit?.(ctx, state)
			return state
		}),
		ctx=>be_derive_pair[0](ctx).val,
		(ctx, val)=>{
			be_derive_pair[0](ctx).val = val
		},
	]
	be_derive_pair.config = params=>(be_derive_pair[0].config(params), be_derive_pair)
	be_derive_pair.oninit = _oninit=>(oninit = _oninit, be_derive_pair)
	return be_derive_pair
}
