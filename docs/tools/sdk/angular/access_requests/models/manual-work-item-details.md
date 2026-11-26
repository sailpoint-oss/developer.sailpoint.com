# ManualWorkItemDetails

# ManualWorkItemDetails

Import this model from the entry point of its package:

```typescript
import { ManualWorkItemDetails } from '@sailpoint/angular-sdk/access_requests';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**forwarded** | **(optional)** `boolean` | True if the request for this item was forwarded from one owner to another. | [default to false]
**originalOwner** | **(optional)** `ManualWorkItemDetailsOriginalOwner` |  | [default to undefined]
**currentOwner** | **(optional)** `ManualWorkItemDetailsCurrentOwner` |  | [default to undefined]
**modified** | **(optional)** `string` | Time at which item was modified. | [default to undefined]
**status** | **(optional)** `ManualWorkItemState` |  | [default to undefined]
**forwardHistory** | **(optional)** `Array<ApprovalForwardHistory>` | The history of approval forward action. | [default to undefined]

