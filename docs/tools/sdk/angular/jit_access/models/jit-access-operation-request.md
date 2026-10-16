# JitAccessOperationRequest

# JitAccessOperationRequest

Import this model from the entry point of its package:

```typescript
import { JitAccessOperationRequest } from '@sailpoint/angular-sdk/jit_access';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | **(optional)** `string` | Operation type. Defaults to `replace` if omitted. | [default to OpEnum_Replace]
**path** | `string` | Path to replace. Only the following JSON Pointer-style paths are supported.  | [default to undefined]
**value** | `JitAccessOperationRequestValue` |  | [default to undefined]

