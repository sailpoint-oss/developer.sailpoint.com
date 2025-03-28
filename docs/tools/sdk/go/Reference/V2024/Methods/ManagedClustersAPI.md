---
id: v2024-managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusters', 'V2024ManagedClusters'] 
slug: /tools/sdk/go/v2024/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters', 'V2024ManagedClusters']
---

# \ManagedClustersAPI
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster**](#create-managed-cluster) | **Post** `/managed-clusters` | Create Create Managed Cluster
[**delete-managed-cluster**](#delete-managed-cluster) | **Delete** `/managed-clusters/{id}` | Delete Managed Cluster
[**get-client-log-configuration**](#get-client-log-configuration) | **Get** `/managed-clusters/{id}/log-config` | Get Managed Cluster Log Configuration
[**get-managed-cluster**](#get-managed-cluster) | **Get** `/managed-clusters/{id}` | Get Managed Cluster
[**get-managed-clusters**](#get-managed-clusters) | **Get** `/managed-clusters` | Get Managed Clusters
[**put-client-log-configuration**](#put-client-log-configuration) | **Put** `/managed-clusters/{id}/log-config` | Update Managed Cluster Log Configuration
[**update**](#update) | **Post** `/managed-clusters/{id}/manualUpgrade` | Trigger Manual Upgrade for Managed Cluster
[**update-managed-cluster**](#update-managed-cluster) | **Patch** `/managed-clusters/{id}` | Update Managed Cluster


## create-managed-cluster
Create Create Managed Cluster
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-managed-cluster)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateManagedClusterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **managedClusterRequest** | [**ManagedClusterRequest**](../models/managed-cluster-request) |  | 

### Return type

[**ManagedCluster**](../models/managed-cluster)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    managedClusterRequest := fmt.Sprintf(`{
          "configuration" : {
            "clusterExternalId" : "externalId",
            "ccgVersion" : "77.0.0"
          },
          "name" : "Managed Cluster Name",
          "description" : "A short description of the managed cluster.",
          "type" : "idn"
        }`) # ManagedClusterRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.CreateManagedCluster(context.Background()).ManagedClusterRequest(managedClusterRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.CreateManagedCluster``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateManagedCluster`: ManagedCluster
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.CreateManagedCluster`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-managed-cluster
Delete Managed Cluster
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-managed-cluster)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed cluster ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteManagedClusterRequest struct via the builder pattern


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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c9180897de347a2017de8859e8c5039 # string | Managed cluster ID. # string | Managed cluster ID.
    removeClients := false # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to false) # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.ManagedClustersAPI.DeleteManagedCluster(context.Background(), id).RemoveClients(removeClients).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.DeleteManagedCluster``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-client-log-configuration
Get Managed Cluster Log Configuration
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-client-log-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of managed cluster to get log configuration for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetClientLogConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ClientLogConfiguration**](../models/client-log-configuration)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2b838de9-db9b-abcf-e646-d4f274ad4238 # string | ID of managed cluster to get log configuration for. # string | ID of managed cluster to get log configuration for.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.GetClientLogConfiguration(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.GetClientLogConfiguration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetClientLogConfiguration`: ClientLogConfiguration
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.GetClientLogConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-cluster
Get Managed Cluster
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-cluster)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed cluster ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClusterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ManagedCluster**](../models/managed-cluster)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c9180897de347a2017de8859e8c5039 # string | Managed cluster ID. # string | Managed cluster ID.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.GetManagedCluster(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.GetManagedCluster``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedCluster`: ManagedCluster
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.GetManagedCluster`: %v\n", resp)
}
```

[[Back to top]](#)

## get-managed-clusters
Get Managed Clusters
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-clusters)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetManagedClustersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* | 

### Return type

[**[]ManagedCluster**](../models/managed-cluster)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := operational eq "operation" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.GetManagedClusters(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.GetManagedClusters``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetManagedClusters`: []ManagedCluster
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.GetManagedClusters`: %v\n", resp)
}
```

[[Back to top]](#)

## put-client-log-configuration
Update Managed Cluster Log Configuration
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-client-log-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the managed cluster to update the log configuration for. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutClientLogConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **putClientLogConfigurationRequest** | [**PutClientLogConfigurationRequest**](../models/put-client-log-configuration-request) | Client log configuration for the given managed cluster. | 

### Return type

[**ClientLogConfiguration**](../models/client-log-configuration)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2b838de9-db9b-abcf-e646-d4f274ad4238 # string | ID of the managed cluster to update the log configuration for. # string | ID of the managed cluster to update the log configuration for.
    putClientLogConfigurationRequest := fmt.Sprintf(``) # PutClientLogConfigurationRequest | Client log configuration for the given managed cluster.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.PutClientLogConfiguration(context.Background(), id).PutClientLogConfigurationRequest(putClientLogConfigurationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.PutClientLogConfiguration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutClientLogConfiguration`: ClientLogConfiguration
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.PutClientLogConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## update
Trigger Manual Upgrade for Managed Cluster
Trigger Manual Upgrade for Managed Cluster.
AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of managed cluster to trigger manual upgrade. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ClusterManualUpgrade**](../models/cluster-manual-upgrade)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2b838de9-db9b-abcf-e646-d4f274ad4238 # string | ID of managed cluster to trigger manual upgrade. # string | ID of managed cluster to trigger manual upgrade.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.Update(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.Update``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `Update`: ClusterManualUpgrade
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.Update`: %v\n", resp)
}
```

[[Back to top]](#)

## update-managed-cluster
Update Managed Cluster
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-managed-cluster)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Managed cluster ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateManagedClusterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | JSONPatch payload used to update the object. | 

### Return type

[**ManagedCluster**](../models/managed-cluster)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c9180897de347a2017de8859e8c5039 # string | Managed cluster ID. # string | Managed cluster ID.
    jsonPatchOperation := fmt.Sprintf(``) # []JsonPatchOperation | JSONPatch payload used to update the object.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ManagedClustersAPI.UpdateManagedCluster(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.UpdateManagedCluster``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateManagedCluster`: ManagedCluster
	fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.UpdateManagedCluster`: %v\n", resp)
}
```

[[Back to top]](#)

