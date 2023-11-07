import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { equal } from 'uvu/assert'
import type { PlateElement, PlateVan } from 'van-type-delegate'
import { H_, van__set } from '../index.js'
test('H_', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	equal(
		(H_<PlateVan>(ctx).div({ id: 'test-id', class: null, style:undefined }, 'Hello!') as PlateElement)!.render(),
		`<div id="test-id">Hello!</div>`)
})
test.run()
