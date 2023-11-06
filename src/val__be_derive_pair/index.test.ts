import { ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { reactive_state__new, val__be_derive_pair__new, van_, van__set } from '../index'
test('val__be_derive_pair__new|-id|-be_params', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const state$ = reactive_state__new(ctx, 1)
	const [
		derive__num$_,
		derive__num_,
	] = val__be_derive_pair__new(van_, ()=>state$.val + 2)
	equal(derive__num$_(ctx).val, 3)
	equal(derive__num_(ctx), 3)
	state$.val = 11
	equal(derive__num$_(ctx).val, 13)
	equal(derive__num_(ctx), 13)
})
test.run()
