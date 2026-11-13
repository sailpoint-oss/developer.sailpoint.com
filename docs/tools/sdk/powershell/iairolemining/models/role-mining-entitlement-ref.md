# RoleMiningEntitlementRef

# RoleMiningEntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the entitlement | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 
**Description** | **String** | Description forthe entitlement | [optional] 
**Attribute** | **String** | The entitlement attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningEntitlementRef = Initialize-RoleMiningEntitlementRef  -Id 2c91808a7e95e6e0017e96e2086206c8 `
 -Name App.entitlement.1 `
 -Description Entitlement 1 `
 -Attribute groups
```

- Convert the resource to JSON
```powershell
$RoleMiningEntitlementRef | ConvertTo-JSON
```


[[Back to top]](#) 

