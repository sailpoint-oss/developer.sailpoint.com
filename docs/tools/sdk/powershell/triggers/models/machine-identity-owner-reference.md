# MachineIdentityOwnerReference

# MachineIdentityOwnerReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Owner's type. | [required]
**Id** | **String** | Owner ID. | [required]
**Name** | **String** | Owner's display name. | [required]
**IsPrimary** | **Boolean** | Indicates if this owner is the primary owner. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$MachineIdentityOwnerReference = Initialize-MachineIdentityOwnerReference  -Type IDENTITY `
 -Id 84d8c1b819144608b8b8bc3b84ddbb7b `
 -Name Jerrie admin3cf084 `
 -IsPrimary true
```

- Convert the resource to JSON
```powershell
$MachineIdentityOwnerReference | ConvertTo-JSON
```


[[Back to top]](#) 

