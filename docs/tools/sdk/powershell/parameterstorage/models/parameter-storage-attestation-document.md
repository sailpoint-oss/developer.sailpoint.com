# ParameterStorageAttestationDocument

# ParameterStorageAttestationDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttestationDocument** | **String** | The Base64Url encoded attestation document. | [optional] 

## Examples

- Prepare the resource
```powershell
$ParameterStorageAttestationDocument = Initialize-ParameterStorageAttestationDocument  -AttestationDocument YmFzZTY0IGVuY29kZWQgYXR0ZXN0YXRpb24gZG9jdW1lbnQgZ29lcyBoZXJlLg==
```

- Convert the resource to JSON
```powershell
$ParameterStorageAttestationDocument | ConvertTo-JSON
```


[[Back to top]](#) 

