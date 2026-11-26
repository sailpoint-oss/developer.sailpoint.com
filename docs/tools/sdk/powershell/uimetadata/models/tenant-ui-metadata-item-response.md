# TenantUiMetadataItemResponse

# TenantUiMetadataItemResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IframeWhiteList** | **String** | Parameter that organizational administrators can adjust to permit another domain to encapsulate IDN within an iframe. If you would like to reset the value use ""null"". It will only allow include into iframe non authenticated portions of the product, such as password reset. | [optional] 
**UsernameLabel** | **String** | Descriptor for the username input field. If you would like to reset the value use ""null"". | [optional] 
**UsernameEmptyText** | **String** | Placeholder text displayed in the username input field. If you would like to reset the value use ""null"". | [optional] 
**InstanceBadgeDisplayName** | **String** | Display name for the instance badge. Null when no display name is configured. | [optional] 
**InstanceBadgeColor** | **String** | Hex value of color for the instance badge. Null when no color is configured. | [optional] 
**InstanceBadgeVisible** | **Boolean** | Whether the instance badge is visible. Defaults to false when no value is stored. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$TenantUiMetadataItemResponse = Initialize-TenantUiMetadataItemResponse  -IframeWhiteList http://example.com http://example2.com `
 -UsernameLabel Email `
 -UsernameEmptyText Please provide your work email address... `
 -InstanceBadgeDisplayName Sandbox `
 -InstanceBadgeColor FFAA00 `
 -InstanceBadgeVisible true
```

- Convert the resource to JSON
```powershell
$TenantUiMetadataItemResponse | ConvertTo-JSON
```


[[Back to top]](#) 

