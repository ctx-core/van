import type { ctx_T } from 'ctx-core/be'
import type { ChildDom, PlateElement, PlateVan, VanShape } from 'van-type-delegate'
export function V_raw<
	V extends VanShape,
	R extends (ChildDom<V>|V_raw__return_T<V>) = V_raw__return_T<V>
>(
	props_OR_ctx:{ ctx:ctx_T }|ctx_T,
	html:string
):R
type V_raw__return_T<V extends VanShape> = V extends PlateVan ? PlateElement : DocumentFragment
