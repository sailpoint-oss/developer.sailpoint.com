# ApprovalApproveRequest

# ApprovalApproveRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdditionalAttributes** | **map[string]String** | Additional attributes as key-value pairs that are not part of the standard schema but can be included for custom data. | [optional] 
**Comment** | **String** | Comment associated with the request. | [optional] 
**OverrideApproverID** | **String** | Optional field for ServiceNow Administrators to specify which member of a governance group to override/approve on behalf of. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalApproveRequest = Initialize-ApprovalApproveRequest  -AdditionalAttributes {"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"} `
 -Comment comment `
 -OverrideApproverID 12345678901234567890123456789012
```

- Convert the resource to JSON
```powershell
$ApprovalApproveRequest | ConvertTo-JSON
```


[[Back to top]](#) 

