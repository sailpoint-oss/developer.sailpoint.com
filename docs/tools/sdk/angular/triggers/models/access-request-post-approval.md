# AccessRequestPostApproval

# AccessRequestPostApproval

Import this model from the entry point of its package:

```typescript
import { AccessRequestPostApproval } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessRequestId** | `string` | The unique ID of the access request. | [default to undefined]
**requestedFor** | `Array<AccessItemRequestedForDto>` | Identities access was requested for. | [default to undefined]
**requestedItemsStatus** | `Array<AccessRequestPostApprovalRequestedItemsStatusInner>` | Details on the outcome of each access item. | [default to undefined]
**requestedBy** | `AccessItemRequesterDto` |  | [default to undefined]

