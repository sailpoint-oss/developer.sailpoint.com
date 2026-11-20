# Intelmachineaccountsslice

# Intelmachineaccountsslice

Import this model from the entry point of its package:

```typescript
import { Intelmachineaccountsslice } from '@sailpoint/angular-sdk/intelligence';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | `Array<Intelmachineaccountwire>` | Machine accounts correlated to the non-human identity. | [default to undefined]
**totalCount** | **(optional)** `number` | Correlated machine account count from aggregation; omitted when items is empty. | [default to undefined]
**next** | **(optional)** `string` | Next page URL when totalCount exceeds items returned. Includes isNHI=true. | [default to undefined]

