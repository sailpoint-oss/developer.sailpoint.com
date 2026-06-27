---
id: v1-o-auth-clients
title: OAuthClients
pagination_label: OAuthClients
sidebar_label: OAuthClients
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'OAuthClients', 'v1OAuthClients']
slug: /tools/sdk/typescript/oauth_clients/methods/o-auth-clients
tags: ['SDK', 'Software Development Kit', 'OAuthClients', 'v1OAuthClients']
---

# OAuthClientsV1Api
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-oauth-client-v1**](#create-oauth-client-v1) | **POST** `/oauth-clients/v1` | Create oauth client
[**delete-oauth-client-v1**](#delete-oauth-client-v1) | **DELETE** `/oauth-clients/v1/{id}` | Delete oauth client
[**get-oauth-client-v1**](#get-oauth-client-v1) | **GET** `/oauth-clients/v1/{id}` | Get oauth client
[**list-oauth-clients-v1**](#list-oauth-clients-v1) | **GET** `/oauth-clients/v1` | List oauth clients
[**patch-oauth-client-v1**](#patch-oauth-client-v1) | **PATCH** `/oauth-clients/v1/{id}` | Patch oauth client


## create-oauth-client-v1
Create oauth client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-oauth-client-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createoauthclientrequestV1** | `CreateoauthclientrequestV1` |  | 

### Return type

`CreateoauthclientresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { OAuthClientsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new OAuthClientsV1Api(configuration);
const createoauthclientrequestV1: CreateoauthclientrequestV1 = ; // 
const result = await apiInstance.createOauthClientV1({ createoauthclientrequestV1: createoauthclientrequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-oauth-client-v1
Delete oauth client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-oauth-client-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The OAuth client id |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { OAuthClientsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new OAuthClientsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The OAuth client id
const result = await apiInstance.deleteOauthClientV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-oauth-client-v1
Get oauth client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-oauth-client-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The OAuth client id |  [default to undefined]

### Return type

`GetoauthclientresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { OAuthClientsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new OAuthClientsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The OAuth client id
const result = await apiInstance.getOauthClientV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-oauth-clients-v1
List oauth clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-oauth-clients-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | [optional] [default to undefined]

### Return type

`Array<GetoauthclientresponseV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { OAuthClientsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new OAuthClientsV1Api(configuration);
const filters: string = lastUsed le 2023-02-05T10:59:27.214Z; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)
const result = await apiInstance.listOauthClientsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-oauth-client-v1
Patch oauth client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-oauth-client-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The OAuth client id |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported  | 

### Return type

`GetoauthclientresponseV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { OAuthClientsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new OAuthClientsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The OAuth client id
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/strongAuthSupported","value":true},{"op":"replace","path":"/businessName","value":"acme-solar"}]; // A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 
const result = await apiInstance.patchOauthClientV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

