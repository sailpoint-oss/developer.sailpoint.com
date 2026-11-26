# JitActivationActivateResponse

# JitActivationActivateResponse

Import this model from the entry point of its package:

```typescript
import { JitActivationActivateResponse } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | `string` | Workflow or business identifier for this activation. | [default to undefined]
**activationId** | `string` | Persistent activation record identifier for this JIT activation. | [default to undefined]
**connectionId** | `string` | Entitlement connection identifier for the activation. | [default to undefined]
**activationPeriodMins** | `number` | Activation duration in minutes for this workflow. | [default to undefined]
**status** | `ActivationWorkflowStatus` |  | [default to undefined]
**startTime** | `string` | Time when the activation workflow was started (ISO-8601). | [default to undefined]

