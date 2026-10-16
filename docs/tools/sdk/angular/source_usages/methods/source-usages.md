# SourceUsages

# SourceUsagesService
  Use this API to implement source usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; sources are being used.
This allows organizations to get the information they need to start optimizing and securing source usage.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-status-by-source-id-v1**](#get-status-by-source-id-v1) | **GET** `/source-usages/v1/{sourceId}/status` | Finds status of source usage
[**get-usages-by-source-id-v1**](#get-usages-by-source-id-v1) | **GET** `/source-usages/v1/{sourceId}/summaries` | Returns source usage insights


## get-status-by-source-id-v1
Finds status of source usage
This API returns the status of the source usage insights setup by IDN source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-status-by-source-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetStatusBySourceIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of IDN source |  [default to undefined]

### Return type

`Observable<SourceUsageStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SourceUsagesService } from '@sailpoint/angular-sdk/source_usages';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SourceUsagesService);

  getStatusBySourceIdV1(): void {
    const sourceId: string = ; // ID of IDN source
    this.api.getStatusBySourceIdV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-usages-by-source-id-v1
Returns source usage insights
This API returns a summary of source usage insights for past 12 months.

[API Spec](https://developer.sailpoint.com/docs/api/get-usages-by-source-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetUsagesBySourceIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of IDN source |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** | [optional] [default to undefined]

### Return type

`Observable<Array<SourceUsage>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SourceUsagesService } from '@sailpoint/angular-sdk/source_usages';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SourceUsagesService);

  getUsagesBySourceIdV1(): void {
    const sourceId: string = ; // ID of IDN source
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional)
    this.api.getUsagesBySourceIdV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

