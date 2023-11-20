import type { Be, be__val__new_T, be_config_T, Ctx } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
export declare function be_derive_pair__new<
	val_T,
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx = Ctx,
>(be:Be<be__val__new_T<val_T>>):be_derive_pair_T<val_T, state_T, ctx_T>
export declare function be_derive_pair__new<
	val_T,
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx = Ctx,
>(val__new:be__val__new_T<val_T>, config?:be_config_T):be_derive_pair_T<val_T, state_T, ctx_T>
export type be_derive_pair_T<
	val_T,
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<state_T, ctx_T>,
	(ctx:ctx_T)=>val_T
]
