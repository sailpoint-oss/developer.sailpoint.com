---
id: v1-auth-users
title: AuthUsers
pagination_label: AuthUsers
sidebar_label: AuthUsers
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AuthUsers', 'v1AuthUsers']
slug: /tools/sdk/typescript/auth_users/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'AuthUsers', 'v1AuthUsers']
---

# AuthUsersV1Api
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-auth-user-v1**](#get-auth-user-v1) | **GET** `/auth-users/v1/{id}` | Auth user details
[**patch-auth-user-v1**](#patch-auth-user-v1) | **PATCH** `/auth-users/v1/{id}` | Auth user update


## get-auth-user-v1
Auth user details
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-user-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity ID |  [default to undefined]

### Return type

`AuthuserV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AuthUsersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AuthUsersV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity ID
const result = await apiInstance.getAuthUserV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## patch-auth-user-v1
Auth user update
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-user-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Identity ID |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`AuthuserV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AuthUsersV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AuthUsersV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Identity ID
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/capabilities","value":["ORG_ADMIN"]}]; // A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const result = await apiInstance.patchAuthUserV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

