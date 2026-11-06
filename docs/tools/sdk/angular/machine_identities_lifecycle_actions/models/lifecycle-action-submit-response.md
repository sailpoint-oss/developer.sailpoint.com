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
**status** | `string` | Initial lifecycle request status. | [default to undefined]
**action** | `Lifecycleaction` |  | [default to undefined]
**targetId** | `string` | Internal machine identity UUID for the lifecycle target. | [default to undefined]
**resourceId** | **(optional)** `string` | Connector resource id for the lifecycle target, when present. | [default to undefined]
**createdAt** | `string` | Time when the lifecycle request was created (ISO-8601). | [default to undefined]

