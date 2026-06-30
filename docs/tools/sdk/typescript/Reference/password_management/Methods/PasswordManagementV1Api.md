---
id: v1-password-management
title: PasswordManagement
pagination_label: PasswordManagement
sidebar_label: PasswordManagement
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'PasswordManagement', 'v1PasswordManagement']
slug: /tools/sdk/typescript/password_management/methods/password-management
tags: ['SDK', 'Software Development Kit', 'PasswordManagement', 'v1PasswordManagement']
---

# PasswordManagementV1Api
  Use this API to implement password management functionality.  
With this functionality in place, users can manage their identity passwords for all their applications.

In Identity Security Cloud, users can select their names in the upper right corner of the page and use the drop-down menu to select Password Manager. 
Password Manager lists the user&#39;s identity&#39;s applications, possibly grouped to share passwords. 
Users can then select &#39;Change Password&#39; to update their passwords. 

Grouping passwords allows users to update their passwords more broadly, rather than requiring them to update each password individually. 
Password Manager may list the applications and sources in the following groups:

- Password Group: This refers to a group of applications that share a password. 
For example, a user can use the same password for Google Drive, Google Mail, and YouTube. 
Updating the password for the password group updates the password for all its included applications.

- Multi-Application Source: This refers to a source with multiple applications that share a password. 
For example, a user can have a source, G Suite, that includes the Google Calendar, Google Drive, and Google Mail applications. 
Updating the password for the multi-application source updates the password for all its included applications. 

- Applications: These are applications that do not share passwords with other applications.

An organization may require some authentication for users to update their passwords. 
Users may be required to answer security questions or use a third-party authenticator before they can confirm their updates. 

Refer to [Managing Passwords](https://documentation.sailpoint.com/saas/user-help/accounts/passwords.html) for more information about password management.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-digit-token-v1**](#create-digit-token-v1) | **POST** `/generate-password-reset-token/v1/digit` | Generate a digit token
[**get-password-change-status-v1**](#get-password-change-status-v1) | **GET** `/password-change-status/v1/{id}` | Get password change request status
[**query-password-info-v1**](#query-password-info-v1) | **POST** `/query-password-info/v1` | Query password info
[**set-password-v1**](#set-password-v1) | **POST** `/set-password/v1` | Set identity\&#39;s password


## create-digit-token-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generate a digit token
This API is used to generate a digit token for password management. Requires authorization scope of "idn:password-digit-token:create".

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-digit-token-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passworddigittokenresetV1** | `PassworddigittokenresetV1` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`PassworddigittokenV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordManagementV1Api(configuration);
const passworddigittokenresetV1: PassworddigittokenresetV1 = {"userId":"Abby.Smith","length":8,"durationMinutes":5}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createDigitTokenV1({ passworddigittokenresetV1: passworddigittokenresetV1 });
console.log(result);
```

[[Back to top]](#)

## get-password-change-status-v1
Get password change request status
This API returns the status of a password change request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-change-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Password change request ID |  [default to undefined]

### Return type

`PasswordstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { PasswordManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordManagementV1Api(configuration);
const id: string = 089899f13a8f4da7824996191587bab9; // Password change request ID
const result = await apiInstance.getPasswordChangeStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## query-password-info-v1
Query password info
This API is used to query password related information. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/query-password-info-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordinfoquerydtoV1** | `PasswordinfoquerydtoV1` |  | 

### Return type

`PasswordinfoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordManagementV1Api(configuration);
const passwordinfoquerydtoV1: PasswordinfoquerydtoV1 = ; // 
const result = await apiInstance.queryPasswordInfoV1({ passwordinfoquerydtoV1: passwordinfoquerydtoV1 });
console.log(result);
```

[[Back to top]](#)

## set-password-v1
Set identity\'s password
This API is used to set a password for an identity. 

An identity can change their own password (as well as any of their accounts' passwords) if they use a token generated by their ISC user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or ["authorization_code" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).

>**Note: If you want to set an identity's source account password, you must enable `PASSWORD` as one of the source's features. You can use the [PATCH Source endpoint](https://developer.sailpoint.com/docs/api/v3/update-source) to add the `PASSWORD` feature.**

To generate the encryptedPassword (RSA encrypted using publicKey) for the request body, run the following command:

```bash
echo -n "myPassword" | openssl pkeyutl -encrypt -inkey public_key.pem -pubin | base64
```

In this example, myPassword is the plain text password being set and encrypted, and public_key.pem is the path to the public key file. You can retrieve the required publicKey, along with other information like identityId, sourceId, publicKeyId, accounts, and policies, using the Query Password Info endpoint.

To successfully run this command, you must have OpenSSL installed on your machine. If OpenSSL is unavailable, consider using the Virtual Appliance (VA), which has OpenSSL pre-installed and configured.

If you are using a Windows machine, refer to this [guide](https://tecadmin.net/install-openssl-on-windows/) for instructions on installing OpenSSL.

You can then use [Get Password Change Request Status](https://developer.sailpoint.com/idn/api/v3/get-password-change-status) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password. 


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-password-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordchangerequestV1** | `PasswordchangerequestV1` |  | 

### Return type

`PasswordchangeresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { PasswordManagementV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new PasswordManagementV1Api(configuration);
const passwordchangerequestV1: PasswordchangerequestV1 = ; // 
const result = await apiInstance.setPasswordV1({ passwordchangerequestV1: passwordchangerequestV1 });
console.log(result);
```

[[Back to top]](#)

