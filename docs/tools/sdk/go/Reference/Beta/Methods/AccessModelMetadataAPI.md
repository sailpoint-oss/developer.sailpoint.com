---
id: beta-access-model-metadata
title: AccessModelMetadata
pagination_label: AccessModelMetadata
sidebar_label: AccessModelMetadata
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessModelMetadata', 'BetaAccessModelMetadata'] 
slug: /tools/sdk/go/beta/methods/access-model-metadata
tags: ['SDK', 'Software Development Kit', 'AccessModelMetadata', 'BetaAccessModelMetadata']
---

# AccessModelMetadataAPI
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement metadata. Support for role and access profile metadata will be introduced in a subsequent release.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute**](#create-access-model-metadata-attribute) | **Post** `/access-model-metadata/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value**](#create-access-model-metadata-attribute-value) | **Post** `/access-model-metadata/attributes/{key}/values` | Create access model metadata value
[**get-access-model-metadata-attribute**](#get-access-model-metadata-attribute) | **Get** `/access-model-metadata/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value**](#get-access-model-metadata-attribute-value) | **Get** `/access-model-metadata/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute**](#list-access-model-metadata-attribute) | **Get** `/access-model-metadata/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value**](#list-access-model-metadata-attribute-value) | **Get** `/access-model-metadata/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute**](#update-access-model-metadata-attribute) | **Patch** `/access-model-metadata/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value**](#update-access-model-metadata-attribute-value) | **Patch** `/access-model-metadata/attributes/{key}/values/{value}` | Update access model metadata value


## create-access-model-metadata-attribute
Create access model metadata attribute
Create a new Access Model Metadata Attribute.


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-model-metadata-attribute)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attributeDTO** | [**AttributeDTO**](../models/attribute-dto) | Attribute to create | 

### Return type

[**AttributeDTO**](../models/attribute-dto)

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
    attributedto := []byte(`{
          "multiselect" : false,
          "values" : [ {
            "name" : "Public",
            "value" : "public",
            "status" : "active"
          }, {
            "name" : "Public",
            "value" : "public",
            "status" : "active"
          } ],
          "name" : "Privacy",
          "description" : "Specifies the level of privacy associated with an access item.",
          "type" : "governance",
          "objectTypes" : [ "entitlement" ],
          "key" : "iscPrivacy",
          "status" : "active"
        }`) // AttributeDTO | Attribute to create

    var attributeDTO beta.AttributeDTO
    if err := json.Unmarshal(attributedto, &attributeDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.CreateAccessModelMetadataAttribute(context.Background()).AttributeDTO(attributeDTO).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.CreateAccessModelMetadataAttribute(context.Background()).AttributeDTO(attributeDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.CreateAccessModelMetadataAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataAttribute`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.CreateAccessModelMetadataAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## create-access-model-metadata-attribute-value
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.    


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-model-metadata-attribute-value)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessModelMetadataAttributeValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **attributeValueDTO** | [**AttributeValueDTO**](../models/attribute-value-dto) | Attribute value to create | 

### Return type

[**AttributeValueDTO**](../models/attribute-value-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    attributevaluedto := []byte(`{
          "name" : "Public",
          "value" : "public",
          "status" : "active"
        }`) // AttributeValueDTO | Attribute value to create

    var attributeValueDTO beta.AttributeValueDTO
    if err := json.Unmarshal(attributevaluedto, &attributeValueDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValue(context.Background(), key).AttributeValueDTO(attributeValueDTO).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValue(context.Background(), key).AttributeValueDTO(attributeValueDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValue``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessModelMetadataAttributeValue`: AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.CreateAccessModelMetadataAttributeValue`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-model-metadata-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessModelMetadataAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AttributeDTO**](../models/attribute-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.GetAccessModelMetadataAttribute(context.Background(), key).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.GetAccessModelMetadataAttribute(context.Background(), key).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.GetAccessModelMetadataAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessModelMetadataAttribute`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.GetAccessModelMetadataAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-model-metadata-attribute-value
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-model-metadata-attribute-value)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessModelMetadataAttributeValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**AttributeValueDTO**](../models/attribute-value-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.GetAccessModelMetadataAttributeValue(context.Background(), key, value).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.GetAccessModelMetadataAttributeValue(context.Background(), key, value).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.GetAccessModelMetadataAttributeValue``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessModelMetadataAttributeValue`: AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.GetAccessModelMetadataAttributeValue`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute
List access model metadata attributes
Get a list of Access Model Metadata Attributes

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-model-metadata-attribute)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessModelMetadataAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]AttributeDTO**](../models/attribute-dto)

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
    filters := `name eq "Privacy"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
    sorters := `name,-key` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, key** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.ListAccessModelMetadataAttribute(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.ListAccessModelMetadataAttribute(context.Background()).Filters(filters).Sorters(sorters).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.ListAccessModelMetadataAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessModelMetadataAttribute`: []AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.ListAccessModelMetadataAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-model-metadata-attribute-value
List access model metadata values
Get a list of Access Model Metadata Attribute Values

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-model-metadata-attribute-value)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAccessModelMetadataAttributeValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]AttributeValueDTO**](../models/attribute-value-dto)

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
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.ListAccessModelMetadataAttributeValue(context.Background(), key).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.ListAccessModelMetadataAttributeValue(context.Background(), key).Limit(limit).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.ListAccessModelMetadataAttributeValue``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessModelMetadataAttributeValue`: []AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.ListAccessModelMetadataAttributeValue`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-access-model-metadata-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch array to apply | 

### Return type

[**AttributeDTO**](../models/attribute-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    jsonpatchoperation := []byte(``) // []JsonPatchOperation | JSON Patch array to apply

    var jsonPatchOperation []beta.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.UpdateAccessModelMetadataAttribute(context.Background(), key).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.UpdateAccessModelMetadataAttribute(context.Background(), key).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataAttribute`: AttributeDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## update-access-model-metadata-attribute-value
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/beta/update-access-model-metadata-attribute-value)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**key** | **string** | Technical name of the Attribute. | 
**value** | **string** | Technical name of the Attribute value. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateAccessModelMetadataAttributeValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSON Patch array to apply | 

### Return type

[**AttributeValueDTO**](../models/attribute-value-dto)

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    key := `iscPrivacy` // string | Technical name of the Attribute. # string | Technical name of the Attribute.
    value := `public` // string | Technical name of the Attribute value. # string | Technical name of the Attribute value.
    jsonpatchoperation := []byte(``) // []JsonPatchOperation | JSON Patch array to apply

    var jsonPatchOperation []beta.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValue(context.Background(), key, value).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.Beta.AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValue(context.Background(), key, value).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValue``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateAccessModelMetadataAttributeValue`: AttributeValueDTO
    fmt.Fprintf(os.Stdout, "Response from `AccessModelMetadataAPI.UpdateAccessModelMetadataAttributeValue`: %v\n", resp)
}
```

[[Back to top]](#)

