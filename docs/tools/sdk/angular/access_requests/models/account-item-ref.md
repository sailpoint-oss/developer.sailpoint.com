# AccountItemRef

# AccountItemRef

Import this model from the entry point of its package:

```typescript
import { AccountItemRef } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountUuid** | **(optional)** `string` | The uuid for the account on the source, available under the \'objectguid\' attribute * Corresponds to the account\'s unique identifier as returned by accounts-selection or the accounts APIs. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source. | [default to undefined]
**nativeIdentity** | **(optional)** `string` | The \'distinguishedName\' attribute for the account. * For machine identity GRANT_ACCESS / MODIFY_ACCESS, provide `accountUuid` and/or `nativeIdentity`. Submitted values must match a real machine account for the requested machine identity on the selected source. | [default to undefined]

