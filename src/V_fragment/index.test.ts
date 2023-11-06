import { ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { van__set } from '../van'
import { V_fragment } from '../index'
test('V_fragment', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const H = van.tags
	equal(V_fragment(ctx, H.div(H.em('hello!'))).render(),
		`<div><em>hello!</em></div>`)
})
test.run()
