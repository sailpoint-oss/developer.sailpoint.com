# MailFromAttributes

# MailFromAttributes

Import this model from the entry point of its package:

```typescript
import { MailFromAttributes } from '@sailpoint/angular-sdk/notifications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | **(optional)** `string` | The email identity | [default to undefined]
**mailFromDomain** | **(optional)** `string` | The name of a domain that an email identity uses as a custom MAIL FROM domain | [default to undefined]
**mxRecord** | **(optional)** `string` | MX record that is required in customer\'s DNS to allow the domain to receive bounce and complaint notifications that email providers send you | [default to undefined]
**txtRecord** | **(optional)** `string` | TXT record that is required in customer\'s DNS in order to prove that Amazon SES is authorized to send email from your domain | [default to undefined]
**mailFromDomainStatus** | **(optional)** `string` | The current status of the MAIL FROM verification | [default to undefined]

