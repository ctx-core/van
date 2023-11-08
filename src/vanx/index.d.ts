import type { Be, Ctx } from '@ctx-core/object'
import type { State } from 'van-type-delegate'
import type { DeReactive, Reactive, ReactiveObj, ReplaceFunc, StateOf, ValueType } from 'vanjs-ext'
export declare const vanx_: Be<vanx_T|null>
export declare function vanx__set(ctx:Ctx, vanx:vanx_T):void
export interface vanx_T {
	calc:<R>(f:()=>R)=>R
	reactive:<T extends object>(obj:T)=>Reactive<T>
	stateFields:<T extends ReactiveObj>(obj:T)=>StateOf<DeReactive<T>>
	list:<T extends ReactiveObj, ElementType extends Element>
	(containerFunc:()=>ElementType, items:T,
		itemFunc:(s:State<ValueType<T>>, deleter:()=>void)=>Node)=>ElementType
	replace:<T extends ReactiveObj>(items:T, f:ReplaceFunc<T>)=>void
}
