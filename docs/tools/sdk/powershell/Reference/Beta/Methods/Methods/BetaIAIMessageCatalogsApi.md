
---
id: beta-iai-message-catalogs
title: IAIMessageCatalogs
pagination_label: IAIMessageCatalogs
sidebar_label: IAIMessageCatalogs
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIMessageCatalogs', 'BetaIAIMessageCatalogs'] 
slug: /tools/sdk/powershell/beta/methods/iai-message-catalogs
tags: ['SDK', 'Software Development Kit', 'IAIMessageCatalogs', 'BetaIAIMessageCatalogs']
---

# IAIMessageCatalogs
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-BetaMessageCatalogs**](#get-message-catalogs) | **GET** `/translation-catalogs/{catalog-id}` | Get Message catalogs

## get-message-catalogs
The getMessageCatalogs API returns message catalog based on the language headers in the requested object.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CatalogId | **String** | True  | The ID of the message catalog.

### Return type
[**MessageCatalogDto[]**](../models/message-catalog-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The message catalogs based on the request headers | MessageCatalogDto[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$CatalogId = "recommender" # String | The ID of the message catalog.

# Get Message catalogs

try {
    Get-BetaMessageCatalogs-BetaCatalogId $CatalogId 
    
    # Below is a request that includes all optional parameters
    # Get-BetaMessageCatalogs -BetaCatalogId $CatalogId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMessageCatalogs"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
