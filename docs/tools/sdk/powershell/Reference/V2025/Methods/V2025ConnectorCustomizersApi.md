---
id: v2025-connector-customizers
title: ConnectorCustomizers
pagination_label: ConnectorCustomizers
sidebar_label: ConnectorCustomizers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizers', 'V2025ConnectorCustomizers'] 
slug: /tools/sdk/powershell/v2025/methods/connector-customizers
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizers', 'V2025ConnectorCustomizers']
---

# ConnectorCustomizers
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025ConnectorCustomizer**](#create-connector-customizer) | **POST** `/connector-customizers` | Create Connector Customizer
[**New-V2025ConnectorCustomizerVersion**](#create-connector-customizer-version) | **POST** `/connector-customizers/{id}/versions` | Creates a connector customizer version
[**Remove-V2025ConnectorCustomizer**](#delete-connector-customizer) | **DELETE** `/connector-customizers/{id}` | Delete Connector Customizer
[**Get-V2025ConnectorCustomizer**](#get-connector-customizer) | **GET** `/connector-customizers/{id}` | Get connector customizer
[**Get-V2025ConnectorCustomizers**](#list-connector-customizers) | **GET** `/connector-customizers` | List All Connector Customizers
[**Send-V2025ConnectorCustomizer**](#put-connector-customizer) | **PUT** `/connector-customizers/{id}` | Update Connector Customizer


## create-connector-customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-customizer)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ConnectorCustomizerCreateRequest | [**ConnectorCustomizerCreateRequest**](../models/connector-customizer-create-request) | True  | Connector customizer to create.

### Return type
[**ConnectorCustomizerCreateResponse**](../models/connector-customizer-create-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created connector customizer. | ConnectorCustomizerCreateResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ConnectorCustomizerCreateRequest = @"{
  "name" : "My Custom Connector"
}"@

# Create Connector Customizer

try {
    $Result = ConvertFrom-JsonToConnectorCustomizerCreateRequest -Json $ConnectorCustomizerCreateRequest
    New-V2025ConnectorCustomizer -ConnectorCustomizerCreateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025ConnectorCustomizer -ConnectorCustomizerCreateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025ConnectorCustomizer"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-connector-customizer-version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-connector-customizer-version)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the connector customizer.

### Return type
[**ConnectorCustomizerVersionCreateResponse**](../models/connector-customizer-version-create-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created connector customizer version object. | ConnectorCustomizerVersionCreateResponse
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
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | The id of the connector customizer.

# Creates a connector customizer version

try {
    New-V2025ConnectorCustomizerVersion -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-V2025ConnectorCustomizerVersion -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025ConnectorCustomizerVersion"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-connector-customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-connector-customizer)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector customizer to delete.

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
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | ID of the connector customizer to delete.

# Delete Connector Customizer

try {
    Remove-V2025ConnectorCustomizer -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025ConnectorCustomizer -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025ConnectorCustomizer"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-customizer)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector customizer to get.

### Return type
[**ConnectorCustomizersResponse**](../models/connector-customizers-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Connector customizer with the given ID. | ConnectorCustomizersResponse
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
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | ID of the connector customizer to get.

# Get connector customizer

try {
    Get-V2025ConnectorCustomizer -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ConnectorCustomizer -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ConnectorCustomizer"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-connector-customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-connector-customizers)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ConnectorCustomizersResponse[]**](../models/connector-customizers-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List all connector customizers. | ConnectorCustomizersResponse[]
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
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# List All Connector Customizers

try {
    Get-V2025ConnectorCustomizers 
    
    # Below is a request that includes all optional parameters
    # Get-V2025ConnectorCustomizers -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025ConnectorCustomizers"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-customizer)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector customizer to update.
 Body  | ConnectorCustomizerUpdateRequest | [**ConnectorCustomizerUpdateRequest**](../models/connector-customizer-update-request) |   (optional) | Connector rule with updated data.

### Return type
[**ConnectorCustomizerUpdateResponse**](../models/connector-customizer-update-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated connector customizer. | ConnectorCustomizerUpdateResponse
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
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | ID of the connector customizer to update.
$ConnectorCustomizerUpdateRequest = @"{
  "name" : "My Custom Connector"
}"@

# Update Connector Customizer

try {
    Send-V2025ConnectorCustomizer -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-V2025ConnectorCustomizer -Id $Id -ConnectorCustomizerUpdateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025ConnectorCustomizer"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
