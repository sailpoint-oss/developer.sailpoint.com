# Accounts

# AccountsService
  Use this API to implement and customize account functionality.
With this functionality in place, administrators can manage users&#39; access across sources in Identity Security Cloud. 

In Identity Security Cloud, an account refers to a user&#39;s account on a supported source.
This typically includes a unique identifier for the user, a unique password, a set of permissions associated with the source and a set of attributes. Identity Security Cloud loads accounts through the creation of sources in Identity Security Cloud.

Administrators can correlate users&#39; identities with the users&#39; accounts on the different sources they use. 
This allows Identity Security Cloud to govern the access of identities and all their correlated accounts securely and cohesively. 

To view the accounts on a source and their correlated identities, administrators can use the Connections drop-down menu, select Sources, select the relevant source, and select its Account tab. 

To view and edit source account statuses for an identity in Identity Security Cloud, administrators can use the Identities drop-down menu, select Identity List, select the relevant identity, and select its Accounts tab. 
Administrators can toggle an account&#39;s Actions to aggregate the account, enable/disable it, unlock it, or remove it from the identity. 

Accounts can have the following statuses: 

- Enabled: The account is enabled. The user can access it.

- Disabled: The account is disabled, and the user cannot access it, but the identity is not disabled in Identity Security Cloud. This can occur when an administrator disables the account or when the user&#39;s lifecycle state changes. 

- Locked: The account is locked. This may occur when someone has entered an incorrect password for the account too many times.

- Pending: The account is currently updating. This status typically lasts seconds. 

Administrators can select the source account to view its attributes, entitlements, and the last time the account&#39;s password was changed.

Refer to [Managing User Accounts](https://documentation.sailpoint.com/saas/help/accounts/identities.html?h&#x3D;disabling+identities#managing-access) for more information about accounts.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-account-v1**](#create-account-v1) | **POST** `/accounts/v1` | Create account
[**delete-account-async-v1**](#delete-account-async-v1) | **POST** `/accounts/v1/{id}/remove` | Remove account
[**delete-account-v1**](#delete-account-v1) | **DELETE** `/accounts/v1/{id}` | Delete account
[**disable-account-for-identity-v1**](#disable-account-for-identity-v1) | **POST** `/identities-accounts/v1/{id}/disable` | Disable idn account for identity
[**disable-account-v1**](#disable-account-v1) | **POST** `/accounts/v1/{id}/disable` | Disable account
[**disable-accounts-for-identities-v1**](#disable-accounts-for-identities-v1) | **POST** `/identities-accounts/v1/disable` | Disable idn accounts for identities
[**enable-account-for-identity-v1**](#enable-account-for-identity-v1) | **POST** `/identities-accounts/v1/{id}/enable` | Enable idn account for identity
[**enable-account-v1**](#enable-account-v1) | **POST** `/accounts/v1/{id}/enable` | Enable account
[**enable-accounts-for-identities-v1**](#enable-accounts-for-identities-v1) | **POST** `/identities-accounts/v1/enable` | Enable idn accounts for identities
[**get-account-entitlements-v1**](#get-account-entitlements-v1) | **GET** `/accounts/v1/{id}/entitlements` | Account entitlements
[**get-account-v1**](#get-account-v1) | **GET** `/accounts/v1/{id}` | Account details
[**list-accounts-v1**](#list-accounts-v1) | **GET** `/accounts/v1` | Accounts list
[**put-account-v1**](#put-account-v1) | **PUT** `/accounts/v1/{id}` | Update account
[**submit-reload-account-v1**](#submit-reload-account-v1) | **POST** `/accounts/v1/{id}/reload` | Reload account
[**unlock-account-v1**](#unlock-account-v1) | **POST** `/accounts/v1/{id}/unlock` | Unlock account
[**update-account-v1**](#update-account-v1) | **PATCH** `/accounts/v1/{id}` | Update account


## create-account-v1
Create account
Submit an account creation task - the API then returns the task ID.  

You must include the `sourceId` where the account will be created in the `attributes` object.

This endpoint creates an account on the source record in your ISC tenant.
This is useful for Flat File (`DelimitedFile`) type sources because it allows you to aggregate new accounts without needing to import a new CSV file every time. 

However, if you use this endpoint to create an account for a Direct Connection type source, you must ensure that the account also exists on the target source. 
The endpoint doesn't actually provision the account on the target source, which means that if the account doesn't also exist on the target source, an aggregation between the source and your tenant will remove it from your tenant. 

By providing the account ID of an existing account in the request body, this API will function as a PATCH operation and update the account.


[API Spec](https://developer.sailpoint.com/docs/api/create-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accountAttributesCreate** | `AccountAttributesCreate` |  | 

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { AccountAttributesCreate } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  createAccountV1(): void {
    const accountAttributesCreate: AccountAttributesCreate = ; // 
    this.api.createAccountV1({ accountAttributesCreate: accountAttributesCreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-account-async-v1
Remove account
Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/delete-account-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteAccountAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]

### Return type

`Observable<TaskResultDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  deleteAccountAsyncV1(): void {
    const id: string = ; // The account id
    this.api.deleteAccountAsyncV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-account-v1
Delete account
Use this API to delete an account. 
This endpoint submits an account delete task and returns the task ID. 
This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account's returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/docs/api/disable-account-v-1) rather than delete them. This will also allow you to reenable the accounts in the future. 
>**NOTE: You can only delete accounts from sources of the "DelimitedFile" type.**

[API Spec](https://developer.sailpoint.com/docs/api/delete-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  deleteAccountV1(): void {
    const id: string = ; // Account ID.
    this.api.deleteAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## disable-account-for-identity-v1
Disable idn account for identity
This API submits a task to disable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/disable-account-for-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DisableAccountForIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id. |  [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  disableAccountForIdentityV1(): void {
    const id: string = ; // The identity id.
    this.api.disableAccountForIdentityV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## disable-account-v1
Disable account
This API submits a task to disable the account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/disable-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DisableAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]
**accountToggleRequest** | `AccountToggleRequest` |  | 

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { AccountToggleRequest } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  disableAccountV1(): void {
    const id: string = ; // The account id
    const accountToggleRequest: AccountToggleRequest = ; // 
    this.api.disableAccountV1({ id: id, accountToggleRequest: accountToggleRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## disable-accounts-for-identities-v1
Disable idn accounts for identities
This API submits tasks to disable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/disable-accounts-for-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DisableAccountsForIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identitiesAccountsBulkRequest** | `IdentitiesAccountsBulkRequest` |  | 

### Return type

`Observable<Array<BulkIdentitiesAccountsResponse>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { IdentitiesAccountsBulkRequest } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  disableAccountsForIdentitiesV1(): void {
    const identitiesAccountsBulkRequest: IdentitiesAccountsBulkRequest = ; // 
    this.api.disableAccountsForIdentitiesV1({ identitiesAccountsBulkRequest: identitiesAccountsBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## enable-account-for-identity-v1
Enable idn account for identity
This API submits a task to enable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/enable-account-for-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `EnableAccountForIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id. |  [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  enableAccountForIdentityV1(): void {
    const id: string = ; // The identity id.
    this.api.enableAccountForIdentityV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## enable-account-v1
Enable account
This API submits a task to enable account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/enable-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `EnableAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]
**accountToggleRequest** | `AccountToggleRequest` |  | 

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { AccountToggleRequest } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  enableAccountV1(): void {
    const id: string = ; // The account id
    const accountToggleRequest: AccountToggleRequest = ; // 
    this.api.enableAccountV1({ id: id, accountToggleRequest: accountToggleRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## enable-accounts-for-identities-v1
Enable idn accounts for identities
This API submits tasks to enable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/enable-accounts-for-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `EnableAccountsForIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identitiesAccountsBulkRequest** | `IdentitiesAccountsBulkRequest` |  | 

### Return type

`Observable<Array<BulkIdentitiesAccountsResponse>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { IdentitiesAccountsBulkRequest } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  enableAccountsForIdentitiesV1(): void {
    const identitiesAccountsBulkRequest: IdentitiesAccountsBulkRequest = ; // 
    this.api.enableAccountsForIdentitiesV1({ identitiesAccountsBulkRequest: identitiesAccountsBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-account-entitlements-v1
Account entitlements
This API returns entitlements of the account.      

[API Spec](https://developer.sailpoint.com/docs/api/get-account-entitlements-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccountEntitlementsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<Entitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  getAccountEntitlementsV1(): void {
    const id: string = ; // The account id
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getAccountEntitlementsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-account-v1
Account details
Use this API to return the details for a single account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/get-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]

### Return type

`Observable<Account>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  getAccountV1(): void {
    const id: string = ; // Account ID.
    this.api.getAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-accounts-v1
Accounts list
List accounts. 

[API Spec](https://developer.sailpoint.com/docs/api/list-accounts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAccountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**detailLevel** | `'SLIM' | 'FULL'` | This value determines whether the API provides &#x60;SLIM&#x60; or increased level of detail (&#x60;FULL&#x60;) for each account in the returned list. &#x60;FULL&#x60; is the default behavior. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** | [optional] [default to undefined]

### Return type

`Observable<Array<Account>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  listAccountsV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const detailLevel: string = ; // This value determines whether the API provides &#x60;SLIM&#x60; or increased level of detail (&#x60;FULL&#x60;) for each account in the returned list. &#x60;FULL&#x60; is the default behavior. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** (optional)
    this.api.listAccountsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-account-v1
Update account
Use this API to update an account with a PUT request. 

This endpoint submits an account update task and returns the task ID. 

>**Note: You can only use this PUT endpoint to update accounts from flat file sources.**


[API Spec](https://developer.sailpoint.com/docs/api/put-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**accountAttributes** | `AccountAttributes` |  | 

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { AccountAttributes } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  putAccountV1(): void {
    const id: string = ; // Account ID.
    const accountAttributes: AccountAttributes = ; // 
    this.api.putAccountV1({ id: id, accountAttributes: accountAttributes }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## submit-reload-account-v1
Reload account
This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.      

[API Spec](https://developer.sailpoint.com/docs/api/submit-reload-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SubmitReloadAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  submitReloadAccountV1(): void {
    const id: string = ; // The account id
    this.api.submitReloadAccountV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## unlock-account-v1
Unlock account
This API submits a task to unlock an account and returns the task ID.  
To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required. 

[API Spec](https://developer.sailpoint.com/docs/api/unlock-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UnlockAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account ID. |  [default to undefined]
**accountUnlockRequest** | `AccountUnlockRequest` |  | 

### Return type

`Observable<AccountsAsyncResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';
import { AccountUnlockRequest } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  unlockAccountV1(): void {
    const id: string = ; // The account ID.
    const accountUnlockRequest: AccountUnlockRequest = ; // 
    this.api.unlockAccountV1({ id: id, accountUnlockRequest: accountUnlockRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-account-v1
Update account
Use this API to update account details. 

This API supports updating an account's correlation by modifying the `identityId` and `manuallyCorrelated` fields. 
To reassign an account from one identity to another, replace the current `identityId` with a new value. 
If the account you're assigning was provisioned by Identity Security Cloud (ISC), it's possible for ISC to create a new account 
for the previous identity as soon as the account is moved. If the account you're assigning is authoritative, 
this causes the previous identity to become uncorrelated and can even result in its deletion.
All accounts that are reassigned will be set to `manuallyCorrelated: true` unless you specify otherwise.

>**Note:** The `attributes` field can only be modified for flat file accounts. 


[API Spec](https://developer.sailpoint.com/docs/api/update-account-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateAccountV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**requestBody** | `Array<object>` | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccountsService } from '@sailpoint/angular-sdk/accounts';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccountsService);

  updateAccountV1(): void {
    const id: string = ; // Account ID.
    const requestBody: Array<object> = ; // A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    this.api.updateAccountV1({ id: id, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

