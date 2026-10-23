# Intelmachineaccountwire

# Intelmachineaccountwire

Import this model from the entry point of its package:

```typescript
import { Intelmachineaccountwire } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Unique account identifier in Identity Security Cloud. | [default to undefined]
**name** | `string` | Account name on the correlated source. | [default to undefined]
**nativeIdentity** | `string` | Native identifier on the source system. | [default to undefined]
**source** | `Intelmachinesourcewire` | Source metadata for the machine account when present upstream. | [default to undefined]
**enabled** | `boolean` | True when the account is enabled for use on the source. | [default to undefined]
**locked** | `boolean` | True when the account is locked on the source. | [default to undefined]
**machineIdentity** | `Intelmachineentityref` | Reference to the parent machine identity when populated upstream. | [default to undefined]
**ownerIdentity** | `Intelmachineentityref` | Reference to the owning human identity when populated upstream. | [default to undefined]
**description** | `string` | Free-text account description from the source. | [default to undefined]
**subtype** | `string` | Account subtype label from upstream classification. | [default to undefined]
**accessType** | `string` | Access type label for the account (for example account or entitlement). | [default to undefined]
**environment** | `string` | Environment label associated with the account. | [default to undefined]
**classificationMethod** | `string` | Method used to classify the account as a machine account. | [default to undefined]
**manuallyEdited** | `boolean` | True when an administrator manually edited account attributes. | [default to undefined]
**manuallyCorrelated** | `boolean` | True when an administrator manually correlated the account. | [default to undefined]
**hasEntitlements** | `boolean` | True when the account holds one or more entitlements. | [default to undefined]
**created** | `string` | Timestamp when the account record was created. | [default to undefined]
**modified** | `string` | Timestamp when the account record was last modified. | [default to undefined]
**attributes** |  | Extended account attributes from the source connector. | [default to undefined]
**connectorAttributes** |  | Connector-specific attribute bag from upstream. | [default to undefined]

