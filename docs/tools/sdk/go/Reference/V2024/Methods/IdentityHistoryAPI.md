---
id: v2024-identity-history
title: IdentityHistory
pagination_label: IdentityHistory
sidebar_label: IdentityHistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityHistory', 'V2024IdentityHistory'] 
slug: /tools/sdk/go/v2024/methods/identity-history
tags: ['SDK', 'Software Development Kit', 'IdentityHistory', 'V2024IdentityHistory']
---

# IdentityHistoryAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compare-identity-snapshots**](#compare-identity-snapshots) | **Get** `/historical-identities/{id}/compare` | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**compare-identity-snapshots-access-type**](#compare-identity-snapshots-access-type) | **Get** `/historical-identities/{id}/compare/{access-type}` | Gets a list of differences of specific accesstype for the given identity between 2 snapshots
[**get-historical-identity**](#get-historical-identity) | **Get** `/historical-identities/{id}` | Get latest snapshot of identity
[**get-historical-identity-events**](#get-historical-identity-events) | **Get** `/historical-identities/{id}/events` | List identity event history
[**get-identity-snapshot**](#get-identity-snapshot) | **Get** `/historical-identities/{id}/snapshots/{date}` | Gets an identity snapshot at a given date
[**get-identity-snapshot-summary**](#get-identity-snapshot-summary) | **Get** `/historical-identities/{id}/snapshot-summary` | Gets the summary for the event count for a specific identity
[**get-identity-start-date**](#get-identity-start-date) | **Get** `/historical-identities/{id}/start-date` | Gets the start date of the identity
[**list-historical-identities**](#list-historical-identities) | **Get** `/historical-identities` | Lists all the identities
[**list-identity-access-items**](#list-identity-access-items) | **Get** `/historical-identities/{id}/access-items` | List access items by identity
[**list-identity-snapshot-access-items**](#list-identity-snapshot-access-items) | **Get** `/historical-identities/{id}/snapshots/{date}/access-items` | Gets the list of identity access items at a given date filterd by item type
[**list-identity-snapshots**](#list-identity-snapshots) | **Get** `/historical-identities/{id}/snapshots` | Lists all the snapshots for the identity


## compare-identity-snapshots
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets a difference of count for each access item types for the given identity between 2 snapshots
This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/compare-identity-snapshots)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompareIdentitySnapshotsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **snapshot1** | **string** | The snapshot 1 of identity | 
 **snapshot2** | **string** | The snapshot 2 of identity | 
 **accessItemTypes** | **[]string** | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]IdentityCompareResponse**](../models/identity-compare-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    snapshot1 := `2007-03-01T13:00:00Z` // string | The snapshot 1 of identity (optional) # string | The snapshot 1 of identity (optional)
    snapshot2 := `2008-03-01T13:00:00Z` // string | The snapshot 2 of identity (optional) # string | The snapshot 2 of identity (optional)
    accessitemtypes := []byte(``) // []string | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.CompareIdentitySnapshots(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.CompareIdentitySnapshots(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Snapshot1(snapshot1).Snapshot2(snapshot2).AccessItemTypes(accessItemTypes).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.CompareIdentitySnapshots``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompareIdentitySnapshots`: []IdentityCompareResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.CompareIdentitySnapshots`: %v\n", resp)
}
```

[[Back to top]](#)

## compare-identity-snapshots-access-type
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets a list of differences of specific accesstype for the given identity between 2 snapshots
This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/compare-identity-snapshots-access-type)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 
**accessType** | **string** | The specific type which needs to be compared | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompareIdentitySnapshotsAccessTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessAssociated** | **bool** | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added &amp; removed | 
 **snapshot1** | **string** | The snapshot 1 of identity | 
 **snapshot2** | **string** | The snapshot 2 of identity | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]AccessItemDiff**](../models/access-item-diff)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    accessType := `role` // string | The specific type which needs to be compared # string | The specific type which needs to be compared
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessAssociated := 2007-03-01T13:00:00Z // bool | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional) # bool | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional)
    snapshot1 := `2008-03-01T13:00:00Z` // string | The snapshot 1 of identity (optional) # string | The snapshot 1 of identity (optional)
    snapshot2 := `2009-03-01T13:00:00Z` // string | The snapshot 2 of identity (optional) # string | The snapshot 2 of identity (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.CompareIdentitySnapshotsAccessType(context.Background(), id, accessType).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.CompareIdentitySnapshotsAccessType(context.Background(), id, accessType).XSailPointExperimental(xSailPointExperimental).AccessAssociated(accessAssociated).Snapshot1(snapshot1).Snapshot2(snapshot2).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.CompareIdentitySnapshotsAccessType``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompareIdentitySnapshotsAccessType`: []AccessItemDiff
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.CompareIdentitySnapshotsAccessType`: %v\n", resp)
}
```

[[Back to top]](#)

## get-historical-identity
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get latest snapshot of identity
This method retrieves a specified identity Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-historical-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHistoricalIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**IdentityHistoryResponse**](../models/identity-history-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetHistoricalIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetHistoricalIdentity(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.GetHistoricalIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHistoricalIdentity`: IdentityHistoryResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.GetHistoricalIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## get-historical-identity-events
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List identity event history
This method retrieves all access events for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-historical-identity-events)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHistoricalIdentityEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **from** | **string** | The optional instant until which access events are returned | 
 **eventTypes** | **[]string** | An optional list of event types to return.  If null or empty, all events are returned | 
 **accessItemTypes** | **[]string** | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]GetHistoricalIdentityEvents200ResponseInner**](../models/get-historical-identity-events200-response-inner)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    from := `2024-03-01T13:00:00Z` // string | The optional instant until which access events are returned (optional) # string | The optional instant until which access events are returned (optional)
    eventtypes := []byte(`[AccessAddedEvent, AccessRemovedEvent]`) // []string | An optional list of event types to return.  If null or empty, all events are returned (optional)
    accessitemtypes := []byte(`[entitlement, account]`) // []string | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetHistoricalIdentityEvents(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetHistoricalIdentityEvents(context.Background(), id).XSailPointExperimental(xSailPointExperimental).From(from).EventTypes(eventTypes).AccessItemTypes(accessItemTypes).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.GetHistoricalIdentityEvents``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHistoricalIdentityEvents`: []GetHistoricalIdentityEvents200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.GetHistoricalIdentityEvents`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-snapshot
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets an identity snapshot at a given date
This method retrieves a specified identity snapshot at a given date Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-snapshot)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 
**date** | **string** | The specified date | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentitySnapshotRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**IdentityHistoryResponse**](../models/identity-history-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    date := `2007-03-01T13:00:00Z` // string | The specified date # string | The specified date
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetIdentitySnapshot(context.Background(), id, date).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetIdentitySnapshot(context.Background(), id, date).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.GetIdentitySnapshot``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentitySnapshot`: IdentityHistoryResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.GetIdentitySnapshot`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-snapshot-summary
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets the summary for the event count for a specific identity
This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-snapshot-summary)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentitySnapshotSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **before** | **string** | The date before which snapshot summary is required | 
 **interval** | **string** | The interval indicating day or month. Defaults to month if not specified | 
 **timeZone** | **string** | The time zone. Defaults to UTC if not provided | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]MetricResponse**](../models/metric-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    before := `2007-03-01T13:00:00Z` // string | The date before which snapshot summary is required (optional) # string | The date before which snapshot summary is required (optional)
    interval := `interval_example` // string | The interval indicating day or month. Defaults to month if not specified (optional) # string | The interval indicating day or month. Defaults to month if not specified (optional)
    timeZone := `UTC` // string | The time zone. Defaults to UTC if not provided (optional) # string | The time zone. Defaults to UTC if not provided (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetIdentitySnapshotSummary(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetIdentitySnapshotSummary(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Before(before).Interval(interval).TimeZone(timeZone).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.GetIdentitySnapshotSummary``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentitySnapshotSummary`: []MetricResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.GetIdentitySnapshotSummary`: %v\n", resp)
}
```

[[Back to top]](#)

## get-identity-start-date
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets the start date of the identity
This method retrieves start date of the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-start-date)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityStartDateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

**string**

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetIdentityStartDate(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.GetIdentityStartDate(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.GetIdentityStartDate``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetIdentityStartDate`: string
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.GetIdentityStartDate`: %v\n", resp)
}
```

[[Back to top]](#)

## list-historical-identities
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Lists all the identities
This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-historical-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListHistoricalIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **startsWithQuery** | **string** | This param is used for starts-with search for first, last and display name of the identity | 
 **isDeleted** | **bool** | Indicates if we want to only list down deleted identities or not. | 
 **isActive** | **bool** | Indicates if we want to only list active or inactive identities. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]IdentityListItem**](../models/identity-list-item)

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
    startsWithQuery := `Ada` // string | This param is used for starts-with search for first, last and display name of the identity (optional) # string | This param is used for starts-with search for first, last and display name of the identity (optional)
    isDeleted := true // bool | Indicates if we want to only list down deleted identities or not. (optional) # bool | Indicates if we want to only list down deleted identities or not. (optional)
    isActive := true // bool | Indicates if we want to only list active or inactive identities. (optional) # bool | Indicates if we want to only list active or inactive identities. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListHistoricalIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListHistoricalIdentities(context.Background()).XSailPointExperimental(xSailPointExperimental).StartsWithQuery(startsWithQuery).IsDeleted(isDeleted).IsActive(isActive).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.ListHistoricalIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListHistoricalIdentities`: []IdentityListItem
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.ListHistoricalIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-access-items
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List access items by identity
This method retrieves a list of access item for the identity filtered by the access item type


[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-identity-access-items)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityAccessItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **type_** | **string** | The type of access item for the identity. If not provided, it defaults to account | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]ListIdentityAccessItems200ResponseInner**](../models/list-identity-access-items200-response-inner)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    type_ := `account` // string | The type of access item for the identity. If not provided, it defaults to account (optional) # string | The type of access item for the identity. If not provided, it defaults to account (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListIdentityAccessItems(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListIdentityAccessItems(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Type_(type_).Limit(limit).Count(count).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.ListIdentityAccessItems``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentityAccessItems`: []ListIdentityAccessItems200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.ListIdentityAccessItems`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-snapshot-access-items
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Gets the list of identity access items at a given date filterd by item type
This method retrieves the list of identity access items at a given date filterd by item type Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-identity-snapshot-access-items)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 
**date** | **string** | The specified date | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentitySnapshotAccessItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **type_** | **string** | The access item type | 

### Return type

[**[]ListIdentitySnapshotAccessItems200ResponseInner**](../models/list-identity-snapshot-access-items200-response-inner)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    date := `2007-03-01T13:00:00Z` // string | The specified date # string | The specified date
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    type_ := `account` // string | The access item type (optional) # string | The access item type (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListIdentitySnapshotAccessItems(context.Background(), id, date).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListIdentitySnapshotAccessItems(context.Background(), id, date).XSailPointExperimental(xSailPointExperimental).Type_(type_).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.ListIdentitySnapshotAccessItems``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentitySnapshotAccessItems`: []ListIdentitySnapshotAccessItems200ResponseInner
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.ListIdentitySnapshotAccessItems`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-snapshots
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Lists all the snapshots for the identity
This method retrieves all the snapshots for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-identity-snapshots)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentitySnapshotsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **start** | **string** | The specified start date | 
 **interval** | **string** | The interval indicating the range in day or month for the specified interval-name | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]IdentitySnapshotSummaryResponse**](../models/identity-snapshot-summary-response)

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
    id := `8c190e6787aa4ed9a90bd9d5344523fb` // string | The identity id # string | The identity id
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    start := `2007-03-01T13:00:00Z` // string | The specified start date (optional) # string | The specified start date (optional)
    interval := `interval_example` // string | The interval indicating the range in day or month for the specified interval-name (optional) # string | The interval indicating the range in day or month for the specified interval-name (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListIdentitySnapshots(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2024.IdentityHistoryAPI.ListIdentitySnapshots(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Start(start).Interval(interval).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.ListIdentitySnapshots``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListIdentitySnapshots`: []IdentitySnapshotSummaryResponse
    fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.ListIdentitySnapshots`: %v\n", resp)
}
```

[[Back to top]](#)

