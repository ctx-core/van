import type { Be, be__val__new_T, be_config_arg_a_T, ctx__be_T, ctx__get_T, Ctx_wide_T } from 'ctx-core/be'
import type { State } from 'van-type-delegate'
export declare function be_derive_pair__new<
	val_T,
	ns_T extends string = '',
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(be:Be<be__val__new_T<val_T, ns_T, ctx_T>, ns_T, ctx_T>):be_derive_pair_T<val_T, ns_T, state_T, ctx_T>
export declare function be_derive_pair__new<
	val_T,
	ns_T extends string = '',
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
>(
	val__new:be__val__new_T<val_T, ns_T, ctx_T>,
	...config:be_config_arg_a_T<ns_T>
):be_derive_pair_T<val_T, ns_T, state_T, ctx_T>
export type be_derive_pair_T<
	val_T,
	ns_T extends string = '',
	state_T extends State<val_T> = State<val_T>,
	ctx_T extends Ctx_wide_T<ns_T> = Ctx_wide_T<ns_T>,
> = [
	ctx__be_T<state_T, ns_T, ctx_T>,
	ctx__get_T<val_T, ns_T, ctx_T>
]
