import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
export declare function be_derive_pair__new<
	val_T,
	ctx_T extends Ctx = Ctx,
>(...arg_a:be_derive_pair__new__arg_a_T<State<val_T>, ctx_T>):be_derive_pair_T<State<val_T>, ctx_T>
export type be_derive_pair_T<
	val_T,
	ctx_T extends Ctx = Ctx
> = [
	Be<State<val_T>, ctx_T>,
	(ctx:ctx_T)=>StateVal<State<val_T>>
]
export type be_derive_pair__new__arg_a_T<
	val_T,
	ctx_T extends Ctx = Ctx,
> =
	|[derived__new:(ctx:ctx_T)=>State<val_T>, be__params?:be__params_T]
	|[id:string|null|undefined, derive__new:(ctx:ctx_T)=>State<val_T>, be__params?:be__params_T]
