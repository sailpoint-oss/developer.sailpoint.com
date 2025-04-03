---
id: v2025-managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClients', 'V2025ManagedClients'] 
slug: /tools/sdk/go/v2025/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients', 'V2025ManagedClients']
---

# ManagedClientsAPI
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-client**](#create-managed-client) | **Post** `/managed-clients` | Create Managed Client
[**delete-managed-client**](#delete-managed-client) | **Delete** `/managed-clients/{id}` | Delete Managed Client
[**get-managed-client**](#get-managed-client) | **Get** `/managed-clients/{id}` | Get Managed Client
[**get-managed-client-status**](#get-managed-client-status) | **Get** `/managed-clients/{id}/status` | Get Managed Client Status
[**get-managed-clients**](#get-managed-clients) | **Get** `/managed-clients` | Get Managed Clients
[**update-managed-client**](#update-managed-client) | **Patch** `/managed-clients/{id}` | Update Managed Client


## create-managed-client
Create Managed Client
Create a new managed client.
The API returns a result that includes the managed client ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-managed-client)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateManagedClientRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedClientRequest** | [**ManagedClientRequest**](../models/managed-client-request) |  | 

### Return type

[**ManagedClient**](../models/managed-client)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    managedClientRequest := fmt.Sprintf(`{
          "name" : "aName",
          "description" : "A short description of the ManagedClient",
          "clusterId" : "aClusterId",
          "type" : "VA"
        }`) # ManagedClientRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.ManagedClientsAPI.CreateManagedClient(context.Background()).ManagedClientRequest(managedClientRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.CreateManagedClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateManagedClient`: ManagedClient
	fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.CreateManagedClient`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-managed-client
Delete Managed Client
Delete an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-managed-client)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteManagedClientRequest struct via the builder pattern


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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7 # string | Managed client ID. # string | Managed client ID.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V2025.ManagedClientsAPI.DeleteManagedClient(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.DeleteManagedClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-managed-client
Get Managed Client
Get managed client by ID. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-managed-client)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ManagedClient**](../models/managed-client)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7 # string | Managed client ID. # string | Managed client ID.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.ManagedClientsAPI.GetManagedClient(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedClient`: ManagedClient
	fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClient`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-client-status
Get Managed Client Status
Get a managed client's status, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-managed-client-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID to get status for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | [**ManagedClientType**](../models/managed-client-type) | Managed client type to get status for. | 

### Return type

[**ManagedClientStatus**](../models/managed-client-status)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := aClientId # string | Managed client ID to get status for. # string | Managed client ID to get status for.
    type_ :=  # ManagedClientType | Managed client type to get status for. # ManagedClientType | Managed client type to get status for.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.ManagedClientsAPI.GetManagedClientStatus(context.Background(), id).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClientStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedClientStatus`: ManagedClientStatus
	fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClientStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-clients
Get Managed Clients
List managed clients.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-managed-clients)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* | 

### Return type

[**[]ManagedClient**](../models/managed-client)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := name eq "client name" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.ManagedClientsAPI.GetManagedClients(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClients``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedClients`: []ManagedClient
	fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClients`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-client
Update Managed Client
Update an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-managed-client)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClientRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSONPatch payload used to update the object. | 

### Return type

[**ManagedClient**](../models/managed-client)

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
  v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7 # string | Managed client ID. # string | Managed client ID.
    jsonPatchOperation := fmt.Sprintf(``) # []JsonPatchOperation | JSONPatch payload used to update the object.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2025.ManagedClientsAPI.UpdateManagedClient(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.UpdateManagedClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateManagedClient`: ManagedClient
	fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.UpdateManagedClient`: %v\n", resp)
}
```

[[Back to top]](#)

