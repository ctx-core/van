import type { Be, wide_ctx_T } from 'ctx-core/be'
import type { ChildDom, VanShape } from 'van-type-delegate'
export declare function van_<
	van_T extends VanShape = VanShape,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>
>(ctx:ctx_T):van_T
export declare function van__set<
	van_T extends VanShape,
	ns_T extends string = '',
	ctx_T extends wide_ctx_T<ns_T> = wide_ctx_T<ns_T>
>(ctx:ctx_T, van:van_T):void
export declare const van_internals_:Be<VanShape>
export interface van_internals_T<van_T extends VanShape> {
	protoOf:typeof Object.getPrototypeOf
	funcProto:typeof Function['prototype']
	objProto:object
	elementProto:van__elementProto_T
	stateProto:object
	plainValue(v:Exclude<ChildDom<van_T>, null|undefined>, k?:string):ChildDom<van_T>
}
export interface van__elementProto_T {
	render():string
	renderToBuf(buf:string[]):void
}
