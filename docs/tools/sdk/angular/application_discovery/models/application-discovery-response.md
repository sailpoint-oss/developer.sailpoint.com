# ApplicationDiscoveryResponse

# ApplicationDiscoveryResponse

Import this model from the entry point of its package:

```typescript
import { ApplicationDiscoveryResponse } from '@sailpoint/angular-sdk/application_discovery';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [default to undefined]
**type** | **(optional)** `string` | Type of task for app discovery | [default to undefined]
**uniqueName** | **(optional)** `string` | Name of the task for app discovery | [default to undefined]
**description** | **(optional)** `string` | Description of the app discovery aggregation | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent of the task for app discovery | [default to undefined]
**launcher** | **(optional)** `string` | Service to execute app discovery | [default to undefined]
**target** | **(optional)** `ApplicationDiscoveryResponseTarget` |  | [default to undefined]
**created** | **(optional)** `string` | Creation date of app discovery task | [default to undefined]
**modified** | **(optional)** `string` | Last modification date of app discovery task | [default to undefined]
**launched** | **(optional)** `string` | Launch date of app discovery task | [default to undefined]
**completed** | **(optional)** `string` | Completion date of app discovery task | [default to undefined]
**taskDefinitionSummary** | **(optional)** `TaskDefinitionSummary` |  | [default to undefined]
**completionStatus** | **(optional)** `string` | Completion status of app discovery task | [default to undefined]
**messages** | **(optional)** `Array<TaskStatusMessage>` | Messages associated with the app discovery task | [default to undefined]
**returns** | **(optional)** `Array<TaskReturnDetails>` | Return values associated with the app discovery task | [default to undefined]
**attributes** | **(optional)**  | Attributes of the app discovery task | [default to undefined]
**progress** | **(optional)** `string` | Current progress of aggregation | [default to undefined]
**percentComplete** | **(optional)** `number` | Current percentage completion of app discovery task | [default to undefined]

