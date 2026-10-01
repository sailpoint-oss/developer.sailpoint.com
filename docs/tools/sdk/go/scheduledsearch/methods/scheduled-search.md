# ScheduledSearch

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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-scheduled-search-v1**](#create-scheduled-search-v1) | **Post** `/scheduled-searches/v1` | Create a new scheduled search
[**delete-scheduled-search-v1**](#delete-scheduled-search-v1) | **Delete** `/scheduled-searches/v1/{id}` | Delete a scheduled search
[**get-scheduled-search-v1**](#get-scheduled-search-v1) | **Get** `/scheduled-searches/v1/{id}` | Get a scheduled search
[**list-scheduled-search-v1**](#list-scheduled-search-v1) | **Get** `/scheduled-searches/v1` | List scheduled searches
[**unsubscribe-scheduled-search-v1**](#unsubscribe-scheduled-search-v1) | **Post** `/scheduled-searches/v1/{id}/unsubscribe` | Unsubscribe a recipient from scheduled search
[**update-scheduled-search-v1**](#update-scheduled-search-v1) | **Put** `/scheduled-searches/v1/{id}` | Update an existing scheduled search


## create-scheduled-search-v1
Create a new scheduled search
Creates a new scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/create-scheduled-search-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateScheduledSearchV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createScheduledSearchV1Request** | [**CreateScheduledSearchV1Request**](../models/create-scheduled-search-v1-request) | The scheduled search to persist. | 

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
  "encoding/json"
    scheduled_search "github.com/sailpoint-oss/golang-sdk/v3/scheduled_search"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createscheduledsearchv1requestJson := []byte(`{"savedSearchId":"9c620e13-cd33-4804-a13d-403bd7bcdbad","schedule":{"type":"DAILY","hours":{"type":"LIST","values":["9"]}},"recipients":[{"type":"IDENTITY","id":"2c9180867624cbd7017642d8c8c81f67"}]}`) // CreateScheduledSearchV1Request | The scheduled search to persist.

    var createScheduledSearchV1Request scheduled_search.CreateScheduledSearchV1Request
    if err := json.Unmarshal(createscheduledsearchv1requestJson, &createScheduledSearchV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ScheduledSearchAPI.CreateScheduledSearchV1(context.Background()).CreateScheduledSearchV1Request(createScheduledSearchV1Request).Execute()
	  //resp, r, err := apiClient.ScheduledSearchAPI.CreateScheduledSearchV1(context.Background()).CreateScheduledSearchV1Request(createScheduledSearchV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.CreateScheduledSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateScheduledSearchV1`: ScheduledSearch
    fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.CreateScheduledSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-scheduled-search-v1
Delete a scheduled search
Deletes the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/delete-scheduled-search-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteScheduledSearchV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ScheduledSearchAPI.DeleteScheduledSearchV1(context.Background(), id).Execute()
	  //r, err := apiClient.ScheduledSearchAPI.DeleteScheduledSearchV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.DeleteScheduledSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-scheduled-search-v1
Get a scheduled search
Returns the specified scheduled search.

[API Spec](https://developer.sailpoint.com/docs/api/get-scheduled-search-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetScheduledSearchV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ScheduledSearchAPI.GetScheduledSearchV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ScheduledSearchAPI.GetScheduledSearchV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.GetScheduledSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetScheduledSearchV1`: ScheduledSearch
    fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.GetScheduledSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-scheduled-search-v1
List scheduled searches
Returns a list of scheduled searches.


[API Spec](https://developer.sailpoint.com/docs/api/list-scheduled-search-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListScheduledSearchV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `savedSearchId eq "6cc0945d-9eeb-4948-9033-72d066e1153e"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq*  **savedSearchId**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ScheduledSearchAPI.ListScheduledSearchV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ScheduledSearchAPI.ListScheduledSearchV1(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.ListScheduledSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListScheduledSearchV1`: []ScheduledSearch
    fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.ListScheduledSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

## unsubscribe-scheduled-search-v1
Unsubscribe a recipient from scheduled search
Unsubscribes a recipient from the specified scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/unsubscribe-scheduled-search-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUnsubscribeScheduledSearchV1Request struct via the builder pattern


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
  "encoding/json"
    scheduled_search "github.com/sailpoint-oss/golang-sdk/v3/scheduled_search"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.
    typedreferenceJson := []byte(`{
          "id" : "2c91808568c529c60168cca6f90c1313",
          "type" : "IDENTITY"
        }`) // TypedReference | The recipient to be removed from the scheduled search. 

    var typedReference scheduled_search.TypedReference
    if err := json.Unmarshal(typedreferenceJson, &typedReference); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ScheduledSearchAPI.UnsubscribeScheduledSearchV1(context.Background(), id).TypedReference(typedReference).Execute()
	  //r, err := apiClient.ScheduledSearchAPI.UnsubscribeScheduledSearchV1(context.Background(), id).TypedReference(typedReference).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.UnsubscribeScheduledSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## update-scheduled-search-v1
Update an existing scheduled search
Updates an existing scheduled search.


[API Spec](https://developer.sailpoint.com/docs/api/update-scheduled-search-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateScheduledSearchV1Request struct via the builder pattern


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
  "encoding/json"
    scheduled_search "github.com/sailpoint-oss/golang-sdk/v3/scheduled_search"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.
    scheduledsearchJson := []byte(`{
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
        }`) // ScheduledSearch | The scheduled search to persist.

    var scheduledSearch scheduled_search.ScheduledSearch
    if err := json.Unmarshal(scheduledsearchJson, &scheduledSearch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ScheduledSearchAPI.UpdateScheduledSearchV1(context.Background(), id).ScheduledSearch(scheduledSearch).Execute()
	  //resp, r, err := apiClient.ScheduledSearchAPI.UpdateScheduledSearchV1(context.Background(), id).ScheduledSearch(scheduledSearch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ScheduledSearchAPI.UpdateScheduledSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateScheduledSearchV1`: ScheduledSearch
    fmt.Fprintf(os.Stdout, "Response from `ScheduledSearchAPI.UpdateScheduledSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

