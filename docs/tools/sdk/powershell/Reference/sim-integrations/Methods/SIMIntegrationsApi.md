---
id: sim-integrations
title: SIMIntegrations
pagination_label: SIMIntegrations
sidebar_label: SIMIntegrations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SIMIntegrations', 'SIMIntegrations'] 
slug: /tools/sdk/powershell/simintegrations/methods/sim-integrations
tags: ['SDK', 'Software Development Kit', 'SIMIntegrations', 'SIMIntegrations']
---

# SIMIntegrations
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint&#39;s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SIMIntegrationV1**](#create-sim-integration-v1) | **POST** `/sim-integrations/v1` | Create new sim integration
[**Remove-SIMIntegrationV1**](#delete-sim-integration-v1) | **DELETE** `/sim-integrations/v1/{id}` | Delete a sim integration
[**Get-SIMIntegrationV1**](#get-sim-integration-v1) | **GET** `/sim-integrations/v1/{id}` | Get a sim integration details.
[**Get-SIMIntegrationsV1**](#get-sim-integrations-v1) | **GET** `/sim-integrations/v1` | List the existing sim integrations.
[**Update-BeforeProvisioningRuleV1**](#patch-before-provisioning-rule-v1) | **PATCH** `/sim-integrations/v1/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**Update-SIMAttributesV1**](#patch-sim-attributes-v1) | **PATCH** `/sim-integrations/v1/{id}` | Patch a sim attribute.
[**Send-SIMIntegrationV1**](#put-sim-integration-v1) | **PUT** `/sim-integrations/v1/{id}` | Update an existing sim integration


## create-sim-integration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a new SIM Integrations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sim-integration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Simintegrationdetails | [**Simintegrationdetails**](../models/simintegrationdetails) | True  | DTO containing the details of the SIM integration

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the created integration | Servicedeskintegrationdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Simintegrationdetails = @""@

# Create new sim integration

try {
    $Result = ConvertFrom-JsonToSimintegrationdetails -Json $Simintegrationdetails
    New-SIMIntegrationV1 -XSailPointExperimental $XSailPointExperimental -Simintegrationdetails $Result 
    
    # Below is a request that includes all optional parameters
    # New-SIMIntegrationV1 -XSailPointExperimental $XSailPointExperimental -Simintegrationdetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SIMIntegrationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sim-integration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-sim-integration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration to delete.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | No content response | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | The id of the integration to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete a sim integration

try {
    Remove-SIMIntegrationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-SIMIntegrationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-SIMIntegrationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sim-integration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sim-integration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The DTO containing the details of the SIM integration | Servicedeskintegrationdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | The id of the integration.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a sim integration details.

try {
    Get-SIMIntegrationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SIMIntegrationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SIMIntegrationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sim-integrations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List the existing SIM integrations.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sim-integrations-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Servicedeskintegrationdto[]**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The DTO containing the details of the SIM integration | Servicedeskintegrationdto[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List the existing sim integrations.

try {
    Get-SIMIntegrationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SIMIntegrationsV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SIMIntegrationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-before-provisioning-rule-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-before-provisioning-rule-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | SIM integration id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatch | [**Jsonpatch**](../models/jsonpatch) | True  | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated DTO containing the details of the SIM integration. | Servicedeskintegrationdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | SIM integration id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Jsonpatch = @""@

# Patch a sim beforeprovisioningrule attribute.

try {
    $Result = ConvertFrom-JsonToJsonpatch -Json $Jsonpatch
    Update-BeforeProvisioningRuleV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Jsonpatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BeforeProvisioningRuleV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Jsonpatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BeforeProvisioningRuleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sim-attributes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a SIM attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-sim-attributes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | SIM integration id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Jsonpatch | [**Jsonpatch**](../models/jsonpatch) | True  | The JsonPatch object that describes the changes of SIM

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated DTO containing the details of the SIM integration. | Servicedeskintegrationdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | SIM integration id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Jsonpatch = @""@

# Patch a sim attribute.

try {
    $Result = ConvertFrom-JsonToJsonpatch -Json $Jsonpatch
    Update-SIMAttributesV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Jsonpatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-SIMAttributesV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Jsonpatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-SIMAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-sim-integration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an existing SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-sim-integration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Simintegrationdetails | [**Simintegrationdetails**](../models/simintegrationdetails) | True  | The full DTO of the integration containing the updated model

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the updated integration | Servicedeskintegrationdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | The id of the integration.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Simintegrationdetails = @""@

# Update an existing sim integration

try {
    $Result = ConvertFrom-JsonToSimintegrationdetails -Json $Simintegrationdetails
    Send-SIMIntegrationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Simintegrationdetails $Result 
    
    # Below is a request that includes all optional parameters
    # Send-SIMIntegrationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -Simintegrationdetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-SIMIntegrationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
