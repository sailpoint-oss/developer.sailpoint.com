# GetHistoricalIdentityEventsV1200ResponseInner

# GetHistoricalIdentityEventsV1200ResponseInner

Import this model from the entry point of its package:

```typescript
import { GetHistoricalIdentityEventsV1200ResponseInner } from '@sailpoint/angular-sdk/identity_history';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificationId** | `string` | the id of the certification item | [default to undefined]
**certificationName** | `string` | the certification item name | [default to undefined]
**signedDate** | **(optional)** `string` | the date ceritification was signed | [default to undefined]
**certifiers** | **(optional)** `Array<CertifierResponse>` | this field is deprecated and may go away | [default to undefined]
**reviewers** | **(optional)** `Array<CertifierResponse>` | The list of identities who review this certification | [default to undefined]
**signer** | **(optional)** `CertifierResponse` |  | [default to undefined]
**eventType** | **(optional)** `string` | the event type | [default to undefined]
**dateTime** | **(optional)** `string` | the date of event | [default to undefined]
**identityId** | **(optional)** `string` | the identity id | [default to undefined]
**accessItem** | `AccessItemAssociatedAccessItem` |  | [default to undefined]
**governanceEvent** | `CorrelatedGovernanceEvent` |  | [default to undefined]
**accessItemType** | **(optional)** `string` | the access item type | [default to undefined]
**attributeChanges** | `Array<AttributeChange>` |  | [default to undefined]
**accessRequest** | `AccessRequestResponse2` |  | [default to undefined]
**account** | `AccountStatusChangedAccount` |  | [default to undefined]
**statusChange** | `AccountStatusChangedStatusChange` |  | [default to undefined]

