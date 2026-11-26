# MachineAccountLinkedMachineIdentityAllOfUserEntitlements

# MachineAccountLinkedMachineIdentityAllOfUserEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | ID of the source the entitlement belongs to. | [optional] 
**EntitlementId** | **String** | ID of the entitlement. | [optional] 
**DisplayName** | **String** | The display name of the entitlement. | [optional] 
**Source** | [**BaseReferenceDto**](base-reference-dto) | The source the entitlement belongs to. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountLinkedMachineIdentityAllOfUserEntitlements = Initialize-MachineAccountLinkedMachineIdentityAllOfUserEntitlements  -SourceId 8d3e0094e99445de98eef6c75e25jc04 `
 -EntitlementId 2c9180835d2e5168015d32f890ca1581 `
 -DisplayName Administrators `
 -Source null
```

- Convert the resource to JSON
```powershell
$MachineAccountLinkedMachineIdentityAllOfUserEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

