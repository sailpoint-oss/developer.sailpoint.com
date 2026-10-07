# ListRolesV1401Response

# ListRolesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListRolesV1401Response = Initialize-ListRolesV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListRolesV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

