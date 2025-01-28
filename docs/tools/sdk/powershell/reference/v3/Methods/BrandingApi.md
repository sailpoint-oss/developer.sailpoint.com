---
id: branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Branding'] 
slug: /tools/sdk/powershell/v3/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding']
---


# Branding

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BrandingItem**](#create-branding-item) | **POST** `/brandings` | Create a branding item
[**Remove-Branding**](#delete-branding) | **DELETE** `/brandings/{name}` | Delete a branding item
[**Get-Branding**](#get-branding) | **GET** `/brandings/{name}` | Get a branding item
[**Get-BrandingList**](#get-branding-list) | **GET** `/brandings` | List of branding items
[**Set-BrandingItem**](#set-branding-item) | **PUT** `/brandings/{name}` | Update a branding item


## create-branding-item

This API endpoint creates a branding item.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | Name | **String** | True  | name of branding item
   | ProductName | **String** | True  | product name
   | ActionButtonColor | **String** |   (optional) | hex value of color for action button
   | ActiveLinkColor | **String** |   (optional) | hex value of color for link
   | NavigationColor | **String** |   (optional) | hex value of color for navigation bar
   | EmailFromAddress | **String** |   (optional) | email from address
   | LoginInformationalMessage | **String** |   (optional) | login information message
   | FileStandard | **System.IO.FileInfo** |   (optional) | png file with logo

### Return type

[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Branding item created | BrandingItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Name = "MyName" # String | name of branding item
$ProductName = "MyProductName" # String | product name
$ActionButtonColor = "MyActionButtonColor" # String | hex value of color for action button (optional)
$ActiveLinkColor = "MyActiveLinkColor" # String | hex value of color for link (optional)
$NavigationColor = "MyNavigationColor" # String | hex value of color for navigation bar (optional)
$EmailFromAddress = "MyEmailFromAddress" # String | email from address (optional)
$LoginInformationalMessage = "MyLoginInformationalMessage" # String | login information message (optional)
$FileStandard =  # System.IO.FileInfo | png file with logo (optional)
# Create a branding item
try {
    New-BrandingItem-Name $Name -ProductName $ProductName 
    
    # Below is a request that includes all optional parameters
    # New-BrandingItem -Name $Name -ProductName $ProductName -ActionButtonColor $ActionButtonColor -ActiveLinkColor $ActiveLinkColor -NavigationColor $NavigationColor -EmailFromAddress $EmailFromAddress -LoginInformationalMessage $LoginInformationalMessage -FileStandard $FileStandard  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BrandingItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-branding

This API endpoint delete information for an existing branding item by name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The name of the branding item to be deleted

### Return type

 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
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
$Name = "default" # String | The name of the branding item to be deleted
# Delete a branding item
try {
    Remove-Branding-Name $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-Branding -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-Branding"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-branding

This API endpoint retrieves information for an existing branding item by name.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The name of the branding item to be retrieved

### Return type

[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A branding item object | BrandingItem
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
$Name = "default" # String | The name of the branding item to be retrieved
# Get a branding item
try {
    Get-Branding-Name $Name 
    
    # Below is a request that includes all optional parameters
    # Get-Branding -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-Branding"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-branding-list

This API endpoint returns a list of branding items.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**BrandingItem[]**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of branding items. | BrandingItem[]
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
# List of branding items
try {
    Get-BrandingList
    
    # Below is a request that includes all optional parameters
    # Get-BrandingList  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BrandingList"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-branding-item

This API endpoint updates information for an existing branding item.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The name of the branding item to be retrieved
   | Name2 | **String** | True  | name of branding item
   | ProductName | **String** | True  | product name
   | ActionButtonColor | **String** |   (optional) | hex value of color for action button
   | ActiveLinkColor | **String** |   (optional) | hex value of color for link
   | NavigationColor | **String** |   (optional) | hex value of color for navigation bar
   | EmailFromAddress | **String** |   (optional) | email from address
   | LoginInformationalMessage | **String** |   (optional) | login information message
   | FileStandard | **System.IO.FileInfo** |   (optional) | png file with logo

### Return type

[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Branding item updated | BrandingItem
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Name = "default" # String | The name of the branding item to be retrieved
$Name2 = "Name_example" # String | name of branding item
$ProductName = "MyProductName" # String | product name
$ActionButtonColor = "MyActionButtonColor" # String | hex value of color for action button (optional)
$ActiveLinkColor = "MyActiveLinkColor" # String | hex value of color for link (optional)
$NavigationColor = "MyNavigationColor" # String | hex value of color for navigation bar (optional)
$EmailFromAddress = "MyEmailFromAddress" # String | email from address (optional)
$LoginInformationalMessage = "MyLoginInformationalMessage" # String | login information message (optional)
$FileStandard =  # System.IO.FileInfo | png file with logo (optional)
# Update a branding item
try {
    Set-BrandingItem-Name $Name -Name2 $Name2 -ProductName $ProductName 
    
    # Below is a request that includes all optional parameters
    # Set-BrandingItem -Name $Name -Name2 $Name2 -ProductName $ProductName -ActionButtonColor $ActionButtonColor -ActiveLinkColor $ActiveLinkColor -NavigationColor $NavigationColor -EmailFromAddress $EmailFromAddress -LoginInformationalMessage $LoginInformationalMessage -FileStandard $FileStandard  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BrandingItem"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


