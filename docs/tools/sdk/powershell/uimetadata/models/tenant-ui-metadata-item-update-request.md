# TenantUiMetadataItemUpdateRequest

# TenantUiMetadataItemUpdateRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | **String** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use ""null"". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | **String** | Descriptor for the username input field. If you would like to reset the value use ""null"". | [optional] 
**UsernameEmptyText** | **String** | Placeholder text displayed in the username input field. If you would like to reset the value use ""null"". | [optional] 
**InstanceBadgeDisplayName** | **String** | Display name for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [optional] 
**InstanceBadgeColor** | **String** | Hex value of color for the instance badge. Optional. Omit this property to leave the stored value unchanged. Use null to clear it. | [optional] 
**InstanceBadgeVisible** | **Boolean** | Visibility toggle for the instance badge. Optional. Omit this property to leave the stored value unchanged. Null is stored as false. | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantUiMetadataItemUpdateRequest = Initialize-TenantUiMetadataItemUpdateRequest  -IframeWhiteList http://example.com http://example2.com `
 -UsernameLabel Email `
 -UsernameEmptyText Please provide your work email address... `
 -InstanceBadgeDisplayName Sandbox `
 -InstanceBadgeColor FFAA00 `
 -InstanceBadgeVisible true
```

- Convert the resource to JSON
```powershell
$TenantUiMetadataItemUpdateRequest | ConvertTo-JSON
```


[[Back to top]](#) 

