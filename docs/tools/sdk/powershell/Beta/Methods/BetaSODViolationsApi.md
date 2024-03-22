---
id: sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SODViolations'] 
slug: /tools/sdk/powershell/beta/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations']
---


# SODViolations

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**startPredictSodViolations**](#start-predict-sod-violations) | **POST** /sod-violations/predict | Predict SOD violations for identity.



## start-predict-sod-violations


This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

A token with ORG_ADMIN or API authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | IdentityWithNewAccess | [**IdentityWithNewAccess**](../models/identity-with-new-access) | True  | 

	
### Return type

[**ViolationPrediction**](../models/violation-prediction)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Violation Contexts | ViolationPrediction
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

