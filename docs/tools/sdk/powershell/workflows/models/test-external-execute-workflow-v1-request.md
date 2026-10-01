# TestExternalExecuteWorkflowV1Request

# TestExternalExecuteWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | **SystemCollectionsHashtable** | The test input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflowV1Request = Initialize-TestExternalExecuteWorkflowV1Request  -VarInput {"test":"hello world"}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

