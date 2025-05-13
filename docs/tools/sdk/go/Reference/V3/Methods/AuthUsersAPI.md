---
id: auth-users
title: AuthUsers
pagination_label: AuthUsers
sidebar_label: AuthUsers
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthUsers', 'AuthUsers'] 
slug: /tools/sdk/go/v3/methods/auth-users
tags: ['SDK', 'Software Development Kit', 'AuthUsers', 'AuthUsers']
---

# AuthUsersAPI
  Use this API to implement user authentication system functionality. 
With this functionality in place, users can get a user&#39;s authentication system details, including their capabilities, and modify those capabilities. 
The user&#39;s capabilities refer to their access to different systems, or authorization, within the tenant, like access to certifications (CERT_ADMIN) or reports (REPORT_ADMIN). 
These capabilities also determine a user&#39;s access to the different APIs. 
This API provides users with a way to determine a user&#39;s access and make quick and easy changes to that access.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-auth-user**](#get-auth-user) | **Get** `/auth-users/{id}` | Auth User Details
[**patch-auth-user**](#patch-auth-user) | **Patch** `/auth-users/{id}` | Auth User Update


## get-auth-user
Auth User Details
Return the specified user's authentication system details.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-auth-user)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAuthUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AuthUser**](../models/auth-user)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity ID # string | Identity ID

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AuthUsersAPI.GetAuthUser(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.AuthUsersAPI.GetAuthUser(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthUsersAPI.GetAuthUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAuthUser`: AuthUser
	fmt.Fprintf(os.Stdout, "Response from `AuthUsersAPI.GetAuthUser`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-auth-user
Auth User Update
Use a PATCH request to update an existing user in the authentication system.
Use this endpoint to modify these fields: 
  * `capabilities`

A '400.1.1 Illegal update attempt' detail code indicates that you attempted to PATCH a field that is not allowed.

[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-auth-user)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchAuthUserRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

[**AuthUser**](../models/auth-user)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Identity ID # string | Identity ID
    jsonpatchoperation := []byte(`[{op=replace, path=/capabilities, value=[ORG_ADMIN]}]`) // []JsonPatchOperation | A list of auth user update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

  
   var jsonPatchOperation v3.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AuthUsersAPI.PatchAuthUser(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.V3.AuthUsersAPI.PatchAuthUser(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthUsersAPI.PatchAuthUser``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchAuthUser`: AuthUser
	fmt.Fprintf(os.Stdout, "Response from `AuthUsersAPI.PatchAuthUser`: %v\n", resp)
}
```

[[Back to top]](#)

