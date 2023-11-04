import type { be__params_T, Ctx } from '@ctx-core/object'
import type { ChildDom, State, Tags, VanShape } from 'van-type-delegate'
import type { be_derive_pair_T } from '../be_derive_pair'
import type { be_state_triple_T } from '../be_state_triple'
export declare function van_o__new<van_T extends VanShape, van_return_T extends VanShape = van_T>(
	_:(van:van_T)=>van_return_T
):van_o_T<van_return_T>
export type van_o_T<van_T extends VanShape> = {
	van_(ctx:Ctx):van_T
	van__set(ctx:Ctx, van:van_T):void
	van_internals_(ctx:Ctx):van_internals_T<van_T>
	val__be_derive_pair__new<val_T, ctx_T extends Ctx = Ctx>(
		...arg_a:val__be_derive_pair__new__arg_a_T<val_T, ctx_T>
	):be_derive_pair_T<State<val_T>, ctx_T>
	val__be_state_triple__new<val_T, ctx_T extends Ctx = Ctx>(
		...arg_a:val__be_state_triple__new__arg_a_T<val_T, ctx_T>
	):be_state_triple_T<State<val_T>, ctx_T>
	H_<ctx_T extends Ctx = Ctx>(ctx:ctx_T):Tags<van_T>
	S_<ctx_T extends Ctx = Ctx>(ctx:ctx_T):Tags<van_T>
}
export interface van_internals_T<V extends VanShape> {
	protoOf:typeof Object.getPrototypeOf
	funcProto:Function
	objProto:Object
	elementProto:van__elementProto_T
	stateProto:Object
	plainValue(v:Exclude<ChildDom<V>, null|undefined>, k?:string):ChildDom<V>
}
export interface van__elementProto_T {
	render():string
	renderToBuf(buf:string[]):void
}
export type val__be_derive_pair__new__arg_a_T<
	val_T,
	ctx_T extends Ctx = Ctx
> =
	|[val__new:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
	|[id:string|null|undefined, val__new?:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
export type val__be_state_triple__new__arg_a_T<
	val_T,
	ctx_T extends Ctx = Ctx
> =
	|[be__params?:be__params_T]
	|[id:string|null|undefined, be__params?:be__params_T]
	|[val__new:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
	|[id:string|null|undefined, val__new?:(ctx:ctx_T)=>val_T, be__params?:be__params_T]
