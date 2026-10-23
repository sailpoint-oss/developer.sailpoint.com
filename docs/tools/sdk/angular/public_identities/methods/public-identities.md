# PublicIdentities

# PublicIdentitiesService
  Use this API in conjunction with [Public Identites Config](https://developer.sailpoint.com/docs/api/public-identities-config) to enable non-administrators to view identities&#39; publicly visible attributes. 
With this functionality in place, non-administrators can view identity attributes other than the default attributes (email, lifecycle state, and manager), depending on which identity attributes their organization administrators have made public. 
This can be helpful for access approvers, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identities-v1**](#get-public-identities-v1) | **GET** `/public-identities/v1` | Get list of public identities
[**get-public-identities-visible-attributes-v2**](#get-public-identities-visible-attributes-v2) | **GET** `/public-identities/v2/visible-attributes` | Get public identity visible attributes
[**search-public-identities-v2**](#search-public-identities-v2) | **POST** `/public-identities/v2/search` | Search public identities


## get-public-identities-v1
Get list of public identities
Get a list of public identities.  Set `add-core-filters` to `true` to exclude incomplete identities and uncorrelated accounts.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPublicIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* | [optional] [default to undefined]
**addCoreFilters** | `boolean` | If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \&quot;spadmin\&quot; or \&quot;cloudadmin\&quot;.   - uid should not be null.   - lastname should not be null.   - email should not be null. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]

### Return type

`Observable<Array<PublicIdentity>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PublicIdentitiesService } from '@sailpoint/angular-sdk/public_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PublicIdentitiesService);

  getPublicIdentitiesV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **alias**: *eq, sw*  **email**: *eq, sw*  **firstname**: *eq, sw*  **lastname**: *eq, sw* (optional)
    const addCoreFilters: boolean = ; // If *true*, only get identities which satisfy ALL the following criteria in addition to any criteria specified by *filters*:   - Should be either correlated or protected.   - Should not be \&quot;spadmin\&quot; or \&quot;cloudadmin\&quot;.   - uid should not be null.   - lastname should not be null.   - email should not be null. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    this.api.getPublicIdentitiesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-public-identities-visible-attributes-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get public identity visible attributes
Returns the default and configured identity attribute keys (with display names) that are allowed for public-identity search and projection. Call this before POST /public-identities/v2/search to learn which field keys are valid in query fields and sort.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identities-visible-attributes-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPublicIdentitiesVisibleAttributesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<PublicIdentityVisibleAttributes>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PublicIdentitiesService } from '@sailpoint/angular-sdk/public_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PublicIdentitiesService);

  getPublicIdentitiesVisibleAttributesV2(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPublicIdentitiesVisibleAttributesV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-public-identities-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Search public identities
Search public identities using a composite query and return matching records.

The root query set combines criteria with AND and must include attributes.identityState.exact = ACTIVE. The field keys must come from GET /public-identities/v2/visible-attributes and may use the prefix "attributes." and/or the suffix ".exact". See the request examples for the required exact payload structure.

Any authenticated user with the default scope can call this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/search-public-identities-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchPublicIdentitiesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**publicIdentitiesSearchRequest** | `PublicIdentitiesSearchRequest` |  | 
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<PublicIdentityV2>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PublicIdentitiesService } from '@sailpoint/angular-sdk/public_identities';
import { PublicIdentitiesSearchRequest } from '@sailpoint/angular-sdk/public_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PublicIdentitiesService);

  searchPublicIdentitiesV2(): void {
    const publicIdentitiesSearchRequest: PublicIdentitiesSearchRequest = ; // 
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.searchPublicIdentitiesV2({ publicIdentitiesSearchRequest: publicIdentitiesSearchRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

