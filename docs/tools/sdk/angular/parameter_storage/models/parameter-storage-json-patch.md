# ParameterStorageJsonPatch

# ParameterStorageJsonPatch

Import this model from the entry point of its package:

```typescript
import { ParameterStorageJsonPatch } from '@sailpoint/angular-sdk/parameter_storage';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform (add, remove, replace, move, copy, test) | [default to undefined]
**path** | `string` | A JSON-Pointer describing the target location | [default to undefined]
**value** | **(optional)** `any` | The value to be used within the operations. Required for add/replace/test. | [default to undefined]
**from** | **(optional)** `string` | A JSON-Pointer describing the source location for move/copy. | [default to undefined]

