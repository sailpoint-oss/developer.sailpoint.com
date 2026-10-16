# EmailStatusDto

# EmailStatusDto

Import this model from the entry point of its package:

```typescript
import { EmailStatusDto } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | Unique identifier for the verified sender address | [default to undefined]
**email** | **(optional)** `string` | The verified sender email address | [default to undefined]
**isVerifiedByDomain** | **(optional)** `boolean` | Whether the sender address is verified by domain | [default to false]
**verificationStatus** | **(optional)** `string` | The verification status of the sender address | [default to undefined]
**region** | **(optional)** `string` | The AWS SES region the sender address is associated with | [default to undefined]

