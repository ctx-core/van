import { be_ } from '@ctx-core/object'
import { props_clean__tags__new } from '../props_clean/index.js'
import { van_ } from '../van/index.js'
export const S_ = be_('S_', ctx=>{
	let van = van_(ctx)
	let ns = 'http://www.w3.org/2000/svg'
	return van.props_clean ? van.tagsNS(ns) : props_clean__tags__new(van.tagsNS(ns))
})