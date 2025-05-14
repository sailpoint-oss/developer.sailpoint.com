---
id: beta-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenant', 'BetaTenant'] 
slug: /tools/sdk/go/beta/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'BetaTenant']
---

# TenantAPI
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant**](#get-tenant) | **Get** `/tenant` | Get Tenant Information.


## get-tenant
Get Tenant Information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-tenant)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TenantAPI.GetTenant(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.TenantAPI.GetTenant(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TenantAPI.GetTenant``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTenant`: Tenant
    fmt.Fprintf(os.Stdout, "Response from `TenantAPI.GetTenant`: %v\n", resp)
}
```

[[Back to top]](#)

