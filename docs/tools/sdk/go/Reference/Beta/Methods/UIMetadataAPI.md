---
id: beta-ui-metadata
title: UIMetadata
pagination_label: UIMetadata
sidebar_label: UIMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UIMetadata', 'BetaUIMetadata'] 
slug: /tools/sdk/go/beta/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UIMetadata', 'BetaUIMetadata']
---

# UIMetadataAPI
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata**](#get-tenant-ui-metadata) | **Get** `/ui-metadata/tenant` | Get a tenant UI metadata
[**set-tenant-ui-metadata**](#set-tenant-ui-metadata) | **Put** `/ui-metadata/tenant` | Update tenant UI metadata


## get-tenant-ui-metadata
Get a tenant UI metadata
This API endpoint retrieves UI metadata configured for your tenant.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-tenant-ui-metadata)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantUiMetadataRequest struct via the builder pattern


### Return type

[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

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
    resp, r, err := apiClient.Beta.UIMetadataAPI.GetTenantUiMetadata(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.UIMetadataAPI.GetTenantUiMetadata(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UIMetadataAPI.GetTenantUiMetadata``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTenantUiMetadata`: TenantUiMetadataItemResponse
	fmt.Fprintf(os.Stdout, "Response from `UIMetadataAPI.GetTenantUiMetadata`: %v\n", resp)
}
```

[[Back to top]](#)

## set-tenant-ui-metadata
Update tenant UI metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-tenant-ui-metadata)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTenantUiMetadataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantUiMetadataItemUpdateRequest** | [**TenantUiMetadataItemUpdateRequest**](../models/tenant-ui-metadata-item-update-request) |  | 

### Return type

[**TenantUiMetadataItemResponse**](../models/tenant-ui-metadata-item-response)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    tenantuimetadataitemupdaterequest := []byte(`{
          "usernameEmptyText" : "Please provide your work email address...",
          "usernameLabel" : "Email",
          "iframeWhiteList" : "http://example.com http://example2.com"
        }`) // TenantUiMetadataItemUpdateRequest | 

  
   var tenantUiMetadataItemUpdateRequest beta.TenantUiMetadataItemUpdateRequest
   if err := json.Unmarshal(tenantuimetadataitemupdaterequest, &tenantUiMetadataItemUpdateRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.UIMetadataAPI.SetTenantUiMetadata(context.Background()).TenantUiMetadataItemUpdateRequest(tenantUiMetadataItemUpdateRequest).Execute()
	//resp, r, err := apiClient.Beta.UIMetadataAPI.SetTenantUiMetadata(context.Background()).TenantUiMetadataItemUpdateRequest(tenantUiMetadataItemUpdateRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `UIMetadataAPI.SetTenantUiMetadata``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SetTenantUiMetadata`: TenantUiMetadataItemResponse
	fmt.Fprintf(os.Stdout, "Response from `UIMetadataAPI.SetTenantUiMetadata`: %v\n", resp)
}
```

[[Back to top]](#)

