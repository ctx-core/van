import { ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { van_, van__set } from '../index.js'
test('van_+van__set', ()=>{
	const ctx = ctx__new()
	equal(van_(ctx), null)
	van__set(ctx, van)
	equal(van_(ctx), van)
})
test.run()