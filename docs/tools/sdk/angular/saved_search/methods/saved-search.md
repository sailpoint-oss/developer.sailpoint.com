# SavedSearch

# SavedSearchService
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/scheduled-search) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-saved-search-v1**](#create-saved-search-v1) | **POST** `/saved-searches/v1` | Create a saved search
[**delete-saved-search-v1**](#delete-saved-search-v1) | **DELETE** `/saved-searches/v1/{id}` | Delete document by id
[**execute-saved-search-v1**](#execute-saved-search-v1) | **POST** `/saved-searches/v1/{id}/execute` | Execute a saved search by id
[**get-saved-search-v1**](#get-saved-search-v1) | **GET** `/saved-searches/v1/{id}` | Return saved search by id
[**list-saved-searches-v1**](#list-saved-searches-v1) | **GET** `/saved-searches/v1` | A list of saved searches
[**put-saved-search-v1**](#put-saved-search-v1) | **PUT** `/saved-searches/v1/{id}` | Updates an existing saved search 


## create-saved-search-v1
Create a saved search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/create-saved-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSavedSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createSavedSearchV1Request** | `CreateSavedSearchV1Request` | The saved search to persist. | 

### Return type

`Observable<SavedSearch>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SavedSearchService } from '@sailpoint/angular-sdk/saved_search';
import { CreateSavedSearchV1Request } from '@sailpoint/angular-sdk/saved_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SavedSearchService);

  createSavedSearchV1(): void {
    const createSavedSearchV1Request: CreateSavedSearchV1Request = ; // The saved search to persist.
    this.api.createSavedSearchV1({ createSavedSearchV1Request: createSavedSearchV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-saved-search-v1
Delete document by id
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/delete-saved-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteSavedSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SavedSearchService } from '@sailpoint/angular-sdk/saved_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SavedSearchService);

  deleteSavedSearchV1(): void {
    const id: string = ; // ID of the requested document.
    this.api.deleteSavedSearchV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## execute-saved-search-v1
Execute a saved search by id
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/execute-saved-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExecuteSavedSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]
**searchArguments** | `SearchArguments` | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided.  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SavedSearchService } from '@sailpoint/angular-sdk/saved_search';
import { SearchArguments } from '@sailpoint/angular-sdk/saved_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SavedSearchService);

  executeSavedSearchV1(): void {
    const id: string = ; // ID of the requested document.
    const searchArguments: SearchArguments = ; // When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 
    this.api.executeSavedSearchV1({ id: id, searchArguments: searchArguments }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-saved-search-v1
Return saved search by id
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/get-saved-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSavedSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

`Observable<SavedSearch>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SavedSearchService } from '@sailpoint/angular-sdk/saved_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SavedSearchService);

  getSavedSearchV1(): void {
    const id: string = ; // ID of the requested document.
    this.api.getSavedSearchV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-saved-searches-v1
A list of saved searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/list-saved-searches-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSavedSearchesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<SavedSearch>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SavedSearchService } from '@sailpoint/angular-sdk/saved_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SavedSearchService);

  listSavedSearchesV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)
    this.api.listSavedSearchesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-saved-search-v1
Updates an existing saved search 
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/put-saved-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutSavedSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]
**savedSearch** | `SavedSearch` | The saved search to persist. | 

### Return type

`Observable<SavedSearch>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SavedSearchService } from '@sailpoint/angular-sdk/saved_search';
import { SavedSearch } from '@sailpoint/angular-sdk/saved_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SavedSearchService);

  putSavedSearchV1(): void {
    const id: string = ; // ID of the requested document.
    const savedSearch: SavedSearch = ; // The saved search to persist.
    this.api.putSavedSearchV1({ id: id, savedSearch: savedSearch }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

