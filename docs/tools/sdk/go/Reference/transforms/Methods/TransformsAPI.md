---
id: v1-transforms
title: Transforms
pagination_label: Transforms
sidebar_label: Transforms
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Transforms', 'V1Transforms'] 
slug: /tools/sdk/go/transforms/methods/transforms
tags: ['SDK', 'Software Development Kit', 'Transforms', 'V1Transforms']
---

# TransformsAPI
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. 

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-transform-v1**](#create-transform-v1) | **Post** `/transforms/v1` | Create transform
[**delete-transform-v1**](#delete-transform-v1) | **Delete** `/transforms/v1/{id}` | Delete a transform
[**get-transform-v1**](#get-transform-v1) | **Get** `/transforms/v1/{id}` | Transform by id
[**list-transforms-v1**](#list-transforms-v1) | **Get** `/transforms/v1` | List transforms
[**update-transform-v1**](#update-transform-v1) | **Put** `/transforms/v1/{id}` | Update a transform


## create-transform-v1
Create transform
Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-transform-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTransformV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform** | [**Transform**](../models/transform) | The transform to be created. | 

### Return type

[**Transformread**](../models/transformread)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/transforms"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/transforms"
)

func main() {
    transform := []byte(`{"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM dd yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}`) // Transform | The transform to be created.

    var transform v1.Transform
    if err := json.Unmarshal(transform, &transform); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TransformsAPI.CreateTransformV1(context.Background()).Transform(transform).Execute()
	  //resp, r, err := apiClient.TransformsAPI.CreateTransformV1(context.Background()).Transform(transform).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.CreateTransformV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateTransformV1`: Transformread
    fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.CreateTransformV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-transform-v1
Delete a transform
Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-transform-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the transform to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransformV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/transforms"
)

func main() {
    id := `2cd78adghjkja34jh2b1hkjhasuecd` // string | ID of the transform to delete # string | ID of the transform to delete

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.TransformsAPI.DeleteTransformV1(context.Background(), id).Execute()
	  //r, err := apiClient.TransformsAPI.DeleteTransformV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.DeleteTransformV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-transform-v1
Transform by id
This API returns the transform specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-transform-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the transform to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransformV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Transformread**](../models/transformread)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/transforms"
)

func main() {
    id := `2cd78adghjkja34jh2b1hkjhasuecd` // string | ID of the transform to retrieve # string | ID of the transform to retrieve

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TransformsAPI.GetTransformV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.TransformsAPI.GetTransformV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.GetTransformV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTransformV1`: Transformread
    fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.GetTransformV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-transforms-v1
List transforms
Gets a list of all saved transform objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-transforms-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTransformsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **name** | **string** | Name of the transform to retrieve from the list. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* | 

### Return type

[**[]Transformread**](../models/transformread)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/transforms"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    name := `ExampleTransformName123` // string | Name of the transform to retrieve from the list. (optional) # string | Name of the transform to retrieve from the list. (optional)
    filters := `name eq "Uppercase"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TransformsAPI.ListTransformsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.TransformsAPI.ListTransformsV1(context.Background()).Offset(offset).Limit(limit).Count(count).Name(name).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.ListTransformsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListTransformsV1`: []Transformread
    fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.ListTransformsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-transform-v1
Update a transform
Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-transform-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the transform to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTransformV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **transform** | [**Transform**](../models/transform) | The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. | 

### Return type

[**Transformread**](../models/transformread)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/transforms"
)

func main() {
    id := `2cd78adghjkja34jh2b1hkjhasuecd` // string | ID of the transform to update # string | ID of the transform to update
    transform := []byte(`{"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM-dd-yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}`) // Transform | The updated transform object. Must include \"name\", \"type\", and \"attributes\" fields, but \"name\" and \"type\" must not be modified. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.TransformsAPI.UpdateTransformV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.TransformsAPI.UpdateTransformV1(context.Background(), id).Transform(transform).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.UpdateTransformV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateTransformV1`: Transformread
    fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.UpdateTransformV1`: %v\n", resp)
}
```

[[Back to top]](#)

