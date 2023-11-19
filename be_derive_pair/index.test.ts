import { ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_derive_pair__new, be_state_triple__new, van__set } from '../index.js'
test('be_derive_pair__new', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		base$_,
		base_,
		base__set
	] = be_state_triple__new(()=>1)
	const [
		num$_,
		num_
	] = be_derive_pair__new(ctx=>base_(ctx) + 1)
	equal(num$_(ctx).val, 2)
	equal(num_(ctx), 2)
	equal(ctx.get(num$_), num$_(ctx))
	base__set(ctx, 2)
	equal(num$_(ctx).val, 3)
	equal(num_(ctx), 3)
	equal(ctx.get(num$_), num$_(ctx))
})
test('be_derive_pair__new|+id|+is_source_|+oninit', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	van__set(ctx, van)
	const [
		num$_,
		num_,
	] = be_derive_pair__new(()=>1)
		.config({
			id: 'num',
			is_source_: ctx=>!!ctx.get('source')
		})
		.oninit((_ctx, num$)=>{
			equal(_ctx, ctx)
			num$.custom = 'custom-val'
		})
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	equal(ctx0.get('num'), undefined)
	equal(ctx1.get('num'), num$_(ctx))
})
test.run()
