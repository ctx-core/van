import type { ctx_T } from 'ctx-core/be'
import type { State } from 'van-type-delegate'
export declare function reactive_state__new<val_T>(ctx:ctx_T, initVal:val_T):State<val_T>
export declare function reactive_derive__new<val_T>(ctx:ctx_T, f:()=>val_T):State<val_T>
