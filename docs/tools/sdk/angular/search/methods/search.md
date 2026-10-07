# Search

# SearchService
  Use this API to implement search functionality. 
With search functionality in place, users can search their tenants for nearly any information from throughout their organizations. 

Identity Security Cloud enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using Identity Security Cloud&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Using Search](https://documentation.sailpoint.com/saas/help/search/index.html) for more information about Identity Security Cloud&#39;s search and its different possibilities. 

The search feature uses Elasticsearch as a datastore and query engine. 
The power of Elasticsearch makes this feature suitable for ad-hoc reporting.
However, data from the operational databases (ex. identities, roles, events, etc) has to be ingested into Elasticsearch. 
This ingestion process introduces a latency from when the operational data is created to when it is available in search. 
Depending on the system load, this can take a few seconds to a few minutes. 
Please keep this latency in mind when you use search.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**search-aggregate-v1**](#search-aggregate-v1) | **POST** `/search/v1/aggregate` | Perform a search query aggregation
[**search-count-v1**](#search-count-v1) | **POST** `/search/v1/count` | Count documents satisfying a query
[**search-get-v1**](#search-get-v1) | **GET** `/search/v1/{index}/{id}` | Get a document by id
[**search-post-v1**](#search-post-v1) | **POST** `/search/v1` | Perform search


## search-aggregate-v1
Perform a search query aggregation
Performs a search query aggregation and returns the aggregation result. By default, you can page a maximum of 10,000 search result records.  To page past 10,000 records, you can use searchAfter paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement searchAfter paging. 

[API Spec](https://developer.sailpoint.com/docs/api/search-aggregate-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchAggregateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**search** | `Search` |  | 
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<AggregationResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/csv

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchService } from '@sailpoint/angular-sdk/search';
import { Search } from '@sailpoint/angular-sdk/search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchService);

  searchAggregateV1(): void {
    const search: Search = ; // 
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.searchAggregateV1({ search: search }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-count-v1
Count documents satisfying a query
Performs a search with a provided query and returns the count of results in the X-Total-Count header.

[API Spec](https://developer.sailpoint.com/docs/api/search-count-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchCountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**search** | `Search` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchService } from '@sailpoint/angular-sdk/search';
import { Search } from '@sailpoint/angular-sdk/search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchService);

  searchCountV1(): void {
    const search: Search = ; // 
    this.api.searchCountV1({ search: search }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-get-v1
Get a document by id
Fetches a single document from the specified index, using the specified document ID.
**Note:** Response fields with an underscore (`_`) prefix, such as `_type` and `_index`, are internal metadata fields. These fields are for SailPoint internal use only and are subject to change without notice. Do not rely on them in your integrations.

[API Spec](https://developer.sailpoint.com/docs/api/search-get-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchGetV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**index** | `'accessprofiles' | 'accountactivities' | 'entitlements' | 'events' | 'identities' | 'roles'` | The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*.  |  [default to undefined]
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchService } from '@sailpoint/angular-sdk/search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchService);

  searchGetV1(): void {
    const index: string = ; // The index from which to fetch the specified document.  The currently supported index names are: *accessprofiles*, *accountactivities*, *entitlements*, *events*, *identities*, and *roles*. 
    const id: string = ; // ID of the requested document.
    this.api.searchGetV1({ index: index, id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-post-v1
Perform search
Perform a search with the provided query and return a matching result collection. To page past 10,000 records, you can use `searchAfter` paging.  Refer to [Paginating Search Queries](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-search-queries) for more information about how to implement `searchAfter` paging. The search query itself has a size limitation of approximately 800 objects when filtering by large lists of IDs or values (e.g., using `terms` filters with extensive lists).
**Note:** Response fields with an underscore (`_`) prefix, such as `_type` and `_index`, are internal metadata fields. These fields are for SailPoint internal use only and are subject to change without notice. Do not rely on them in your integrations.

[API Spec](https://developer.sailpoint.com/docs/api/search-post-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchPostV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**search** | `Search` |  | 
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<object>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SearchService } from '@sailpoint/angular-sdk/search';
import { Search } from '@sailpoint/angular-sdk/search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SearchService);

  searchPostV1(): void {
    const search: Search = ; // 
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.searchPostV1({ search: search }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

