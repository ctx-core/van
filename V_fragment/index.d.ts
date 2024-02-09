import type { ctx_T } from 'ctx-core/be'
import type { ChildDom, PlateElement, PlateVan, VanShape } from 'van-type-delegate'
export function V_fragment<
	V extends VanShape,
	R extends (ChildDom<V>|V_fragment__return_T<V>) = V_fragment__return_T<V>
>(
	props_OR_ctx:{ ctx:ctx_T }|ctx_T,
	..._children:ChildDom<V>[]
):R
type V_fragment__return_T<V extends VanShape> = V extends PlateVan ? PlateElement : DocumentFragment
