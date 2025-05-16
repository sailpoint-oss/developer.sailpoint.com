---
id: beta-search-attribute-configuration
title: SearchAttributeConfiguration
pagination_label: SearchAttributeConfiguration
sidebar_label: SearchAttributeConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchAttributeConfiguration', 'BetaSearchAttributeConfiguration'] 
slug: /tools/sdk/go/beta/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'SearchAttributeConfiguration', 'BetaSearchAttributeConfiguration']
---

# SearchAttributeConfigurationAPI
  Use this API to implement search attribute configuration functionality, along with [Search](https://developer.sailpoint.com/docs/api/v3/search).
With this functionality in place, administrators can create custom search attributes that and run extended searches based on those attributes to further narrow down their searches and get the information and insights they want. 

Identity Security Cloud (ISC) enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using ISC&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Using Search](https://documentation.sailpoint.com/saas/help/search/index.html) for more information about ISC&#39;s search and its different possibilities. 

With Search Attribute Configuration, administrators can create, manage, and run searches based on the attributes they want to search.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-search-attribute-config**](#create-search-attribute-config) | **Post** `/accounts/search-attribute-config` | Create Extended Search Attributes
[**delete-search-attribute-config**](#delete-search-attribute-config) | **Delete** `/accounts/search-attribute-config/{name}` | Delete Extended Search Attribute
[**get-search-attribute-config**](#get-search-attribute-config) | **Get** `/accounts/search-attribute-config` | List Extended Search Attributes
[**get-single-search-attribute-config**](#get-single-search-attribute-config) | **Get** `/accounts/search-attribute-config/{name}` | Get Extended Search Attribute
[**patch-search-attribute-config**](#patch-search-attribute-config) | **Patch** `/accounts/search-attribute-config/{name}` | Update Extended Search Attribute


## create-search-attribute-config
Create Extended Search Attributes
Create and configure extended search attributes.  This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig.
>**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes' `applicationAttributes`.**

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-search-attribute-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSearchAttributeConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchAttributeConfig** | [**SearchAttributeConfig**](../models/search-attribute-config) |  | 

### Return type

**map[string]interface{}**

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
    searchattributeconfig := []byte(`{
          "displayName" : "New Mail Attribute",
          "name" : "newMailAttribute",
          "applicationAttributes" : {
            "2c91808b79fd2422017a0b35d30f3968" : "employeeNumber",
            "2c91808b79fd2422017a0b36008f396b" : "employeeNumber"
          }
        }`) // SearchAttributeConfig | 

    var searchAttributeConfig beta.SearchAttributeConfig
    if err := json.Unmarshal(searchattributeconfig, &searchAttributeConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.CreateSearchAttributeConfig(context.Background()).SearchAttributeConfig(searchAttributeConfig).Execute()
	  //resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.CreateSearchAttributeConfig(context.Background()).SearchAttributeConfig(searchAttributeConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAttributeConfigurationAPI.CreateSearchAttributeConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSearchAttributeConfig`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `SearchAttributeConfigurationAPI.CreateSearchAttributeConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-search-attribute-config
Delete Extended Search Attribute
Delete an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-search-attribute-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the extended search attribute configuration to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSearchAttributeConfigRequest struct via the builder pattern


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
    name := `newMailAttribute` // string | Name of the extended search attribute configuration to delete. # string | Name of the extended search attribute configuration to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.SearchAttributeConfigurationAPI.DeleteSearchAttributeConfig(context.Background(), name).Execute()
	  //r, err := apiClient.Beta.SearchAttributeConfigurationAPI.DeleteSearchAttributeConfig(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAttributeConfigurationAPI.DeleteSearchAttributeConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-search-attribute-config
List Extended Search Attributes
Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-search-attribute-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSearchAttributeConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]SearchAttributeConfig**](../models/search-attribute-config)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.GetSearchAttributeConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.GetSearchAttributeConfig(context.Background()).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAttributeConfigurationAPI.GetSearchAttributeConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSearchAttributeConfig`: []SearchAttributeConfig
    fmt.Fprintf(os.Stdout, "Response from `SearchAttributeConfigurationAPI.GetSearchAttributeConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-single-search-attribute-config
Get Extended Search Attribute
Get an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-single-search-attribute-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the extended search attribute configuration to get. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSingleSearchAttributeConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]SearchAttributeConfig**](../models/search-attribute-config)

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
    name := `newMailAttribute` // string | Name of the extended search attribute configuration to get. # string | Name of the extended search attribute configuration to get.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.GetSingleSearchAttributeConfig(context.Background(), name).Execute()
	  //resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.GetSingleSearchAttributeConfig(context.Background(), name).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAttributeConfigurationAPI.GetSingleSearchAttributeConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSingleSearchAttributeConfig`: []SearchAttributeConfig
    fmt.Fprintf(os.Stdout, "Response from `SearchAttributeConfigurationAPI.GetSingleSearchAttributeConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-search-attribute-config
Update Extended Search Attribute
Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-search-attribute-config)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**name** | **string** | Name of the extended search attribute configuration to patch. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchSearchAttributeConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) |  | 

### Return type

[**SearchAttributeConfig**](../models/search-attribute-config)

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
    name := `promotedMailAttribute` // string | Name of the extended search attribute configuration to patch. # string | Name of the extended search attribute configuration to patch.
    jsonpatchoperation := []byte(`[{op=replace, path=/name, value=newAttributeName}, {op=replace, path=/displayName, value=new attribute display name}, {op=add, path=/applicationAttributes, value={2c91808b79fd2422017a0b35d30f3968=employeeNumber}}]`) // []JsonPatchOperation | 

    var jsonPatchOperation []beta.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.PatchSearchAttributeConfig(context.Background(), name).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.Beta.SearchAttributeConfigurationAPI.PatchSearchAttributeConfig(context.Background(), name).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SearchAttributeConfigurationAPI.PatchSearchAttributeConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchSearchAttributeConfig`: SearchAttributeConfig
    fmt.Fprintf(os.Stdout, "Response from `SearchAttributeConfigurationAPI.PatchSearchAttributeConfig`: %v\n", resp)
}
```

[[Back to top]](#)

