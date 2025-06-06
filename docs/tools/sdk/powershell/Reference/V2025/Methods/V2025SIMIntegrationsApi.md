---
id: v2025-sim-integrations
title: SIMIntegrations
pagination_label: SIMIntegrations
sidebar_label: SIMIntegrations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SIMIntegrations', 'V2025SIMIntegrations'] 
slug: /tools/sdk/powershell/v2025/methods/sim-integrations
tags: ['SDK', 'Software Development Kit', 'SIMIntegrations', 'V2025SIMIntegrations']
---

# SIMIntegrations
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint’s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025SIMIntegration**](#create-sim-integration) | **POST** `/sim-integrations` | Create new sim integration
[**Remove-V2025SIMIntegration**](#delete-sim-integration) | **DELETE** `/sim-integrations/{id}` | Delete a sim integration
[**Get-V2025SIMIntegration**](#get-sim-integration) | **GET** `/sim-integrations/{id}` | Get a sim integration details.
[**Get-V2025SIMIntegrations**](#get-sim-integrations) | **GET** `/sim-integrations` | List the existing sim integrations.
[**Update-V2025BeforeProvisioningRule**](#patch-before-provisioning-rule) | **PATCH** `/sim-integrations/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**Update-V2025SIMAttributes**](#patch-sim-attributes) | **PATCH** `/sim-integrations/{id}` | Patch a sim attribute.
[**Send-V2025SIMIntegration**](#put-sim-integration) | **PUT** `/sim-integrations/{id}` | Update an existing sim integration


## create-sim-integration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a new SIM Integrations.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-sim-integration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SimIntegrationDetails | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | DTO containing the details of the SIM integration

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the created integration | ServiceDeskIntegrationDto
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SimIntegrationDetails = @"{
  "cluster" : "xyzzy999",
  "statusMap" : "{closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued}",
  "request" : "{description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId}",
  "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "created" : "2015-05-28T14:07:17Z",
  "name" : "aName",
  "modified" : "2015-05-28T14:07:17Z",
  "description" : "Integration description",
  "attributes" : "{\"uid\":\"Walter White\",\"firstname\":\"walter\",\"cloudStatus\":\"UNREGISTERED\",\"displayName\":\"Walter White\",\"identificationNumber\":\"942\",\"lastSyncDate\":1470348809380,\"email\":\"walter@gmail.com\",\"lastname\":\"white\"}",
  "id" : "id12345",
  "type" : "ServiceNow Service Desk",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "IDENTITY"
  }
}"@

# Create new sim integration

try {
    $Result = ConvertFrom-JsonToSimIntegrationDetails -Json $SimIntegrationDetails
    New-V2025SIMIntegration -XSailPointExperimental $XSailPointExperimental -SimIntegrationDetails $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025SIMIntegration -XSailPointExperimental $XSailPointExperimental -SimIntegrationDetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025SIMIntegration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-sim-integration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-sim-integration)

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
$Id = "12345" # String | The id of the integration to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete a sim integration

try {
    Remove-V2025SIMIntegration -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025SIMIntegration -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025SIMIntegration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sim-integration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sim-integration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto
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
$Id = "12345" # String | The id of the integration.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a sim integration details.

try {
    Get-V2025SIMIntegration -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025SIMIntegration -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025SIMIntegration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sim-integrations
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List the existing SIM integrations.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sim-integrations)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto[]**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List the existing sim integrations.

try {
    Get-V2025SIMIntegrations -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025SIMIntegrations -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025SIMIntegrations"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-before-provisioning-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-before-provisioning-rule)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | SIM integration id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | SIM integration id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$JsonPatch = @"{
  "operations" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  }, {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  } ]
}"@

# Patch a sim beforeprovisioningrule attribute.

try {
    $Result = ConvertFrom-JsonToJsonPatch -Json $JsonPatch
    Update-V2025BeforeProvisioningRule -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025BeforeProvisioningRule -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025BeforeProvisioningRule"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-sim-attributes
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a SIM attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-sim-attributes)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | SIM integration id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "12345" # String | SIM integration id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$JsonPatch = @"{
  "operations" : [ {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  }, {
    "op" : "replace",
    "path" : "/description",
    "value" : "New description"
  } ]
}"@

# Patch a sim attribute.

try {
    $Result = ConvertFrom-JsonToJsonPatch -Json $JsonPatch
    Update-V2025SIMAttributes -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025SIMAttributes -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025SIMAttributes"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-sim-integration
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an existing SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-sim-integration)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SimIntegrationDetails | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | The full DTO of the integration containing the updated model

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the updated integration | ServiceDeskIntegrationDto
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
$Id = "12345" # String | The id of the integration.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SimIntegrationDetails = @"{
  "cluster" : "xyzzy999",
  "statusMap" : "{closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued}",
  "request" : "{description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId}",
  "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
  "created" : "2015-05-28T14:07:17Z",
  "name" : "aName",
  "modified" : "2015-05-28T14:07:17Z",
  "description" : "Integration description",
  "attributes" : "{\"uid\":\"Walter White\",\"firstname\":\"walter\",\"cloudStatus\":\"UNREGISTERED\",\"displayName\":\"Walter White\",\"identificationNumber\":\"942\",\"lastSyncDate\":1470348809380,\"email\":\"walter@gmail.com\",\"lastname\":\"white\"}",
  "id" : "id12345",
  "type" : "ServiceNow Service Desk",
  "beforeProvisioningRule" : {
    "name" : "Example Rule",
    "id" : "2c918085708c274401708c2a8a760001",
    "type" : "IDENTITY"
  }
}"@

# Update an existing sim integration

try {
    $Result = ConvertFrom-JsonToSimIntegrationDetails -Json $SimIntegrationDetails
    Send-V2025SIMIntegration -Id $Id -XSailPointExperimental $XSailPointExperimental -SimIntegrationDetails $Result 
    
    # Below is a request that includes all optional parameters
    # Send-V2025SIMIntegration -Id $Id -XSailPointExperimental $XSailPointExperimental -SimIntegrationDetails $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2025SIMIntegration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
