---
id: v1-branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Branding', 'v1Branding']
slug: /tools/sdk/typescript/branding/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding', 'v1Branding']
---

# BrandingV1Api
  Use this API to implement and customize branding functionality. 
With this functionality in place, administrators can get and manage existing branding items, and they can also create new branding items and configure them for use throughout Identity Security Cloud. 
The Branding APIs provide administrators with a way to customize branding items. 
This customization includes details like their colors, logos, and other information. 
Refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) for more information about certifications.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-branding-item-v1**](#create-branding-item-v1) | **POST** `/brandings/v1` | Create a branding item
[**delete-branding-v1**](#delete-branding-v1) | **DELETE** `/brandings/v1/{name}` | Delete a branding item
[**get-branding-list-v1**](#get-branding-list-v1) | **GET** `/brandings/v1` | List of branding items
[**get-branding-v1**](#get-branding-v1) | **GET** `/brandings/v1/{name}` | Get a branding item
[**set-branding-item-v1**](#set-branding-item-v1) | **PUT** `/brandings/v1/{name}` | Update a branding item


## create-branding-item-v1
Create a branding item
This API endpoint creates a branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-branding-item-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | name of branding item |  [default to undefined]
**productName** | `string` | product name |  [default to undefined]
**actionButtonColor** | `string` | hex value of color for action button | [optional] [default to undefined]
**activeLinkColor** | `string` | hex value of color for link | [optional] [default to undefined]
**navigationColor** | `string` | hex value of color for navigation bar | [optional] [default to undefined]
**emailFromAddress** | `string` | email from address | [optional] [default to undefined]
**loginInformationalMessage** | `string` | login information message | [optional] [default to undefined]
**fileStandard** | `File` | png file with logo | [optional] [default to undefined]

### Return type

`BrandingitemV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { BrandingV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new BrandingV1Api(configuration);
const name: string = name_example; // name of branding item
const productName: string = productName_example; // product name
const actionButtonColor: string = actionButtonColor_example; // hex value of color for action button (optional)
const activeLinkColor: string = activeLinkColor_example; // hex value of color for link (optional)
const navigationColor: string = navigationColor_example; // hex value of color for navigation bar (optional)
const emailFromAddress: string = emailFromAddress_example; // email from address (optional)
const loginInformationalMessage: string = loginInformationalMessage_example; // login information message (optional)
const fileStandard: File = BINARY_DATA_HERE; // png file with logo (optional)
const result = await apiInstance.createBrandingItemV1({ name: name, productName: productName });
console.log(result);
```

[[Back to top]](#)

## delete-branding-v1
Delete a branding item
This API endpoint delete information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-branding-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The name of the branding item to be deleted |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { BrandingV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new BrandingV1Api(configuration);
const name: string = default; // The name of the branding item to be deleted
const result = await apiInstance.deleteBrandingV1({ name: name });
console.log(result);
```

[[Back to top]](#)

## get-branding-list-v1
List of branding items
This API endpoint returns a list of branding items.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-branding-list-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<BrandingitemV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { BrandingV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new BrandingV1Api(configuration);
const result = await apiInstance.getBrandingListV1({  });
console.log(result);
```

[[Back to top]](#)

## get-branding-v1
Get a branding item
This API endpoint retrieves information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-branding-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The name of the branding item to be retrieved |  [default to undefined]

### Return type

`BrandingitemV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { BrandingV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new BrandingV1Api(configuration);
const name: string = default; // The name of the branding item to be retrieved
const result = await apiInstance.getBrandingV1({ name: name });
console.log(result);
```

[[Back to top]](#)

## set-branding-item-v1
Update a branding item
This API endpoint updates information for an existing branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-branding-item-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The name of the branding item to be retrieved |  [default to undefined]
**name2** | `string` | name of branding item |  [default to undefined]
**productName** | `string` | product name |  [default to undefined]
**actionButtonColor** | `string` | hex value of color for action button | [optional] [default to undefined]
**activeLinkColor** | `string` | hex value of color for link | [optional] [default to undefined]
**navigationColor** | `string` | hex value of color for navigation bar | [optional] [default to undefined]
**emailFromAddress** | `string` | email from address | [optional] [default to undefined]
**loginInformationalMessage** | `string` | login information message | [optional] [default to undefined]
**fileStandard** | `File` | png file with logo | [optional] [default to undefined]

### Return type

`BrandingitemV1`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { BrandingV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new BrandingV1Api(configuration);
const name: string = default; // The name of the branding item to be retrieved
const name2: string = name_example; // name of branding item
const productName: string = productName_example; // product name
const actionButtonColor: string = actionButtonColor_example; // hex value of color for action button (optional)
const activeLinkColor: string = activeLinkColor_example; // hex value of color for link (optional)
const navigationColor: string = navigationColor_example; // hex value of color for navigation bar (optional)
const emailFromAddress: string = emailFromAddress_example; // email from address (optional)
const loginInformationalMessage: string = loginInformationalMessage_example; // login information message (optional)
const fileStandard: File = BINARY_DATA_HERE; // png file with logo (optional)
const result = await apiInstance.setBrandingItemV1({ name: name, name2: name2, productName: productName });
console.log(result);
```

[[Back to top]](#)

