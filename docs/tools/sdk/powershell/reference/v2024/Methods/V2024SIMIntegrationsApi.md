---
id: v2024-sim-integrations
title: SIMIntegrations
pagination_label: SIMIntegrations
sidebar_label: SIMIntegrations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SIMIntegrations', 'V2024SIMIntegrations'] 
slug: /tools/sdk/powershell/v2024/methods/sim-integrations
tags: ['SDK', 'Software Development Kit', 'SIMIntegrations', 'V2024SIMIntegrations']
---


# SIMIntegrations

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024SIMIntegration**](#create-sim-integration) | **POST** `/sim-integrations` | Create new SIM integration
[**Remove-V2024SIMIntegration**](#delete-sim-integration) | **DELETE** `/sim-integrations/{id}` | Delete a SIM integration
[**Get-V2024SIMIntegration**](#get-sim-integration) | **GET** `/sim-integrations/{id}` | Get a SIM integration details.
[**Get-V2024SIMIntegrations**](#get-sim-integrations) | **GET** `/sim-integrations` | List the existing SIM integrations.
[**Update-V2024BeforeProvisioningRule**](#patch-before-provisioning-rule) | **PATCH** `/sim-integrations/{id}/beforeProvisioningRule` | Patch a SIM beforeProvisioningRule attribute.
[**Update-V2024SIMAttributes**](#patch-sim-attributes) | **PATCH** `/sim-integrations/{id}` | Patch a SIM attribute.
[**Send-V2024SIMIntegration**](#put-sim-integration) | **PUT** `/sim-integrations/{id}` | Update an existing SIM integration


## create-sim-integration

Create a new SIM Integrations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SimIntegrationDetails | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | DTO containing the details of the SIM integration

### Return type

[**ServiceDeskIntegrationDto1**](../models/service-desk-integration-dto1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the created integration | ServiceDeskIntegrationDto1
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
  "created" : "2023-01-03T21:16:22.432Z",
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
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
# Create new SIM integration
try {
    $Result = ConvertFrom-JsonToSimIntegrationDetails -Json $SimIntegrationDetails
    New-V2024SIMIntegration-V2024XSailPointExperimental $XSailPointExperimental -V2024SimIntegrationDetails $Result
    
    # Below is a request that includes all optional parameters
    # New-V2024SIMIntegration -V2024XSailPointExperimental $XSailPointExperimental -V2024SimIntegrationDetails $SimIntegrationDetails  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024SIMIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## delete-sim-integration

Get the details of a SIM integration.

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
# Delete a SIM integration
try {
    Remove-V2024SIMIntegration-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024SIMIntegration -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024SIMIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sim-integration

Get the details of a SIM integration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**ServiceDeskIntegrationDto1**](../models/service-desk-integration-dto1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto1
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
# Get a SIM integration details.
try {
    Get-V2024SIMIntegration-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SIMIntegration -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SIMIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sim-integrations

List the existing SIM integrations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**ServiceDeskIntegrationDto1**](../models/service-desk-integration-dto1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto1
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
# List the existing SIM integrations.
try {
    Get-V2024SIMIntegrations-V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024SIMIntegrations -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024SIMIntegrations"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-before-provisioning-rule

Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | SIM integration id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

### Return type

[**ServiceDeskIntegrationDto1**](../models/service-desk-integration-dto1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto1
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
$JsonPatch = @""[\n  {\n\t  \"op\": \"replace\",\n\t  \"path\": \"/description\",\n\t  \"value\": \"A new description\"\n  }\n]""@
# Patch a SIM beforeProvisioningRule attribute.
try {
    $Result = ConvertFrom-JsonToJsonPatch -Json $JsonPatch
    Update-V2024BeforeProvisioningRule-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024JsonPatch $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024BeforeProvisioningRule -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024JsonPatch $JsonPatch  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024BeforeProvisioningRule"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## patch-sim-attributes

Patch a SIM attribute given a JsonPatch object.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | SIM integration id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM

### Return type

[**ServiceDeskIntegrationDto1**](../models/service-desk-integration-dto1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto1
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
$JsonPatch = @""[\n  {\n\t  \"op\": \"replace\",\n\t  \"path\": \"/description\",\n\t  \"value\": \"A new description\"\n  }\n]""@
# Patch a SIM attribute.
try {
    $Result = ConvertFrom-JsonToJsonPatch -Json $JsonPatch
    Update-V2024SIMAttributes-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024JsonPatch $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024SIMAttributes -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024JsonPatch $JsonPatch  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024SIMAttributes"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## put-sim-integration

Update an existing SIM integration.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the integration.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | SimIntegrationDetails | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | The full DTO of the integration containing the updated model

### Return type

[**ServiceDeskIntegrationDto1**](../models/service-desk-integration-dto1)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | details of the updated integration | ServiceDeskIntegrationDto1
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
  "created" : "2023-01-03T21:16:22.432Z",
  "name" : "aName",
  "modified" : "2023-01-03T21:16:22.432Z",
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
# Update an existing SIM integration
try {
    $Result = ConvertFrom-JsonToSimIntegrationDetails -Json $SimIntegrationDetails
    Send-V2024SIMIntegration-V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024SimIntegrationDetails $Result
    
    # Below is a request that includes all optional parameters
    # Send-V2024SIMIntegration -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024SimIntegrationDetails $SimIntegrationDetails  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-V2024SIMIntegration"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


