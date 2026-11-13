# AssetFileEntry

# AssetFileEntry

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **String** | Relative path within the asset bundle directory | [required]
**SizeBytes** | **Int64** | Uncompressed file size in bytes | [required]
**Sha256** | **String** | SHA-256 hex digest of file contents | [required]

## Examples

- Prepare the resource
```powershell
$AssetFileEntry = Initialize-AssetFileEntry  -Path assets/app.js `
 -SizeBytes 2048 `
 -Sha256 e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
```

- Convert the resource to JSON
```powershell
$AssetFileEntry | ConvertTo-JSON
```


[[Back to top]](#) 

