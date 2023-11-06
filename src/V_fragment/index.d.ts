import type { Ctx } from '@ctx-core/object'
import type { ChildDom, PlateElement, PlateVan, VanShape } from 'van-type-delegate'
export function V_fragment<
	V extends VanShape,
	R extends (ChildDom<V>|V_fragment__return_T<V>) = V_fragment__return_T<V>
>(
	props_OR_ctx:{ ctx:Ctx }|Ctx,
	..._children:ChildDom<V>[]
):R
type V_fragment__return_T<V extends VanShape> = V extends PlateVan ? PlateElement : DocumentFragment
