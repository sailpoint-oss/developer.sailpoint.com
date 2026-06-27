---
id: v1-ui-metadata
title: UIMetadata
pagination_label: UIMetadata
sidebar_label: UIMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'UIMetadata', 'V1UIMetadata'] 
slug: /tools/sdk/go/uimetadata/methods/ui-metadata
tags: ['SDK', 'Software Development Kit', 'UIMetadata', 'V1UIMetadata']
---

# UIMetadataAPI
  API for managing UI Metadata. Use this API to manage metadata about your User Interface.
For example you can set the iFrameWhitelist parameter to permit another domain to encapsulate IDN within an iframe or set the usernameEmptyText to change the placeholder text for Username on your tenant&#39;s login screen. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-ui-metadata-v1**](#get-tenant-ui-metadata-v1) | **Get** `/ui-metadata/v1/tenant` | Get a tenant ui metadata
[**set-tenant-ui-metadata-v1**](#set-tenant-ui-metadata-v1) | **Put** `/ui-metadata/v1/tenant` | Update tenant ui metadata


## get-tenant-ui-metadata-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a tenant ui metadata
This API endpoint retrieves UI metadata configured for your tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-ui-metadata-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTenantUiMetadataV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**Tenantuimetadataitemresponse**](../models/tenantuimetadataitemresponse)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/ui_metadata"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIMetadataAPI.GetTenantUiMetadataV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.UIMetadataAPI.GetTenantUiMetadataV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIMetadataAPI.GetTenantUiMetadataV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTenantUiMetadataV1`: Tenantuimetadataitemresponse
    fmt.Fprintf(os.Stdout, "Response from `UIMetadataAPI.GetTenantUiMetadataV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-tenant-ui-metadata-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Update tenant ui metadata
This API endpoint updates UI metadata for your tenant. These changes may require up to 5 minutes to take effect on the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-tenant-ui-metadata-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetTenantUiMetadataV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **tenantuimetadataitemupdaterequest** | [**Tenantuimetadataitemupdaterequest**](../models/tenantuimetadataitemupdaterequest) |  | 

### Return type

[**Tenantuimetadataitemresponse**](../models/tenantuimetadataitemresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/ui_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/ui_metadata"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    tenantuimetadataitemupdaterequest := []byte(``) // Tenantuimetadataitemupdaterequest | 

    var tenantuimetadataitemupdaterequest v1.Tenantuimetadataitemupdaterequest
    if err := json.Unmarshal(tenantuimetadataitemupdaterequest, &tenantuimetadataitemupdaterequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIMetadataAPI.SetTenantUiMetadataV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Tenantuimetadataitemupdaterequest(tenantuimetadataitemupdaterequest).Execute()
	  //resp, r, err := apiClient.UIMetadataAPI.SetTenantUiMetadataV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Tenantuimetadataitemupdaterequest(tenantuimetadataitemupdaterequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIMetadataAPI.SetTenantUiMetadataV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetTenantUiMetadataV1`: Tenantuimetadataitemresponse
    fmt.Fprintf(os.Stdout, "Response from `UIMetadataAPI.SetTenantUiMetadataV1`: %v\n", resp)
}
```

[[Back to top]](#)

