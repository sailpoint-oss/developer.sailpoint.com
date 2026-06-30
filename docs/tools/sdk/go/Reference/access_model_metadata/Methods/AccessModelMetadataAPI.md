---
id: v1-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessModelMetadata', 'V1AccessModelMetadata'] 
slug: /tools/sdk/go/accessmodelmetadata/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'V1AccessModelMetadata']
---

# AccessModelMetadataAPI
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **Post** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **Post** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**get-access-model-metadata-attribute-v1**](#get-access-model-metadata-attribute-v1) | **Get** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value-v1**](#get-access-model-metadata-attribute-value-v1) | **Get** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute-v1**](#list-access-model-metadata-attribute-v1) | **Get** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value-v1**](#list-access-model-metadata-attribute-value-v1) | **Get** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute-v1**](#update-access-model-metadata-attribute-v1) | **Patch** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value-v1**](#update-access-model-metadata-attribute-value-v1) | **Patch** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**update-access-model-metadata-by-filter-v1**](#update-access-model-metadata-by-filter-v1) | **Post** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids-v1**](#update-access-model-metadata-by-ids-v1) | **Post** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query-v1**](#update-access-model-metadata-by-query-v1) | **Post** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create access model metadata attribute
Create a new Access Model Metadata Attribute.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-model-metadata-attribute-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributedto** | [**Attributedto**](../models/attributedto) | Attribute to create | 

### Return type

[**Attributedto**](../models/attributedto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    attributedto := []byte(``) // Attributedto | Attribute to create

    var attributedto v1.Attributedto
    if err := json.Unmarshal(attributedto, &attributedto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1(context.Background()).Attributedto(attributedto).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1(context.Background()).Attributedto(attributedto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataAttributeV1`: Attributedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.    


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-model-metadata-attribute-value-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **attributevaluedto** | [**Attributevaluedto**](../models/attributevaluedto) | Attribute value to create | 

### Return type

[**Attributevaluedto**](../models/attributevaluedto)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributevaluedto := []byte(``) // Attributevaluedto | Attribute value to create

    var attributevaluedto v1.Attributevaluedto
    if err := json.Unmarshal(attributevaluedto, &attributevaluedto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1(context.Background(), key).Attributevaluedto(attributevaluedto).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1(context.Background(), key).Attributevaluedto(attributevaluedto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataAttributeValueV1`: Attributevaluedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-model-metadata-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Attributedto**](../models/attributedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1(context.Background(), key).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1(context.Background(), key).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessModelMetadataAttributeV1`: Attributedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.GetAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-value-v1
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-model-metadata-attribute-value-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Attributevaluedto**](../models/attributevaluedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1(context.Background(), key, value).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1(context.Background(), key, value).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessModelMetadataAttributeValueV1`: Attributevaluedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.GetAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-v1
List access model metadata attributes
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-model-metadata-attribute-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Attributedto**](../models/attributedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    filters := `name eq "Privacy"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
    sorters := `name,-key` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1(context.Background()).Filters(filters).Sorters(sorters).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessModelMetadataAttributeV1`: []Attributedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.ListAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-model-metadata-attribute-value-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Attributevaluedto**](../models/attributevaluedto)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1(context.Background(), key).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1(context.Background(), key).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessModelMetadataAttributeValueV1`: []Attributevaluedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.ListAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-v1
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | JSON Patch array to apply | 

### Return type

[**Attributedto**](../models/attributedto)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | JSON Patch array to apply

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1(context.Background(), key).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1(context.Background(), key).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataAttributeV1`: Attributedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-value-v1
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-attribute-value-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataAttributeValueV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | JSON Patch array to apply | 

### Return type

[**Attributevaluedto**](../models/attributevaluedto)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | JSON Patch array to apply

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1(context.Background(), key, value).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1(context.Background(), key, value).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataAttributeValueV1`: Attributevaluedto
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValueV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-by-filter-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-filter-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataByFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementattributebulkupdatefilterrequest** | [**Entitlementattributebulkupdatefilterrequest**](../models/entitlementattributebulkupdatefilterrequest) | Attribute metadata bulk update request body. | 

### Return type

[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    entitlementattributebulkupdatefilterrequest := []byte(``) // Entitlementattributebulkupdatefilterrequest | Attribute metadata bulk update request body.

    var entitlementattributebulkupdatefilterrequest v1.Entitlementattributebulkupdatefilterrequest
    if err := json.Unmarshal(entitlementattributebulkupdatefilterrequest, &entitlementattributebulkupdatefilterrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1(context.Background()).Entitlementattributebulkupdatefilterrequest(entitlementattributebulkupdatefilterrequest).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1(context.Background()).Entitlementattributebulkupdatefilterrequest(entitlementattributebulkupdatefilterrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataByFilterV1`: Accessmodelmetadatabulkupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataByFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-by-ids-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-ids-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataByIdsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementattributebulkupdateidsrequest** | [**Entitlementattributebulkupdateidsrequest**](../models/entitlementattributebulkupdateidsrequest) | Attribute metadata bulk update request body. | 

### Return type

[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    entitlementattributebulkupdateidsrequest := []byte(``) // Entitlementattributebulkupdateidsrequest | Attribute metadata bulk update request body.

    var entitlementattributebulkupdateidsrequest v1.Entitlementattributebulkupdateidsrequest
    if err := json.Unmarshal(entitlementattributebulkupdateidsrequest, &entitlementattributebulkupdateidsrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1(context.Background()).Entitlementattributebulkupdateidsrequest(entitlementattributebulkupdateidsrequest).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1(context.Background()).Entitlementattributebulkupdateidsrequest(entitlementattributebulkupdateidsrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataByIdsV1`: Accessmodelmetadatabulkupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataByIdsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-by-query-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-access-model-metadata-by-query-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataByQueryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **entitlementattributebulkupdatequeryrequest** | [**Entitlementattributebulkupdatequeryrequest**](../models/entitlementattributebulkupdatequeryrequest) | Attribute metadata bulk update request body. | 

### Return type

[**Accessmodelmetadatabulkupdateresponse**](../models/accessmodelmetadatabulkupdateresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_model_metadata"
)

func main() {
    entitlementattributebulkupdatequeryrequest := []byte(``) // Entitlementattributebulkupdatequeryrequest | Attribute metadata bulk update request body.

    var entitlementattributebulkupdatequeryrequest v1.Entitlementattributebulkupdatequeryrequest
    if err := json.Unmarshal(entitlementattributebulkupdatequeryrequest, &entitlementattributebulkupdatequeryrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1(context.Background()).Entitlementattributebulkupdatequeryrequest(entitlementattributebulkupdatequeryrequest).Execute()
	  //resp, r, err := apiClient.AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1(context.Background()).Entitlementattributebulkupdatequeryrequest(entitlementattributebulkupdatequeryrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataByQueryV1`: Accessmodelmetadatabulkupdateresponse
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataByQueryV1`: %v\n", resp)
}
```

[[Back to top]](#)

