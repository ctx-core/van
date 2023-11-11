import { type Ctx, ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { State } from 'van-type-delegate'
import { be_derive_pair__new, type be_derive_pair_T } from '../index.js'
test('be_derive_pair__new|-id|-be__params', ()=>{
	const ctx = ctx__new()
	const [
		num$_,
		num_
	] = be_derive_pair__new(()=>van.derive(()=>1))
	num__test(ctx, num$_, num_)
	equal(ctx.get(num$_), num$_(ctx))
})
test('be_derive_pair__new|-id|+be__params', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	const [
		num$_,
		num_
	] = be_derive_pair__new(()=>van.derive(()=>1), {
		is_source_: ctx=>!!ctx.get('source')
	})
	num__test(ctx, num$_, num_)
	equal(ctx0.get(num$_), undefined)
	equal(ctx1.get(num$_), num$_(ctx))
})
test('be_derive_pair__new|+id|-be__params', ()=>{
	const ctx = ctx__new()
	const [
		num$_,
		num_,
	] = be_derive_pair__new('num', ()=>van.state(1))
	num__test(ctx, num$_, num_)
	equal(ctx.get('num'), num$_(ctx))
})
test('be_derive_pair__new|+id|+be__params', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	const [
		num$_,
		num_,
	] = be_derive_pair__new('num', ()=>van.state(1), {
		is_source_: ctx=>!!ctx.get('source')
	})
	num__test(ctx, num$_, num_)
	equal(ctx0.get('num'), undefined)
	equal(ctx1.get('num'), num$_(ctx))
})
function num__test(ctx:Ctx, ...arg_a:be_derive_pair_T<State<number>>) {
	const [num$_, num_] = arg_a
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
}
test.run()
