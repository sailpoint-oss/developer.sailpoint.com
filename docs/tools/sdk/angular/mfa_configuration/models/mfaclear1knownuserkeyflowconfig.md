# Mfaclear1knownuserkeyflowconfig

# Mfaclear1knownuserkeyflowconfig

Import this model from the entry point of its package:

```typescript
import { Mfaclear1knownuserkeyflowconfig } from '@sailpoint/angular-sdk/mfa_configuration';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | If the known user key flow is enabled for the CLEAR1 MFA method. | [default to false]
**projectId** | **(optional)** `string` | The ID of the CLEAR1 project used for the known user key flow. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [default to undefined]
**identityAttribute** | **(optional)** `string` | The name of the attribute used to map an Identity Security Cloud identity to the CLEAR1 user key. This field is required if `enabled` is *true*. It may be null if `enabled` is *false*. | [default to undefined]

