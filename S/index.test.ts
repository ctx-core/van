import { ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { PlateElement, PlateVan } from 'van-type-delegate'
import { S_, van__set } from '../index.js'
test('S_', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	equal(
		(S_<PlateVan>(ctx).text({ id: 'test-id', class: null, style: undefined }, 'Hello!') as PlateElement)!.render(),
		`<text id="test-id">Hello!</text>`)
})
test.run()
