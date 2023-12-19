import { ctx__new } from 'ctx-core/be'
import { JSDOM } from 'jsdom'
import plate_van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { CoreVan, PlateElement } from 'van-type-delegate'
import { V_fragment } from '../index.js'
import { van__set } from '../van/index.js'
test('V_fragment|server', ()=>{
	const ctx = ctx__new()
	van__set(ctx, plate_van)
	const H = plate_van.tags
	equal((V_fragment({ ctx }, H.div(H.em('hello!'))) as PlateElement).render(),
		`<div><em>hello!</em></div>`)
})
test('V_fragment|browser', async ()=>{
	const jsdom = new JSDOM()
	const { window, document } = jsdom.window
	const prev__window = globalThis['window']
	globalThis['window'] = window as any
	const prev__document = globalThis['document']
	globalThis['document'] = document
	const mini_van = await import('mini-van-plate').then(mod=>mod.default)
	try {
		const ctx = ctx__new()
		van__set(ctx, mini_van)
		const H = mini_van.tags
		const children = [H.div(H.em('hello!'))]
		const fragment = V_fragment<CoreVan>({ ctx }, ...children)
		document.documentElement.appendChild(fragment)
		equal(jsdom.serialize(), `<html><head></head><body></body><div><em>hello!</em></div></html>`)
	} finally {
		globalThis['window'] = prev__window
		globalThis['document'] = prev__document
	}
})
test.run()
