# UpdateUIPluginRequest

# UpdateUIPluginRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Alias** | **String** | Replacement alias, unique per tenant and normalized to lowercase | [optional] 
**Name** | **map[string]String** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [optional] 
**Description** | **map[string]String** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [optional] 
**ApiScopes** | **[]String** | Replaces the existing list entirely when provided | [optional] 
**Slots** | [**[]PluginSlot**](plugin-slot) | Replaces the existing list when provided | [optional] 
**ContentSecurityPolicies** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**PermissionPolicy** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**IframeAllow** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [optional] 
**IframeSandbox** | **[]String** | Opt-in iframe `sandbox` grants. Replaces the existing list entirely when provided; send `[]` to clear all grants. Omit to leave unchanged. | [optional] 
**State** | **PluginInstanceState** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateUIPluginRequest = Initialize-UpdateUIPluginRequest  -Alias my-custom-plugin `
 -Name {"en":"Example text","fr":"Texte d'exemple"} `
 -Description {"en":"Example text","fr":"Texte d'exemple"} `
 -ApiScopes ["idn:account:read"] `
 -Slots null `
 -ContentSecurityPolicies {"default-src":["'self'"]} `
 -PermissionPolicy {"default-src":["'self'"]} `
 -IframeAllow {"default-src":["'self'"]} `
 -IframeSandbox ["allow-modals","allow-popups"] `
 -State null
```

- Convert the resource to JSON
```powershell
$UpdateUIPluginRequest | ConvertTo-JSON
```


[[Back to top]](#) 

