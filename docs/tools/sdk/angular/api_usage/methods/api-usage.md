# ApiUsage

# ApiUsageService
  Use this API to retrieve metrics about an org&#39;s API usage.
With this functionality in place, administrators can monitor the usage of APIs within a specified timespan, as well as a breakdown of commonly-used APIs sorted by number of requests.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-total-count-v1**](#get-total-count-v1) | **GET** `/api-usage/v1/count` | Total number of API requests
[**list-api-summary-v1**](#list-api-summary-v1) | **GET** `/api-usage/v1/summary` | Get Api Summary


## get-total-count-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Total number of API requests
This API gets an aggregated number of all API calls from an org in a specific timespan. Unless specified, the results are aggregated between the first day of the current month and today.

[API Spec](https://developer.sailpoint.com/docs/api/get-total-count-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetTotalCountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* | [optional] [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ApiUsageService } from '@sailpoint/angular-sdk/api_usage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ApiUsageService);

  getTotalCountV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)
    this.api.getTotalCountV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-api-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Api Summary
This API gets a list of APIs called by the org in a specific timespan, sorted by number of calls. Unless specified,  the results are aggregated between the first day of the current month and today.

[API Spec](https://developer.sailpoint.com/docs/api/list-api-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListApiSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | [optional] [default to undefined]

### Return type

`Observable<Array<SummaryResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ApiUsageService } from '@sailpoint/angular-sdk/api_usage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ApiUsageService);

  listApiSummaryV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)
    const limit: number = ; // Max number of results to return. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    this.api.listApiSummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

