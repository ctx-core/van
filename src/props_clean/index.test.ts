// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { props_clean__van__new } from '../index.js'
test('props_clean__van__new|html|removes nullish props', ()=>{
	const props_clean__van = props_clean__van__new(van)
	const div = props_clean__van.tags.div({
		id: 'test-el',
		class: undefined,
		onclick: null,
		onhover: 'onhover(this)'
	}, 'Content')
	equal(div.render(), `<div id="test-el" onhover="onhover(this)">Content</div>`)
})
test('props_clean__van__new|svg|removes nullish props', ()=>{
	const props_clean__van = props_clean__van__new(van)
	const div = props_clean__van.tagsNS('http://www.w3.org/2000/svg').text({
		id: 'test-el',
		class: undefined,
		onclick: null,
		onhover: 'onhover(this)'
	}, 'Content')
	equal(div.render(), `<text id="test-el" onhover="onhover(this)">Content</text>`)
})
test.run()
