---
id: access-request-identity-metrics
title: AccessRequestIdentityMetrics
pagination_label: AccessRequestIdentityMetrics
sidebar_label: AccessRequestIdentityMetrics
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequestIdentityMetrics'] 
slug: /tools/sdk/powershell/beta/methods/access-request-identity-metrics
tags: ['SDK', 'Software Development Kit', 'AccessRequestIdentityMetrics']
---


# AccessRequestIdentityMetrics

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccessRequestIdentityMetrics**](#get-access-request-identity-metrics) | **GET** /access-request-identity-metrics/{identityId}/requested-objects/{requestedObjectId}/type/{type} | Return access request identity metrics



## get-access-request-identity-metrics


Use this API to return information access metrics.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | Manager's identity ID.
Path   | RequestedObjectId | **String** | True  | Requested access item's ID.
Path   | Type | **String** | True  | Requested access item's type.

	
### Return type

[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-8.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of the resource access and source activity for the direct reports of the provided manager. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

