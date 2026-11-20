# CreateUiPluginAssetBundleV1Request

# CreateUiPluginAssetBundleV1Request


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **[]bytearray** | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`). | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.create_ui_plugin_asset_bundle_v1_request import CreateUiPluginAssetBundleV1Request

create_ui_plugin_asset_bundle_v1_request = CreateUiPluginAssetBundleV1Request(
file=[
                    bytes(b'blah')
                    ]
)

```
[[Back to top]](#) 

