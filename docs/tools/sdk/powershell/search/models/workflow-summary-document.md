# WorkflowSummaryDocument

# WorkflowSummaryDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the workflow summary. The ID is the workflow execution ID, followed by a hyphen and the event ID. | [optional] 
**WorkflowExecutionId** | **String** | ID of the workflow execution that the event belongs to. | [optional] 
**EventId** | **Int64** | Position of the event in the execution history of the workflow execution. | [optional] 
**WorkflowName** | **String** | Name of the workflow. | [optional] 
**WorkflowId** | **String** | ID of the workflow. | [optional] 
**Status** | **String** | Status of the workflow execution at the time of the event. Possible values include `Completed`, `Failed`, `Canceled`, `Running`, and `Queued`. | [optional] 
**WorkflowTest** | **Boolean** | Indicates whether the workflow execution was a test execution. | [optional] [default to $false]
**Owner** | [**WorkflowSummaryDocumentOwner**](workflow-summary-document-owner) |  | [optional] 
**RequestId** | **String** | Backend ID that tracks a workflow request in the system. Provide this ID in a customer support ticket for debugging purposes. | [optional] 
**Created** | **System.DateTime** | ISO-8601 date-time referring to the time when the event occurred. | [optional] 
**Synced** | **String** | ISO-8601 date-time referring to the date-time when object was queued to be synced into search database for use in the search API. This date-time changes anytime there is an update to the object, which triggers a synchronization event being sent to the search database. There may be some delay between the `synced` time and the time when the updated data is actually available in the search API. | [optional] 
**Type** | **String** | Type of the execution history event. Examples include `WorkflowExecutionStarted`, `WorkflowExecutionCompleted`, `WorkflowExecutionFailed`, `ActivityTaskScheduled`, `ActivityTaskCompleted`, and `ActivityTaskFailed`. | [optional] 
**Attributes** | **map[string]AnyType** | Attributes of the event. The available attributes depend on the event type. For example, an `ActivityTaskCompleted` event can include `task`, `stepName`, `displayName`, `technicalName`, and `result`. Values that are not strings or integers are serialized as JSON strings. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowSummaryDocument = Initialize-WorkflowSummaryDocument  -Id b393f4e2-4785-4d7f-ab27-3a6b8ded4c81-3 `
 -WorkflowExecutionId b393f4e2-4785-4d7f-ab27-3a6b8ded4c81 `
 -EventId 3 `
 -WorkflowName Send Email `
 -WorkflowId d201c5d9-d37b-4a2f-af14-66414f39d568 `
 -Status Completed `
 -WorkflowTest false `
 -Owner null `
 -RequestId 41e12a74fa7b4a6a98ae47887b64acdb `
 -Created 2022-02-07T20:13:31.640618296Z `
 -Synced 2022-02-07T20:13:32.104Z `
 -Type ActivityTaskCompleted `
 -Attributes {"task":"sp:send-email","stepName":"sendEmail","displayName":"Send Email","technicalName":"sendEmail","result":"{\"status\":\"sent\"}"}
```

- Convert the resource to JSON
```powershell
$WorkflowSummaryDocument | ConvertTo-JSON
```


[[Back to top]](#) 

