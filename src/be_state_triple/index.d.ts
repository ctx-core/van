import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
export declare function be_state_triple__new<
	S extends State<unknown|undefined>,
	ctx_T extends Ctx = Ctx
>(...arg_a:be_state_triple__new__arg_a_T<S, ctx_T>):be_state_triple_T<S, ctx_T>
export type be_state_triple_T<
	S extends State<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<S>,
	(ctx:ctx_T)=>StateVal<S>,
	(ctx:ctx_T, val:StateVal<S>)=>void
]
export type be_state_triple__new__arg_a_T<
	S extends State<unknown|undefined>,
	ctx_T extends Ctx = Ctx
> =
	|[state__new:(ctx:ctx_T)=>S, be__params?:be__params_T]
	|[id:string|null|undefined, state__new:(ctx:ctx_T)=>S, be__params?:be__params_T]
