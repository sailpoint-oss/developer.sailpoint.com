# AuthProfile

# AuthProfileAPI
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-profile-config-list-v1**](#get-profile-config-list-v1) | **Get** `/auth-profiles/v1` | Get list of auth profiles
[**get-profile-config-v1**](#get-profile-config-v1) | **Get** `/auth-profiles/v1/{id}` | Get auth profile
[**patch-profile-config-v1**](#patch-profile-config-v1) | **Patch** `/auth-profiles/v1/{id}` | Patch a specified auth profile


## get-profile-config-list-v1
Get list of auth profiles
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-list-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileConfigListV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthProfileAPI.GetProfileConfigListV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AuthProfileAPI.GetProfileConfigListV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthProfileAPI.GetProfileConfigListV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileConfigListV1`: []AuthProfileSummary
    fmt.Fprintf(os.Stdout, "Response from `AuthProfileAPI.GetProfileConfigListV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-profile-config-v1
Get auth profile
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Auth Profile to patch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileConfigV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Auth Profile to patch. # string | ID of the Auth Profile to patch.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthProfileAPI.GetProfileConfigV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.AuthProfileAPI.GetProfileConfigV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthProfileAPI.GetProfileConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileConfigV1`: AuthProfile
    fmt.Fprintf(os.Stdout, "Response from `AuthProfileAPI.GetProfileConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-profile-config-v1
Patch a specified auth profile
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/patch-profile-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the Auth Profile to patch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchProfileConfigV1Request struct via the builder pattern


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
    auth_profile "github.com/sailpoint-oss/golang-sdk/v3/auth_profile"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808a7813090a017814121919ecca` // string | ID of the Auth Profile to patch. # string | ID of the Auth Profile to patch.
    jsonpatchoperationJson := []byte(``) // []JsonPatchOperation | 

    var jsonPatchOperation []auth_profile.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthProfileAPI.PatchProfileConfigV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.AuthProfileAPI.PatchProfileConfigV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthProfileAPI.PatchProfileConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchProfileConfigV1`: AuthProfile
    fmt.Fprintf(os.Stdout, "Response from `AuthProfileAPI.PatchProfileConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

