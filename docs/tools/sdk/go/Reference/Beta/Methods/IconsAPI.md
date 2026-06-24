---
id: beta-icons
title: Icons
pagination_label: Icons
sidebar_label: Icons
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Icons', 'BetaIcons'] 
slug: /tools/sdk/go/beta/methods/icons
tags: ['SDK', 'Software Development Kit', 'Icons', 'BetaIcons']
---

# IconsAPI
  Use this API to implement functionality related to object icons (application icons for example). 
With this functionality in place, administrators can set or remove an icon for specific object type for use throughout Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-icon**](#delete-icon) | **Delete** `/icons/{objectType}/{objectId}` | Delete an icon
[**set-icon**](#set-icon) | **Put** `/icons/{objectType}/{objectId}` | Update an icon


## delete-icon
Delete an icon
This API endpoint delete an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-icon)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**objectType** | **string** | Object type | 
**objectId** | **string** | Object id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIconRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    objectType := `application` // string | Object type # string | Object type
    objectId := `a291e870-48c3-4953-b656-fb5ce2a93169` // string | Object id. # string | Object id.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.IconsAPI.DeleteIcon(context.Background(), objectType, objectId).Execute()
	  //r, err := apiClient.Beta.IconsAPI.DeleteIcon(context.Background(), objectType, objectId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IconsAPI.DeleteIcon``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## set-icon
Update an icon
This API endpoint updates an icon by object type and object id. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-icon)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**objectType** | **string** | Object type | 
**objectId** | **string** | Object id. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetIconRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **image** | ***os.File** | file with icon. Allowed mime-types [&#39;image/png&#39;, &#39;image/jpeg&#39;] | 

### Return type

[**SetIcon200Response**](../models/set-icon200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    objectType := `application` // string | Object type # string | Object type
    objectId := `a291e870-48c3-4953-b656-fb5ce2a93169` // string | Object id. # string | Object id.
    image := BINARY_DATA_HERE // *os.File | file with icon. Allowed mime-types ['image/png', 'image/jpeg'] # *os.File | file with icon. Allowed mime-types ['image/png', 'image/jpeg']

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IconsAPI.SetIcon(context.Background(), objectType, objectId).Image(image).Execute()
	  //resp, r, err := apiClient.Beta.IconsAPI.SetIcon(context.Background(), objectType, objectId).Image(image).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IconsAPI.SetIcon``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetIcon`: SetIcon200Response
    fmt.Fprintf(os.Stdout, "Response from `IconsAPI.SetIcon`: %v\n", resp)
}
```

[[Back to top]](#)

