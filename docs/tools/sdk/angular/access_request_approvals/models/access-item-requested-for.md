# AccessItemRequestedFor

# AccessItemRequestedFor

Import this model from the entry point of its package:

```typescript
import { AccessItemRequestedFor } from '@sailpoint/angular-sdk/access_request_approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **(optional)** `string` | DTO type of identity the access item is requested for. `IDENTITY` for human identities. `MACHINE_IDENTITY` for machine identities. When `MACHINE_IDENTITY`, `id` is the machine identity id.  | [default to undefined]
**id** | **(optional)** `string` | ID of identity the access item is requested for. | [default to undefined]
**name** | **(optional)** `string` | Human-readable display name of identity the access item is requested for. | [default to undefined]

