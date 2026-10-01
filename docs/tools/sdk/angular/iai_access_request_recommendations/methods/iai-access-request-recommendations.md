# IAIAccessRequestRecommendations

# IAIAccessRequestRecommendationsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**add-access-request-recommendations-ignored-item-v1**](#add-access-request-recommendations-ignored-item-v1) | **POST** `/ai-access-request-recommendations/v1/ignored-items` | Ignore access request recommendation
[**add-access-request-recommendations-requested-item-v1**](#add-access-request-recommendations-requested-item-v1) | **POST** `/ai-access-request-recommendations/v1/requested-items` | Accept access request recommendation
[**add-access-request-recommendations-viewed-item-v1**](#add-access-request-recommendations-viewed-item-v1) | **POST** `/ai-access-request-recommendations/v1/viewed-items` | Mark viewed access request recommendations
[**add-access-request-recommendations-viewed-items-v1**](#add-access-request-recommendations-viewed-items-v1) | **POST** `/ai-access-request-recommendations/v1/viewed-items/bulk-create` | Bulk mark viewed access request recommendations
[**get-access-request-recommendations-config-v1**](#get-access-request-recommendations-config-v1) | **GET** `/ai-access-request-recommendations/v1/config` | Get access request recommendations config
[**get-access-request-recommendations-ignored-items-v1**](#get-access-request-recommendations-ignored-items-v1) | **GET** `/ai-access-request-recommendations/v1/ignored-items` | List ignored access request recommendations
[**get-access-request-recommendations-requested-items-v1**](#get-access-request-recommendations-requested-items-v1) | **GET** `/ai-access-request-recommendations/v1/requested-items` | List accepted access request recommendations
[**get-access-request-recommendations-v1**](#get-access-request-recommendations-v1) | **GET** `/ai-access-request-recommendations/v1` | Identity access request recommendations
[**get-access-request-recommendations-viewed-items-v1**](#get-access-request-recommendations-viewed-items-v1) | **GET** `/ai-access-request-recommendations/v1/viewed-items` | List viewed access request recommendations
[**set-access-request-recommendations-config-v1**](#set-access-request-recommendations-config-v1) | **PUT** `/ai-access-request-recommendations/v1/config` | Update access request recommendations config


## add-access-request-recommendations-ignored-item-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Ignore access request recommendation
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-ignored-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `AddAccessRequestRecommendationsIgnoredItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessRequestRecommendationActionItemDto** | `AccessRequestRecommendationActionItemDto` | The recommended access item to ignore for an identity. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccessRequestRecommendationActionItemResponseDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';
import { AccessRequestRecommendationActionItemDto } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  addAccessRequestRecommendationsIgnoredItemV1(): void {
    const accessRequestRecommendationActionItemDto: AccessRequestRecommendationActionItemDto = ; // The recommended access item to ignore for an identity.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.addAccessRequestRecommendationsIgnoredItemV1({ accessRequestRecommendationActionItemDto: accessRequestRecommendationActionItemDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## add-access-request-recommendations-requested-item-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Accept access request recommendation
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-requested-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `AddAccessRequestRecommendationsRequestedItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessRequestRecommendationActionItemDto** | `AccessRequestRecommendationActionItemDto` | The recommended access item that was requested for an identity. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccessRequestRecommendationActionItemResponseDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';
import { AccessRequestRecommendationActionItemDto } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  addAccessRequestRecommendationsRequestedItemV1(): void {
    const accessRequestRecommendationActionItemDto: AccessRequestRecommendationActionItemDto = ; // The recommended access item that was requested for an identity.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.addAccessRequestRecommendationsRequestedItemV1({ accessRequestRecommendationActionItemDto: accessRequestRecommendationActionItemDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## add-access-request-recommendations-viewed-item-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Mark viewed access request recommendations
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `AddAccessRequestRecommendationsViewedItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessRequestRecommendationActionItemDto** | `AccessRequestRecommendationActionItemDto` | The recommended access that was viewed for an identity. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccessRequestRecommendationActionItemResponseDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';
import { AccessRequestRecommendationActionItemDto } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  addAccessRequestRecommendationsViewedItemV1(): void {
    const accessRequestRecommendationActionItemDto: AccessRequestRecommendationActionItemDto = ; // The recommended access that was viewed for an identity.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.addAccessRequestRecommendationsViewedItemV1({ accessRequestRecommendationActionItemDto: accessRequestRecommendationActionItemDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## add-access-request-recommendations-viewed-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk mark viewed access request recommendations
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `AddAccessRequestRecommendationsViewedItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessRequestRecommendationActionItemDto** | `Array<AccessRequestRecommendationActionItemDto>` | The recommended access items that were viewed for an identity. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessRequestRecommendationActionItemResponseDto>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';
import { AccessRequestRecommendationActionItemDto } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  addAccessRequestRecommendationsViewedItemsV1(): void {
    const accessRequestRecommendationActionItemDto: Array<AccessRequestRecommendationActionItemDto> = ; // The recommended access items that were viewed for an identity.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.addAccessRequestRecommendationsViewedItemsV1({ accessRequestRecommendationActionItemDto: accessRequestRecommendationActionItemDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-request-recommendations-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get access request recommendations config
This API returns the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestRecommendationsConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccessRequestRecommendationConfigDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  getAccessRequestRecommendationsConfigV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getAccessRequestRecommendationsConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-request-recommendations-ignored-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List ignored access request recommendations
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-ignored-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestRecommendationsIgnoredItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessRequestRecommendationActionItemResponseDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  getAccessRequestRecommendationsIgnoredItemsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getAccessRequestRecommendationsIgnoredItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-request-recommendations-requested-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List accepted access request recommendations
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-requested-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestRecommendationsRequestedItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessRequestRecommendationActionItemResponseDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  getAccessRequestRecommendationsRequestedItemsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getAccessRequestRecommendationsRequestedItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-request-recommendations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Identity access request recommendations
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestRecommendationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | Get access request recommendations for an identityId. *me* indicates the current user. | [optional] [default to &#39;me&#39;]
**limit** | `number` | Max number of results to return. | [optional] [default to 15]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**includeTranslationMessages** | `boolean` | If *true* it will populate a list of translation messages in the response. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessRequestRecommendationItemDetail>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  getAccessRequestRecommendationsV1(): void {
    const identityId: string = ; // Get access request recommendations for an identityId. *me* indicates the current user. (optional)
    const limit: number = ; // Max number of results to return. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const includeTranslationMessages: boolean = ; // If *true* it will populate a list of translation messages in the response. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getAccessRequestRecommendationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-request-recommendations-viewed-items-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List viewed access request recommendations
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-viewed-items-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestRecommendationsViewedItemsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<AccessRequestRecommendationActionItemResponseDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  getAccessRequestRecommendationsViewedItemsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getAccessRequestRecommendationsViewedItemsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-access-request-recommendations-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update access request recommendations config
This API updates the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/set-access-request-recommendations-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetAccessRequestRecommendationsConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessRequestRecommendationConfigDto** | `AccessRequestRecommendationConfigDto` | The desired configurations for Access Request Recommender for the tenant. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<AccessRequestRecommendationConfigDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIAccessRequestRecommendationsService } from '@sailpoint/angular-sdk/iai_access_request_recommendations';
import { AccessRequestRecommendationConfigDto } from '@sailpoint/angular-sdk/iai_access_request_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIAccessRequestRecommendationsService);

  setAccessRequestRecommendationsConfigV1(): void {
    const accessRequestRecommendationConfigDto: AccessRequestRecommendationConfigDto = ; // The desired configurations for Access Request Recommender for the tenant.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.setAccessRequestRecommendationsConfigV1({ accessRequestRecommendationConfigDto: accessRequestRecommendationConfigDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

