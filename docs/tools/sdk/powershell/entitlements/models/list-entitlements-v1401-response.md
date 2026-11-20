# ListEntitlementsV1401Response

# ListEntitlementsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListEntitlementsV1401Response = Initialize-ListEntitlementsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListEntitlementsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

