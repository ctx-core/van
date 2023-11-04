/// <reference lib="dom" />
import type { ChildDom, CoreVan, MiniVan, PlateVan, Props, TagFunc, Tags, VanShape } from 'van-type-delegate'
export declare function props_clean_van__new<V extends VanShape>(van:V):Van_w_undefined<V>
export type Props_w_undefined = Record<string, Props[string]|undefined>
export type TagFunc_w_undefined<V extends VanShape> = (
	first?:Props|ChildDom<V>|Props_w_undefined,
	...rest:readonly ChildDom<V>[]
)=>ReturnType<TagFunc<V>>
export type Tags_w_undefined<V extends VanShape> = Record<string, TagFunc_w_undefined<V>>
export type TagNS_w_undefined<V extends VanShape> =
	(namespaceURI:string)=>Readonly<Record<string, TagFunc_w_undefined<V>>>
export type Van_w_undefined<V extends VanShape> = V&{
	tags:Tags_w_undefined<V>
	tagsNS:TagNS_w_undefined<V>
}
export type VanShape_w_undefined =
	|VanShape
	|Van_w_undefined<MiniVan>
	|Van_w_undefined<PlateVan>
	|Van_w_undefined<CoreVan>
