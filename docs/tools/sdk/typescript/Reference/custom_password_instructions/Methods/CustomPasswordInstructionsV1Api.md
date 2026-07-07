---
id: v1-custom-password-instructions
title: CustomPasswordInstructions
pagination_label: CustomPasswordInstructions
sidebar_label: CustomPasswordInstructions
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CustomPasswordInstructions', 'v1CustomPasswordInstructions']
slug: /tools/sdk/typescript/custom_password_instructions/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'CustomPasswordInstructions', 'v1CustomPasswordInstructions']
---

# CustomPasswordInstructionsV1Api
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/v2025/put-password-org-config/) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/v2025/create-custom-password-instructions/) to create custom page content for the specific pageId they select.

For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails.

Refer to [Creating Custom Instruction Text](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text) for more information about creating custom password instructions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-password-instructions-v1**](#create-custom-password-instructions-v1) | **POST** `/custom-password-instructions/v1` | Create custom password instructions
[**delete-custom-password-instructions-v1**](#delete-custom-password-instructions-v1) | **DELETE** `/custom-password-instructions/v1/{pageId}` | Delete custom password instructions by page id
[**get-custom-password-instructions-v1**](#get-custom-password-instructions-v1) | **GET** `/custom-password-instructions/v1/{pageId}` | Get custom password instructions by page id


## create-custom-password-instructions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create custom password instructions
This API creates the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-password-instructions-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**custompasswordinstructionV1** | `CustompasswordinstructionV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`CustompasswordinstructionV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CustomPasswordInstructionsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CustomPasswordInstructionsV1Api(configuration);
const custompasswordinstructionV1: CustompasswordinstructionV1 = {"pageId":"reset-password:enter-password","pageContent":"See company password policies for details by clicking <a href=\"url\">here</a>"}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createCustomPasswordInstructionsV1({ custompasswordinstructionV1: custompasswordinstructionV1 });
console.log(result);
```

[[Back to top]](#)

## delete-custom-password-instructions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete custom password instructions by page id
This API delete the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-password-instructions-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pageId** | `'change-password:enter-password' | 'change-password:finish' | 'flow-selection:select' | 'forget-username:user-email' | 'mfa:enter-code' | 'mfa:enter-kba' | 'mfa:select' | 'reset-password:enter-password' | 'reset-password:enter-username' | 'reset-password:finish' | 'unlock-account:enter-username' | 'unlock-account:finish'` | The page ID of custom password instructions to delete. |  [default to undefined]
**locale** | `string` | The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomPasswordInstructionsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CustomPasswordInstructionsV1Api(configuration);
const pageId: string = mfa:select; // The page ID of custom password instructions to delete.
const locale: string = locale_example; // The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteCustomPasswordInstructionsV1({ pageId: pageId });
console.log(result);
```

[[Back to top]](#)

## get-custom-password-instructions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get custom password instructions by page id
This API returns the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-custom-password-instructions-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pageId** | `'change-password:enter-password' | 'change-password:finish' | 'flow-selection:select' | 'forget-username:user-email' | 'mfa:enter-code' | 'mfa:enter-kba' | 'mfa:select' | 'reset-password:enter-password' | 'reset-password:enter-username' | 'reset-password:finish' | 'unlock-account:enter-username' | 'unlock-account:finish'` | The page ID of custom password instructions to query. |  [default to undefined]
**locale** | `string` | The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`CustompasswordinstructionV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CustomPasswordInstructionsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CustomPasswordInstructionsV1Api(configuration);
const pageId: string = mfa:select; // The page ID of custom password instructions to query.
const locale: string = locale_example; // The locale for the custom instructions, a BCP47 language tag. The default value is \\\&quot;default\\\&quot;. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getCustomPasswordInstructionsV1({ pageId: pageId });
console.log(result);
```

[[Back to top]](#)

