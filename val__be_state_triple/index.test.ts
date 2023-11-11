import { ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { val__be_derive_pair__new, val__be_state_triple__new, van__set } from '../index.js'
test('val__be_state_triple|-id|-be_params', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		state$_,
		state_,
		state__set,
	] = val__be_state_triple__new(()=>1)
	equal(state$_(ctx).val, 1)
	equal(state_(ctx), 1)
	const [
		derive__num$_,
		derive__num_,
	] = val__be_derive_pair__new(ctx=>state_(ctx) + 2)
	equal(derive__num$_(ctx).val, 3)
	equal(derive__num_(ctx), 3)
	state__set(ctx, 11)
	equal(state$_(ctx).val, 11)
	equal(state_(ctx), 11)
	equal(derive__num$_(ctx).val, 13)
	equal(derive__num_(ctx), 13)
})
test.run()
