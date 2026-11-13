# TaskInfo

# TaskInfo

Import this model from the entry point of its package:

```typescript
import { TaskInfo } from '@sailpoint/angular-sdk/data_access_security';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**taskId** | **(optional)** `number` | The unique identifier for the task. | [default to undefined]
**taskTypeName** | **(optional)** `string` | The type or category of the task. | [default to undefined]
**startTime** | **(optional)** `number` | The start time of the task, represented as epoch seconds. | [default to undefined]
**endTime** | **(optional)** `number` | The end time of the task, represented as epoch seconds. | [default to undefined]
**taskName** | **(optional)** `string` | The display name of the task. | [default to undefined]
**createdByDisplayName** | **(optional)** `string` | The display name of the user who created the task. | [default to undefined]
**progress** | **(optional)** `number` | The progress of the task, typically represented as a percentage (0-100). | [default to undefined]
**status** | **(optional)** `string` | The current status of the task (e.g., \"Running\", \"Completed\", \"Failed\"). | [default to undefined]
**details** | **(optional)** `string` | Additional details or information about the task. | [default to undefined]
**scheduleTaskId** | **(optional)** `number` | The unique identifier of the associated scheduled task, if applicable. | [default to undefined]

