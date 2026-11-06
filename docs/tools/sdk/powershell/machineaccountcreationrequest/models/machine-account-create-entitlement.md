# MachineAccountCreateEntitlement

# MachineAccountCreateEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of the entitlement to request. | [required]
**Comment** | **String** | Comment to include with the entitlement request. | [optional] 
**StartDate** | **System.DateTime** | Date and time when access to the entitlement starts. Must be in the future and, when `removeDate` is also set, before `removeDate`. | [optional] 
**RemoveDate** | **System.DateTime** | Date and time when access to the entitlement is removed. Must be in the future. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountCreateEntitlement = Initialize-MachineAccountCreateEntitlement  -Id 2c91808a7624751a01762f19d67c220e `
 -Comment Needed to read the inventory share. `
 -StartDate 2026-11-01T00:00Z `
 -RemoveDate 2027-11-01T00:00Z
```

- Convert the resource to JSON
```powershell
$MachineAccountCreateEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

