# MachineIdentityUpdatedUserEntitlementChanges

# MachineIdentityUpdatedUserEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Name of the attribute that changed. | [optional] 
**Added** | **[]MachineIdentityUserEntitlements** | User entitlements that were added. | [optional] 
**Removed** | **[]MachineIdentityUserEntitlements** | User entitlements that were removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityUpdatedUserEntitlementChanges = Initialize-MachineIdentityUpdatedUserEntitlementChanges  -AttributeName userEntitlements `
 -Added null `
 -Removed null
```

- Convert the resource to JSON
```powershell
$MachineIdentityUpdatedUserEntitlementChanges | ConvertTo-JSON
```


[[Back to top]](#) 

