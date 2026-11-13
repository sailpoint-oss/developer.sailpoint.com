# CancelLifecycleActionResponse

# CancelLifecycleActionResponse

Import this model from the entry point of its package:

```typescript
import { CancelLifecycleActionResponse } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Lifecycle request identifier. | [default to undefined]
**status** | `string` | Status of the request after the cancel is accepted. Always `CANCELING`. | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | ID of the machine identity the request applies to. | [default to undefined]
**resourceId** | **(optional)** `string` | ID of the machine identity in its source system, when available. | [default to undefined]

