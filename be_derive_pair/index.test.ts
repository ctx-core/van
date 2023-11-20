import { be_, ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { be_derive_pair__new, be_state_triple__new, reactive_derive__new, van__set } from '../index.js'
test('be_derive_pair__new', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		,
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
test('be_derive_pair__new|+id|+is_source_', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		,
		base_,
		base__set
	] = be_state_triple__new(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		num$_,
		num_,
	] = be_derive_pair__new(ctx=>
		base_(ctx)+1,
	{ id: 'num', is_source_: map_ctx=>map_ctx === ctx })
	equal(num$_([ctx__new(), ctx]).val, 2)
	equal(num_([ctx__new(), ctx]), 2)
	equal(num$_(ctx).val, 2)
	equal(num_(ctx), 2)
	equal(ctx.get('num'), num$_(ctx))
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(num$_([ctx__new(), ctx]).val, 3)
	equal(num_([ctx__new(), ctx]), 3)
	equal(num$_(ctx).val, 3)
	equal(num_(ctx), 3)
	equal(ctx.get('num'), num$_(ctx))
})
test('be_derive_pair__new|be', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		,
		base_,
		base__set
	] = be_state_triple__new(()=>1, {
		is_source_: map_ctx=>map_ctx === ctx
	})
	const [
		num$_,
		num_,
	] = be_derive_pair__new(be_(ctx=>{
		const num$ = reactive_derive__new(ctx, ()=>base_(ctx)+1)
		num$.custom = 'custom-val'
		return num$
	}, {
		id: 'num',
		is_source_: map_ctx=>map_ctx === ctx
	}))
	equal(num$_([ctx__new(), ctx]).val, 2)
	equal(num_([ctx__new(), ctx]), 2)
	equal(num$_(ctx).val, 2)
	equal(num_(ctx), 2)
	equal(ctx.get('num'), num$_(ctx))
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(num$_([ctx__new(), ctx]).val, 3)
	equal(num_([ctx__new(), ctx]), 3)
	equal(num$_(ctx).val, 3)
	equal(num_(ctx), 3)
	equal(ctx.get('num'), num$_(ctx))
})
test.run()
