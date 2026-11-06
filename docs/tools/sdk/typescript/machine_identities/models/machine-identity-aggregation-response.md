# MachineIdentityAggregationResponse

# MachineIdentityAggregationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the Object | [default to undefined]
**type** | **(optional)** `string` | Type of task for aggregation | [default to undefined]
**uniqueName** | **(optional)** `string` | Name of the task for aggregation | [default to undefined]
**description** | **(optional)** `string` | Description of the aggregation | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent of the task for aggregation | [default to undefined]
**launcher** | **(optional)** `string` | Service to execute the aggregation | [default to undefined]
**target** | **(optional)** `MachineIdentityAggregationResponseTarget` |  | [default to undefined]
**created** | **(optional)** `string` | Creation date of the aggregation | [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the aggregation | [default to undefined]
**launched** | **(optional)** `string` | Launch date of the aggregation | [default to undefined]
**completed** | **(optional)** `string` | Completion date of the aggregation | [default to undefined]
**taskDefinitionSummary** | **(optional)** `TaskDefinitionSummary` |  | [default to undefined]
**completionStatus** | **(optional)** `string` | Completion status of the aggregation | [default to undefined]
**messages** | **(optional)** `Array<TaskStatusMessage>` | Messages associated with the aggregation | [default to undefined]
**returns** | **(optional)** `Array<TaskReturnDetails>` | Return values associated with the aggregation | [default to undefined]
**attributes** | **(optional)**  | Attributes of the aggregation | [default to undefined]
**progress** | **(optional)** `string` | Current progress of aggregation | [default to undefined]
**percentComplete** | **(optional)** `number` | Current percentage completion of aggregation | [default to undefined]

