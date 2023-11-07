import { be_, type Ctx, ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { PlateElement, PlateVan, Tags, VanShape } from 'van-type-delegate'
import { props_clean__van__new, type Tags_props_clean, van_, van__set } from '../index.js'
test('props_clean__van__new|removes nullish props', ()=>{
	const props_clean__van = props_clean__van__new(van)
	const div = props_clean__van.tags.div({
		id: 'test-el',
		class: undefined,
		onclick: null,
		onhover: 'onhover(this)'
	}, 'Content')
	equal(div.render(), `<div id="test-el" onhover="onhover(this)">Content</div>`)
})
const _H_ = be_('H_',
	ctx=>
		van_(ctx).tags as Tags<VanShape>)
function H_<van_T extends VanShape>(ctx:Ctx) {
	return _H_(ctx) as Tags_props_clean<van_T>
}
test('VanShape_w_undefined', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const H:Tags_props_clean<PlateVan> = H_<PlateVan>(ctx)
	equal((H.div() as PlateElement)!.render(), '<div></div>')
})
test.run()
