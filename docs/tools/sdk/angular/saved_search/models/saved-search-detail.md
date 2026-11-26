# SavedSearchDetail

# SavedSearchDetail

Import this model from the entry point of its package:

```typescript
import { SavedSearchDetail } from '@sailpoint/angular-sdk/saved_search';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **(optional)** `string` | A date-time in ISO-8601 format | [default to undefined]
**modified** | **(optional)** `string` | A date-time in ISO-8601 format | [default to undefined]
**indices** | `Array<Index>` | The names of the Elasticsearch indices in which to search.  | [default to undefined]
**columns** | **(optional)**  | The columns to be returned (specifies the order in which they will be presented) for each document type.  The currently supported document types are: _accessprofile_, _accountactivity_, _account_, _aggregation_, _entitlement_, _event_, _identity_, and _role_.  | [default to undefined]
**query** | `string` | The search query using Elasticsearch [Query String Query](https://www.elastic.co/guide/en/elasticsearch/reference/5.2/query-dsl-query-string-query.html#query-string) syntax from the Query DSL.  | [default to undefined]
**fields** | **(optional)** `Array<string>` | The fields to be searched against in a multi-field query.  | [default to undefined]
**orderBy** | **(optional)**  | Sort by index. This takes precedence over the `sort` property.  | [default to undefined]
**sort** | **(optional)** `Array<string>` | The fields to be used to sort the search results.  | [default to undefined]
**filters** | **(optional)** `SavedSearchDetailFilters` |  | [default to undefined]

