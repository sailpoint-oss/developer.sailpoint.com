# TaskResultDetails

# TaskResultDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the task. | [optional] 
**Type** | **String** | Type of task this result represents. | [optional] 
**Name** | **String** | The name of the task. | [optional] 
**Description** | **String** | The description of the task. | [optional] 
**Launcher** | **String** | The user who initiated the task. | [optional] 
**Created** | **System.DateTime** | The task creation date. | [optional] 
**Launched** | **System.DateTime** | The task start date. | [optional] 
**Completed** | **System.DateTime** | The task completion date. | [optional] 
**CompletionStatus** |  **Enum** [  "SUCCESS",    "WARNING",    "ERROR",    "TERMINATED",    "TEMP_ERROR" ] | Task completion status. | [optional] 
**ParentName** | **String** | Name of the parent task if one exists. | [optional] 
**Progress** | **String** | Current task state. | [optional] 

## Examples

- Prepare the resource
```powershell
$TaskResultDetails = Initialize-TaskResultDetails  -Id ef38f94347e94562b5bb8424a56397d8 `
 -Type QUARTZ `
 -Name Dataset Aggregation `
 -Description Aggregate from the specified dataset `
 -Launcher John Doe `
 -Created 2020-09-07T12:14:00.364Z `
 -Launched 2020-09-07T12:14:00.521Z `
 -Completed 2020-09-07T12:14:01.137Z `
 -CompletionStatus SUCCESS `
 -ParentName Audit Report `
 -Progress Initializing...
```

- Convert the resource to JSON
```powershell
$TaskResultDetails | ConvertTo-JSON
```


[[Back to top]](#) 

