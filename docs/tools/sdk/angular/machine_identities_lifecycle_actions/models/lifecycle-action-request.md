# LifecycleActionRequest

# LifecycleActionRequest

Import this model from the entry point of its package:

```typescript
import { LifecycleActionRequest } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Lifecycle request identifier. | [default to undefined]
**tenantId** | **(optional)** `string` | Tenant identifier for the lifecycle request. | [default to undefined]
**statusType** | **(optional)** `string` | Generic request status type discriminator. | [default to undefined]
**requestedBy** | **(optional)** `string` | Identity id of the principal that submitted the request. | [default to undefined]
**targetType** | **(optional)** `string` | Resource type targeted by the lifecycle request. | [default to undefined]
**targetId** | **(optional)** `string` | Internal machine identity UUID for the lifecycle target. | [default to undefined]
**operationType** | **(optional)** `Lifecycleaction` |  | [default to undefined]
**workflowId** | **(optional)** `string` | Temporal workflow identifier for the lifecycle request. | [default to undefined]
**completed** | **(optional)** `boolean` | Indicates whether the lifecycle request has reached a terminal state. | [default to false]
**details** | **(optional)** `LifecycleActionRequestDetails` |  | [default to undefined]
**created** | **(optional)** `string` | Time when the lifecycle request was created (ISO-8601). | [default to undefined]
**modified** | **(optional)** `string` | Time when the lifecycle request was last modified (ISO-8601). | [default to undefined]

