# WorkflowSummaryDocumentOwner

# WorkflowSummaryDocumentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Type of the owner. | [optional] 
**Id** | **String** | ID of the owner. | [optional] 
**Name** | **String** | Name of the owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowSummaryDocumentOwner = Initialize-WorkflowSummaryDocumentOwner  -Type IDENTITY `
 -Id 2c9180844d5c0ab5014d5fb5bc6c0bc8 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$WorkflowSummaryDocumentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

