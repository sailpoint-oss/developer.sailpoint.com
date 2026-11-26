# JITActivationFrictionPatchRequest

# JITActivationFrictionPatchRequest

Import this model from the entry point of its package:

```typescript
import { JITActivationFrictionPatchRequest } from '@sailpoint/angular-sdk/jit_activations';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | `JITActivationFrictionType` | Kind of friction step being submitted. | [default to undefined]
**submittedData** | **(optional)** `FrictionSubmittedData` | Data submitted for this friction step. Omit when bypassing a step that allows bypass. | [default to undefined]
**bypass** | **(optional)** `boolean` | Whether to bypass this friction step. | [default to false]

