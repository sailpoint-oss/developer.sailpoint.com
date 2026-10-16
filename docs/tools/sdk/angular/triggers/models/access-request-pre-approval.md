# AccessRequestPreApproval

# AccessRequestPreApproval

Import this model from the entry point of its package:

```typescript
import { AccessRequestPreApproval } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request. | [default to undefined]
**requestedFor** | `Array<AccessItemRequestedForDto>` | Identities access was requested for. | [default to undefined]
**requestedItems** | `Array<AccessRequestPreApprovalRequestedItemsInner>` | Details of the access items being requested. | [default to undefined]
**requestedBy** | `AccessItemRequesterDto` |  | [default to undefined]

