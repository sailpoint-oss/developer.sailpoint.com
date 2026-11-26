# UIPluginAssetBundle

# UIPluginAssetBundle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assetBundleId** | `string` | Unique identifier of the asset bundle | [default to undefined]
**pluginInstanceId** | `string` | Plugin instance this bundle belongs to | [default to undefined]
**assets** | `Array<AssetFileEntry>` |  | [default to undefined]
**assetBasePath** | `string` | S3 key prefix where the bundle\'s files are stored | [default to undefined]
**cleanupAfter** | **(optional)** `string` | ISO 8601 timestamp after which S3 assets may be cleaned up; null/omitted if active | [default to undefined]
**created** | `string` | ISO 8601 creation timestamp | [default to undefined]

