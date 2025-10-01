---
id: v2025-custom-user-levels
title: CustomUserLevels
pagination_label: CustomUserLevels
sidebar_label: CustomUserLevels
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CustomUserLevels', 'V2025CustomUserLevels'] 
slug: /tools/sdk/go/v2025/methods/custom-user-levels
tags: ['SDK', 'Software Development Kit', 'CustomUserLevels', 'V2025CustomUserLevels']
---

# CustomUserLevelsAPI
  Use this API to implement custom user level functionality.
With this functionality in place, administrators can create custom user levels and configure them for use throughout Identity Security Cloud.

Custom user levels allow administrators to create custom user levels that can be used to control access to Identity Security Cloud features and APIs.

Refer to [User Levels](https://documentation.sailpoint.com/saas/help/common/users/index.html) for more information about User Levels.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-user-level**](#create-custom-user-level) | **Post** `/authorization/custom-user-levels` | Create a custom user level
[**delete-user-level**](#delete-user-level) | **Delete** `/authorization/custom-user-levels/{id}` | Delete a user level
[**get-user-level**](#get-user-level) | **Get** `/authorization/custom-user-levels/{id}` | Retrieve a user level
[**list-all-authorization-right-sets**](#list-all-authorization-right-sets) | **Get** `/authorization/authorization-assignable-right-sets` | List all uiAssignable right sets
[**list-user-levels**](#list-user-levels) | **Get** `/authorization/custom-user-levels` | List user levels
[**publish-custom-user-level**](#publish-custom-user-level) | **Post** `/authorization/custom-user-levels/{id}/publish` | Publish a custom user level
[**update-user-level**](#update-user-level) | **Patch** `/authorization/custom-user-levels/{id}` | Update a user level


## create-custom-user-level
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
Create a custom user level
Creates a new custom user level for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-custom-user-level)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomUserLevelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **userLevelRequest** | [**UserLevelRequest**](../models/user-level-request) | Payload containing the details of the user level to be created. | 

### Return type

[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    userlevelrequest := []byte(`{
          "owner" : {
            "manager" : {
              "name" : "Thomas Edison",
              "id" : "2c9180a46faadee4016fb4e018c20639",
              "type" : "IDENTITY"
            },
            "name" : "Alison Ferguso",
            "alias" : "alison.ferguso",
            "attributes" : [ {
              "name" : "Country",
              "value" : "US",
              "key" : "country"
            }, {
              "name" : "Country",
              "value" : "US",
              "key" : "country"
            } ],
            "id" : "2c9180857182305e0171993735622948",
            "identityState" : "ACTIVE",
            "email" : "alison.ferguso@acme-solar.com",
            "status" : "Active"
          },
          "rightSets" : [ "idn:ui-right-set-list-read-example", "idn:ui-right-set-write-example" ],
          "name" : "Custom User Level Name",
          "description" : "This is a description of the custom user level."
        }`) // UserLevelRequest | Payload containing the details of the user level to be created.

    var userLevelRequest v2025.UserLevelRequest
    if err := json.Unmarshal(userlevelrequest, &userLevelRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.CustomUserLevelsAPI.CreateCustomUserLevel(context.Background()).XSailPointExperimental(xSailPointExperimental).UserLevelRequest(userLevelRequest).Execute()
	  //resp, r, err := apiClient.V2025.CustomUserLevelsAPI.CreateCustomUserLevel(context.Background()).XSailPointExperimental(xSailPointExperimental).UserLevelRequest(userLevelRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.CreateCustomUserLevel``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomUserLevel`: UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.CreateCustomUserLevel`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-user-level
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
Delete a user level
Deletes a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-user-level)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUserLevelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level. # string | The unique identifier of the user level.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.CustomUserLevelsAPI.DeleteUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.V2025.CustomUserLevelsAPI.DeleteUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.DeleteUserLevel``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-user-level
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
Retrieve a user level
Fetches the details of a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-user-level)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserLevelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

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
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level. # string | The unique identifier of the user level.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.CustomUserLevelsAPI.GetUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.CustomUserLevelsAPI.GetUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.GetUserLevel``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUserLevel`: UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.GetUserLevel`: %v\n", resp)
}
```

[[Back to top]](#)

## list-all-authorization-right-sets
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
List all uiAssignable right sets
Retrieves a list of authorization assignable right sets for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-all-authorization-right-sets)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAllAuthorizationRightSetsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]HierarchicalRightSet**](../models/hierarchical-right-set)

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
    filters := `category eq "identity"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional)
    sorters := `name, -id, -category` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.CustomUserLevelsAPI.ListAllAuthorizationRightSets(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.CustomUserLevelsAPI.ListAllAuthorizationRightSets(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.ListAllAuthorizationRightSets``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAllAuthorizationRightSets`: []HierarchicalRightSet
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.ListAllAuthorizationRightSets`: %v\n", resp)
}
```

[[Back to top]](#)

## list-user-levels
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
List user levels
Retrieves a list of user levels for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-levels)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUserLevelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **detailLevel** | **string** | Specifies the level of detail for the user levels. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]UserLevelSummaryDTO**](../models/user-level-summary-dto)

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
    detailLevel := `detailLevel=FULL` // string | Specifies the level of detail for the user levels. (optional) # string | Specifies the level of detail for the user levels. (optional)
    filters := `name co "identity", owner co "john", status eq "active", description co "some description"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* (optional)
    sorters := `name, -created, description, status, owner` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.CustomUserLevelsAPI.ListUserLevels(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.CustomUserLevelsAPI.ListUserLevels(context.Background()).XSailPointExperimental(xSailPointExperimental).DetailLevel(detailLevel).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.ListUserLevels``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUserLevels`: []UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.ListUserLevels`: %v\n", resp)
}
```

[[Back to top]](#)

## publish-custom-user-level
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
Publish a custom user level
Publishes a custom user level for the tenant, making it active and available.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/publish-custom-user-level)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level to publish. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPublishCustomUserLevelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]


### Return type

[**UserLevelPublishSummary**](../models/user-level-publish-summary)

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
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level to publish. # string | The unique identifier of the user level to publish.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.CustomUserLevelsAPI.PublishCustomUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.CustomUserLevelsAPI.PublishCustomUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.PublishCustomUserLevel``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PublishCustomUserLevel`: UserLevelPublishSummary
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.PublishCustomUserLevel`: %v\n", resp)
}
```

[[Back to top]](#)

## update-user-level
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
Update a user level
Updates the details of a specific user level using JSON Patch.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-user-level)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserLevelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | JSON Patch payload for updating the user level. | 

### Return type

[**UserLevelSummaryDTO**](../models/user-level-summary-dto)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level. # string | The unique identifier of the user level.
    jsonpatch := []byte(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) // JsonPatch | JSON Patch payload for updating the user level.

    var jsonPatch v2025.JsonPatch
    if err := json.Unmarshal(jsonpatch, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.CustomUserLevelsAPI.UpdateUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.V2025.CustomUserLevelsAPI.UpdateUserLevel(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.UpdateUserLevel``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateUserLevel`: UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.UpdateUserLevel`: %v\n", resp)
}
```

[[Back to top]](#)

