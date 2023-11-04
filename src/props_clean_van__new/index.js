/// <reference lib="dom" />
const protoOf = Object.getPrototypeOf
const objProto = protoOf({})
/** @typedef {import('van-type-delegate').ChildDom}ChildDom */
/** @typedef {import('van-type-delegate').Props}Props */
/** @typedef {import('van-type-delegate').TagFunc}TagFunc */
/** @typedef {import('van-type-delegate').Tags}Tags */
/** @typedef {import('van-type-delegate').VanShape}VanShape */
/** @typedef {import('./index.d.ts').Van_w_undefined}Van_w_undefined */
/**
 * @param {VanShape}van
 * @returns {VanShape_w_undefined}
 */
export function props_clean_van__new(van) {
	/** @type {Proxy<Tags<VanShape>>} */
	let tags = new Proxy(van.tags, {
		get(target, p, receiver) {
			/** @type {TagFunc} */
			const tag = Reflect.get(target, p, receiver)
			if (!tag) return tag
			/** @type {TagFunc} */
			return ((...args)=>{
				/** @type {[Props, ...ChildDom<V>[]} */
				let [
					props,
					...children
				] = protoOf(args[0] ?? 0) === objProto ? args : [{}, ...args]
				const clean_props = props__clean(props)
				return tag(clean_props, ...children)
			})
		}
	})
	/** @type {Van_w_undefined} */
	return new Proxy(van, {
		get(target, p, receiver) {
			if (p === 'tags') return tags
			return Reflect.get(target, p, receiver)
		}
	})
}
/**
 * @param {Props}props
 * @returns {Props}
 */
function props__clean(props) {
	for (const key of Object.keys(props)) {
		if (props[key] == null) delete props[key]
	}
	return props
}
