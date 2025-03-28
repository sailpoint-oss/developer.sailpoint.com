---
id: v2024-tenant
title: Tenant
pagination_label: Tenant
sidebar_label: Tenant
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Tenant', 'V2024Tenant'] 
slug: /tools/sdk/go/v2024/methods/tenant
tags: ['SDK', 'Software Development Kit', 'Tenant', 'V2024Tenant']
---

# \TenantAPI
  API for reading tenant details. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant**](#get-tenant) | **Get** `/tenant` | Get Tenant Information.


## get-tenant
Get Tenant Information.
This rest endpoint can be used to retrieve tenant details.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-tenant)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.TenantAPI.GetTenant(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TenantAPI.GetTenant``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenant`: Tenant
	fmt.Fprintf(os.Stdout, "Response from `TenantAPI.GetTenant`: %v\n", resp)
}
```

[[Back to top]](#)

