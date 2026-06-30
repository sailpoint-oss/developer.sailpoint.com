---
id: v1-sp-config
title: SPConfig
pagination_label: SPConfig
sidebar_label: SPConfig
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SPConfig', 'v1SPConfig']
slug: /tools/sdk/typescript/sp_config/methods/sp-config
tags: ['SDK', 'Software Development Kit', 'SPConfig', 'v1SPConfig']
---

# SPConfigV1Api
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**exportpayloadV1** | `ExportpayloadV1` | Export options control what will be included in the export. | 

### Return type

`SpconfigexportjobV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const exportpayloadV1: ExportpayloadV1 = {"description":"Export all available objects","excludeTypes":[],"includeTypes":["ACCESS_PROFILE","ACCESS_REQUEST_CONFIG","ATTR_SYNC_SOURCE_CONFIG","AUTH_ORG","CAMPAIGN_FILTER","CONNECTOR_RULE","FORM_DEFINITION","GOVERNANCE_GROUP","IDENTITY_OBJECT_CONFIG","IDENTITY_PROFILE","LIFECYCLE_STATE","NOTIFICATION_TEMPLATE","PASSWORD_POLICY","PASSWORD_SYNC_GROUP","PUBLIC_IDENTITIES_CONFIG","ROLE","RULE","SEGMENT","SERVICE_DESK_INTEGRATION","SOD_POLICY","SOURCE","TAG","TRANSFORM","TRIGGER_SUBSCRIPTION","WORKFLOW"],"objectOptions":{}}; // Export options control what will be included in the export.
const result = await apiInstance.exportSpConfigV1({ exportpayloadV1: exportpayloadV1 });
console.log(result);
```

[[Back to top]](#)

## get-sp-config-export-status-v1
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the export job whose status will be returned. |  [default to undefined]

### Return type

`SpconfigexportjobstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the export job whose status will be returned.
const result = await apiInstance.getSpConfigExportStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sp-config-export-v1
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-export-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the export job whose results will be downloaded. |  [default to undefined]

### Return type

`SpconfigexportresultsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the export job whose results will be downloaded.
const result = await apiInstance.getSpConfigExportV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sp-config-import-status-v1
Get import job status
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the import job whose status will be returned. |  [default to undefined]

### Return type

`SpconfigimportjobstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the import job whose status will be returned.
const result = await apiInstance.getSpConfigImportStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sp-config-import-v1
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sp-config-import-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the import job whose results will be downloaded. |  [default to undefined]

### Return type

`SpconfigimportresultsV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the import job whose results will be downloaded.
const result = await apiInstance.getSpConfigImportV1({ id: id });
console.log(result);
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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**data** | `File` | JSON file containing the objects to be imported. |  [default to undefined]
**preview** | `boolean` | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  | [optional] [default to false]
**_options** | `ImportoptionsV1` |  | [optional] [default to undefined]

### Return type

`SpconfigjobV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const data: File = BINARY_DATA_HERE; // JSON file containing the objects to be imported.
const preview: boolean = true; // This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional)
const _options: ImportoptionsV1 = ; //  (optional)
const result = await apiInstance.importSpConfigV1({ data: data });
console.log(result);
```

[[Back to top]](#)

## list-sp-config-objects-v1
List config objects
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sp-config-objects-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<SpconfigobjectV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SPConfigV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SPConfigV1Api(configuration);
const result = await apiInstance.listSpConfigObjectsV1({  });
console.log(result);
```

[[Back to top]](#)

