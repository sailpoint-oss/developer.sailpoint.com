# AccessConstraint

# AccessConstraint

Import this model from the entry point of its package:

```typescript
import { AccessConstraint } from '@sailpoint/angular-sdk/certification_campaigns';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Type of Access | [default to undefined]
**ids** | **(optional)** `Array<string>` | Must be set only if operator is SELECTED. | [default to undefined]
**operator** | `string` | Used to determine whether the scope of the campaign should be reduced for selected ids or all. | [default to undefined]

