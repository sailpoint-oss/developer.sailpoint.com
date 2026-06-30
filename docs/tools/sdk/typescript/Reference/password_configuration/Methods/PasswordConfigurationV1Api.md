---
id: v1-password-configuration
title: PasswordConfiguration
pagination_label: PasswordConfiguration
sidebar_label: PasswordConfiguration
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PasswordConfiguration', 'v1PasswordConfiguration']
slug: /tools/sdk/typescript/password_configuration/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'PasswordConfiguration', 'v1PasswordConfiguration']
---

# PasswordConfigurationV1Api
  Use this API to implement organization password configuration functionality. 
With this functionality in place, organization administrators can create organization-specific password configurations. 

These configurations include details like custom password instructions, as well as digit token length and duration. 

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-org-config-v1**](#create-password-org-config-v1) | **POST** `/password-org-config/v1` | Create password org config
[**get-password-org-config-v1**](#get-password-org-config-v1) | **GET** `/password-org-config/v1` | Get password org config
[**put-password-org-config-v1**](#put-password-org-config-v1) | **PUT** `/password-org-config/v1` | Update password org config


## create-password-org-config-v1
Create password org config
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-org-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordorgconfigV1** | `PasswordorgconfigV1` |  | 

### Return type

`PasswordorgconfigV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordConfigurationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordConfigurationV1Api(configuration);
const passwordorgconfigV1: PasswordorgconfigV1 = {"customInstructionsEnabled":true,"digitTokenEnabled":true,"digitTokenDurationMinutes":12,"digitTokenLength":9}; // 
const result = await apiInstance.createPasswordOrgConfigV1({ passwordorgconfigV1: passwordorgconfigV1 });
console.log(result);
```

[[Back to top]](#)

## get-password-org-config-v1
Get password org config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-org-config-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`PasswordorgconfigV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordConfigurationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordConfigurationV1Api(configuration);
const result = await apiInstance.getPasswordOrgConfigV1({  });
console.log(result);
```

[[Back to top]](#)

## put-password-org-config-v1
Update password org config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-password-org-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordorgconfigV1** | `PasswordorgconfigV1` |  | 

### Return type

`PasswordorgconfigV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordConfigurationV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordConfigurationV1Api(configuration);
const passwordorgconfigV1: PasswordorgconfigV1 = {"digitTokenEnabled":true,"digitTokenDurationMinutes":12}; // 
const result = await apiInstance.putPasswordOrgConfigV1({ passwordorgconfigV1: passwordorgconfigV1 });
console.log(result);
```

[[Back to top]](#)

