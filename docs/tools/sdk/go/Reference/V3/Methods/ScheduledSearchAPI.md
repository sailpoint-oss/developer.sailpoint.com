---
id: scheduled-search
title: ScheduledSearch
pagination_label: ScheduledSearch
sidebar_label: ScheduledSearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ScheduledSearch', 'ScheduledSearch'] 
slug: /tools/sdk/go/v3/methods/scheduled-search
tags: ['SDK', 'Software Development Kit', 'ScheduledSearch', 'ScheduledSearch']
---

# ScheduledSearchAPI
  Use this API to implement scheduled search functionality. 
With scheduled search functionality in place, users can run saved search queries on their tenants on a schedule, and Identity Security Cloud emails them the search results. 
Users can also share these search results with other users by email by adding those users as subscribers, or those users can subscribe themselves. 

One of the greatest benefits of saving searches is the ability to run those searches on a schedule. 
This is essential for organizations to constantly detect any changes to user information or access throughout their tenants and across all their sources. 
For example, the manager Amanda Ross can schedule a saved search &quot;manager.name:amanda.ross AND attributes.location:austin&quot; on a schedule to regularly stay aware of changes with the Austin employees reporting to her.
Identity Security Cloud emails her the search results when the search runs, so she can work on other tasks instead of actively running this search.

In Identity Security Cloud, scheduling a search involves a subscription. 
Users can create a subscription for a saved search and schedule it to run daily, weekly, or monthly (you can only use one schedule option at a time). 
The user can add other identities as subscribers so when the scheduled search runs, the subscribers and the user all receive emails. 

By default, subscriptions exclude detailed results from the emails, for security purposes. 
Including detailed results about user access in an email may expose sensitive information.
However, the subscription creator can choose to include the information in the emails.  

By default, Identity Security Cloud sends emails to the subscribers even when the searches do not return new results. 
However, the subscription creator can choose to suppress these empty emails. 

Users can also subscribe to saved searches that already have existing subscriptions so they receive emails when the searches run. 
A saved search can have up to 10 subscriptions configured at a time. 

The subscription creator can enable, disable, or delete the subscription. 

Refer to [Subscribing to Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html#subscribing-to-saved-searches) for more information about scheduling searches and subscribing to them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-scheduled-search**](#create-scheduled-search) | **Post** `/scheduled-searches` | Create a new scheduled search
[**delete-scheduled-search**](#delete-scheduled-search) | **Delete** `/scheduled-searches/{id}` | Delete a Scheduled Search
[**get-scheduled-search**](#get-scheduled-search) | **Get** `/scheduled-searches/{id}` | Get a Scheduled Search
[**list-scheduled-search**](#list-scheduled-search) | **Get** `/scheduled-searches` | List scheduled searches
[**unsubscribe-scheduled-search**](#unsubscribe-scheduled-search) | **Post** `/scheduled-searches/{id}/unsubscribe` | Unsubscribe a recipient from Scheduled Search
[**update-scheduled-search**](#update-scheduled-search) | **Put** `/scheduled-searches/{id}` | Update an existing Scheduled Search


## create-scheduled-search
Create a new scheduled search
Creates a new scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-scheduled-search)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduledSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createScheduledSearchRequest** | [**CreateScheduledSearchRequest**](../models/create-scheduled-search-request) | The scheduled search to persist. | 

### Return type

[**ScheduledSearch**](../models/scheduled-search)

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
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createScheduledSearchRequest := fmt.Sprintf(`{savedSearchId=9c620e13-cd33-4804-a13d-403bd7bcdbad, schedule={type=DAILY, hours={type=LIST, values=[9]}}, recipients=[{type=IDENTITY, id=2c9180867624cbd7017642d8c8c81f67}]}`) # CreateScheduledSearchRequest | The scheduled search to persist.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.ScheduledSearchAPI.CreateScheduledSearch(context.Background()).CreateScheduledSearchRequest(createScheduledSearchRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.CreateScheduledSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateScheduledSearch`: ScheduledSearch
	fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.CreateScheduledSearch`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-scheduled-search
Delete a Scheduled Search
Deletes the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-scheduled-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteScheduledSearchRequest struct via the builder pattern


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
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c91808568c529c60168cca6f90c1313 # string | ID of the requested document. # string | ID of the requested document.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V3.ScheduledSearchAPI.DeleteScheduledSearch(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.DeleteScheduledSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-scheduled-search
Get a Scheduled Search
Returns the specified scheduled search.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-scheduled-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetScheduledSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ScheduledSearch**](../models/scheduled-search)

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
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c91808568c529c60168cca6f90c1313 # string | ID of the requested document. # string | ID of the requested document.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.ScheduledSearchAPI.GetScheduledSearch(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.GetScheduledSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetScheduledSearch`: ScheduledSearch
	fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.GetScheduledSearch`: %v\n", resp)
}
```

[[Back to top]](#)

## list-scheduled-search
List scheduled searches
Returns a list of scheduled searches.


[API Spec](https://developer.sailpoint.com/docs/api/v3/list-scheduled-search)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListScheduledSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* | 

### Return type

[**[]ScheduledSearch**](../models/scheduled-search)

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
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := savedSearchId eq "6cc0945d-9eeb-4948-9033-72d066e1153e" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.ScheduledSearchAPI.ListScheduledSearch(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.ListScheduledSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListScheduledSearch`: []ScheduledSearch
	fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.ListScheduledSearch`: %v\n", resp)
}
```

[[Back to top]](#)

## unsubscribe-scheduled-search
Unsubscribe a recipient from Scheduled Search
Unsubscribes a recipient from the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/unsubscribe-scheduled-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnsubscribeScheduledSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **typedReference** | [**TypedReference**](../models/typed-reference) | The recipient to be removed from the scheduled search.  | 

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
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c91808568c529c60168cca6f90c1313 # string | ID of the requested document. # string | ID of the requested document.
    typedReference := fmt.Sprintf(`{
          "id" : "2c91808568c529c60168cca6f90c1313",
          "type" : "IDENTITY"
        }`) # TypedReference | The recipient to be removed from the scheduled search. 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.V3.ScheduledSearchAPI.UnsubscribeScheduledSearch(context.Background(), id).TypedReference(typedReference).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.UnsubscribeScheduledSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## update-scheduled-search
Update an existing Scheduled Search
Updates an existing scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/update-scheduled-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateScheduledSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **scheduledSearch** | [**ScheduledSearch**](../models/scheduled-search) | The scheduled search to persist. | 

### Return type

[**ScheduledSearch**](../models/scheduled-search)

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
  v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := 2c91808568c529c60168cca6f90c1313 # string | ID of the requested document. # string | ID of the requested document.
    scheduledSearch := fmt.Sprintf(`{
          "owner" : {
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          },
          "displayQueryDetails" : false,
          "created" : "",
          "description" : "Daily disabled accounts",
          "ownerId" : "2c9180867624cbd7017642d8c8c81f67",
          "enabled" : false,
          "schedule" : {
            "hours" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "months" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "timeZoneId" : "America/Chicago",
            "days" : {
              "values" : [ "MON", "WED" ],
              "interval" : 3,
              "type" : "LIST"
            },
            "expiration" : "2018-06-25T20:22:28.104Z",
            "type" : "WEEKLY"
          },
          "recipients" : [ {
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          }, {
            "id" : "2c9180867624cbd7017642d8c8c81f67",
            "type" : "IDENTITY"
          } ],
          "savedSearchId" : "554f1511-f0a1-4744-ab14-599514d3e57c",
          "name" : "Daily disabled accounts",
          "modified" : "",
          "id" : "0de46054-fe90-434a-b84e-c6b3359d0c64",
          "emailEmptyResults" : false
        }`) # ScheduledSearch | The scheduled search to persist.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V3.ScheduledSearchAPI.UpdateScheduledSearch(context.Background(), id).ScheduledSearch(scheduledSearch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.UpdateScheduledSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateScheduledSearch`: ScheduledSearch
	fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.UpdateScheduledSearch`: %v\n", resp)
}
```

[[Back to top]](#)

