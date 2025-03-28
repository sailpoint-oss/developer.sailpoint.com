---
id: beta-role-insights
title: RoleInsights
pagination_label: RoleInsights
sidebar_label: RoleInsights
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsights', 'BetaRoleInsights'] 
slug: /tools/sdk/go/beta/methods/role-insights
tags: ['SDK', 'Software Development Kit', 'RoleInsights', 'BetaRoleInsights']
---

# \RoleInsightsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role-insight-requests**](#create-role-insight-requests) | **Post** `/role-insights/requests` | Generate insights for roles
[**download-role-insights-entitlements-changes**](#download-role-insights-entitlements-changes) | **Get** `/role-insights/{insightId}/entitlement-changes/download` | Download entitlement insights for a role
[**get-entitlement-changes-identities**](#get-entitlement-changes-identities) | **Get** `/role-insights/{insightId}/entitlement-changes/{entitlementId}/identities` | Get identities for a suggested entitlement (for a role)
[**get-role-insight**](#get-role-insight) | **Get** `/role-insights/{insightId}` | Get a single role insight
[**get-role-insights**](#get-role-insights) | **Get** `/role-insights` | Get role insights
[**get-role-insights-current-entitlements**](#get-role-insights-current-entitlements) | **Get** `/role-insights/{insightId}/current-entitlements` | Get current entitlement for a role
[**get-role-insights-entitlements-changes**](#get-role-insights-entitlements-changes) | **Get** `/role-insights/{insightId}/entitlement-changes` | Get entitlement insights for a role
[**get-role-insights-requests**](#get-role-insights-requests) | **Get** `/role-insights/requests/{id}` | Returns metadata from prior request.
[**get-role-insights-summary**](#get-role-insights-summary) | **Get** `/role-insights/summary` | Get role insights summary information


## create-role-insight-requests
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Generate insights for roles
Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-role-insight-requests)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleInsightRequestsRequest struct via the builder pattern


### Return type

[**RoleInsightsResponse**](../models/role-insights-response)

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

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.CreateRoleInsightRequests(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.CreateRoleInsightRequests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateRoleInsightRequests`: RoleInsightsResponse
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.CreateRoleInsightRequests`: %v\n", resp)
}
```

[[Back to top]](#)

## download-role-insights-entitlements-changes
Download entitlement insights for a role
This endpoint returns the entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/download-role-insights-entitlements-changes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadRoleInsightsEntitlementsChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | 

### Return type

**string**

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

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
    insightId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role insight id # string | The role insight id
    sorters := identitiesWithAccess # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional)
    filters := name sw "r" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.DownloadRoleInsightsEntitlementsChanges(context.Background(), insightId).Sorters(sorters).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.DownloadRoleInsightsEntitlementsChanges``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `DownloadRoleInsightsEntitlementsChanges`: string
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.DownloadRoleInsightsEntitlementsChanges`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-changes-identities
Get identities for a suggested entitlement (for a role)
Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-entitlement-changes-identities)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 
**entitlementId** | **string** | The entitlement id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementChangesIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **hasEntitlement** | **bool** | Identity has this entitlement or not | [default to false]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | 

### Return type

[**[]RoleInsightsIdentities**](../models/role-insights-identities)

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
    insightId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role insight id # string | The role insight id
    entitlementId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The entitlement id # string | The entitlement id
    hasEntitlement := true # bool | Identity has this entitlement or not (optional) (default to false) # bool | Identity has this entitlement or not (optional) (default to false)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := name sw "Jan" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetEntitlementChangesIdentities(context.Background(), insightId, entitlementId).HasEntitlement(hasEntitlement).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetEntitlementChangesIdentities``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetEntitlementChangesIdentities`: []RoleInsightsIdentities
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetEntitlementChangesIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-insight
Get a single role insight
This endpoint gets role insights information for a role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-insight)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RoleInsight**](../models/role-insight)

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
    insightId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role insight id # string | The role insight id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetRoleInsight(context.Background(), insightId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsight``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleInsight`: RoleInsight
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsight`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-insights
Get role insights
This method returns detailed role insights for each role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-insights)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* | 

### Return type

[**[]RoleInsight**](../models/role-insight)

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
    sorters := numberOfUpdates # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional)
    filters := name sw "John" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetRoleInsights(context.Background()).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsights``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleInsights`: []RoleInsight
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsights`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-insights-current-entitlements
Get current entitlement for a role
This endpoint gets the entitlements for a role. The term "current" is to distinguish from the entitlement(s) an insight might recommend adding.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-insights-current-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsCurrentEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | 

### Return type

[**[]RoleInsightsEntitlement**](../models/role-insights-entitlement)

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
    insightId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role insight id # string | The role insight id
    filters := name sw "r" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetRoleInsightsCurrentEntitlements(context.Background(), insightId).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsightsCurrentEntitlements``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleInsightsCurrentEntitlements`: []RoleInsightsEntitlement
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsightsCurrentEntitlements`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-insights-entitlements-changes
Get entitlement insights for a role
This endpoint returns entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-insights-entitlements-changes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsEntitlementsChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | 

### Return type

[**[]RoleInsightsEntitlementChanges**](../models/role-insights-entitlement-changes)

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
    insightId := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role insight id # string | The role insight id
    sorters := sorters_example # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional)
    filters := name sw "Admin" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetRoleInsightsEntitlementsChanges(context.Background(), insightId).Sorters(sorters).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsightsEntitlementsChanges``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleInsightsEntitlementsChanges`: []RoleInsightsEntitlementChanges
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsightsEntitlementsChanges`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-insights-requests
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Returns metadata from prior request.
This endpoint returns details of a prior role insights request. 

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-insights-requests)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The role insights request id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**RoleInsightsResponse**](../models/role-insights-response)

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
    id := 8c190e67-87aa-4ed9-a90b-d9d5344523fb # string | The role insights request id # string | The role insights request id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetRoleInsightsRequests(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsightsRequests``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleInsightsRequests`: RoleInsightsResponse
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsightsRequests`: %v\n", resp)
}
```

[[Back to top]](#)

## get-role-insights-summary
Get role insights summary information
This method returns high level summary information for role insights for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-role-insights-summary)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsSummaryRequest struct via the builder pattern


### Return type

[**RoleInsightsSummary**](../models/role-insights-summary)

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

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.RoleInsightsAPI.GetRoleInsightsSummary(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsightsSummary``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetRoleInsightsSummary`: RoleInsightsSummary
	fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsightsSummary`: %v\n", resp)
}
```

[[Back to top]](#)

