# TestExternalExecuteWorkflowV1200Response

# TestExternalExecuteWorkflowV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payload** | **SystemCollectionsHashtable** | The input that was received | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowV1200Response = Initialize-TestExternalExecuteWorkflowV1200Response  -Payload {"test":"hello world"}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

