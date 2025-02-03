
---
id: source-usages
title: SourceUsages
pagination_label: SourceUsages
sidebar_label: SourceUsages
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsages', 'SourceUsages'] 
slug: /tools/sdk/powershell/v3/methods/source-usages
tags: ['SDK', 'Software Development Kit', 'SourceUsages', 'SourceUsages']
---

# SourceUsages
  Use this API to implement source usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; sources are being used.
This allows organizations to get the information they need to start optimizing and securing source usage.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-StatusBySourceId**](#get-status-by-source-id) | **GET** `/source-usages/{sourceId}/status` | Finds status of source usage
[**Get-UsagesBySourceId**](#get-usages-by-source-id) | **GET** `/source-usages/{sourceId}/summaries` | Returns source usage insights

## get-status-by-source-id
This API returns the status of the source usage insights setup by IDN source ID.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of IDN source

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

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | ID of IDN source

# Finds status of source usage

try {
    Get-StatusBySourceId-SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-StatusBySourceId -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-StatusBySourceId"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-usages-by-source-id
This API returns a summary of source usage insights for past 12 months.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of IDN source
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date**

### Return type
[**SourceUsage[]**](../models/source-usage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of source usage insights for past 12 months. | SourceUsage[]
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
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | ID of IDN source
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "-date" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional)

# Returns source usage insights

try {
    Get-UsagesBySourceId-SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-UsagesBySourceId -SourceId $SourceId -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UsagesBySourceId"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
