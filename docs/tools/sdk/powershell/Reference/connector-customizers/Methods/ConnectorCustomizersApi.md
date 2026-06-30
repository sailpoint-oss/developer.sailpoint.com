---
id: connector-customizers
title: ConnectorCustomizers
pagination_label: ConnectorCustomizers
sidebar_label: ConnectorCustomizers
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConnectorCustomizers', 'ConnectorCustomizers'] 
slug: /tools/sdk/powershell/connectorcustomizers/methods/connector-customizers
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizers', 'ConnectorCustomizers']
---

# ConnectorCustomizers
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ConnectorCustomizerV1**](#create-connector-customizer-v1) | **POST** `/connector-customizers/v1` | Create connector customizer
[**New-ConnectorCustomizerVersionV1**](#create-connector-customizer-version-v1) | **POST** `/connector-customizers/v1/{id}/versions` | Creates a connector customizer version
[**Remove-ConnectorCustomizerV1**](#delete-connector-customizer-v1) | **DELETE** `/connector-customizers/v1/{id}` | Delete connector customizer
[**Get-ConnectorCustomizerV1**](#get-connector-customizer-v1) | **GET** `/connector-customizers/v1/{id}` | Get connector customizer
[**Get-ConnectorCustomizersV1**](#list-connector-customizers-v1) | **GET** `/connector-customizers/v1` | List all connector customizers
[**Send-ConnectorCustomizerV1**](#put-connector-customizer-v1) | **PUT** `/connector-customizers/v1/{id}` | Update connector customizer


## create-connector-customizer-v1
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-customizer-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Connectorcustomizercreaterequest | [**Connectorcustomizercreaterequest**](../models/connectorcustomizercreaterequest) | True  | Connector customizer to create.

### Return type
[**Connectorcustomizercreateresponse**](../models/connectorcustomizercreateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created connector customizer. | Connectorcustomizercreateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Connectorcustomizercreaterequest = @""@

# Create connector customizer

try {
    $Result = ConvertFrom-JsonToConnectorcustomizercreaterequest -Json $Connectorcustomizercreaterequest
    New-ConnectorCustomizerV1 -Connectorcustomizercreaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ConnectorCustomizerV1 -Connectorcustomizercreaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ConnectorCustomizerV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-connector-customizer-version-v1
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-customizer-version-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the connector customizer.

### Return type
[**Connectorcustomizerversioncreateresponse**](../models/connectorcustomizerversioncreateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created connector customizer version object. | Connectorcustomizerversioncreateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | The id of the connector customizer.

# Creates a connector customizer version

try {
    New-ConnectorCustomizerVersionV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # New-ConnectorCustomizerVersionV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ConnectorCustomizerVersionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-connector-customizer-v1
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-connector-customizer-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | ID of the connector customizer to delete.

# Delete connector customizer

try {
    Remove-ConnectorCustomizerV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ConnectorCustomizerV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ConnectorCustomizerV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-connector-customizer-v1
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-customizer-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector customizer to get.

### Return type
[**Connectorcustomizersresponse**](../models/connectorcustomizersresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Connector customizer with the given ID. | Connectorcustomizersresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | ID of the connector customizer to get.

# Get connector customizer

try {
    Get-ConnectorCustomizerV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorCustomizerV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorCustomizerV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-connector-customizers-v1
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-connector-customizers-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Connectorcustomizersresponse[]**](../models/connectorcustomizersresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List all connector customizers. | Connectorcustomizersresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

# List all connector customizers

try {
    Get-ConnectorCustomizersV1 
    
    # Below is a request that includes all optional parameters
    # Get-ConnectorCustomizersV1 -Offset $Offset -Limit $Limit  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ConnectorCustomizersV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-connector-customizer-v1
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-customizer-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the connector customizer to update.
 Body  | Connectorcustomizerupdaterequest | [**Connectorcustomizerupdaterequest**](../models/connectorcustomizerupdaterequest) |   (optional) | Connector rule with updated data.

### Return type
[**Connectorcustomizerupdateresponse**](../models/connectorcustomizerupdateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated connector customizer. | Connectorcustomizerupdateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListConnectorCustomizersV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListConnectorCustomizersV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "b07dc46a-1498-4de8-bfbb-259a68e70c8a" # String | ID of the connector customizer to update.
$Connectorcustomizerupdaterequest = @""@

# Update connector customizer

try {
    Send-ConnectorCustomizerV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Send-ConnectorCustomizerV1 -Id $Id -Connectorcustomizerupdaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ConnectorCustomizerV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
