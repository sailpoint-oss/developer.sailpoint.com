# CreateUIPluginRequest

# CreateUIPluginRequest

Import this model from the entry point of its package:

```typescript
import { CreateUIPluginRequest } from '@sailpoint/angular-sdk/ui_plugins';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | `string` | Human-readable deterministic alias unique per tenant. Letters, numbers, dashes only; no leading/trailing/consecutive dashes. Normalized to lowercase on write. | [default to undefined]
**name** |  | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [default to undefined]
**description** |  | Localized string keyed by locale code. At least one non-empty locale entry is required on create/update. Conventionally includes `en`. | [default to undefined]
**apiScopes** | **(optional)** `Array<string>` | OAuth scopes the plugin requests at registration. Defaults to `[]`. | [default to undefined]
**slots** | `Array<PluginSlot>` | UI extension point declarations (at least one required) | [default to undefined]
**contentSecurityPolicies** |  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**permissionPolicy** |  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**iframeAllow** |  | Map of directive name to allowlist values. Used for CSP, Permissions-Policy, and iframe-allow on create/update. Only platform allowlisted directives/keywords are accepted (see UMS validators). | [default to undefined]
**iframeSandbox** | **(optional)** `Array<string>` | Opt-in iframe `sandbox` grants. Optional; omitted or empty means no grants. Defaults to `[]`. | [default to undefined]

