# PasswordManagement

# PasswordManagementService
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
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

[API Spec](https://developer.sailpoint.com/docs/api/create-digit-token-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateDigitTokenV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordDigitTokenReset** | `PasswordDigitTokenReset` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<PasswordDigitToken>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordManagementService } from '@sailpoint/angular-sdk/password_management';
import { PasswordDigitTokenReset } from '@sailpoint/angular-sdk/password_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordManagementService);

  createDigitTokenV1(): void {
    const passwordDigitTokenReset: PasswordDigitTokenReset = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createDigitTokenV1({ passwordDigitTokenReset: passwordDigitTokenReset }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-password-change-status-v1
Get password change request status
This API returns the status of a password change request.

[API Spec](https://developer.sailpoint.com/docs/api/get-password-change-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPasswordChangeStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Password change request ID |  [default to undefined]

### Return type

`Observable<PasswordStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordManagementService } from '@sailpoint/angular-sdk/password_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordManagementService);

  getPasswordChangeStatusV1(): void {
    const id: string = ; // Password change request ID
    this.api.getPasswordChangeStatusV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## query-password-info-v1
Query password info
This API is used to query password related information. 


[API Spec](https://developer.sailpoint.com/docs/api/query-password-info-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `QueryPasswordInfoV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordInfoQueryDTO** | `PasswordInfoQueryDTO` |  | 

### Return type

`Observable<PasswordInfo>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordManagementService } from '@sailpoint/angular-sdk/password_management';
import { PasswordInfoQueryDTO } from '@sailpoint/angular-sdk/password_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordManagementService);

  queryPasswordInfoV1(): void {
    const passwordInfoQueryDTO: PasswordInfoQueryDTO = ; // 
    this.api.queryPasswordInfoV1({ passwordInfoQueryDTO: passwordInfoQueryDTO }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-password-v1
Set identity\'s password
This API is used to set a password for an identity. 

An identity can change their own password (as well as any of their accounts' passwords) if they use a token generated by their ISC user, such as a [personal access token](https://developer.sailpoint.com/idn/api/authentication#personal-access-tokens) or ["authorization_code" derived OAuth token](https://developer.sailpoint.com/idn/api/authentication#authorization-code-grant-flow).

>**Note: If you want to set an identity's source account password, you must enable `PASSWORD` as one of the source's features. You can use the [PATCH Source endpoint](https://developer.sailpoint.com/docs/api/update-source-v-1) to add the `PASSWORD` feature.**

To generate the encryptedPassword (RSA encrypted using publicKey) for the request body, run the following command:

```bash
echo -n "myPassword" | openssl pkeyutl -encrypt -inkey public_key.pem -pubin | base64
```

In this example, myPassword is the plain text password being set and encrypted, and public_key.pem is the path to the public key file. You can retrieve the required publicKey, along with other information like identityId, sourceId, publicKeyId, accounts, and policies, using the Query Password Info endpoint.

To successfully run this command, you must have OpenSSL installed on your machine. If OpenSSL is unavailable, consider using the Virtual Appliance (VA), which has OpenSSL pre-installed and configured.

If you are using a Windows machine, refer to this [guide](https://tecadmin.net/install-openssl-on-windows/) for instructions on installing OpenSSL.

You can then use [Get Password Change Request Status](https://developer.sailpoint.com/docs/api/get-password-change-status-v-1) to check the password change request status. To do so, you must provide the `requestId` from your earlier request to set the password. 


[API Spec](https://developer.sailpoint.com/docs/api/set-password-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetPasswordV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordChangeRequest** | `PasswordChangeRequest` |  | 

### Return type

`Observable<PasswordChangeResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordManagementService } from '@sailpoint/angular-sdk/password_management';
import { PasswordChangeRequest } from '@sailpoint/angular-sdk/password_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordManagementService);

  setPasswordV1(): void {
    const passwordChangeRequest: PasswordChangeRequest = ; // 
    this.api.setPasswordV1({ passwordChangeRequest: passwordChangeRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

