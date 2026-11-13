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
**statusType** | **(optional)** `string` | Type of request. Always `LIFECYCLE_ACTIONS_REQUEST` for lifecycle action requests. | [default to undefined]
**requestedBy** | **(optional)** `string` | ID of the identity that submitted the request. | [default to undefined]
**targetType** | **(optional)** `string` | Type of machine identity the request applies to. | [default to undefined]
**targetId** | **(optional)** `string` | ID of the machine identity the request applies to. | [default to undefined]
**operationType** | **(optional)** `Lifecycleaction` |  | [default to undefined]
**workflowId** | **(optional)** `string` | Identifier of the workflow that processes the request. | [default to undefined]
**completed** | **(optional)** `boolean` | Indicates whether the request has finished. A request is finished when its status is `COMPLETED`, `REJECTED`, `FAILED`, or `CANCELED`. | [default to false]
**details** | **(optional)** `LifecycleActionRequestDetails` |  | [default to undefined]
**created** | **(optional)** `string` | Time when the lifecycle request was created (ISO-8601). | [default to undefined]
**modified** | **(optional)** `string` | Time when the lifecycle request was last modified (ISO-8601). | [default to undefined]

