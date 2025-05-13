---
id: beta-transforms
title: Transforms
pagination_label: Transforms
sidebar_label: Transforms
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Transforms', 'BetaTransforms'] 
slug: /tools/sdk/go/beta/methods/transforms
tags: ['SDK', 'Software Development Kit', 'Transforms', 'BetaTransforms']
---

# TransformsAPI
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. 

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-transform**](#create-transform) | **Post** `/transforms` | Create transform
[**delete-transform**](#delete-transform) | **Delete** `/transforms/{id}` | Delete a transform
[**get-transform**](#get-transform) | **Get** `/transforms/{id}` | Transform by ID
[**list-transforms**](#list-transforms) | **Get** `/transforms` | List transforms
[**update-transform**](#update-transform) | **Put** `/transforms/{id}` | Update a transform


## create-transform
Create transform
Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI. A token with transform write authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-transform)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateTransformRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transform** | [**Transform**](../models/transform) | The transform to be created. | 

### Return type

[**TransformRead**](../models/transform-read)

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
    data := []byte(`{
          "name" : "Timestamp To Date",
          "attributes" : "{}",
          "type" : "dateFormat"
        }`) // Transform | The transform to be created.

  
   var transform beta.Transform
   if err := json.Unmarshal(data, &transform); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TransformsAPI.CreateTransform(context.Background()).Transform(transform).Execute()
	//resp, r, err := apiClient.Beta.TransformsAPI.CreateTransform(context.Background()).Transform(transform).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.CreateTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateTransform`: TransformRead
	fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.CreateTransform`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-transform
Delete a transform
Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.
A token with transform delete authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-transform)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the transform to delete | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTransformRequest struct via the builder pattern


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
    id := `2cd78adghjkja34jh2b1hkjhasuecd` // string | ID of the transform to delete # string | ID of the transform to delete

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.TransformsAPI.DeleteTransform(context.Background(), id).Execute()
	//r, err := apiClient.Beta.TransformsAPI.DeleteTransform(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.DeleteTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-transform
Transform by ID
This API returns the transform specified by the given ID.
A token with transform read authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-transform)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the transform to retrieve | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTransformRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**TransformRead**](../models/transform-read)

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
    id := `2cd78adghjkja34jh2b1hkjhasuecd` // string | ID of the transform to retrieve # string | ID of the transform to retrieve

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TransformsAPI.GetTransform(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.TransformsAPI.GetTransform(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.GetTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetTransform`: TransformRead
	fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.GetTransform`: %v\n", resp)
}
```

[[Back to top]](#)

## list-transforms
List transforms
Gets a list of all saved transform objects.
A token with transforms-list read authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-transforms)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListTransformsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **name** | **string** | Name of the transform to retrieve from the list. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* | 

### Return type

[**[]TransformRead**](../models/transform-read)

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
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    name := `ExampleTransformName123` // string | Name of the transform to retrieve from the list. (optional) # string | Name of the transform to retrieve from the list. (optional)
    filters := `name eq "Uppercase"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TransformsAPI.ListTransforms(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.TransformsAPI.ListTransforms(context.Background()).Offset(offset).Limit(limit).Count(count).Name(name).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.ListTransforms``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListTransforms`: []TransformRead
	fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.ListTransforms`: %v\n", resp)
}
```

[[Back to top]](#)

## update-transform
Update a transform
Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.
A token with transform write authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-transform)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the transform to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateTransformRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **transform** | [**Transform**](../models/transform) | The updated transform object. Must include \&quot;name\&quot;, \&quot;type\&quot;, and \&quot;attributes\&quot; fields, but \&quot;name\&quot; and \&quot;type\&quot; must not be modified. | 

### Return type

[**TransformRead**](../models/transform-read)

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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2cd78adghjkja34jh2b1hkjhasuecd` // string | ID of the transform to update # string | ID of the transform to update
    data := []byte(`{
          "name" : "Timestamp To Date",
          "attributes" : "{}",
          "type" : "dateFormat"
        }`) // Transform | The updated transform object. Must include \"name\", \"type\", and \"attributes\" fields, but \"name\" and \"type\" must not be modified. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.TransformsAPI.UpdateTransform(context.Background(), id).Execute()
	//resp, r, err := apiClient.Beta.TransformsAPI.UpdateTransform(context.Background(), id).Transform(transform).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `TransformsAPI.UpdateTransform``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateTransform`: TransformRead
	fmt.Fprintf(os.Stdout, "Response from `TransformsAPI.UpdateTransform`: %v\n", resp)
}
```

[[Back to top]](#)

