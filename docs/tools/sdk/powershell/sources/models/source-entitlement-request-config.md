# SourceEntitlementRequestConfig

# SourceEntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**SourceEntitlementAccessRequestConfig**](source-entitlement-access-request-config) |  | [optional] 
**RevocationRequestConfig** | [**SourceEntitlementRevocationRequestConfig**](source-entitlement-revocation-request-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceEntitlementRequestConfig = Initialize-SourceEntitlementRequestConfig  -AccessRequestConfig null `
 -RevocationRequestConfig null
```

- Convert the resource to JSON
```powershell
$SourceEntitlementRequestConfig | ConvertTo-JSON
```


[[Back to top]](#) 

