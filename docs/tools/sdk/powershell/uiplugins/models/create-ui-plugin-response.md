# CreateUIPluginResponse

# CreateUIPluginResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PluginInstanceId** | **String** | Unique identifier of the plugin instance | [required]
**Alias** | **String** | Tenant-unique alias for the plugin instance, normalized to lowercase | [required]
**Name** | **map[string]String** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**Description** | **map[string]String** | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [required]
**ApiScopes** | **[]String** | OAuth scopes the plugin requests at registration | [required]
**ContentSecurityPolicies** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**PermissionPolicy** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**IframeAllow** | **map[string]String[]** | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [required]
**IframeSandbox** | **[]String** | Opt-in iframe `sandbox` grants, de-duplicated and sorted. Empty when the plugin has none, including instances created before this field existed. | [required]
**ActiveAssetBundleId** | **String** | Currently active asset bundle, or null/omitted if none uploaded yet | [optional] 
**Slots** | [**[]PluginSlot**](plugin-slot) |  | [required]
**State** | **PluginInstanceState** |  | [required]
**Created** | **System.DateTime** | ISO 8601 creation timestamp | [required]
**Modified** | **System.DateTime** | ISO 8601 last-modified timestamp | [required]
**DevDocumentHeaders** | [**PluginDocumentHeaders**](plugin-document-headers) |  | [required]

## Examples

- Prepare the resource
```powershell
$CreateUIPluginResponse = Initialize-CreateUIPluginResponse  -PluginInstanceId 2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c `
 -Alias my-custom-plugin `
 -Name {en=Example text, fr=Texte d'exemple} `
 -Description {en=Example text, fr=Texte d'exemple} `
 -ApiScopes [idn:account:read] `
 -ContentSecurityPolicies {default-src=['self']} `
 -PermissionPolicy {default-src=['self']} `
 -IframeAllow {default-src=['self']} `
 -IframeSandbox ["allow-modals","allow-popups"] `
 -ActiveAssetBundleId null `
 -Slots null `
 -State null `
 -Created 2024-08-16T14:16:58.389Z `
 -Modified 2024-08-16T14:16:58.389Z `
 -DevDocumentHeaders null
```

- Convert the resource to JSON
```powershell
$CreateUIPluginResponse | ConvertTo-JSON
```


[[Back to top]](#) 

