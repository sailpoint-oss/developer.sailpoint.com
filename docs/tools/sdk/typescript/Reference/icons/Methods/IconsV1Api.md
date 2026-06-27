---
id: v1-icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Icons', 'v1Icons']
slug: /tools/sdk/typescript/icons/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons', 'v1Icons']
---

# IconsV1Api
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-icon-v1**](#delete-icon-v1) | **DELETE** `/icons/v1/{objectType}/{objectId}` | Delete an icon
[**set-icon-v1**](#set-icon-v1) | **PUT** `/icons/v1/{objectType}/{objectId}` | Update an icon


## delete-icon-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete an icon
This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-icon-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**objectType** | `'application'` | Object type. Available options [\&#39;application\&#39;] |  [default to undefined]
**objectId** | `string` | Object id. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IconsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IconsV1Api(configuration);
const objectType: string = application; // Object type. Available options [\&#39;application\&#39;]
const objectId: string = a291e870-48c3-4953-b656-fb5ce2a93169; // Object id.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteIconV1({ objectType: objectType, objectId: objectId });
console.log(result);
```

[[Back to top]](#)

## set-icon-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an icon
This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-icon-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**objectType** | `'application'` | Object type. Available options [\&#39;application\&#39;] |  [default to undefined]
**objectId** | `string` | Object id. |  [default to undefined]
**image** | `File` | file with icon. Allowed mime-types [\\\&#39;image/png\\\&#39;, \\\&#39;image/jpeg\\\&#39;] |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`SetIconV1200ResponseV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { IconsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IconsV1Api(configuration);
const objectType: string = application; // Object type. Available options [\&#39;application\&#39;]
const objectId: string = a291e870-48c3-4953-b656-fb5ce2a93169; // Object id.
const image: File = BINARY_DATA_HERE; // file with icon. Allowed mime-types [\\\&#39;image/png\\\&#39;, \\\&#39;image/jpeg\\\&#39;]
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.setIconV1({ objectType: objectType, objectId: objectId, image: image });
console.log(result);
```

[[Back to top]](#)

