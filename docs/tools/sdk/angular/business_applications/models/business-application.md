# BusinessApplication

# BusinessApplication

Import this model from the entry point of its package:

```typescript
import { BusinessApplication } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Business Application ID. Assigned by the service on create. | [readonly] [default to undefined]
**name** | `string` | Human-readable display name. Must be unique within the tenant. | [default to undefined]
**description** | **(optional)** `string` | Free-text description of the Business Application. | [default to undefined]
**vendor** | **(optional)** `string` | Vendor or publisher of the Business Application. | [default to undefined]
**signatures** | **(optional)** `Array<BusinessApplicationSignature>` | Signatures used to automatically correlate machine identities to this Business Application. Modifying this field requires the custom Business Application feature to be enabled. | [default to undefined]
**owner** | **(optional)** `BusinessApplicationOwner` |  | [default to undefined]
**additionalOwners** | **(optional)** `Array<BusinessApplicationAdditionalOwnersInner>` | Additional (secondary) owners of the Business Application. | [default to undefined]
**sanctionedStatus** | **(optional)** `SanctionedStatus` | Sanctioned status of the Business Application. Defaults to `UNKNOWN`. | [default to undefined]
**origin** | **(optional)** `BusinessApplicationOrigin` |  | [readonly] [default to undefined]
**source** | **(optional)** `BusinessApplicationSource` |  | [default to undefined]
**created** | **(optional)** `string` | Time the Business Application was created. | [readonly] [default to undefined]
**modified** | **(optional)** `string` | Time the Business Application was last modified. | [readonly] [default to undefined]

