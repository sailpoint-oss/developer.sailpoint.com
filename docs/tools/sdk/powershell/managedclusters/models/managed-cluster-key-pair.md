# ManagedClusterKeyPair

# ManagedClusterKeyPair

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PublicKey** | **String** | ManagedCluster publicKey | [optional] 
**PublicKeyThumbprint** | **String** | ManagedCluster publicKeyThumbprint | [optional] 
**PublicKeyCertificate** | **String** | ManagedCluster publicKeyCertificate | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterKeyPair = Initialize-ManagedClusterKeyPair  -PublicKey -----BEGIN PUBLIC KEY-----******-----END PUBLIC KEY----- `
 -PublicKeyThumbprint 6CMlaJIV44-xJxcB3CJBjDUUn54 `
 -PublicKeyCertificate -----BEGIN CERTIFICATE-----****-----END CERTIFICATE-----
```

- Convert the resource to JSON
```powershell
$ManagedClusterKeyPair | ConvertTo-JSON
```


[[Back to top]](#) 

