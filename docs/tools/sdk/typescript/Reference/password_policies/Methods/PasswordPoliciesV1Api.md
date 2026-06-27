---
id: v1-password-policies
title: PasswordPolicies
pagination_label: PasswordPolicies
sidebar_label: PasswordPolicies
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PasswordPolicies', 'v1PasswordPolicies']
slug: /tools/sdk/typescript/password_policies/methods/password-policies
tags: ['SDK', 'Software Development Kit', 'PasswordPolicies', 'v1PasswordPolicies']
---

# PasswordPoliciesV1Api
  Use these APIs to implement password policies functionality.
These APIs allow you to define the policy parameters for choosing passwords.

IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.
If you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org.

In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.
Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) for more information about password policies.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-policy-v1**](#create-password-policy-v1) | **POST** `/password-policies/v1` | Create password policy
[**delete-password-policy-v1**](#delete-password-policy-v1) | **DELETE** `/password-policies/v1/{id}` | Delete password policy by id
[**get-password-policy-by-id-v1**](#get-password-policy-by-id-v1) | **GET** `/password-policies/v1/{id}` | Get password policy by id
[**list-password-policies-v1**](#list-password-policies-v1) | **GET** `/password-policies/v1` | List password policies
[**set-password-policy-v1**](#set-password-policy-v1) | **PUT** `/password-policies/v1/{id}` | Update password policy by id


## create-password-policy-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create password policy
This API creates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordpolicyv3dtoV1** | `Passwordpolicyv3dtoV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Passwordpolicyv3dtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordPoliciesV1Api(configuration);
const passwordpolicyv3dtoV1: Passwordpolicyv3dtoV1 = {"description":"New Password Policy with high requirements to password complexity.","id":null,"name":"High security Password Policy","dateCreated":1639056206564,"lastUpdated":1662385430753,"firstExpirationReminder":90,"accountIdMinWordLength":3,"accountNameMinWordLength":3,"maxLength":0,"maxRepeatedChars":4,"minAlpha":1,"minCharacterTypes":-1,"minLength":8,"minLower":0,"minNumeric":1,"minSpecial":0,"minUpper":0,"passwordExpiration":90,"defaultPolicy":false,"enablePasswdExpiration":false,"requireStrongAuthn":false,"requireStrongAuthOffNetwork":false,"requireStrongAuthUntrustedGeographies":false,"useAccountAttributes":false,"useDictionary":false,"useIdentityAttributes":false,"validateAgainstAccountId":true,"validateAgainstAccountName":true,"sourceIds":["2c91808382ffee0b01830de154f14034","2c91808582ffee0c01830de36511405f"]}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createPasswordPolicyV1({ passwordpolicyv3dtoV1: passwordpolicyv3dtoV1 });
console.log(result);
```

[[Back to top]](#)

## delete-password-policy-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete password policy by id
This API deletes the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-password-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of password policy to delete. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordPoliciesV1Api(configuration);
const id: string = ff808081838d9e9d01838da6a03e0002; // The ID of password policy to delete.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deletePasswordPolicyV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-password-policy-by-id-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get password policy by id
This API returns the password policy for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-policy-by-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of password policy to retrieve. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Passwordpolicyv3dtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordPoliciesV1Api(configuration);
const id: string = ff808081838d9e9d01838da6a03e0005; // The ID of password policy to retrieve.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getPasswordPolicyByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-password-policies-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List password policies
This gets list of all Password Policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-password-policies-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<Passwordpolicyv3dtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordPoliciesV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listPasswordPoliciesV1({  });
console.log(result);
```

[[Back to top]](#)

## set-password-policy-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update password policy by id
This API updates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-password-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of password policy to update. |  [default to undefined]
**passwordpolicyv3dtoV1** | `Passwordpolicyv3dtoV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Passwordpolicyv3dtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordPoliciesV1Api(configuration);
const id: string = ff808081838d9e9d01838da6a03e0007; // The ID of password policy to update.
const passwordpolicyv3dtoV1: Passwordpolicyv3dtoV1 = {"description":"Password Policy after update.","id":"2c91808e7d976f3b017d9f5ceae440c8","name":"Improved Password Policy","dateCreated":1639056206564,"lastUpdated":1662385430753,"firstExpirationReminder":90,"accountIdMinWordLength":3,"accountNameMinWordLength":3,"maxLength":0,"maxRepeatedChars":4,"minAlpha":1,"minCharacterTypes":-1,"minLength":8,"minLower":0,"minNumeric":1,"minSpecial":0,"minUpper":0,"passwordExpiration":90,"defaultPolicy":false,"enablePasswdExpiration":false,"requireStrongAuthn":false,"requireStrongAuthOffNetwork":false,"requireStrongAuthUntrustedGeographies":false,"useAccountAttributes":false,"useDictionary":false,"useIdentityAttributes":false,"validateAgainstAccountId":true,"validateAgainstAccountName":true,"sourceIds":["2c91808382ffee0b01830de154f14034","2c91808582ffee0c01830de36511405f"]}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.setPasswordPolicyV1({ id: id, passwordpolicyv3dtoV1: passwordpolicyv3dtoV1 });
console.log(result);
```

[[Back to top]](#)

