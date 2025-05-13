---
id: beta-auth-profile
title: AuthProfile
pagination_label: AuthProfile
sidebar_label: AuthProfile
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AuthProfile', 'BetaAuthProfile'] 
slug: /tools/sdk/go/beta/methods/auth-profile
tags: ['SDK', 'Software Development Kit', 'AuthProfile', 'BetaAuthProfile']
---

# AuthProfileAPI
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-profile-config**](#get-profile-config) | **Get** `/auth-profiles/{id}` | Get Auth Profile.
[**get-profile-config-list**](#get-profile-config-list) | **Get** `/auth-profiles` | Get list of Auth Profiles.
[**patch-profile-config**](#patch-profile-config) | **Patch** `/auth-profiles/{id}` | Patch a specified Auth Profile


## get-profile-config
Get Auth Profile.
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-profile-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Auth Profile to get. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AuthProfile**](../models/auth-profile)

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
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Auth Profile to get. # string | ID of the Auth Profile to get.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AuthProfileAPI.GetProfileConfig(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.AuthProfileAPI.GetProfileConfig(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthProfileAPI.GetProfileConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProfileConfig`: AuthProfile
	fmt.Fprintf(os.Stdout, "Response from `AuthProfileAPI.GetProfileConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-profile-config-list
Get list of Auth Profiles.
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-profile-config-list)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileConfigListRequest struct via the builder pattern


### Return type

[**[]AuthProfileSummary**](../models/auth-profile-summary)

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

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AuthProfileAPI.GetProfileConfigList(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.AuthProfileAPI.GetProfileConfigList(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthProfileAPI.GetProfileConfigList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetProfileConfigList`: []AuthProfileSummary
	fmt.Fprintf(os.Stdout, "Response from `AuthProfileAPI.GetProfileConfigList`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-profile-config
Patch a specified Auth Profile
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-profile-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Auth Profile to patch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchProfileConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**AuthProfile**](../models/auth-profile)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Auth Profile to patch. # string | ID of the Auth Profile to patch.
    jsonpatchoperation := []byte(``) // []JsonPatchOperation | 

  
   var jsonPatchOperation beta.[]JsonPatchOperation
   if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AuthProfileAPI.PatchProfileConfig(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	//resp, r, err := apiClient.Beta.AuthProfileAPI.PatchProfileConfig(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AuthProfileAPI.PatchProfileConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchProfileConfig`: AuthProfile
	fmt.Fprintf(os.Stdout, "Response from `AuthProfileAPI.PatchProfileConfig`: %v\n", resp)
}
```

[[Back to top]](#)

