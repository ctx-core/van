/// <reference lib="dom" />
import type { ChildDom, CoreVan, MiniVan, PlateVan, Props, TagFunc, Tags, VanShape } from 'van-type-delegate'
export declare function props_clean__van__new<van_T extends VanShape>(van:van_T):Van_props_clean<van_T>
export declare function props_clean__tags__new<van_T extends VanShape>(tags:Tags<van_T>):Tags_props_clean<van_T>
export type Props_props_clean = Record<string, Props[string]|undefined>
export type TagFunc_props_clean<van_T extends VanShape> = (
	first?:Props|ChildDom<van_T>|Props_props_clean,
	...rest:readonly ChildDom<van_T>[]
)=>ReturnType<TagFunc<van_T>>
export type Tags_props_clean<van_T extends VanShape> = Record<string, TagFunc_props_clean<van_T>>
export type TagNS_props_clean<van_T extends VanShape> =
	(namespaceURI:string)=>Readonly<Record<string, TagFunc_props_clean<van_T>>>
export type Van_props_clean<van_T extends VanShape> = van_T&{
	tags:Tags_props_clean<van_T>
	tagsNS:TagNS_props_clean<van_T>
}
export type VanShape_props_clean<van_T extends VanShape> =
	van_T extends CoreVan
		? Van_props_clean<CoreVan>
		: van_T extends MiniVan
		? Van_props_clean<MiniVan>
		: van_T extends PlateVan
			? Van_props_clean<PlateVan>
			: Van_props_clean<VanShape>
