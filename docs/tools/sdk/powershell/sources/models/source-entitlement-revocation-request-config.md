# SourceEntitlementRevocationRequestConfig

# SourceEntitlementRevocationRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]SourceEntitlementApprovalScheme**](source-entitlement-approval-scheme) | Ordered list of approval steps for the revocation request. Empty when no approval is required. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceEntitlementRevocationRequestConfig = Initialize-SourceEntitlementRevocationRequestConfig  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$SourceEntitlementRevocationRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

