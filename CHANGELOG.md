# @ctx-core/vanjs

## 2.3.1

### Patch Changes

- tsx: ^4.0.0 -> ^4.1.2
- Updated dependencies
- Updated dependencies
  - @ctx-core/array@27.0.1
  - @ctx-core/object@30.1.1
  - @ctx-core/dom@15.1.1
  - van-type-delegate@1.2.1

## 2.3.0

### Minor Changes

- fix:types package.json exports
- tsconfig:

      "module": "ESNext"
      "moduleResolution": "nodenext"
      "target": "ESNext"

### Patch Changes

- package.json: - "svelte": "./src/index.js"
- Updated dependencies
- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/array@27.0.0
  - @ctx-core/dom@15.1.0
  - @ctx-core/object@30.1.0
  - van-type-delegate@1.2.0

## 2.2.1

### Patch Changes

- Updated dependencies
  - @ctx-core/dom@15.0.7

## 2.2.0

### Minor Changes

- van*internals*: auto-memoize

### Patch Changes

- Updated dependencies
  - @ctx-core/object@30.0.0
  - @ctx-core/array@26.15.9
  - @ctx-core/dom@15.0.6

## 2.1.4

### Patch Changes

- Updated dependencies
  - @ctx-core/dom@15.0.5

## 2.1.3

### Patch Changes

- @ctx-core/object: ^29.0.0 -> ^29.1.0
- Updated dependencies
  - @ctx-core/array@26.15.8
  - @ctx-core/dom@15.0.4

## 2.1.2

### Patch Changes

- vanx: use ∋ vanjs-ext types

## 2.1.1

### Patch Changes

- dependencies:

      - ∋ vanjs-core
      - ∋ vanjs-ext

## 2.1.0

### Minor Changes

- props_clean**van**new: + props_clean
- props_clean**van**new: tagsNS: fix: implementation return type TagNS_props_clean
- - props_clean

### Patch Changes

- H*,S*: when van\_(ctx) props_clean is truthy: call .tags,.tagsNS directly

## 2.0.1

### Patch Changes

- @types/jsdom: ^21.1.4 -> ^21.1.5

## 2.0.0

### Major Changes

- props_clean_van**new→props_clean**van\_\_new
- type name changes:

      Props_w_undefined→Props_props_clean
      TagFunc_w_undefined→TagFunc_props_clean
      Tags_w_undefined→Tags_props_clean
      TagNS_w_undefined→TagNS_props_clean
      Van_w_undefined→Van_props_clean
      VanShape_w_undefined→VanShape_props_clean

### Minor Changes

- - props_clean**tags**new
- S\_
- - vanx\_,vanx\_\_set,vanx_T
- - H\_

## 1.7.2

### Patch Changes

- V*fragment: browser\_\_fragment*: fix: children reference
- Updated dependencies
  - @ctx-core/dom@15.0.3

## 1.7.1

### Patch Changes

- V*fragment: window\_\_fragment*: fix: scope to ctx

## 1.7.0

### Minor Changes

- van\_: generics: van_T extends VanShape: default type is VanShape

### Patch Changes

- V*fragment: browser: render elements: fix: use van*(ctx).tags to render element

## 1.6.1

### Patch Changes

- fix: directory imports: + \*/index.js

## 1.6.0

### Minor Changes

- props_OR_ctx:{ ctx:Ctx }|Ctx:

      V_fragment
      V_raw

## 1.5.0

### Minor Changes

- VanShape_w_undefined: + generics: <van_T extends VanShape>: variant of VanShape<van_T>

## 1.4.0

### Minor Changes

- - val\_\_be_derive_pair_T

  - val\_\_be_state_triple_T

## 1.3.1

### Patch Changes

- van-type-delegate: 1.1.0 -> 1.1.1

## 1.3.0

### Minor Changes

- generics: + val_T: addressing type inference:

      be_derive_pair__new
      be_state_triple__new

### Patch Changes

- optimize imports

## 1.2.0

### Minor Changes

- val**be_derive_pair**new: arguments: fix: - van\_

## 1.1.2

### Patch Changes

- dependencies: - workspace:

## 1.1.1

### Patch Changes

- format

## 1.1.0

### Minor Changes

- van\_: return type: - |null: simpler type inference
- generics: van_T extends VanShape: fix: type inference:

      val__be_derive_pair__new
      val__be_state_triple__new

## 1.0.1

### Patch Changes

- @ctx-core/dom: workspace:^15.0.1 -> 15.0.2

## 1.0.0

### Major Changes

- initial release:

      be_derive_pair__new
      be_derive_pair_T
      be_derive_pair__new__arg_a_T
      be_state_triple__new
      be_state_triple_T
      be_state_triple__new__arg_a_T
      props_clean__van__new
      Props_w_undefined
      TagFunc_w_undefined
      Tags_w_undefined
      TagNS_w_undefined
      Van_w_undefined
      VanShape_w_undefined
      reactive_state__new
      reactive_derive__new
      V_fragment
      V_fragment__return_T
      V_raw
      V_raw__return_T
      val__be_derive_pair__new
      val__be_derive_pair__new__arg_a_T
      val__be_state_triple__new
      val__be_state_triple__new__arg_a_T
      van_
      van__set
      van_internals_
      van_internals_T
      van__elementProto_T

### Patch Changes

- Updated dependencies
- Updated dependencies
- Updated dependencies
  - @ctx-core/object@29.0.0
  - @ctx-core/array@26.15.7
  - @ctx-core/dom@15.0.1
