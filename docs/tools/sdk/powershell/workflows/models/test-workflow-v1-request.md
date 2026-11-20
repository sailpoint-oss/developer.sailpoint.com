# TestWorkflowV1Request

# TestWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | **SystemCollectionsHashtable** | The test input for the workflow. | [required]

## Examples

- Prepare the resource
```powershell
$TestWorkflowV1Request = Initialize-TestWorkflowV1Request  -VarInput null
```

- Convert the resource to JSON
```powershell
$TestWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

