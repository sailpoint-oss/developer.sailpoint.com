# EntitlementRevocationRequestConfig

# EntitlementRevocationRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the revocation request. Empty when no approval is required. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRevocationRequestConfig = Initialize-EntitlementRevocationRequestConfig  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$EntitlementRevocationRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

