---
id: beta-multi-host-integration
title: MultiHostIntegration
pagination_label: MultiHostIntegration
sidebar_label: MultiHostIntegration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MultiHostIntegration', 'BetaMultiHostIntegration'] 
slug: /tools/sdk/go/beta/methods/multi-host-integration
tags: ['SDK', 'Software Development Kit', 'MultiHostIntegration', 'BetaMultiHostIntegration']
---

# MultiHostIntegrationAPI
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-multi-host-integration**](#create-multi-host-integration) | **Post** `/multihosts` | Create Multi-Host Integration
[**create-sources-within-multi-host**](#create-sources-within-multi-host) | **Post** `/multihosts/{multihostId}` | Create Sources Within Multi-Host Integration
[**delete-multi-host**](#delete-multi-host) | **Delete** `/multihosts/{multihostId}` | Delete Multi-Host Integration
[**get-acct-aggregation-groups**](#get-acct-aggregation-groups) | **Get** `/multihosts/{multihostId}/acctAggregationGroups` | Get Account Aggregation Groups Within Multi-Host Integration ID
[**get-entitlement-aggregation-groups**](#get-entitlement-aggregation-groups) | **Get** `/multihosts/{multiHostId}/entitlementAggregationGroups` | Get Entitlement Aggregation Groups Within Multi-Host Integration ID
[**get-multi-host-integrations**](#get-multi-host-integrations) | **Get** `/multihosts/{multihostId}` | Get Multi-Host Integration By ID
[**get-multi-host-integrations-list**](#get-multi-host-integrations-list) | **Get** `/multihosts` | List All Existing Multi-Host Integrations
[**get-multi-host-source-creation-errors**](#get-multi-host-source-creation-errors) | **Get** `/multihosts/{multiHostId}/sources/errors` | List Multi-Host Source Creation Errors
[**get-multihost-integration-types**](#get-multihost-integration-types) | **Get** `/multihosts/types` | List Multi-Host Integration Types
[**get-sources-within-multi-host**](#get-sources-within-multi-host) | **Get** `/multihosts/{multihostId}/sources` | List Sources Within Multi-Host Integration
[**test-connection-multi-host-sources**](#test-connection-multi-host-sources) | **Post** `/multihosts/{multihostId}/sources/testConnection` | Test Configuration For Multi-Host Integration
[**test-source-connection-multihost**](#test-source-connection-multihost) | **Get** `/multihosts/{multihostId}/sources/{sourceId}/testConnection` | Test Configuration For Multi-Host Integration&#39;s Single Source
[**update-multi-host-sources**](#update-multi-host-sources) | **Patch** `/multihosts/{multihostId}` | Update Multi-Host Integration


## create-multi-host-integration
Create Multi-Host Integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-multi-host-integration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateMultiHostIntegrationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **multiHostIntegrationsCreate** | [**MultiHostIntegrationsCreate**](../models/multi-host-integrations-create) | The specifics of the Multi-Host Integration to create | 

### Return type

[**MultiHostIntegrations**](../models/multi-host-integrations)

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
    multihostintegrationscreate := []byte(`{
          "owner" : {
            "name" : "MyName",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "managementWorkgroup" : {
            "name" : "My Management Workgroup",
            "id" : "2c91808568c529c60168cca6f90c2222",
            "type" : "GOVERNANCE_GROUP"
          },
          "cluster" : {
            "name" : "Corporate Cluster",
            "id" : "2c9180866166b5b0016167c32ef31a66",
            "type" : "CLUSTER"
          },
          "connector" : "multihost-microsoft-sql-server",
          "connectorAttributes" : {
            "maxSourcesPerAggGroup" : 10,
            "maxAllowedSources" : 300
          },
          "created" : "2022-02-08T14:50:03.827Z",
          "name" : "My Multi-Host Integration",
          "description" : "This is the Multi-Host Integration.",
          "modified" : "2024-01-23T18:08:50.897Z"
        }`) // MultiHostIntegrationsCreate | The specifics of the Multi-Host Integration to create

  
   var multiHostIntegrationsCreate beta.MultiHostIntegrationsCreate
   if err := json.Unmarshal(multihostintegrationscreate, &multiHostIntegrationsCreate); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.CreateMultiHostIntegration(context.Background()).MultiHostIntegrationsCreate(multiHostIntegrationsCreate).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.CreateMultiHostIntegration(context.Background()).MultiHostIntegrationsCreate(multiHostIntegrationsCreate).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.CreateMultiHostIntegration``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateMultiHostIntegration`: MultiHostIntegrations
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.CreateMultiHostIntegration`: %v\n", resp)
}
```

[[Back to top]](#)

## create-sources-within-multi-host
Create Sources Within Multi-Host Integration
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-sources-within-multi-host)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateSourcesWithinMultiHostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **multiHostIntegrationsCreateSources** | [**[]MultiHostIntegrationsCreateSources**](../models/multi-host-integrations-create-sources) | The specifics of the sources to create within Multi-Host Integration. | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of the Multi-Host Integration. # string | ID of the Multi-Host Integration.
    multihostintegrationscreatesources := []byte(``) // []MultiHostIntegrationsCreateSources | The specifics of the sources to create within Multi-Host Integration.

  
   var multiHostIntegrationsCreateSources beta.[]MultiHostIntegrationsCreateSources
   if err := json.Unmarshal(multihostintegrationscreatesources, &multiHostIntegrationsCreateSources); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.MultiHostIntegrationAPI.CreateSourcesWithinMultiHost(context.Background(), multihostId).MultiHostIntegrationsCreateSources(multiHostIntegrationsCreateSources).Execute()
	//r, err := apiClient.Beta.MultiHostIntegrationAPI.CreateSourcesWithinMultiHost(context.Background(), multihostId).MultiHostIntegrationsCreateSources(multiHostIntegrationsCreateSources).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.CreateSourcesWithinMultiHost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## delete-multi-host
Delete Multi-Host Integration
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-multi-host)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of Multi-Host Integration to delete. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMultiHostRequest struct via the builder pattern


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
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of Multi-Host Integration to delete. # string | ID of Multi-Host Integration to delete.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.MultiHostIntegrationAPI.DeleteMultiHost(context.Background(), multihostId).Execute()
	//r, err := apiClient.Beta.MultiHostIntegrationAPI.DeleteMultiHost(context.Background(), multihostId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.DeleteMultiHost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-acct-aggregation-groups
Get Account Aggregation Groups Within Multi-Host Integration ID
This API will return array of account aggregation groups within provided Multi-Host Integration ID.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-acct-aggregation-groups)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAcctAggregationGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MultiHostIntegrationsAggScheduleUpdate**](../models/multi-host-integrations-agg-schedule-update)

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
    multihostId := `aMultiHostId` // string | ID of the Multi-Host Integration to update # string | ID of the Multi-Host Integration to update

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetAcctAggregationGroups(context.Background(), multihostId).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetAcctAggregationGroups(context.Background(), multihostId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetAcctAggregationGroups``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAcctAggregationGroups`: MultiHostIntegrationsAggScheduleUpdate
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetAcctAggregationGroups`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-aggregation-groups
Get Entitlement Aggregation Groups Within Multi-Host Integration ID
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-aggregation-groups)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multiHostId** | **string** | ID of the Multi-Host Integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementAggregationGroupsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MultiHostIntegrationsAggScheduleUpdate**](../models/multi-host-integrations-agg-schedule-update)

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
    multiHostId := `aMultiHostId` // string | ID of the Multi-Host Integration to update # string | ID of the Multi-Host Integration to update

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetEntitlementAggregationGroups(context.Background(), multiHostId).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetEntitlementAggregationGroups(context.Background(), multiHostId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetEntitlementAggregationGroups``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntitlementAggregationGroups`: MultiHostIntegrationsAggScheduleUpdate
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetEntitlementAggregationGroups`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multi-host-integrations
Get Multi-Host Integration By ID
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-multi-host-integrations)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMultiHostIntegrationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**MultiHostIntegrations**](../models/multi-host-integrations)

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
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of the Multi-Host Integration. # string | ID of the Multi-Host Integration.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultiHostIntegrations(context.Background(), multihostId).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultiHostIntegrations(context.Background(), multihostId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultiHostIntegrations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMultiHostIntegrations`: MultiHostIntegrations
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultiHostIntegrations`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multi-host-integrations-list
List All Existing Multi-Host Integrations
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-multi-host-integrations-list)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMultiHostIntegrationsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **forSubadmin** | **string** | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | 

### Return type

[**[]MultiHostIntegrations**](../models/multi-host-integrations)

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
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `id eq 2c91808b6ef1d43e016efba0ce470904` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    forSubadmin := `5168015d32f890ca15812c9180835d2e` // string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # string | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultiHostIntegrationsList(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultiHostIntegrationsList(context.Background()).Offset(offset).Limit(limit).Sorters(sorters).Filters(filters).Count(count).ForSubadmin(forSubadmin).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultiHostIntegrationsList``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMultiHostIntegrationsList`: []MultiHostIntegrations
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultiHostIntegrationsList`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multi-host-source-creation-errors
List Multi-Host Source Creation Errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-multi-host-source-creation-errors)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multiHostId** | **string** | ID of the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMultiHostSourceCreationErrorsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**[]SourceCreationErrors**](../models/source-creation-errors)

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
    multiHostId := `004091cb79b04636b88662afa50a4440` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultiHostSourceCreationErrors(context.Background(), multiHostId).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultiHostSourceCreationErrors(context.Background(), multiHostId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultiHostSourceCreationErrors``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMultiHostSourceCreationErrors`: []SourceCreationErrors
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultiHostSourceCreationErrors`: %v\n", resp)
}
```

[[Back to top]](#)

## get-multihost-integration-types
List Multi-Host Integration Types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-multihost-integration-types)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetMultihostIntegrationTypesRequest struct via the builder pattern


### Return type

[**[]MultiHostIntegrationTemplateType**](../models/multi-host-integration-template-type)

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

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultihostIntegrationTypes(context.Background()).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetMultihostIntegrationTypes(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetMultihostIntegrationTypes``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetMultihostIntegrationTypes`: []MultiHostIntegrationTemplateType
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetMultihostIntegrationTypes`: %v\n", resp)
}
```

[[Back to top]](#)

## get-sources-within-multi-host
List Sources Within Multi-Host Integration
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sources-within-multi-host)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration to update | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSourcesWithinMultiHostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* | 
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]MultiHostSources**](../models/multi-host-sources)

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
    multihostId := `aMultiHostId` // string | ID of the Multi-Host Integration to update # string | ID of the Multi-Host Integration to update
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `id eq 2c91808b6ef1d43e016efba0ce470904` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetSourcesWithinMultiHost(context.Background(), multihostId).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.GetSourcesWithinMultiHost(context.Background(), multihostId).Offset(offset).Limit(limit).Sorters(sorters).Filters(filters).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.GetSourcesWithinMultiHost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSourcesWithinMultiHost`: []MultiHostSources
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.GetSourcesWithinMultiHost`: %v\n", resp)
}
```

[[Back to top]](#)

## test-connection-multi-host-sources
Test Configuration For Multi-Host Integration
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-connection-multi-host-sources)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestConnectionMultiHostSourcesRequest struct via the builder pattern


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
    multihostId := `2c91808568c529c60168cca6f90c1324` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.MultiHostIntegrationAPI.TestConnectionMultiHostSources(context.Background(), multihostId).Execute()
	//r, err := apiClient.Beta.MultiHostIntegrationAPI.TestConnectionMultiHostSources(context.Background(), multihostId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.TestConnectionMultiHostSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## test-source-connection-multihost
Test Configuration For Multi-Host Integration's Single Source
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-source-connection-multihost)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration | 
**sourceId** | **string** | ID of the source within the Multi-Host Integration | 

### Other Parameters

Other parameters are passed through a pointer to a apiTestSourceConnectionMultihostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**TestSourceConnectionMultihost200Response**](../models/test-source-connection-multihost200-response)

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
    multihostId := `2c91808568c529c60168cca6f90c1326` // string | ID of the Multi-Host Integration # string | ID of the Multi-Host Integration
    sourceId := `2c91808568c529f60168cca6f90c1324` // string | ID of the source within the Multi-Host Integration # string | ID of the source within the Multi-Host Integration

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.TestSourceConnectionMultihost(context.Background(), multihostId, sourceId).Execute()
	//resp, r, err := apiClient.Beta.MultiHostIntegrationAPI.TestSourceConnectionMultihost(context.Background(), multihostId, sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.TestSourceConnectionMultihost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `TestSourceConnectionMultihost`: TestSourceConnectionMultihost200Response
	fmt.Fprintf(os.Stdout, "Response from `MultiHostIntegrationAPI.TestSourceConnectionMultihost`: %v\n", resp)
}
```

[[Back to top]](#)

## update-multi-host-sources
Update Multi-Host Integration
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-multi-host-sources)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**multihostId** | **string** | ID of the Multi-Host Integration to update. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateMultiHostSourcesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **updateMultiHostSourcesRequestInner** | [**[]UpdateMultiHostSourcesRequestInner**](../models/update-multi-host-sources-request-inner) | This endpoint allows you to update a Multi-Host Integration.  | 

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
    beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    multihostId := `anId` // string | ID of the Multi-Host Integration to update. # string | ID of the Multi-Host Integration to update.
    updatemultihostsourcesrequestinner := []byte(`[{op=add, path=/description, value=MDK Multi-Host Integration 222 description}]`) // []UpdateMultiHostSourcesRequestInner | This endpoint allows you to update a Multi-Host Integration. 

  
   var updateMultiHostSourcesRequestInner beta.[]UpdateMultiHostSourcesRequestInner
   if err := json.Unmarshal(updatemultihostsourcesrequestinner, &updateMultiHostSourcesRequestInner); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.Beta.MultiHostIntegrationAPI.UpdateMultiHostSources(context.Background(), multihostId).UpdateMultiHostSourcesRequestInner(updateMultiHostSourcesRequestInner).Execute()
	//r, err := apiClient.Beta.MultiHostIntegrationAPI.UpdateMultiHostSources(context.Background(), multihostId).UpdateMultiHostSourcesRequestInner(updateMultiHostSourcesRequestInner).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `MultiHostIntegrationAPI.UpdateMultiHostSources``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

