# AuthProfile

# AuthProfileApi
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-profile-config-list-v1**](#get-profile-config-list-v1) | **GET** `/auth-profiles/v1` | Get list of auth profiles
[**get-profile-config-v1**](#get-profile-config-v1) | **GET** `/auth-profiles/v1/{id}` | Get auth profile
[**patch-profile-config-v1**](#patch-profile-config-v1) | **PATCH** `/auth-profiles/v1/{id}` | Patch a specified auth profile


## get-profile-config-list-v1
Get list of auth profiles
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-list-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<AuthProfileSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AuthProfileApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AuthProfileApi(configuration);
const result = await apiInstance.getProfileConfigListV1({  });
console.log(result);
```

[[Back to top]](#)

## get-profile-config-v1
Get auth profile
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Auth Profile to patch. |  [default to undefined]

### Return type

`AuthProfile`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AuthProfileApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AuthProfileApi(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // ID of the Auth Profile to patch.
const result = await apiInstance.getProfileConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## patch-profile-config-v1
Patch a specified auth profile
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/patch-profile-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Auth Profile to patch. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | 

### Return type

`AuthProfile`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AuthProfileApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/auth_profile/api';

const configuration = new Configuration();
const apiInstance = new AuthProfileApi(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // ID of the Auth Profile to patch.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // 
const result = await apiInstance.patchProfileConfigV1({ id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

