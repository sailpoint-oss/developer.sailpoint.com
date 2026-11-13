# UIPluginAssetBundle

# UIPluginAssetBundle

API response for an asset bundle (tenantId omitted)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_bundle_id** | **str** | Unique identifier of the asset bundle | [required]
**plugin_instance_id** | **str** | Plugin instance this bundle belongs to | [required]
**assets** | [**[]AssetFileEntry**](asset-file-entry) |  | [required]
**asset_base_path** | **str** | S3 key prefix where the bundle's files are stored | [required]
**cleanup_after** | **datetime** | ISO 8601 timestamp after which S3 assets may be cleaned up; null/omitted if active | [optional] 
**created** | **datetime** | ISO 8601 creation timestamp | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.ui_plugin_asset_bundle import UIPluginAssetBundle

ui_plugin_asset_bundle = UIPluginAssetBundle(
asset_bundle_id='3fa85f64-5717-4562-b3fc-2c963f66afa6',
plugin_instance_id='2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c',
assets=[
                    sailpoint.ui_plugins.models.asset_file_entry.Asset File Entry(
                        path = 'assets/app.js', 
                        size_bytes = 2048, 
                        sha256 = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', )
                    ],
asset_base_path='2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c/3fa85f64-5717-4562-b3fc-2c963f66afa6/',
cleanup_after=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
created='2024-08-16T14:16:58.389Z'
)

```
[[Back to top]](#) 

