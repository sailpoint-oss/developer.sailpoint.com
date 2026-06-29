---
id: configuration-hub
title: Configuration_Hub
pagination_label: Configuration_Hub
sidebar_label: Configuration_Hub
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Configuration_Hub', 'Configuration_Hub'] 
slug: /tools/sdk/python/configuration-hub/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'Configuration_Hub', 'Configuration_Hub']
---

# sailpoint.configuration_hub.ConfigurationHubApi
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
[**create-deploy-v1**](#create-deploy-v1) | **POST** `/configuration-hub/v1/deploys` | Create a deploy
[**create-object-mapping-v1**](#create-object-mapping-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings-v1**](#create-object-mappings-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-scheduled-action-v1**](#create-scheduled-action-v1) | **POST** `/configuration-hub/v1/scheduled-actions` | Create scheduled action
[**create-uploaded-configuration-v1**](#create-uploaded-configuration-v1) | **POST** `/configuration-hub/v1/backups/uploads` | Upload a configuration
[**delete-backup-v1**](#delete-backup-v1) | **DELETE** `/configuration-hub/v1/backups/{id}` | Delete a backup
[**delete-draft-v1**](#delete-draft-v1) | **DELETE** `/configuration-hub/v1/drafts/{id}` | Delete a draft
[**delete-object-mapping-v1**](#delete-object-mapping-v1) | **DELETE** `/configuration-hub/v1/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-scheduled-action-v1**](#delete-scheduled-action-v1) | **DELETE** `/configuration-hub/v1/scheduled-actions/{id}` | Delete scheduled action
[**delete-uploaded-configuration-v1**](#delete-uploaded-configuration-v1) | **DELETE** `/configuration-hub/v1/backups/uploads/{id}` | Delete an uploaded configuration
[**get-deploy-v1**](#get-deploy-v1) | **GET** `/configuration-hub/v1/deploys/{id}` | Get a deploy
[**get-object-mappings-v1**](#get-object-mappings-v1) | **GET** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration-v1**](#get-uploaded-configuration-v1) | **GET** `/configuration-hub/v1/backups/uploads/{id}` | Get an uploaded configuration
[**list-backups-v1**](#list-backups-v1) | **GET** `/configuration-hub/v1/backups` | List backups
[**list-deploys-v1**](#list-deploys-v1) | **GET** `/configuration-hub/v1/deploys` | List deploys
[**list-drafts-v1**](#list-drafts-v1) | **GET** `/configuration-hub/v1/drafts` | List drafts
[**list-scheduled-actions-v1**](#list-scheduled-actions-v1) | **GET** `/configuration-hub/v1/scheduled-actions` | List scheduled actions
[**list-uploaded-configurations-v1**](#list-uploaded-configurations-v1) | **GET** `/configuration-hub/v1/backups/uploads` | List uploaded configurations
[**update-object-mappings-v1**](#update-object-mappings-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**update-scheduled-action-v1**](#update-scheduled-action-v1) | **PATCH** `/configuration-hub/v1/scheduled-actions/{id}` | Update scheduled action


## create-deploy-v1
Create a deploy
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-deploy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | deployrequest | [**Deployrequest**](../models/deployrequest) | True  | The deploy request body.

### Return type
[**Deployresponse**](../models/deployresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Deploy job accepted and queued for processing. | Deployresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.deployrequest import Deployrequest
from sailpoint.configuration_hub.models.deployresponse import Deployresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    deployrequest = '''{"draftId":"c9a38d8c-5edf-4182-9d39-f6581d3ebd05"}''' # Deployrequest | The deploy request body.

    try:
        # Create a deploy
        new_deployrequest = Deployrequest.from_json(deployrequest)
        results = ConfigurationHubApi(api_client).create_deploy_v1(deployrequest=new_deployrequest)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_deploy_v1(new_deployrequest)
        print("The response of ConfigurationHubApi->create_deploy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_deploy_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-object-mapping-v1
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-object-mapping-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
 Body  | objectmappingrequest | [**Objectmappingrequest**](../models/objectmappingrequest) | True  | The object mapping request body.

### Return type
[**Objectmappingresponse**](../models/objectmappingresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created object mapping between current org and source org. | Objectmappingresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.objectmappingrequest import Objectmappingrequest
from sailpoint.configuration_hub.models.objectmappingresponse import Objectmappingresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    objectmappingrequest = '''{"objectType":"GOVERNANCE_GROUP","jsonPath":"$.description","sourceValue":"Sample Governance Group","targetValue":"Sample Governance Group - Updated","enabled":true}''' # Objectmappingrequest | The object mapping request body.

    try:
        # Creates an object mapping
        new_objectmappingrequest = Objectmappingrequest.from_json(objectmappingrequest)
        results = ConfigurationHubApi(api_client).create_object_mapping_v1(source_org=source_org, objectmappingrequest=new_objectmappingrequest)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_object_mapping_v1(source_org, new_objectmappingrequest)
        print("The response of ConfigurationHubApi->create_object_mapping_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_object_mapping_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-object-mappings-v1
Bulk creates object mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-object-mappings-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
 Body  | objectmappingbulkcreaterequest | [**Objectmappingbulkcreaterequest**](../models/objectmappingbulkcreaterequest) | True  | The bulk create object mapping request body.

### Return type
[**Objectmappingbulkcreateresponse**](../models/objectmappingbulkcreateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created object mapping between current org and source org. | Objectmappingbulkcreateresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.objectmappingbulkcreaterequest import Objectmappingbulkcreaterequest
from sailpoint.configuration_hub.models.objectmappingbulkcreateresponse import Objectmappingbulkcreateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    objectmappingbulkcreaterequest = '''{"newObjectsMappings":[{"objectType":"SOURCE","jsonPath":"$.name","sourceValue":"Original SOURCE Name","targetValue":"New SOURCE Name","enabled":true},{"objectType":"IDENTITY","jsonPath":"$.name","sourceValue":"Original IDENTITY Name","targetValue":"New IDENTITY Name ","enabled":true}]}''' # Objectmappingbulkcreaterequest | The bulk create object mapping request body.

    try:
        # Bulk creates object mappings
        new_objectmappingbulkcreaterequest = Objectmappingbulkcreaterequest.from_json(objectmappingbulkcreaterequest)
        results = ConfigurationHubApi(api_client).create_object_mappings_v1(source_org=source_org, objectmappingbulkcreaterequest=new_objectmappingbulkcreaterequest)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_object_mappings_v1(source_org, new_objectmappingbulkcreaterequest)
        print("The response of ConfigurationHubApi->create_object_mappings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_object_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-scheduled-action-v1
Create scheduled action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-scheduled-action-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | scheduledactionpayload | [**Scheduledactionpayload**](../models/scheduledactionpayload) | True  | The scheduled action creation request body.

### Return type
[**Scheduledactionresponse**](../models/scheduledactionresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created scheduled action. | Scheduledactionresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.scheduledactionpayload import Scheduledactionpayload
from sailpoint.configuration_hub.models.scheduledactionresponse import Scheduledactionresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    scheduledactionpayload = '''{"jobType":"BACKUP","startTime":"2024-08-16T14:16:58.389Z","cronString":"0 0 * * * *","timeZoneId":"America/Chicago","content":{"name":"Daily Backup","backupOptions":{"includeTypes":["SOURCE","IDENTITY"],"objectOptions":{"SOURCE":{"includedNames":["Source1","Source2"]}}}}}''' # Scheduledactionpayload | The scheduled action creation request body.

    try:
        # Create scheduled action
        new_scheduledactionpayload = Scheduledactionpayload.from_json(scheduledactionpayload)
        results = ConfigurationHubApi(api_client).create_scheduled_action_v1(scheduledactionpayload=new_scheduledactionpayload)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_scheduled_action_v1(new_scheduledactionpayload)
        print("The response of ConfigurationHubApi->create_scheduled_action_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_scheduled_action_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-uploaded-configuration-v1
Upload a configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-uploaded-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | data | **bytearray** | True  | JSON file containing the objects to be imported.
   | name | **str** | True  | Name that will be assigned to the uploaded configuration file.

### Return type
[**Backupresponse**](../models/backupresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Upload job accepted and queued for processing. | Backupresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.backupresponse import Backupresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data = None # bytearray | JSON file containing the objects to be imported. # bytearray | JSON file containing the objects to be imported.
    name = 'name_example' # str | Name that will be assigned to the uploaded configuration file. # str | Name that will be assigned to the uploaded configuration file.

    try:
        # Upload a configuration
        
        results = ConfigurationHubApi(api_client).create_uploaded_configuration_v1(data=data, name=name)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).create_uploaded_configuration_v1(data, name)
        print("The response of ConfigurationHubApi->create_uploaded_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->create_uploaded_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-backup-v1
Delete a backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-backup-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '07659d7d-2cce-47c0-9e49-185787ee565a' # str | The id of the backup to delete. # str | The id of the backup to delete.

    try:
        # Delete a backup
        
        ConfigurationHubApi(api_client).delete_backup_v1(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_backup_v1(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_backup_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-draft-v1
Delete a draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-draft-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '07659d7d-2cce-47c0-9e49-185787ee565a' # str | The id of the draft to delete. # str | The id of the draft to delete.

    try:
        # Delete a draft
        
        ConfigurationHubApi(api_client).delete_draft_v1(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_draft_v1(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_draft_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-object-mapping-v1
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-object-mapping-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    object_mapping_id = '3d6e0144-963f-4bd6-8d8d-d77b4e507ce4' # str | The id of the object mapping to be deleted. # str | The id of the object mapping to be deleted.

    try:
        # Deletes an object mapping
        
        ConfigurationHubApi(api_client).delete_object_mapping_v1(source_org=source_org, object_mapping_id=object_mapping_id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_object_mapping_v1(source_org, object_mapping_id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_object_mapping_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-scheduled-action-v1
Delete scheduled action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-scheduled-action-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the scheduled action.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | The ID of the scheduled action. # str | The ID of the scheduled action.

    try:
        # Delete scheduled action
        
        ConfigurationHubApi(api_client).delete_scheduled_action_v1(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_scheduled_action_v1(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_scheduled_action_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-uploaded-configuration-v1
Delete an uploaded configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-uploaded-configuration-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the uploaded configuration. # str | The id of the uploaded configuration.

    try:
        # Delete an uploaded configuration
        
        ConfigurationHubApi(api_client).delete_uploaded_configuration_v1(id=id)
        # Below is a request that includes all optional parameters
        # ConfigurationHubApi(api_client).delete_uploaded_configuration_v1(id)
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->delete_uploaded_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-deploy-v1
Get a deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-deploy-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the deploy.

### Return type
[**Deployresponse**](../models/deployresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Gets the details of a deploy. | Deployresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.deployresponse import Deployresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the deploy. # str | The id of the deploy.

    try:
        # Get a deploy
        
        results = ConfigurationHubApi(api_client).get_deploy_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_deploy_v1(id)
        print("The response of ConfigurationHubApi->get_deploy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_deploy_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-object-mappings-v1
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-object-mappings-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.

### Return type
[**List[Objectmappingresponse]**](../models/objectmappingresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing object mappings between current org and source org. | List[Objectmappingresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.objectmappingresponse import Objectmappingresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.

    try:
        # Gets list of object mappings
        
        results = ConfigurationHubApi(api_client).get_object_mappings_v1(source_org=source_org)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_object_mappings_v1(source_org)
        print("The response of ConfigurationHubApi->get_object_mappings_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_object_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-uploaded-configuration-v1
Get an uploaded configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-uploaded-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the uploaded configuration.

### Return type
[**Backupresponse**](../models/backupresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Gets an uploaded configuration details. | Backupresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.backupresponse import Backupresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '3d0fe04b-57df-4a46-a83b-8f04b0f9d10b' # str | The id of the uploaded configuration. # str | The id of the uploaded configuration.

    try:
        # Get an uploaded configuration
        
        results = ConfigurationHubApi(api_client).get_uploaded_configuration_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).get_uploaded_configuration_v1(id)
        print("The response of ConfigurationHubApi->get_uploaded_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->get_uploaded_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-backups-v1
List backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-backups-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**List[Backupresponse]**](../models/backupresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing backups. | List[Backupresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.backupresponse import Backupresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    try:
        # List backups
        
        results = ConfigurationHubApi(api_client).list_backups_v1()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_backups_v1(filters)
        print("The response of ConfigurationHubApi->list_backups_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_backups_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-deploys-v1
List deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-deploys-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ListDeploysV1200Response**](../models/list-deploys-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing deploys. | ListDeploysV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.list_deploys_v1200_response import ListDeploysV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List deploys
        
        results = ConfigurationHubApi(api_client).list_deploys_v1()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_deploys_v1()
        print("The response of ConfigurationHubApi->list_deploys_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_deploys_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-drafts-v1
List drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-drafts-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq*

### Return type
[**List[Draftresponse]**](../models/draftresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing drafts. | List[Draftresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.draftresponse import Draftresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)

    try:
        # List drafts
        
        results = ConfigurationHubApi(api_client).list_drafts_v1()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_drafts_v1(filters)
        print("The response of ConfigurationHubApi->list_drafts_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_drafts_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-scheduled-actions-v1
List scheduled actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-scheduled-actions-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Scheduledactionresponse]**](../models/scheduledactionresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing scheduled actions. | List[Scheduledactionresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.scheduledactionresponse import Scheduledactionresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List scheduled actions
        
        results = ConfigurationHubApi(api_client).list_scheduled_actions_v1()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_scheduled_actions_v1()
        print("The response of ConfigurationHubApi->list_scheduled_actions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_scheduled_actions_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-uploaded-configurations-v1
List uploaded configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-uploaded-configurations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*

### Return type
[**List[Backupresponse]**](../models/backupresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of existing uploaded configurations. | List[Backupresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.backupresponse import Backupresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'status eq \"COMPLETE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)

    try:
        # List uploaded configurations
        
        results = ConfigurationHubApi(api_client).list_uploaded_configurations_v1()
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).list_uploaded_configurations_v1(filters)
        print("The response of ConfigurationHubApi->list_uploaded_configurations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->list_uploaded_configurations_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-object-mappings-v1
Bulk updates object mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-object-mappings-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_org | **str** | True  | The name of the source org.
 Body  | objectmappingbulkpatchrequest | [**Objectmappingbulkpatchrequest**](../models/objectmappingbulkpatchrequest) | True  | The object mapping request body.

### Return type
[**Objectmappingbulkpatchresponse**](../models/objectmappingbulkpatchresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated object mappings. | Objectmappingbulkpatchresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.objectmappingbulkpatchrequest import Objectmappingbulkpatchrequest
from sailpoint.configuration_hub.models.objectmappingbulkpatchresponse import Objectmappingbulkpatchresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_org = 'source-org' # str | The name of the source org. # str | The name of the source org.
    objectmappingbulkpatchrequest = '''{"patches":{"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}}''' # Objectmappingbulkpatchrequest | The object mapping request body.

    try:
        # Bulk updates object mappings
        new_objectmappingbulkpatchrequest = Objectmappingbulkpatchrequest.from_json(objectmappingbulkpatchrequest)
        results = ConfigurationHubApi(api_client).update_object_mappings_v1(source_org=source_org, objectmappingbulkpatchrequest=new_objectmappingbulkpatchrequest)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).update_object_mappings_v1(source_org, new_objectmappingbulkpatchrequest)
        print("The response of ConfigurationHubApi->update_object_mappings_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->update_object_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-scheduled-action-v1
Update scheduled action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-scheduled-action-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the scheduled action.
 Body  | jsonpatch | [**Jsonpatch**](../models/jsonpatch) | True  | The JSON Patch document containing the changes to apply to the scheduled action.

### Return type
[**Scheduledactionresponse**](../models/scheduledactionresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated scheduled action. | Scheduledactionresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetObjectMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetObjectMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.configuration_hub.api.configuration_hub_api import ConfigurationHubApi
from sailpoint.configuration_hub.api_client import ApiClient
from sailpoint.configuration_hub.models.jsonpatch import Jsonpatch
from sailpoint.configuration_hub.models.scheduledactionresponse import Scheduledactionresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '0f11f2a4-7c94-4bf3-a2bd-742580fe3bde' # str | The ID of the scheduled action. # str | The ID of the scheduled action.
    jsonpatch = '''[{"op":"replace","path":"/content/name","value":"Updated Backup Name"},{"op":"replace","path":"/cronString","value":"0 0 9 * * ?"}]''' # Jsonpatch | The JSON Patch document containing the changes to apply to the scheduled action.

    try:
        # Update scheduled action
        new_jsonpatch = Jsonpatch.from_json(jsonpatch)
        results = ConfigurationHubApi(api_client).update_scheduled_action_v1(id=id, jsonpatch=new_jsonpatch)
        # Below is a request that includes all optional parameters
        # results = ConfigurationHubApi(api_client).update_scheduled_action_v1(id, new_jsonpatch)
        print("The response of ConfigurationHubApi->update_scheduled_action_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConfigurationHubApi->update_scheduled_action_v1: %s\n" % e)
```



[[Back to top]](#) 



