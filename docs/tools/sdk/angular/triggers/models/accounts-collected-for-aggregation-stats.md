# AccountsCollectedForAggregationStats

# AccountsCollectedForAggregationStats

Import this model from the entry point of its package:

```typescript
import { AccountsCollectedForAggregationStats } from '@sailpoint/angular-sdk/triggers';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scanned** | `number` | The number of accounts which were scanned / iterated over. | [default to undefined]
**unchanged** | `number` | The number of accounts which existed before, but had no changes. | [default to undefined]
**changed** | `number` | The number of accounts which existed before, but had changes. | [default to undefined]
**added** | `number` | The number of accounts which are new - have not existed before. | [default to undefined]
**removed** | `number` | The number accounts which existed before, but no longer exist (thus getting removed). | [default to undefined]

