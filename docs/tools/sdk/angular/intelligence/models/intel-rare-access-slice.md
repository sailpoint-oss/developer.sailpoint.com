# IntelRareAccessSlice

# IntelRareAccessSlice

Import this model from the entry point of its package:

```typescript
import { IntelRareAccessSlice } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<IntelOutlierAccessItem>` | First page of rare access items for the identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Total number of rare-access items for the resolved outlier; omitted when `items` is empty. | [default to undefined]
**next** | **(optional)** `string` | Absolute URL to the next rareAccess page; present when totalCount exceeds the items returned on this page. | [default to undefined]

