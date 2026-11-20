# Owns

# Owns

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Sources** | [**[]Reference**](reference) |  | [optional] 
**Entitlements** | [**[]Reference**](reference) |  | [optional] 
**AccessProfiles** | [**[]Reference**](reference) |  | [optional] 
**Roles** | [**[]Reference**](reference) |  | [optional] 
**Apps** | [**[]Reference**](reference) |  | [optional] 
**GovernanceGroups** | [**[]Reference**](reference) |  | [optional] 
**FallbackApprover** | **Boolean** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Owns = Initialize-Owns  -Sources null `
 -Entitlements null `
 -AccessProfiles null `
 -Roles null `
 -Apps null `
 -GovernanceGroups null `
 -FallbackApprover false
```

- Convert the resource to JSON
```powershell
$Owns | ConvertTo-JSON
```


[[Back to top]](#) 

