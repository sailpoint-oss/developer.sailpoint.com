---
id: v1-configuration-hub
title: ConfigurationHub
pagination_label: ConfigurationHub
sidebar_label: ConfigurationHub
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ConfigurationHub', 'v1ConfigurationHub']
slug: /tools/sdk/typescript/configuration_hub/methods/configuration-hub
tags: ['SDK', 'Software Development Kit', 'ConfigurationHub', 'v1ConfigurationHub']
---

# ConfigurationHubV1Api
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**deployrequestV1** | `DeployrequestV1` | The deploy request body. | 

### Return type

`DeployresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const deployrequestV1: DeployrequestV1 = {"draftId":"c9a38d8c-5edf-4182-9d39-f6581d3ebd05"}; // The deploy request body.
const result = await apiInstance.createDeployV1({ deployrequestV1: deployrequestV1 });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectmappingrequestV1** | `ObjectmappingrequestV1` | The object mapping request body. | 

### Return type

`ObjectmappingresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const sourceOrg: string = source-org; // The name of the source org.
const objectmappingrequestV1: ObjectmappingrequestV1 = {"objectType":"GOVERNANCE_GROUP","jsonPath":"$.description","sourceValue":"Sample Governance Group","targetValue":"Sample Governance Group - Updated","enabled":true}; // The object mapping request body.
const result = await apiInstance.createObjectMappingV1({ sourceOrg: sourceOrg, objectmappingrequestV1: objectmappingrequestV1 });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectmappingbulkcreaterequestV1** | `ObjectmappingbulkcreaterequestV1` | The bulk create object mapping request body. | 

### Return type

`ObjectmappingbulkcreateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const sourceOrg: string = source-org; // The name of the source org.
const objectmappingbulkcreaterequestV1: ObjectmappingbulkcreaterequestV1 = {"newObjectsMappings":[{"objectType":"SOURCE","jsonPath":"$.name","sourceValue":"Original SOURCE Name","targetValue":"New SOURCE Name","enabled":true},{"objectType":"IDENTITY","jsonPath":"$.name","sourceValue":"Original IDENTITY Name","targetValue":"New IDENTITY Name ","enabled":true}]}; // The bulk create object mapping request body.
const result = await apiInstance.createObjectMappingsV1({ sourceOrg: sourceOrg, objectmappingbulkcreaterequestV1: objectmappingbulkcreaterequestV1 });
console.log(result);
```

[[Back to top]](#)

## create-scheduled-action-v1
Create scheduled action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-scheduled-action-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scheduledactionpayloadV1** | `ScheduledactionpayloadV1` | The scheduled action creation request body. | 

### Return type

`ScheduledactionresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const scheduledactionpayloadV1: ScheduledactionpayloadV1 = {"jobType":"BACKUP","startTime":"2024-08-16T14:16:58.389Z","cronString":"0 0 * * * *","timeZoneId":"America/Chicago","content":{"name":"Daily Backup","backupOptions":{"includeTypes":["SOURCE","IDENTITY"],"objectOptions":{"SOURCE":{"includedNames":["Source1","Source2"]}}}}}; // The scheduled action creation request body.
const result = await apiInstance.createScheduledActionV1({ scheduledactionpayloadV1: scheduledactionpayloadV1 });
console.log(result);
```

[[Back to top]](#)

## create-uploaded-configuration-v1
Upload a configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-uploaded-configuration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**data** | `File` | JSON file containing the objects to be imported. |  [default to undefined]
**name** | `string` | Name that will be assigned to the uploaded configuration file. |  [default to undefined]

### Return type

`BackupresponseV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const data: File = BINARY_DATA_HERE; // JSON file containing the objects to be imported.
const name: string = name_example; // Name that will be assigned to the uploaded configuration file.
const result = await apiInstance.createUploadedConfigurationV1({ data: data, name: name });
console.log(result);
```

[[Back to top]](#)

## delete-backup-v1
Delete a backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-backup-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the backup to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 07659d7d-2cce-47c0-9e49-185787ee565a; // The id of the backup to delete.
const result = await apiInstance.deleteBackupV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-draft-v1
Delete a draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-draft-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the draft to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 07659d7d-2cce-47c0-9e49-185787ee565a; // The id of the draft to delete.
const result = await apiInstance.deleteDraftV1({ id: id });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectMappingId** | `string` | The id of the object mapping to be deleted. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const sourceOrg: string = source-org; // The name of the source org.
const objectMappingId: string = 3d6e0144-963f-4bd6-8d8d-d77b4e507ce4; // The id of the object mapping to be deleted.
const result = await apiInstance.deleteObjectMappingV1({ sourceOrg: sourceOrg, objectMappingId: objectMappingId });
console.log(result);
```

[[Back to top]](#)

## delete-scheduled-action-v1
Delete scheduled action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-scheduled-action-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the scheduled action. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde; // The ID of the scheduled action.
const result = await apiInstance.deleteScheduledActionV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-uploaded-configuration-v1
Delete an uploaded configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-uploaded-configuration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the uploaded configuration. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 3d0fe04b-57df-4a46-a83b-8f04b0f9d10b; // The id of the uploaded configuration.
const result = await apiInstance.deleteUploadedConfigurationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-deploy-v1
Get a deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-deploy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the deploy. |  [default to undefined]

### Return type

`DeployresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 3d0fe04b-57df-4a46-a83b-8f04b0f9d10b; // The id of the deploy.
const result = await apiInstance.getDeployV1({ id: id });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]

### Return type

`Array<ObjectmappingresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const sourceOrg: string = source-org; // The name of the source org.
const result = await apiInstance.getObjectMappingsV1({ sourceOrg: sourceOrg });
console.log(result);
```

[[Back to top]](#)

## get-uploaded-configuration-v1
Get an uploaded configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-uploaded-configuration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the uploaded configuration. |  [default to undefined]

### Return type

`BackupresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 3d0fe04b-57df-4a46-a83b-8f04b0f9d10b; // The id of the uploaded configuration.
const result = await apiInstance.getUploadedConfigurationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-backups-v1
List backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-backups-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | [optional] [default to undefined]

### Return type

`Array<BackupresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const filters: string = status eq "COMPLETE"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)
const result = await apiInstance.listBackupsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-deploys-v1
List deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-deploys-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`ListDeploysV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const result = await apiInstance.listDeploysV1({  });
console.log(result);
```

[[Back to top]](#)

## list-drafts-v1
List drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-drafts-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* | [optional] [default to undefined]

### Return type

`Array<DraftresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const filters: string = status eq "COMPLETE"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)
const result = await apiInstance.listDraftsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-scheduled-actions-v1
List scheduled actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-scheduled-actions-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<ScheduledactionresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const result = await apiInstance.listScheduledActionsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-uploaded-configurations-v1
List uploaded configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-uploaded-configurations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | [optional] [default to undefined]

### Return type

`Array<BackupresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const filters: string = status eq "COMPLETE"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)
const result = await apiInstance.listUploadedConfigurationsV1({  });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectmappingbulkpatchrequestV1** | `ObjectmappingbulkpatchrequestV1` | The object mapping request body. | 

### Return type

`ObjectmappingbulkpatchresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const sourceOrg: string = source-org; // The name of the source org.
const objectmappingbulkpatchrequestV1: ObjectmappingbulkpatchrequestV1 = {"patches":{"603b1a61-d03d-4ed1-864f-a508fbd1995d":[{"op":"replace","path":"/enabled","value":true}],"00bece34-f50d-4227-8878-76f620b5a971":[{"op":"replace","path":"/targetValue","value":"New Target Value"}]}}; // The object mapping request body.
const result = await apiInstance.updateObjectMappingsV1({ sourceOrg: sourceOrg, objectmappingbulkpatchrequestV1: objectmappingbulkpatchrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-scheduled-action-v1
Update scheduled action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-scheduled-action-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the scheduled action. |  [default to undefined]
**jsonpatchV1** | `JsonpatchV1` | The JSON Patch document containing the changes to apply to the scheduled action. | 

### Return type

`ScheduledactionresponseV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { ConfigurationHubV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConfigurationHubV1Api(configuration);
const id: string = 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde; // The ID of the scheduled action.
const jsonpatchV1: JsonpatchV1 = [{"op":"replace","path":"/content/name","value":"Updated Backup Name"},{"op":"replace","path":"/cronString","value":"0 0 9 * * ?"}]; // The JSON Patch document containing the changes to apply to the scheduled action.
const result = await apiInstance.updateScheduledActionV1({ id: id, jsonpatchV1: jsonpatchV1 });
console.log(result);
```

[[Back to top]](#)

