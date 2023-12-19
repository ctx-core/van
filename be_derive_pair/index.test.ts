import { be_, ctx__new, type Ctx_wide_T, ns_ctx__new } from 'ctx-core/be'
import type { Equal, Expect } from 'ctx-core/test'
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
	] = be_derive_pair__new(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<''>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return base_(ctx) + 1
	})
	equal(num$_(ctx).val, 2)
	equal(num_(ctx), 2)
	equal(ctx.s[''].get(num$_), num$_(ctx))
	base__set(ctx, 2)
	equal(num$_(ctx).val, 3)
	equal(num_(ctx), 3)
	equal(ctx.s[''].get(num$_), num$_(ctx))
})
test('be_derive_pair__new|+id|+ns', ()=>{
	const root_ctx = ctx__new()
	const ctx = ns_ctx__new('test_ns', root_ctx)
	van__set(ctx, van)
	const [
		,
		base_,
		base__set
	] = be_state_triple__new(()=>1, {
		ns: 'test_ns'
	})
	const [
		num$_,
		num_,
	] = be_derive_pair__new(ctx=>{
		/* eslint-disable @typescript-eslint/no-unused-vars */
		type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
		/* eslint-enable @typescript-eslint/no-unused-vars */
		return base_(ctx) + 1
	}, { id: 'num', ns: 'test_ns' })
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 2)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(num$_(ctx).val, 2)
	equal(num_(ctx), 2)
	equal(ctx.s.test_ns.get('num'), num$_(ctx))
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 3)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(num$_(ctx).val, 3)
	equal(num_(ctx), 3)
	equal(ctx.s.test_ns.get('num'), num$_(ctx))
})
test('be_derive_pair__new|be', ()=>{
	const root_ctx = ctx__new()
	const ctx = ns_ctx__new('test_ns', root_ctx)
	van__set(ctx, van)
	const [
		,
		base_,
		base__set
	] = be_state_triple__new(()=>1, {
		ns: 'test_ns'
	})
	const [
		num$_,
		num_,
	] = be_derive_pair__new(
		be_(ctx=>{
			/* eslint-disable @typescript-eslint/no-unused-vars */
			type test_ctx = Expect<Equal<typeof ctx, Ctx_wide_T<'test_ns'>>>
			/* eslint-enable @typescript-eslint/no-unused-vars */
			const num$ = reactive_derive__new(ctx, ()=>
				base_(ctx) + 1)
			num$.custom = 'custom-val'
			return num$
		}, {
			id: 'num',
			ns: 'test_ns'
		}))
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 2)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 2)
	equal(num$_(ctx).val, 2)
	equal(num_(ctx), 2)
	equal(ctx.s.test_ns.get('num'), num$_(ctx))
	base__set(ctx, 2)
	equal(base_(ctx), 2)
	equal(num$_(ns_ctx__new(ctx__new(), ctx)).val, 3)
	equal(num_(ns_ctx__new(ctx__new(), ctx)), 3)
	equal(num$_(ctx).val, 3)
	equal(num_(ctx), 3)
	equal(ctx.s.test_ns.get('num'), num$_(ctx))
})
test.run()
