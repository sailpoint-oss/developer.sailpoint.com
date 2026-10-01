# CreateExternalExecuteWorkflowV1200Response

# CreateExternalExecuteWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WorkflowExecutionId** | **String** | The workflow execution id | [optional] 
**Message** | **String** | An error message if any errors occurred | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowV1200Response = Initialize-CreateExternalExecuteWorkflowV1200Response  -WorkflowExecutionId 0e11cefa-96e7-4b67-90d0-065bc1da5753 `
 -Message Workflow was not executed externally. Check enabled flag on workflow definition
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

