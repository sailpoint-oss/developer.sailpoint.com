# PasswordConfiguration

# PasswordConfigurationService
  Use this API to implement organization password configuration functionality. 
With this functionality in place, organization administrators can create organization-specific password configurations. 

These configurations include details like custom password instructions, as well as digit token length and duration. 

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

[API Spec](https://developer.sailpoint.com/docs/api/create-password-org-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreatePasswordOrgConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordOrgConfig** | `PasswordOrgConfig` |  | 

### Return type

`Observable<PasswordOrgConfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordConfigurationService } from '@sailpoint/angular-sdk/password_configuration';
import { PasswordOrgConfig } from '@sailpoint/angular-sdk/password_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordConfigurationService);

  createPasswordOrgConfigV1(): void {
    const passwordOrgConfig: PasswordOrgConfig = ; // 
    this.api.createPasswordOrgConfigV1({ passwordOrgConfig: passwordOrgConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-password-org-config-v1
Get password org config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/get-password-org-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPasswordOrgConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<PasswordOrgConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordConfigurationService } from '@sailpoint/angular-sdk/password_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordConfigurationService);

  getPasswordOrgConfigV1(): void {
    this.api.getPasswordOrgConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-password-org-config-v1
Update password org config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/put-password-org-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutPasswordOrgConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**passwordOrgConfig** | `PasswordOrgConfig` |  | 

### Return type

`Observable<PasswordOrgConfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PasswordConfigurationService } from '@sailpoint/angular-sdk/password_configuration';
import { PasswordOrgConfig } from '@sailpoint/angular-sdk/password_configuration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PasswordConfigurationService);

  putPasswordOrgConfigV1(): void {
    const passwordOrgConfig: PasswordOrgConfig = ; // 
    this.api.putPasswordOrgConfigV1({ passwordOrgConfig: passwordOrgConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

