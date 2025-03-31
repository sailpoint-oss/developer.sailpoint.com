---
id: beta-identity-history
title: IdentityHistory
pagination_label: IdentityHistory
sidebar_label: IdentityHistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityHistory', 'BetaIdentityHistory'] 
slug: /tools/sdk/go/beta/methods/identity-history
tags: ['SDK', 'Software Development Kit', 'IdentityHistory', 'BetaIdentityHistory']
---

# IdentityHistoryAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compare-identity-snapshots**](#compare-identity-snapshots) | **Get** `/historical-identities/{id}/compare` | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**compare-identity-snapshots-access-type**](#compare-identity-snapshots-access-type) | **Get** `/historical-identities/{id}/compare/{accessType}` | Gets a list of differences of specific accessType for the given identity between 2 snapshots
[**get-historical-identity**](#get-historical-identity) | **Get** `/historical-identities/{id}` | Get latest snapshot of identity
[**get-historical-identity-events**](#get-historical-identity-events) | **Get** `/historical-identities/{id}/events` | Lists all events for the given identity
[**get-identity-snapshot**](#get-identity-snapshot) | **Get** `/historical-identities/{id}/snapshots/{date}` | Gets an identity snapshot at a given date
[**get-identity-snapshot-summary**](#get-identity-snapshot-summary) | **Get** `/historical-identities/{id}/snapshot-summary` | Gets the summary for the event count for a specific identity
[**get-identity-start-date**](#get-identity-start-date) | **Get** `/historical-identities/{id}/start-date` | Gets the start date of the identity
[**list-historical-identities**](#list-historical-identities) | **Get** `/historical-identities` | Lists all the identities
[**list-identity-access-items**](#list-identity-access-items) | **Get** `/historical-identities/{id}/access-items` | List Access Items by Identity
[**list-identity-snapshot-access-items**](#list-identity-snapshot-access-items) | **Get** `/historical-identities/{id}/snapshots/{date}/access-items` | Get Identity Access Items Snapshot
[**list-identity-snapshots**](#list-identity-snapshots) | **Get** `/historical-identities/{id}/snapshots` | Lists all the snapshots for the identity


## compare-identity-snapshots
Gets a difference of count for each access item types for the given identity between 2 snapshots
This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/compare-identity-snapshots)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompareIdentitySnapshotsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    snapshot1 := 2007-03-01T13:00:00Z # string | The snapshot 1 of identity (optional) # string | The snapshot 1 of identity (optional)
    snapshot2 := 2008-03-01T13:00:00Z # string | The snapshot 2 of identity (optional) # string | The snapshot 2 of identity (optional)
    accessItemTypes := fmt.Sprintf(``) # []string | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.CompareIdentitySnapshots(context.Background(), id).Snapshot1(snapshot1).Snapshot2(snapshot2).AccessItemTypes(accessItemTypes).Limit(limit).Offset(offset).Count(count).Execute()
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
Gets a list of differences of specific accessType for the given identity between 2 snapshots
This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/compare-identity-snapshots-access-type)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    accessType := role # string | The specific type which needs to be compared # string | The specific type which needs to be compared
    accessAssociated := 2007-03-01T13:00:00Z # bool | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional) # bool | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional)
    snapshot1 := 2008-03-01T13:00:00Z # string | The snapshot 1 of identity (optional) # string | The snapshot 1 of identity (optional)
    snapshot2 := 2009-03-01T13:00:00Z # string | The snapshot 2 of identity (optional) # string | The snapshot 2 of identity (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.CompareIdentitySnapshotsAccessType(context.Background(), id, accessType).AccessAssociated(accessAssociated).Snapshot1(snapshot1).Snapshot2(snapshot2).Limit(limit).Offset(offset).Count(count).Execute()
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
Get latest snapshot of identity
This method retrieves a specified identity Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-historical-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHistoricalIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.GetHistoricalIdentity(context.Background(), id).Execute()
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
Lists all events for the given identity
This method retrieves all access events for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-historical-identity-events)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHistoricalIdentityEventsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    from := 2024-03-01T13:00:00Z # string | The optional instant until which access events are returned (optional) # string | The optional instant until which access events are returned (optional)
    eventTypes := fmt.Sprintf(`[AccessAddedEvent, AccessRemovedEvent]`) # []string | An optional list of event types to return.  If null or empty, all events are returned (optional)
    accessItemTypes := fmt.Sprintf(`[entitlement, account]`) # []string | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.GetHistoricalIdentityEvents(context.Background(), id).From(from).EventTypes(eventTypes).AccessItemTypes(accessItemTypes).Limit(limit).Offset(offset).Count(count).Execute()
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
Gets an identity snapshot at a given date
This method retrieves a specified identity snapshot at a given date Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-snapshot)

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    date := 2007-03-01T13:00:00Z # string | The specified date # string | The specified date

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.GetIdentitySnapshot(context.Background(), id, date).Execute()
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
Gets the summary for the event count for a specific identity
This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-snapshot-summary)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentitySnapshotSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    before := 2007-03-01T13:00:00Z # string | The date before which snapshot summary is required (optional) # string | The date before which snapshot summary is required (optional)
    interval := interval_example # string | The interval indicating day or month. Defaults to month if not specified (optional) # string | The interval indicating day or month. Defaults to month if not specified (optional)
    timeZone := UTC # string | The time zone. Defaults to UTC if not provided (optional) # string | The time zone. Defaults to UTC if not provided (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.GetIdentitySnapshotSummary(context.Background(), id).Before(before).Interval(interval).TimeZone(timeZone).Limit(limit).Offset(offset).Count(count).Execute()
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
Gets the start date of the identity
This method retrieves start date of the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-start-date)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetIdentityStartDateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.GetIdentityStartDate(context.Background(), id).Execute()
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
Lists all the identities
This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of 'idn:identity-history:read'

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-historical-identities)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListHistoricalIdentitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    startsWithQuery := Ada # string | This param is used for starts-with search for first, last and display name of the identity (optional) # string | This param is used for starts-with search for first, last and display name of the identity (optional)
    isDeleted := true # bool | Indicates if we want to only list down deleted identities or not. (optional) # bool | Indicates if we want to only list down deleted identities or not. (optional)
    isActive := true # bool | Indicates if we want to only list active or inactive identities. (optional) # bool | Indicates if we want to only list active or inactive identities. (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.ListHistoricalIdentities(context.Background()).StartsWithQuery(startsWithQuery).IsDeleted(isDeleted).IsActive(isActive).Limit(limit).Offset(offset).Execute()
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
List Access Items by Identity
This method retrieves a list of access item for the identity filtered by the access item type

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identity-access-items)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentityAccessItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **type_** | **string** | The type of access item for the identity. If not provided, it defaults to account.  Types of access items: **accessProfile, account, app, entitlement, role** | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source**: *eq*  **standalone**: *eq*  **privileged**: *eq*  **attribute**: *eq*  **cloudGoverned**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, value, standalone, privileged, attribute, source, cloudGoverned, removeDate, nativeIdentity, entitlementCount** | 
 **query** | **string** | This param is used to search if certain fields of the access item contain the string provided.  Searching is supported for the following fields depending on the type:  Access Profiles: **name, description**  Accounts: **name, nativeIdentity**  Apps: **name**  Entitlements: **name, value, description**  Roles: **name, description** | 
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    type_ := account # string | The type of access item for the identity. If not provided, it defaults to account.  Types of access items: **accessProfile, account, app, entitlement, role** (optional) # string | The type of access item for the identity. If not provided, it defaults to account.  Types of access items: **accessProfile, account, app, entitlement, role** (optional)
    filters := source eq "DataScienceDataset" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source**: *eq*  **standalone**: *eq*  **privileged**: *eq*  **attribute**: *eq*  **cloudGoverned**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **source**: *eq*  **standalone**: *eq*  **privileged**: *eq*  **attribute**: *eq*  **cloudGoverned**: *eq* (optional)
    sorters := name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, value, standalone, privileged, attribute, source, cloudGoverned, removeDate, nativeIdentity, entitlementCount** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, value, standalone, privileged, attribute, source, cloudGoverned, removeDate, nativeIdentity, entitlementCount** (optional)
    query := Dr. Arden # string | This param is used to search if certain fields of the access item contain the string provided.  Searching is supported for the following fields depending on the type:  Access Profiles: **name, description**  Accounts: **name, nativeIdentity**  Apps: **name**  Entitlements: **name, value, description**  Roles: **name, description** (optional) # string | This param is used to search if certain fields of the access item contain the string provided.  Searching is supported for the following fields depending on the type:  Access Profiles: **name, description**  Accounts: **name, nativeIdentity**  Apps: **name**  Entitlements: **name, value, description**  Roles: **name, description** (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.ListIdentityAccessItems(context.Background(), id).Type_(type_).Filters(filters).Sorters(sorters).Query(query).Limit(limit).Count(count).Offset(offset).Execute()
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
Get Identity Access Items Snapshot
Use this API to get a list of identity access items at a specified date, filtered by item type.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identity-snapshot-access-items)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Identity ID. | 
**date** | **string** | Specified date. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentitySnapshotAccessItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **type_** | **string** | Access item type. | 

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | Identity ID. # string | Identity ID.
    date := 2007-03-01T13:00:00Z # string | Specified date. # string | Specified date.
    type_ := account # string | Access item type. (optional) # string | Access item type. (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.ListIdentitySnapshotAccessItems(context.Background(), id, date).Type_(type_).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.ListIdentitySnapshotAccessItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListIdentitySnapshotAccessItems`: []ListIdentityAccessItems200ResponseInner
	fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.ListIdentitySnapshotAccessItems`: %v\n", resp)
}
```

[[Back to top]](#)

## list-identity-snapshots
Lists all the snapshots for the identity
This method retrieves all the snapshots for the identity Requires authorization scope of 'idn:identity-history:read' 

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identity-snapshots)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The identity id | 

### Other Parameters

Other parameters are passed through a pointer to a apiListIdentitySnapshotsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 8c190e6787aa4ed9a90bd9d5344523fb # string | The identity id # string | The identity id
    start := 2007-03-01T13:00:00Z # string | The specified start date (optional) # string | The specified start date (optional)
    interval := interval_example # string | The interval indicating the range in day or month for the specified interval-name (optional) # string | The interval indicating the range in day or month for the specified interval-name (optional)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IdentityHistoryAPI.ListIdentitySnapshots(context.Background(), id).Start(start).Interval(interval).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IdentityHistoryAPI.ListIdentitySnapshots``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListIdentitySnapshots`: []IdentitySnapshotSummaryResponse
	fmt.Fprintf(os.Stdout, "Response from `IdentityHistoryAPI.ListIdentitySnapshots`: %v\n", resp)
}
```

[[Back to top]](#)

