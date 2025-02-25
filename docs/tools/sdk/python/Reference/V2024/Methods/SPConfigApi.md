---
id: v2024-sp-config
title: SP_Config
pagination_label: SP_Config
sidebar_label: SP_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SP_Config', 'V2024SP_Config'] 
slug: /tools/sdk/python/v2024/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SP_Config', 'V2024SP_Config']
---

# sailpoint.v2024.SPConfigApi
  Import and export configuration for some objects between tenants. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-sp-config**](#export-sp-config) | **POST** `/sp-config/export` | Initiates configuration objects export job
[**get-sp-config-export**](#get-sp-config-export) | **GET** `/sp-config/export/{id}/download` | Download export job result.
[**get-sp-config-export-status**](#get-sp-config-export-status) | **GET** `/sp-config/export/{id}` | Get export job status
[**get-sp-config-import**](#get-sp-config-import) | **GET** `/sp-config/import/{id}/download` | Download import job result
[**get-sp-config-import-status**](#get-sp-config-import-status) | **GET** `/sp-config/import/{id}` | Get import job status
[**import-sp-config**](#import-sp-config) | **POST** `/sp-config/import` | Initiates configuration objects import job
[**list-sp-config-objects**](#list-sp-config-objects) | **GET** `/sp-config/config-objects` | Get config object details


## export-sp-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Initiates configuration objects export job
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/v2024/export-sp-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | export_payload | [**ExportPayload**](../models/export-payload) | True  | Export options control what will be included in the export.

### Return type
[**SpConfigExportJob**](../models/sp-config-export-job)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Export job accepted and queued for processing. | SpConfigExportJob |  -  |
400 | Client Error - Returned if the request body is invalid.  | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.export_payload import ExportPayload
from sailpoint.v2024.models.sp_config_export_job import SpConfigExportJob
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    export_payload = {
          "description" : "Export Job 1 Test"
        } # ExportPayload | Export options control what will be included in the export.

    try:
        # Initiates configuration objects export job
        new_export_payload = ExportPayload()
        new_export_payload.from_json(export_payload)
        results =SPConfigApi(api_client).export_sp_config(x_sail_point_experimental, new_export_payload)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).export_sp_config(x_sail_point_experimental, new_export_payload)
        print("The response of SPConfigApi->export_sp_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->export_sp_config: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-export
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sp-config-export)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the export job whose results will be downloaded.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SpConfigExportResults**](../models/sp-config-export-results)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Exported JSON objects. | SpConfigExportResults |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sp_config_export_results import SpConfigExportResults
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the export job whose results will be downloaded. # str | The ID of the export job whose results will be downloaded.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Download export job result.
        
        results =SPConfigApi(api_client).get_sp_config_export(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_export(id, x_sail_point_experimental)
        print("The response of SPConfigApi->get_sp_config_export:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_export: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-export-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sp-config-export-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the export job whose status will be returned.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SpConfigExportJobStatus**](../models/sp-config-export-job-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Export job status successfully returned. | SpConfigExportJobStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sp_config_export_job_status import SpConfigExportJobStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the export job whose status will be returned. # str | The ID of the export job whose status will be returned.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get export job status
        
        results =SPConfigApi(api_client).get_sp_config_export_status(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_export_status(id, x_sail_point_experimental)
        print("The response of SPConfigApi->get_sp_config_export_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_export_status: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-import
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sp-config-import)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the import job whose results will be downloaded.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SpConfigImportResults**](../models/sp-config-import-results)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Import results JSON object, containing detailed results of the import operation. | SpConfigImportResults |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sp_config_import_results import SpConfigImportResults
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the import job whose results will be downloaded. # str | The ID of the import job whose results will be downloaded.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Download import job result
        
        results =SPConfigApi(api_client).get_sp_config_import(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_import(id, x_sail_point_experimental)
        print("The response of SPConfigApi->get_sp_config_import:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_import: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-import-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get import job status
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-sp-config-import-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the import job whose status will be returned.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SpConfigImportJobStatus**](../models/sp-config-import-job-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Import job status successfully returned. | SpConfigImportJobStatus |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sp_config_import_job_status import SpConfigImportJobStatus
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the import job whose status will be returned. # str | The ID of the import job whose status will be returned.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get import job status
        
        results =SPConfigApi(api_client).get_sp_config_import_status(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_import_status(id, x_sail_point_experimental)
        print("The response of SPConfigApi->get_sp_config_import_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_import_status: %s\n" % e)
```



[[Back to top]](#) 

## import-sp-config
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Initiates configuration objects import job
"This post will import objects from a JSON configuration file into\
 \ a tenant. By default, every import will first export all existing objects supported\
 \ by sp-config as a backup before the import is attempted. The backup is provided\
 \ so that the state of the configuration prior to the import is available for\
 \ inspection or restore if needed. The backup can be skipped by setting \"excludeBackup\"\
 \ to true in the import options. If a backup is performed, the id of the backup\
 \ will be provided in the ImportResult as the \"exportJobId\". This can be downloaded\
 \  using the `/sp-config/export/{exportJobId}/download` endpoint.\nYou cannot currently\
 \ import from the Non-Employee Lifecycle Management (NELM) source. You cannot\
 \ use this endpoint to back up or store NELM data. \nFor more information about\
 \ the object types that currently support import functionality, refer to [SaaS\
 \ Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects)."


[API Spec](https://developer.sailpoint.com/docs/api/v2024/import-sp-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.import_options import ImportOptions
from sailpoint.v2024.models.sp_config_job import SpConfigJob
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    data = None # bytearray | JSON file containing the objects to be imported. # bytearray | JSON file containing the objects to be imported.
    preview = False # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to False) # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to False)
    options = sailpoint.v2024.ImportOptions() # ImportOptions |  (optional)

    try:
        # Initiates configuration objects import job
        
        results =SPConfigApi(api_client).import_sp_config(x_sail_point_experimental, data, )
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).import_sp_config(x_sail_point_experimental, data, preview, options)
        print("The response of SPConfigApi->import_sp_config:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->import_sp_config: %s\n" % e)
```



[[Back to top]](#) 

## list-sp-config-objects
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get config object details
This gets the list of object configurations which are known to the tenant export/import service. Object configurations that contain "importUrl" and "exportUrl" are available for export/import.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-sp-config-objects)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[SpConfigObject]**](../models/sp-config-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Object configurations returned successfully. | List[SpConfigObject] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.sp_config_api import SPConfigApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.sp_config_object import SpConfigObject
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get config object details
        
        results =SPConfigApi(api_client).list_sp_config_objects(x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).list_sp_config_objects(x_sail_point_experimental)
        print("The response of SPConfigApi->list_sp_config_objects:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling SPConfigApi->list_sp_config_objects: %s\n" % e)
```



[[Back to top]](#) 



