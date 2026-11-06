# JitActivationExtendResponse

# JitActivationExtendResponse

Import this model from the entry point of its package:

```typescript
import { JitActivationExtendResponse } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Workflow or business identifier for this activation. | [default to undefined]
**activationId** | `string` | Persistent activation record identifier for this JIT activation. | [default to undefined]
**connectionId** | `string` | Entitlement connection identifier for the activation. | [default to undefined]
**activationPeriodExtensionMins** | `number` | Extension applied to the activation period, in minutes. | [default to undefined]
**status** | `ActivationWorkflowStatus` |  | [default to undefined]
**startTime** | `string` | Time associated with this extend request (ISO-8601). | [default to undefined]

