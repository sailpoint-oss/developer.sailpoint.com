---
id: managed-cluster-types
title: ManagedClusterTypes
pagination_label: ManagedClusterTypes
sidebar_label: ManagedClusterTypes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterTypes', 'ManagedClusterTypes'] 
slug: /tools/sdk/go//methods/managed-cluster-types
tags: ['SDK', 'Software Development Kit', 'ManagedClusterTypes', 'ManagedClusterTypes']
---

# ManagedClusterTypesAPI
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-type**](#create-managed-cluster-type) | **Post** `/managed-cluster-types` | Create new Managed Cluster Type
[**delete-managed-cluster-type**](#delete-managed-cluster-type) | **Delete** `/managed-cluster-types/{id}` | Delete a Managed Cluster Type
[**get-managed-cluster-type**](#get-managed-cluster-type) | **Get** `/managed-cluster-types/{id}` | Get a Managed Cluster Type
[**get-managed-cluster-types**](#get-managed-cluster-types) | **Get** `/managed-cluster-types` | List Managed Cluster Types
[**update-managed-cluster-type**](#update-managed-cluster-type) | **Patch** `/managed-cluster-types/{id}` | Update a Managed Cluster Type


## create-managed-cluster-type
Create new Managed Cluster Type
Create a new Managed Cluster Type.

The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api//create-managed-cluster-type)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateManagedClusterTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedClusterType** | [**ManagedClusterType**](../models/managed-cluster-type) |  | 

### Return type

[**ManagedClusterType**](../models/managed-cluster-type)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    managedClusterType := fmt.Sprintf(`{
          "managedProcessIds" : [ "someId", "someId2" ],
          "pod" : "megapod-useast1",
          "org" : "denali-cjh",
          "id" : "aClusterTypeId",
          "type" : "idn"
        }`) # ManagedClusterType | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..ManagedClusterTypesAPI.CreateManagedClusterType(context.Background()).ManagedClusterType(managedClusterType).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.CreateManagedClusterType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateManagedClusterType`: ManagedClusterType
	fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.CreateManagedClusterType`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-managed-cluster-type
Delete a Managed Cluster Type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api//delete-managed-cluster-type)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Managed Cluster Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteManagedClusterTypeRequest struct via the builder pattern


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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := aClusterTypeId # string | The Managed Cluster Type ID # string | The Managed Cluster Type ID

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient..ManagedClusterTypesAPI.DeleteManagedClusterType(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.DeleteManagedClusterType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-managed-cluster-type
Get a Managed Cluster Type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api//get-managed-cluster-type)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Managed Cluster Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClusterTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ManagedClusterType**](../models/managed-cluster-type)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := aClusterTypeId # string | The Managed Cluster Type ID # string | The Managed Cluster Type ID

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..ManagedClusterTypesAPI.GetManagedClusterType(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.GetManagedClusterType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedClusterType`: ManagedClusterType
	fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.GetManagedClusterType`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-cluster-types
List Managed Cluster Types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api//get-managed-cluster-types)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClusterTypesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type_** | **string** | Type descriptor | 
 **pod** | **string** | Pinned pod (or default) | 
 **org** | **string** | Pinned org (or default) | 
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]ManagedClusterType**](../models/managed-cluster-type)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    type_ := IDN # string | Type descriptor (optional) # string | Type descriptor (optional)
    pod := megapod-useast1 # string | Pinned pod (or default) (optional) # string | Pinned pod (or default) (optional)
    org := denali-xyz # string | Pinned org (or default) (optional) # string | Pinned org (or default) (optional)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..ManagedClusterTypesAPI.GetManagedClusterTypes(context.Background()).Type_(type_).Pod(pod).Org(org).Offset(offset).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.GetManagedClusterTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedClusterTypes`: []ManagedClusterType
	fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.GetManagedClusterTypes`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-cluster-type
Update a Managed Cluster Type
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api//update-managed-cluster-type)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Managed Cluster Type ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClusterTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | The JSONPatch payload used to update the schema. | 

### Return type

[**ManagedClusterType**](../models/managed-cluster-type)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := aClusterTypeId # string | The Managed Cluster Type ID # string | The Managed Cluster Type ID
    jsonPatch := fmt.Sprintf(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) # JsonPatch | The JSONPatch payload used to update the schema.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..ManagedClusterTypesAPI.UpdateManagedClusterType(context.Background(), id).JsonPatch(jsonPatch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClusterTypesAPI.UpdateManagedClusterType``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateManagedClusterType`: ManagedClusterType
	fmt.Fprintf(os.Stdout, "Response from `ManagedClusterTypesAPI.UpdateManagedClusterType`: %v\n", resp)
}
```

[[Back to top]](#)

