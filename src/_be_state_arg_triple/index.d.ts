import type { be__params_T, Ctx } from '@ctx-core/object'
export declare function _be_state_arg_triple__new<
	V,
	ctx_T extends Ctx = Ctx,
>(...arg_a:_be_state_arg_triple__new__arg_a_T<V, ctx_T>):_be_state_arg_triple_T<V, ctx_T>
export type _be_state_arg_triple_T<
	V,
	ctx_T extends Ctx = Ctx
> = [
	id:string|null,
	val__new:(ctx:ctx_T)=>V,
	be__params:be__params_T
]
export type _be_state_arg_triple__new__arg_a_T<
	V,
	ctx_T extends Ctx = Ctx,
> =
	|[be__params?:be__params_T]
	|[id:string|null|undefined, be__params?:be__params_T]
	|[val__new:(ctx:ctx_T)=>V, be__params?:be__params_T]
	|[id?:string|null|undefined, val__new?:((ctx:ctx_T)=>V), be__params?:be__params_T]
