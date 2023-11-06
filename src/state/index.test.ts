import { ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { reactive_derive__new, reactive_state__new } from '../index'
import { van__set } from '../van'
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
