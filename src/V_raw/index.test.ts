import { ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { PlateElement } from 'van-type-delegate'
import { V_raw } from '../index.js'
import { van__set } from '../van/index.js'
test('V_raw', ()=>{
	const ctx = ctx__new()
	van__set(ctx, van)
	equal((V_raw(ctx, '<div><em>Hello!</em></div>') as PlateElement).render(), '<div><em>Hello!</em></div>')
})
test.run()
