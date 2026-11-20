# MfaDuoConfig

# MfaDuoConfig

Import this model from the entry point of its package:

```typescript
import { MfaDuoConfig } from '@sailpoint/angular-sdk/mfa_configuration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mfaMethod** | **(optional)** `string` | Mfa method name | [default to undefined]
**enabled** | **(optional)** `boolean` | If MFA method is enabled. | [default to false]
**host** | **(optional)** `string` | The server host name or IP address of the MFA provider. | [default to undefined]
**accessKey** | **(optional)** `string` | The secret key for authenticating requests to the MFA provider. | [default to undefined]
**identityAttribute** | **(optional)** `string` | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [default to undefined]
**configProperties** | **(optional)**  | A map with additional config properties for the given MFA method - duo-web. | [default to undefined]

