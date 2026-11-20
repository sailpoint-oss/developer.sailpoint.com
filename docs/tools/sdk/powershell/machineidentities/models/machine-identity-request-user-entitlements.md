# MachineIdentityRequestUserEntitlements

# MachineIdentityRequestUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementId** | **String** | The ID of the entitlement | [required]
**SourceId** | **String** | The source ID of the entitlement | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentityRequestUserEntitlements = Initialize-MachineIdentityRequestUserEntitlements  -EntitlementId 6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa `
 -SourceId 5898b7c1-620c-49c6-cccc-cbf81eb4bddd
```

- Convert the resource to JSON
```powershell
$MachineIdentityRequestUserEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

