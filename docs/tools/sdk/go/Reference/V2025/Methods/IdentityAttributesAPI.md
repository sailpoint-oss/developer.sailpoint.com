---
id: v2025-identity-attributes
title: IdentityAttributes
pagination_label: IdentityAttributes
sidebar_label: IdentityAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributes', 'V2025IdentityAttributes'] 
slug: /tools/sdk/go/v2025/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'IdentityAttributes', 'V2025IdentityAttributes']
---

# IdentityAttributesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute**](#create-identity-attribute) | **Post** `/identity-attributes` | Create Identity Attribute
[**delete-identity-attribute**](#delete-identity-attribute) | **Delete** `/identity-attributes/{name}` | Delete Identity Attribute
[**delete-identity-attributes-in-bulk**](#delete-identity-attributes-in-bulk) | **Delete** `/identity-attributes/bulk-delete` | Bulk delete Identity Attributes
[**get-identity-attribute**](#get-identity-attribute) | **Get** `/identity-attributes/{name}` | Get Identity Attribute
[**list-identity-attributes**](#list-identity-attributes) | **Get** `/identity-attributes` | List Identity Attributes
[**put-identity-attribute**](#put-identity-attribute) | **Put** `/identity-attributes/{name}` | Update Identity Attribute


## create-identity-attribute
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create Identity Attribute
Use this API to create a new identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-identity-attribute)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateIdentityAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    data := []byte(`{
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

  
   var identityAttribute v2025.IdentityAttribute
   if err := json.Unmarshal(data, &identityAttribute); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IdentityAttributesAPI.CreateIdentityAttribute(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentityAttribute(identityAttribute).Execute()
	//resp, r, err := apiClient.V2025.IdentityAttributesAPI.CreateIdentityAttribute(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentityAttribute(identityAttribute).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Identity Attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-identity-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityAttributeRequest struct via the builder pattern


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
   
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.IdentityAttributesAPI.DeleteIdentityAttribute(context.Background(), name).XSailPointExperimental(xSailPointExperimental).Execute()
	//r, err := apiClient.V2025.IdentityAttributesAPI.DeleteIdentityAttribute(context.Background(), name).XSailPointExperimental(xSailPointExperimental).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.DeleteIdentityAttribute``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-identity-attributes-in-bulk
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Bulk delete Identity Attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-identity-attributes-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteIdentityAttributesInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    data := []byte(`{
          "ids" : [ "name", "displayName" ]
        }`) // IdentityAttributeNames | 

  
   var identityAttributeNames v2025.IdentityAttributeNames
   if err := json.Unmarshal(data, &identityAttributeNames); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.IdentityAttributesAPI.DeleteIdentityAttributesInBulk(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentityAttributeNames(identityAttributeNames).Execute()
	//r, err := apiClient.V2025.IdentityAttributesAPI.DeleteIdentityAttributesInBulk(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentityAttributeNames(identityAttributeNames).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.DeleteIdentityAttributesInBulk``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-identity-attribute
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Identity Attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-identity-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IdentityAttributesAPI.GetIdentityAttribute(context.Background(), name).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IdentityAttributesAPI.GetIdentityAttribute(context.Background(), name).XSailPointExperimental(xSailPointExperimental).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List Identity Attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-identity-attributes)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    includeSystem := false // bool | Include 'system' attributes in the response. (optional) (default to false) # bool | Include 'system' attributes in the response. (optional) (default to false)
    includeSilent := false // bool | Include 'silent' attributes in the response. (optional) (default to false) # bool | Include 'silent' attributes in the response. (optional) (default to false)
    searchableOnly := false // bool | Include only 'searchable' attributes in the response. (optional) (default to false) # bool | Include only 'searchable' attributes in the response. (optional) (default to false)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IdentityAttributesAPI.ListIdentityAttributes(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	//resp, r, err := apiClient.V2025.IdentityAttributesAPI.ListIdentityAttributes(context.Background()).XSailPointExperimental(xSailPointExperimental).IncludeSystem(includeSystem).IncludeSilent(includeSilent).SearchableOnly(searchableOnly).Count(count).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Identity Attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-identity-attribute)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | The attribute&#39;s technical name. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutIdentityAttributeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    name := `displayName` // string | The attribute's technical name. # string | The attribute's technical name.
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    data := []byte(`{
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

  
   var identityAttribute v2025.IdentityAttribute
   if err := json.Unmarshal(data, &identityAttribute); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IdentityAttributesAPI.PutIdentityAttribute(context.Background(), name).XSailPointExperimental(xSailPointExperimental).IdentityAttribute(identityAttribute).Execute()
	//resp, r, err := apiClient.V2025.IdentityAttributesAPI.PutIdentityAttribute(context.Background(), name).XSailPointExperimental(xSailPointExperimental).IdentityAttribute(identityAttribute).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityAttributesAPI.PutIdentityAttribute``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutIdentityAttribute`: IdentityAttribute
	fmt.Fprintf(os.Stdout, "Response from `IdentityAttributesAPI.PutIdentityAttribute`: %v\n", resp)
}
```

[[Back to top]](#)

