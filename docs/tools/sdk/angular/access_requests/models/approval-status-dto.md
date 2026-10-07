# ApprovalStatusDto

# ApprovalStatusDto

Import this model from the entry point of its package:

```typescript
import { ApprovalStatusDto } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ApprovalStatusDtoOriginalOwner` |  | [default to undefined]
**currentOwner** | **(optional)** `ApprovalStatusDtoCurrentOwner` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `ManualWorkItemState` |  | [default to undefined]
**scheme** | **(optional)** `ApprovalScheme` |  | [default to undefined]
**errorMessages** | **(optional)** `Array<ErrorMessageDto>` | If the request failed, includes any error messages that were generated. | [default to undefined]
**comment** | **(optional)** `string` | Comment, if any, provided by the approver. | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]

