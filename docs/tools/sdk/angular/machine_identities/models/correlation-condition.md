# CorrelationCondition

# CorrelationCondition

Import this model from the entry point of its package:

```typescript
import { CorrelationCondition } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the condition. | [default to undefined]
**leftAttributeName** | `string` | The left-hand attribute name of the condition. | [default to undefined]
**operatorType** | `string` | The comparison operator applied between the left and right attributes. | [default to undefined]
**rightAttributeName** | `string` | The right-hand attribute name. Use an empty string when there is no RHS attribute. | [default to undefined]
**transform** | **(optional)** `string` | Optional transform applied before comparison. | [default to undefined]
**ordinal** | `number` | The position of this condition within the rule. | [default to undefined]

