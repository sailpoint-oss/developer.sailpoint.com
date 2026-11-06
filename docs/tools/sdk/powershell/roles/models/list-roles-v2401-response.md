# ListRolesV2401Response

# ListRolesV2401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListRolesV2401Response = Initialize-ListRolesV2401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListRolesV2401Response | ConvertTo-JSON
```


[[Back to top]](#) 

