---
id: saved-search
title: SavedSearch
pagination_label: SavedSearch
sidebar_label: SavedSearch
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearch', 'SavedSearch'] 
slug: /tools/sdk/go/v3/methods/saved-search
tags: ['SDK', 'Software Development Kit', 'SavedSearch', 'SavedSearch']
---

# SavedSearchAPI
  Use this API to implement saved search functionality. 
With saved search functionality in place, users can save search queries and then view those saved searches, as well as rerun them. 

Search queries in Identity Security Cloud can grow very long and specific, which can make reconstructing them difficult or tedious, so it can be especially helpful to save search queries. 
It also opens the possibility to configure Identity Security Cloud to run the saved queries on a schedule, which is essential to detecting user information and access changes throughout an organization&#39;s tenant and across all its sources. 
Refer to [Scheduled Search](https://developer.sailpoint.com/docs/api/v3/scheduled-search/) for more information about running saved searches on a schedule. 

In Identity Security Cloud, users can save searches under a name, and then they can access that saved search and run it again when they want. 

Refer to [Managing Saved Searches](https://documentation.sailpoint.com/saas/help/search/saved-searches.html) for more information about saving searches and using them.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-saved-search**](#create-saved-search) | **Post** `/saved-searches` | Create a saved search
[**delete-saved-search**](#delete-saved-search) | **Delete** `/saved-searches/{id}` | Delete document by ID
[**execute-saved-search**](#execute-saved-search) | **Post** `/saved-searches/{id}/execute` | Execute a saved search by ID
[**get-saved-search**](#get-saved-search) | **Get** `/saved-searches/{id}` | Return saved search by ID
[**list-saved-searches**](#list-saved-searches) | **Get** `/saved-searches` | A list of Saved Searches
[**put-saved-search**](#put-saved-search) | **Put** `/saved-searches/{id}` | Updates an existing saved search 


## create-saved-search
Create a saved search
Creates a new saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/create-saved-search)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateSavedSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createSavedSearchRequest** | [**CreateSavedSearchRequest**](../models/create-saved-search-request) | The saved search to persist. | 

### Return type

[**SavedSearch**](../models/saved-search)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createsavedsearchrequest := []byte(``) // CreateSavedSearchRequest | The saved search to persist.

  
   var createSavedSearchRequest v3.CreateSavedSearchRequest
   if err := json.Unmarshal(createsavedsearchrequest, &createSavedSearchRequest); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SavedSearchAPI.CreateSavedSearch(context.Background()).CreateSavedSearchRequest(createSavedSearchRequest).Execute()
	//resp, r, err := apiClient.V3.SavedSearchAPI.CreateSavedSearch(context.Background()).CreateSavedSearchRequest(createSavedSearchRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.CreateSavedSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateSavedSearch`: SavedSearch
	fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.CreateSavedSearch`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-saved-search
Delete document by ID
Deletes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-saved-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteSavedSearchRequest struct via the builder pattern


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
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.SavedSearchAPI.DeleteSavedSearch(context.Background(), id).Execute()
	//r, err := apiClient.V3.SavedSearchAPI.DeleteSavedSearch(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.DeleteSavedSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## execute-saved-search
Execute a saved search by ID
Executes the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/execute-saved-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiExecuteSavedSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **searchArguments** | [**SearchArguments**](../models/search-arguments) | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided.  | 

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.
    searcharguments := []byte(`{
          "owner" : "",
          "recipients" : [ {
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "scheduleId" : "7a724640-0c17-4ce9-a8c3-4a89738459c8"
        }`) // SearchArguments | When saved search execution is triggered by a scheduled search, *scheduleId* will specify the ID of the triggering scheduled search.  If *scheduleId* is not specified (when execution is triggered by a UI test), the *owner* and *recipients* arguments must be provided. 

  
   var searchArguments v3.SearchArguments
   if err := json.Unmarshal(searcharguments, &searchArguments); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.SavedSearchAPI.ExecuteSavedSearch(context.Background(), id).SearchArguments(searchArguments).Execute()
	//r, err := apiClient.V3.SavedSearchAPI.ExecuteSavedSearch(context.Background(), id).SearchArguments(searchArguments).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.ExecuteSavedSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-saved-search
Return saved search by ID
Returns the specified saved search.


[API Spec](https://developer.sailpoint.com/docs/api/v3/get-saved-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetSavedSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SavedSearch**](../models/saved-search)

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
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SavedSearchAPI.GetSavedSearch(context.Background(), id).Execute()
	//resp, r, err := apiClient.V3.SavedSearchAPI.GetSavedSearch(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.GetSavedSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetSavedSearch`: SavedSearch
	fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.GetSavedSearch`: %v\n", resp)
}
```

[[Back to top]](#)

## list-saved-searches
A list of Saved Searches
Returns a list of saved searches.


[API Spec](https://developer.sailpoint.com/docs/api/v3/list-saved-searches)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListSavedSearchesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* | 

### Return type

[**[]SavedSearch**](../models/saved-search)

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
    filters := `owner.id eq "7a724640-0c17-4ce9-a8c3-4a89738459c8"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **owner.id**: *eq* (optional)

  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SavedSearchAPI.ListSavedSearches(context.Background()).Execute()
	//resp, r, err := apiClient.V3.SavedSearchAPI.ListSavedSearches(context.Background()).Offset(offset).Limit(limit).Count(count).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.ListSavedSearches``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListSavedSearches`: []SavedSearch
	fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.ListSavedSearches`: %v\n", resp)
}
```

[[Back to top]](#)

## put-saved-search
Updates an existing saved search 
Updates an existing saved search. 

>**NOTE: You cannot update the `owner` of the saved search.**


[API Spec](https://developer.sailpoint.com/docs/api/v3/put-saved-search)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the requested document. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutSavedSearchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **savedSearch** | [**SavedSearch**](../models/saved-search) | The saved search to persist. | 

### Return type

[**SavedSearch**](../models/saved-search)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `2c91808568c529c60168cca6f90c1313` // string | ID of the requested document. # string | ID of the requested document.
    savedsearch := []byte(`{
          "owner" : {
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "created" : "2018-06-25T20:22:28.104Z",
          "columns" : {
            "identity" : [ {
              "field" : "displayName",
              "header" : "Display Name"
            }, {
              "field" : "e-mail",
              "header" : "Work Email"
            } ]
          },
          "query" : "@accounts(disabled:true)",
          "description" : "Disabled accounts",
          "orderBy" : {
            "identity" : [ "lastName", "firstName" ],
            "role" : [ "name" ]
          },
          "sort" : [ "displayName" ],
          "filters" : {
            "terms" : [ "account_count", "account_count" ],
            "range" : {
              "lower" : {
                "inclusive" : false,
                "value" : "1"
              },
              "upper" : {
                "inclusive" : false,
                "value" : "1"
              }
            },
            "exclude" : false,
            "type" : "RANGE"
          },
          "ownerId" : "2c91808568c529c60168cca6f90c1313",
          "indices" : [ "identities" ],
          "public" : false,
          "name" : "Disabled accounts",
          "modified" : "2018-06-25T20:22:28.104Z",
          "id" : "0de46054-fe90-434a-b84e-c6b3359d0c64",
          "fields" : [ "disabled" ]
        }`) // SavedSearch | The saved search to persist.

  
   var savedSearch v3.SavedSearch
   if err := json.Unmarshal(savedsearch, &savedSearch); err != nil {
    fmt.Println("Error:", err)
    return
   }
  

	configuration := sailpoint.NewDefaultConfiguration()
	apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.SavedSearchAPI.PutSavedSearch(context.Background(), id).SavedSearch(savedSearch).Execute()
	//resp, r, err := apiClient.V3.SavedSearchAPI.PutSavedSearch(context.Background(), id).SavedSearch(savedSearch).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SavedSearchAPI.PutSavedSearch``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PutSavedSearch`: SavedSearch
	fmt.Fprintf(os.Stdout, "Response from `SavedSearchAPI.PutSavedSearch`: %v\n", resp)
}
```

[[Back to top]](#)

