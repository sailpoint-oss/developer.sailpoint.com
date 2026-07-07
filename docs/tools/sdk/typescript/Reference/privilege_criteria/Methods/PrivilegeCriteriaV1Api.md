---
id: v1-privilege-criteria
title: PrivilegeCriteria
pagination_label: PrivilegeCriteria
sidebar_label: PrivilegeCriteria
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PrivilegeCriteria', 'v1PrivilegeCriteria']
slug: /tools/sdk/typescript/privilege_criteria/methods/privilege-criteria
tags: ['SDK', 'Software Development Kit', 'PrivilegeCriteria', 'v1PrivilegeCriteria']
---

# PrivilegeCriteriaV1Api
  Use this API to create, retrieve, update, and delete privilege criteria.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-privilege-criteria-v1**](#create-custom-privilege-criteria-v1) | **POST** `/criteria/v1/privilege` | Create custom privilege criteria
[**delete-custom-privilege-criteria-v1**](#delete-custom-privilege-criteria-v1) | **DELETE** `/criteria/v1/privilege/{criteriaId}` | Delete privilege criteria
[**get-privilege-criteria-v1**](#get-privilege-criteria-v1) | **GET** `/criteria/v1/privilege/{criteriaId}` | Get privilege criteria
[**list-privilege-criteria-v1**](#list-privilege-criteria-v1) | **GET** `/criteria/v1/privilege` | List privilege criteria
[**put-custom-privilege-criteria-value-v1**](#put-custom-privilege-criteria-value-v1) | **PUT** `/criteria/v1/privilege/{criteriaId}` | Update privilege criteria


## create-custom-privilege-criteria-v1
Create custom privilege criteria
Use this API to create a custom privilege criteria

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-privilege-criteria-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createprivilegecriteriarequestV1** | `CreateprivilegecriteriarequestV1` | Create custom privilege criteria request body. | 

### Return type

`PrivilegecriteriadtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaV1Api(configuration);
const createprivilegecriteriarequestV1: CreateprivilegecriteriarequestV1 = ; // Create custom privilege criteria request body.
const result = await apiInstance.createCustomPrivilegeCriteriaV1({ createprivilegecriteriarequestV1: createprivilegecriteriarequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-custom-privilege-criteria-v1
Delete privilege criteria
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-privilege-criteria-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the custom privilege criteria to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaV1Api(configuration);
const criteriaId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the custom privilege criteria to delete.
const result = await apiInstance.deleteCustomPrivilegeCriteriaV1({ criteriaId: criteriaId });
console.log(result);
```

[[Back to top]](#)

## get-privilege-criteria-v1
Get privilege criteria
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-privilege-criteria-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the privilege criteria record to return. |  [default to undefined]

### Return type

`PrivilegecriteriadtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaV1Api(configuration);
const criteriaId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the privilege criteria record to return.
const result = await apiInstance.getPrivilegeCriteriaV1({ criteriaId: criteriaId });
console.log(result);
```

[[Back to top]](#)

## list-privilege-criteria-v1
List privilege criteria
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-privilege-criteria-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; |  [default to undefined]

### Return type

`Array<PrivilegecriteriadtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaV1Api(configuration);
const filters: string = type eq "CUSTOM" and sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60;
const result = await apiInstance.listPrivilegeCriteriaV1({ filters: filters });
console.log(result);
```

[[Back to top]](#)

## put-custom-privilege-criteria-value-v1
Update privilege criteria
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-custom-privilege-criteria-value-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the privilege criteria record to return. |  [default to undefined]
**privilegecriteriadtoV1** | `PrivilegecriteriadtoV1` | The new version of the custom privilege criteria. This overwrites the existing privilege criteria. | 

### Return type

`PrivilegecriteriadtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaV1Api(configuration);
const criteriaId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the privilege criteria record to return.
const privilegecriteriadtoV1: PrivilegecriteriadtoV1 = ; // The new version of the custom privilege criteria. This overwrites the existing privilege criteria.
const result = await apiInstance.putCustomPrivilegeCriteriaValueV1({ criteriaId: criteriaId, privilegecriteriadtoV1: privilegecriteriadtoV1 });
console.log(result);
```

[[Back to top]](#)

