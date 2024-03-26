---
id: source-usages
title: SourceUsages
pagination_label: SourceUsages
sidebar_label: SourceUsages
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SourceUsages'] 
slug: /tools/sdk/go/v3/methods/source-usages
tags: ['SDK', 'Software Development Kit', 'SourceUsages']
---


# SourceUsages

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetStatusBySourceId**](#get-status-by-source-id) | **Get** /source-usages/{sourceId}/status | Finds status of source usage
[**GetUsagesBySourceId**](#get-usages-by-source-id) | **Get** /source-usages/{sourceId}/summaries | Returns source usage insights



## get-status-by-source-id


This API returns the status of the source usage insights setup by IDN source ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | ID of IDN source

	
### Return type

[**SourceUsageStatus**](../models/source-usage-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the source usage insights setup by IDN source ID. | SourceUsageStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-usages-by-source-id


This API returns a summary of source usage insights for past 12 months.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | sourceId | **string** | True  | ID of IDN source
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date**

	
### Return type

[**[]SourceUsage**](../models/source-usage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of source usage insights for past 12 months. | []SourceUsage
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

