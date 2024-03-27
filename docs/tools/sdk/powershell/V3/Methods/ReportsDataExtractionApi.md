---
id: reports-data-extraction
title: ReportsDataExtraction
pagination_label: ReportsDataExtraction
sidebar_label: ReportsDataExtraction
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ReportsDataExtraction'] 
slug: /tools/sdk/powershell/v3/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'ReportsDataExtraction']
---


# ReportsDataExtraction

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelReport**](#cancel-report) | **POST** /reports/{id}/cancel | Cancel Report
[**getReport**](#get-report) | **GET** /reports/{taskResultId} | Get Report File
[**getReportResult**](#get-report-result) | **GET** /reports/{taskResultId}/result | Get Report Result
[**startReport**](#start-report) | **POST** /reports/run | Run Report



## cancel-report


Cancels a running report.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the running Report to cancel

	
### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-report


Gets a report in file format.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | TaskResultId | **String** | True  | Unique identifier of the task result which handled report
  Query | FileFormat | **String** | True  | Output format of the requested report file
  Query | Name | **String** |   (optional) | preferred Report file name, by default will be used report name from task result.
  Query | Auditable | **Boolean** |   (optional) (default to $false) | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId.

	
### Return type

**System.IO.FileInfo**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Report file in selected format. CSV by default. | System.IO.FileInfo
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/csv, application/pdf, application/json

[[Back to top]](#) 


## get-report-result


Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | TaskResultId | **String** | True  | Unique identifier of the task result which handled report
  Query | Completed | **Boolean** |   (optional) (default to $false) | state of task result to apply ordering when results are fetching from the DB

	
### Return type

[**ReportResults**](../models/report-results)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Details about report that was run or is running. | ReportResults
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## start-report


Runs a report according to input report details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ReportDetails | [**ReportDetails**](../models/report-details) | True  | 

	
### Return type

[**TaskResultDetails**](../models/task-result-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Details about running report task. | TaskResultDetails
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 

