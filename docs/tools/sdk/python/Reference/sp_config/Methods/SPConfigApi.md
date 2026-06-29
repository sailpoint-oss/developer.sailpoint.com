---
id: sp-config
title: SP_Config
pagination_label: SP_Config
sidebar_label: SP_Config
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SP_Config', 'SP_Config'] 
slug: /tools/sdk/python/sp-config/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SP_Config', 'SP_Config']
---

# sailpoint.sp_config.SPConfigApi
  Import and export configuration for some objects between tenants. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-sp-config-v1**](#export-sp-config-v1) | **POST** `/sp-config/v1/export` | Initiates configuration objects export job
[**get-sp-config-export-status-v1**](#get-sp-config-export-status-v1) | **GET** `/sp-config/v1/export/{id}` | Get export job status
[**get-sp-config-export-v1**](#get-sp-config-export-v1) | **GET** `/sp-config/v1/export/{id}/download` | Download export job result.
[**get-sp-config-import-status-v1**](#get-sp-config-import-status-v1) | **GET** `/sp-config/v1/import/{id}` | Get import job status
[**get-sp-config-import-v1**](#get-sp-config-import-v1) | **GET** `/sp-config/v1/import/{id}/download` | Download import job result
[**import-sp-config-v1**](#import-sp-config-v1) | **POST** `/sp-config/v1/import` | Initiates configuration objects import job
[**list-sp-config-objects-v1**](#list-sp-config-objects-v1) | **GET** `/sp-config/v1/config-objects` | List config objects


## export-sp-config-v1
Initiates configuration objects export job
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/v1/export-sp-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | exportpayload | [**Exportpayload**](../models/exportpayload) | True  | Export options control what will be included in the export.

### Return type
[**Spconfigexportjob**](../models/spconfigexportjob)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Export job accepted and queued for processing. | Spconfigexportjob |  -  |
400 | Client Error - Returned if the request body is invalid.  | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.exportpayload import Exportpayload
from sailpoint.sp_config.models.spconfigexportjob import Spconfigexportjob
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    exportpayload = '''{"description":"Export all available objects","excludeTypes":[],"includeTypes":["ACCESS_PROFILE","ACCESS_REQUEST_CONFIG","ATTR_SYNC_SOURCE_CONFIG","AUTH_ORG","CAMPAIGN_FILTER","CONNECTOR_RULE","FORM_DEFINITION","GOVERNANCE_GROUP","IDENTITY_OBJECT_CONFIG","IDENTITY_PROFILE","LIFECYCLE_STATE","NOTIFICATION_TEMPLATE","PASSWORD_POLICY","PASSWORD_SYNC_GROUP","PUBLIC_IDENTITIES_CONFIG","ROLE","RULE","SEGMENT","SERVICE_DESK_INTEGRATION","SOD_POLICY","SOURCE","TAG","TRANSFORM","TRIGGER_SUBSCRIPTION","WORKFLOW"],"objectOptions":{}}''' # Exportpayload | Export options control what will be included in the export.

    try:
        # Initiates configuration objects export job
        new_exportpayload = Exportpayload.from_json(exportpayload)
        results = SPConfigApi(api_client).export_sp_config_v1(exportpayload=new_exportpayload)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).export_sp_config_v1(new_exportpayload)
        print("The response of SPConfigApi->export_sp_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->export_sp_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-export-status-v1
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the export job whose status will be returned.

### Return type
[**Spconfigexportjobstatus**](../models/spconfigexportjobstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Export job status successfully returned. | Spconfigexportjobstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.spconfigexportjobstatus import Spconfigexportjobstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the export job whose status will be returned. # str | The ID of the export job whose status will be returned.

    try:
        # Get export job status
        
        results = SPConfigApi(api_client).get_sp_config_export_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_export_status_v1(id)
        print("The response of SPConfigApi->get_sp_config_export_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_export_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-export-v1
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the export job whose results will be downloaded.

### Return type
[**Spconfigexportresults**](../models/spconfigexportresults)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Exported JSON objects. | Spconfigexportresults |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.spconfigexportresults import Spconfigexportresults
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the export job whose results will be downloaded. # str | The ID of the export job whose results will be downloaded.

    try:
        # Download export job result.
        
        results = SPConfigApi(api_client).get_sp_config_export_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_export_v1(id)
        print("The response of SPConfigApi->get_sp_config_export_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_export_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-import-status-v1
Get import job status
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-status-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the import job whose status will be returned.

### Return type
[**Spconfigimportjobstatus**](../models/spconfigimportjobstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Import job status successfully returned. | Spconfigimportjobstatus |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.spconfigimportjobstatus import Spconfigimportjobstatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the import job whose status will be returned. # str | The ID of the import job whose status will be returned.

    try:
        # Get import job status
        
        results = SPConfigApi(api_client).get_sp_config_import_status_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_import_status_v1(id)
        print("The response of SPConfigApi->get_sp_config_import_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_import_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sp-config-import-v1
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the import job whose results will be downloaded.

### Return type
[**Spconfigimportresults**](../models/spconfigimportresults)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Import results JSON object, containing detailed results of the import operation. | Spconfigimportresults |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.spconfigimportresults import Spconfigimportresults
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the import job whose results will be downloaded. # str | The ID of the import job whose results will be downloaded.

    try:
        # Download import job result
        
        results = SPConfigApi(api_client).get_sp_config_import_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).get_sp_config_import_v1(id)
        print("The response of SPConfigApi->get_sp_config_import_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->get_sp_config_import_v1: %s\n" % e)
```



[[Back to top]](#) 

## import-sp-config-v1
Initiates configuration objects import job
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
   | data | **bytearray** | True  | JSON file containing the objects to be imported.
  Query | preview | **bool** |   (optional) (default to False) | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported. 
   | options | [**Importoptions**](../models/importoptions) |   (optional) | 

### Return type
[**Spconfigjob**](../models/spconfigjob)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Import job accepted and queued for processing. | Spconfigjob |  -  |
400 | Client Error - Returned if the request body is invalid.  | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.importoptions import Importoptions
from sailpoint.sp_config.models.spconfigjob import Spconfigjob
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data = None # bytearray | JSON file containing the objects to be imported. # bytearray | JSON file containing the objects to be imported.
    preview = False # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to False) # bool | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \"true\", no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional) (default to False)
    options = '''sailpoint.sp_config.Importoptions()''' # Importoptions |  (optional)

    try:
        # Initiates configuration objects import job
        
        results = SPConfigApi(api_client).import_sp_config_v1(data=data)
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).import_sp_config_v1(data, preview, options)
        print("The response of SPConfigApi->import_sp_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->import_sp_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-sp-config-objects-v1
List config objects
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sp-config-objects-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Spconfigobject]**](../models/spconfigobject)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Object configurations returned successfully. | List[Spconfigobject] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ExportSpConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ExportSpConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sp_config.api.sp_config_api import SPConfigApi
from sailpoint.sp_config.api_client import ApiClient
from sailpoint.sp_config.models.spconfigobject import Spconfigobject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List config objects
        
        results = SPConfigApi(api_client).list_sp_config_objects_v1()
        # Below is a request that includes all optional parameters
        # results = SPConfigApi(api_client).list_sp_config_objects_v1()
        print("The response of SPConfigApi->list_sp_config_objects_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SPConfigApi->list_sp_config_objects_v1: %s\n" % e)
```



[[Back to top]](#) 



