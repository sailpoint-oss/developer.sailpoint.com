# ListWorkgroupsV1401Response

# ListWorkgroupsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$ListWorkgroupsV1401Response = Initialize-ListWorkgroupsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$ListWorkgroupsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

