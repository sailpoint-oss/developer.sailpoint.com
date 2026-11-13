# AssetFileEntry

# AssetFileEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Relative path within the asset bundle directory | [required]
**size_bytes** | **int** | Uncompressed file size in bytes | [required]
**sha256** | **str** | SHA-256 hex digest of file contents | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.asset_file_entry import AssetFileEntry

asset_file_entry = AssetFileEntry(
path='assets/app.js',
size_bytes=2048,
sha256='e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855'
)

```
[[Back to top]](#) 

