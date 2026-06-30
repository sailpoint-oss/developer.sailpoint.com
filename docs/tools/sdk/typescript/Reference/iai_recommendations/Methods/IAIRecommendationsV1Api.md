---
id: v1-iai-recommendations
title: IAIRecommendations
pagination_label: IAIRecommendations
sidebar_label: IAIRecommendations
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IAIRecommendations', 'v1IAIRecommendations']
slug: /tools/sdk/typescript/iai_recommendations/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIRecommendations', 'v1IAIRecommendations']
---

# IAIRecommendationsV1Api
   
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-recommendations-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RecommendationconfigdtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IAIRecommendationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IAIRecommendationsV1Api(configuration);
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-recommendations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**recommendationrequestdtoV1** | `RecommendationrequestdtoV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RecommendationresponsedtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IAIRecommendationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IAIRecommendationsV1Api(configuration);
const recommendationrequestdtoV1: RecommendationrequestdtoV1 = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getRecommendationsV1({ recommendationrequestdtoV1: recommendationrequestdtoV1 });
console.log(result);
```

[[Back to top]](#)

## update-recommendations-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update certification recommendation config values
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-recommendations-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**recommendationconfigdtoV1** | `RecommendationconfigdtoV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`RecommendationconfigdtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IAIRecommendationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IAIRecommendationsV1Api(configuration);
const recommendationconfigdtoV1: RecommendationconfigdtoV1 = ; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateRecommendationsConfigV1({ recommendationconfigdtoV1: recommendationconfigdtoV1 });
console.log(result);
```

[[Back to top]](#)

