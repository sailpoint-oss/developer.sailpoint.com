---
id: v1-parameter-storage
title: ParameterStorage
pagination_label: ParameterStorage
sidebar_label: ParameterStorage
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'ParameterStorage', 'v1ParameterStorage']
slug: /tools/sdk/typescript/parameter_storage/methods/parameter-storage
tags: ['SDK', 'Software Development Kit', 'ParameterStorage', 'v1ParameterStorage']
---

# ParameterStorageV1Api
  The Parameter Storage is SailPoint&#39;s centralized repository for authentication, authorization, and connection configurations, stored as typed Parameters.

The APIs can be used to input Parameters, which can then be referenced by other services, such as Workflow configurations. When these services are executed, the relevant values are fetched via an internal API (not documented here).

The usage of Parameters can be monitored via References managed by Parameter Storage. References provide an indirect mapping between a Parameter and its usage (e.g., within a Workflow), allowing for reports such as &quot;Parameter X is used in Workflow Y&quot; via APIs.

A Parameter is a named instance of typed configuration, where the state is stored as Fields. These Fields are either Public (cleartext, searchable) or Private (encrypted).

Parameter Types are grouped and fall into three Categories: Authentication, Authorization, and Connection.

Parameters are strongly typed; each Type&#39;s fields are named and exposed to the consumer. This means that if a service states that it expects a Credential Type, it will receive a Parameter with a Username and Password.

Fields are named, typed variables within a Parameter; the Fields on a Parameter depend on the Parameter&#39;s Type. Fields contain customer-provided data that will be referenced by another service, and their typing determines whether they&#39;re stored in cleartext or encrypted.

The Specification documents the supported Categories, Types, Fields, Field Names, and their relationships.

A Reference is an indirect pointer to a Parameter, where each usage of a Parameter has a corresponding Reference. This allows for usage tracking and safe deletion.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-parameter-v1**](#create-parameter-v1) | **POST** `/parameter-storage/v1/parameters` | Add a new parameter.
[**delete-parameter-v1**](#delete-parameter-v1) | **DELETE** `/parameter-storage/v1/parameters/{id}` | Delete a parameter.
[**get-attestation-document-v1**](#get-attestation-document-v1) | **GET** `/parameter-storage/v1/attestation` | Get an attestation document.
[**get-parameter-references-v1**](#get-parameter-references-v1) | **GET** `/parameter-storage/v1/parameters/{id}/references` | Get parameter references.
[**get-parameter-storage-specification-v1**](#get-parameter-storage-specification-v1) | **GET** `/parameter-storage/v1/specification` | Get specifications for parameter types.
[**get-parameter-v1**](#get-parameter-v1) | **GET** `/parameter-storage/v1/parameters/{id}` | Get a specific parameter.
[**search-parameters-v1**](#search-parameters-v1) | **GET** `/parameter-storage/v1/parameters` | Query stored parameters.
[**update-parameter-v1**](#update-parameter-v1) | **PATCH** `/parameter-storage/v1/parameters/{id}` | Update a parameter.


## create-parameter-v1
Add a new parameter.
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-parameter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**parameterstoragenewparameterV1** | `ParameterstoragenewparameterV1` | The parameter to add to the store. | [optional]

### Return type

`ParameterstorageparameterV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const parameterstoragenewparameterV1: ParameterstoragenewparameterV1 = ; // The parameter to add to the store. (optional)
const result = await apiInstance.createParameterV1({  });
console.log(result);
```

[[Back to top]](#)

## delete-parameter-v1
Delete a parameter.
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-parameter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter to be deleted. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const id: string = 58de858b-83d9-4563-9e15-7393594c684a; // The ID of the parameter to be deleted.
const result = await apiInstance.deleteParameterV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-attestation-document-v1
Get an attestation document.
Get an attestation document containing a NIST P-384 service public key for an ECDHE handshake, enabling the end-to-end-encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-attestation-document-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Base64Url encoded NIST P-384 public key |  [default to undefined]

### Return type

`ParameterstorageattestationdocumentV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const key: string = BLdV-KA7nSRXx2XkksQX7bmOAShARsB3CCVWodKr4dOJj_puru76wy6drBTVlSytW_rDheLwepm9xdrRuqUI7p81wMP576frFBbsjndBKyRm3eouPbDcW8MAz0XRH1BB3w==; // Base64Url encoded NIST P-384 public key
const result = await apiInstance.getAttestationDocumentV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## get-parameter-references-v1
Get parameter references.
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-references-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter which you want to fetch the references for. |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<ParameterstoragereferenceV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const id: string = 58de858b-83d9-4563-9e15-7393594c684a; // The ID of the parameter which you want to fetch the references for.
const sorters: string = consumerId,name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getParameterReferencesV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-parameter-storage-specification-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get specifications for parameter types.
Get the specifications for all parameter types. All parameters must conform to this specification document.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-storage-specification-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**acceptLanguage** | `string` | The i18n internationalization code for the language that the spec is in. Defaults to english. | [optional] [default to &#39;en&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const acceptLanguage: string = en; // The i18n internationalization code for the language that the spec is in. Defaults to english. (optional)
const result = await apiInstance.getParameterStorageSpecificationV1({  });
console.log(result);
```

[[Back to top]](#)

## get-parameter-v1
Get a specific parameter.
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-parameter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter to be fetched |  [default to undefined]

### Return type

`ParameterstorageparameterV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const id: string = 58de858b-83d9-4563-9e15-7393594c684a; // The ID of the parameter to be fetched
const result = await apiInstance.getParameterV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## search-parameters-v1
Query stored parameters.
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v1/search-parameters-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<ParameterstorageparameterV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const filters: string = id eq 550e8400-e29b-41d4-a716-446655440000; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional)
const sorters: string = type,name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.searchParametersV1({  });
console.log(result);
```

[[Back to top]](#)

## update-parameter-v1
Update a parameter.
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-parameter-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter to be updated. |  [default to undefined]
**parameterstorageupdateparameterV1** | `ParameterstorageupdateparameterV1` | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. | [optional]

### Return type

`ParameterstorageparameterV1`

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { ParameterStorageV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ParameterStorageV1Api(configuration);
const id: string = 58de858b-83d9-4563-9e15-7393594c684a; // The ID of the parameter to be updated.
const parameterstorageupdateparameterV1: ParameterstorageupdateparameterV1 = ; // The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. (optional)
const result = await apiInstance.updateParameterV1({ id: id });
console.log(result);
```

[[Back to top]](#)

