---
id: v1-accounts
title: Accounts
pagination_label: Accounts
sidebar_label: Accounts
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Accounts', 'v1Accounts']
slug: /tools/sdk/typescript/accounts/methods/accounts
tags: ['SDK', 'Software Development Kit', 'Accounts', 'v1Accounts']
---

# AccountsV1Api
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

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


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accountattributescreateV1** | `AccountattributescreateV1` |  | 

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const accountattributescreateV1: AccountattributescreateV1 = ; // 
const result = await apiInstance.createAccountV1({ accountattributescreateV1: accountattributescreateV1 });
console.log(result);
```

[[Back to top]](#)

## delete-account-async-v1
Remove account
Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-account-async-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]

### Return type

`TaskresultdtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = c350d6aa4f104c61b062cb632421ad10; // The account id
const result = await apiInstance.deleteAccountAsyncV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-account-v1
Delete account
Use this API to delete an account. 
This endpoint submits an account delete task and returns the task ID. 
This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account's returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/idn/api/v3/disable-account) rather than delete them. This will also allow you to reenable the accounts in the future. 
>**NOTE: You can only delete accounts from sources of the "DelimitedFile" type.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Account ID.
const result = await apiInstance.deleteAccountV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## disable-account-for-identity-v1
Disable idn account for identity
This API submits a task to disable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/disable-account-for-identity-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id. |  [default to undefined]

### Return type

`object`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = 2c91808384203c2d018437e631158309; // The identity id.
const result = await apiInstance.disableAccountForIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## disable-account-v1
Disable account
This API submits a task to disable the account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/v1/disable-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]
**accounttogglerequestV1** | `AccounttogglerequestV1` |  | 

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The account id
const accounttogglerequestV1: AccounttogglerequestV1 = ; // 
const result = await apiInstance.disableAccountV1({ id: id, accounttogglerequestV1: accounttogglerequestV1 });
console.log(result);
```

[[Back to top]](#)

## disable-accounts-for-identities-v1
Disable idn accounts for identities
This API submits tasks to disable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/disable-accounts-for-identities-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identitiesaccountsbulkrequestV1** | `IdentitiesaccountsbulkrequestV1` |  | 

### Return type

`Array<BulkidentitiesaccountsresponseV1>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const identitiesaccountsbulkrequestV1: IdentitiesaccountsbulkrequestV1 = ; // 
const result = await apiInstance.disableAccountsForIdentitiesV1({ identitiesaccountsbulkrequestV1: identitiesaccountsbulkrequestV1 });
console.log(result);
```

[[Back to top]](#)

## enable-account-for-identity-v1
Enable idn account for identity
This API submits a task to enable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/enable-account-for-identity-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity id. |  [default to undefined]

### Return type

`object`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = 2c91808384203c2d018437e631158309; // The identity id.
const result = await apiInstance.enableAccountForIdentityV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## enable-account-v1
Enable account
This API submits a task to enable account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/v1/enable-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]
**accounttogglerequestV1** | `AccounttogglerequestV1` |  | 

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The account id
const accounttogglerequestV1: AccounttogglerequestV1 = ; // 
const result = await apiInstance.enableAccountV1({ id: id, accounttogglerequestV1: accounttogglerequestV1 });
console.log(result);
```

[[Back to top]](#)

## enable-accounts-for-identities-v1
Enable idn accounts for identities
This API submits tasks to enable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v1/enable-accounts-for-identities-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identitiesaccountsbulkrequestV1** | `IdentitiesaccountsbulkrequestV1` |  | 

### Return type

`Array<BulkidentitiesaccountsresponseV1>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const identitiesaccountsbulkrequestV1: IdentitiesaccountsbulkrequestV1 = ; // 
const result = await apiInstance.enableAccountsForIdentitiesV1({ identitiesaccountsbulkrequestV1: identitiesaccountsbulkrequestV1 });
console.log(result);
```

[[Back to top]](#)

## get-account-entitlements-v1
Account entitlements
This API returns entitlements of the account.      

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-entitlements-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<EntitlementV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The account id
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getAccountEntitlementsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-account-v1
Account details
Use this API to return the details for a single account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]

### Return type

`AccountV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Account ID.
const result = await apiInstance.getAccountV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-accounts-v1
Accounts list
List accounts. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-accounts-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**detailLevel** | `'SLIM' | 'FULL'` | This value determines whether the API provides &#x60;SLIM&#x60; or increased level of detail (&#x60;FULL&#x60;) for each account in the returned list. &#x60;FULL&#x60; is the default behavior. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** | [optional] [default to undefined]

### Return type

`Array<AccountV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const detailLevel: string = FULL; // This value determines whether the API provides &#x60;SLIM&#x60; or increased level of detail (&#x60;FULL&#x60;) for each account in the returned list. &#x60;FULL&#x60; is the default behavior. (optional)
const filters: string = identityId eq "2c9180858082150f0180893dbaf44201"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* (optional)
const sorters: string = id,name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** (optional)
const result = await apiInstance.listAccountsV1({  });
console.log(result);
```

[[Back to top]](#)

## put-account-v1
Update account
Use this API to update an account with a PUT request. 

This endpoint submits an account update task and returns the task ID. 

>**Note: You can only use this PUT endpoint to update accounts from flat file sources.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**accountattributesV1** | `AccountattributesV1` |  | 

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Account ID.
const accountattributesV1: AccountattributesV1 = ; // 
const result = await apiInstance.putAccountV1({ id: id, accountattributesV1: accountattributesV1 });
console.log(result);
```

[[Back to top]](#)

## submit-reload-account-v1
Reload account
This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.      

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-reload-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account id |  [default to undefined]

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The account id
const result = await apiInstance.submitReloadAccountV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## unlock-account-v1
Unlock account
This API submits a task to unlock an account and returns the task ID.  
To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/unlock-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account ID. |  [default to undefined]
**accountunlockrequestV1** | `AccountunlockrequestV1` |  | 

### Return type

`AccountsasyncresultV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The account ID.
const accountunlockrequestV1: AccountunlockrequestV1 = ; // 
const result = await apiInstance.unlockAccountV1({ id: id, accountunlockrequestV1: accountunlockrequestV1 });
console.log(result);
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**requestBody** | `Array<object>` | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AccountsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Account ID.
const requestBody: Array&lt;object&gt; = [{"op":"remove","path":"/identityId"}]; // A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const result = await apiInstance.updateAccountV1({ id: id, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

