---
id: v2024-account-usages
title: AccountUsages
pagination_label: AccountUsages
sidebar_label: AccountUsages
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccountUsages', 'V2024AccountUsages'] 
slug: /tools/sdk/powershell/v2024/methods/account-usages
tags: ['SDK', 'Software Development Kit', 'AccountUsages', 'V2024AccountUsages']
---

# AccountUsages
  Use this API to implement account usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; source accounts are being used.
This allows organizations to get the information they need to start optimizing and securing source account usage.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024UsagesByAccountId**](#get-usages-by-account-id) | **GET** `/account-usages/{accountId}/summaries` | Returns account usage insights


## get-usages-by-account-id
This API returns a summary of account usage insights for past 12 months.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-usages-by-account-id)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | AccountId | **String** | True  | ID of IDN account
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date**

### Return type
[**AccountUsage[]**](../models/account-usage)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Summary of account usage insights for past 12 months. | AccountUsage[]
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
$AccountId = "ef38f94347e94562b5bb8424a56397d8" # String | ID of IDN account
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Sorters = "-date" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional)

# Returns account usage insights

try {
    Get-V2024UsagesByAccountId -AccountId $AccountId 
    
    # Below is a request that includes all optional parameters
    # Get-V2024UsagesByAccountId -AccountId $AccountId -Limit $Limit -Offset $Offset -Count $Count -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024UsagesByAccountId"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
