import { ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { equal } from 'uvu/assert'
import { van__set } from '../van'
import { reactive_derive__new, reactive_state__new } from '../index'
test('reactive_state__new+reactive_derive__new', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const state$ = reactive_state__new(ctx, 1)
	const derive$ = reactive_derive__new(ctx, ()=>state$.val + 2)
	equal(derive$.val, 3)
	state$.val = 11
	equal(derive$.val, 13)
})
test.run()
