# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

Import this model from the entry point of its package:

```typescript
import { MachineAccountCreateRequestInputV2 } from '@sailpoint/angular-sdk/machine_account_creation_request';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sourceId** | **(optional)** `string` | Source the machine account is created on. Required while tiered subtype configuration is enabled, so a connector-tier subtype can name its source. Ignored when that flag is off; the source is then the subtype\'s own source. | [default to '']
**subtypeId** | `string` | Subtype that must be in the source effective set and for which the caller holds the create machine account entitlement. | [default to undefined]
**formId** | **(optional)** `string` | Form selected for the machine account create request. | [default to '']
**ownerIdentityId** | `string` | Identity assigned as owner of the created machine account. | [default to undefined]
**machineIdentityId** | **(optional)** `string` | Machine identity to correlate with the created machine account. When omitted, a new machine identity is created. | [default to undefined]
**environment** | **(optional)** `string` | Environment type to use for the machine account. | [default to '']
**description** | **(optional)** `string` | Description for the machine account. | [default to '']
**userInput** | **(optional)** `object` | Fields of the form linked to the subtype in approval settings. | [default to undefined]
**entitlements** | **(optional)** `Array<MachineAccountCreateEntitlement>` | Entitlements to provision, including an optional comment and access dates. Honored while per-entitlement request details are enabled. De-duplicated by `id` (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when that flag is off. An empty array is accepted. | [default to undefined]
**entitlementIds** | **(optional)** `Array<string>` | Entitlement ids to provision. Honored while per-entitlement request details are off. Values are trimmed, blanks are dropped, and ids are de-duplicated (first occurrence wins), at most 20 unique ids. A non-empty array is rejected when per-entitlement request details are enabled. An empty array is accepted. | [default to undefined]

