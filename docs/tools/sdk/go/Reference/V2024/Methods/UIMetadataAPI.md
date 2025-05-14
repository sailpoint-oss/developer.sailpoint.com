---
id: v2024-ui-metadata
title: UIMetadata
pagination_label: UIMetadata
sidebar_label: UIMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UIMetadata', 'V2024UIMetadata'] 
slug: /tools/sdk/go/v2024/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UIMetadata', 'V2024UIMetadata']
---

# UIMetadataAPI
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata**](#get-tenant-ui-metadata) | **Get** `/ui-metadata/tenant` | Get a tenant UI metadata
[**set-tenant-ui-metadata**](#set-tenant-ui-metadata) | **Put** `/ui-metadata/tenant` | Update tenant UI metadata


## get-tenant-ui-metadata
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get a tenant UI metadata
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-tenant-ui-metadata)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantUiMetadataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.UIMetadataAPI.GetTenantUiMetadata(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.UIMetadataAPI.GetTenantUiMetadata(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update tenant UI metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-tenant-ui-metadata)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTenantUiMetadataRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    tenantuimetadataitemupdaterequest := []byte(`{
          "usernameEmptyText" : "Please provide your work email address...",
          "usernameLabel" : "Email",
          "iframeWhiteList" : "http://example.com http://example2.com"
        }`) // TenantUiMetadataItemUpdateRequest | 

    var tenantUiMetadataItemUpdateRequest v2024.TenantUiMetadataItemUpdateRequest
    if err := json.Unmarshal(tenantuimetadataitemupdaterequest, &tenantUiMetadataItemUpdateRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.UIMetadataAPI.SetTenantUiMetadata(context.Background()).XSailPointExperimental(xSailPointExperimental).TenantUiMetadataItemUpdateRequest(tenantUiMetadataItemUpdateRequest).Execute()
	  //resp, r, err := apiClient.V2024.UIMetadataAPI.SetTenantUiMetadata(context.Background()).XSailPointExperimental(xSailPointExperimental).TenantUiMetadataItemUpdateRequest(tenantUiMetadataItemUpdateRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIMetadataAPI.SetTenantUiMetadata``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetTenantUiMetadata`: TenantUiMetadataItemResponse
    fmt.Fprintf(os.Stdout, "Response from `UIMetadataAPI.SetTenantUiMetadata`: %v\n", resp)
}
```

[[Back to top]](#)

