---
id: reports-data-extraction
title: ReportsDataExtraction
pagination_label: ReportsDataExtraction
sidebar_label: ReportsDataExtraction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportsDataExtraction', 'ReportsDataExtraction'] 
slug: /tools/sdk/powershell/reportsdataextraction/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'ReportsDataExtraction', 'ReportsDataExtraction']
---

# ReportsDataExtraction
  Use this API to implement reports lifecycle managing and monitoring.
With this functionality in place, users can run reports, view their results, and cancel reports in progress. 
This can be potentially helpful for auditing purposes. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-ReportV1**](#cancel-report-v1) | **POST** `/reports/v1/{id}/cancel` | Cancel report
[**Get-ReportResultV1**](#get-report-result-v1) | **GET** `/reports/v1/{taskResultId}/result` | Get report result
[**Get-ReportV1**](#get-report-v1) | **GET** `/reports/v1/{taskResultId}` | Get report file
[**Start-ReportV1**](#start-report-v1) | **POST** `/reports/v1/run` | Run report


## cancel-report-v1
Cancels a running report.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-report-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "a1ed223247144cc29d23c632624b4767" # String | ID of the running Report to cancel

# Cancel report

try {
    Suspend-ReportV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-ReportV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-ReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-report-result-v1
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-result-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | TaskResultId | **String** | True  | Unique identifier of the task result which handled report
  Query | Completed | **Boolean** |   (optional) (default to $false) | state of task result to apply ordering when results are fetching from the DB

### Return type
[**Reportresults**](../models/reportresults)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Details about report that was run or is running. | Reportresults
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$TaskResultId = "ef38f94347e94562b5bb8424a56397d8" # String | Unique identifier of the task result which handled report
$Completed = $true # Boolean | state of task result to apply ordering when results are fetching from the DB (optional) (default to $false)

# Get report result

try {
    Get-ReportResultV1 -TaskResultId $TaskResultId 
    
    # Below is a request that includes all optional parameters
    # Get-ReportResultV1 -TaskResultId $TaskResultId -Completed $Completed  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReportResultV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-report-v1
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-report-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/csv, application/pdf, application/json

### Example
```powershell
$TaskResultId = "ef38f94347e94562b5bb8424a56397d8" # String | Unique identifier of the task result which handled report
$FileFormat = "csv" # String | Output format of the requested report file
$Name = "Identities Details Report" # String | preferred Report file name, by default will be used report name from task result. (optional)
$Auditable = $true # Boolean | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to $false)

# Get report file

try {
    Get-ReportV1 -TaskResultId $TaskResultId -FileFormat $FileFormat 
    
    # Below is a request that includes all optional parameters
    # Get-ReportV1 -TaskResultId $TaskResultId -FileFormat $FileFormat -Name $Name -Auditable $Auditable  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-report-v1
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-report-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Reportdetails | [**Reportdetails**](../models/reportdetails) | True  | 

### Return type
[**Taskresultdetails**](../models/taskresultdetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Details about running report task. | Taskresultdetails
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReportResultV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReportResultV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Reportdetails = @""@

# Run report

try {
    $Result = ConvertFrom-JsonToReportdetails -Json $Reportdetails
    Start-ReportV1 -Reportdetails $Result 
    
    # Below is a request that includes all optional parameters
    # Start-ReportV1 -Reportdetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-ReportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
