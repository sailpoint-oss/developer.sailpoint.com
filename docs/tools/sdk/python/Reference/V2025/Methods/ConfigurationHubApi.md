---
id: v2025-configuration-hub
title: Configuration_Hub
pagination_label: Configuration_Hub
sidebar_label: Configuration_Hub
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configuration_Hub', 'V2025Configuration_Hub'] 
slug: /tools/sdk/python/v2025/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'Configuration_Hub', 'V2025Configuration_Hub']
---

# sailpoint.v2025.ConfigurationHubApi
  Use this API to implement and customize configuration settings management. With this functionality, you can access the Configuration Hub actions and build your own automated pipeline for Identity Security Cloud configuration change delivery and deployment.

Common usages for Configuration Hub includes:

- Upload configuration file - Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.
- Manage object mapping - Create rules to map and substitute attributes when migrating configurations.
- Manage backups for configuration settings
- Manage configuration drafts
- Upload configurations and manage object mappings between tenants.

Refer to [Using the SailPoint Configuration Hub](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html) for more information about Configuration Hub.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-deploy**](#create-deploy) | **POST** `/configuration-hub/deploys` | Create a Deploy
[**create-object-mapping**](#create-object-mapping) | **POST** `/configuration-hub/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings**](#create-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-scheduled-action**](#create-scheduled-action) | **POST** `/configuration-hub/scheduled-actions` | Create Scheduled Action
[**create-uploaded-configuration**](#create-uploaded-configuration) | **POST** `/configuration-hub/backups/uploads` | Upload a Configuration
[**delete-backup**](#delete-backup) | **DELETE** `/configuration-hub/backups/{id}` | Delete a Backup
[**delete-draft**](#delete-draft) | **DELETE** `/configuration-hub/drafts/{id}` | Delete a draft
[**delete-object-mapping**](#delete-object-mapping) | **DELETE** `/configuration-hub/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-scheduled-action**](#delete-scheduled-action) | **DELETE** `/configuration-hub/scheduled-actions/{id}` | Delete Scheduled Action
[**delete-uploaded-configuration**](#delete-uploaded-configuration) | **DELETE** `/configuration-hub/backups/uploads/{id}` | Delete an Uploaded Configuration
[**get-deploy**](#get-deploy) | **GET** `/configuration-hub/deploys/{id}` | Get a Deploy
[**get-object-mappings**](#get-object-mappings) | **GET** `/configuration-hub/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration**](#get-uploaded-configuration) | **GET** `/configuration-hub/backups/uploads/{id}` | Get an Uploaded Configuration
[**list-backups**](#list-backups) | **GET** `/configuration-hub/backups` | List Backups
[**list-deploys**](#list-deploys) | **GET** `/configuration-hub/deploys` | List Deploys
[**list-drafts**](#list-drafts) | **GET** `/configuration-hub/drafts` | List Drafts
[**list-scheduled-actions**](#list-scheduled-actions) | **GET** `/configuration-hub/scheduled-actions` | List Scheduled Actions
[**list-uploaded-configurations**](#list-uploaded-configurations) | **GET** `/configuration-hub/backups/uploads` | List Uploaded Configurations
[**update-object-mappings**](#update-object-mappings) | **POST** `/configuration-hub/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**update-scheduled-action**](#update-scheduled-action) | **PATCH** `/configuration-hub/scheduled-actions/{id}` | Update Scheduled Action


## create-deploy
Create a Deploy
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-deploy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | deploy_request | [**DeployRequest**](../models/deploy-request) | True  | The deploy request body.

### Return type
[**DeployResponse**](../models/deploy-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Deploy job accepted and queued for processing. | DeployResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.deploy_request import DeployRequest
from sailpoint.v2025.models.deploy_response import DeployResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    deploy_request = '''{
          "draftId" : "3d0fe04b-57df-4a46-a83b-8f04b0f9d10b"
        }''' # DeployRequest | The deploy request body.

    try:
        # Create a Deploy
        new_deploy_request = DeployRequest.from_json(deploy_request)
        results = ConfigurationHubApi(api_client).create_deploy(deploy_request=new_deploy_request)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_deploy(new_deploy_request)
        print("The response of ConfigurationHubApi->create_deploy:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_deploy: %s\n" % e)
```



[[Back to top]](#) 

## create-object-mapping
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-object-mapping)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.object_mapping_request import ObjectMappingRequest
from sailpoint.v2025.models.object_mapping_response import ObjectMappingResponse
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-object-mappings)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.object_mapping_bulk_create_request import ObjectMappingBulkCreateRequest
from sailpoint.v2025.models.object_mapping_bulk_create_response import ObjectMappingBulkCreateResponse
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

## create-scheduled-action
Create Scheduled Action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-scheduled-action)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | scheduled_action_payload | [**ScheduledActionPayload**](../models/scheduled-action-payload) | True  | The scheduled action creation request body.

### Return type
[**ScheduledActionResponse**](../models/scheduled-action-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created scheduled action. | ScheduledActionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.scheduled_action_payload import ScheduledActionPayload
from sailpoint.v2025.models.scheduled_action_response import ScheduledActionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    scheduled_action_payload = '''{
          "cronString" : "0 0 12 * * ?",
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
        }''' # ScheduledActionPayload | The scheduled action creation request body.

    try:
        # Create Scheduled Action
        new_scheduled_action_payload = ScheduledActionPayload.from_json(scheduled_action_payload)
        results = ConfigurationHubApi(api_client).create_scheduled_action(scheduled_action_payload=new_scheduled_action_payload)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_scheduled_action(new_scheduled_action_payload)
        print("The response of ConfigurationHubApi->create_scheduled_action:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_scheduled_action: %s\n" % e)
```



[[Back to top]](#) 

## create-uploaded-configuration
Upload a Configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/idn/docs/saas-configuration/#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-uploaded-configuration)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.backup_response import BackupResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data = None # bytearray | JSON file containing the objects to be imported. # bytearray | JSON file containing the objects to be imported.
    name = 'name_example' # str | Name that will be assigned to the uploaded configuration file. # str | Name that will be assigned to the uploaded configuration file.

    try:
        # Upload a Configuration
        
        results = ConfigurationHubApi(api_client).create_uploaded_configuration(data=data, name=name)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_uploaded_configuration(data, name)
        print("The response of ConfigurationHubApi->create_uploaded_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_uploaded_configuration: %s\n" % e)
```



[[Back to top]](#) 

## delete-backup
Delete a Backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-backup)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the backup to delete.

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '07659d7d-2cce-47c0-9e49-185787ee565a' # str | The id of the backup to delete. # str | The id of the backup to delete.

    try:
        # Delete a Backup
        
        ConfigurationHubApi(api_client).delete_backup(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_backup(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_backup: %s\n" % e)
```



[[Back to top]](#) 

## delete-draft
Delete a draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-draft)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the draft to delete.

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '07659d7d-2cce-47c0-9e49-185787ee565a' # str | The id of the draft to delete. # str | The id of the draft to delete.

    try:
        # Delete a draft
        
        ConfigurationHubApi(api_client).delete_draft(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_draft(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_draft: %s\n" % e)
```



[[Back to top]](#) 

## delete-object-mapping
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-object-mapping)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
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

## delete-scheduled-action
Delete Scheduled Action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-scheduled-action)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | scheduled_action_id | **str** | True  | The ID of the scheduled action.

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    scheduled_action_id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | The ID of the scheduled action. # str | The ID of the scheduled action.

    try:
        # Delete Scheduled Action
        
        ConfigurationHubApi(api_client).delete_scheduled_action(scheduled_action_id=scheduled_action_id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_scheduled_action(scheduled_action_id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_scheduled_action: %s\n" % e)
```



[[Back to top]](#) 

## delete-uploaded-configuration
Delete an Uploaded Configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-uploaded-configuration)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the uploaded configuration. # str | The id of the uploaded configuration.

    try:
        # Delete an Uploaded Configuration
        
        ConfigurationHubApi(api_client).delete_uploaded_configuration(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_uploaded_configuration(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_uploaded_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-deploy
Get a Deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-deploy)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the deploy.

### Return type
[**DeployResponse**](../models/deploy-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Gets the details of a deploy. | DeployResponse |  -  |
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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.deploy_response import DeployResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the deploy. # str | The id of the deploy.

    try:
        # Get a Deploy
        
        results = ConfigurationHubApi(api_client).get_deploy(id=id)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_deploy(id)
        print("The response of ConfigurationHubApi->get_deploy:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_deploy: %s\n" % e)
```



[[Back to top]](#) 

## get-object-mappings
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-object-mappings)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.object_mapping_response import ObjectMappingResponse
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
Get an Uploaded Configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-uploaded-configuration)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.backup_response import BackupResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the uploaded configuration. # str | The id of the uploaded configuration.

    try:
        # Get an Uploaded Configuration
        
        results = ConfigurationHubApi(api_client).get_uploaded_configuration(id=id)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_uploaded_configuration(id)
        print("The response of ConfigurationHubApi->get_uploaded_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_uploaded_configuration: %s\n" % e)
```



[[Back to top]](#) 

## list-backups
List Backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-backups)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**List[BackupResponse1]**](../models/backup-response1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing backups. | List[BackupResponse1] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.backup_response1 import BackupResponse1
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    try:
        # List Backups
        
        results = ConfigurationHubApi(api_client).list_backups()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_backups(filters)
        print("The response of ConfigurationHubApi->list_backups:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_backups: %s\n" % e)
```



[[Back to top]](#) 

## list-deploys
List Deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-deploys)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ListDeploys200Response**](../models/list-deploys200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing deploys. | ListDeploys200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.list_deploys200_response import ListDeploys200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List Deploys
        
        results = ConfigurationHubApi(api_client).list_deploys()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_deploys()
        print("The response of ConfigurationHubApi->list_deploys:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_deploys: %s\n" % e)
```



[[Back to top]](#) 

## list-drafts
List Drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-drafts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq*

### Return type
[**List[DraftResponse]**](../models/draft-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing drafts. | List[DraftResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.draft_response import DraftResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)

    try:
        # List Drafts
        
        results = ConfigurationHubApi(api_client).list_drafts()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_drafts(filters)
        print("The response of ConfigurationHubApi->list_drafts:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_drafts: %s\n" % e)
```



[[Back to top]](#) 

## list-scheduled-actions
List Scheduled Actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-scheduled-actions)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[ScheduledActionResponse]**](../models/scheduled-action-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing scheduled actions. | List[ScheduledActionResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.scheduled_action_response import ScheduledActionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List Scheduled Actions
        
        results = ConfigurationHubApi(api_client).list_scheduled_actions()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_scheduled_actions()
        print("The response of ConfigurationHubApi->list_scheduled_actions:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_scheduled_actions: %s\n" % e)
```



[[Back to top]](#) 

## list-uploaded-configurations
List Uploaded Configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-uploaded-configurations)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.backup_response import BackupResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    try:
        # List Uploaded Configurations
        
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-object-mappings)

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
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.object_mapping_bulk_patch_request import ObjectMappingBulkPatchRequest
from sailpoint.v2025.models.object_mapping_bulk_patch_response import ObjectMappingBulkPatchResponse
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

## update-scheduled-action
Update Scheduled Action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-scheduled-action)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | scheduled_action_id | **str** | True  | The ID of the scheduled action.
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | The JSON Patch document containing the changes to apply to the scheduled action.

### Return type
[**ScheduledActionResponse**](../models/scheduled-action-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated scheduled action. | ScheduledActionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.json_patch import JsonPatch
from sailpoint.v2025.models.scheduled_action_response import ScheduledActionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    scheduled_action_id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | The ID of the scheduled action. # str | The ID of the scheduled action.
    json_patch = '''{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }''' # JsonPatch | The JSON Patch document containing the changes to apply to the scheduled action.

    try:
        # Update Scheduled Action
        new_json_patch = JsonPatch.from_json(json_patch)
        results = ConfigurationHubApi(api_client).update_scheduled_action(scheduled_action_id=scheduled_action_id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).update_scheduled_action(scheduled_action_id, new_json_patch)
        print("The response of ConfigurationHubApi->update_scheduled_action:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->update_scheduled_action: %s\n" % e)
```



[[Back to top]](#) 



