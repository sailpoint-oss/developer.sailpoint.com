# MachineIdentitySourceReference

# MachineIdentitySourceReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | Source Type. | [required]
**Id** | **String** | Unique identifier. | [required]
**Name** | **String** | Display name. | [required]

## Examples

- Prepare the resource
```powershell
$MachineIdentitySourceReference = Initialize-MachineIdentitySourceReference  -Type SOURCE `
 -Id c0201251a6ce4d268aba536cdd60a7f2 `
 -Name IdentityNow
```

- Convert the resource to JSON
```powershell
$MachineIdentitySourceReference | ConvertTo-JSON
```


[[Back to top]](#) 

