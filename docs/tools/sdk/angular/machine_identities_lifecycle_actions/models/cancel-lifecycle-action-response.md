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
**status** | `string` | Updated lifecycle request status after cancel acceptance. | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | Internal machine identity UUID for the lifecycle target. | [default to undefined]
**resourceId** | **(optional)** `string` | Connector resource id for the lifecycle target, when present. | [default to undefined]

