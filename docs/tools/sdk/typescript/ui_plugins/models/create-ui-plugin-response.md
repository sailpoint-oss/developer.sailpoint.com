# CreateUIPluginResponse

# CreateUIPluginResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | Unique identifier of the plugin instance | [default to undefined]
**alias** | `string` | Tenant-unique alias for the plugin instance, normalized to lowercase | [default to undefined]
**name** |  | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [default to undefined]
**description** |  | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [default to undefined]
**apiScopes** | `Array<string>` | OAuth scopes the plugin requests at registration | [default to undefined]
**contentSecurityPolicies** |  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**permissionPolicy** |  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**iframeAllow** |  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**iframeSandbox** | `Array<string>` | Opt-in iframe `sandbox` grants, de-duplicated and sorted. Empty when the plugin has none, including instances created before this field existed. | [default to undefined]
**activeAssetBundleId** | **(optional)** `string` | Currently active asset bundle, or null/omitted if none uploaded yet | [default to undefined]
**slots** | `Array<PluginSlot>` |  | [default to undefined]
**state** | `PluginInstanceState` |  | [default to undefined]
**created** | `string` | ISO 8601 creation timestamp | [default to undefined]
**modified** | `string` | ISO 8601 last-modified timestamp | [default to undefined]
**devDocumentHeaders** | `PluginDocumentHeaders` |  | [default to undefined]

