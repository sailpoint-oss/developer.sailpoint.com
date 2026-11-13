# UpdateUIPluginRequest

# UpdateUIPluginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **(optional)** `string` | Replacement alias, unique per tenant and normalized to lowercase | [default to undefined]
**name** | **(optional)**  | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [default to undefined]
**description** | **(optional)**  | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [default to undefined]
**apiScopes** | **(optional)** `Array<string>` | Replaces the existing list entirely when provided | [default to undefined]
**slots** | **(optional)** `Array<PluginSlot>` | Replaces the existing list when provided | [default to undefined]
**contentSecurityPolicies** | **(optional)**  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**permissionPolicy** | **(optional)**  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**iframeAllow** | **(optional)**  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**iframeSandbox** | **(optional)** `Array<string>` | Opt-in iframe `sandbox` grants. Replaces the existing list entirely when provided; send `[]` to clear all grants. Omit to leave unchanged. | [default to undefined]
**state** | **(optional)** `PluginInstanceState` |  | [default to undefined]

