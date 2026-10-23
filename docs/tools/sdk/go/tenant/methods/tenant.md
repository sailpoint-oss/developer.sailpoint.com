# Tenant

# TenantAPI
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-v1**](#get-tenant-v1) | **Get** `/tenant/v1` | Get tenant information.


## get-tenant-v1
Get tenant information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantV1Request struct via the builder pattern


### Return type

[**Tenant**](../models/tenant)

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
    resp, r, err := apiClient.TenantAPI.GetTenantV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TenantAPI.GetTenantV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TenantAPI.GetTenantV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTenantV1`: Tenant
    fmt.Fprintf(os.Stdout, "Response from `TenantAPI.GetTenantV1`: %v\n", resp)
}
```

[[Back to top]](#)

