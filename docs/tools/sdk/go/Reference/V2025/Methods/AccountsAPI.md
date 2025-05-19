---
id: v2025-accounts
title: Accounts
pagination_label: Accounts
sidebar_label: Accounts
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accounts', 'V2025Accounts'] 
slug: /tools/sdk/go/v2025/methods/accounts
tags: ['SDK', 'Software Development Kit', 'Accounts', 'V2025Accounts']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-account**](#create-account) | **Post** `/accounts` | Create account
[**delete-account**](#delete-account) | **Delete** `/accounts/{id}` | Delete account
[**delete-account-async**](#delete-account-async) | **Post** `/accounts/{id}/remove` | Remove account
[**disable-account**](#disable-account) | **Post** `/accounts/{id}/disable` | Disable account
[**disable-account-for-identity**](#disable-account-for-identity) | **Post** `/identities-accounts/{id}/disable` | Disable idn account for identity
[**disable-accounts-for-identities**](#disable-accounts-for-identities) | **Post** `/identities-accounts/disable` | Disable idn accounts for identities
[**enable-account**](#enable-account) | **Post** `/accounts/{id}/enable` | Enable account
[**enable-account-for-identity**](#enable-account-for-identity) | **Post** `/identities-accounts/{id}/enable` | Enable idn account for identity
[**enable-accounts-for-identities**](#enable-accounts-for-identities) | **Post** `/identities-accounts/enable` | Enable idn accounts for identities
[**get-account**](#get-account) | **Get** `/accounts/{id}` | Account details
[**get-account-entitlements**](#get-account-entitlements) | **Get** `/accounts/{id}/entitlements` | Account entitlements
[**list-accounts**](#list-accounts) | **Get** `/accounts` | Accounts list
[**put-account**](#put-account) | **Put** `/accounts/{id}` | Update account
[**submit-reload-account**](#submit-reload-account) | **Post** `/accounts/{id}/reload` | Reload account
[**unlock-account**](#unlock-account) | **Post** `/accounts/{id}/unlock` | Unlock account
[**update-account**](#update-account) | **Patch** `/accounts/{id}` | Update account


## create-account
Create account
Submit an account creation task - the API then returns the task ID.  

You must include the `sourceId` where the account will be created in the `attributes` object.

This endpoint creates an account on the source record in your ISC tenant.
This is useful for Flat File (`DelimitedFile`) type sources because it allows you to aggregate new accounts without needing to import a new CSV file every time. 

However, if you use this endpoint to create an account for a Direct Connection type source, you must ensure that the account also exists on the target source. 
The endpoint doesn't actually provision the account on the target source, which means that if the account doesn't also exist on the target source, an aggregation between the source and your tenant will remove it from your tenant. 

By providing the account ID of an existing account in the request body, this API will function as a PATCH operation and update the account.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-account)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accountattributescreate := []byte(`{
          "attributes" : {
            "sourceId" : "34bfcbe116c9407464af37acbaf7a4dc",
            "city" : "Austin",
            "displayName" : "John Doe",
            "userName" : "jdoe",
            "sAMAccountName" : "jDoe",
            "mail" : "john.doe@sailpoint.com"
          }
        }`) // AccountAttributesCreate | 

    var accountAttributesCreate v2025.AccountAttributesCreate
    if err := json.Unmarshal(accountattributescreate, &accountAttributesCreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.CreateAccount(context.Background()).AccountAttributesCreate(accountAttributesCreate).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.CreateAccount(context.Background()).AccountAttributesCreate(accountAttributesCreate).Execute()
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
Delete account
Use this API to delete an account. 
This endpoint submits an account delete task and returns the task ID. 
This endpoint only deletes the account from IdentityNow, not the source itself, which can result in the account's returning with the next aggregation between the source and IdentityNow.  To avoid this scenario, it is recommended that you [disable accounts](https://developer.sailpoint.com/idn/api/v3/disable-account) rather than delete them. This will also allow you to reenable the accounts in the future. 
>**NOTE: You can only delete accounts from sources of the "DelimitedFile" type.**

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-account)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.DeleteAccount(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.DeleteAccount(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DeleteAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccount`: AccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DeleteAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-account-async
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Remove account
Use this endpoint to remove accounts from the system without provisioning changes to the source. Accounts that are removed could be re-created during the next aggregation.

This endpoint is good for:
* Removing accounts that no longer exist on the source.
* Removing accounts that won't be aggregated following updates to the source configuration.
* Forcing accounts to be re-created following the next aggregation to re-run account processing, support testing, etc.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-account-async)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountAsyncRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**TaskResultDto**](../models/task-result-dto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `c350d6aa4f104c61b062cb632421ad10` // string | The account id # string | The account id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.DeleteAccountAsync(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.DeleteAccountAsync(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DeleteAccountAsync``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountAsync`: TaskResultDto
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DeleteAccountAsync`: %v\n", resp)
}
```

[[Back to top]](#)

## disable-account
Disable account
This API submits a task to disable the account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/v2025/disable-account)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The account id # string | The account id
    accounttogglerequest := []byte(`{
          "forceProvisioning" : false,
          "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581"
        }`) // AccountToggleRequest | 

    var accountToggleRequest v2025.AccountToggleRequest
    if err := json.Unmarshal(accounttogglerequest, &accountToggleRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.DisableAccount(context.Background(), id).AccountToggleRequest(accountToggleRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.DisableAccount(context.Background(), id).AccountToggleRequest(accountToggleRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DisableAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableAccount`: AccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DisableAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## disable-account-for-identity
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Disable idn account for identity
This API submits a task to disable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/disable-account-for-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDisableAccountForIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

**map[string]interface{}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808384203c2d018437e631158309` // string | The identity id. # string | The identity id.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.DisableAccountForIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.DisableAccountForIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DisableAccountForIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableAccountForIdentity`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DisableAccountForIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## disable-accounts-for-identities
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Disable idn accounts for identities
This API submits tasks to disable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/disable-accounts-for-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDisableAccountsForIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **identitiesAccountsBulkRequest** | [**IdentitiesAccountsBulkRequest**](../models/identities-accounts-bulk-request) |  | 

### Return type

[**[]BulkIdentitiesAccountsResponse**](../models/bulk-identities-accounts-response)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    identitiesaccountsbulkrequest := []byte(`{
          "identityIds" : [ "2c91808384203c2d018437e631158308", "2c9180858082150f0180893dbaf553fe" ]
        }`) // IdentitiesAccountsBulkRequest | 

    var identitiesAccountsBulkRequest v2025.IdentitiesAccountsBulkRequest
    if err := json.Unmarshal(identitiesaccountsbulkrequest, &identitiesAccountsBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.DisableAccountsForIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentitiesAccountsBulkRequest(identitiesAccountsBulkRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.DisableAccountsForIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentitiesAccountsBulkRequest(identitiesAccountsBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.DisableAccountsForIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DisableAccountsForIdentities`: []BulkIdentitiesAccountsResponse
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.DisableAccountsForIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## enable-account
Enable account
This API submits a task to enable account and returns the task ID.      

[API Spec](https://developer.sailpoint.com/docs/api/v2025/enable-account)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The account id # string | The account id
    accounttogglerequest := []byte(`{
          "forceProvisioning" : false,
          "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581"
        }`) // AccountToggleRequest | 

    var accountToggleRequest v2025.AccountToggleRequest
    if err := json.Unmarshal(accounttogglerequest, &accountToggleRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.EnableAccount(context.Background(), id).AccountToggleRequest(accountToggleRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.EnableAccount(context.Background(), id).AccountToggleRequest(accountToggleRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.EnableAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableAccount`: AccountsAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.EnableAccount`: %v\n", resp)
}
```

[[Back to top]](#)

## enable-account-for-identity
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Enable idn account for identity
This API submits a task to enable IDN account for a single identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/enable-account-for-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiEnableAccountForIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

**map[string]interface{}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808384203c2d018437e631158309` // string | The identity id. # string | The identity id.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.EnableAccountForIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.EnableAccountForIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.EnableAccountForIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableAccountForIdentity`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.EnableAccountForIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## enable-accounts-for-identities
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Enable idn accounts for identities
This API submits tasks to enable IDN account for each identity provided in the request body.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/enable-accounts-for-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiEnableAccountsForIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **identitiesAccountsBulkRequest** | [**IdentitiesAccountsBulkRequest**](../models/identities-accounts-bulk-request) |  | 

### Return type

[**[]BulkIdentitiesAccountsResponse**](../models/bulk-identities-accounts-response)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    identitiesaccountsbulkrequest := []byte(`{
          "identityIds" : [ "2c91808384203c2d018437e631158308", "2c9180858082150f0180893dbaf553fe" ]
        }`) // IdentitiesAccountsBulkRequest | 

    var identitiesAccountsBulkRequest v2025.IdentitiesAccountsBulkRequest
    if err := json.Unmarshal(identitiesaccountsbulkrequest, &identitiesAccountsBulkRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.EnableAccountsForIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentitiesAccountsBulkRequest(identitiesAccountsBulkRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.EnableAccountsForIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentitiesAccountsBulkRequest(identitiesAccountsBulkRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.EnableAccountsForIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `EnableAccountsForIdentities`: []BulkIdentitiesAccountsResponse
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.EnableAccountsForIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## get-account
Account details
Use this API to return the details for a single account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-account)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.GetAccount(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.GetAccount(context.Background(), id).Execute()
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
Account entitlements
This API returns entitlements of the account.      

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-account-entitlements)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The account id # string | The account id
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.GetAccountEntitlements(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.GetAccountEntitlements(context.Background(), id).Limit(limit).Offset(offset).Count(count).Execute()
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
Accounts list
List accounts. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-accounts)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    detailLevel := `FULL` // string | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior. (optional) # string | This value determines whether the API provides `SLIM` or increased level of detail (`FULL`) for each account in the returned list. `FULL` is the default behavior. (optional)
    filters := `identityId eq "2c9180858082150f0180893dbaf44201"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **identityId**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **hasEntitlements**: *eq*  **sourceId**: *eq, in, sw*  **uncorrelated**: *eq*  **entitlements**: *eq*  **origin**: *eq, in*  **manuallyCorrelated**: *eq*  **identity.name**: *eq, in, sw*  **identity.correlated**: *eq*  **identity.identityState**: *eq, in*  **source.displayableName**: *eq, in*  **source.authoritative**: *eq*  **source.connectionType**: *eq, in*  **recommendation.method**: *eq, in, isnull*  **created**: *eq, ge, gt, le, lt*  **modified**: *eq, ge, gt, le, lt* (optional)
    sorters := `id,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, sourceId, identityId, nativeIdentity, uuid, manuallyCorrelated, entitlements, origin, identity.name, identity.identityState, identity.correlated, source.displayableName, source.authoritative, source.connectionType** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.ListAccounts(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.ListAccounts(context.Background()).Limit(limit).Offset(offset).Count(count).DetailLevel(detailLevel).Filters(filters).Sorters(sorters).Execute()
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
Update account
Use this API to update an account with a PUT request. 

This endpoint submits an account update task and returns the task ID. 

>**Note: You can only use this PUT endpoint to update accounts from flat file sources.**


[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-account)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.
    accountattributes := []byte(`{
          "attributes" : {
            "city" : "Austin",
            "displayName" : "John Doe",
            "userName" : "jdoe",
            "sAMAccountName" : "jDoe",
            "mail" : "john.doe@sailpoint.com"
          }
        }`) // AccountAttributes | 

    var accountAttributes v2025.AccountAttributes
    if err := json.Unmarshal(accountattributes, &accountAttributes); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.PutAccount(context.Background(), id).AccountAttributes(accountAttributes).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.PutAccount(context.Background(), id).AccountAttributes(accountAttributes).Execute()
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
Reload account
This API asynchronously reloads the account directly from the connector and performs a one-time aggregation process.      

[API Spec](https://developer.sailpoint.com/docs/api/v2025/submit-reload-account)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The account id # string | The account id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.SubmitReloadAccount(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.SubmitReloadAccount(context.Background(), id).Execute()
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
Unlock account
This API submits a task to unlock an account and returns the task ID.  
To use this endpoint to unlock an account that has the `forceProvisioning` option set to true, the `idn:accounts-provisioning:manage` scope is required. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/unlock-account)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The account ID. # string | The account ID.
    accountunlockrequest := []byte(`{
          "forceProvisioning" : false,
          "externalVerificationId" : "3f9180835d2e5168015d32f890ca1581",
          "unlockIDNAccount" : false
        }`) // AccountUnlockRequest | 

    var accountUnlockRequest v2025.AccountUnlockRequest
    if err := json.Unmarshal(accountunlockrequest, &accountUnlockRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.UnlockAccount(context.Background(), id).AccountUnlockRequest(accountUnlockRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.UnlockAccount(context.Background(), id).AccountUnlockRequest(accountUnlockRequest).Execute()
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
Update account
Use this API to update account details. 

This API supports updating an account's correlation by modifying the `identityId` and `manuallyCorrelated` fields. 
To reassign an account from one identity to another, replace the current `identityId` with a new value. 
If the account you're assigning was provisioned by Identity Security Cloud (ISC), it's possible for ISC to create a new account 
for the previous identity as soon as the account is moved. If the account you're assigning is authoritative, 
this causes the previous identity to become uncorrelated and can even result in its deletion.
All accounts that are reassigned will be set to `manuallyCorrelated: true` unless you specify otherwise.

>**Note:** The `attributes` field can only be modified for flat file accounts. 


[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-account)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Account ID. # string | Account ID.
    requestbody := []byte(`[{op=remove, path=/identityId}]`) // []map[string]interface{} | A list of account update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var requestBody []v2025.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccountsAPI.UpdateAccount(context.Background(), id).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2025.AccountsAPI.UpdateAccount(context.Background(), id).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountsAPI.UpdateAccount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccount`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccountsAPI.UpdateAccount`: %v\n", resp)
}
```

[[Back to top]](#)

