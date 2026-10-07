# PrivilegeCriteria

# PrivilegeCriteriaApi
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

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-privilege-criteria-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createPrivilegeCriteriaRequest** | `CreatePrivilegeCriteriaRequest` | Create custom privilege criteria request body. | 

### Return type

`PrivilegeCriteriaDTO`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { CreatePrivilegeCriteriaRequest } from '@sailpoint/api-client/dist/privilege_criteria/api';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaApi(configuration);
const createPrivilegeCriteriaRequest: CreatePrivilegeCriteriaRequest = {
  "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
  "privilegeLevel" : "HIGH",
  "groups" : [ {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    } ],
    "operator" : "AND"
  }, {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    } ],
    "operator" : "AND"
  } ],
  "type" : "CUSTOM",
  "operator" : "AND"
}; // Create custom privilege criteria request body.
const result = await apiInstance.createCustomPrivilegeCriteriaV1({ createPrivilegeCriteriaRequest: createPrivilegeCriteriaRequest });
console.log(result);
```

[[Back to top]](#)

## delete-custom-privilege-criteria-v1
Delete privilege criteria
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-privilege-criteria-v-1)

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
import { PrivilegeCriteriaApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaApi(configuration);
const criteriaId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the custom privilege criteria to delete.
const result = await apiInstance.deleteCustomPrivilegeCriteriaV1({ criteriaId: criteriaId });
console.log(result);
```

[[Back to top]](#)

## get-privilege-criteria-v1
Get privilege criteria
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/get-privilege-criteria-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the privilege criteria record to return. |  [default to undefined]

### Return type

`PrivilegeCriteriaDTO`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaApi(configuration);
const criteriaId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the privilege criteria record to return.
const result = await apiInstance.getPrivilegeCriteriaV1({ criteriaId: criteriaId });
console.log(result);
```

[[Back to top]](#)

## list-privilege-criteria-v1
List privilege criteria
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/list-privilege-criteria-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; |  [default to undefined]

### Return type

`Array<PrivilegeCriteriaDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaApi(configuration);
const filters: string = type eq "CUSTOM" and sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60;
const result = await apiInstance.listPrivilegeCriteriaV1({ filters: filters });
console.log(result);
```

[[Back to top]](#)

## put-custom-privilege-criteria-value-v1
Update privilege criteria
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/put-custom-privilege-criteria-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the privilege criteria record to return. |  [default to undefined]
**privilegeCriteriaDTO** | `PrivilegeCriteriaDTO` | The new version of the custom privilege criteria. This overwrites the existing privilege criteria. | 

### Return type

`PrivilegeCriteriaDTO`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PrivilegeCriteriaApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { PrivilegeCriteriaDTO } from '@sailpoint/api-client/dist/privilege_criteria/api';

const configuration = new Configuration();
const apiInstance = new PrivilegeCriteriaApi(configuration);
const criteriaId: string = 6d123044-5834-4e8d-a49f-9c70089b0de1; // The Id of the privilege criteria record to return.
const privilegeCriteriaDTO: PrivilegeCriteriaDTO = {
  "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
  "privilegeLevel" : "HIGH",
  "groups" : [ {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    } ],
    "operator" : "AND"
  }, {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    } ],
    "operator" : "AND"
  } ],
  "id" : "2c9180867817ac4d017817c491119a20",
  "type" : "CUSTOM",
  "operator" : "AND"
}; // The new version of the custom privilege criteria. This overwrites the existing privilege criteria.
const result = await apiInstance.putCustomPrivilegeCriteriaValueV1({ criteriaId: criteriaId, privilegeCriteriaDTO: privilegeCriteriaDTO });
console.log(result);
```

[[Back to top]](#)

