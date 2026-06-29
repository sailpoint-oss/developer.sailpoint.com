---
id: v1-saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearch', 'V1SavedSearch'] 
slug: /tools/sdk/go/savedsearch/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'V1SavedSearch']
---

# SavedSearchAPI
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v2025/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-saved-search-v1**](#create-saved-search-v1) | **Post** `/saved-searches/v1` | Create a saved search
[**delete-saved-search-v1**](#delete-saved-search-v1) | **Delete** `/saved-searches/v1/{id}` | Delete document by id
[**execute-saved-search-v1**](#execute-saved-search-v1) | **Post** `/saved-searches/v1/{id}/execute` | Execute a saved search by id
[**get-saved-search-v1**](#get-saved-search-v1) | **Get** `/saved-searches/v1/{id}` | Return saved search by id
[**list-saved-searches-v1**](#list-saved-searches-v1) | **Get** `/saved-searches/v1` | A list of saved searches
[**put-saved-search-v1**](#put-saved-search-v1) | **Put** `/saved-searches/v1/{id}` | Updates an existing saved search 


## create-saved-search-v1
Create a saved search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-saved-search-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSavedSearchV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSavedSearchV1Request** | [**CreateSavedSearchV1Request**](../models/create-saved-search-v1-request) | The saved search to persist. | 

### Return type

[**Savedsearch**](../models/savedsearch)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
)

func main() {
    createsavedsearchv1request := []byte(``) // CreateSavedSearchV1Request | The saved search to persist.

    var createSavedSearchV1Request v1.CreateSavedSearchV1Request
    if err := json.Unmarshal(createsavedsearchv1request, &createSavedSearchV1Request); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SavedSearchAPI.CreateSavedSearchV1(context.Background()).CreateSavedSearchV1Request(createSavedSearchV1Request).Execute()
	  //resp, r, err := apiClient.SavedSearchAPI.CreateSavedSearchV1(context.Background()).CreateSavedSearchV1Request(createSavedSearchV1Request).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.CreateSavedSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateSavedSearchV1`: Savedsearch
    fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.CreateSavedSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-saved-search-v1
Delete document by id
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-saved-search-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSavedSearchV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SavedSearchAPI.DeleteSavedSearchV1(context.Background(), id).Execute()
	  //r, err := apiClient.SavedSearchAPI.DeleteSavedSearchV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.DeleteSavedSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## execute-saved-search-v1
Execute a saved search by id
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/execute-saved-search-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiExecuteSavedSearchV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **searcharguments** | [**Searcharguments**](../models/searcharguments) | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided.  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.
    searcharguments := []byte(``) // Searcharguments | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

    var searcharguments v1.Searcharguments
    if err := json.Unmarshal(searcharguments, &searcharguments); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SavedSearchAPI.ExecuteSavedSearchV1(context.Background(), id).Searcharguments(searcharguments).Execute()
	  //r, err := apiClient.SavedSearchAPI.ExecuteSavedSearchV1(context.Background(), id).Searcharguments(searcharguments).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.ExecuteSavedSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-saved-search-v1
Return saved search by id
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-saved-search-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSavedSearchV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Savedsearch**](../models/savedsearch)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SavedSearchAPI.GetSavedSearchV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.SavedSearchAPI.GetSavedSearchV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.GetSavedSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSavedSearchV1`: Savedsearch
    fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.GetSavedSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-saved-searches-v1
A list of saved searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v1/list-saved-searches-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSavedSearchesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* | 

### Return type

[**[]Savedsearch**](../models/savedsearch)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
)

func main() {
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `owner.id eq "7a724640-0c17-4ce9-a8c3-4a89738459c8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SavedSearchAPI.ListSavedSearchesV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SavedSearchAPI.ListSavedSearchesV1(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.ListSavedSearchesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListSavedSearchesV1`: []Savedsearch
    fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.ListSavedSearchesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-saved-search-v1
Updates an existing saved search 
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v1/put-saved-search-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSavedSearchV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **savedsearch** | [**Savedsearch**](../models/savedsearch) | The saved search to persist. | 

### Return type

[**Savedsearch**](../models/savedsearch)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/saved_search"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.
    savedsearch := []byte(``) // Savedsearch | The saved search to persist.

    var savedsearch v1.Savedsearch
    if err := json.Unmarshal(savedsearch, &savedsearch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SavedSearchAPI.PutSavedSearchV1(context.Background(), id).Savedsearch(savedsearch).Execute()
	  //resp, r, err := apiClient.SavedSearchAPI.PutSavedSearchV1(context.Background(), id).Savedsearch(savedsearch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.PutSavedSearchV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutSavedSearchV1`: Savedsearch
    fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.PutSavedSearchV1`: %v\n", resp)
}
```

[[Back to top]](#)

