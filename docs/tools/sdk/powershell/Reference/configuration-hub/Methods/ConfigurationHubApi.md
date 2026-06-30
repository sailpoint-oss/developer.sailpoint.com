---
id: configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ConfigurationHub', 'ConfigurationHub'] 
slug: /tools/sdk/powershell/configurationhub/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'ConfigurationHub']
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
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-DeployV1**](#create-deploy-v1) | **POST** `/configuration-hub/v1/deploys` | Create a deploy
[**New-ObjectMappingV1**](#create-object-mapping-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Creates an object mapping
[**New-ObjectMappingsV1**](#create-object-mappings-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**New-ScheduledActionV1**](#create-scheduled-action-v1) | **POST** `/configuration-hub/v1/scheduled-actions` | Create scheduled action
[**New-UploadedConfigurationV1**](#create-uploaded-configuration-v1) | **POST** `/configuration-hub/v1/backups/uploads` | Upload a configuration
[**Remove-BackupV1**](#delete-backup-v1) | **DELETE** `/configuration-hub/v1/backups/{id}` | Delete a backup
[**Remove-DraftV1**](#delete-draft-v1) | **DELETE** `/configuration-hub/v1/drafts/{id}` | Delete a draft
[**Remove-ObjectMappingV1**](#delete-object-mapping-v1) | **DELETE** `/configuration-hub/v1/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**Remove-ScheduledActionV1**](#delete-scheduled-action-v1) | **DELETE** `/configuration-hub/v1/scheduled-actions/{id}` | Delete scheduled action
[**Remove-UploadedConfigurationV1**](#delete-uploaded-configuration-v1) | **DELETE** `/configuration-hub/v1/backups/uploads/{id}` | Delete an uploaded configuration
[**Get-DeployV1**](#get-deploy-v1) | **GET** `/configuration-hub/v1/deploys/{id}` | Get a deploy
[**Get-ObjectMappingsV1**](#get-object-mappings-v1) | **GET** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Gets list of object mappings
[**Get-UploadedConfigurationV1**](#get-uploaded-configuration-v1) | **GET** `/configuration-hub/v1/backups/uploads/{id}` | Get an uploaded configuration
[**Get-BackupsV1**](#list-backups-v1) | **GET** `/configuration-hub/v1/backups` | List backups
[**Get-DeploysV1**](#list-deploys-v1) | **GET** `/configuration-hub/v1/deploys` | List deploys
[**Get-DraftsV1**](#list-drafts-v1) | **GET** `/configuration-hub/v1/drafts` | List drafts
[**Get-ScheduledActionsV1**](#list-scheduled-actions-v1) | **GET** `/configuration-hub/v1/scheduled-actions` | List scheduled actions
[**Get-UploadedConfigurationsV1**](#list-uploaded-configurations-v1) | **GET** `/configuration-hub/v1/backups/uploads` | List uploaded configurations
[**Update-ObjectMappingsV1**](#update-object-mappings-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**Update-ScheduledActionV1**](#update-scheduled-action-v1) | **PATCH** `/configuration-hub/v1/scheduled-actions/{id}` | Update scheduled action


## create-deploy-v1
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-deploy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Deployrequest | [**Deployrequest**](../models/deployrequest) | True  | The deploy request body.

### Return type
[**Deployresponse**](../models/deployresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Deploy job accepted and queued for processing. | Deployresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Deployrequest = @"{"draftId":"c9a38d8c-5edf-4182-9d39-f6581d3ebd05"}"@

# Create a deploy

try {
    $Result = ConvertFrom-JsonToDeployrequest -Json $Deployrequest
    New-DeployV1 -Deployrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-DeployV1 -Deployrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-DeployV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-object-mapping-v1
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-object-mapping-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
 Body  | Objectmappingrequest | [**Objectmappingrequest**](../models/objectmappingrequest) | True  | The object mapping request body.

### Return type
[**Objectmappingresponse**](../models/objectmappingresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created object mapping between current org and source org. | Objectmappingresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceOrg = "source-org" # String | The name of the source org.
$Objectmappingrequest = @"{"objectType":"GOVERNANCE_GROUP","jsonPath":"$.description","sourceValue":"Sample Governance Group","targetValue":"Sample Governance Group - Updated","enabled":true}"@

# Creates an object mapping

try {
    $Result = ConvertFrom-JsonToObjectmappingrequest -Json $Objectmappingrequest
    New-ObjectMappingV1 -SourceOrg $SourceOrg -Objectmappingrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ObjectMappingV1 -SourceOrg $SourceOrg -Objectmappingrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ObjectMappingV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-object-mappings-v1
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-object-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
 Body  | Objectmappingbulkcreaterequest | [**Objectmappingbulkcreaterequest**](../models/objectmappingbulkcreaterequest) | True  | The bulk create object mapping request body.

### Return type
[**Objectmappingbulkcreateresponse**](../models/objectmappingbulkcreateresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created object mapping between current org and source org. | Objectmappingbulkcreateresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceOrg = "source-org" # String | The name of the source org.
$Objectmappingbulkcreaterequest = @"{"newObjectsMappings":[{"objectType":"SOURCE","jsonPath":"$.name","sourceValue":"Original SOURCE Name","targetValue":"New SOURCE Name","enabled":true},{"objectType":"IDENTITY","jsonPath":"$.name","sourceValue":"Original IDENTITY Name","targetValue":"New IDENTITY Name ","enabled":true}]}"@

# Bulk creates object mappings

try {
    $Result = ConvertFrom-JsonToObjectmappingbulkcreaterequest -Json $Objectmappingbulkcreaterequest
    New-ObjectMappingsV1 -SourceOrg $SourceOrg -Objectmappingbulkcreaterequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ObjectMappingsV1 -SourceOrg $SourceOrg -Objectmappingbulkcreaterequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ObjectMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-scheduled-action-v1
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-scheduled-action-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Scheduledactionpayload | [**Scheduledactionpayload**](../models/scheduledactionpayload) | True  | The scheduled action creation request body.

### Return type
[**Scheduledactionresponse**](../models/scheduledactionresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created scheduled action. | Scheduledactionresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Scheduledactionpayload = @"{"jobType":"BACKUP","startTime":"2024-08-16T14:16:58.389Z","cronString":"0 0 * * * *","timeZoneId":"America/Chicago","content":{"name":"Daily Backup","backupOptions":{"includeTypes":["SOURCE","IDENTITY"],"objectOptions":{"SOURCE":{"includedNames":["Source1","Source2"]}}}}}"@

# Create scheduled action

try {
    $Result = ConvertFrom-JsonToScheduledactionpayload -Json $Scheduledactionpayload
    New-ScheduledActionV1 -Scheduledactionpayload $Result 
    
    # Below is a request that includes all optional parameters
    # New-ScheduledActionV1 -Scheduledactionpayload $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ScheduledActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-uploaded-configuration-v1
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-uploaded-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | Data | **System.IO.FileInfo** | True  | JSON file containing the objects to be imported.
   | Name | **String** | True  | Name that will be assigned to the uploaded configuration file.

### Return type
[**Backupresponse**](../models/backupresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Upload job accepted and queued for processing. | Backupresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Data =  # System.IO.FileInfo | JSON file containing the objects to be imported.
$Name = "MyName" # String | Name that will be assigned to the uploaded configuration file.

# Upload a configuration

try {
    New-UploadedConfigurationV1 -Data $Data -Name $Name 
    
    # Below is a request that includes all optional parameters
    # New-UploadedConfigurationV1 -Data $Data -Name $Name  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-UploadedConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-backup-v1
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-backup-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "07659d7d-2cce-47c0-9e49-185787ee565a" # String | The id of the backup to delete.

# Delete a backup

try {
    Remove-BackupV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BackupV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BackupV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-draft-v1
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-draft-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "07659d7d-2cce-47c0-9e49-185787ee565a" # String | The id of the draft to delete.

# Delete a draft

try {
    Remove-DraftV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-DraftV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-DraftV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-object-mapping-v1
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-object-mapping-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceOrg = "source-org" # String | The name of the source org.
$ObjectMappingId = "3d6e0144-963f-4bd6-8d8d-d77b4e507ce4" # String | The id of the object mapping to be deleted.

# Deletes an object mapping

try {
    Remove-ObjectMappingV1 -SourceOrg $SourceOrg -ObjectMappingId $ObjectMappingId 
    
    # Below is a request that includes all optional parameters
    # Remove-ObjectMappingV1 -SourceOrg $SourceOrg -ObjectMappingId $ObjectMappingId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ObjectMappingV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-scheduled-action-v1
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-scheduled-action-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the scheduled action.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | The ID of the scheduled action.

# Delete scheduled action

try {
    Remove-ScheduledActionV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-ScheduledActionV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ScheduledActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-uploaded-configuration-v1
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-uploaded-configuration-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b" # String | The id of the uploaded configuration.

# Delete an uploaded configuration

try {
    Remove-UploadedConfigurationV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-UploadedConfigurationV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-UploadedConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-deploy-v1
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-deploy-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the deploy.

### Return type
[**Deployresponse**](../models/deployresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Gets the details of a deploy. | Deployresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b" # String | The id of the deploy.

# Get a deploy

try {
    Get-DeployV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-DeployV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DeployV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-object-mappings-v1
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-object-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.

### Return type
[**Objectmappingresponse[]**](../models/objectmappingresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing object mappings between current org and source org. | Objectmappingresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceOrg = "source-org" # String | The name of the source org.

# Gets list of object mappings

try {
    Get-ObjectMappingsV1 -SourceOrg $SourceOrg 
    
    # Below is a request that includes all optional parameters
    # Get-ObjectMappingsV1 -SourceOrg $SourceOrg  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ObjectMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-uploaded-configuration-v1
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-uploaded-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The id of the uploaded configuration.

### Return type
[**Backupresponse**](../models/backupresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Gets an uploaded configuration details. | Backupresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b" # String | The id of the uploaded configuration.

# Get an uploaded configuration

try {
    Get-UploadedConfigurationV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-UploadedConfigurationV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UploadedConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-backups-v1
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-backups-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**Backupresponse[]**](../models/backupresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing backups. | Backupresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'status eq "COMPLETE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

# List backups

try {
    Get-BackupsV1 
    
    # Below is a request that includes all optional parameters
    # Get-BackupsV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BackupsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-deploys-v1
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-deploys-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**ListDeploysV1200Response**](../models/list-deploys-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing deploys. | ListDeploysV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List deploys

try {
    Get-DeploysV1 
    
    # Below is a request that includes all optional parameters
    # Get-DeploysV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DeploysV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-drafts-v1
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-drafts-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq*

### Return type
[**Draftresponse[]**](../models/draftresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing drafts. | Draftresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'status eq "COMPLETE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)

# List drafts

try {
    Get-DraftsV1 
    
    # Below is a request that includes all optional parameters
    # Get-DraftsV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DraftsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-scheduled-actions-v1
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-scheduled-actions-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Scheduledactionresponse[]**](../models/scheduledactionresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing scheduled actions. | Scheduledactionresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List scheduled actions

try {
    Get-ScheduledActionsV1 
    
    # Below is a request that includes all optional parameters
    # Get-ScheduledActionsV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ScheduledActionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-uploaded-configurations-v1
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-uploaded-configurations-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**Backupresponse[]**](../models/backupresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of existing uploaded configurations. | Backupresponse[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'status eq "COMPLETE"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

# List uploaded configurations

try {
    Get-UploadedConfigurationsV1 
    
    # Below is a request that includes all optional parameters
    # Get-UploadedConfigurationsV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UploadedConfigurationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-object-mappings-v1
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-object-mappings-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceOrg | **String** | True  | The name of the source org.
 Body  | Objectmappingbulkpatchrequest | [**Objectmappingbulkpatchrequest**](../models/objectmappingbulkpatchrequest) | True  | The object mapping request body.

### Return type
[**Objectmappingbulkpatchresponse**](../models/objectmappingbulkpatchresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated object mappings. | Objectmappingbulkpatchresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceOrg = "source-org" # String | The name of the source org.
$Objectmappingbulkpatchrequest = @"{"patches":{"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}}"@

# Bulk updates object mappings

try {
    $Result = ConvertFrom-JsonToObjectmappingbulkpatchrequest -Json $Objectmappingbulkpatchrequest
    Update-ObjectMappingsV1 -SourceOrg $SourceOrg -Objectmappingbulkpatchrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ObjectMappingsV1 -SourceOrg $SourceOrg -Objectmappingbulkpatchrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ObjectMappingsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-scheduled-action-v1
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-scheduled-action-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the scheduled action.
 Body  | Jsonpatch | [**Jsonpatch**](../models/jsonpatch) | True  | The JSON Patch document containing the changes to apply to the scheduled action.

### Return type
[**Scheduledactionresponse**](../models/scheduledactionresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated scheduled action. | Scheduledactionresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde" # String | The ID of the scheduled action.
$Jsonpatch = @"[{"op":"replace","path":"/content/name","value":"Updated Backup Name"},{"op":"replace","path":"/cronString","value":"0 0 9 * * ?"}]"@

# Update scheduled action

try {
    $Result = ConvertFrom-JsonToJsonpatch -Json $Jsonpatch
    Update-ScheduledActionV1 -Id $Id -Jsonpatch $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ScheduledActionV1 -Id $Id -Jsonpatch $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ScheduledActionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
