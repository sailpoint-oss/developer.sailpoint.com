---
id: sp-config
title: SPConfig
pagination_label: SPConfig
sidebar_label: SPConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SPConfig', 'SPConfig'] 
slug: /tools/sdk/powershell/spconfig/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SPConfig', 'SPConfig']
---

# SPConfig
  Import and export configuration for some objects between tenants. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Export-SpConfigV1**](#export-sp-config-v1) | **POST** `/sp-config/v1/export` | Initiates configuration objects export job
[**Get-SpConfigExportStatusV1**](#get-sp-config-export-status-v1) | **GET** `/sp-config/v1/export/{id}` | Get export job status
[**Get-SpConfigExportV1**](#get-sp-config-export-v1) | **GET** `/sp-config/v1/export/{id}/download` | Download export job result.
[**Get-SpConfigImportStatusV1**](#get-sp-config-import-status-v1) | **GET** `/sp-config/v1/import/{id}` | Get import job status
[**Get-SpConfigImportV1**](#get-sp-config-import-v1) | **GET** `/sp-config/v1/import/{id}/download` | Download import job result
[**Import-SpConfigV1**](#import-sp-config-v1) | **POST** `/sp-config/v1/import` | Initiates configuration objects import job
[**Get-SpConfigObjectsV1**](#list-sp-config-objects-v1) | **GET** `/sp-config/v1/config-objects` | List config objects


## export-sp-config-v1
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-sp-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Exportpayload | [**Exportpayload**](../models/exportpayload) | True  | Export options control what will be included in the export.

### Return type
[**Spconfigexportjob**](../models/spconfigexportjob)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Export job accepted and queued for processing. | Spconfigexportjob
400 | Client Error - Returned if the request body is invalid.  | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Exportpayload = @"{"description":"Export all available objects","excludeTypes":[],"includeTypes":["ACCESS_PROFILE","ACCESS_REQUEST_CONFIG","ATTR_SYNC_SOURCE_CONFIG","AUTH_ORG","CAMPAIGN_FILTER","CONNECTOR_RULE","FORM_DEFINITION","GOVERNANCE_GROUP","IDENTITY_OBJECT_CONFIG","IDENTITY_PROFILE","LIFECYCLE_STATE","NOTIFICATION_TEMPLATE","PASSWORD_POLICY","PASSWORD_SYNC_GROUP","PUBLIC_IDENTITIES_CONFIG","ROLE","RULE","SEGMENT","SERVICE_DESK_INTEGRATION","SOD_POLICY","SOURCE","TAG","TRANSFORM","TRIGGER_SUBSCRIPTION","WORKFLOW"],"objectOptions":{}}"@

# Initiates configuration objects export job

try {
    $Result = ConvertFrom-JsonToExportpayload -Json $Exportpayload
    Export-SpConfigV1 -Exportpayload $Result 
    
    # Below is a request that includes all optional parameters
    # Export-SpConfigV1 -Exportpayload $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-SpConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sp-config-export-status-v1
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the export job whose status will be returned.

### Return type
[**Spconfigexportjobstatus**](../models/spconfigexportjobstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Export job status successfully returned. | Spconfigexportjobstatus
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the export job whose status will be returned.

# Get export job status

try {
    Get-SpConfigExportStatusV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SpConfigExportStatusV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SpConfigExportStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sp-config-export-v1
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the export job whose results will be downloaded.

### Return type
[**Spconfigexportresults**](../models/spconfigexportresults)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Exported JSON objects. | Spconfigexportresults
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the export job whose results will be downloaded.

# Download export job result.

try {
    Get-SpConfigExportV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SpConfigExportV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SpConfigExportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sp-config-import-status-v1
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the import job whose status will be returned.

### Return type
[**Spconfigimportjobstatus**](../models/spconfigimportjobstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Import job status successfully returned. | Spconfigimportjobstatus
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the import job whose status will be returned.

# Get import job status

try {
    Get-SpConfigImportStatusV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SpConfigImportStatusV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SpConfigImportStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-sp-config-import-v1
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the import job whose results will be downloaded.

### Return type
[**Spconfigimportresults**](../models/spconfigimportresults)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Import results JSON object, containing detailed results of the import operation. | Spconfigimportresults
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the import job whose results will be downloaded.

# Download import job result

try {
    Get-SpConfigImportV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-SpConfigImportV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SpConfigImportV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## import-sp-config-v1
This post will import objects from a JSON configuration file into a tenant.
By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
The backup can be skipped by setting "excludeBackup" to true in the import options.
If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
using the `/sp-config/export/{exportJobId}/download` endpoint.

You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).


[API Spec](https://developer.sailpoint.com/docs/api/v1/import-sp-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | Data | **System.IO.FileInfo** | True  | JSON file containing the objects to be imported.
  Query | Preview | **Boolean** |   (optional) (default to $false) | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is ""true"", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported. 
   | Options | [**Importoptions**](../models/importoptions) |   (optional) | 

### Return type
[**Spconfigjob**](../models/spconfigjob)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Import job accepted and queued for processing. | Spconfigjob
400 | Client Error - Returned if the request body is invalid.  | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$Data =  # System.IO.FileInfo | JSON file containing the objects to be imported.
$Preview = $true # Boolean | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is ""true"", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to $false)
$Options = @""@

# Initiates configuration objects import job

try {
    Import-SpConfigV1 -Data $Data 
    
    # Below is a request that includes all optional parameters
    # Import-SpConfigV1 -Data $Data -Preview $Preview -Options $Options  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-SpConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-sp-config-objects-v1
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sp-config-objects-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Spconfigobject[]**](../models/spconfigobject)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Object configurations returned successfully. | Spconfigobject[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# List config objects

try {
    Get-SpConfigObjectsV1 
    
    # Below is a request that includes all optional parameters
    # Get-SpConfigObjectsV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SpConfigObjectsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
