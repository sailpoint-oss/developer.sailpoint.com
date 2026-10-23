# TemplateSlackAutoApprovalData

# TemplateSlackAutoApprovalData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsAutoApproved** | **String** | Whether the request was auto-approved | [optional] 
**ItemId** | **String** | The item ID | [optional] 
**ItemType** | **String** | The item type | [optional] 
**AutoApprovalMessageJSON** | **String** | JSON message for auto-approval | [optional] 
**AutoApprovalTitle** | **String** | Title for auto-approval | [optional] 

## Examples

- Prepare the resource
```powershell
$TemplateSlackAutoApprovalData = Initialize-TemplateSlackAutoApprovalData  -IsAutoApproved null `
 -ItemId null `
 -ItemType null `
 -AutoApprovalMessageJSON null `
 -AutoApprovalTitle null
```

- Convert the resource to JSON
```powershell
$TemplateSlackAutoApprovalData | ConvertTo-JSON
```


[[Back to top]](#) 

