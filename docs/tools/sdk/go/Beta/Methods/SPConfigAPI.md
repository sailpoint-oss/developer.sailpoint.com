---
id: sp-config
title: SPConfig
pagination_label: SPConfig
sidebar_label: SPConfig
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SPConfig'] 
slug: /tools/sdk/go/beta/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SPConfig']
---


# SPConfig

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ExportSpConfig**](#export-sp-config) | **Post** /sp-config/export | Initiates configuration objects export job
[**GetSpConfigExport**](#get-sp-config-export) | **Get** /sp-config/export/{id}/download | Download export job result.
[**GetSpConfigExportStatus**](#get-sp-config-export-status) | **Get** /sp-config/export/{id} | Get export job status
[**GetSpConfigImport**](#get-sp-config-import) | **Get** /sp-config/import/{id}/download | Download import job result
[**GetSpConfigImportStatus**](#get-sp-config-import-status) | **Get** /sp-config/import/{id} | Get import job status
[**ImportSpConfig**](#import-sp-config) | **Post** /sp-config/import | Initiates configuration objects import job
[**ListSpConfigObjects**](#list-sp-config-objects) | **Get** /sp-config/config-objects | Get config object details



## export-sp-config


This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | exportPayload | [**ExportPayload**](../models/export-payload) | True  | Export options control what will be included in the export.

	
### Return type

[**SpConfigExportJob**](../models/sp-config-export-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Export job accepted and queued for processing. | SpConfigExportJob
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) 


## get-sp-config-export


This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the export job whose results will be downloaded.

	
### Return type

[**SpConfigExportResults**](../models/sp-config-export-results)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Exported JSON objects. | SpConfigExportResults
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-sp-config-export-status


This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the export job whose status will be returned.

	
### Return type

[**SpConfigExportJobStatus**](../models/sp-config-export-job-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Export job status successfully returned. | SpConfigExportJobStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-sp-config-import


This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the import job whose results will be downloaded.

	
### Return type

[**SpConfigImportResults**](../models/sp-config-import-results)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Import results JSON object, containing detailed results of the import operation. | SpConfigImportResults
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## get-sp-config-import-status


This gets the status of the import job identified by the `id` parameter.
For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).
The request will need the following security scope:
- sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **string** | True  | The ID of the import job whose status will be returned.

	
### Return type

[**SpConfigImportJobStatus**](../models/sp-config-import-job-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Import job status successfully returned. | SpConfigImportJobStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## import-sp-config


This post will import objects from a JSON configuration file into a tenant. By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted. The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed. The backup can be skipped by setting "excludeBackup" to true in the import options. If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded  using the /sp-config/export/{exportJobId}/download endpoint.
You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 
For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).
The request will need the following security scope:
- sp:config:manage

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | data | ***os.File** | True  | JSON file containing the objects to be imported.
  Query | preview | **bool** |   (optional) (default to false) | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.
   | options | [**ImportOptions**](../models/import-options) |   (optional) | 

	
### Return type

[**SpConfigJob**](../models/sp-config-job)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Import job accepted and queued for processing. | SpConfigJob
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) 


## list-sp-config-objects


This gets the list of object configurations which are known to the tenant export/import service. Object configurations that contain "importUrl" and "exportUrl" are available for export/import.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

	
### Return type

[**[]SpConfigObject**](../models/sp-config-object)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Object configurations returned successfully. | []SpConfigObject
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 

