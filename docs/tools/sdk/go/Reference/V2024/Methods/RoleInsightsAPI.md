---
id: v2024-role-insights
title: RoleInsights
pagination_label: RoleInsights
sidebar_label: RoleInsights
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsights', 'V2024RoleInsights'] 
slug: /tools/sdk/go/v2024/methods/role-insights
tags: ['SDK', 'Software Development Kit', 'RoleInsights', 'V2024RoleInsights']
---

# RoleInsightsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Generate insights for roles
Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-role-insight-requests)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateRoleInsightRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.CreateRoleInsightRequests(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.CreateRoleInsightRequests(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Download entitlement insights for a role
This endpoint returns the entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/download-role-insights-entitlements-changes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadRoleInsightsEntitlementsChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    insightId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role insight id # string | The role insight id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `identitiesWithAccess` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional)
    filters := `name sw "r"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.DownloadRoleInsightsEntitlementsChanges(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.DownloadRoleInsightsEntitlementsChanges(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get identities for a suggested entitlement (for a role)
Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-entitlement-changes-identities)

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


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    insightId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role insight id # string | The role insight id
    entitlementId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The entitlement id # string | The entitlement id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    hasEntitlement := true // bool | Identity has this entitlement or not (optional) (default to false) # bool | Identity has this entitlement or not (optional) (default to false)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters := `name sw "Jan"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetEntitlementChangesIdentities(context.Background(), insightId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetEntitlementChangesIdentities(context.Background(), insightId, entitlementId).XSailPointExperimental(xSailPointExperimental).HasEntitlement(hasEntitlement).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Filters(filters).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a single role insight
This endpoint gets role insights information for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insight)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    insightId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role insight id # string | The role insight id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsight(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsight(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get role insights
This method returns detailed role insights for each role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := `numberOfUpdates` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional)
    filters := `name sw "John"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsights(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsights(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Count(count).Sorters(sorters).Filters(filters).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get current entitlement for a role
This endpoint gets the entitlements for a role. The term "current" is to distinguish from the entitlement(s) an insight might recommend adding.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-current-entitlements)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsCurrentEntitlementsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    insightId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role insight id # string | The role insight id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `name sw "r"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsCurrentEntitlements(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsCurrentEntitlements(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Filters(filters).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get entitlement insights for a role
This endpoint returns entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-entitlements-changes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**insightId** | **string** | The role insight id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsEntitlementsChangesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    insightId := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role insight id # string | The role insight id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    sorters := `sorters_example` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional)
    filters := `name sw "Admin"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsEntitlementsChanges(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsEntitlementsChanges(context.Background(), insightId).XSailPointExperimental(xSailPointExperimental).Sorters(sorters).Filters(filters).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Returns metadata from prior request.
This endpoint returns details of a prior role insights request. 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-requests)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The role insights request id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `8c190e67-87aa-4ed9-a90b-d9d5344523fb` // string | The role insights request id # string | The role insights request id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsRequests(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsRequests(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
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
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get role insights summary information
This method returns high level summary information for role insights for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-role-insights-summary)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRoleInsightsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsSummary(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.RoleInsightsAPI.GetRoleInsightsSummary(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `RoleInsightsAPI.GetRoleInsightsSummary``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoleInsightsSummary`: RoleInsightsSummary
    fmt.Fprintf(os.Stdout, "Response from `RoleInsightsAPI.GetRoleInsightsSummary`: %v\n", resp)
}
```

[[Back to top]](#)

