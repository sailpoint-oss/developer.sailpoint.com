# Workflow

# Workflow

Import this model from the entry point of its package:

```typescript
import { Workflow } from '@sailpoint/angular-sdk/workflows';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **(optional)** `string` | The name of the workflow | [default to undefined]
**owner** | **(optional)** `WorkflowBodyOwner` |  | [default to undefined]
**description** | **(optional)** `string` | Description of what the workflow accomplishes | [default to undefined]
**definition** | **(optional)** `WorkflowDefinition` |  | [default to undefined]
**enabled** | **(optional)** `boolean` | Enable or disable the workflow.  Workflows cannot be created in an enabled state. | [default to false]
**trigger** | **(optional)** `WorkflowTrigger` |  | [default to undefined]
**id** | **(optional)** `string` | Workflow ID. This is a UUID generated upon creation. | [default to undefined]
**executionCount** | **(optional)** `number` | The number of times this workflow has been executed. | [default to undefined]
**failureCount** | **(optional)** `number` | The number of times this workflow has failed during execution. | [default to undefined]
**created** | **(optional)** `string` | The date and time the workflow was created. | [default to undefined]
**modified** | **(optional)** `string` | The date and time the workflow was modified. | [default to undefined]
**modifiedBy** | **(optional)** `WorkflowModifiedBy` |  | [default to undefined]
**creator** | **(optional)** `WorkflowAllOfCreator` |  | [default to undefined]

