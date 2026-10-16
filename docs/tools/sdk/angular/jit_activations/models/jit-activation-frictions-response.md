# JITActivationFrictionsResponse

# JITActivationFrictionsResponse

Import this model from the entry point of its package:

```typescript
import { JITActivationFrictionsResponse } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activationId** | `string` | Identifier of the activation. | [default to undefined]
**frictionState** | `JITActivationFrictionState` | Aggregate friction state of the activation. | [default to undefined]
**connectionId** | `string` | Identifier of the entitlement connection. | [default to undefined]
**activationInitTime** | `string` | Time the activation started. | [default to undefined]
**expiryMins** | `string` | Minutes allowed to complete all frictions. | [default to undefined]
**frictions** | `Array<JITActivationFrictionResponse>` | Friction steps for the activation. | [default to undefined]

