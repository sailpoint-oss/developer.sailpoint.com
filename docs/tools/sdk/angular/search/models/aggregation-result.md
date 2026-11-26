# AggregationResult

# AggregationResult

Import this model from the entry point of its package:

```typescript
import { AggregationResult } from '@sailpoint/angular-sdk/search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregations** | **(optional)** `object` | The document containing the results of the aggregation. This document is controlled by Elasticsearch and depends on the type of aggregation query that is run.  See Elasticsearch [Aggregations](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/search-aggregations.html) documentation for information.  | [default to undefined]
**hits** | **(optional)** `Array<object>` | The results of the aggregation search query.  | [default to undefined]

