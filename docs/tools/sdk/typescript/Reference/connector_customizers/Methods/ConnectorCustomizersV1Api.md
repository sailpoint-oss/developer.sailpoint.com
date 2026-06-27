---
id: v1-connector-customizers
title: ConnectorCustomizers
pagination_label: ConnectorCustomizers
sidebar_label: ConnectorCustomizers
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ConnectorCustomizers', 'v1ConnectorCustomizers']
slug: /tools/sdk/typescript/connector_customizers/methods/connector-customizers
tags: ['SDK', 'Software Development Kit', 'ConnectorCustomizers', 'v1ConnectorCustomizers']
---

# ConnectorCustomizersV1Api
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-customizer-v1**](#create-connector-customizer-v1) | **POST** `/connector-customizers/v1` | Create connector customizer
[**create-connector-customizer-version-v1**](#create-connector-customizer-version-v1) | **POST** `/connector-customizers/v1/{id}/versions` | Creates a connector customizer version
[**delete-connector-customizer-v1**](#delete-connector-customizer-v1) | **DELETE** `/connector-customizers/v1/{id}` | Delete connector customizer
[**get-connector-customizer-v1**](#get-connector-customizer-v1) | **GET** `/connector-customizers/v1/{id}` | Get connector customizer
[**list-connector-customizers-v1**](#list-connector-customizers-v1) | **GET** `/connector-customizers/v1` | List all connector customizers
[**put-connector-customizer-v1**](#put-connector-customizer-v1) | **PUT** `/connector-customizers/v1/{id}` | Update connector customizer


## create-connector-customizer-v1
Create connector customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-customizer-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**connectorcustomizercreaterequestV1** | `ConnectorcustomizercreaterequestV1` | Connector customizer to create. | 

### Return type

`ConnectorcustomizercreateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersV1Api(configuration);
const connectorcustomizercreaterequestV1: ConnectorcustomizercreaterequestV1 = ; // Connector customizer to create.
const result = await apiInstance.createConnectorCustomizerV1({ connectorcustomizercreaterequestV1: connectorcustomizercreaterequestV1 });
console.log(result);
```

[[Back to top]](#)

## create-connector-customizer-version-v1
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-customizer-version-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the connector customizer. |  [default to undefined]

### Return type

`ConnectorcustomizerversioncreateresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersV1Api(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // The id of the connector customizer.
const result = await apiInstance.createConnectorCustomizerVersionV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-connector-customizer-v1
Delete connector customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-connector-customizer-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersV1Api(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // ID of the connector customizer to delete.
const result = await apiInstance.deleteConnectorCustomizerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-connector-customizer-v1
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-customizer-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to get. |  [default to undefined]

### Return type

`ConnectorcustomizersresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersV1Api(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // ID of the connector customizer to get.
const result = await apiInstance.getConnectorCustomizerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-connector-customizers-v1
List all connector customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-connector-customizers-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<ConnectorcustomizersresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersV1Api(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listConnectorCustomizersV1({  });
console.log(result);
```

[[Back to top]](#)

## put-connector-customizer-v1
Update connector customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-customizer-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to update. |  [default to undefined]
**connectorcustomizerupdaterequestV1** | `ConnectorcustomizerupdaterequestV1` | Connector rule with updated data. | [optional]

### Return type

`ConnectorcustomizerupdateresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersV1Api(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // ID of the connector customizer to update.
const connectorcustomizerupdaterequestV1: ConnectorcustomizerupdaterequestV1 = ; // Connector rule with updated data. (optional)
const result = await apiInstance.putConnectorCustomizerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

