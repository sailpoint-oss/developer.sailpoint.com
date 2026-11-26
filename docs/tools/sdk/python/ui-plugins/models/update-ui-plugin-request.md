# UpdateUIPluginRequest

# UpdateUIPluginRequest

All fields optional; only supplied fields are updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** | Replacement alias, unique per tenant and normalized to lowercase | [optional] 
**name** | **map[string]str** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [optional] 
**description** | **map[string]str** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [optional] 
**api_scopes** | **[]str** | Replaces the existing list entirely when provided | [optional] 
**slots** | [**[]PluginSlot**](plugin-slot) | Replaces the existing list when provided | [optional] 
**content_security_policies** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**permission_policy** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**iframe_allow** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**iframe_sandbox** | **[]str** | Opt-in iframe `sandbox` grants. Replaces the existing list entirely when provided; send `[]` to clear all grants. Omit to leave unchanged. | [optional] 
**state** | **PluginInstanceState** |  | [optional] 
\}

## Example

```python
from sailpoint.ui_plugins.models.update_ui_plugin_request import UpdateUIPluginRequest

update_ui_plugin_request = UpdateUIPluginRequest(
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
iframe_sandbox=["allow-modals","allow-popups"],
state='ENABLED'
)

```
[[Back to top]](#) 

