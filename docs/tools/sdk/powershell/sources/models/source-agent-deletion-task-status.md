# SourceAgentDeletionTaskStatus

# SourceAgentDeletionTaskStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the deletion task. | [optional] 
**Type** |  **Enum** [  "QUARTZ",    "QPOC",    "QUEUED_TASK" ] | Type of the deletion task. | [optional] 
**UniqueName** | **String** | Name of the deletion task. | [optional] 
**Description** | **String** | Description of the deletion task. | [optional] 
**ParentName** | **String** | Name of the parent of the deletion task. | [optional] 
**Launcher** | **String** | Service or user that launched the deletion task. | [optional] 
**Target** | [**SourceAgentDeletionTaskStatusTarget**](source-agent-deletion-task-status-target) |  | [optional] 
**Created** | **System.DateTime** | Creation date of the deletion task. | [optional] 
**Modified** | **System.DateTime** | Last modification date of the deletion task. | [optional] 
**Launched** | **System.DateTime** | Launch date of the deletion task. | [optional] 
**Completed** | **System.DateTime** | Completion date of the deletion task. `null` until the task finishes. | [optional] 
**TaskDefinitionSummary** | [**TaskDefinitionSummary**](task-definition-summary) |  | [optional] 
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMPERROR" ] | Completion status of the deletion task. `null` until the task finishes. | [optional] 
**Messages** | [**[]TaskStatusMessage**](task-status-message) | Messages associated with the deletion task. | [optional] 
**Returns** | [**[]TaskReturnDetails**](task-return-details) | Return values from the deletion task. | [optional] 
**Attributes** | **map[string]AnyType** | Attributes of the deletion task. | [optional] 
**Progress** | **String** | Current progress of the deletion task. | [optional] 
**PercentComplete** | **Int32** | Current percentage completion of the deletion task. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceAgentDeletionTaskStatus = Initialize-SourceAgentDeletionTaskStatus  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Type QUEUED_TASK `
 -UniqueName Machine Identity Deletion `
 -Description Machine Identity Deletion `
 -ParentName Parent Task `
 -Launcher System `
 -Target null `
 -Created 2026-10-22T14:03:11Z `
 -Modified 2026-10-22T14:03:11Z `
 -Launched 2026-10-22T14:03:11Z `
 -Completed 2026-10-22T14:09:47Z `
 -TaskDefinitionSummary null `
 -CompletionStatus SUCCESS `
 -Messages null `
 -Returns null `
 -Attributes {} `
 -Progress Started `
 -PercentComplete 0
```

- Convert the resource to JSON
```powershell
$SourceAgentDeletionTaskStatus | ConvertTo-JSON
```


[[Back to top]](#) 

