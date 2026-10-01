# DkimAttributes

# DkimAttributes

Import this model from the entry point of its package:

```typescript
import { DkimAttributes } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | UUID associated with domain to be verified | [default to undefined]
**address** | **(optional)** `string` | The identity or domain address | [default to undefined]
**dkimEnabled** | **(optional)** `boolean` | Whether or not DKIM has been enabled for this domain / identity | [default to false]
**dkimTokens** | **(optional)** `Array<string>` | The tokens to be added to a DNS for verification | [default to undefined]
**dkimVerificationStatus** | **(optional)** `string` | The current status if the domain /identity has been verified. Ie SUCCESS, FAILED, PENDING | [default to undefined]
**region** | **(optional)** `string` | The AWS SES region the domain is associated with | [default to undefined]

