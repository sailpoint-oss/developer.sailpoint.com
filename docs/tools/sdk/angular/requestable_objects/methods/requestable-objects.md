# RequestableObjects

# RequestableObjectsService
  Use this API to implement requestable object functionality. 
With this functionality in place, administrators can determine which access items can be requested with the [Access Request APIs](https://developer.sailpoint.com/docs/api/access-requests), along with their statuses. 
This can be helpful for administrators who are implementing and customizing access request functionality as a way of checking which items are requestable as they are created, assigned, and made available.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-requestable-objects-v1**](#list-requestable-objects-v1) | **GET** `/requestable-objects/v1` | Requestable objects list


## list-requestable-objects-v1
Requestable objects list
Get a list of acccess items that can be requested through the [Access Request endpoints](https://developer.sailpoint.com/docs/api/access-requests). Access items are marked with `AVAILABLE`, `PENDING` or `ASSIGNED` with respect to the identity provided using `identity-id` query parameter.
This endpoint only lists roles and access profiles. For gathering requestable entitlements, the [Entitlements List API](https://developer.sailpoint.com/docs/api/list-entitlements-v-1) can be used with the segmented-for-identity parameter.
Any authenticated token can call this endpoint to see their requestable access items.

[API Spec](https://developer.sailpoint.com/docs/api/list-requestable-objects-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListRequestableObjectsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. | [optional] [default to undefined]
**types** | `string` | Filters the results to the specified type/types, where each type is one of &#x60;ROLE&#x60; or &#x60;ACCESS_PROFILE&#x60;. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. | [optional] [default to undefined]
**term** | `string` | Allows searching requestable access items with a partial match on the name or description. If &#x60;term&#x60; is provided, then the API will ignore the &#x60;filter&#x60; query parameter. | [optional] [default to undefined]
**statuses** | `string` | Filters the result to the specified status/statuses, where each status is one of &#x60;AVAILABLE&#x60;, &#x60;ASSIGNED&#x60;, or &#x60;PENDING&#x60;. Specifying this parameter without also specifying an &#x60;identity-id&#x60; parameter results in an error.  SailPoint may add additional statuses in the future without notice. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  | [optional] [default to undefined]

### Return type

`Observable<Array<RequestableObject>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RequestableObjectsService } from '@sailpoint/angular-sdk/requestable_objects';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RequestableObjectsService);

  listRequestableObjectsV1(): void {
    const identityId: string = ; // If present, the value returns only requestable objects for the specified identity.  * Admin users can call this with any identity ID value.  * Non-admin users can only specify *me* or pass their own identity ID value.  * If absent, returns a list of all requestable objects for the tenant. Only admin users can make such a call. In this case, the available, pending, assigned accesses will not be annotated in the result. (optional)
    const types: string = ; // Filters the results to the specified type/types, where each type is one of &#x60;ROLE&#x60; or &#x60;ACCESS_PROFILE&#x60;. If absent, all types are returned. SailPoint may add support for additional types in the future without notice. (optional)
    const term: string = ; // Allows searching requestable access items with a partial match on the name or description. If &#x60;term&#x60; is provided, then the API will ignore the &#x60;filter&#x60; query parameter. (optional)
    const statuses: string = ; // Filters the result to the specified status/statuses, where each status is one of &#x60;AVAILABLE&#x60;, &#x60;ASSIGNED&#x60;, or &#x60;PENDING&#x60;. Specifying this parameter without also specifying an &#x60;identity-id&#x60; parameter results in an error.  SailPoint may add additional statuses in the future without notice. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  (optional)
    this.api.listRequestableObjectsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

