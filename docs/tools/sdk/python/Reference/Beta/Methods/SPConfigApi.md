---
id: beta-sp-config
title: SP_Config
pagination_label: SP_Config
sidebar_label: SP_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SP_Config', 'BetaSP_Config'] 
slug: /tools/sdk/python/beta/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SP_Config', 'BetaSP_Config']
---

# sailpoint.beta.SPConfigApi
  Import and export configuration for some objects between tenants. 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-sp-config**](#export-sp-config) | **POST** `/sp-config/export` | Initiates configuration objects export job
[**get-sp-config-export**](#get-sp-config-export) | **GET** `/sp-config/export/{id}/download` | Download export job result.
[**get-sp-config-export-status**](#get-sp-config-export-status) | **GET** `/sp-config/export/{id}` | Get export job status
[**get-sp-config-import**](#get-sp-config-import) | **GET** `/sp-config/import/{id}/download` | Download import job result
[**get-sp-config-import-status**](#get-sp-config-import-status) | **GET** `/sp-config/import/{id}` | Get import job status
[**import-sp-config**](#import-sp-config) | **POST** `/sp-config/import` | Initiates configuration objects import job
[**list-sp-config-objects**](#list-sp-config-objects) | **GET** `/sp-config/config-objects` | List config objects


## export-sp-config
Initiates configuration objects export job
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/beta/export-sp-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | export_payload | [**ExportPayload**](../models/export-payload) | True  | Export options control what will be included in the export.

### Return type
[**SpConfigExportJob**](../models/sp-config-export-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Export job accepted and queued for processing. | SpConfigExportJob |  -  |
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.export_payload import ExportPayload
from sailpoint.beta.models.sp_config_export_job import SpConfigExportJob
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    export_payload = '''{
          "description" : "Export Job 1 Test"
        }''' # ExportPayload | Export options control what will be included in the export.

    try:
        # Initiates configuration objects export job
        new_export_payload = ExportPayload.from_json(export_payload)
        results = SPConfigApi(api_client).export_sp_config(export_payload=new_export_payload)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).export_sp_config(new_export_payload)
        print("The response of SPConfigApi->export_sp_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->export_sp_config: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-export
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sp-config-export)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the export job whose results will be downloaded.

### Return type
[**SpConfigExportResults**](../models/sp-config-export-results)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Exported JSON objects. | SpConfigExportResults |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.sp_config_export_results import SpConfigExportResults
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the export job whose results will be downloaded. # str | The ID of the export job whose results will be downloaded.

    try:
        # Download export job result.
        
        results = SPConfigApi(api_client).get_sp_config_export(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_export(id)
        print("The response of SPConfigApi->get_sp_config_export:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_export: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-export-status
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sp-config-export-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the export job whose status will be returned.

### Return type
[**SpConfigExportJobStatus**](../models/sp-config-export-job-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Export job status successfully returned. | SpConfigExportJobStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.sp_config_export_job_status import SpConfigExportJobStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the export job whose status will be returned. # str | The ID of the export job whose status will be returned.

    try:
        # Get export job status
        
        results = SPConfigApi(api_client).get_sp_config_export_status(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_export_status(id)
        print("The response of SPConfigApi->get_sp_config_export_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_export_status: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-import
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sp-config-import)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the import job whose results will be downloaded.

### Return type
[**SpConfigImportResults**](../models/sp-config-import-results)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Import results JSON object, containing detailed results of the import operation. | SpConfigImportResults |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.sp_config_import_results import SpConfigImportResults
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the import job whose results will be downloaded. # str | The ID of the import job whose results will be downloaded.

    try:
        # Download import job result
        
        results = SPConfigApi(api_client).get_sp_config_import(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_import(id)
        print("The response of SPConfigApi->get_sp_config_import:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_import: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-import-status
Get import job status
This gets the status of the import job identified by the `id` parameter.
For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sp-config-import-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the import job whose status will be returned.

### Return type
[**SpConfigImportJobStatus**](../models/sp-config-import-job-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Import job status successfully returned. | SpConfigImportJobStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.sp_config_import_job_status import SpConfigImportJobStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the import job whose status will be returned. # str | The ID of the import job whose status will be returned.

    try:
        # Get import job status
        
        results = SPConfigApi(api_client).get_sp_config_import_status(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_import_status(id)
        print("The response of SPConfigApi->get_sp_config_import_status:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_import_status: %s\n" % e)
```



[[Back to top]](#) 

## import-sp-config
Initiates configuration objects import job
This post will import objects from a JSON configuration file into a tenant.
By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
The backup can be skipped by setting "excludeBackup" to true in the import options.
If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
using the `/sp-config/export/{exportJobId}/download` endpoint.

You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).


[API Spec](https://developer.sailpoint.com/docs/api/beta/import-sp-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | data | **bytearray** | True  | JSON file containing the objects to be imported.
  Query | preview | **bool** |   (optional) (default to False) | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported. 
   | options | [**ImportOptions**](../models/import-options) |   (optional) | 

### Return type
[**SpConfigJob**](../models/sp-config-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Import job accepted and queued for processing. | SpConfigJob |  -  |
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.import_options import ImportOptions
from sailpoint.beta.models.sp_config_job import SpConfigJob
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data = None # bytearray | JSON file containing the objects to be imported. # bytearray | JSON file containing the objects to be imported.
    preview = False # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to False) # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to False)
    options = '''sailpoint.beta.ImportOptions()''' # ImportOptions |  (optional)

    try:
        # Initiates configuration objects import job
        
        results = SPConfigApi(api_client).import_sp_config(data=data)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).import_sp_config(data, preview, options)
        print("The response of SPConfigApi->import_sp_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->import_sp_config: %s\n" % e)
```



[[Back to top]](#) 

## list-sp-config-objects
List config objects
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-sp-config-objects)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[SpConfigObject]**](../models/sp-config-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Object configurations returned successfully. | List[SpConfigObject] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sp_config_api import SPConfigApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.sp_config_object import SpConfigObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List config objects
        
        results = SPConfigApi(api_client).list_sp_config_objects()
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).list_sp_config_objects()
        print("The response of SPConfigApi->list_sp_config_objects:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->list_sp_config_objects: %s\n" % e)
```



[[Back to top]](#) 



