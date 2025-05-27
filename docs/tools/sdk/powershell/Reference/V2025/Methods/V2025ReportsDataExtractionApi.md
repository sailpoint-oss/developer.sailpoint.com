---
id: v2025-reports-data-extraction
title: ReportsDataExtraction
pagination_label: ReportsDataExtraction
sidebar_label: ReportsDataExtraction
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ReportsDataExtraction', 'V2025ReportsDataExtraction'] 
slug: /tools/sdk/powershell/v2025/methods/reports-data-extraction
tags: ['SDK', 'Software Development Kit', 'ReportsDataExtraction', 'V2025ReportsDataExtraction']
---

# ReportsDataExtraction
  Use this API to implement reports lifecycle managing and monitoring.
With this functionality in place, users can run reports, view their results, and cancel reports in progress. 
This can be potentially helpful for auditing purposes. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-V2025Report**](#cancel-report) | **POST** `/reports/{id}/cancel` | Cancel report
[**Get-V2025Report**](#get-report) | **GET** `/reports/{taskResultId}` | Get report file
[**Get-V2025ReportResult**](#get-report-result) | **GET** `/reports/{taskResultId}/result` | Get report result
[**Start-V2025Report**](#start-report) | **POST** `/reports/run` | Run report


## cancel-report
Cancels a running report.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-report)

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

### Example
```powershell
$Id = "a1ed223247144cc29d23c632624b4767" # String | ID of the running Report to cancel

# Cancel report

try {
    Suspend-V2025Report -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-V2025Report -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-V2025Report"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-report
Gets a report in file format.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-report)

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

### Example
```powershell
$TaskResultId = "ef38f94347e94562b5bb8424a56397d8" # String | Unique identifier of the task result which handled report
$FileFormat = "csv" # String | Output format of the requested report file
$Name = "Identities Details Report" # String | preferred Report file name, by default will be used report name from task result. (optional)
$Auditable = $true # Boolean | Enables auditing for current report download. Will create an audit event and sent it to the REPORT cloud-audit kafka topic.  Event will be created if there is any result present by requested taskResultId. (optional) (default to $false)

# Get report file

try {
    Get-V2025Report -TaskResultId $TaskResultId -FileFormat $FileFormat 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Report -TaskResultId $TaskResultId -FileFormat $FileFormat -Name $Name -Auditable $Auditable  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Report"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-report-result
Get the report results for a report that was run or is running. Returns empty report result in case there are no active task definitions with used in payload task definition name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-report-result)

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

### Example
```powershell
$TaskResultId = "ef38f94347e94562b5bb8424a56397d8" # String | Unique identifier of the task result which handled report
$Completed = $true # Boolean | state of task result to apply ordering when results are fetching from the DB (optional) (default to $false)

# Get report result

try {
    Get-V2025ReportResult -TaskResultId $TaskResultId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ReportResult -TaskResultId $TaskResultId -Completed $Completed  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ReportResult"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-report
Use this API to run a report according to report input details. If non-concurrent task is already running then it returns, otherwise new task creates and returns.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-report)

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

### Example
```powershell
$ReportDetails = @"{
  "reportType" : "ACCOUNTS",
  "arguments" : {
    "application" : "2c9180897e7742b2017e781782f705b9",
    "sourceName" : "Active Directory"
  }
}"@

# Run report

try {
    $Result = ConvertFrom-JsonToReportDetails -Json $ReportDetails
    Start-V2025Report -ReportDetails $Result 
    
    # Below is a request that includes all optional parameters
    # Start-V2025Report -ReportDetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2025Report"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
