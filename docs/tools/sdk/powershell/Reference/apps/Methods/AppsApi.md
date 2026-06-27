---
id: apps
title: Apps
pagination_label: Apps
sidebar_label: Apps
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Apps', 'Apps'] 
slug: /tools/sdk/powershell/apps/methods/apps
tags: ['SDK', 'Software Development Kit', 'Apps', 'Apps']
---

# Apps
  Use this API to implement source application functionality. 
With this functionality in place, you can create, customize, and manage applications within sources.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SourceAppV1**](#create-source-app-v1) | **POST** `/source-apps/v1` | Create source app
[**Remove-AccessProfilesFromSourceAppByBulkV1**](#delete-access-profiles-from-source-app-by-bulk-v1) | **POST** `/source-apps/v1/{id}/access-profiles/bulk-remove` | Bulk remove access profiles from the specified source app
[**Remove-SourceAppV1**](#delete-source-app-v1) | **DELETE** `/source-apps/v1/{id}` | Delete source app by id
[**Get-SourceAppV1**](#get-source-app-v1) | **GET** `/source-apps/v1/{id}` | Get source app by id
[**Get-AccessProfilesForSourceAppV1**](#list-access-profiles-for-source-app-v1) | **GET** `/source-apps/v1/{id}/access-profiles` | List access profiles for the specified source app
[**Get-AllSourceAppV1**](#list-all-source-app-v1) | **GET** `/source-apps/v1/all` | List all source apps
[**Get-AllUserAppsV1**](#list-all-user-apps-v1) | **GET** `/user-apps/v1/all` | List all user apps
[**Get-AssignedSourceAppV1**](#list-assigned-source-app-v1) | **GET** `/source-apps/v1/assigned` | List assigned source apps
[**Get-AvailableAccountsForUserAppV1**](#list-available-accounts-for-user-app-v1) | **GET** `/user-apps/v1/{id}/available-accounts` | List available accounts for user app
[**Get-AvailableSourceAppsV1**](#list-available-source-apps-v1) | **GET** `/source-apps/v1` | List available source apps
[**Get-OwnedUserAppsV1**](#list-owned-user-apps-v1) | **GET** `/user-apps/v1` | List owned user apps
[**Update-SourceAppV1**](#patch-source-app-v1) | **PATCH** `/source-apps/v1/{id}` | Patch source app by id
[**Update-UserAppV1**](#patch-user-app-v1) | **PATCH** `/user-apps/v1/{id}` | Patch user app by id
[**Update-SourceAppsInBulkV1**](#update-source-apps-in-bulk-v1) | **POST** `/source-apps/v1/bulk-update` | Bulk update source apps


## create-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint creates a source app using the given source app payload

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Sourceappcreatedto | [**Sourceappcreatedto**](../models/sourceappcreatedto) | True  | 

### Return type
[**Sourceapp**](../models/sourceapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the source app as created. | Sourceapp
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sourceappcreatedto = @"{"name":"new app name","description":"app description","matchAllAccounts":true,"accountSource":{"id":"edcb0951812949d085b60cd8bf35bc78"}}"@

# Create source app

try {
    $Result = ConvertFrom-JsonToSourceappcreatedto -Json $Sourceappcreatedto
    New-SourceAppV1 -XSailPointExperimental $XSailPointExperimental -Sourceappcreatedto $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceAppV1 -XSailPointExperimental $XSailPointExperimental -Sourceappcreatedto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-access-profiles-from-source-app-by-bulk-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the final list of access profiles for the specified source app after removing

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-access-profiles-from-source-app-by-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the source app
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | List of access profile IDs for removal
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Accessprofiledetails[]**](../models/accessprofiledetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The final list of access profiles for the specified source app | Accessprofiledetails[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the source app
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "MyRequestBody" # String[] | List of access profile IDs for removal
 $RequestBody = @"["c9575abb5e3a4e3db82b2f989a738aa2","c9dc28e148a24d65b3ccb5fb8ca5ddd9"]"@ # String[] | List of access profile IDs for removal
 
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# Bulk remove access profiles from the specified source app

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Remove-AccessProfilesFromSourceAppByBulkV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Remove-AccessProfilesFromSourceAppByBulkV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -RequestBody $Result -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-AccessProfilesFromSourceAppByBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to delete a specific source app

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | source app ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Sourceapp**](../models/sourceapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the source app as deleted. | Sourceapp
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c9180835d191a86015d28455b4a2329" # String | source app ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete source app by id

try {
    Remove-SourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-SourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a source app by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the source app
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Sourceapp**](../models/sourceapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the source app. | Sourceapp
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the source app
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get source app by id

try {
    Get-SourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-profiles-for-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of access profiles for the specified source app

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-profiles-for-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the source app
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*

### Return type
[**Accessprofiledetails[]**](../models/accessprofiledetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of access profiles for the specified source app | Accessprofiledetails[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the source app
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'name eq "developer access profile"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le* (optional)

# List access profiles for the specified source app

try {
    Get-AccessProfilesForSourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AccessProfilesForSourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessProfilesForSourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-all-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of all source apps for the org.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-all-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, ge, le*  **owner.id**: *eq, in*  **enabled**: *eq*

### Return type
[**Sourceapp[]**](../models/sourceapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of source apps | Sourceapp[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** (optional)
$Filters = 'enabled eq true' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, ge, le*  **owner.id**: *eq, in*  **enabled**: *eq* (optional)

# List all source apps

try {
    Get-AllSourceAppV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AllSourceAppV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Count $Count -Offset $Offset -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AllSourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-all-user-apps-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of all user apps with specified filters.
This API must be used with **filters** query parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-all-user-apps-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq*
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Userapp[]**](../models/userapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of user apps | Userapp[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'name eq "user app name"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerId**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq*
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List all user apps

try {
    Get-AllUserAppsV1 -Filters $Filters -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AllUserAppsV1 -Filters $Filters -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Count $Count -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AllUserAppsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-assigned-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of source apps assigned for logged in user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-assigned-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in*

### Return type
[**Sourceapp[]**](../models/sourceapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of source apps | Sourceapp[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, accountSource.id** (optional)
$Filters = 'name eq "source app name"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* (optional)

# List assigned source apps

try {
    Get-AssignedSourceAppV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AssignedSourceAppV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Count $Count -Offset $Offset -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AssignedSourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-available-accounts-for-user-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of available accounts for the specified user app. The user app needs to belong lo logged in user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-available-accounts-for-user-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the user app
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Appaccountdetails[]**](../models/appaccountdetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of available accounts for the specified user app | Appaccountdetails[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the user app
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List available accounts for user app

try {
    Get-AvailableAccountsForUserAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AvailableAccountsForUserAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AvailableAccountsForUserAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-available-source-apps-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of source apps available for access request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-available-source-apps-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id**
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in*

### Return type
[**Sourceapp[]**](../models/sourceapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of source apps | Sourceapp[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Sorters = "name,-modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, owner.id, accountSource.id** (optional)
$Filters = 'name eq "source app name"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, co, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **accountSource.id**: *eq, in* (optional)

# List available source apps

try {
    Get-AvailableSourceAppsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AvailableSourceAppsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Count $Count -Offset $Offset -Sorters $Sorters -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AvailableSourceAppsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-owned-user-apps-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the list of user apps assigned to logged in user

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-owned-user-apps-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq*

### Return type
[**Userapp[]**](../models/userapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of user apps | Userapp[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Filters = 'name eq "user app name"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **ownerName**: *eq, sw*  **ownerAlias**: *eq, sw*  **accountId**: *eq*  **sourceAppId**: *eq* (optional)

# List owned user apps

try {
    Get-OwnedUserAppsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-OwnedUserAppsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Count $Count -Offset $Offset -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-OwnedUserAppsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-source-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API updates an existing source app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts** and **accessProfiles**.
Name, description and owner can't be empty or null.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-source-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the source app to patch
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) |   (optional) | 

### Return type
[**Sourceapppatchdto**](../models/sourceapppatchdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the source app as updated. | Sourceapppatchdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the source app to patch
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $Jsonpatchoperation = @"[{"op":"replace","path":"/enabled","value":true},{"op":"replace","path":"/matchAllAccounts","value":true}]"@ # Jsonpatchoperation[] |  (optional)
 

# Patch source app by id

try {
    Update-SourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Update-SourceAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SourceAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-user-app-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API updates an existing user app using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **account**

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-user-app-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the user app to patch
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) |   (optional) | 

### Return type
[**Userapp**](../models/userapp)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the user app as updated. | Userapp
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121e121518" # String | ID of the user app to patch
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] |  (optional)
 

# Patch user app by id

try {
    Update-UserAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Update-UserAppV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-UserAppV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-source-apps-in-bulk-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API updates source apps using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.  It can update up to 50 source apps in a batch.
The following fields can be updated: **name**, **description**, **enabled**, **owner**, **provisionRequestEnabled**, **appCenterEnabled**, **accountSource**,  **matchAllAccounts**, and **accessProfiles**.
Name, description and owner can't be empty or null.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-source-apps-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Sourceappbulkupdaterequest | [**Sourceappbulkupdaterequest**](../models/sourceappbulkupdaterequest) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSourceAppV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSourceAppV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Sourceappbulkupdaterequest = @""@

# Bulk update source apps

try {
    Update-SourceAppsInBulkV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Update-SourceAppsInBulkV1 -XSailPointExperimental $XSailPointExperimental -Sourceappbulkupdaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SourceAppsInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
