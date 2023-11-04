import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
export declare function be_derive_pair__new<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx,
>(...arg_a:be_derive_pair__new__arg_a_T<S, ctx_T>):be_derive_pair_T<S, ctx_T>
export type be_derive_pair_T<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<S, ctx_T>,
	(ctx:ctx_T)=>StateVal<S>
]
export type be_derive_pair__new__arg_a_T<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx,
> =
	|[derived__new:(ctx:ctx_T)=>S, be__params?:be__params_T]
	|[id:string|null|undefined, derive__new:(ctx:ctx_T)=>S, be__params?:be__params_T]
