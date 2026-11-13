# MachineIdentityBulkResult

# MachineIdentityBulkResult

Import this model from the entry point of its package:

```typescript
import { MachineIdentityBulkResult } from '@sailpoint/angular-sdk/machine_identities';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The requested machine identity ID. | [default to undefined]
**status** | **(optional)** `number` | HTTP status code for this ID. `200` means the operation succeeded. Other values explain why it did not, for example `400` when the ID is missing or not valid, `404` when the machine identity is not found or the caller does not own it, and `409` when the ID appears more than once in the request. | [default to undefined]
**message** | **(optional)** `string` | Message describing the outcome for this ID. | [default to undefined]

