# LifecycleActionSubmitResponse

# LifecycleActionSubmitResponse

Import this model from the entry point of its package:

```typescript
import { LifecycleActionSubmitResponse } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requestId** | `string` | Unique identifier for the created lifecycle request. | [default to undefined]
**status** | `Lifecyclestatus` |  | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | ID of the machine identity the request applies to. | [default to undefined]
**resourceId** | **(optional)** `string` | ID of the machine identity in its source system, when available. | [default to undefined]
**createdAt** | `string` | Time when the lifecycle request was created (ISO-8601). | [default to undefined]

