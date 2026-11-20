# CreateUiPluginAssetBundleV1Request

# CreateUiPluginAssetBundleV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | **[]System.IO.FileInfo** | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`). | [required]

## Examples

- Prepare the resource
```powershell
$CreateUiPluginAssetBundleV1Request = Initialize-CreateUiPluginAssetBundleV1Request  -File null
```

- Convert the resource to JSON
```powershell
$CreateUiPluginAssetBundleV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

