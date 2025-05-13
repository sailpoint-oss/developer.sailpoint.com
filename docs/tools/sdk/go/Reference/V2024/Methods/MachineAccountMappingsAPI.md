---
id: v2024-machine-account-mappings
title: MachineAccountMappings
pagination_label: MachineAccountMappings
sidebar_label: MachineAccountMappings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineAccountMappings', 'V2024MachineAccountMappings'] 
slug: /tools/sdk/go/v2024/methods/machine-account-mappings
tags: ['SDK', 'Software Development Kit', 'MachineAccountMappings', 'V2024MachineAccountMappings']
---

# MachineAccountMappingsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-mappings**](#create-machine-account-mappings) | **Post** `/sources/{sourceId}/machine-account-mappings` | Create Machine Account Mappings
[**delete-machine-account-mappings**](#delete-machine-account-mappings) | **Delete** `/sources/{sourceId}/machine-account-mappings` | Delete Source&#39;s Machine Account Mappings
[**list-machine-account-mappings**](#list-machine-account-mappings) | **Get** `/sources/{sourceId}/machine-account-mappings` | Machine Account Mapping for Source
[**set-machine-account-mappings**](#set-machine-account-mappings) | **Put** `/sources/{sourceId}/machine-mappings` | Update Source&#39;s Machine Account Mappings


## create-machine-account-mappings
Create Machine Account Mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-machine-account-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateMachineAccountMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **attributeMappings** | [**AttributeMappings**](../models/attribute-mappings) |  | 

### Return type

[**[]AttributeMappings**](../models/attribute-mappings)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    data := []byte(`{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }`) // AttributeMappings | 

  
   var attributeMappings v2024.AttributeMappings
   if err := json.Unmarshal(data, &attributeMappings); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountMappingsAPI.CreateMachineAccountMappings(context.Background(), id).AttributeMappings(attributeMappings).Execute()
	//resp, r, err := apiClient.V2024.MachineAccountMappingsAPI.CreateMachineAccountMappings(context.Background(), id).AttributeMappings(attributeMappings).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.CreateMachineAccountMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMachineAccountMappings`: []AttributeMappings
	fmt.Fprintf(os.Stdout, "Response from `MachineAccountMappingsAPI.CreateMachineAccountMappings`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-machine-account-mappings
Delete Source's Machine Account Mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-account-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMachineAccountMappingsRequest struct via the builder pattern


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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | source ID. # string | source ID.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2024.MachineAccountMappingsAPI.DeleteMachineAccountMappings(context.Background(), id).Execute()
	//r, err := apiClient.V2024.MachineAccountMappingsAPI.DeleteMachineAccountMappings(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.DeleteMachineAccountMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## list-machine-account-mappings
Machine Account Mapping for Source
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-machine-account-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiListMachineAccountMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]AttributeMappings**](../models/attribute-mappings)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID # string | Source ID
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountMappingsAPI.ListMachineAccountMappings(context.Background(), id).Execute()
	//resp, r, err := apiClient.V2024.MachineAccountMappingsAPI.ListMachineAccountMappings(context.Background(), id).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.ListMachineAccountMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListMachineAccountMappings`: []AttributeMappings
	fmt.Fprintf(os.Stdout, "Response from `MachineAccountMappingsAPI.ListMachineAccountMappings`: %v\n", resp)
}
```

[[Back to top]](#)

## set-machine-account-mappings
Update Source's Machine Account Mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-machine-account-mappings)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Source ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetMachineAccountMappingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **attributeMappings** | [**AttributeMappings**](../models/attribute-mappings) |  | 

### Return type

[**[]AttributeMappings**](../models/attribute-mappings)

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
    v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | Source ID. # string | Source ID.
    data := []byte(`{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }`) // AttributeMappings | 

  
   var attributeMappings v2024.AttributeMappings
   if err := json.Unmarshal(data, &attributeMappings); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.MachineAccountMappingsAPI.SetMachineAccountMappings(context.Background(), id).AttributeMappings(attributeMappings).Execute()
	//resp, r, err := apiClient.V2024.MachineAccountMappingsAPI.SetMachineAccountMappings(context.Background(), id).AttributeMappings(attributeMappings).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MachineAccountMappingsAPI.SetMachineAccountMappings``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SetMachineAccountMappings`: []AttributeMappings
	fmt.Fprintf(os.Stdout, "Response from `MachineAccountMappingsAPI.SetMachineAccountMappings`: %v\n", resp)
}
```

[[Back to top]](#)

