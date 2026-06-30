---
id: source-usages
title: SourceUsages
pagination_label: SourceUsages
sidebar_label: SourceUsages
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsages', 'SourceUsages'] 
slug: /tools/sdk/powershell/sourceusages/methods/source-usages
tags: ['SDK', 'Software Development Kit', 'SourceUsages', 'SourceUsages']
---

# SourceUsages
  Use this API to implement source usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; sources are being used.
This allows organizations to get the information they need to start optimizing and securing source usage.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-StatusBySourceIdV1**](#get-status-by-source-id-v1) | **GET** `/source-usages/v1/{sourceId}/status` | Finds status of source usage
[**Get-UsagesBySourceIdV1**](#get-usages-by-source-id-v1) | **GET** `/source-usages/v1/{sourceId}/summaries` | Returns source usage insights


## get-status-by-source-id-v1
This API returns the status of the source usage insights setup by IDN source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-status-by-source-id-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of IDN source

### Return type
[**Sourceusagestatus**](../models/sourceusagestatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Status of the source usage insights setup by IDN source ID. | Sourceusagestatus
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetStatusBySourceIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetStatusBySourceIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "2c9180835d191a86015d28455b4a2329" # String | ID of IDN source

# Finds status of source usage

try {
    Get-StatusBySourceIdV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-StatusBySourceIdV1 -SourceId $SourceId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-StatusBySourceIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-usages-by-source-id-v1
This API returns a summary of source usage insights for past 12 months.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-usages-by-source-id-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of IDN source
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date**

### Return type
[**Sourceusage[]**](../models/sourceusage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of source usage insights for past 12 months. | Sourceusage[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetStatusBySourceIdV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetStatusBySourceIdV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Get-UsagesBySourceIdV1 -SourceId $SourceId 
    
    # Below is a request that includes all optional parameters
    # Get-UsagesBySourceIdV1 -SourceId $SourceId -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UsagesBySourceIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
