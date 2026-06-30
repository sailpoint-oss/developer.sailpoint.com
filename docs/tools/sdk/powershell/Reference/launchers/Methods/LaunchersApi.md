---
id: launchers
title: Launchers
pagination_label: Launchers
sidebar_label: Launchers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Launchers', 'Launchers'] 
slug: /tools/sdk/powershell/launchers/methods/launchers
tags: ['SDK', 'Software Development Kit', 'Launchers', 'Launchers']
---

# Launchers
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-LauncherV1**](#create-launcher-v1) | **POST** `/launchers/v1` | Create launcher
[**Remove-LauncherV1**](#delete-launcher-v1) | **DELETE** `/launchers/v1/{launcherID}` | Delete launcher
[**Get-LauncherV1**](#get-launcher-v1) | **GET** `/launchers/v1/{launcherID}` | Get launcher by id
[**Get-LaunchersV1**](#get-launchers-v1) | **GET** `/launchers/v1` | List all launchers for tenant
[**Send-LauncherV1**](#put-launcher-v1) | **PUT** `/launchers/v1/{launcherID}` | Replace launcher
[**Start-LauncherV1**](#start-launcher-v1) | **POST** `/launchers/v1/{launcherID}/launch` | Launch a launcher


## create-launcher-v1
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-launcher-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Launcherrequest | [**Launcherrequest**](../models/launcherrequest) | True  | Payload to create a Launcher

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Launcher created successfully | Launcher
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Launcherrequest = @""@

# Create launcher

try {
    $Result = ConvertFrom-JsonToLauncherrequest -Json $Launcherrequest
    New-LauncherV1 -Launcherrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-LauncherV1 -Launcherrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-LauncherV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-launcher-v1
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-launcher-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | LauncherID | **String** | True  | ID of the Launcher to be deleted

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Launcher deleted successfully | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be deleted

# Delete launcher

try {
    Remove-LauncherV1 -LauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Remove-LauncherV1 -LauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-LauncherV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-launcher-v1
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-launcher-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | LauncherID | **String** | True  | ID of the Launcher to be retrieved

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Launcher retrieved successfully | Launcher
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be retrieved

# Get launcher by id

try {
    Get-LauncherV1 -LauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Get-LauncherV1 -LauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-LauncherV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-launchers-v1
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-launchers-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw*
  Query | Next | **String** |   (optional) | Pagination marker
  Query | Limit | **Int32** |   (optional) (default to 10) | Number of Launchers to return

### Return type
[**GetLaunchersV1200Response**](../models/get-launchers-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Launchers | GetLaunchersV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'disabled eq "true"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
$Next = "eyJuZXh0IjoxMjN9Cg==" # String | Pagination marker (optional)
$Limit = 42 # Int32 | Number of Launchers to return (optional) (default to 10)

# List all launchers for tenant

try {
    Get-LaunchersV1 
    
    # Below is a request that includes all optional parameters
    # Get-LaunchersV1 -Filters $Filters -Next $Next -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-LaunchersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-launcher-v1
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-launcher-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | LauncherID | **String** | True  | ID of the Launcher to be replaced
 Body  | Launcherrequest | [**Launcherrequest**](../models/launcherrequest) | True  | Payload to replace Launcher

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Launcher replaced successfully | Launcher
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be replaced
$Launcherrequest = @""@

# Replace launcher

try {
    $Result = ConvertFrom-JsonToLauncherrequest -Json $Launcherrequest
    Send-LauncherV1 -LauncherID $LauncherID -Launcherrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-LauncherV1 -LauncherID $LauncherID -Launcherrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-LauncherV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-launcher-v1
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-launcher-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | LauncherID | **String** | True  | ID of the Launcher to be launched

### Return type
[**StartLauncherV1200Response**](../models/start-launcher-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Launcher launched successfully | StartLauncherV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetLaunchersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetLaunchersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be launched

# Launch a launcher

try {
    Start-LauncherV1 -LauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Start-LauncherV1 -LauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-LauncherV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
