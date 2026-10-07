# PublicMachineIdentities

# PublicMachineIdentitiesService
  Use this API to list machine identities with a reduced, public-safe payload for catalog and request workflows.
Responses always include &#x60;id&#x60;, &#x60;name&#x60;, and &#x60;description&#x60;. When your tenant returns enriched public machine identity data, responses also include &#x60;subtype&#x60; and the primary &#x60;owner&#x60; (&#x60;id&#x60;, &#x60;name&#x60;, and &#x60;email&#x60;). When those enriched fields are not enabled for your tenant, &#x60;subtype&#x60; and &#x60;owner&#x60; are omitted or null and requests that filter or sort on &#x60;subtype&#x60; or filter on &#x60;owner.id&#x60;/&#x60;owner&#x60; return &#x60;400 Bad Request&#x60;.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-public-machine-identities-v1**](#list-public-machine-identities-v1) | **GET** `/public-machine-identities/v1` | List public machine identities


## list-public-machine-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List public machine identities
Get a list of machine identities with a reduced public payload (`id`, `name`, `description`, and optionally `subtype` and the primary `owner`). Any authenticated user with the default scope can call this endpoint; it does not require the `idn:mis-identity:read` scope.

[API Spec](https://developer.sailpoint.com/docs/api/list-public-machine-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListPublicMachineIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  &#x60;subtype&#x60;, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return &#x60;400 Bad Request&#x60;. **owner** is rewritten to **owner.id** when filtering. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on &#x60;subtype&#x60; is only available when your tenant returns enriched public machine identity data; otherwise the request returns &#x60;400 Bad Request&#x60;. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<PublicMachineIdentity>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PublicMachineIdentitiesService } from '@sailpoint/angular-sdk/public_machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PublicMachineIdentitiesService);

  listPublicMachineIdentitiesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **subtype**: *eq*  **owner.id**: *eq*  **owner**: *eq*  &#x60;subtype&#x60;, **owner.id**, and **owner** are only available when your tenant returns enriched public machine identity data; otherwise requests using those filters return &#x60;400 Bad Request&#x60;. **owner** is rewritten to **owner.id** when filtering. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, subtype**  Sorting on &#x60;subtype&#x60; is only available when your tenant returns enriched public machine identity data; otherwise the request returns &#x60;400 Bad Request&#x60;. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listPublicMachineIdentitiesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

