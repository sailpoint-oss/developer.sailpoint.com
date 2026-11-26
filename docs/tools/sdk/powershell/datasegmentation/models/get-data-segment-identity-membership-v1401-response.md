# GetDataSegmentIdentityMembershipV1401Response

# GetDataSegmentIdentityMembershipV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetDataSegmentIdentityMembershipV1401Response = Initialize-GetDataSegmentIdentityMembershipV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetDataSegmentIdentityMembershipV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

