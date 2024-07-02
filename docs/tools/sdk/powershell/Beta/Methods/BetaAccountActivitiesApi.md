---
id: account-activities
title: AccountActivities
pagination_label: AccountActivities
sidebar_label: AccountActivities
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccountActivities'] 
slug: /tools/sdk/powershell/beta/methods/account-activities
tags: ['SDK', 'Software Development Kit', 'AccountActivities']
---


# AccountActivities

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAccountActivity**](#get-account-activity) | **GET** /account-activities/{id} | Get Account Activity
[**listAccountActivities**](#list-account-activities) | **GET** /account-activities | List Account Activities



## get-account-activity


This gets a single account activity by its id.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The account activity id

	
### Return type

[**CancelableAccountActivity**](../models/cancelable-account-activity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | An account activity object | CancelableAccountActivity
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-account-activities


This gets a collection of account activities that satisfy the given query parameters.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | RequestedFor | **String** |   (optional) | The identity that the activity was requested for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RequestedBy | **String** |   (optional) | The identity that requested the activity. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RegardingIdentity | **String** |   (optional) | The specified identity will be either the requester or target of the account activity. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | Type | **String** |   (optional) | The type of account activity.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *gt, lt, ge, le, eq, in, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, isnull, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **type, created, modified**

	
### Return type

[**CancelableAccountActivity[]**](../models/cancelable-account-activity)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of account activities | CancelableAccountActivity[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

