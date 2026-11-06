# BusinessApplicationSignature

# BusinessApplicationSignature

Import this model from the entry point of its package:

```typescript
import { BusinessApplicationSignature } from '@sailpoint/angular-sdk/business_applications';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `string` | Signature type, matched against the machine identity\'s subtype. Kept consistent with the machine identity subtype values. | [default to undefined]
**name** | `string` | Connector signature value to match against the machine identity\'s `spBusinessApplication` connector attribute. | [default to undefined]

