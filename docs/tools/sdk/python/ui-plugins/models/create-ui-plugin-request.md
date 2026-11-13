# CreateUIPluginRequest

# CreateUIPluginRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Human-readable deterministic alias unique per tenant. Letters, numbers, dashes only; no leading/trailing/consecutive dashes. Normalized to lowercase on write. | [required]
**name** | **map[string]str** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**description** | **map[string]str** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**api_scopes** | **[]str** | OAuth scopes the plugin requests at registration. Defaults to `[]`. | [optional] [default to []]
**slots** | [**[]PluginSlot**](plugin-slot) | UI extension point declarations (at least one required) | [required]
**content_security_policies** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**permission_policy** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**iframe_allow** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**iframe_sandbox** | **[]str** | Opt-in iframe `sandbox` grants. Optional; omitted or empty means no grants. Defaults to `[]`. | [optional] 
\}

## Example

```python
from sailpoint.ui_plugins.models.create_ui_plugin_request import CreateUIPluginRequest

create_ui_plugin_request = CreateUIPluginRequest(
alias='my-custom-plugin',
name={"en":"Example text","fr":"Texte d'exemple"},
description={"en":"Example text","fr":"Texte d'exemple"},
api_scopes=["idn:account:read"],
slots=[
                    sailpoint.ui_plugins.models.plugin_slot.Plugin Slot(
                        slot_id = 'full-page', 
                        required_capabilities = ["ORG_ADMIN"], 
                        restrict_to_users = ["2c9180867b5f4b3e8a1c2d3e4f5a6b7c"], )
                    ],
content_security_policies={"default-src":["'self'"]},
permission_policy={"default-src":["'self'"]},
iframe_allow={"default-src":["'self'"]},
iframe_sandbox=["allow-modals","allow-popups"]
)

```
[[Back to top]](#) 

