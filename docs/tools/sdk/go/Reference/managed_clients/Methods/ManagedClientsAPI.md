---
id: v1-managed-clients
title: ManagedClients
pagination_label: ManagedClients
sidebar_label: ManagedClients
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClients', 'V1ManagedClients'] 
slug: /tools/sdk/go/managedclients/methods/managed-clients
tags: ['SDK', 'Software Development Kit', 'ManagedClients', 'V1ManagedClients']
---

# ManagedClientsAPI
  Use this API to implement managed client functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, create new ones, and view and make changes to their log configurations.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-client-v1**](#create-managed-client-v1) | **Post** `/managed-clients/v1` | Create managed client
[**delete-managed-client-v1**](#delete-managed-client-v1) | **Delete** `/managed-clients/v1/{id}` | Delete managed client
[**get-managed-client-health-indicators-v1**](#get-managed-client-health-indicators-v1) | **Get** `/managed-clients/v1/{id}/health-indicators` | Get managed client health indicators
[**get-managed-client-status-v1**](#get-managed-client-status-v1) | **Get** `/managed-clients/v1/{id}/status` | Get managed client status
[**get-managed-client-v1**](#get-managed-client-v1) | **Get** `/managed-clients/v1/{id}` | Get managed client
[**get-managed-clients-v1**](#get-managed-clients-v1) | **Get** `/managed-clients/v1` | Get managed clients
[**update-managed-client-v1**](#update-managed-client-v1) | **Patch** `/managed-clients/v1/{id}` | Update managed client


## create-managed-client-v1
Create managed client
Create a new managed client.
The API returns a result that includes the managed client ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-client-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateManagedClientV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedclientrequest** | [**Managedclientrequest**](../models/managedclientrequest) |  | 

### Return type

[**Managedclient**](../models/managedclient)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    managedclientrequest := []byte(``) // Managedclientrequest | 

    var managedclientrequest v1.Managedclientrequest
    if err := json.Unmarshal(managedclientrequest, &managedclientrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClientsAPI.CreateManagedClientV1(context.Background()).Managedclientrequest(managedclientrequest).Execute()
	  //resp, r, err := apiClient.ManagedClientsAPI.CreateManagedClientV1(context.Background()).Managedclientrequest(managedclientrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.CreateManagedClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateManagedClientV1`: Managedclient
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.CreateManagedClientV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-managed-client-v1
Delete managed client
Delete an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-client-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteManagedClientV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    id := `4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7` // string | Managed client ID. # string | Managed client ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ManagedClientsAPI.DeleteManagedClientV1(context.Background(), id).Execute()
	  //r, err := apiClient.ManagedClientsAPI.DeleteManagedClientV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.DeleteManagedClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-managed-client-health-indicators-v1
Get managed client health indicators
Get a managed client's health indicators, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-client-health-indicators-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID to get health indicators for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientHealthIndicatorsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Managedclienthealthindicators**](../models/managedclienthealthindicators)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    id := `4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7` // string | Managed client ID to get health indicators for. # string | Managed client ID to get health indicators for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientHealthIndicatorsV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientHealthIndicatorsV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClientHealthIndicatorsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClientHealthIndicatorsV1`: Managedclienthealthindicators
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClientHealthIndicatorsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-client-status-v1
Get managed client status
Get a managed client's status, using its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-client-status-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID to get status for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | [**Managedclienttype**](../models/managedclienttype) | Managed client type to get status for. | 

### Return type

[**Managedclientstatus**](../models/managedclientstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    id := `aClientId` // string | Managed client ID to get status for. # string | Managed client ID to get status for.
    type_ :=  // Managedclienttype | Managed client type to get status for. # Managedclienttype | Managed client type to get status for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientStatusV1(context.Background(), id).Type_(type_).Execute()
	  //resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientStatusV1(context.Background(), id).Type_(type_).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClientStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClientStatusV1`: Managedclientstatus
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClientStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-client-v1
Get managed client
Get managed client by ID. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-client-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Managedclient**](../models/managedclient)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    id := `4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7` // string | Managed client ID. # string | Managed client ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClientV1`: Managedclient
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClientV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-clients-v1
Get managed clients
List managed clients.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-clients-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClientsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* | 

### Return type

[**[]Managedclient**](../models/managedclient)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `name eq "client name"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq*  **clientId**: *eq*  **clusterId**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ManagedClientsAPI.GetManagedClientsV1(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.GetManagedClientsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClientsV1`: []Managedclient
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.GetManagedClientsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-client-v1
Update managed client
Update an existing managed client.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-client-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed client ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClientV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | JSONPatch payload used to update the object. | 

### Return type

[**Managedclient**](../models/managedclient)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clients"
)

func main() {
    id := `4440278c-0ce2-41ee-a0a9-f5cfd5e8d3b7` // string | Managed client ID. # string | Managed client ID.
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | JSONPatch payload used to update the object.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClientsAPI.UpdateManagedClientV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.ManagedClientsAPI.UpdateManagedClientV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClientsAPI.UpdateManagedClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateManagedClientV1`: Managedclient
    fmt.Fprintf(os.Stdout, "Response from `ManagedClientsAPI.UpdateManagedClientV1`: %v\n", resp)
}
```

[[Back to top]](#)

