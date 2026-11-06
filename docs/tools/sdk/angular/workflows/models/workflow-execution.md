# WorkflowExecution

# WorkflowExecution

Import this model from the entry point of its package:

```typescript
import { WorkflowExecution } from '@sailpoint/angular-sdk/workflows';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Workflow execution ID. | [default to undefined]
**workflowId** | **(optional)** `string` | Workflow ID. | [default to undefined]
**requestId** | **(optional)** `string` | Backend ID that tracks a workflow request in the system. Provide this ID in a customer support ticket for debugging purposes. | [default to undefined]
**startTime** | **(optional)** `string` | Date/time when the workflow started. | [default to undefined]
**closeTime** | **(optional)** `string` | Date/time when the workflow ended. | [default to undefined]
**status** | **(optional)** `string` | Workflow execution status. | [default to undefined]

