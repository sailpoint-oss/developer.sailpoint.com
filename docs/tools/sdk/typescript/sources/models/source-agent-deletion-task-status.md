# SourceAgentDeletionTaskStatus

# SourceAgentDeletionTaskStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | System-generated unique ID of the deletion task. | [default to undefined]
**type** | **(optional)** `string` | Type of the deletion task. | [default to undefined]
**uniqueName** | **(optional)** `string` | Name of the deletion task. | [default to undefined]
**description** | **(optional)** `string` | Description of the deletion task. | [default to undefined]
**parentName** | **(optional)** `string` | Name of the parent of the deletion task. | [default to undefined]
**launcher** | **(optional)** `string` | Service or user that launched the deletion task. | [default to undefined]
**target** | **(optional)** `SourceAgentDeletionTaskStatusTarget` |  | [default to undefined]
**created** | **(optional)** `string` | Creation date of the deletion task. | [default to undefined]
**modified** | **(optional)** `string` | Last modification date of the deletion task. | [default to undefined]
**launched** | **(optional)** `string` | Launch date of the deletion task. | [default to undefined]
**completed** | **(optional)** `string` | Completion date of the deletion task. `null` until the task finishes. | [default to undefined]
**taskDefinitionSummary** | **(optional)** `TaskDefinitionSummary` |  | [default to undefined]
**completionStatus** | **(optional)** `string` | Completion status of the deletion task. `null` until the task finishes. | [default to undefined]
**messages** | **(optional)** `Array<TaskStatusMessage>` | Messages associated with the deletion task. | [default to undefined]
**returns** | **(optional)** `Array<TaskReturnDetails>` | Return values from the deletion task. | [default to undefined]
**attributes** | **(optional)**  | Attributes of the deletion task. | [default to undefined]
**progress** | **(optional)** `string` | Current progress of the deletion task. | [default to undefined]
**percentComplete** | **(optional)** `number` | Current percentage completion of the deletion task. | [default to undefined]

