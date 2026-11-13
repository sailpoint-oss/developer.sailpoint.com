# ManagedClusterEncryptionConfig

# ManagedClusterEncryptionConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Format** |  **Enum** [  "V2",    "V3" ] | Specifies the format used for encrypted data, such as secrets. The format determines how the encrypted data is structured and processed. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterEncryptionConfig = Initialize-ManagedClusterEncryptionConfig  -Format V3
```

- Convert the resource to JSON
```powershell
$ManagedClusterEncryptionConfig | ConvertTo-JSON
```


[[Back to top]](#) 

