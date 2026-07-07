---
id: v1-multi-host-integration
title: MultiHostIntegration
pagination_label: MultiHostIntegration
sidebar_label: MultiHostIntegration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegration', 'V1MultiHostIntegration'] 
slug: /tools/sdk/go/multihostintegration/methods/multi-host-integration
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegration', 'V1MultiHostIntegration']
---

# MultiHostIntegrationAPI
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-multi-host-integration-v1**](#create-multi-host-integration-v1) | **Post** `/multihosts/v1` | Create multi-host integration
[**create-sources-within-multi-host-v1**](#create-sources-within-multi-host-v1) | **Post** `/multihosts/v1/{multihostId}` | Create sources within multi-host integration
[**delete-multi-host-sources-v1**](#delete-multi-host-sources-v1) | **Post** `/multihosts/v1/{multiHostId}/sources/bulk-delete` | Delete sources within multi-host integration
[**delete-multi-host-v1**](#delete-multi-host-v1) | **Delete** `/multihosts/v1/{multihostId}` | Delete multi-host integration
[**get-acct-aggregation-groups-v1**](#get-acct-aggregation-groups-v1) | **Get** `/multihosts/v1/{multihostId}/acctAggregationGroups` | List account-aggregation-groups by multi-host id
[**get-entitlement-aggregation-groups-v1**](#get-entitlement-aggregation-groups-v1) | **Get** `/multihosts/v1/{multiHostId}/entitlementAggregationGroups` | List entitlement-aggregation-groups by integration id
[**get-multi-host-integrations-list-v1**](#get-multi-host-integrations-list-v1) | **Get** `/multihosts/v1` | List all existing multi-host integrations
[**get-multi-host-integrations-v1**](#get-multi-host-integrations-v1) | **Get** `/multihosts/v1/{multihostId}` | Get multi-host integration by id
[**get-multi-host-source-creation-errors-v1**](#get-multi-host-source-creation-errors-v1) | **Get** `/multihosts/v1/{multiHostId}/sources/errors` | List multi-host source creation errors
[**get-multihost-integration-types-v1**](#get-multihost-integration-types-v1) | **Get** `/multihosts/v1/types` | List multi-host integration types
[**get-sources-within-multi-host-v1**](#get-sources-within-multi-host-v1) | **Get** `/multihosts/v1/{multihostId}/sources` | List sources within multi-host integration
[**test-connection-multi-host-sources-v1**](#test-connection-multi-host-sources-v1) | **Post** `/multihosts/v1/{multihostId}/sources/testConnection` | Test configuration for multi-host integration
[**test-source-connection-multihost-v1**](#test-source-connection-multihost-v1) | **Get** `/multihosts/v1/{multihostId}/sources/{sourceId}/testConnection` | Test configuration for multi-host integration&#39;s single source
[**update-multi-host-sources-v1**](#update-multi-host-sources-v1) | **Patch** `/multihosts/v1/{multihostId}` | Update multi-host integration


## create-multi-host-integration-v1
Create multi-host integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-multi-host-integration-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMultiHostIntegrationV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multihostintegrationscreate** | [**Multihostintegrationscreate**](../models/multihostintegrationscreate) | The specifics of the Multi-Host Integration to create | 

### Return type

[**Multihostintegrations**](../models/multihostintegrations)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostintegrationscreate := []byte(``) // Multihostintegrationscreate | The specifics of the Multi-Host Integration to create

    var multihostintegrationscreate v1.Multihostintegrationscreate
    if err := json.Unmarshal(multihostintegrationscreate, &multihostintegrationscreate); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.CreateMultiHostIntegrationV1(context.Background()).Multihostintegrationscreate(multihostintegrationscreate).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.CreateMultiHostIntegrationV1(context.Background()).Multihostintegrationscreate(multihostintegrationscreate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.CreateMultiHostIntegrationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateMultiHostIntegrationV1`: Multihostintegrations
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.CreateMultiHostIntegrationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-sources-within-multi-host-v1
Create sources within multi-host integration
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sources-within-multi-host-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourcesWithinMultiHostV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **multihostintegrationscreatesources** | [**[]Multihostintegrationscreatesources**](../models/multihostintegrationscreatesources) | The specifics of the sources to create within Multi-Host Integration. | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of the Multi-Host Integration. # string | ID of the Multi-Host Integration.
    multihostintegrationscreatesources := []byte(``) // []Multihostintegrationscreatesources | The specifics of the sources to create within Multi-Host Integration.

    var multihostintegrationscreatesources []v1.Multihostintegrationscreatesources
    if err := json.Unmarshal(multihostintegrationscreatesources, &multihostintegrationscreatesources); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MultiHostIntegrationAPI.CreateSourcesWithinMultiHostV1(context.Background(), multihostId).Multihostintegrationscreatesources(multihostintegrationscreatesources).Execute()
	  //r, err := apiClient.MultiHostIntegrationAPI.CreateSourcesWithinMultiHostV1(context.Background(), multihostId).Multihostintegrationscreatesources(multihostintegrationscreatesources).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.CreateSourcesWithinMultiHostV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-multi-host-sources-v1
Delete sources within multi-host integration
This endpoint performs bulk sources delete within Multi-Host Integration via a list of supplied IDs.

The following rights are required to access this endpoint: idn:multihosts:delete, idn:sources:delete

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-multi-host-sources-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multiHostId** | **string** | ID of the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMultiHostSourcesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **[]string** | The delete bulk sources within multi-host integration request body | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multiHostId := `004091cb79b04636b88662afa50a4440` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration
    requestbody := []byte(``) // []string | The delete bulk sources within multi-host integration request body

    var requestBody []v1.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MultiHostIntegrationAPI.DeleteMultiHostSourcesV1(context.Background(), multiHostId).RequestBody(requestBody).Execute()
	  //r, err := apiClient.MultiHostIntegrationAPI.DeleteMultiHostSourcesV1(context.Background(), multiHostId).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.DeleteMultiHostSourcesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-multi-host-v1
Delete multi-host integration
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-multi-host-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of Multi-Host Integration to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMultiHostV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of Multi-Host Integration to delete. # string | ID of Multi-Host Integration to delete.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MultiHostIntegrationAPI.DeleteMultiHostV1(context.Background(), multihostId).Execute()
	  //r, err := apiClient.MultiHostIntegrationAPI.DeleteMultiHostV1(context.Background(), multihostId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.DeleteMultiHostV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-acct-aggregation-groups-v1
List account-aggregation-groups by multi-host id
This API will return array of account aggregation groups within provided Multi-Host Integration ID.
A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-acct-aggregation-groups-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAcctAggregationGroupsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]Multihostintegrationsaggscheduleupdate**](../models/multihostintegrationsaggscheduleupdate)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `aMultiHostId` // string | ID of the Multi-Host Integration to update # string | ID of the Multi-Host Integration to update
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetAcctAggregationGroupsV1(context.Background(), multihostId).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetAcctAggregationGroupsV1(context.Background(), multihostId).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetAcctAggregationGroupsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAcctAggregationGroupsV1`: []Multihostintegrationsaggscheduleupdate
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetAcctAggregationGroupsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-aggregation-groups-v1
List entitlement-aggregation-groups by integration id
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-aggregation-groups-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multiHostId** | **string** | ID of the Multi-Host Integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementAggregationGroupsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]

### Return type

[**[]Multihostintegrationsaggscheduleupdate**](../models/multihostintegrationsaggscheduleupdate)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multiHostId := `aMultiHostId` // string | ID of the Multi-Host Integration to update # string | ID of the Multi-Host Integration to update
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetEntitlementAggregationGroupsV1(context.Background(), multiHostId).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetEntitlementAggregationGroupsV1(context.Background(), multiHostId).Offset(offset).Limit(limit).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetEntitlementAggregationGroupsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementAggregationGroupsV1`: []Multihostintegrationsaggscheduleupdate
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetEntitlementAggregationGroupsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multi-host-integrations-list-v1
List all existing multi-host integrations
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-integrations-list-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMultiHostIntegrationsListV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 

### Return type

[**[]Multihostintegrations**](../models/multihostintegrations)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `id eq 2c91808b6ef1d43e016efba0ce470904` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultiHostIntegrationsListV1(context.Background()).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultiHostIntegrationsListV1(context.Background()).Offset(offset).Limit(limit).Sorters(sorters).Filters(filters).Count(count).ForSubadmin(forSubadmin).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultiHostIntegrationsListV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMultiHostIntegrationsListV1`: []Multihostintegrations
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultiHostIntegrationsListV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multi-host-integrations-v1
Get multi-host integration by id
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-integrations-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMultiHostIntegrationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Multihostintegrations**](../models/multihostintegrations)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of the Multi-Host Integration. # string | ID of the Multi-Host Integration.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultiHostIntegrationsV1(context.Background(), multihostId).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultiHostIntegrationsV1(context.Background(), multihostId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultiHostIntegrationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMultiHostIntegrationsV1`: Multihostintegrations
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultiHostIntegrationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multi-host-source-creation-errors-v1
List multi-host source creation errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-source-creation-errors-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multiHostId** | **string** | ID of the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMultiHostSourceCreationErrorsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]Sourcecreationerrors**](../models/sourcecreationerrors)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multiHostId := `004091cb79b04636b88662afa50a4440` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultiHostSourceCreationErrorsV1(context.Background(), multiHostId).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultiHostSourceCreationErrorsV1(context.Background(), multiHostId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultiHostSourceCreationErrorsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMultiHostSourceCreationErrorsV1`: []Sourcecreationerrors
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultiHostSourceCreationErrorsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multihost-integration-types-v1
List multi-host integration types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multihost-integration-types-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMultihostIntegrationTypesV1Request struct via the builder pattern


### Return type

[**[]Multihostintegrationtemplatetype**](../models/multihostintegrationtemplatetype)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultihostIntegrationTypesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetMultihostIntegrationTypesV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultihostIntegrationTypesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMultihostIntegrationTypesV1`: []Multihostintegrationtemplatetype
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultihostIntegrationTypesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sources-within-multi-host-v1
List sources within multi-host integration
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sources-within-multi-host-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourcesWithinMultiHostV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Multihostsources**](../models/multihostsources)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `aMultiHostId` // string | ID of the Multi-Host Integration to update # string | ID of the Multi-Host Integration to update
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `id eq 2c91808b6ef1d43e016efba0ce470904` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.GetSourcesWithinMultiHostV1(context.Background(), multihostId).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.GetSourcesWithinMultiHostV1(context.Background(), multihostId).Offset(offset).Limit(limit).Sorters(sorters).Filters(filters).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetSourcesWithinMultiHostV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSourcesWithinMultiHostV1`: []Multihostsources
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetSourcesWithinMultiHostV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-connection-multi-host-sources-v1
Test configuration for multi-host integration
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-connection-multi-host-sources-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestConnectionMultiHostSourcesV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `2c91808568c529c60168cca6f90c1324` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MultiHostIntegrationAPI.TestConnectionMultiHostSourcesV1(context.Background(), multihostId).Execute()
	  //r, err := apiClient.MultiHostIntegrationAPI.TestConnectionMultiHostSourcesV1(context.Background(), multihostId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.TestConnectionMultiHostSourcesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## test-source-connection-multihost-v1
Test configuration for multi-host integration's single source
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-source-connection-multihost-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration | 
**sourceId** | **string** | ID of the source within the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestSourceConnectionMultihostV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TestSourceConnectionMultihostV1200Response**](../models/test-source-connection-multihost-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration
    sourceId := `2c91808568c529f60168cca6f90c1324` // string | ID of the source within the Multi-Host Integration # string | ID of the source within the Multi-Host Integration

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.MultiHostIntegrationAPI.TestSourceConnectionMultihostV1(context.Background(), multihostId, sourceId).Execute()
	  //resp, r, err := apiClient.MultiHostIntegrationAPI.TestSourceConnectionMultihostV1(context.Background(), multihostId, sourceId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.TestSourceConnectionMultihostV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `TestSourceConnectionMultihostV1`: TestSourceConnectionMultihostV1200Response
    fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.TestSourceConnectionMultihostV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-multi-host-sources-v1
Update multi-host integration
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-multi-host-sources-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMultiHostSourcesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateMultiHostSourcesV1RequestInner** | [**[]UpdateMultiHostSourcesV1RequestInner**](../models/update-multi-host-sources-v1-request-inner) | This endpoint allows you to update a Multi-Host Integration.  | 

### Return type

 (empty response body)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/multi_host_integration"
)

func main() {
    multihostId := `anId` // string | ID of the Multi-Host Integration to update. # string | ID of the Multi-Host Integration to update.
    updatemultihostsourcesv1requestinner := []byte(`[{"op":"add","path":"/description","value":"MDK Multi-Host Integration 222 description"}]`) // []UpdateMultiHostSourcesV1RequestInner | This endpoint allows you to update a Multi-Host Integration. 

    var updateMultiHostSourcesV1RequestInner []v1.UpdateMultiHostSourcesV1RequestInner
    if err := json.Unmarshal(updatemultihostsourcesv1requestinner, &updateMultiHostSourcesV1RequestInner); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.MultiHostIntegrationAPI.UpdateMultiHostSourcesV1(context.Background(), multihostId).UpdateMultiHostSourcesV1RequestInner(updateMultiHostSourcesV1RequestInner).Execute()
	  //r, err := apiClient.MultiHostIntegrationAPI.UpdateMultiHostSourcesV1(context.Background(), multihostId).UpdateMultiHostSourcesV1RequestInner(updateMultiHostSourcesV1RequestInner).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.UpdateMultiHostSourcesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

