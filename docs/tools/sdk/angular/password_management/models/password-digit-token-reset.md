# PasswordDigitTokenReset

# PasswordDigitTokenReset

Import this model from the entry point of its package:

```typescript
import { PasswordDigitTokenReset } from '@sailpoint/angular-sdk/password_management';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**userId** | `string` | The uid of the user requested for digit token | [default to undefined]
**length** | **(optional)** `number` | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [default to undefined]
**durationMinutes** | **(optional)** `number` | The time to live for the digit token in minutes. The default value is 5 minutes. | [default to undefined]

