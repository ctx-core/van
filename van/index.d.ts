import type { Ctx } from '@ctx-core/object'
import type { ChildDom, VanShape } from 'van-type-delegate'
export declare function van_<
	van_T extends VanShape = VanShape,
	ctx_T extends Ctx = Ctx
>(ctx:ctx_T):van_T
export declare function van__set<
	van_T extends VanShape,
	ctx_T extends Ctx = Ctx
>(ctx:ctx_T, van:van_T):void
export declare function van_internals_<van_T extends VanShape>(ctx:Ctx):van_internals_T<van_T>
export interface van_internals_T<van_T extends VanShape> {
	protoOf:typeof Object.getPrototypeOf
	funcProto:Function
	objProto:Object
	elementProto:van__elementProto_T
	stateProto:Object
	plainValue(v:Exclude<ChildDom<van_T>, null|undefined>, k?:string):ChildDom<van_T>
}
export interface van__elementProto_T {
	render():string
	renderToBuf(buf:string[]):void
}
