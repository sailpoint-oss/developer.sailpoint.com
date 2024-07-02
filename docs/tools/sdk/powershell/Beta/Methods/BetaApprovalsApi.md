---
id: approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Approvals'] 
slug: /tools/sdk/powershell/beta/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals']
---


# Approvals

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApproval**](#get-approval) | **GET** /approvals/{id} | Get an approval
[**getApprovals**](#get-approvals) | **GET** /approvals | Get Approvals
[**patchApproval**](#patch-approval) | **PATCH** /approvals/{id} | Change an approval



## get-approval


Retrieve a single approval for a given approval ID

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the approval that is to be returned

	
### Return type

[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-approvals


Retrieve a list of approvals, which can be filtered by requester ID, status, or reference type. "Mine" query parameter can be used and it will return all approvals for the current approver. 
Absence of all query parameters will will default to mine=true.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Mine | **Boolean** |   (optional) | Returns the list of approvals for the current caller
  Query | RequesterId | **String** |   (optional) | Returns the list of approvals for a given requester ID
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*

	
### Return type

[**Approval[]**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Approvals | Approval[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## patch-approval


Change the values of a given approval

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ApprovalDto | [**ApprovalDto**](../models/approval-dto) | True  | 

	
### Return type

[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

