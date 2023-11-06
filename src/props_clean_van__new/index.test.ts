// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { props_clean_van__new } from '../index.js'
test('props_clean_van__new|removes nullish props', ()=>{
	const props_clean_van = props_clean_van__new(van)
	const div = props_clean_van.tags.div({
		id: 'test-el',
		class: undefined,
		onclick: null,
		onhover: 'onhover(this)'
	}, 'Content')
	equal(div.render(), `<div id="test-el" onhover="onhover(this)">Content</div>`)
})
test.run()