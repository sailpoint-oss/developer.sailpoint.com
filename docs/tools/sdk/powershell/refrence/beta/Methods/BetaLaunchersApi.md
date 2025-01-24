---
id: launchers
title: Launchers
pagination_label: Launchers
sidebar_label: Launchers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Launchers'] 
slug: /tools/sdk/powershell/beta/methods/launchers
tags: ['SDK', 'Software Development Kit', 'Launchers']
---


# Launchers

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaLauncher**](#create-launcher) | **POST** `/launchers` | Create launcher
[**Remove-BetaLauncher**](#delete-launcher) | **DELETE** `/launchers/{launcherID}` | Delete Launcher
[**Get-BetaLauncher**](#get-launcher) | **GET** `/launchers/{launcherID}` | Get Launcher by ID
[**Get-BetaLaunchers**](#get-launchers) | **GET** `/launchers` | List all Launchers for tenant
[**Send-BetaLauncher**](#put-launcher) | **PUT** `/launchers/{launcherID}` | Replace Launcher
[**Start-BetaLauncher**](#start-launcher) | **POST** `/beta/launchers/{launcherID}/launch` | Launch a Launcher


## create-launcher

Create a Launcher with given information

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    $Result = ConvertFrom-JsonToLauncherRequest -Json $LauncherRequest
    New-BetaLauncher-BetaLauncherRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-BetaLauncher -BetaLauncherRequest $LauncherRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaLauncher"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-launcher

Delete the given Launcher ID

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be deleted
# Delete Launcher
try {
    Remove-BetaLauncher-BetaLauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaLauncher -BetaLauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaLauncher"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-launcher

Get details for the given Launcher ID

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be retrieved
# Get Launcher by ID
try {
    Get-BetaLauncher-BetaLauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Get-BetaLauncher -BetaLauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaLauncher"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-launchers

Return a list of Launchers for the authenticated tenant

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'disabled eq "true"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
$Next = "eyJuZXh0IjoxMjN9Cg==" # String | Pagination marker (optional)
$Limit = 42 # Int32 | Number of Launchers to return (optional) (default to 10)
# List all Launchers for tenant
try {
    Get-BetaLaunchers
    
    # Below is a request that includes all optional parameters
    # Get-BetaLaunchers -BetaFilters $Filters -BetaNext $Next -BetaLimit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaLaunchers"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-launcher

Replace the given Launcher ID with given payload

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
# Replace Launcher
try {
    $Result = ConvertFrom-JsonToLauncherRequest -Json $LauncherRequest
    Send-BetaLauncher-BetaLauncherID $LauncherID -BetaLauncherRequest $Result
    
    # Below is a request that includes all optional parameters
    # Send-BetaLauncher -BetaLauncherID $LauncherID -BetaLauncherRequest $LauncherRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-BetaLauncher"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## start-launcher

Launch the given Launcher ID

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$LauncherID = "e3012408-8b61-4564-ad41-c5ec131c325b" # String | ID of the Launcher to be launched
# Launch a Launcher
try {
    Start-BetaLauncher-BetaLauncherID $LauncherID 
    
    # Below is a request that includes all optional parameters
    # Start-BetaLauncher -BetaLauncherID $LauncherID  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-BetaLauncher"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


