import type { Ctx } from 'ctx-core/be'
import type { State } from 'van-type-delegate'
export declare function reactive_state__new<val_T>(ctx:Ctx, initVal:val_T):State<val_T>
export declare function reactive_derive__new<val_T>(ctx:Ctx, f:()=>val_T):State<val_T>
