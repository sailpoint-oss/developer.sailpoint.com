# IAIRecommendations

# IAIRecommendationsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-recommendations-config-v1**](#get-recommendations-config-v1) | **GET** `/recommendations/v1/config` | Get certification recommendation config values
[**get-recommendations-v1**](#get-recommendations-v1) | **POST** `/recommendations/v1/request` | Returns recommendation based on object
[**update-recommendations-config-v1**](#update-recommendations-config-v1) | **PUT** `/recommendations/v1/config` | Update certification recommendation config values


## get-recommendations-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get certification recommendation config values
Retrieves configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRecommendationsConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RecommendationConfigDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRecommendationsService } from '@sailpoint/angular-sdk/iai_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRecommendationsService);

  getRecommendationsConfigV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRecommendationsConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-recommendations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns recommendation based on object
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRecommendationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**recommendationRequestDto** | `RecommendationRequestDto` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RecommendationResponseDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRecommendationsService } from '@sailpoint/angular-sdk/iai_recommendations';
import { RecommendationRequestDto } from '@sailpoint/angular-sdk/iai_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRecommendationsService);

  getRecommendationsV1(): void {
    const recommendationRequestDto: RecommendationRequestDto = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRecommendationsV1({ recommendationRequestDto: recommendationRequestDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-recommendations-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update certification recommendation config values
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/update-recommendations-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateRecommendationsConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**recommendationConfigDto** | `RecommendationConfigDto` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RecommendationConfigDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRecommendationsService } from '@sailpoint/angular-sdk/iai_recommendations';
import { RecommendationConfigDto } from '@sailpoint/angular-sdk/iai_recommendations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRecommendationsService);

  updateRecommendationsConfigV1(): void {
    const recommendationConfigDto: RecommendationConfigDto = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateRecommendationsConfigV1({ recommendationConfigDto: recommendationConfigDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

