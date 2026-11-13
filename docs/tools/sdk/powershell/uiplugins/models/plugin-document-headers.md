# PluginDocumentHeaders

# PluginDocumentHeaders

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContentSecurityPolicy** | **String** | Effective `Content-Security-Policy` header value for plugin documents. | [required]
**PermissionsPolicy** | **String** | Effective `Permissions-Policy` header value for plugin documents. Features are denied by default unless the plugin opts in. | [required]

## Examples

- Prepare the resource
```powershell
$PluginDocumentHeaders = Initialize-PluginDocumentHeaders  -ContentSecurityPolicy default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self' `
 -PermissionsPolicy accelerometer=(), camera=(), geolocation=(), microphone=()
```

- Convert the resource to JSON
```powershell
$PluginDocumentHeaders | ConvertTo-JSON
```


[[Back to top]](#) 

