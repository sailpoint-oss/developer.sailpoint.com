---
id: iai-recommendations
title: IAIRecommendations
pagination_label: IAIRecommendations
sidebar_label: IAIRecommendations
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IAIRecommendations'] 
slug: /tools/sdk/go/beta/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIRecommendations']
---


# IAIRecommendations

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetRecommendations**](#get-recommendations) | **Post** /recommendations/request | Returns a Recommendation Based on Object
[**GetRecommendationsConfig**](#get-recommendations-config) | **Get** /recommendations/config | Get certification recommendation config values
[**UpdateRecommendationsConfig**](#update-recommendations-config) | **Put** /recommendations/config | Update certification recommendation config values



## get-recommendations


The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendationRequestDto | [**RecommendationRequestDto**](../models/recommendation-request-dto) | True  | 

	
### Return type

[**RecommendationResponseDto**](../models/recommendation-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The recommendations for a customer | RecommendationResponseDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-recommendations-config


Retrieves configuration attributes used by certification recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Cert recommendation configuration attributes | RecommendationConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## update-recommendations-config


Updates configuration attributes used by certification recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | recommendationConfigDto | [**RecommendationConfigDto**](../models/recommendation-config-dto) | True  | 

	
### Return type

[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Cert recommendation configuration attributes after update | RecommendationConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

