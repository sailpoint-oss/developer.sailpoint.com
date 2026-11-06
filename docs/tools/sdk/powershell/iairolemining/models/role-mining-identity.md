# RoleMiningIdentity

# RoleMiningIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the identity | [optional] 
**Name** | **String** | Name of the identity | [optional] 
**Attributes** | **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningIdentity = Initialize-RoleMiningIdentity  -Id 2c9180877212632a017228d5934525e6 `
 -Name Allene Abernathy-Welch `
 -Attributes {"jobTitle":"SQL Developer","department":"IT","location":"NYC","firstName":"Allene"}
```

- Convert the resource to JSON
```powershell
$RoleMiningIdentity | ConvertTo-JSON
```


[[Back to top]](#) 

