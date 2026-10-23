# TenantContext

# TenantContextAPI
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context-v1**](#get-tenant-context-v1) | **Get** `/tenant-context/v1` | Retrieve tenant context
[**patch-tenant-context-v1**](#patch-tenant-context-v1) | **Patch** `/tenant-context/v1` | Update tenant context


## get-tenant-context-v1
Retrieve tenant context
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-context-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantContextV1Request struct via the builder pattern


### Return type

[**[]GetTenantContextV1200ResponseInner**](../models/get-tenant-context-v1200-response-inner)

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
    resp, r, err := apiClient.TenantContextAPI.GetTenantContextV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TenantContextAPI.GetTenantContextV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TenantContextAPI.GetTenantContextV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTenantContextV1`: []GetTenantContextV1200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `TenantContextAPI.GetTenantContextV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-tenant-context-v1
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/patch-tenant-context-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPatchTenantContextV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **jsonPatchOperation** | [**JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

 (empty response body)

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
    tenant_context "github.com/sailpoint-oss/golang-sdk/v3/tenant_context"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    jsonpatchoperationJson := []byte(`{
          "op" : "replace",
          "path" : "/description",
          "value" : "New description"
        }`) // JsonPatchOperation | 

    var jsonPatchOperation tenant_context.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TenantContextAPI.PatchTenantContextV1(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
	  //r, err := apiClient.TenantContextAPI.PatchTenantContextV1(context.Background()).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TenantContextAPI.PatchTenantContextV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

