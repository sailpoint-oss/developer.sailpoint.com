---
id: v2025-parameter-storage
title: ParameterStorage
pagination_label: ParameterStorage
sidebar_label: ParameterStorage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ParameterStorage', 'V2025ParameterStorage'] 
slug: /tools/sdk/go/v2025/methods/parameter-storage
tags: ['SDK', 'Software Development Kit', 'ParameterStorage', 'V2025ParameterStorage']
---

# ParameterStorageAPI
  The Parameter Storage is SailPoint&#39;s centralized repository for authentication, authorization, and connection configurations, stored as typed Parameters.

The APIs can be used to input Parameters, which can then be referenced by other services, such as Workflow configurations. When these services are executed, the relevant values are fetched via an internal API (not documented here).

The usage of Parameters can be monitored via References managed by Parameter Storage. References provide an indirect mapping between a Parameter and its usage (e.g., within a Workflow), allowing for reports such as &quot;Parameter X is used in Workflow Y&quot; via APIs.

A Parameter is a named instance of typed configuration, where the state is stored as Fields. These Fields are either Public (cleartext, searchable) or Private (encrypted).

Parameter Types are grouped and fall into three Categories: Authentication, Authorization, and Connection.

Parameters are strongly typed; each Type&#39;s fields are named and exposed to the consumer. This means that if a service states that it expects a Credential Type, it will receive a Parameter with a Username and Password.

Fields are named, typed variables within a Parameter; the Fields on a Parameter depend on the Parameter&#39;s Type. Fields contain customer-provided data that will be referenced by another service, and their typing determines whether they&#39;re stored in cleartext or encrypted.

The Specification documents the supported Categories, Types, Fields, Field Names, and their relationships.

A Reference is an indirect pointer to a Parameter, where each usage of a Parameter has a corresponding Reference. This allows for usage tracking and safe deletion.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-parameter**](#create-parameter) | **Post** `/parameter-storage/parameters` | Add a new parameter.
[**delete-parameter**](#delete-parameter) | **Delete** `/parameter-storage/parameters/{id}` | Delete a parameter.
[**get-attestation-document**](#get-attestation-document) | **Get** `/parameter-storage/attestation` | Get an attestation document.
[**get-parameter**](#get-parameter) | **Get** `/parameter-storage/parameters/{id}` | Get a specific parameter.
[**get-parameter-references**](#get-parameter-references) | **Get** `/parameter-storage/parameters/{id}/references` | Get parameter references.
[**get-parameter-storage-specification**](#get-parameter-storage-specification) | **Get** `/parameter-storage/specification` | Get specifications for parameter types.
[**search-parameters**](#search-parameters) | **Get** `/parameter-storage/parameters` | Query stored parameters.
[**update-parameter**](#update-parameter) | **Patch** `/parameter-storage/parameters/{id}` | Update a parameter.


## create-parameter
Add a new parameter.
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-parameter)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateParameterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parameterStorageNewParameter** | [**ParameterStorageNewParameter**](../models/parameter-storage-new-parameter) | The parameter to add to the store. | 

### Return type

[**ParameterStorageParameter**](../models/parameter-storage-parameter)

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
    parameterstoragenewparameter := []byte(`{
          "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
          "name" : "Credentials for server.",
          "description" : "Credentials for server.",
          "publicFields" : "{\"username\": \"username\"}",
          "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b",
          "type" : "1.1"
        }`) // ParameterStorageNewParameter | The parameter to add to the store. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ParameterStorageAPI.CreateParameter(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.ParameterStorageAPI.CreateParameter(context.Background()).ParameterStorageNewParameter(parameterStorageNewParameter).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.CreateParameter``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateParameter`: ParameterStorageParameter
    fmt.Fprintf(os.Stdout, "Response from `ParameterStorageAPI.CreateParameter`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-parameter
Delete a parameter.
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-parameter)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the parameter to be deleted. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteParameterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, schema

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
    id := `58de858b-83d9-4563-9e15-7393594c684a` // string | The ID of the parameter to be deleted. # string | The ID of the parameter to be deleted.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ParameterStorageAPI.DeleteParameter(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.ParameterStorageAPI.DeleteParameter(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.DeleteParameter``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-attestation-document
Get an attestation document.
Get an attestation document, and perform x25519 handshake to enabled end-to-end encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-attestation-document)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAttestationDocumentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **string** | Base64Url encoded public key | 

### Return type

[**ParameterStorageAttestationDocument**](../models/parameter-storage-attestation-document)

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
    key := `cHVibGljIGtleSBnb2VzIGhlcmU=` // string | Base64Url encoded public key # string | Base64Url encoded public key

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ParameterStorageAPI.GetAttestationDocument(context.Background()).Key(key).Execute()
	  //resp, r, err := apiClient.V2025.ParameterStorageAPI.GetAttestationDocument(context.Background()).Key(key).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.GetAttestationDocument``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAttestationDocument`: ParameterStorageAttestationDocument
    fmt.Fprintf(os.Stdout, "Response from `ParameterStorageAPI.GetAttestationDocument`: %v\n", resp)
}
```

[[Back to top]](#)

## get-parameter
Get a specific parameter.
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the parameter to be fetched | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetParameterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ParameterStorageParameter**](../models/parameter-storage-parameter)

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
    id := `58de858b-83d9-4563-9e15-7393594c684a` // string | The ID of the parameter to be fetched # string | The ID of the parameter to be fetched

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ParameterStorageAPI.GetParameter(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.ParameterStorageAPI.GetParameter(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.GetParameter``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetParameter`: ParameterStorageParameter
    fmt.Fprintf(os.Stdout, "Response from `ParameterStorageAPI.GetParameter`: %v\n", resp)
}
```

[[Back to top]](#)

## get-parameter-references
Get parameter references.
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter-references)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the parameter which you want to fetch the references for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetParameterReferencesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]ParameterStorageReference**](../models/parameter-storage-reference)

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
    id := `58de858b-83d9-4563-9e15-7393594c684a` // string | The ID of the parameter which you want to fetch the references for. # string | The ID of the parameter which you want to fetch the references for.
    sorters := `consumerId,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ParameterStorageAPI.GetParameterReferences(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.ParameterStorageAPI.GetParameterReferences(context.Background(), id).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.GetParameterReferences``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetParameterReferences`: []ParameterStorageReference
    fmt.Fprintf(os.Stdout, "Response from `ParameterStorageAPI.GetParameterReferences`: %v\n", resp)
}
```

[[Back to top]](#)

## get-parameter-storage-specification
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
Get specifications for parameter types.
Get the specifications for all parameter types. All parameters must conform to this specification document.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-parameter-storage-specification)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetParameterStorageSpecificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **acceptLanguage** | **string** | The i18n internationalization code for the language that the spec is in. Defaults to english. | [default to &quot;en&quot;]

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
    acceptLanguage := `en` // string | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to "en") # string | The i18n internationalization code for the language that the spec is in. Defaults to english. (optional) (default to "en")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ParameterStorageAPI.GetParameterStorageSpecification(context.Background()).Execute()
	  //r, err := apiClient.V2025.ParameterStorageAPI.GetParameterStorageSpecification(context.Background()).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.GetParameterStorageSpecification``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## search-parameters
Query stored parameters.
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/search-parameters)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchParametersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]ParameterStorageParameter**](../models/parameter-storage-parameter)

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
    filters := `id eq 550e8400-e29b-41d4-a716-446655440000` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional)
    sorters := `type,name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ParameterStorageAPI.SearchParameters(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.ParameterStorageAPI.SearchParameters(context.Background()).Filters(filters).Sorters(sorters).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.SearchParameters``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SearchParameters`: []ParameterStorageParameter
    fmt.Fprintf(os.Stdout, "Response from `ParameterStorageAPI.SearchParameters`: %v\n", resp)
}
```

[[Back to top]](#)

## update-parameter
Update a parameter.
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-parameter)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the parameter to be updated. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateParameterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **parameterStorageUpdateParameter** | [**ParameterStorageUpdateParameter**](../models/parameter-storage-update-parameter) | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. | 

### Return type

[**ParameterStorageParameter**](../models/parameter-storage-parameter)

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json
- **Accept**: application/json, schema

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
    id := `58de858b-83d9-4563-9e15-7393594c684a` // string | The ID of the parameter to be updated. # string | The ID of the parameter to be updated.
    parameterstorageupdateparameter := []byte(`{
          "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
          "name" : "Credentials for server.",
          "description" : "Credentials for server.",
          "publicFields" : "{\"username\": \"username\"}",
          "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b"
        }{
          "privateFields" : "ZW5jcnlwdGVkIHBhc3N3b3JkIGhlcmUu",
          "name" : "Credentials for server.",
          "description" : "Credentials for server.",
          "publicFields" : "{\"username\": \"username\"}",
          "ownerId" : "c0b4568a4fe7458c434ee77d1fbt156b"
        }`) // ParameterStorageUpdateParameter | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ParameterStorageAPI.UpdateParameter(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.ParameterStorageAPI.UpdateParameter(context.Background(), id).ParameterStorageUpdateParameter(parameterStorageUpdateParameter).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ParameterStorageAPI.UpdateParameter``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateParameter`: ParameterStorageParameter
    fmt.Fprintf(os.Stdout, "Response from `ParameterStorageAPI.UpdateParameter`: %v\n", resp)
}
```

[[Back to top]](#)

