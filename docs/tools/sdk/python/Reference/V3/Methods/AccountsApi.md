---
id: accounts
title: Accounts
pagination_label: Accounts
sidebar_label: Accounts
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accounts', 'Accounts'] 
slug: /tools/sdk/go/v3/methods/accounts
tags: ['SDK', 'Software Development Kit', 'Accounts', 'Accounts']
---

# AccountsAPI
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

Refer to [Managing User Accounts](https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts) for more information about accounts.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-account**](#create-account) | **Post** `/accounts` | Create Account
[**delete-account**](#delete-account) | **Delete** `/accounts/{id}` | Delete Account
[**disable-account**](#disable-account) | **Post** `/accounts/{id}/disable` | Disable Account
[**enable-account**](#enable-account) | **Post** `/accounts/{id}/enable` | Enable Account
[**get-account**](#get-account) | **Get** `/accounts/{id}` | Account Details
[**get-account-entitlements**](#get-account-entitlements) | **Get** `/accounts/{id}/entitlements` | Account Entitlements
[**list-accounts**](#list-accounts) | **Get** `/accounts` | Accounts List
[**put-account**](#put-account) | **Put** `/accounts/{id}` | Update Account
[**submit-reload-account**](#submit-reload-account) | **Post** `/accounts/{id}/reload` | Reload Account
[**unlock-account**](#unlock-account) | **Post** `/accounts/{id}/unlock` | Unlock Account
[**update-account**](#update-account) | **Patch** `/accounts/{id}` | Update Account


## create-account
Create Account
Submit an account creation task - the API then returns the task ID.  

You must include the `sourceId` where the account will be created in the `attributes` object.

This endpoint creates an account on the source record in your ISC tenant.
This is useful for Flat File (`DelimitedFile`) type sources because it allows you to aggregate new accounts without needing to import a new CSV file every time. 

However, if you use this endpoint to create an account for a Direct Connection type source, you must ensure that the account also exists on the target source. 
The endpoint doesn't actually provision the account on the target source, which means that if the account doesn't also exist on the target source, an aggregation between the source and your tenant will remove it from your tenant. 

By providing the account ID of an existing account in the request body, this API will function as a PATCH operation and update the account.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-account)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accountAttributesCreate** | [**AccountAttributesCreate**](../models/account-attributes-create) |  | 

### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accountAttributesCreate := fmt.Sprintf(`{
          "attributes" : {
            "sourceId" : "34bfcbe116c9407464af37acbaf7a4dc",
            "city" : "Austin",
            "displayName" : "John Doe",
            "userName" : "jdoe",
            "sAMAccountName" : "jDoe",
            "mail" : "john.doe@sailpoint.com"
          }
        }`) # AccountAttributesCreate | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.CreateAccount(context.Background()).AccountAttributesCreate(accountAttributesCreate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.CreateAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.CreateAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-account
Delete Account
Use this API to delete an account. 
This endpoint submits an account delete task and returns the task ID. 
This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account's returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/idn/api/v3/disable-account) rather than delete them. This will also allow you to reenable the accounts in the future. 
>**NOTE: You can only delete accounts from sources of the "DelimitedFile" type.**

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | Account ID. # string | Account ID.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.DeleteAccount(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DeleteAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DeleteAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DeleteAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## disable-account
Disable Account
This API submits a task to disable the account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/v3/disable-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisableAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **accountToggleRequest** | [**AccountToggleRequest**](../models/account-toggle-request) |  | 

### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The account id # string | The account id
    accountToggleRequest := fmt.Sprintf(`{
          "forceProvisioning" : false,
          "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581"
        }`) # AccountToggleRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.DisableAccount(context.Background(), id).AccountToggleRequest(accountToggleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DisableAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DisableAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DisableAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## enable-account
Enable Account
This API submits a task to enable account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/v3/enable-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account id | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnableAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **accountToggleRequest** | [**AccountToggleRequest**](../models/account-toggle-request) |  | 

### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The account id # string | The account id
    accountToggleRequest := fmt.Sprintf(`{
          "forceProvisioning" : false,
          "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581"
        }`) # AccountToggleRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.EnableAccount(context.Background(), id).AccountToggleRequest(accountToggleRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.EnableAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `EnableAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.EnableAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## get-account
Account Details
Use this API to return the details for a single account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Account**](../models/account)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | Account ID. # string | Account ID.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.GetAccount(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.GetAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccount`: Account
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.GetAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## get-account-entitlements
Account Entitlements
This API returns entitlements of the account.      

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-account-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Entitlement**](../models/entitlement)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The account id # string | The account id
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.GetAccountEntitlements(context.Background(), id).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.GetAccountEntitlements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccountEntitlements`: []Entitlement
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.GetAccountEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## list-accounts
Accounts List
List accounts. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-accounts)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **detailLevel** | **string** | This value determines whether the API provides &#x60;SLIM&#x60; or increased level of detail (&#x60;FULL&#x60;) for each account in the returned list. &#x60;FULL&#x60; is the default behavior. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** | 

### Return type

[**[]Account**](../models/account)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    detailLevel := FULL # string | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior. (optional) # string | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior. (optional)
    filters := identityId eq "2c9180858082150f0180893dbaf44201" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* (optional)
    sorters := id,name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.ListAccounts(context.Background()).Limit(limit).Offset(offset).Count(count).DetailLevel(detailLevel).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.ListAccounts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAccounts`: []Account
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.ListAccounts`: %v\n", resp)
}
```

[[Back to top]](#)

## put-account
Update Account
Use this API to update an account with a PUT request. 

This endpoint submits an account update task and returns the task ID. 

>**Note: You can only use this PUT endpoint to update accounts from flat file sources.**


[API Spec](https://developer.sailpoint.com/docs/api/v3/put-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **accountAttributes** | [**AccountAttributes**](../models/account-attributes) |  | 

### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | Account ID. # string | Account ID.
    accountAttributes := fmt.Sprintf(`{
          "attributes" : {
            "city" : "Austin",
            "displayName" : "John Doe",
            "userName" : "jdoe",
            "sAMAccountName" : "jDoe",
            "mail" : "john.doe@sailpoint.com"
          }
        }`) # AccountAttributes | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.PutAccount(context.Background(), id).AccountAttributes(accountAttributes).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.PutAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.PutAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-reload-account
Reload Account
This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.      

[API Spec](https://developer.sailpoint.com/docs/api/v3/submit-reload-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account id | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitReloadAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The account id # string | The account id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.SubmitReloadAccount(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.SubmitReloadAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SubmitReloadAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.SubmitReloadAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## unlock-account
Unlock Account
This API submits a task to unlock an account and returns the task ID.  
To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required. 

[API Spec](https://developer.sailpoint.com/docs/api/v3/unlock-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnlockAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **accountUnlockRequest** | [**AccountUnlockRequest**](../models/account-unlock-request) |  | 

### Return type

[**AccountsAsyncResult**](../models/accounts-async-result)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The account ID. # string | The account ID.
    accountUnlockRequest := fmt.Sprintf(`{
          "forceProvisioning" : false,
          "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581",
          "unlockIDNAccount" : false
        }`) # AccountUnlockRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.UnlockAccount(context.Background(), id).AccountUnlockRequest(accountUnlockRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.UnlockAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UnlockAccount`: AccountsAsyncResult
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.UnlockAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## update-account
Update Account
Use this API to update account details. 

This API supports updating an account's correlation by modifying the `identityId` and `manuallyCorrelated` fields. 
To reassign an account from one identity to another, replace the current `identityId` with a new value. 
If the account you're assigning was provisioned by Identity Security Cloud (ISC), it's possible for ISC to create a new account 
for the previous identity as soon as the account is moved. If the account you're assigning is authoritative, 
this causes the previous identity to become uncorrelated and can even result in its deletion.
All accounts that are reassigned will be set to `manuallyCorrelated: true` unless you specify otherwise.

>**Note:** The `attributes` field can only be modified for flat file accounts. 


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-account)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **[]map[string]interface{}** | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

**map[string]interface{}**

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | Account ID. # string | Account ID.
    requestBody := fmt.Sprintf(`[{op=remove, path=/identityId}]`) # []map[string]interface{} | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.AccountsAPI.UpdateAccount(context.Background(), id).RequestBody(requestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.UpdateAccount``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateAccount`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.UpdateAccount`: %v\n", resp)
}
```

[[Back to top]](#)

