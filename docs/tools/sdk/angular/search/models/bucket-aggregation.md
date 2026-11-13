# BucketAggregation

# BucketAggregation

Import this model from the entry point of its package:

```typescript
import { BucketAggregation } from '@sailpoint/angular-sdk/search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The name of the bucket aggregate to be included in the result. | [default to undefined]
**type** | **(optional)** `BucketType` |  | [default to undefined]
**field** | `string` | The field to bucket on. Prefix the field name with \'@\' to reference a nested object. | [default to undefined]
**size** | **(optional)** `number` | Maximum number of buckets to include. | [default to undefined]
**minDocCount** | **(optional)** `number` | Minimum number of documents a bucket should have. | [default to undefined]

