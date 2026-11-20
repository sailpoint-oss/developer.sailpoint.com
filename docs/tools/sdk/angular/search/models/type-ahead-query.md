# TypeAheadQuery

# TypeAheadQuery

Import this model from the entry point of its package:

```typescript
import { TypeAheadQuery } from '@sailpoint/angular-sdk/search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | `string` | The type ahead query string used to construct a phrase prefix match query. | [default to undefined]
**field** | `string` | The field on which to perform the type ahead search. | [default to undefined]
**nestedType** | **(optional)** `string` | The nested type. | [default to undefined]
**maxExpansions** | **(optional)** `number` | The number of suffixes the last term will be expanded into. Influences the performance of the query and the number results returned. Valid values: 1 to 1000. | [default to 10]
**size** | **(optional)** `number` | The max amount of records the search will return. | [default to 100]
**sort** | **(optional)** `string` | The sort order of the returned records. | [default to 'desc']
**sortByValue** | **(optional)** `boolean` | The flag that defines the sort type, by count or value. | [default to false]

