# LinkUIPluginResponse

# LinkUIPluginResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dev_overrides** | **map[string]str** | Updated `devOverrides` map of `identityId` to `https://localhost:{port}`. | [required]
**dev_document_headers** | [**PluginDocumentHeaders**](plugin-document-headers) |  | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.link_ui_plugin_response import LinkUIPluginResponse

link_ui_plugin_response = LinkUIPluginResponse(
dev_overrides={"2c9180867bexampleidentity000001":"https://localhost:4200"},
dev_document_headers=sailpoint.ui_plugins.models.plugin_document_headers.Plugin Document Headers(
                    content_security_policy = 'default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'', 
                    permissions_policy = 'accelerometer=(), camera=(), geolocation=(), microphone=()', )
)

```
[[Back to top]](#) 

