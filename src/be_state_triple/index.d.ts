import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
export declare function be_state_triple__new<
	state_T extends State<unknown> = State<any>,
	ctx_T extends Ctx = Ctx
>(state__new:(ctx:ctx_T)=>state_T, be__params?:be__params_T):be_state_triple_T<state_T, ctx_T>
export declare function be_state_triple__new<
	state_T extends State<unknown> = State<any>,
	ctx_T extends Ctx = Ctx
>(id:string|null|undefined, state__new:(ctx:ctx_T)=>state_T, be__params?:be__params_T):be_state_triple_T<state_T, ctx_T>
export type be_state_triple_T<
	state_T extends State<unknown> = State<any>,
	ctx_T extends Ctx = Ctx
> = [
	Be<state_T>,
	(ctx:ctx_T)=>StateVal<state_T>,
	(ctx:ctx_T, val:StateVal<state_T>)=>void
]
export type be_state_triple__new__arg_a_T<
	state_T extends State<unknown> = State<any>,
	ctx_T extends Ctx = Ctx
> =
	|[state__new:(ctx:ctx_T)=>state_T, be__params?:be__params_T]
	|[id:string|null|undefined, state__new:(ctx:ctx_T)=>state_T, be__params?:be__params_T]
