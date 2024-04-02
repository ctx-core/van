import { ctx__new, ns_ctx__new, ns_id_be_, type wide_ctx_T } from 'ctx-core/be'
import type { Equal, Expect } from 'ctx-core/test'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { State } from 'van-type-delegate'
import {
	be_state_triple__new,
	id_be_state_triple__new,
	ns_be_state_triple__new,
	ns_id_be_state_triple__new,
	reactive_state__new,
	van__set
} from '../index.js'
test('be_state_triple__new', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	})
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx.s[''].get(num$_)![0], num$_(ctx))
})
test('id_be_state_triple__new', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = id_be_state_triple__new(
		'num',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<''>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		})
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx.s[''].get('num')![0], num$_(ctx))
})
test('ns_be_state_triple__new', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ns_ctx__new('test_ns')
	const ctx = ns_ctx__new(ctx0, ctx1)
	van__set(ctx, van)
	equal(ctx0.s[''].size, 1)
	const [
		num$_,
		num_,
		num__set,
	] = ns_be_state_triple__new(
		'test_ns',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		})
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 1)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 5)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx0.s[''].size, 1)
	equal('test_ns' in ctx0.s, false)
	equal(ctx1.s.test_ns.get(num$_)![0], num$_(ctx))
})
test('ns_id_be_state_triple__new', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ns_ctx__new('test_ns')
	const ctx = ns_ctx__new(ctx0, ctx1)
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = ns_id_be_state_triple__new(
		'test_ns',
		'num',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			return 1
		})
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 1)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 5)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx0.s[''].get('num'), undefined)
	equal('test_ns' in ctx0.s, false)
	equal(ctx1.s.test_ns.get('num')![0], num$_(ctx))
})
test('be_state_triple__new|ns_id_be', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ns_ctx__new('test_ns')
	const ctx = ns_ctx__new(ctx0, ctx1)
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(ns_id_be_(
		'test_ns',
		'num',
		ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, wide_ctx_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			const num$ = reactive_state__new(ctx, 1) as custom_T
			num$.custom = 'custom-val'
			return num$
		}))
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 1)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 1)
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).custom, 'custom-val')
	equal(num$_(ctx).custom, 'custom-val')
	num__set(ctx, 5)
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 5)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx0.s[''].get('num'), undefined)
	equal('test_ns' in ctx0.s, false)
	equal(ctx1.s.test_ns.get('num')![0], num$_(ctx))
	equal(num$_(ctx).custom, 'custom-val')
	equal(num$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = State<number>&{ custom:string }
