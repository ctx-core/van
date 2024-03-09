import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { PlateElement, PlateVan } from 'van-type-delegate'
import { props_clean__van__new } from '../index.js'
test('props_clean__van__new|html|removes nullish props', ()=>{
	const props_clean__van = props_clean__van__new<PlateVan>(van)
	const div = props_clean__van.tags.div({
		id: 'test-el',
		class: undefined,
		onclick: null,
		onhover: 'onhover(this)'
	}, 'Content')! as PlateElement
	equal(div.render(), `<div id="test-el" onhover="onhover(this)">Content</div>`)
})
test('props_clean__van__new|svg|removes nullish props', ()=>{
	const props_clean__van = props_clean__van__new<PlateVan>(van)
	const S = props_clean__van.tags('http://www.w3.org/2000/svg')
	const div = S.text({
		id: 'test-el',
		class: undefined,
		onclick: null,
		onhover: 'onhover(this)'
	}, 'Content') as PlateElement
	equal(div.render(), `<text id="test-el" onhover="onhover(this)">Content</text>`)
})
test.run()
