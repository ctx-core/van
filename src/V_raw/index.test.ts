import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { equal } from 'uvu/assert'
import { van__set } from '../van'
import { V_raw } from '../index'
test('V_raw', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	equal(V_raw(ctx, '<div><em>Hello!</em></div>').render(), '<div><em>Hello!</em></div>')
})
test.run()
