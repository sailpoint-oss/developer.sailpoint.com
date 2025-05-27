---
id: configuration-hub
title: Configuration_Hub
pagination_label: Configuration_Hub
sidebar_label: Configuration_Hub
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configuration_Hub', 'Configuration_Hub'] 
slug: /tools/sdk/python/v3/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'Configuration_Hub', 'Configuration_Hub']
---

# sailpoint.v3.ConfigurationHubApi
  Upload configurations and manage object mappings between tenants.

Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.

The function of object mapping allows objects with varying names and IDs to be compared. While objects are compared, a user can replace a value in the source tenant with a new value. Object mapping also helps in locating referenced objects to the source object during the drafting process.

Refer to [Uploading a Configuration File](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html#uploading-a-configuration-file) for more information about uploading Configuration Files

Refer to [Mapping Objects](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html#mapping-objects) for more information about object mappings.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-object-mapping**](#create-object-mapping) | **POST** `/configuration-hub/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings**](#create-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-uploaded-configuration**](#create-uploaded-configuration) | **POST** `/configuration-hub/backups/uploads` | Upload a configuration
[**delete-object-mapping**](#delete-object-mapping) | **DELETE** `/configuration-hub/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-uploaded-configuration**](#delete-uploaded-configuration) | **DELETE** `/configuration-hub/backups/uploads/{id}` | Delete an uploaded configuration
[**get-object-mappings**](#get-object-mappings) | **GET** `/configuration-hub/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration**](#get-uploaded-configuration) | **GET** `/configuration-hub/backups/uploads/{id}` | Get an uploaded configuration
[**list-uploaded-configurations**](#list-uploaded-configurations) | **GET** `/configuration-hub/backups/uploads` | List uploaded configurations
[**update-object-mappings**](#update-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings


## create-object-mapping
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-object-mapping)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
 Body  | object_mapping_request | [**ObjectMappingRequest**](../models/object-mapping-request) | True  | The object mapping request body.

### Return type
[**ObjectMappingResponse**](../models/object-mapping-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created object mapping between current org and source org. | ObjectMappingResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.object_mapping_request import ObjectMappingRequest
from sailpoint.v3.models.object_mapping_response import ObjectMappingResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    object_mapping_request = '''{
          "targetValue" : "My New Governance Group Name",
          "jsonPath" : "$.name",
          "sourceValue" : "My Governance Group Name",
          "enabled" : false,
          "objectType" : "IDENTITY"
        }''' # ObjectMappingRequest | The object mapping request body.

    try:
        # Creates an object mapping
        new_object_mapping_request = ObjectMappingRequest.from_json(object_mapping_request)
        results = ConfigurationHubApi(api_client).create_object_mapping(source_org=source_org, object_mapping_request=new_object_mapping_request)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_object_mapping(source_org, new_object_mapping_request)
        print("The response of ConfigurationHubApi->create_object_mapping:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_object_mapping: %s\n" % e)
```



[[Back to top]](#) 

## create-object-mappings
Bulk creates object mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-object-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
 Body  | object_mapping_bulk_create_request | [**ObjectMappingBulkCreateRequest**](../models/object-mapping-bulk-create-request) | True  | The bulk create object mapping request body.

### Return type
[**ObjectMappingBulkCreateResponse**](../models/object-mapping-bulk-create-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created object mapping between current org and source org. | ObjectMappingBulkCreateResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.object_mapping_bulk_create_request import ObjectMappingBulkCreateRequest
from sailpoint.v3.models.object_mapping_bulk_create_response import ObjectMappingBulkCreateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    object_mapping_bulk_create_request = '''{
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
        }''' # ObjectMappingBulkCreateRequest | The bulk create object mapping request body.

    try:
        # Bulk creates object mappings
        new_object_mapping_bulk_create_request = ObjectMappingBulkCreateRequest.from_json(object_mapping_bulk_create_request)
        results = ConfigurationHubApi(api_client).create_object_mappings(source_org=source_org, object_mapping_bulk_create_request=new_object_mapping_bulk_create_request)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_object_mappings(source_org, new_object_mapping_bulk_create_request)
        print("The response of ConfigurationHubApi->create_object_mappings:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_object_mappings: %s\n" % e)
```



[[Back to top]](#) 

## create-uploaded-configuration
Upload a configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-uploaded-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | data | **bytearray** | True  | JSON file containing the objects to be imported.
   | name | **str** | True  | Name that will be assigned to the uploaded configuration file.

### Return type
[**BackupResponse**](../models/backup-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Upload job accepted and queued for processing. | BackupResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.backup_response import BackupResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data = None # bytearray | JSON file containing the objects to be imported. # bytearray | JSON file containing the objects to be imported.
    name = 'name_example' # str | Name that will be assigned to the uploaded configuration file. # str | Name that will be assigned to the uploaded configuration file.

    try:
        # Upload a configuration
        
        results = ConfigurationHubApi(api_client).create_uploaded_configuration(data=data, name=name)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_uploaded_configuration(data, name)
        print("The response of ConfigurationHubApi->create_uploaded_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_uploaded_configuration: %s\n" % e)
```



[[Back to top]](#) 

## delete-object-mapping
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-object-mapping)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
Path   | object_mapping_id | **str** | True  | The id of the object mapping to be deleted.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    object_mapping_id = '3d6e0144-963f-4bd6-8d8d-d77b4e507ce4' # str | The id of the object mapping to be deleted. # str | The id of the object mapping to be deleted.

    try:
        # Deletes an object mapping
        
        ConfigurationHubApi(api_client).delete_object_mapping(source_org=source_org, object_mapping_id=object_mapping_id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_object_mapping(source_org, object_mapping_id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_object_mapping: %s\n" % e)
```



[[Back to top]](#) 

## delete-uploaded-configuration
Delete an uploaded configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-uploaded-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the uploaded configuration.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the uploaded configuration. # str | The id of the uploaded configuration.

    try:
        # Delete an uploaded configuration
        
        ConfigurationHubApi(api_client).delete_uploaded_configuration(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_uploaded_configuration(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_uploaded_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-object-mappings
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-object-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.

### Return type
[**List[ObjectMappingResponse]**](../models/object-mapping-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing object mappings between current org and source org. | List[ObjectMappingResponse] |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.object_mapping_response import ObjectMappingResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.

    try:
        # Gets list of object mappings
        
        results = ConfigurationHubApi(api_client).get_object_mappings(source_org=source_org)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_object_mappings(source_org)
        print("The response of ConfigurationHubApi->get_object_mappings:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_object_mappings: %s\n" % e)
```



[[Back to top]](#) 

## get-uploaded-configuration
Get an uploaded configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-uploaded-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the uploaded configuration.

### Return type
[**BackupResponse**](../models/backup-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Gets an uploaded configuration details. | BackupResponse |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.backup_response import BackupResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the uploaded configuration. # str | The id of the uploaded configuration.

    try:
        # Get an uploaded configuration
        
        results = ConfigurationHubApi(api_client).get_uploaded_configuration(id=id)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_uploaded_configuration(id)
        print("The response of ConfigurationHubApi->get_uploaded_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_uploaded_configuration: %s\n" % e)
```



[[Back to top]](#) 

## list-uploaded-configurations
List uploaded configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-uploaded-configurations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**List[BackupResponse]**](../models/backup-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing uploaded configurations. | List[BackupResponse] |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.backup_response import BackupResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    try:
        # List uploaded configurations
        
        results = ConfigurationHubApi(api_client).list_uploaded_configurations()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_uploaded_configurations(filters)
        print("The response of ConfigurationHubApi->list_uploaded_configurations:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_uploaded_configurations: %s\n" % e)
```



[[Back to top]](#) 

## update-object-mappings
Bulk updates object mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-object-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
 Body  | object_mapping_bulk_patch_request | [**ObjectMappingBulkPatchRequest**](../models/object-mapping-bulk-patch-request) | True  | The object mapping request body.

### Return type
[**ObjectMappingBulkPatchResponse**](../models/object-mapping-bulk-patch-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated object mappings. | ObjectMappingBulkPatchResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
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
from sailpoint.v3.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.object_mapping_bulk_patch_request import ObjectMappingBulkPatchRequest
from sailpoint.v3.models.object_mapping_bulk_patch_response import ObjectMappingBulkPatchResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    object_mapping_bulk_patch_request = '''{
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
        }''' # ObjectMappingBulkPatchRequest | The object mapping request body.

    try:
        # Bulk updates object mappings
        new_object_mapping_bulk_patch_request = ObjectMappingBulkPatchRequest.from_json(object_mapping_bulk_patch_request)
        results = ConfigurationHubApi(api_client).update_object_mappings(source_org=source_org, object_mapping_bulk_patch_request=new_object_mapping_bulk_patch_request)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).update_object_mappings(source_org, new_object_mapping_bulk_patch_request)
        print("The response of ConfigurationHubApi->update_object_mappings:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->update_object_mappings: %s\n" % e)
```



[[Back to top]](#) 



