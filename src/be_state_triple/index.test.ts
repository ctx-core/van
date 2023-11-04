import { type Ctx, ctx__new } from '@ctx-core/object'
import { test } from 'uvu'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { equal } from 'uvu/assert'
import type { State } from 'van-type-delegate'
import { be_state_triple__new, type be_state_triple_T } from '../index.js'
test('be_state_triple__new|-id|-be__params', ()=>{
	const ctx = ctx__new()
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(()=>van.state(1))
	num__test(ctx, num$_, num_, num__set)
	equal(ctx.get(num$_), num$_(ctx))
})
test('be_state_triple__new|-id|+be__params', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(()=>van.state(1), {
		is_source_: ctx=>!!ctx.get('source')
	})
	num__test(ctx, num$_, num_, num__set)
	equal(ctx0.get(num$_), undefined)
	equal(ctx1.get(num$_), num$_(ctx))
})
test('be_state_triple__new|+id|-be__params', ()=>{
	const ctx = ctx__new()
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new('num', ()=>van.state(1))
	num__test(ctx, num$_, num_, num__set)
	equal(ctx.get('num'), num$_(ctx))
})
test('be_state_triple__new|+id|+be__params', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ctx__new()
	ctx1.set('source', true)
	const ctx = [ctx0, ctx1]
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new('num', ()=>van.state(1), {
		is_source_: ctx=>!!ctx.get('source')
	})
	num__test(ctx, num$_, num_, num__set)
	equal(ctx0.get('num'), undefined)
	equal(ctx1.get('num'), num$_(ctx))
})
function num__test(ctx:Ctx, ...arg_a:be_state_triple_T<State<number>>) {
  const [num$_, num_, num__set] = arg_a
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
}
test.run()