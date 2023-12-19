import { be_, ctx__new, type Ctx_wide_T, ns_ctx__new } from 'ctx-core/be'
import type { Equal, Expect } from 'ctx-core/test'
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
	] = be_state_triple__new(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	})
	equal(num$_(ctx).val, 1)
	equal(num_(ctx), 1)
	num__set(ctx, 5)
	equal(num$_(ctx).val, 5)
	equal(num_(ctx), 5)
	equal(ctx.s[''].get(num$_), num$_(ctx))
})
test('be_state_triple__new|+id|+ns', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ns_ctx__new('test_ns')
	ctx1.s.test_ns.set('ns', true)
	const ctx = ns_ctx__new(ctx0, ctx1)
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return 1
	}, { id: 'num', ns: 'test_ns' })
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
	equal(ctx1.s.test_ns.get('num'), num$_(ctx))
})
test('be_state_triple__new|be', ()=>{
	const ctx0 = ctx__new()
	const ctx1 = ns_ctx__new('test_ns')
	ctx1.s.test_ns.set('ns', true)
	const ctx = ns_ctx__new(ctx0, ctx1)
	van__set(ctx, van)
	const [
		num$_,
		num_,
		num__set,
	] = be_state_triple__new(be_(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		const num$ = reactive_state__new(ctx, 1) as custom_T
		num$.custom = 'custom-val'
		return num$
	}, {
		id: 'num',
		ns: 'test_ns'
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
	equal(ctx1.s.test_ns.get('num'), num$_(ctx))
	equal(num$_(ctx).custom, 'custom-val')
	equal(num$_(ctx).custom, 'custom-val')
})
test.run()
type custom_T = State<number>&{ custom:string }
