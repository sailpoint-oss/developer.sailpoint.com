# CertifierResponse

# CertifierResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | the id of the certifier | [optional] 
**DisplayName** | **String** | the name of the certifier | [optional] 

## Examples

- Prepare the resource
```powershell
$CertifierResponse = Initialize-CertifierResponse  -Id 8a80828f643d484f01643e14202e206f `
 -DisplayName John Snow
```

- Convert the resource to JSON
```powershell
$CertifierResponse | ConvertTo-JSON
```


[[Back to top]](#) 

