---
id: branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Branding', 'Branding'] 
slug: /tools/sdk/powershell/branding/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding', 'Branding']
---

# Branding
  Use this API to implement and customize branding functionality. 
With this functionality in place, administrators can get and manage existing branding items, and they can also create new branding items and configure them for use throughout Identity Security Cloud. 
The Branding APIs provide administrators with a way to customize branding items. 
This customization includes details like their colors, logos, and other information. 
Refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) for more information about certifications.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BrandingItemV1**](#create-branding-item-v1) | **POST** `/brandings/v1` | Create a branding item
[**Remove-BrandingV1**](#delete-branding-v1) | **DELETE** `/brandings/v1/{name}` | Delete a branding item
[**Get-BrandingListV1**](#get-branding-list-v1) | **GET** `/brandings/v1` | List of branding items
[**Get-BrandingV1**](#get-branding-v1) | **GET** `/brandings/v1/{name}` | Get a branding item
[**Set-BrandingItemV1**](#set-branding-item-v1) | **PUT** `/brandings/v1/{name}` | Update a branding item


## create-branding-item-v1
This API endpoint creates a branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-branding-item-v1)

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
[**Brandingitem**](../models/brandingitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Branding item created | Brandingitem
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    New-BrandingItemV1 -Name $Name -ProductName $ProductName 
    
    # Below is a request that includes all optional parameters
    # New-BrandingItemV1 -Name $Name -ProductName $ProductName -ActionButtonColor $ActionButtonColor -ActiveLinkColor $ActiveLinkColor -NavigationColor $NavigationColor -EmailFromAddress $EmailFromAddress -LoginInformationalMessage $LoginInformationalMessage -FileStandard $FileStandard  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BrandingItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-branding-v1
This API endpoint delete information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-branding-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "default" # String | The name of the branding item to be deleted

# Delete a branding item

try {
    Remove-BrandingV1 -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Remove-BrandingV1 -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BrandingV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-branding-list-v1
This API endpoint returns a list of branding items.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-branding-list-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Brandingitem[]**](../models/brandingitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of branding items. | Brandingitem[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List of branding items

try {
    Get-BrandingListV1 
    
    # Below is a request that includes all optional parameters
    # Get-BrandingListV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BrandingListV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-branding-v1
This API endpoint retrieves information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-branding-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Name | **String** | True  | The name of the branding item to be retrieved

### Return type
[**Brandingitem**](../models/brandingitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A branding item object | Brandingitem
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Name = "default" # String | The name of the branding item to be retrieved

# Get a branding item

try {
    Get-BrandingV1 -Name $Name 
    
    # Below is a request that includes all optional parameters
    # Get-BrandingV1 -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BrandingV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-branding-item-v1
This API endpoint updates information for an existing branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-branding-item-v1)

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
[**Brandingitem**](../models/brandingitem)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Branding item updated | Brandingitem
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
    Set-BrandingItemV1 -Name $Name -Name2 $Name2 -ProductName $ProductName 
    
    # Below is a request that includes all optional parameters
    # Set-BrandingItemV1 -Name $Name -Name2 $Name2 -ProductName $ProductName -ActionButtonColor $ActionButtonColor -ActiveLinkColor $ActiveLinkColor -NavigationColor $NavigationColor -EmailFromAddress $EmailFromAddress -LoginInformationalMessage $LoginInformationalMessage -FileStandard $FileStandard  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BrandingItemV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
