# PluginDocumentHeaders

# PluginDocumentHeaders

Ephemeral plugin-document security headers, for example to give a local dev server the same CSP as the deployed plugin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_security_policy** | **str** | Effective `Content-Security-Policy` header value for plugin documents. | [required]
**permissions_policy** | **str** | Effective `Permissions-Policy` header value for plugin documents. Features are denied by default unless the plugin opts in. | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.plugin_document_headers import PluginDocumentHeaders

plugin_document_headers = PluginDocumentHeaders(
content_security_policy='default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'',
permissions_policy='accelerometer=(), camera=(), geolocation=(), microphone=()'
)

```
[[Back to top]](#) 

