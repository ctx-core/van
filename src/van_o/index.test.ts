import { ctx__new } from '@ctx-core/object'
// @ts-ignore
import van from 'mini-van-plate/van-plate'
import { test } from 'uvu'
import { equal } from 'uvu/assert'
import type { PlateVan } from 'van-type-delegate'
import { props_clean_van__new, Van_w_undefined } from '../props_clean_van__new'
import { van_o__new } from './index'
test('van_o__new|-id|-be__params', ()=>{
	let props_clean_van:Van_w_undefined<PlateVan>
	const {
		van_,
		van__set,
		van_internals_,
		val__be_derive_pair__new,
		val__be_state_triple__new
	} = van_o__new(v=>props_clean_van = props_clean_van__new(v))
	const ctx = ctx__new()
	equal(van_(ctx), undefined)
	equal(props_clean_van, undefined)
	van__set(ctx, van)
	equal(props_clean_van.tags.div({ id: null }).render(), '<div></div>')
	equal(van_(ctx), props_clean_van)
	const van_internals = van_internals_(ctx)
	const { protoOf } = van_internals
	equal(protoOf, Object.getPrototypeOf)
	equal(van_internals.funcProto, protoOf(van_o__new))
	equal(van_internals.objProto, protoOf({}))
	equal(van_internals.elementProto, protoOf(van.tags.div()))
	const num$ = van.state(1)
	equal(van_internals.stateProto, protoOf(num$))
	equal(van_internals.plainValue(num$, 'count'), 1)
	equal(van_internals.plainValue(()=>'id-123', 'id'), 'id-123')
	const onclick = ()=>'onclick-handler'
	equal(van_internals.plainValue(onclick, 'onclick'), onclick)
	const [
		state__num$_,
		state__num_,
		state__num__set,
	] = val__be_state_triple__new(()=>1)
	equal(state__num$_(ctx).val, 1)
	equal(state__num_(ctx), 1)
	state__num__set(ctx, 2)
	equal(state__num$_(ctx).val, 2)
	equal(state__num_(ctx), 2)
	const [

	] = val__be_derive_pair__new(()=>state__num_(ctx) + 1)
})
test.run()