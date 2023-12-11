import { ctx__new } from '@ctx-core/object'
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { van_, van__set, van_internals_ } from '../index.js'
test('van_+van__set', ()=>{
	const ctx = ctx__new()
	equal(van_(ctx), null)
	van__set(ctx, van)
	equal(van_(ctx), van)
})
test('van_internals_', ()=>{
	const ctx = ctx__new()
	equal(van_(ctx), null)
	van__set(ctx, van)
	equal(ctx.has(van_internals_.id), false)
	equal(van_internals_(ctx), {
		protoOf: Object.getPrototypeOf,
		funcProto: Object.getPrototypeOf(()=>{
		}),
		objProto: Object.getPrototypeOf({}),
		elementProto: Object.getPrototypeOf(van.tags.div()),
		stateProto: Object.getPrototypeOf(van.state(null)),
		plainValue: van_internals_(ctx).plainValue,
	})
	equal(ctx.has(van_internals_.id), true)
	const num$ = van.state(1)
	equal(van_internals_(ctx).plainValue(num$), 1)
	const div = van.tags.div()
	equal(van_internals_(ctx).plainValue(div), div)
	equal(van_internals_(ctx).plainValue(()=>'el-id', 'id'), 'el-id')
	const non_binding_fn = ()=>true
	equal(van_internals_(ctx).plainValue(non_binding_fn, 'onclick'), non_binding_fn)
	const binding_fn = (()=>true) as (()=>boolean)&{ _isBindingFunc:boolean }
	binding_fn._isBindingFunc = true
	equal(van_internals_(ctx).plainValue(binding_fn, 'onclick'), true)
	equal(van_internals_(ctx).plainValue('el-id', 'id'), 'el-id')
	van__set(ctx, van)
	equal(ctx.has(van_internals_.id), false)
	equal(van_internals_(ctx), {
		protoOf: Object.getPrototypeOf,
		funcProto: Object.getPrototypeOf(()=>{
		}),
		objProto: Object.getPrototypeOf({}),
		elementProto: Object.getPrototypeOf(van.tags.div()),
		stateProto: Object.getPrototypeOf(van.state(null)),
		plainValue: van_internals_(ctx).plainValue,
	})
	equal(ctx.has(van_internals_.id), true)
})
test.run()
