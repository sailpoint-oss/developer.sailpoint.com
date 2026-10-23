# CreateExternalExecuteWorkflowV1Request

# CreateExternalExecuteWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | **SystemCollectionsHashtable** | The input for the workflow | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateExternalExecuteWorkflowV1Request = Initialize-CreateExternalExecuteWorkflowV1Request  -VarInput {"customAttribute1":"value1","customAttribute2":"value2"}
```

- Convert the resource to JSON
```powershell
$CreateExternalExecuteWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

