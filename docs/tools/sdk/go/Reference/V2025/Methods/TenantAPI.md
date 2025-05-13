---
id: v2025-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenant', 'V2025Tenant'] 
slug: /tools/sdk/go/v2025/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'V2025Tenant']
---

# TenantAPI
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant**](#get-tenant) | **Get** `/tenant` | Get Tenant Information.


## get-tenant
Get Tenant Information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tenant)

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
    resp, r, err := apiClient.V2025.TenantAPI.GetTenant(context.Background()).Execute()
	//resp, r, err := apiClient.V2025.TenantAPI.GetTenant(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TenantAPI.GetTenant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenant`: Tenant
	fmt.Fprintf(os.Stdout, "Response from `TenantAPI.GetTenant`: %v\n", resp)
}
```

[[Back to top]](#)

