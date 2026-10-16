# GetPasswordSyncGroupsV1401Response

# GetPasswordSyncGroupsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetPasswordSyncGroupsV1401Response = Initialize-GetPasswordSyncGroupsV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetPasswordSyncGroupsV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

