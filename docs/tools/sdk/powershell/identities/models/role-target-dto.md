# RoleTargetDto

# RoleTargetDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 
**AccountInfo** | [**AccountInfoDto**](account-info-dto) |  | [optional] 
**Role** | [**BaseReferenceDto**](base-reference-dto) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleTargetDto = Initialize-RoleTargetDto  -Source null `
 -AccountInfo null `
 -Role null
```

- Convert the resource to JSON
```powershell
$RoleTargetDto | ConvertTo-JSON
```


[[Back to top]](#) 

