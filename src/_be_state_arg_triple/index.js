/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('@ctx-core/object').be__params_T}be__params_T */
/** @typedef {import('./_be_state_arg_triple_.d.ts')._be_state_arg_triple_T} */
/** @typedef {import('./_be_state_arg_triple_.d.ts')._be_state_arg_triple__arg_a_T}_be_state_arg_triple__arg_a_T */
/**
 * @param {_be_state_arg_triple__arg_a_T}arg_a
 * @returns {_be_state_arg_triple_T}
 * @private
 */
export function _be_state_arg_triple__new(...arg_a) {
	/** @type {string|null|undefined} */
	let id
	/** @type {((ctx:Ctx)=>V)|undefined} */
	let val__new
	/** @type {be__params_T|undefined} */
	let be__params
	if (arg_a.length === 3) {
		[id, val__new, be__params] = arg_a
	} else if (arg_a.length === 2) {
		if (typeof arg_a[0] === 'function') {
			val__new = arg_a[0]
			be__params = arg_a[1]
		} else {
			id = arg_a[0]
			if (typeof arg_a[1] === 'function') {
				val__new = arg_a[1]
			} else {
				be__params = arg_a[1]
			}
		}
	} else if (arg_a.length === 1) {
		if (typeof arg_a[0] === 'function') {
			val__new = arg_a[0]
		} else if (typeof arg_a[0] === 'object') {
			be__params = arg_a[0]
		} else {
			id = arg_a[0]
		}
	}
	return [id, val__new, be__params]
}
