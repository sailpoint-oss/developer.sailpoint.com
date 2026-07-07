---
id: v1-password-sync-groups
title: PasswordSyncGroups
pagination_label: PasswordSyncGroups
sidebar_label: PasswordSyncGroups
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordSyncGroups', 'V1PasswordSyncGroups'] 
slug: /tools/sdk/go/passwordsyncgroups/methods/password-sync-groups
tags: ['SDK', 'Software Development Kit', 'PasswordSyncGroups', 'V1PasswordSyncGroups']
---

# PasswordSyncGroupsAPI
  Use this API to implement password sync group functionality. 
With this functionality in place, administrators can group sources into password sync groups so that all their applications share the same password. 
This allows users to update the password for all the applications in a sync group if they want, rather than updating each password individually. 

A password sync group is a group of applications that shares a password. 
Administrators create these groups by grouping the applications&#39; sources. 
For example, an administrator can group the ActiveDirectory, GitHub, and G Suite sources together so that all those sources&#39; applications can also be grouped to share a password. 
A user can then update his or her password for ActiveDirectory, GitHub, Gmail, Google Drive, and Google Calendar all at once, rather then updating each one individually.

The following are required for administrators to create a password sync group in Identity Security Cloud: 

- At least two direct connect sources connected to Identity Security Cloud and configured for Password Management.

- Each authentication source in a sync group must have at least one application. Refer to [Adding and Resetting Application Passwords](https://documentation.sailpoint.com/saas/help/pwd/adv_config.html#adding-and-resetting-application-passwords) for more information about adding applications to sources.

- At least one password policy. Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/index.html) for more information about password policies. 

In the Admin panel in Identity Security Cloud, administrators can use the Password Mgmt dropdown menu to select Sync Groups. 
To create a sync group, administrators must provide a name, choose a password policy to be enforced across the sources in the sync group, and select the sources to include in the sync group. 

Administrators can also delete sync groups in Identity Security Cloud, but they should know the following before they do: 

- Passwords related to the associated sources will become independent, so changing one will not change the others anymore. 

- Passwords for the sources&#39; connected applications will also become independent. 

- Password policies assigned to the sync group are then assigned directly to the associated sources. 
To change the password policy for a source, administrators must edit it directly. 

Once the password sync group has been created, users can update the password for the group in Password Manager.

Refer to [Managing Password Sync Groups](https://documentation.sailpoint.com/saas/help/pwd/sync_grps.html) for more information about password sync groups.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-sync-group-v1**](#create-password-sync-group-v1) | **Post** `/password-sync-groups/v1` | Create password sync group
[**delete-password-sync-group-v1**](#delete-password-sync-group-v1) | **Delete** `/password-sync-groups/v1/{id}` | Delete password sync group by id
[**get-password-sync-group-v1**](#get-password-sync-group-v1) | **Get** `/password-sync-groups/v1/{id}` | Get password sync group by id
[**get-password-sync-groups-v1**](#get-password-sync-groups-v1) | **Get** `/password-sync-groups/v1` | Get password sync group list
[**update-password-sync-group-v1**](#update-password-sync-group-v1) | **Put** `/password-sync-groups/v1/{id}` | Update password sync group by id


## create-password-sync-group-v1
Create password sync group
This API creates a password sync group based on the specifications provided.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-sync-group-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePasswordSyncGroupV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **passwordsyncgroup** | [**Passwordsyncgroup**](../models/passwordsyncgroup) |  | 

### Return type

[**Passwordsyncgroup**](../models/passwordsyncgroup)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
)

func main() {
    passwordsyncgroup := []byte(`{"name":"Password Sync Group 2","passwordPolicyId":"2c91808d744ba0ce01746f93b6204501","sourceIds":["2c918084660f45d6016617daa9210584","2c918084660f45d6016617daa9210500"]}`) // Passwordsyncgroup | 

    var passwordsyncgroup v1.Passwordsyncgroup
    if err := json.Unmarshal(passwordsyncgroup, &passwordsyncgroup); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordSyncGroupsAPI.CreatePasswordSyncGroupV1(context.Background()).Passwordsyncgroup(passwordsyncgroup).Execute()
	  //resp, r, err := apiClient.PasswordSyncGroupsAPI.CreatePasswordSyncGroupV1(context.Background()).Passwordsyncgroup(passwordsyncgroup).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordSyncGroupsAPI.CreatePasswordSyncGroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePasswordSyncGroupV1`: Passwordsyncgroup
    fmt.Fprintf(os.Stdout, "Response from `PasswordSyncGroupsAPI.CreatePasswordSyncGroupV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-password-sync-group-v1
Delete password sync group by id
This API deletes the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-password-sync-group-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password sync group to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePasswordSyncGroupV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
)

func main() {
    id := `6881f631-3bd5-4213-9c75-8e05cc3e35dd` // string | The ID of password sync group to delete. # string | The ID of password sync group to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.PasswordSyncGroupsAPI.DeletePasswordSyncGroupV1(context.Background(), id).Execute()
	  //r, err := apiClient.PasswordSyncGroupsAPI.DeletePasswordSyncGroupV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordSyncGroupsAPI.DeletePasswordSyncGroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-password-sync-group-v1
Get password sync group by id
This API returns the sync group for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-sync-group-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password sync group to retrieve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordSyncGroupV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Passwordsyncgroup**](../models/passwordsyncgroup)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
)

func main() {
    id := `6881f631-3bd5-4213-9c75-8e05cc3e35dd` // string | The ID of password sync group to retrieve. # string | The ID of password sync group to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordSyncGroupsAPI.GetPasswordSyncGroupV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.PasswordSyncGroupsAPI.GetPasswordSyncGroupV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordSyncGroupsAPI.GetPasswordSyncGroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordSyncGroupV1`: Passwordsyncgroup
    fmt.Fprintf(os.Stdout, "Response from `PasswordSyncGroupsAPI.GetPasswordSyncGroupV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-password-sync-groups-v1
Get password sync group list
This API returns a list of password sync groups.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-sync-groups-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetPasswordSyncGroupsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Passwordsyncgroup**](../models/passwordsyncgroup)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordSyncGroupsAPI.GetPasswordSyncGroupsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.PasswordSyncGroupsAPI.GetPasswordSyncGroupsV1(context.Background()).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordSyncGroupsAPI.GetPasswordSyncGroupsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPasswordSyncGroupsV1`: []Passwordsyncgroup
    fmt.Fprintf(os.Stdout, "Response from `PasswordSyncGroupsAPI.GetPasswordSyncGroupsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-password-sync-group-v1
Update password sync group by id
This API updates the specified password sync group.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-password-sync-group-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of password sync group to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdatePasswordSyncGroupV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **passwordsyncgroup** | [**Passwordsyncgroup**](../models/passwordsyncgroup) |  | 

### Return type

[**Passwordsyncgroup**](../models/passwordsyncgroup)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/password_sync_groups"
)

func main() {
    id := `6881f631-3bd5-4213-9c75-8e05cc3e35dd` // string | The ID of password sync group to update. # string | The ID of password sync group to update.
    passwordsyncgroup := []byte(`{"id":"6881f631-3bd5-4213-9c75-8e05cc3e35dd","name":"Password Sync Group 2","passwordPolicyId":"2c91808d744ba0ce01746f93b6204501","sourceIds":["2c918084660f45d6016617daa9210584","2c918084660f45d6016617daa9210500"]}`) // Passwordsyncgroup | 

    var passwordsyncgroup v1.Passwordsyncgroup
    if err := json.Unmarshal(passwordsyncgroup, &passwordsyncgroup); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.PasswordSyncGroupsAPI.UpdatePasswordSyncGroupV1(context.Background(), id).Passwordsyncgroup(passwordsyncgroup).Execute()
	  //resp, r, err := apiClient.PasswordSyncGroupsAPI.UpdatePasswordSyncGroupV1(context.Background(), id).Passwordsyncgroup(passwordsyncgroup).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PasswordSyncGroupsAPI.UpdatePasswordSyncGroupV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdatePasswordSyncGroupV1`: Passwordsyncgroup
    fmt.Fprintf(os.Stdout, "Response from `PasswordSyncGroupsAPI.UpdatePasswordSyncGroupV1`: %v\n", resp)
}
```

[[Back to top]](#)

