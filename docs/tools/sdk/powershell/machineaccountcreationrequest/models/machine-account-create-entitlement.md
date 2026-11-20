# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Entitlement id to provision. Not required to be a UUID. | [required]
**Comment** | **String** | Justification stored with the entitlement request. | [optional] [default to ""]
**StartDate** | **System.DateTime** | When access starts. Must be in the future and before `removeDate` when both are set. | [optional] 
**RemoveDate** | **System.DateTime** | When access ends. Must be in the future and after `startDate` when both are set. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountCreateEntitlement = Initialize-MachineAccountCreateEntitlement  -Id 858d2151-ff19-464b-ae0d-6938b3af2baf `
 -Comment Needed to read the reconciliation staging tables. `
 -StartDate 2026-09-01T00:00Z `
 -RemoveDate 2027-03-01T00:00Z
```

- Convert the resource to JSON
```powershell
$MachineAccountCreateEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

