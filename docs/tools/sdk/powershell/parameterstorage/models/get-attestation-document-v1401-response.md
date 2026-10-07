# GetAttestationDocumentV1401Response

# GetAttestationDocumentV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarError** | **AnyType** | A message describing the error | [optional] 

## Examples

- Prepare the resource
```powershell
$GetAttestationDocumentV1401Response = Initialize-GetAttestationDocumentV1401Response  -VarError JWT validation failed: JWT is expired
```

- Convert the resource to JSON
```powershell
$GetAttestationDocumentV1401Response | ConvertTo-JSON
```


[[Back to top]](#) 

