# IAIPeerGroupStrategies

# IAIPeerGroupStrategiesService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-peer-group-outliers-v1**](#get-peer-group-outliers-v1) | **GET** `/peer-group-strategies/v1/{strategy}/identity-outliers` | Identity outliers list


## get-peer-group-outliers-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Identity outliers list
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/get-peer-group-outliers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPeerGroupOutliersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**strategy** | `'entitlement'` | The strategy used to create peer groups. Currently, \&#39;entitlement\&#39; is supported. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<PeerGroupMember>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIPeerGroupStrategiesService } from '@sailpoint/angular-sdk/iai_peer_group_strategies';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIPeerGroupStrategiesService);

  getPeerGroupOutliersV1(): void {
    const strategy: string = ; // The strategy used to create peer groups. Currently, \&#39;entitlement\&#39; is supported.
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPeerGroupOutliersV1({ strategy: strategy }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

