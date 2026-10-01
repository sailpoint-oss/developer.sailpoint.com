# ScheduledSearch

# ScheduledSearchService
  Use this API to implement scheduled search functionality. 
With scheduled search functionality in place, users can run saved search queries on their tenants on a schedule, and Identity Security Cloud emails them the search results. 
Users can also share these search results with other users by email by adding those users as subscribers, or those users can subscribe themselves. 

One of the greatest benefits of saving searches is the ability to run those searches on a schedule. 
This is essential for organizations to constantly detect any changes to user information or access throughout their tenants and across all their sources. 
For example, the manager Amanda Ross can schedule a saved search &quot;manager.name:amanda.ross AND attributes.location:austin&quot; on a schedule to regularly stay aware of changes with the Austin employees reporting to her.
Identity Security Cloud emails her the search results when the search runs, so she can work on other tasks instead of actively running this search.

In Identity Security Cloud, scheduling a search involves a subscription. 
Users can create a subscription for a saved search and schedule it to run daily, weekly, or monthly (you can only use one schedule option at a time). 
The user can add other identities as subscribers so when the scheduled search runs, the subscribers and the user all receive emails. 

By default, subscriptions exclude detailed results from the emails, for security purposes. 
Including detailed results about user access in an email may expose sensitive information.
However, the subscription creator can choose to include the information in the emails.  

By default, Identity Security Cloud sends emails to the subscribers even when the searches do not return new results. 
However, the subscription creator can choose to suppress these empty emails. 

Users can also subscribe to saved searches that already have existing subscriptions so they receive emails when the searches run. 
A saved search can have up to 10 subscriptions configured at a time. 

The subscription creator can enable, disable, or delete the subscription. 

Refer to [Subscribing to Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html#subscribing-to-saved-searches) for more information about scheduling searches and subscribing to them.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-scheduled-search-v1**](#create-scheduled-search-v1) | **POST** `/scheduled-searches/v1` | Create a new scheduled search
[**delete-scheduled-search-v1**](#delete-scheduled-search-v1) | **DELETE** `/scheduled-searches/v1/{id}` | Delete a scheduled search
[**get-scheduled-search-v1**](#get-scheduled-search-v1) | **GET** `/scheduled-searches/v1/{id}` | Get a scheduled search
[**list-scheduled-search-v1**](#list-scheduled-search-v1) | **GET** `/scheduled-searches/v1` | List scheduled searches
[**unsubscribe-scheduled-search-v1**](#unsubscribe-scheduled-search-v1) | **POST** `/scheduled-searches/v1/{id}/unsubscribe` | Unsubscribe a recipient from scheduled search
[**update-scheduled-search-v1**](#update-scheduled-search-v1) | **PUT** `/scheduled-searches/v1/{id}` | Update an existing scheduled search


## create-scheduled-search-v1
Create a new scheduled search
Creates a new scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/create-scheduled-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateScheduledSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createScheduledSearchV1Request** | `CreateScheduledSearchV1Request` | The scheduled search to persist. | 

### Return type

`Observable<ScheduledSearch>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ScheduledSearchService } from '@sailpoint/angular-sdk/scheduled_search';
import { CreateScheduledSearchV1Request } from '@sailpoint/angular-sdk/scheduled_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ScheduledSearchService);

  createScheduledSearchV1(): void {
    const createScheduledSearchV1Request: CreateScheduledSearchV1Request = ; // The scheduled search to persist.
    this.api.createScheduledSearchV1({ createScheduledSearchV1Request: createScheduledSearchV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-scheduled-search-v1
Delete a scheduled search
Deletes the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/delete-scheduled-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteScheduledSearchV1RequestParams`.


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
import { ScheduledSearchService } from '@sailpoint/angular-sdk/scheduled_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ScheduledSearchService);

  deleteScheduledSearchV1(): void {
    const id: string = ; // ID of the requested document.
    this.api.deleteScheduledSearchV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-scheduled-search-v1
Get a scheduled search
Returns the specified scheduled search.

[API Spec](https://developer.sailpoint.com/docs/api/get-scheduled-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetScheduledSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]

### Return type

`Observable<ScheduledSearch>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ScheduledSearchService } from '@sailpoint/angular-sdk/scheduled_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ScheduledSearchService);

  getScheduledSearchV1(): void {
    const id: string = ; // ID of the requested document.
    this.api.getScheduledSearchV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-scheduled-search-v1
List scheduled searches
Returns a list of scheduled searches.


[API Spec](https://developer.sailpoint.com/docs/api/list-scheduled-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListScheduledSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<ScheduledSearch>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ScheduledSearchService } from '@sailpoint/angular-sdk/scheduled_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ScheduledSearchService);

  listScheduledSearchV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional)
    this.api.listScheduledSearchV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## unsubscribe-scheduled-search-v1
Unsubscribe a recipient from scheduled search
Unsubscribes a recipient from the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/unsubscribe-scheduled-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UnsubscribeScheduledSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]
**typedReference** | `TypedReference` | The recipient to be removed from the scheduled search.  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ScheduledSearchService } from '@sailpoint/angular-sdk/scheduled_search';
import { TypedReference } from '@sailpoint/angular-sdk/scheduled_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ScheduledSearchService);

  unsubscribeScheduledSearchV1(): void {
    const id: string = ; // ID of the requested document.
    const typedReference: TypedReference = ; // The recipient to be removed from the scheduled search. 
    this.api.unsubscribeScheduledSearchV1({ id: id, typedReference: typedReference }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-scheduled-search-v1
Update an existing scheduled search
Updates an existing scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/update-scheduled-search-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateScheduledSearchV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the requested document. |  [default to undefined]
**scheduledSearch** | `ScheduledSearch` | The scheduled search to persist. | 

### Return type

`Observable<ScheduledSearch>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ScheduledSearchService } from '@sailpoint/angular-sdk/scheduled_search';
import { ScheduledSearch } from '@sailpoint/angular-sdk/scheduled_search';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ScheduledSearchService);

  updateScheduledSearchV1(): void {
    const id: string = ; // ID of the requested document.
    const scheduledSearch: ScheduledSearch = ; // The scheduled search to persist.
    this.api.updateScheduledSearchV1({ id: id, scheduledSearch: scheduledSearch }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

