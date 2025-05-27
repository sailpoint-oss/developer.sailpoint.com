---
id: beta-identity-attributes
title: IdentityAttributes
pagination_label: IdentityAttributes
sidebar_label: IdentityAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributes', 'BetaIdentityAttributes'] 
slug: /tools/sdk/go/beta/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'IdentityAttributes', 'BetaIdentityAttributes']
---

# IdentityAttributesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute**](#create-identity-attribute) | **Post** `/identity-attributes` | Create identity attribute
[**delete-identity-attribute**](#delete-identity-attribute) | **Delete** `/identity-attributes/{name}` | Delete identity attribute
[**delete-identity-attributes-in-bulk**](#delete-identity-attributes-in-bulk) | **Delete** `/identity-attributes/bulk-delete` | Bulk delete identity attributes
[**get-identity-attribute**](#get-identity-attribute) | **Get** `/identity-attributes/{name}` | Get identity attribute
[**list-identity-attributes**](#list-identity-attributes) | **Get** `/identity-attributes` | List identity attributes
[**put-identity-attribute**](#put-identity-attribute) | **Put** `/identity-attributes/{name}` | Update identity attribute


## create-identity-attribute
Create identity attribute
Use this API to create a new identity attribute.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-identity-attribute)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIdentityAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityAttribute** | [**IdentityAttribute**](../models/identity-attribute) |  | 

### Return type

[**IdentityAttribute**](../models/identity-attribute)

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
    identityattribute := []byte(`{
          "standard" : false,
          "system" : false,
          "sources" : [ {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          }, {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          } ],
          "displayName" : "Cost Center",
          "name" : "costCenter",
          "type" : "string",
          "searchable" : false,
          "multi" : false
        }`) // IdentityAttribute | 

    var identityAttribute beta.IdentityAttribute
    if err := json.Unmarshal(identityattribute, &identityAttribute); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityAttributesAPI.CreateIdentityAttribute(context.Background()).IdentityAttribute(identityAttribute).Execute()
	  //resp, r, err := apiClient.Beta.IdentityAttributesAPI.CreateIdentityAttribute(context.Background()).IdentityAttribute(identityAttribute).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.CreateIdentityAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateIdentityAttribute`: IdentityAttribute
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.CreateIdentityAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-identity-attribute
Delete identity attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityAttributeRequest struct via the builder pattern


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
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.IdentityAttributesAPI.DeleteIdentityAttribute(context.Background(), name).Execute()
	  //r, err := apiClient.Beta.IdentityAttributesAPI.DeleteIdentityAttribute(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.DeleteIdentityAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-identity-attributes-in-bulk
Bulk delete identity attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity-attributes-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityAttributesInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **identityAttributeNames** | [**IdentityAttributeNames**](../models/identity-attribute-names) |  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityattributenames := []byte(`{
          "ids" : [ "name", "displayName" ]
        }`) // IdentityAttributeNames | 

    var identityAttributeNames beta.IdentityAttributeNames
    if err := json.Unmarshal(identityattributenames, &identityAttributeNames); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.IdentityAttributesAPI.DeleteIdentityAttributesInBulk(context.Background()).IdentityAttributeNames(identityAttributeNames).Execute()
	  //r, err := apiClient.Beta.IdentityAttributesAPI.DeleteIdentityAttributesInBulk(context.Background()).IdentityAttributeNames(identityAttributeNames).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.DeleteIdentityAttributesInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-identity-attribute
Get identity attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**IdentityAttribute**](../models/identity-attribute)

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
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityAttributesAPI.GetIdentityAttribute(context.Background(), name).Execute()
	  //resp, r, err := apiClient.Beta.IdentityAttributesAPI.GetIdentityAttribute(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.GetIdentityAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityAttribute`: IdentityAttribute
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.GetIdentityAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-attributes
List identity attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identity-attributes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeSystem** | **bool** | Include &#39;system&#39; attributes in the response. | [default to false]
 **includeSilent** | **bool** | Include &#39;silent&#39; attributes in the response. | [default to false]
 **searchableOnly** | **bool** | Include only &#39;searchable&#39; attributes in the response. | [default to false]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]IdentityAttribute**](../models/identity-attribute)

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
    includeSystem := false // bool | Include 'system' attributes in the response. (optional) (default to false) # bool | Include 'system' attributes in the response. (optional) (default to false)
    includeSilent := false // bool | Include 'silent' attributes in the response. (optional) (default to false) # bool | Include 'silent' attributes in the response. (optional) (default to false)
    searchableOnly := false // bool | Include only 'searchable' attributes in the response. (optional) (default to false) # bool | Include only 'searchable' attributes in the response. (optional) (default to false)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityAttributesAPI.ListIdentityAttributes(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.IdentityAttributesAPI.ListIdentityAttributes(context.Background()).IncludeSystem(includeSystem).IncludeSilent(includeSilent).SearchableOnly(searchableOnly).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.ListIdentityAttributes``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentityAttributes`: []IdentityAttribute
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.ListIdentityAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## put-identity-attribute
Update identity attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-identity-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutIdentityAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **identityAttribute** | [**IdentityAttribute**](../models/identity-attribute) |  | 

### Return type

[**IdentityAttribute**](../models/identity-attribute)

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
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.
    identityattribute := []byte(`{
          "standard" : false,
          "system" : false,
          "sources" : [ {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          }, {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          } ],
          "displayName" : "Cost Center",
          "name" : "costCenter",
          "type" : "string",
          "searchable" : false,
          "multi" : false
        }`) // IdentityAttribute | 

    var identityAttribute beta.IdentityAttribute
    if err := json.Unmarshal(identityattribute, &identityAttribute); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IdentityAttributesAPI.PutIdentityAttribute(context.Background(), name).IdentityAttribute(identityAttribute).Execute()
	  //resp, r, err := apiClient.Beta.IdentityAttributesAPI.PutIdentityAttribute(context.Background(), name).IdentityAttribute(identityAttribute).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.PutIdentityAttribute``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutIdentityAttribute`: IdentityAttribute
    fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.PutIdentityAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

