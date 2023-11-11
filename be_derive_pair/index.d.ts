import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State, StateVal } from 'van-type-delegate'
export declare function be_derive_pair__new<
	state_T extends State<unknown> = State<unknown>,
	ctx_T extends Ctx = Ctx,
>(
	derived__new:(ctx:ctx_T)=>state_T,
	be__params?:be__params_T
):be_derive_pair_T<state_T, ctx_T>
export declare function be_derive_pair__new<
	state_T extends State<unknown> = State<unknown>,
	ctx_T extends Ctx = Ctx,
>(
	id:string|null|undefined,
	derive__new:(ctx:ctx_T)=>state_T,
	be__params?:be__params_T
):be_derive_pair_T<state_T, ctx_T>
export type be_derive_pair_T<
	state_T extends State<unknown> = State<unknown>,
	ctx_T extends Ctx = Ctx
> = [
	Be<state_T, ctx_T>,
	(ctx:ctx_T)=>StateVal<state_T>
]
export type be_derive_pair__new__arg_a_T<
	state_T extends State<unknown> = State<unknown>,
	ctx_T extends Ctx = Ctx,
> =
	|[derived__new:(ctx:ctx_T)=>state_T, be__params?:be__params_T]
	|[id:string|null|undefined, derive__new:(ctx:ctx_T)=>state_T, be__params?:be__params_T]
