import { be_, ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { State } from 'van-type-delegate'
import { be_state_triple__new, reactive_state__new, van__set } from '../index.js'
test('be_state_triple__new', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(()=>1)
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx.get(num$_), num$_(ctx))
})
test('be_state_triple__new|+id|+is_source', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new<
		number,
		custom_T
	>(()=>1, {
		id: 'num',
		is_source_: ctx=>!!ctx.get('source')
	})
	equal(num$_([ctx__new(), ctx]).val, 1)
	equal(num_([ctx__new(), ctx]), 1)
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_([ctx__new(), ctx]).val, 5)
	equal(num_([ctx__new(), ctx]), 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx0.get('num'), undefined)
	equal(ctx1.get('num'), num$_(ctx))
})
test('be_state_triple__new|be', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new<number, custom_T>(be_(ctx=>{
		const num$ = reactive_state__new(ctx, 1) as custom_T
		num$.custom = 'custom-val'
		return num$
	}, {
		id: 'num',
		is_source_: ctx=>!!ctx.get('source')
	}))
	equal(num$_([ctx__new(), ctx]).val, 1)
	equal(num_([ctx__new(), ctx]), 1)
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	equal(num$_([ctx__new(), ctx]).custom, 'custom-val')
	equal(num$_(ctx).custom, 'custom-val')
	num__set(ctx, 5)
	equal(num$_([ctx__new(), ctx]).val, 5)
	equal(num_([ctx__new(), ctx]), 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx0.get('num'), undefined)
	equal(ctx1.get('num'), num$_(ctx))
	equal(num$_(ctx).custom, 'custom-val')
	equal(num$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = State<number>&{ custom:string }
