import { ctx__new } from 'ctx-core/be'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import { vanx_, vanx__set, type vanx_T } from '../index.js'
test('vanx_+vanx__set', ()=>{
	const ctx = ctx__new()
	const vanx = {} as vanx_T
	equal(vanx_(ctx), null)
	vanx__set(ctx, vanx)
	equal(vanx_(ctx), vanx)
})
test.run()
