---
id: beta-managed-clusters
title: ManagedClusters
pagination_label: ManagedClusters
sidebar_label: ManagedClusters
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusters', 'BetaManagedClusters'] 
slug: /tools/sdk/go/beta/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'ManagedClusters', 'BetaManagedClusters']
---

# ManagedClustersAPI
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-client-log-configuration**](#get-client-log-configuration) | **Get** `/managed-clusters/{id}/log-config` | Get managed cluster&#39;s log configuration
[**get-managed-cluster**](#get-managed-cluster) | **Get** `/managed-clusters/{id}` | Get a specified ManagedCluster.
[**get-managed-clusters**](#get-managed-clusters) | **Get** `/managed-clusters` | Retrieve all Managed Clusters.
[**put-client-log-configuration**](#put-client-log-configuration) | **Put** `/managed-clusters/{id}/log-config` | Update managed cluster&#39;s log configuration


## get-client-log-configuration
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Get managed cluster's log configuration
Get managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-client-log-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of ManagedCluster to get log configuration for | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `aClusterId` // string | ID of ManagedCluster to get log configuration for # string | ID of ManagedCluster to get log configuration for

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ManagedClustersAPI.GetClientLogConfiguration(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.ManagedClustersAPI.GetClientLogConfiguration(context.Background(), id).Execute()
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
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Get a specified ManagedCluster.
Retrieve a ManagedCluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-managed-cluster)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the ManagedCluster to get | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `aClusterId` // string | ID of the ManagedCluster to get # string | ID of the ManagedCluster to get

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ManagedClustersAPI.GetManagedCluster(context.Background(), id).Execute()
	  //resp, r, err := apiClient.Beta.ManagedClustersAPI.GetManagedCluster(context.Background(), id).Execute()
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
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Retrieve all Managed Clusters.
Retrieve all Managed Clusters for the current Org, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-managed-clusters)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `operational eq operation` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ManagedClustersAPI.GetManagedClusters(context.Background()).Execute()
	  //resp, r, err := apiClient.Beta.ManagedClustersAPI.GetManagedClusters(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
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
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Update managed cluster's log configuration
Update managed cluster's log configuration

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-client-log-configuration)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of ManagedCluster to update log configuration for | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutClientLogConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **clientLogConfiguration** | [**ClientLogConfiguration**](../models/client-log-configuration) | ClientLogConfiguration for given ManagedCluster | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `aClusterId` // string | ID of ManagedCluster to update log configuration for # string | ID of ManagedCluster to update log configuration for
    clientlogconfiguration := []byte(`{
          "durationMinutes" : 120,
          "rootLevel" : "INFO",
          "clientId" : "aClientId",
          "expiration" : "2020-12-15T19:13:36.079Z",
          "logLevels" : "INFO"
        }`) // ClientLogConfiguration | ClientLogConfiguration for given ManagedCluster

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.ManagedClustersAPI.PutClientLogConfiguration(context.Background(), id).ClientLogConfiguration(clientLogConfiguration).Execute()
	  //resp, r, err := apiClient.Beta.ManagedClustersAPI.PutClientLogConfiguration(context.Background(), id).ClientLogConfiguration(clientLogConfiguration).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ManagedClustersAPI.PutClientLogConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutClientLogConfiguration`: ClientLogConfiguration
    fmt.Fprintf(os.Stdout, "Response from `ManagedClustersAPI.PutClientLogConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

