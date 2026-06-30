---
id: v1-launchers
title: Launchers
pagination_label: Launchers
sidebar_label: Launchers
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Launchers', 'v1Launchers']
slug: /tools/sdk/typescript/launchers/methods/launchers
tags: ['SDK', 'Software Development Kit', 'Launchers', 'v1Launchers']
---

# LaunchersV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-launcher-v1**](#create-launcher-v1) | **POST** `/launchers/v1` | Create launcher
[**delete-launcher-v1**](#delete-launcher-v1) | **DELETE** `/launchers/v1/{launcherID}` | Delete launcher
[**get-launcher-v1**](#get-launcher-v1) | **GET** `/launchers/v1/{launcherID}` | Get launcher by id
[**get-launchers-v1**](#get-launchers-v1) | **GET** `/launchers/v1` | List all launchers for tenant
[**put-launcher-v1**](#put-launcher-v1) | **PUT** `/launchers/v1/{launcherID}` | Replace launcher
[**start-launcher-v1**](#start-launcher-v1) | **POST** `/launchers/v1/{launcherID}/launch` | Launch a launcher


## create-launcher-v1
Create launcher
Create a Launcher with given information

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-launcher-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherrequestV1** | `LauncherrequestV1` | Payload to create a Launcher | 

### Return type

`LauncherV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { LaunchersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new LaunchersV1Api(configuration);
const launcherrequestV1: LauncherrequestV1 = ; // Payload to create a Launcher
const result = await apiInstance.createLauncherV1({ launcherrequestV1: launcherrequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-launcher-v1
Delete launcher
Delete the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-launcher-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be deleted |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LaunchersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new LaunchersV1Api(configuration);
const launcherID: string = e3012408-8b61-4564-ad41-c5ec131c325b; // ID of the Launcher to be deleted
const result = await apiInstance.deleteLauncherV1({ launcherID: launcherID });
console.log(result);
```

[[Back to top]](#)

## get-launcher-v1
Get launcher by id
Get details for the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-launcher-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be retrieved |  [default to undefined]

### Return type

`LauncherV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LaunchersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new LaunchersV1Api(configuration);
const launcherID: string = e3012408-8b61-4564-ad41-c5ec131c325b; // ID of the Launcher to be retrieved
const result = await apiInstance.getLauncherV1({ launcherID: launcherID });
console.log(result);
```

[[Back to top]](#)

## get-launchers-v1
List all launchers for tenant
Return a list of Launchers for the authenticated tenant

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-launchers-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* | [optional] [default to undefined]
**next** | `string` | Pagination marker | [optional] [default to undefined]
**limit** | `number` | Number of Launchers to return | [optional] [default to 10]

### Return type

`GetLaunchersV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LaunchersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new LaunchersV1Api(configuration);
const filters: string = disabled eq "true"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **description**: *sw*  **disabled**: *eq*  **name**: *sw* (optional)
const next: string = eyJuZXh0IjoxMjN9Cg==; // Pagination marker (optional)
const limit: number = 42; // Number of Launchers to return (optional)
const result = await apiInstance.getLaunchersV1({  });
console.log(result);
```

[[Back to top]](#)

## put-launcher-v1
Replace launcher
Replace the given Launcher ID with given payload

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-launcher-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be replaced |  [default to undefined]
**launcherrequestV1** | `LauncherrequestV1` | Payload to replace Launcher | 

### Return type

`LauncherV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { LaunchersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new LaunchersV1Api(configuration);
const launcherID: string = e3012408-8b61-4564-ad41-c5ec131c325b; // ID of the Launcher to be replaced
const launcherrequestV1: LauncherrequestV1 = ; // Payload to replace Launcher
const result = await apiInstance.putLauncherV1({ launcherID: launcherID, launcherrequestV1: launcherrequestV1 });
console.log(result);
```

[[Back to top]](#)

## start-launcher-v1
Launch a launcher
Launch the given Launcher ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-launcher-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**launcherID** | `string` | ID of the Launcher to be launched |  [default to undefined]

### Return type

`StartLauncherV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { LaunchersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new LaunchersV1Api(configuration);
const launcherID: string = e3012408-8b61-4564-ad41-c5ec131c325b; // ID of the Launcher to be launched
const result = await apiInstance.startLauncherV1({ launcherID: launcherID });
console.log(result);
```

[[Back to top]](#)

