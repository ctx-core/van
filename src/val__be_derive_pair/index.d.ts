import type { Be, be__params_T, Ctx } from '@ctx-core/object'
import type { State, VanShape } from 'van-type-delegate'
import type { be_derive_pair_T } from '../be_derive_pair'
export declare function val__be_derive_pair__new<
	van_T extends VanShape,
	val_T,
	ctx_T extends Ctx = Ctx
>(
	van_:Be<van_T>,
	val__new:(ctx:ctx_T)=>val_T,
	be__params?:be__params_T
):be_derive_pair_T<State<val_T>, ctx_T>
export declare function val__be_derive_pair__new<
	van_T extends VanShape,
	val_T,
	ctx_T extends Ctx = Ctx
>(
	van_:Be<van_T>,
	id:string|null|undefined,
	val__new?:(ctx:ctx_T)=>val_T,
	be__params?:be__params_T
):be_derive_pair_T<State<val_T>, ctx_T>
export type val__be_derive_pair__new__arg_a_T<
	van_T extends VanShape,
	val_T,
	ctx_T extends Ctx = Ctx
> =
	|[van_:Be<van_T>, val__new:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
	|[van_:Be<van_T>, id:string|null|undefined, val__new?:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
