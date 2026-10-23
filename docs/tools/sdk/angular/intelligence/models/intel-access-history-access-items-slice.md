# IntelAccessHistoryAccessItemsSlice

# IntelAccessHistoryAccessItemsSlice

Import this model from the entry point of its package:

```typescript
import { IntelAccessHistoryAccessItemsSlice } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelAccessItemHistoryEvent>` | First page of access-item history events for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of events in this category; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next access-items page; present when totalCount exceeds the items returned on this page. | [default to undefined]

