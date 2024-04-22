---
id: sod-policy
title: SODPolicy
pagination_label: SODPolicy
sidebar_label: SODPolicy
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SODPolicy'] 
slug: /tools/sdk/powershell/beta/methods/sod-policy
tags: ['SDK', 'Software Development Kit', 'SODPolicy']
---


# SODPolicy

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCustomViolationReport**](#get-custom-violation-report) | **GET** /sod-violation-report/{reportResultId}/download/{fileName} | Download custom violation report
[**getDefaultViolationReport**](#get-default-violation-report) | **GET** /sod-violation-report/{reportResultId}/download | Download violation report
[**getSodAllReportRunStatus**](#get-sod-all-report-run-status) | **GET** /sod-violation-report | Get multi-report run task status
[**getSodViolationReportRunStatus**](#get-sod-violation-report-run-status) | **GET** /sod-policies/sod-violation-report-status/{reportResultId} | Get violation report run status
[**startSodAllPoliciesForOrg**](#start-sod-all-policies-for-org) | **POST** /sod-violation-report/run | Runs all policies for org



## get-custom-violation-report


This allows to download a specified named violation report for a given report reference.
Requires role of ORG_ADMIN.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to download.
Path   | FileName | **String** | True  | Custom Name for the  file.

	
### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the zip file with given custom name that contains the violation report file. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

[[Back to top]](#) 


## get-default-violation-report


This allows to download a violation report for a given report reference.
Requires role of ORG_ADMIN.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to download.

	
### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns the PolicyReport.zip that contains the violation report file. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

[[Back to top]](#) 


## get-sod-all-report-run-status


This endpoint gets the status for a violation report for all policy run.
Requires role of ORG_ADMIN.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task for all policy run. | ReportResultReference
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-sod-violation-report-run-status


This gets the status for a violation report run task that has already been invoked.
Requires role of ORG_ADMIN.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ReportResultId | **String** | True  | The ID of the report reference to retrieve.

	
### Return type

[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the violation report run task. | ReportResultReference
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


## start-sod-all-policies-for-org


Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.
Requires role of ORG_ADMIN.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | MultiPolicyRequest | [**MultiPolicyRequest**](../models/multi-policy-request) |   (optional) | 

	
### Return type

[**ReportResultReference**](../models/report-result-reference)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reference to the violation report run task. | ReportResultReference
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

