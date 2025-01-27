---
id: beta-sp-config
title: SPConfig
pagination_label: SPConfig
sidebar_label: SPConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SPConfig'] 
slug: /tools/sdk/powershell/beta/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SPConfig']
---


# SPConfig

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Export-BetaSpConfig**](#export-sp-config) | **POST** `/sp-config/export` | Initiates configuration objects export job
[**Get-BetaSpConfigExport**](#get-sp-config-export) | **GET** `/sp-config/export/{id}/download` | Download export job result.
[**Get-BetaSpConfigExportStatus**](#get-sp-config-export-status) | **GET** `/sp-config/export/{id}` | Get export job status
[**Get-BetaSpConfigImport**](#get-sp-config-import) | **GET** `/sp-config/import/{id}/download` | Download import job result
[**Get-BetaSpConfigImportStatus**](#get-sp-config-import-status) | **GET** `/sp-config/import/{id}` | Get import job status
[**Import-BetaSpConfig**](#import-sp-config) | **POST** `/sp-config/import` | Initiates configuration objects import job
[**Get-BetaSpConfigObjects**](#list-sp-config-objects) | **GET** `/sp-config/config-objects` | Get config object details


## export-sp-config

This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | ExportPayload | [**ExportPayload**](../models/export-payload) | True  | Export options control what will be included in the export.

### Return type

[**SpConfigExportJob**](../models/sp-config-export-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Export job accepted and queued for processing. | SpConfigExportJob
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ExportPayload = @"{
  "description" : "Export Job 1 Test"
}"@
# Initiates configuration objects export job
try {
    $Result = ConvertFrom-JsonToExportPayload -Json $ExportPayload
    Export-BetaSpConfig-BetaExportPayload $Result
    
    # Below is a request that includes all optional parameters
    # Export-BetaSpConfig -BetaExportPayload $ExportPayload  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Export-BetaSpConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sp-config-export

This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the export job whose results will be downloaded.

### Return type

[**SpConfigExportResults**](../models/sp-config-export-results)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Exported JSON objects. | SpConfigExportResults
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the export job whose results will be downloaded.
# Download export job result.
try {
    Get-BetaSpConfigExport-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSpConfigExport -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSpConfigExport"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sp-config-export-status

This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the export job whose status will be returned.

### Return type

[**SpConfigExportJobStatus**](../models/sp-config-export-job-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Export job status successfully returned. | SpConfigExportJobStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the export job whose status will be returned.
# Get export job status
try {
    Get-BetaSpConfigExportStatus-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSpConfigExportStatus -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSpConfigExportStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sp-config-import

This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the import job whose results will be downloaded.

### Return type

[**SpConfigImportResults**](../models/sp-config-import-results)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Import results JSON object, containing detailed results of the import operation. | SpConfigImportResults
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the import job whose results will be downloaded.
# Download import job result
try {
    Get-BetaSpConfigImport-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSpConfigImport -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSpConfigImport"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-sp-config-import-status

This gets the status of the import job identified by the `id` parameter.
For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID of the import job whose status will be returned.

### Return type

[**SpConfigImportJobStatus**](../models/sp-config-import-job-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Import job status successfully returned. | SpConfigImportJobStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The ID of the import job whose status will be returned.
# Get import job status
try {
    Get-BetaSpConfigImportStatus-BetaId $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSpConfigImportStatus -BetaId $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSpConfigImportStatus"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## import-sp-config

This post will import objects from a JSON configuration file into a tenant.
By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
The backup can be skipped by setting "excludeBackup" to true in the import options.
If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
using the `/sp-config/export/{exportJobId}/download` endpoint.

You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | Data | **System.IO.FileInfo** | True  | JSON file containing the objects to be imported.
  Query | Preview | **Boolean** |   (optional) (default to $false) | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is ""true"", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported. 
   | Options | [**ImportOptions**](../models/import-options) |   (optional) | 

### Return type

[**SpConfigJob**](../models/sp-config-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Import job accepted and queued for processing. | SpConfigJob
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

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
    Import-BetaSpConfig-BetaData $Data 
    
    # Below is a request that includes all optional parameters
    # Import-BetaSpConfig -BetaData $Data -BetaPreview $Preview -BetaOptions $Options  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Import-BetaSpConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## list-sp-config-objects

This gets the list of object configurations which are known to the tenant export/import service. Object configurations that contain "importUrl" and "exportUrl" are available for export/import.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**SpConfigObject[]**](../models/sp-config-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Object configurations returned successfully. | SpConfigObject[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Get config object details
try {
    Get-BetaSpConfigObjects
    
    # Below is a request that includes all optional parameters
    # Get-BetaSpConfigObjects  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSpConfigObjects"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


