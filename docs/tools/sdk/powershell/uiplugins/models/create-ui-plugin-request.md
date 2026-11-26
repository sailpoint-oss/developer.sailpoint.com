# CreateUIPluginRequest

# CreateUIPluginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **String** | Human-readable deterministic alias unique per tenant. Letters, numbers, dashes only; no leading/trailing/consecutive dashes. Normalized to lowercase on write. | [required]
**Name** | **map[string]String** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**Description** | **map[string]String** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**ApiScopes** | **[]String** | OAuth scopes the plugin requests at registration. Defaults to `[]`. | [optional] 
**Slots** | [**[]PluginSlot**](plugin-slot) | UI extension point declarations (at least one required) | [required]
**ContentSecurityPolicies** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**PermissionPolicy** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**IframeAllow** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**IframeSandbox** | **[]String** | Opt-in iframe `sandbox` grants. Optional; omitted or empty means no grants. Defaults to `[]`. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateUIPluginRequest = Initialize-CreateUIPluginRequest  -Alias my-custom-plugin `
 -Name {"en":"Example text","fr":"Texte d'exemple"} `
 -Description {"en":"Example text","fr":"Texte d'exemple"} `
 -ApiScopes ["idn:account:read"] `
 -Slots null `
 -ContentSecurityPolicies {"default-src":["'self'"]} `
 -PermissionPolicy {"default-src":["'self'"]} `
 -IframeAllow {"default-src":["'self'"]} `
 -IframeSandbox ["allow-modals","allow-popups"]
```

- Convert the resource to JSON
```powershell
$CreateUIPluginRequest | ConvertTo-JSON
```


[[Back to top]](#) 

