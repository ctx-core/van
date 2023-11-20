import type { Be, be__val__new_T, be_config_T, Ctx } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
export declare function be_state_triple__new<
	val_T,
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx = Ctx
>(be:Be<state_T>):be_state_triple_T<val_T, state_T, ctx_T>
export declare function be_state_triple__new<
	val_T,
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx = Ctx
>(val__new:be__val__new_T<val_T>, config?:be_config_T):be_state_triple_T<val_T, state_T, ctx_T>
export type be_state_triple_T<
	val_T,
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx = Ctx
> = [
	Be<state_T>,
	(ctx:ctx_T)=>val_T,
	(ctx:ctx_T, val:val_T)=>void
]
