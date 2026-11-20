# UserEntitlementV2

# UserEntitlementV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | The source ID of the entitlement. | [optional] 
**EntitlementId** | **String** | The ID of the entitlement. | [optional] 
**DisplayName** | **String** | The display name of the entitlement. | [optional] 
**Source** | [**UserEntitlementV2Source**](user-entitlement-v2-source) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UserEntitlementV2 = Initialize-UserEntitlementV2  -SourceId 5898b7c1-620c-49c6-cccc-cbf81eb4bddd `
 -EntitlementId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -DisplayName Entitlement Name `
 -Source null
```

- Convert the resource to JSON
```powershell
$UserEntitlementV2 | ConvertTo-JSON
```


[[Back to top]](#) 

