---
id: v2025-api-usage
title: ApiUsage
pagination_label: ApiUsage
sidebar_label: ApiUsage
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ApiUsage', 'V2025ApiUsage'] 
slug: /tools/sdk/powershell/v2025/methods/api-usage
tags: ['SDK', 'Software Development Kit', 'ApiUsage', 'V2025ApiUsage']
---

# ApiUsage
  Use this API to retrieve metrics about an org&#39;s API usage.
With this functionality in place, administrators can monitor the usage of APIs within a specified timespan, as well as a breakdown of commonly-used APIs sorted by number of requests.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2025TotalCount**](#get-total-count) | **GET** `/api-usage/count` | Total number of API requests
[**Get-V2025ApiSummary**](#list-api-summary) | **GET** `/api-usage/summary` | Get Api Summary


## get-total-count
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API gets an aggregated number of all API calls from an org in a given timespan.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-total-count)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq*

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Total number of API calls in a given timespan. | SystemCollectionsHashtable
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'method eq "GET", startDate gt "2025-08-01"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)

# Total number of API requests

try {
    Get-V2025TotalCount -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025TotalCount -XSailPointExperimental $XSailPointExperimental -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025TotalCount"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-api-summary
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API gets a list of APIs called by the org in a specific timespan, sorted by number of calls.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-api-summary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return.
  Query | Offset | **Int32** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.

### Return type
[**SummaryResponse[]**](../models/summary-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List API calls sorted by number of requests. | SummaryResponse[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'method eq "GET", startDate gt "2025-08-01"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)
$Limit = 100 # Int32 | Max number of results to return. (optional) (default to 250)
$Offset = 10 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)

# Get Api Summary

try {
    Get-V2025ApiSummary -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ApiSummary -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ApiSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
