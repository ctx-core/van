import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { equal } from 'uvu/assert'
import { van_, van__set } from '../index'
test('van_+van__set', ()=>{
	const ctx = ctx__new()
	equal(van_(ctx), null)
	van__set(ctx, van)
	equal(van_(ctx), van)
})
test.run()