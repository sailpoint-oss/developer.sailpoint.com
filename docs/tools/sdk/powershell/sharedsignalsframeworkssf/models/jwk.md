# JWK

# JWK

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alg** | **String** | Algorithm intended for use with the key (e.g. RS256). | [optional] 
**E** | **String** | RSA public exponent (Base64url encoded). | [optional] 
**Kid** | **String** | Key ID - unique identifier for the key. | [optional] 
**Kty** | **String** | Key type (e.g. RSA). | [optional] 
**N** | **String** | RSA modulus (Base64url encoded). | [optional] 
**Use** | **String** | Intended use of the key (e.g. sig for signature verification). | [optional] 

## Examples

- Prepare the resource
```powershell
$JWK = Initialize-JWK  -Alg RS256 `
 -E AQAB `
 -Kid mrk-3db792b3d0a642dbbb5bb28b542929cd `
 -Kty RSA `
 -N xMPKL_ccvjTDQAJ60jg5kP9XJmEIpeSb1FIjzvAnM9RP-vSiY5iW2eK0-VLHYB_XbcDT8jzneUmX90mCfiwF_F4Mjh3f0D79ncrXDglnBLKnuqmvNcblUOuOyNFts3jQSBAqB_GR_dSjKLzbs1wP3K8EJqosQGfPNuh5HxFfU79v-uZFdtkYzf_xtu8phrO84VT_DLuFJyIxLOcY5MVJ6uHlmlKXSJbMO8xTKzvcz6TTZM8XrrT73GpTCdtmNVpCLz2v14XQb-6sNeya2v037ktrgdUWFLC63iIgNKzgNr88L7x3j5AeeOi1VX_2ZAxLrz4BUtJxxyWxVthrpDCYuQ `
 -Use sig
```

- Convert the resource to JSON
```powershell
$JWK | ConvertTo-JSON
```


[[Back to top]](#) 

