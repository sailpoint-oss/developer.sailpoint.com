# InvocationStatus

# InvocationStatus

Import this model from the entry point of its package:

```typescript
import { InvocationStatus } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Invocation ID | [default to undefined]
**triggerId** | `string` | Trigger ID | [default to undefined]
**subscriptionName** | `string` | Subscription name | [default to undefined]
**subscriptionId** | `string` | Subscription ID | [default to undefined]
**type** | `InvocationStatusType` |  | [default to undefined]
**created** | `string` | Invocation created timestamp. ISO-8601 in UTC. | [default to undefined]
**completed** | **(optional)** `string` | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [default to undefined]
**startInvocationInput** | `StartInvocationInput` |  | [default to undefined]
**completeInvocationInput** | **(optional)** `CompleteInvocationInput` |  | [default to undefined]

