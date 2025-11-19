---
id: v2024-configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationHub', 'V2024ConfigurationHub'] 
slug: /tools/sdk/powershell/v2024/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'V2024ConfigurationHub']
---

# ConfigurationHub
  Use this API to implement and customize configuration settings management. With this functionality, you can access the Configuration Hub actions and build your own automated pipeline for Identity Security Cloud configuration change delivery and deployment.

Common usages for Configuration Hub includes:

- Upload configuration file - Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.
- Manage object mapping - Create rules to map and substitute attributes when migrating configurations.
- Manage backups for configuration settings
- Manage configuration drafts
- Upload configurations and manage object mappings between tenants.

Refer to [Using the SailPoint Configuration Hub](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html) for more information about Configuration Hub.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2024Deploy**](#create-deploy) | **POST** `/configuration-hub/deploys` | Create a deploy
[**New-V2024ObjectMapping**](#create-object-mapping) | **POST** `/configuration-hub/object-mappings/{sourceOrg}` | Creates an object mapping
[**New-V2024ObjectMappings**](#create-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**New-V2024ScheduledAction**](#create-scheduled-action) | **POST** `/configuration-hub/scheduled-actions` | Create scheduled action
[**New-V2024UploadedConfiguration**](#create-uploaded-configuration) | **POST** `/configuration-hub/backups/uploads` | Upload a configuration
[**Remove-V2024Backup**](#delete-backup) | **DELETE** `/configuration-hub/backups/{id}` | Delete a backup
[**Remove-V2024Draft**](#delete-draft) | **DELETE** `/configuration-hub/drafts/{id}` | Delete a draft
[**Remove-V2024ObjectMapping**](#delete-object-mapping) | **DELETE** `/configuration-hub/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**Remove-V2024ScheduledAction**](#delete-scheduled-action) | **DELETE** `/configuration-hub/scheduled-actions/{id}` | Delete scheduled action
[**Remove-V2024UploadedConfiguration**](#delete-uploaded-configuration) | **DELETE** `/configuration-hub/backups/uploads/{id}` | Delete an uploaded configuration
[**Get-V2024Deploy**](#get-deploy) | **GET** `/configuration-hub/deploys/{id}` | Get a deploy
[**Get-V2024ObjectMappings**](#get-object-mappings) | **GET** `/configuration-hub/object-mappings/{sourceOrg}` | Gets list of object mappings
[**Get-V2024UploadedConfiguration**](#get-uploaded-configuration) | **GET** `/configuration-hub/backups/uploads/{id}` | Get an uploaded configuration
[**Get-V2024Backups**](#list-backups) | **GET** `/configuration-hub/backups` | List backups
[**Get-V2024Deploys**](#list-deploys) | **GET** `/configuration-hub/deploys` | List deploys
[**Get-V2024Drafts**](#list-drafts) | **GET** `/configuration-hub/drafts` | List drafts
[**Get-V2024ScheduledActions**](#list-scheduled-actions) | **GET** `/configuration-hub/scheduled-actions` | List scheduled actions
[**Get-V2024UploadedConfigurations**](#list-uploaded-configurations) | **GET** `/configuration-hub/backups/uploads` | List uploaded configurations
[**Update-V2024ObjectMappings**](#update-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**Update-V2024ScheduledAction**](#update-scheduled-action) | **PATCH** `/configuration-hub/scheduled-actions/{id}` | Update scheduled action


## create-deploy
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-deploy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DeployRequest | [**DeployRequest**](../models/deploy-request) | True  | The deploy request body.

### Return type
[**DeployResponse**](../models/deploy-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Deploy job accepted and queued for processing. | DeployResponse
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
$DeployRequest = @"{
  "draftId" : "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b"
}"@

# Create a deploy

try {
    $Result = ConvertFrom-V2024JsonToDeployRequest -Json $DeployRequest
    New-V2024Deploy -DeployRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024Deploy -DeployRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024Deploy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-object-mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-object-mapping)

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
    $Result = ConvertFrom-V2024JsonToObjectMappingRequest -Json $ObjectMappingRequest
    New-V2024ObjectMapping -SourceOrg $SourceOrg -ObjectMappingRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024ObjectMapping -SourceOrg $SourceOrg -ObjectMappingRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ObjectMapping"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-object-mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-object-mappings)

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
    $Result = ConvertFrom-V2024JsonToObjectMappingBulkCreateRequest -Json $ObjectMappingBulkCreateRequest
    New-V2024ObjectMappings -SourceOrg $SourceOrg -ObjectMappingBulkCreateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024ObjectMappings -SourceOrg $SourceOrg -ObjectMappingBulkCreateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ObjectMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-scheduled-action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-scheduled-action)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ScheduledActionPayload | [**ScheduledActionPayload**](../models/scheduled-action-payload) | True  | The scheduled action creation request body.

### Return type
[**ScheduledActionResponse**](../models/scheduled-action-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created scheduled action. | ScheduledActionResponse
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
$ScheduledActionPayload = @"{
  "cronString" : "0 0 12 * * * *",
  "timeZoneId" : "America/Chicago",
  "startTime" : "2024-08-16T14:16:58.389Z",
  "jobType" : "BACKUP",
  "content" : {
    "sourceTenant" : "tenant-name",
    "draftId" : "9012b87d-48ca-439a-868f-2160001da8c3",
    "name" : "Daily Backup",
    "backupOptions" : {
      "includeTypes" : [ "ROLE", "IDENTITY_PROFILE" ],
      "objectOptions" : {
        "SOURCE" : {
          "includedNames" : [ "Source1", "Source2" ]
        },
        "ROLE" : {
          "includedNames" : [ "Admin Role", "User Role" ]
        }
      }
    },
    "sourceBackupId" : "5678b87d-48ca-439a-868f-2160001da8c2"
  }
}"@

# Create scheduled action

try {
    $Result = ConvertFrom-V2024JsonToScheduledActionPayload -Json $ScheduledActionPayload
    New-V2024ScheduledAction -ScheduledActionPayload $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2024ScheduledAction -ScheduledActionPayload $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024ScheduledAction"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-uploaded-configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-uploaded-configuration)

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

# Upload a configuration

try {
    New-V2024UploadedConfiguration -Data $Data -Name $Name 
    
    # Below is a request that includes all optional parameters
    # New-V2024UploadedConfiguration -Data $Data -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2024UploadedConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-backup)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the backup to delete.

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
$Id = "07659d7d-2cce-47c0-9e49-185787ee565a" # String | The id of the backup to delete.

# Delete a backup

try {
    Remove-V2024Backup -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024Backup -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024Backup"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-draft)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the draft to delete.

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
$Id = "07659d7d-2cce-47c0-9e49-185787ee565a" # String | The id of the draft to delete.

# Delete a draft

try {
    Remove-V2024Draft -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024Draft -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024Draft"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-object-mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-object-mapping)

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
    Remove-V2024ObjectMapping -SourceOrg $SourceOrg -ObjectMappingId $ObjectMappingId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024ObjectMapping -SourceOrg $SourceOrg -ObjectMappingId $ObjectMappingId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024ObjectMapping"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-scheduled-action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-scheduled-action)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScheduledActionId | **String** | True  | The ID of the scheduled action.

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
$ScheduledActionId = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | The ID of the scheduled action.

# Delete scheduled action

try {
    Remove-V2024ScheduledAction -ScheduledActionId $ScheduledActionId 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024ScheduledAction -ScheduledActionId $ScheduledActionId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024ScheduledAction"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-uploaded-configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-uploaded-configuration)

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

# Delete an uploaded configuration

try {
    Remove-V2024UploadedConfiguration -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-V2024UploadedConfiguration -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2024UploadedConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-deploy)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the deploy.

### Return type
[**DeployResponse**](../models/deploy-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Gets the details of a deploy. | DeployResponse
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
$Id = "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b" # String | The id of the deploy.

# Get a deploy

try {
    Get-V2024Deploy -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Deploy -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Deploy"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-object-mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-object-mappings)

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
    Get-V2024ObjectMappings -SourceOrg $SourceOrg 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ObjectMappings -SourceOrg $SourceOrg  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ObjectMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-uploaded-configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-uploaded-configuration)

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

# Get an uploaded configuration

try {
    Get-V2024UploadedConfiguration -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-V2024UploadedConfiguration -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024UploadedConfiguration"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-backups)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**BackupResponse[]**](../models/backup-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing backups. | BackupResponse[]
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
$Filters = 'status eq "COMPLETE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

# List backups

try {
    Get-V2024Backups 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Backups -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Backups"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-deploys)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ListDeploys200Response**](../models/list-deploys200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing deploys. | ListDeploys200Response
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

# List deploys

try {
    Get-V2024Deploys 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Deploys  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Deploys"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-drafts)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq*

### Return type
[**DraftResponse[]**](../models/draft-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing drafts. | DraftResponse[]
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
$Filters = 'status eq "COMPLETE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)

# List drafts

try {
    Get-V2024Drafts 
    
    # Below is a request that includes all optional parameters
    # Get-V2024Drafts -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Drafts"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-scheduled-actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-scheduled-actions)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ScheduledActionResponse[]**](../models/scheduled-action-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing scheduled actions. | ScheduledActionResponse[]
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

# List scheduled actions

try {
    Get-V2024ScheduledActions 
    
    # Below is a request that includes all optional parameters
    # Get-V2024ScheduledActions  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024ScheduledActions"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-uploaded-configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-uploaded-configurations)

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

# List uploaded configurations

try {
    Get-V2024UploadedConfigurations 
    
    # Below is a request that includes all optional parameters
    # Get-V2024UploadedConfigurations -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024UploadedConfigurations"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-object-mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-object-mappings)

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
    $Result = ConvertFrom-V2024JsonToObjectMappingBulkPatchRequest -Json $ObjectMappingBulkPatchRequest
    Update-V2024ObjectMappings -SourceOrg $SourceOrg -ObjectMappingBulkPatchRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024ObjectMappings -SourceOrg $SourceOrg -ObjectMappingBulkPatchRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024ObjectMappings"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-scheduled-action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-scheduled-action)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ScheduledActionId | **String** | True  | The ID of the scheduled action.
 Body  | JsonPatch | [**JsonPatch**](../models/json-patch) | True  | The JSON Patch document containing the changes to apply to the scheduled action.

### Return type
[**ScheduledActionResponse**](../models/scheduled-action-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated scheduled action. | ScheduledActionResponse
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
$ScheduledActionId = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | The ID of the scheduled action.
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

# Update scheduled action

try {
    $Result = ConvertFrom-V2024JsonToJsonPatch -Json $JsonPatch
    Update-V2024ScheduledAction -ScheduledActionId $ScheduledActionId -JsonPatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2024ScheduledAction -ScheduledActionId $ScheduledActionId -JsonPatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024ScheduledAction"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
