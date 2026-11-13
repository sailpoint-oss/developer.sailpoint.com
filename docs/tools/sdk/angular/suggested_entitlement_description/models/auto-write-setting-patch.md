# AutoWriteSettingPatch

# AutoWriteSettingPatch

Import this model from the entry point of its package:

```typescript
import { AutoWriteSettingPatch } from '@sailpoint/angular-sdk/suggested_entitlement_description';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**op** | `string` | The operation to perform. Only \"replace\" is supported. | [default to undefined]
**path** | `string` | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | [default to undefined]
**value** | `AutoWriteSettingPatchValue` |  | [default to undefined]

