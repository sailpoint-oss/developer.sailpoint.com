---
id: v2025-launchers
title: Launchers
pagination_label: Launchers
sidebar_label: Launchers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Launchers', 'V2025Launchers'] 
slug: /tools/sdk/powershell/v2025/methods/launchers
tags: ['SDK', 'Software Development Kit', 'Launchers', 'V2025Launchers']
---

# Launchers
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025Launcher**](#create-launcher) | **POST** `/launchers` | Create launcher
[**Remove-V2025Launcher**](#delete-launcher) | **DELETE** `/launchers/{launcherID}` | Delete launcher
[**Get-V2025Launcher**](#get-launcher) | **GET** `/launchers/{launcherID}` | Get launcher by id
[**Get-V2025Launchers**](#get-launchers) | **GET** `/launchers` | List all launchers for tenant
[**Send-V2025Launcher**](#put-launcher) | **PUT** `/launchers/{launcherID}` | Replace launcher
[**Start-V2025Launcher**](#start-launcher) | **POST** `/launchers/{launcherID}/launch` | Launch a launcher


## create-launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-launcher)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | LauncherRequest | [**LauncherRequest**](../models/launcher-request) | True  | Payload to create a Launcher

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Launcher created successfully | Launcher
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$LauncherRequest = @"{
  "reference" : {
    "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
    "type" : "WORKFLOW"
  },
  "name" : "Group Create",
  "description" : "Create a new Active Directory Group",
  "disabled" : false,
  "type" : "INTERACTIVE_PROCESS",
  "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
}"@

# Create launcher

try {
    $Result = ConvertFrom-V2025JsonToLauncherRequest -Json $LauncherRequest
    New-V2025Launcher -LauncherRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025Launcher -LauncherRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025Launcher"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-launcher)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be deleted

# Delete launcher

try {
    Remove-V2025Launcher -LauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025Launcher -LauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025Launcher"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-launcher
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-launcher)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be retrieved

# Get launcher by id

try {
    Get-V2025Launcher -LauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Launcher -LauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Launcher"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-launchers
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-launchers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw*
  Query | Next | **String** |   (optional) | Pagination marker
  Query | Limit | **Int32** |   (optional) (default to 10) | Number of Launchers to return

### Return type
[**GetLaunchers200Response**](../models/get-launchers200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Launchers | GetLaunchers200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Get-V2025Launchers 
    
    # Below is a request that includes all optional parameters
    # Get-V2025Launchers -Filters $Filters -Next $Next -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025Launchers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-launcher)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | LauncherID | **String** | True  | ID of the Launcher to be replaced
 Body  | LauncherRequest | [**LauncherRequest**](../models/launcher-request) | True  | Payload to replace Launcher

### Return type
[**Launcher**](../models/launcher)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Launcher replaced successfully | Launcher
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be replaced
$LauncherRequest = @"{
  "reference" : {
    "id" : "2fd6ff94-2081-4d29-acbc-83a0a2f744a5",
    "type" : "WORKFLOW"
  },
  "name" : "Group Create",
  "description" : "Create a new Active Directory Group",
  "disabled" : false,
  "type" : "INTERACTIVE_PROCESS",
  "config" : "{\"workflowId\" : \"6b42d9be-61b6-46af-827e-ea29ba8aa3d9\"}"
}"@

# Replace launcher

try {
    $Result = ConvertFrom-V2025JsonToLauncherRequest -Json $LauncherRequest
    Send-V2025Launcher -LauncherID $LauncherID -LauncherRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2025Launcher -LauncherID $LauncherID -LauncherRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025Launcher"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v2025/start-launcher)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | LauncherID | **String** | True  | ID of the Launcher to be launched

### Return type
[**StartLauncher200Response**](../models/start-launcher200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Launcher launched successfully | StartLauncher200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be launched

# Launch a launcher

try {
    Start-V2025Launcher -LauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Start-V2025Launcher -LauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-V2025Launcher"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
