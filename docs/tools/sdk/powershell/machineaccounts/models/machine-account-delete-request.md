# MachineAccountDeleteRequest

# MachineAccountDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comments** | **String** | Comments about the deletion request. Depending on the tenant's account deletion approval settings, comments can be required. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineAccountDeleteRequest = Initialize-MachineAccountDeleteRequest  -Comments This machine account is no longer used.
```

- Convert the resource to JSON
```powershell
$MachineAccountDeleteRequest | ConvertTo-JSON
```


[[Back to top]](#) 

