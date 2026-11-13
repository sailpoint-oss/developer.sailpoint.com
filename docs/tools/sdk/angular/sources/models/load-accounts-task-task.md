# LoadAccountsTaskTask

# LoadAccountsTaskTask

Import this model from the entry point of its package:

```typescript
import { LoadAccountsTaskTask } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the task this taskStatus represents | [default to undefined]
**type** | **(optional)** `string` | Type of task this task represents | [default to undefined]
**name** | **(optional)** `string` | The name of the aggregation process | [default to undefined]
**description** | **(optional)** `string` | The description of the task | [default to undefined]
**launcher** | **(optional)** `string` | The user who initiated the task | [default to undefined]
**created** | **(optional)** `string` | The Task creation date | [default to undefined]
**launched** | **(optional)** `string` | The task start date | [default to undefined]
**completed** | **(optional)** `string` | The task completion date | [default to undefined]
**completionStatus** | **(optional)** `string` | Task completion status. | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent task if exists. | [default to undefined]
**messages** | **(optional)** `Array<LoadAccountsTaskTaskMessagesInner>` | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [default to undefined]
**progress** | **(optional)** `string` | Current task state. | [default to undefined]
**attributes** | **(optional)** `LoadAccountsTaskTaskAttributes` |  | [default to undefined]
**returns** | **(optional)** `Array<LoadAccountsTaskTaskReturnsInner>` | Return values from the task | [default to undefined]

