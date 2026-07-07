---
id: v1-icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Icons', 'V1Icons'] 
slug: /tools/sdk/go/icons/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons', 'V1Icons']
---

# IconsAPI
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-icon-v1**](#delete-icon-v1) | **Delete** `/icons/v1/{objectType}/{objectId}` | Delete an icon
[**set-icon-v1**](#set-icon-v1) | **Put** `/icons/v1/{objectType}/{objectId}` | Update an icon


## delete-icon-v1
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
Delete an icon
This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-icon-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**objectType** | **string** | Object type. Available options [&#39;application&#39;] | 
**objectId** | **string** | Object id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIconV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

 (empty response body)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/icons"
)

func main() {
    objectType := `application` // string | Object type. Available options ['application'] # string | Object type. Available options ['application']
    objectId := `a291e870-48c3-4953-b656-fb5ce2a93169` // string | Object id. # string | Object id.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.IconsAPI.DeleteIconV1(context.Background(), objectType, objectId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.IconsAPI.DeleteIconV1(context.Background(), objectType, objectId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IconsAPI.DeleteIconV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## set-icon-v1
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
Update an icon
This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-icon-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**objectType** | **string** | Object type. Available options [&#39;application&#39;] | 
**objectId** | **string** | Object id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetIconV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **image** | ***os.File** | file with icon. Allowed mime-types [&#39;image/png&#39;, &#39;image/jpeg&#39;] | 

### Return type

[**SetIconV1200Response**](../models/set-icon-v1200-response)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/icons"
)

func main() {
    objectType := `application` // string | Object type. Available options ['application'] # string | Object type. Available options ['application']
    objectId := `a291e870-48c3-4953-b656-fb5ce2a93169` // string | Object id. # string | Object id.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    image := BINARY_DATA_HERE // *os.File | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] # *os.File | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IconsAPI.SetIconV1(context.Background(), objectType, objectId).XSailPointExperimental(xSailPointExperimental).Image(image).Execute()
	  //resp, r, err := apiClient.IconsAPI.SetIconV1(context.Background(), objectType, objectId).XSailPointExperimental(xSailPointExperimental).Image(image).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IconsAPI.SetIconV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetIconV1`: SetIconV1200Response
    fmt.Fprintf(os.Stdout, "Response from `IconsAPI.SetIconV1`: %v\n", resp)
}
```

[[Back to top]](#)

