# MachineIdentityUserEntitlementResponse

# MachineIdentityUserEntitlementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] 
**MachineIdentityId** | **String** | System-generated unique ID of the Machine Identity | [optional] 
**Source** | [**MachineIdentityUserEntitlementResponseSource**](machine-identity-user-entitlement-response-source) |  | [optional] 
**Entitlement** | [**MachineIdentityUserEntitlementResponseEntitlement**](machine-identity-user-entitlement-response-entitlement) |  | [optional] 
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityUserEntitlementResponse = Initialize-MachineIdentityUserEntitlementResponse  -Id 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -MachineIdentityId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Source null `
 -Entitlement null `
 -Created 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$MachineIdentityUserEntitlementResponse | ConvertTo-JSON
```


[[Back to top]](#) 

