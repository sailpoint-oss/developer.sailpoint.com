# CreateUIPluginResponse

# CreateUIPluginResponse

A plugin instance plus the ephemeral `devDocumentHeaders` returned only when the instance is created. These headers are not returned when listing or fetching plugin instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plugin_instance_id** | **str** | Unique identifier of the plugin instance | [required]
**alias** | **str** | Tenant-unique alias for the plugin instance, normalized to lowercase | [required]
**name** | **map[string]str** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**description** | **map[string]str** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**api_scopes** | **[]str** | OAuth scopes the plugin requests at registration | [required]
**content_security_policies** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**permission_policy** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**iframe_allow** | **map[string]List[str]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**iframe_sandbox** | **[]str** | Opt-in iframe `sandbox` grants, de-duplicated and sorted. Empty when the plugin has none, including instances created before this field existed. | [required]
**active_asset_bundle_id** | **str** | Currently active asset bundle, or null/omitted if none uploaded yet | [optional] 
**slots** | [**[]PluginSlot**](plugin-slot) |  | [required]
**state** | **PluginInstanceState** |  | [required]
**created** | **datetime** | ISO 8601 creation timestamp | [required]
**modified** | **datetime** | ISO 8601 last-modified timestamp | [required]
**dev_document_headers** | [**PluginDocumentHeaders**](plugin-document-headers) |  | [required]
\}

## Example

```python
from sailpoint.ui_plugins.models.create_ui_plugin_response import CreateUIPluginResponse

create_ui_plugin_response = CreateUIPluginResponse(
plugin_instance_id='2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c',
alias='my-custom-plugin',
name={en=Example text, fr=Texte d'exemple},
description={en=Example text, fr=Texte d'exemple},
api_scopes=[idn:account:read],
content_security_policies={default-src=['self']},
permission_policy={default-src=['self']},
iframe_allow={default-src=['self']},
iframe_sandbox=["allow-modals","allow-popups"],
active_asset_bundle_id='',
slots=[
                    sailpoint.ui_plugins.models.plugin_slot.Plugin Slot(
                        slot_id = 'full-page', 
                        required_capabilities = ["ORG_ADMIN"], 
                        restrict_to_users = ["2c9180867b5f4b3e8a1c2d3e4f5a6b7c"], )
                    ],
state='ENABLED',
created='2024-08-16T14:16:58.389Z',
modified='2024-08-16T14:16:58.389Z',
dev_document_headers=sailpoint.ui_plugins.models.plugin_document_headers.Plugin Document Headers(
                    content_security_policy = 'default-src 'none'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; font-src 'self'; connect-src 'self'', 
                    permissions_policy = 'accelerometer=(), camera=(), geolocation=(), microphone=()', )
)

```
[[Back to top]](#) 

