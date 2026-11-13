# IAIRecommendations

# IAIRecommendationsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RecommendationConfigDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IAIRecommendationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IAIRecommendationsApi(configuration);
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRecommendationsConfigV1({  });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**recommendationRequestDto** | `RecommendationRequestDto` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RecommendationResponseDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IAIRecommendationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { RecommendationRequestDto } from '@sailpoint/api-client/dist/iai_recommendations/api';

const configuration = new Configuration();
const apiInstance = new IAIRecommendationsApi(configuration);
const recommendationRequestDto: RecommendationRequestDto = {
  "prescribeMode" : false,
  "excludeInterpretations" : false,
  "requests" : [ {
    "item" : {
      "id" : "2c938083633d259901633d2623ec0375",
      "type" : "ENTITLEMENT"
    },
    "identityId" : "2c938083633d259901633d25c68c00fa"
  }, {
    "item" : {
      "id" : "2c938083633d259901633d2623ec0375",
      "type" : "ENTITLEMENT"
    },
    "identityId" : "2c938083633d259901633d25c68c00fa"
  } ],
  "includeTranslationMessages" : false,
  "includeDebugInformation" : true
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRecommendationsV1({ recommendationRequestDto: recommendationRequestDto });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**recommendationConfigDto** | `RecommendationConfigDto` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RecommendationConfigDto`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IAIRecommendationsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { RecommendationConfigDto } from '@sailpoint/api-client/dist/iai_recommendations/api';

const configuration = new Configuration();
const apiInstance = new IAIRecommendationsApi(configuration);
const recommendationConfigDto: RecommendationConfigDto = {
  "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
  "peerGroupPercentageThreshold" : 0.5,
  "runAutoSelectOnce" : false,
  "onlyTuneThreshold" : false
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateRecommendationsConfigV1({ recommendationConfigDto: recommendationConfigDto });
console.log(result);
```

[[Back to top]](#)

