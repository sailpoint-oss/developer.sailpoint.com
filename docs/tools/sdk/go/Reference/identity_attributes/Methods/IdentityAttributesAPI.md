---
id: v1-identity-attributes
title: IdentityAttributes
pagination_label: IdentityAttributes
sidebar_label: IdentityAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributes', 'V1IdentityAttributes'] 
slug: /tools/sdk/go/identityattributes/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'IdentityAttributes', 'V1IdentityAttributes']
---

# IdentityAttributesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute-v1**](#create-identity-attribute-v1) | **Post** `/identity-attributes/v1` | Create identity attribute
[**delete-identity-attribute-v1**](#delete-identity-attribute-v1) | **Delete** `/identity-attributes/v1/{name}` | Delete identity attribute
[**delete-identity-attributes-in-bulk-v1**](#delete-identity-attributes-in-bulk-v1) | **Delete** `/identity-attributes/v1/bulk-delete` | Bulk delete identity attributes
[**get-identity-attribute-v1**](#get-identity-attribute-v1) | **Get** `/identity-attributes/v1/{name}` | Get identity attribute
[**list-identity-attributes-v1**](#list-identity-attributes-v1) | **Get** `/identity-attributes/v1` | List identity attributes
[**put-identity-attribute-v1**](#put-identity-attribute-v1) | **Put** `/identity-attributes/v1/{name}` | Update identity attribute


## create-identity-attribute-v1
Create identity attribute
Use this API to create a new identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-attribute-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIdentityAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityattribute2** | [**Identityattribute2**](../models/identityattribute2) |  | 

### Return type

[**Identityattribute2**](../models/identityattribute2)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
)

func main() {
    identityattribute2 := []byte(``) // Identityattribute2 | 

    var identityattribute2 v1.Identityattribute2
    if err := json.Unmarshal(identityattribute2, &identityattribute2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityAttributesAPI.CreateIdentityAttributeV1(context.Background()).Identityattribute2(identityattribute2).Execute()
	  //resp, r, err := apiClient.IdentityAttributesAPI.CreateIdentityAttributeV1(context.Background()).Identityattribute2(identityattribute2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.CreateIdentityAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateIdentityAttributeV1`: Identityattribute2
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.CreateIdentityAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-identity-attribute-v1
Delete identity attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityAttributeV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
)

func main() {
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.IdentityAttributesAPI.DeleteIdentityAttributeV1(context.Background(), name).Execute()
	  //r, err := apiClient.IdentityAttributesAPI.DeleteIdentityAttributeV1(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.DeleteIdentityAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-identity-attributes-in-bulk-v1
Bulk delete identity attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-attributes-in-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityAttributesInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityattributenames** | [**Identityattributenames**](../models/identityattributenames) |  | 

### Return type

 (empty response body)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
)

func main() {
    identityattributenames := []byte(``) // Identityattributenames | 

    var identityattributenames v1.Identityattributenames
    if err := json.Unmarshal(identityattributenames, &identityattributenames); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.IdentityAttributesAPI.DeleteIdentityAttributesInBulkV1(context.Background()).Identityattributenames(identityattributenames).Execute()
	  //r, err := apiClient.IdentityAttributesAPI.DeleteIdentityAttributesInBulkV1(context.Background()).Identityattributenames(identityattributenames).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.DeleteIdentityAttributesInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-identity-attribute-v1
Get identity attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Identityattribute2**](../models/identityattribute2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
)

func main() {
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityAttributesAPI.GetIdentityAttributeV1(context.Background(), name).Execute()
	  //resp, r, err := apiClient.IdentityAttributesAPI.GetIdentityAttributeV1(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.GetIdentityAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityAttributeV1`: Identityattribute2
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.GetIdentityAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-attributes-v1
List identity attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-attributes-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeSystem** | **bool** | Include &#39;system&#39; attributes in the response. | [default to false]
 **includeSilent** | **bool** | Include &#39;silent&#39; attributes in the response. | [default to false]
 **searchableOnly** | **bool** | Include only &#39;searchable&#39; attributes in the response. | [default to false]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Identityattribute2**](../models/identityattribute2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
)

func main() {
    includeSystem := false // bool | Include 'system' attributes in the response. (optional) (default to false) # bool | Include 'system' attributes in the response. (optional) (default to false)
    includeSilent := false // bool | Include 'silent' attributes in the response. (optional) (default to false) # bool | Include 'silent' attributes in the response. (optional) (default to false)
    searchableOnly := false // bool | Include only 'searchable' attributes in the response. (optional) (default to false) # bool | Include only 'searchable' attributes in the response. (optional) (default to false)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityAttributesAPI.ListIdentityAttributesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.IdentityAttributesAPI.ListIdentityAttributesV1(context.Background()).IncludeSystem(includeSystem).IncludeSilent(includeSilent).SearchableOnly(searchableOnly).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.ListIdentityAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentityAttributesV1`: []Identityattribute2
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.ListIdentityAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-identity-attribute-v1
Update identity attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-identity-attribute-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutIdentityAttributeV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **identityattribute2** | [**Identityattribute2**](../models/identityattribute2) |  | 

### Return type

[**Identityattribute2**](../models/identityattribute2)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/identity_attributes"
)

func main() {
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.
    identityattribute2 := []byte(``) // Identityattribute2 | 

    var identityattribute2 v1.Identityattribute2
    if err := json.Unmarshal(identityattribute2, &identityattribute2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IdentityAttributesAPI.PutIdentityAttributeV1(context.Background(), name).Identityattribute2(identityattribute2).Execute()
	  //resp, r, err := apiClient.IdentityAttributesAPI.PutIdentityAttributeV1(context.Background(), name).Identityattribute2(identityattribute2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.PutIdentityAttributeV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutIdentityAttributeV1`: Identityattribute2
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.PutIdentityAttributeV1`: %v\n", resp)
}
```

[[Back to top]](#)

