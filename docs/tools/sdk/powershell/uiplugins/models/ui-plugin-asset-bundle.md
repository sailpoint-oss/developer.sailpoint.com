# UIPluginAssetBundle

# UIPluginAssetBundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssetBundleId** | **String** | Unique identifier of the asset bundle | [required]
**PluginInstanceId** | **String** | Plugin instance this bundle belongs to | [required]
**Assets** | [**[]AssetFileEntry**](asset-file-entry) |  | [required]
**AssetBasePath** | **String** | S3 key prefix where the bundle's files are stored | [required]
**CleanupAfter** | **System.DateTime** | ISO 8601 timestamp after which S3 assets may be cleaned up; null/omitted if active | [optional] 
**Created** | **System.DateTime** | ISO 8601 creation timestamp | [required]

## Examples

- Prepare the resource
```powershell
$UIPluginAssetBundle = Initialize-UIPluginAssetBundle  -AssetBundleId 3fa85f64-5717-4562-b3fc-2c963f66afa6 `
 -PluginInstanceId 2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c `
 -Assets null `
 -AssetBasePath 2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c/3fa85f64-5717-4562-b3fc-2c963f66afa6/ `
 -CleanupAfter null `
 -Created 2024-08-16T14:16:58.389Z
```

- Convert the resource to JSON
```powershell
$UIPluginAssetBundle | ConvertTo-JSON
```


[[Back to top]](#) 

