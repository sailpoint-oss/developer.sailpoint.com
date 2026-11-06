# WorkflowExecutionEvent

# WorkflowExecutionEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "WorkflowExecutionScheduled",    "WorkflowExecutionStarted",    "WorkflowExecutionCompleted",    "WorkflowExecutionFailed",    "WorkflowTaskScheduled",    "WorkflowTaskStarted",    "WorkflowTaskCompleted",    "WorkflowTaskFailed",    "ActivityTaskScheduled",    "ActivityTaskStarted",    "ActivityTaskCompleted",    "ActivityTaskFailed",    "StartChildWorkflowExecutionInitiated",    "ChildWorkflowExecutionStarted",    "ChildWorkflowExecutionCompleted",    "ChildWorkflowExecutionFailed" ] | The type of event | [optional] 
**Timestamp** | **System.DateTime** | The date-time when the event occurred | [optional] 
**Attributes** | **SystemCollectionsHashtable** | Additional attributes associated with the event | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowExecutionEvent = Initialize-WorkflowExecutionEvent  -Type WorkflowTaskScheduled `
 -Timestamp 2022-02-07T20:13:31.640618296Z `
 -Attributes {}
```

- Convert the resource to JSON
```powershell
$WorkflowExecutionEvent | ConvertTo-JSON
```


[[Back to top]](#) 

