---
id: configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationHub', 'ConfigurationHub'] 
slug: /tools/sdk/powershell/v3/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'ConfigurationHub']
---

# ConfigurationHub
  Upload configurations and manage object mappings between tenants.

Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.

The function of object mapping allows objects with varying names and IDs to be compared. While objects are compared, a user can replace a value in the source tenant with a new value. Object mapping also helps in locating referenced objects to the source object during the drafting process.

Refer to [Uploading a Configuration File](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html#uploading-a-configuration-file) for more information about uploading Configuration Files

Refer to [Mapping Objects](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html#mapping-objects) for more information about object mappings.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ObjectMapping**](#create-object-mapping) | **POST** `/configuration-hub/object-mappings/{sourceOrg}` | Creates an object mapping
[**New-ObjectMappings**](#create-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**New-UploadedConfiguration**](#create-uploaded-configuration) | **POST** `/configuration-hub/backups/uploads` | Upload a Configuration
[**Remove-ObjectMapping**](#delete-object-mapping) | **DELETE** `/configuration-hub/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**Remove-UploadedConfiguration**](#delete-uploaded-configuration) | **DELETE** `/configuration-hub/backups/uploads/{id}` | Delete an Uploaded Configuration
[**Get-ObjectMappings**](#get-object-mappings) | **GET** `/configuration-hub/object-mappings/{sourceOrg}` | Gets list of object mappings
[**Get-UploadedConfiguration**](#get-uploaded-configuration) | **GET** `/configuration-hub/backups/uploads/{id}` | Get an Uploaded Configuration
[**Get-UploadedConfigurations**](#list-uploaded-configurations) | **GET** `/configuration-hub/backups/uploads` | List Uploaded Configurations
[**Update-ObjectMappings**](#update-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings

## create-object-mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
 Body  | ObjectMappingRequest | [**ObjectMappingRequest**](../models/object-mapping-request) | True  | The object mapping request body.

### Return type
[**ObjectMappingResponse**](../models/object-mapping-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created object mapping between current org and source org. | ObjectMappingResponse
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
$SourceOrg = "source-org" # String | The name of the source org.
$ObjectMappingRequest = @"{
  "targetValue" : "My New Governance Group Name",
  "jsonPath" : "$.name",
  "sourceValue" : "My Governance Group Name",
  "enabled" : false,
  "objectType" : "IDENTITY"
}"@

# Creates an object mapping

try {
    $Result = ConvertFrom-JsonToObjectMappingRequest -Json $ObjectMappingRequest
    New-ObjectMapping -SourceOrg $SourceOrg  -ObjectMappingRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-ObjectMapping -SourceOrg $SourceOrg -ObjectMappingRequest $ObjectMappingRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ObjectMapping"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## create-object-mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
 Body  | ObjectMappingBulkCreateRequest | [**ObjectMappingBulkCreateRequest**](../models/object-mapping-bulk-create-request) | True  | The bulk create object mapping request body.

### Return type
[**ObjectMappingBulkCreateResponse**](../models/object-mapping-bulk-create-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created object mapping between current org and source org. | ObjectMappingBulkCreateResponse
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
$SourceOrg = "source-org" # String | The name of the source org.
$ObjectMappingBulkCreateRequest = @"{
  "newObjectsMappings" : [ {
    "targetValue" : "My New Governance Group Name",
    "jsonPath" : "$.name",
    "sourceValue" : "My Governance Group Name",
    "enabled" : false,
    "objectType" : "IDENTITY"
  }, {
    "targetValue" : "My New Governance Group Name",
    "jsonPath" : "$.name",
    "sourceValue" : "My Governance Group Name",
    "enabled" : false,
    "objectType" : "IDENTITY"
  } ]
}"@

# Bulk creates object mappings

try {
    $Result = ConvertFrom-JsonToObjectMappingBulkCreateRequest -Json $ObjectMappingBulkCreateRequest
    New-ObjectMappings -SourceOrg $SourceOrg  -ObjectMappingBulkCreateRequest $Result
    
    # Below is a request that includes all optional parameters
    # New-ObjectMappings -SourceOrg $SourceOrg -ObjectMappingBulkCreateRequest $ObjectMappingBulkCreateRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ObjectMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## create-uploaded-configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects) for more information about supported objects.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | Data | **System.IO.FileInfo** | True  | JSON file containing the objects to be imported.
   | Name | **String** | True  | Name that will be assigned to the uploaded configuration file.

### Return type
[**BackupResponse**](../models/backup-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Upload job accepted and queued for processing. | BackupResponse
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
$Data =  # System.IO.FileInfo | JSON file containing the objects to be imported.
$Name = "MyName" # String | Name that will be assigned to the uploaded configuration file.

# Upload a Configuration

try {
    New-UploadedConfiguration -Data $Data  -Name $Name 
    
    # Below is a request that includes all optional parameters
    # New-UploadedConfiguration -Data $Data -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-UploadedConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## delete-object-mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
Path   | ObjectMappingId | **String** | True  | The id of the object mapping to be deleted.

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
$SourceOrg = "source-org" # String | The name of the source org.
$ObjectMappingId = "3d6e0144-963f-4bd6-8d8d-d77b4e507ce4" # String | The id of the object mapping to be deleted.

# Deletes an object mapping

try {
    Remove-ObjectMapping -SourceOrg $SourceOrg  -ObjectMappingId $ObjectMappingId 
    
    # Below is a request that includes all optional parameters
    # Remove-ObjectMapping -SourceOrg $SourceOrg -ObjectMappingId $ObjectMappingId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ObjectMapping"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## delete-uploaded-configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the uploaded configuration.

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
$Id = "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b" # String | The id of the uploaded configuration.

# Delete an Uploaded Configuration

try {
    Remove-UploadedConfiguration -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-UploadedConfiguration -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-UploadedConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-object-mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.

### Return type
[**ObjectMappingResponse[]**](../models/object-mapping-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing object mappings between current org and source org. | ObjectMappingResponse[]
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
$SourceOrg = "source-org" # String | The name of the source org.

# Gets list of object mappings

try {
    Get-ObjectMappings -SourceOrg $SourceOrg 
    
    # Below is a request that includes all optional parameters
    # Get-ObjectMappings -SourceOrg $SourceOrg  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ObjectMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-uploaded-configuration
This API gets an existing uploaded configuration for the current tenant.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the uploaded configuration.

### Return type
[**BackupResponse**](../models/backup-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Gets an uploaded configuration details. | BackupResponse
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
$Id = "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b" # String | The id of the uploaded configuration.

# Get an Uploaded Configuration

try {
    Get-UploadedConfiguration -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-UploadedConfiguration -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UploadedConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## list-uploaded-configurations
This API gets a list of existing uploaded configurations for the current tenant.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**BackupResponse[]**](../models/backup-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing uploaded configurations. | BackupResponse[]
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
$Filters = 'status eq "COMPLETE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

# List Uploaded Configurations

try {
    Get-UploadedConfigurations
    
    # Below is a request that includes all optional parameters
    # Get-UploadedConfigurations -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UploadedConfigurations"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## update-object-mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
 Body  | ObjectMappingBulkPatchRequest | [**ObjectMappingBulkPatchRequest**](../models/object-mapping-bulk-patch-request) | True  | The object mapping request body.

### Return type
[**ObjectMappingBulkPatchResponse**](../models/object-mapping-bulk-patch-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated object mappings. | ObjectMappingBulkPatchResponse
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
$SourceOrg = "source-org" # String | The name of the source org.
$ObjectMappingBulkPatchRequest = @"{
  "patches" : {
    "603b1a61-d03d-4ed1-864f-a508fbd1995d" : [ {
      "op" : "replace",
      "path" : "/enabled",
      "value" : true
    } ],
    "00bece34-f50d-4227-8878-76f620b5a971" : [ {
      "op" : "replace",
      "path" : "/targetValue",
      "value" : "New Target Value"
    } ]
  }
}"@

# Bulk updates object mappings

try {
    $Result = ConvertFrom-JsonToObjectMappingBulkPatchRequest -Json $ObjectMappingBulkPatchRequest
    Update-ObjectMappings -SourceOrg $SourceOrg  -ObjectMappingBulkPatchRequest $Result
    
    # Below is a request that includes all optional parameters
    # Update-ObjectMappings -SourceOrg $SourceOrg -ObjectMappingBulkPatchRequest $ObjectMappingBulkPatchRequest  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ObjectMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
