import { be_, be__set, ctx__set } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('van-type-delegate').VanShape}VanShape */
/** @typedef {import('./index.d.ts').van_internals_T}van_internals_T */
/** @typedef {import('./index.d.ts').van_middleware_T}van_middleware_T */
/** @typedef {import('./index.d.ts').van_pair_T}van_pair_T */
/** @type {Be<[VanShape|null]>} */
export let van_ = be_('van_', null)
/**
 * @param {Ctx}ctx
 * @param {VanShape}van
 */
export function van__set(ctx, van) {
	ctx__set(ctx, van_, van)
	let protoOf = Object.getPrototypeOf, funcProto = protoOf(protoOf), objProto = protoOf({})
	let stateProto = protoOf(van.state())
	let van_internals = {
		protoOf,
		funcProto,
		objProto,
		elementProto: protoOf(van.tags.div()),
		stateProto,
		/**
		 * @param {Exclude<ChildDom, null|undefined>}v
		 * @param {string}[k]
		 */
		plainValue(v, k) {
			let protoOfV = protoOf(v ?? 0)
			return protoOfV === stateProto
				? (/** @type {State} */v).val
				: protoOfV === funcProto && (!k?.startsWith('on') || v._isBindingFunc)
					? v(undefined)
					: v
		}
	}
	ctx__set(ctx, van_internals_, van_internals)
}
/**
 * @param {Ctx}ctx
 * @returns {van_internals_T}
 * @private
 */
export let van_internals_ = be_('van_internals_', ctx=>null)
