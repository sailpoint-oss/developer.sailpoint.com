# LinkUIPluginRequest

# LinkUIPluginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**port** | **int** | Local dev server port. UMS constructs `https://localhost:{port}` server-side. Clients do not send a URL. | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.link_ui_plugin_request import LinkUIPluginRequest

link_ui_plugin_request = LinkUIPluginRequest(
port=4200
)

```
[[Back to top]](#) 

