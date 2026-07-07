---
id: v1-managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusters', 'V1ManagedClusters'] 
slug: /tools/sdk/go/managedclusters/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters', 'V1ManagedClusters']
---

# ManagedClustersAPI
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-v1**](#create-managed-cluster-v1) | **Post** `/managed-clusters/v1` | Create create managed cluster
[**delete-managed-cluster-v1**](#delete-managed-cluster-v1) | **Delete** `/managed-clusters/v1/{id}` | Delete managed cluster
[**get-client-log-configuration-v1**](#get-client-log-configuration-v1) | **Get** `/managed-clusters/v1/{id}/log-config` | Get managed cluster log configuration
[**get-managed-cluster-v1**](#get-managed-cluster-v1) | **Get** `/managed-clusters/v1/{id}` | Get managed cluster
[**get-managed-clusters-v1**](#get-managed-clusters-v1) | **Get** `/managed-clusters/v1` | Get managed clusters
[**put-client-log-configuration-v1**](#put-client-log-configuration-v1) | **Put** `/managed-clusters/v1/{id}/log-config` | Update managed cluster log configuration
[**update-managed-cluster-v1**](#update-managed-cluster-v1) | **Patch** `/managed-clusters/v1/{id}` | Update managed cluster
[**update-v1**](#update-v1) | **Post** `/managed-clusters/v1/{id}/manualUpgrade` | Trigger manual upgrade for managed cluster


## create-managed-cluster-v1
Create create managed cluster
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-cluster-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateManagedClusterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedclusterrequest** | [**Managedclusterrequest**](../models/managedclusterrequest) |  | 

### Return type

[**Managedcluster**](../models/managedcluster)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    managedclusterrequest := []byte(``) // Managedclusterrequest | 

    var managedclusterrequest v1.Managedclusterrequest
    if err := json.Unmarshal(managedclusterrequest, &managedclusterrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.CreateManagedClusterV1(context.Background()).Managedclusterrequest(managedclusterrequest).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.CreateManagedClusterV1(context.Background()).Managedclusterrequest(managedclusterrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.CreateManagedClusterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateManagedClusterV1`: Managedcluster
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.CreateManagedClusterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-managed-cluster-v1
Delete managed cluster
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-cluster-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed cluster ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteManagedClusterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **removeClients** | **bool** | Flag to determine the need to delete a cluster with clients. | [default to false]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    id := `2c9180897de347a2017de8859e8c5039` // string | Managed cluster ID. # string | Managed cluster ID.
    removeClients := false // bool | Flag to determine the need to delete a cluster with clients. (optional) (default to false) # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ManagedClustersAPI.DeleteManagedClusterV1(context.Background(), id).Execute()
	  //r, err := apiClient.ManagedClustersAPI.DeleteManagedClusterV1(context.Background(), id).RemoveClients(removeClients).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.DeleteManagedClusterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-client-log-configuration-v1
Get managed cluster log configuration
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-client-log-configuration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of managed cluster to get log configuration for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetClientLogConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Clientlogconfiguration**](../models/clientlogconfiguration)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    id := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | ID of managed cluster to get log configuration for. # string | ID of managed cluster to get log configuration for.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.GetClientLogConfigurationV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.GetClientLogConfigurationV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.GetClientLogConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetClientLogConfigurationV1`: Clientlogconfiguration
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.GetClientLogConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-cluster-v1
Get managed cluster
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed cluster ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClusterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Managedcluster**](../models/managedcluster)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    id := `2c9180897de347a2017de8859e8c5039` // string | Managed cluster ID. # string | Managed cluster ID.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.GetManagedClusterV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.GetManagedClusterV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.GetManagedClusterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClusterV1`: Managedcluster
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.GetManagedClusterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-clusters-v1
Get managed clusters
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-clusters-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClustersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* | 

### Return type

[**[]Managedcluster**](../models/managedcluster)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `operational eq "operation"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.GetManagedClustersV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.GetManagedClustersV1(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.GetManagedClustersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetManagedClustersV1`: []Managedcluster
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.GetManagedClustersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-client-log-configuration-v1
Update managed cluster log configuration
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-client-log-configuration-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the managed cluster to update the log configuration for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutClientLogConfigurationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **putClientLogConfigurationV1Request** | [**PutClientLogConfigurationV1Request**](../models/put-client-log-configuration-v1-request) | Client log configuration for the given managed cluster. | 

### Return type

[**Clientlogconfiguration**](../models/clientlogconfiguration)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    id := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | ID of the managed cluster to update the log configuration for. # string | ID of the managed cluster to update the log configuration for.
    putclientlogconfigurationv1request := []byte(``) // PutClientLogConfigurationV1Request | Client log configuration for the given managed cluster.

    var putClientLogConfigurationV1Request v1.PutClientLogConfigurationV1Request
    if err := json.Unmarshal(putclientlogconfigurationv1request, &putClientLogConfigurationV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.PutClientLogConfigurationV1(context.Background(), id).PutClientLogConfigurationV1Request(putClientLogConfigurationV1Request).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.PutClientLogConfigurationV1(context.Background(), id).PutClientLogConfigurationV1Request(putClientLogConfigurationV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.PutClientLogConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutClientLogConfigurationV1`: Clientlogconfiguration
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.PutClientLogConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-cluster-v1
Update managed cluster
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-cluster-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed cluster ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClusterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonpatchoperation** | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | JSONPatch payload used to update the object. | 

### Return type

[**Managedcluster**](../models/managedcluster)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    id := `2c9180897de347a2017de8859e8c5039` // string | Managed cluster ID. # string | Managed cluster ID.
    jsonpatchoperation := []byte(``) // []Jsonpatchoperation | JSONPatch payload used to update the object.

    var jsonpatchoperation []v1.Jsonpatchoperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonpatchoperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.UpdateManagedClusterV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.UpdateManagedClusterV1(context.Background(), id).Jsonpatchoperation(jsonpatchoperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.UpdateManagedClusterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateManagedClusterV1`: Managedcluster
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.UpdateManagedClusterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-v1
Trigger manual upgrade for managed cluster
Trigger Manual Upgrade for Managed Cluster.
AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of managed cluster to trigger manual upgrade. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Clustermanualupgrade**](../models/clustermanualupgrade)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/managed_clusters"
)

func main() {
    id := `2b838de9-db9b-abcf-e646-d4f274ad4238` // string | ID of managed cluster to trigger manual upgrade. # string | ID of managed cluster to trigger manual upgrade.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ManagedClustersAPI.UpdateV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ManagedClustersAPI.UpdateV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.UpdateV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateV1`: Clustermanualupgrade
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.UpdateV1`: %v\n", resp)
}
```

[[Back to top]](#)

