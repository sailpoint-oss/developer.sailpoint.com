---
id: v1-auth-users
title: AuthUsers
pagination_label: AuthUsers
sidebar_label: AuthUsers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthUsers', 'V1AuthUsers'] 
slug: /tools/sdk/go/authusers/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'AuthUsers', 'V1AuthUsers']
---

# AuthUsersAPI
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-auth-user-v1**](#get-auth-user-v1) | **Get** `/auth-users/v1/{id}` | Auth user details
[**patch-auth-user-v1**](#patch-auth-user-v1) | **Patch** `/auth-users/v1/{id}` | Auth user update


## get-auth-user-v1
Auth user details
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-auth-user-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthUserV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Authuser**](../models/authuser)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/auth_users"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity ID # string | Identity ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthUsersAPI.GetAuthUserV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.AuthUsersAPI.GetAuthUserV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthUsersAPI.GetAuthUserV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAuthUserV1`: Authuser
    fmt.Fprintf(os.Stdout, "Response from `AuthUsersAPI.GetAuthUserV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-user-v1
Auth user update
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-auth-user-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthUserV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**Authuser**](../models/authuser)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/auth_users"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/auth_users"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity ID # string | Identity ID
    jsonpatchoperation := []byte(`[{"op":"replace","path":"/capabilities","value":["ORG_ADMIN"]}]`) // []Jsonpatchoperation | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthUsersAPI.PatchAuthUserV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.AuthUsersAPI.PatchAuthUserV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthUsersAPI.PatchAuthUserV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchAuthUserV1`: Authuser
    fmt.Fprintf(os.Stdout, "Response from `AuthUsersAPI.PatchAuthUserV1`: %v\n", resp)
}
```

[[Back to top]](#)

