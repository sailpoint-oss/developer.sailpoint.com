---
id: access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'AccessRequests'] 
slug: /tools/sdk/go/v3/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests']
---


# AccessRequests

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CancelAccessRequest**](#cancel-access-request) | **Post** /access-requests/cancel | Cancel Access Request
[**CreateAccessRequest**](#create-access-request) | **Post** /access-requests | Submit an Access Request
[**GetAccessRequestConfig**](#get-access-request-config) | **Get** /access-request-config | Get Access Request Configuration
[**ListAccessRequestStatus**](#list-access-request-status) | **Get** /access-request-status | Access Request Status
[**SetAccessRequestConfig**](#set-access-request-config) | **Put** /access-request-config | Update Access Request Configuration



## cancel-access-request


This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
Any token with ORG_ADMIN authority or token of the user who originally requested the access request is required to cancel it.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | cancelAccessRequest | [**CancelAccessRequest**](../models/cancel-access-request) | True  | 

	
### Return type

**map[string]interface{}**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | map[string]interface{}
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


## create-access-request


This submits the access request into IdentityNow, where it will follow any IdentityNow approval processes.

Access requests are processed asynchronously by IdentityNow.  A success response from this endpoint means the request
has been submitted to IDN and is queued for processing.  Because this endpoint is asynchronous, it will not return an error
if you submit duplicate access requests in quick succession, or you submit an access request for access that is already in progress, approved, or rejected.
It is best practice to check for any existing access requests that reference the same access items before submitting a new access request.  This can
be accomplished by using the [access request status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) or the [pending access request approvals](https://developer.sailpoint.com/idn/api/v3/list-pending-approvals) endpoints.  You can also
use the [search API](https://developer.sailpoint.com/idn/api/v3/search) to check the existing access items that an identity has before submitting
an access request to ensure you are not requesting access that is already granted.

There are two types of access request:

__GRANT_ACCESS__
* Can be requested for multiple identities in a single request.
* Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/idn/api/v3/get-access-request-config) endpoint for request configuration options.  
* Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others.
* Roles, access profiles and entitlements can be requested.
* While requesting entitlements, maximum of 25 entitlements and 10 recipients are allowed in a request.
 
__REVOKE_ACCESS__
* Can only be requested for a single identity at a time.
* You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning. 
* Does not support self request. Only manager can request to revoke access for their directly managed employees.
* If a `removeDate` is specified, then the access will be removed on that date and time only for roles and access profiles. Entitlements are currently unsupported for `removeDate`.
* Roles, access profiles, and entitlements can be requested for revocation.
* Revoke requests for entitlements are limited to 1 entitlement per access request currently.
* [Roles, Access Profiles] You can specify a `removeDate` if the access doesn't already have a sunset date. The `removeDate` must be a future date, in the UTC timezone. 
* Allows a manager to request to revoke access for direct employees. A token with ORG_ADMIN authority can also request to revoke access from anyone.

>**Note:** There is no indication to the approver in the IdentityNow UI that the approval request is for a revoke action. Take this into consideration when calling this API.

A token with API authority cannot be used to call this endpoint. 


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accessRequest | [**AccessRequest**](../models/access-request) | True  | 

	
### Return type

**map[string]interface{}**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | map[string]interface{}
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-access-request-config


This endpoint returns the current access-request configuration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | AccessRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-access-request-status


The Access Request Status API returns a list of access request statuses based on the specified query parameters.
Any token with any authority can request their own status. A token with ORG_ADMIN authority is required to call this API to get a list of statuses for other users.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requestedFor | **string** |   (optional) | Filter the results by the identity for which the requests were made. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | requestedBy | **string** |   (optional) | Filter the results by the identity that made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | regardingIdentity | **string** |   (optional) | Filter the results by the specified identity which is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | assignedTo | **string** |   (optional) | Filter the results by the specified identity which is the owner of the Identity Request Work Item. *me* indicates the current user.
  Query | count | **bool** |   (optional) (default to false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.
  Query | limit | **int32** |   (optional) (default to 250) | Max number of results to return.
  Query | offset | **int32** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  Query | filters | **string** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | sorters | **string** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**

	
### Return type

[**[]RequestedItemStatus**](../models/requested-item-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requested item status. | []RequestedItemStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## set-access-request-config


This endpoint replaces the current access-request configuration.
A token with ORG_ADMIN authority is required to call this API.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accessRequestConfig | [**AccessRequestConfig**](../models/access-request-config) | True  | 

	
### Return type

[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | AccessRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

