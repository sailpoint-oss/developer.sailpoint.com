# MachineAccountCreateRequestInputV2

# MachineAccountCreateRequestInputV2

Import this model from the entry point of its package:

```typescript
import { MachineAccountCreateRequestInputV2 } from '@sailpoint/angular-sdk/machine_account_creation_request';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subtypeId** | `string` | Subtype ID for which machine account create is enabled and user have the entitlement to create the machine account. | [default to undefined]
**sourceId** | **(optional)** `string` | ID of the source to create the machine account on. The subtype must be available on this source. Required when subtypes can be configured per source for the tenant; otherwise it is ignored and the subtype\'s own source is used. | [default to undefined]
**formId** | **(optional)** `string` | Form ID selected by user for the machine account create request. | [default to undefined]
**ownerIdentityId** | `string` | Owner Identity ID. This identity will be assigned as an owner of the created machine account. | [default to undefined]
**machineIdentityId** | **(optional)** `string` | Machine identity to correlate with the created machine account. If not provided, a new machine identity will be created. | [default to undefined]
**environment** | **(optional)** `string` | Environment type to use for the machine account. | [default to undefined]
**description** | **(optional)** `string` | Description for the machine account. | [default to undefined]
**userInput** | **(optional)** `object` | Fields of the form linked to the subtype in approval settings. | [default to undefined]
**entitlements** | **(optional)** `Array<MachineAccountCreateEntitlement>` | Entitlements to request for the created machine account, each with an optional comment, start date, and remove date. Duplicate IDs are ignored and up to 20 unique entitlements are allowed. Use either `entitlements` or `entitlementIds`, depending on which one your tenant supports; sending a non-empty list that your tenant does not support returns `400`. | [default to undefined]
**entitlementIds** | **(optional)** `Array<string>` | List of entitlement IDs to provision for created machine account. Up to 20 unique entitlements are allowed. Use either `entitlements` or `entitlementIds`, depending on which one your tenant supports; sending a non-empty list that your tenant does not support returns `400`. | [default to undefined]

