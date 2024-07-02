---
id: sources-aggregation
title: SourcesAggregation
pagination_label: SourcesAggregation
sidebar_label: SourcesAggregation
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SourcesAggregation'] 
slug: /tools/sdk/powershell/beta/methods/sources-aggregation
tags: ['SDK', 'Software Development Kit', 'SourcesAggregation']
---


# SourcesAggregation

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**importAccounts**](#import-accounts) | **POST** /sources/{id}/load-accounts | Account Aggregation



## import-accounts


Starts an account aggregation on the specified source. 
If the target source is a direct connection, then the request body must be empty.
If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Source Id
   | File | **System.IO.FileInfo** |   (optional) | 
   | DisableOptimization | **Boolean** |   (optional) | 

	
### Return type

[**LoadAccountsTask**](../models/load-accounts-task)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Aggregate Accounts Task | LoadAccountsTask
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) 

