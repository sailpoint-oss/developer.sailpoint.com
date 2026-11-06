# PublicIdentitiesConfig

# PublicIdentitiesConfigService
  Use this API to implement public identity configuration functionality. 
With this functionality in place, administrators can make up to 5 identity attributes publicly visible so other non-administrator users can see the relevant information they need to make decisions. 
This can be helpful for approvers making approvals, certification reviewers, managers viewing their direct reports&#39; access, and source owners viewing their tasks.

By default, non-administrators can select an identity and view the following attributes: email, lifecycle state, and manager. 
However, it may be helpful for a non-administrator reviewer to see other identity attributes like department, region, title, etc.
Administrators can use this API to make those necessary identity attributes public to non-administrators. 

For example, a non-administrator deciding whether to approve another identity&#39;s request for access to the Workday application, whose access may be restricted to members of the HR department, would want to know whether the identity is a member of the HR department. 
If an administrator has used [Update Public Identity Config](https://developer.sailpoint.com/docs/api/update-public-identity-config-v-1) to make the &quot;department&quot; attribute public, the approver can see the department and make a decision without requesting any more information.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-public-identity-config-v1**](#get-public-identity-config-v1) | **GET** `/public-identities-config/v1` | Get the public identities configuration
[**update-public-identity-config-v1**](#update-public-identity-config-v1) | **PUT** `/public-identities-config/v1` | Update the public identities configuration


## get-public-identity-config-v1
Get the public identities configuration
Returns the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/get-public-identity-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPublicIdentityConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<PublicIdentityConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PublicIdentitiesConfigService } from '@sailpoint/angular-sdk/public_identities_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PublicIdentitiesConfigService);

  getPublicIdentityConfigV1(): void {
    this.api.getPublicIdentityConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-public-identity-config-v1
Update the public identities configuration
Updates the publicly visible attributes of an identity available to request approvers for Access Requests and Certification Campaigns.

[API Spec](https://developer.sailpoint.com/docs/api/update-public-identity-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdatePublicIdentityConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**publicIdentityConfig** | `PublicIdentityConfig` |  | 

### Return type

`Observable<PublicIdentityConfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PublicIdentitiesConfigService } from '@sailpoint/angular-sdk/public_identities_config';
import { PublicIdentityConfig } from '@sailpoint/angular-sdk/public_identities_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PublicIdentitiesConfigService);

  updatePublicIdentityConfigV1(): void {
    const publicIdentityConfig: PublicIdentityConfig = ; // 
    this.api.updatePublicIdentityConfigV1({ publicIdentityConfig: publicIdentityConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

