# IdentityCertified

# IdentityCertified

Import this model from the entry point of its package:

```typescript
import { IdentityCertified } from '@sailpoint/angular-sdk/identity_history';
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

