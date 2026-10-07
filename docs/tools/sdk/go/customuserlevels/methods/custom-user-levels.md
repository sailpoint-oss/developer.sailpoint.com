# CustomUserLevels

# CustomUserLevelsAPI
  Use this API to implement custom user level functionality.
With this functionality in place, administrators can create custom user levels and configure them for use throughout Identity Security Cloud.

Custom user levels allow administrators to create custom user levels that can be used to control access to Identity Security Cloud features and APIs.

Refer to [User Levels](https://documentation.sailpoint.com/saas/help/common/users/index.html) for more information about User Levels.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-user-level-v1**](#create-custom-user-level-v1) | **Post** `/authorization/v1/custom-user-levels` | Create a custom user level
[**delete-user-level-v1**](#delete-user-level-v1) | **Delete** `/authorization/v1/custom-user-levels/{id}` | Delete a user level
[**get-user-level-v1**](#get-user-level-v1) | **Get** `/authorization/v1/custom-user-levels/{id}` | Retrieve a user level
[**list-all-authorization-right-sets-v1**](#list-all-authorization-right-sets-v1) | **Get** `/authorization/v1/authorization-assignable-right-sets` | List all uiAssignable right sets
[**list-user-level-identities-v1**](#list-user-level-identities-v1) | **Get** `/authorization/v1/user-levels/{id}/identities` | List user level identities
[**list-user-levels-v1**](#list-user-levels-v1) | **Get** `/authorization/v1/custom-user-levels` | List user levels
[**publish-custom-user-level-v1**](#publish-custom-user-level-v1) | **Post** `/authorization/v1/custom-user-levels/{id}/publish` | Publish a custom user level
[**show-user-level-counts-v1**](#show-user-level-counts-v1) | **Post** `/authorization/v1/user-levels/get-identity-count` | Count user levels identities
[**update-user-level-v1**](#update-user-level-v1) | **Patch** `/authorization/v1/custom-user-levels/{id}` | Update a user level


## create-custom-user-level-v1
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
Create a custom user level
Creates a new custom user level for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-user-level-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCustomUserLevelV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **userLevelRequest** | [**UserLevelRequest**](../models/user-level-request) | Payload containing the details of the user level to be created.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case.  | 

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
    custom_user_levels "github.com/sailpoint-oss/golang-sdk/v3/custom_user_levels"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    userlevelrequestJson := []byte(`{
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
        }`) // UserLevelRequest | Payload containing the details of the user level to be created.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case. 

    var userLevelRequest custom_user_levels.UserLevelRequest
    if err := json.Unmarshal(userlevelrequestJson, &userLevelRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.CreateCustomUserLevelV1(context.Background()).XSailPointExperimental(xSailPointExperimental).UserLevelRequest(userLevelRequest).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.CreateCustomUserLevelV1(context.Background()).XSailPointExperimental(xSailPointExperimental).UserLevelRequest(userLevelRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.CreateCustomUserLevelV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCustomUserLevelV1`: UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.CreateCustomUserLevelV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-user-level-v1
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
Delete a user level
Deletes a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-user-level-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUserLevelV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level. # string | The unique identifier of the user level.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.CustomUserLevelsAPI.DeleteUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.CustomUserLevelsAPI.DeleteUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.DeleteUserLevelV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-user-level-v1
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
Retrieve a user level
Fetches the details of a specific user level by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-user-level-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUserLevelV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level. # string | The unique identifier of the user level.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.GetUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.GetUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.GetUserLevelV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUserLevelV1`: UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.GetUserLevelV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-all-authorization-right-sets-v1
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
List all uiAssignable right sets
Retrieves a list of authorization assignable right sets for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-all-authorization-right-sets-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAllAuthorizationRightSetsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `category eq "identity"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **category**: *eq* (optional)
    sorters := `name, -id, -category` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, category** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.ListAllAuthorizationRightSetsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.ListAllAuthorizationRightSetsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.ListAllAuthorizationRightSetsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAllAuthorizationRightSetsV1`: []HierarchicalRightSet
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.ListAllAuthorizationRightSetsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-user-level-identities-v1
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
List user level identities
List of identities associated with a user level.

[API Spec](https://developer.sailpoint.com/docs/api/list-user-level-identities-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListUserLevelIdentitiesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **count** | **bool** | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

### Return type

[**[]AuthUserSlimResponse**](../models/auth-user-slim-response)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `idn:access-request-administrator` // string | The unique identifier of the user level. # string | The unique identifier of the user level.
    count := true // bool | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. (optional) (default to false) # bool | If true, X-Total-Count header with the the total number of identities for this user level will be included in the response. (optional) (default to false)
    sorters := `displayName` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName** (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.ListUserLevelIdentitiesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.ListUserLevelIdentitiesV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Count(count).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.ListUserLevelIdentitiesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUserLevelIdentitiesV1`: []AuthUserSlimResponse
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.ListUserLevelIdentitiesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-user-levels-v1
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
List user levels
Retrieves a list of user levels for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-user-levels-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUserLevelsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **detailLevel** | **string** | Specifies the level of detail for the user levels. | [default to &quot;basic&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** | 
 **limit** | **int32** | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 50]
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    detailLevel := `FULL` // string | Specifies the level of detail for the user levels. (optional) (default to "basic") # string | Specifies the level of detail for the user levels. (optional) (default to "basic")
    filters := `name co "identity", owner co "john", status eq "active", description co "some description"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *co*    **owner**: *co*    **status**: *eq*  **description**: *co* (optional)
    sorters := `name, -created, description, status, owner` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, description, status, owner** (optional)
    limit := 50 // int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int32 | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.ListUserLevelsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.ListUserLevelsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).DetailLevel(detailLevel).Filters(filters).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.ListUserLevelsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUserLevelsV1`: []UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.ListUserLevelsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## publish-custom-user-level-v1
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
Publish a custom user level
Publishes a custom user level for the tenant, making it active and available.

[API Spec](https://developer.sailpoint.com/docs/api/publish-custom-user-level-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level to publish. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPublishCustomUserLevelV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level to publish. # string | The unique identifier of the user level to publish.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.PublishCustomUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.PublishCustomUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.PublishCustomUserLevelV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PublishCustomUserLevelV1`: UserLevelPublishSummary
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.PublishCustomUserLevelV1`: %v\n", resp)
}
```

[[Back to top]](#)

## show-user-level-counts-v1
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
Count user levels identities
List of user levels along with the number of identities associated to it.

[API Spec](https://developer.sailpoint.com/docs/api/show-user-level-counts-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiShowUserLevelCountsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestBody** | **[]string** | List of user level ids. Max 50 identifiers can be passed in a single request. | 

### Return type

[**[]AuthUserLevelsIdentityCount**](../models/auth-user-levels-identity-count)

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
    custom_user_levels "github.com/sailpoint-oss/golang-sdk/v3/custom_user_levels"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | List of user level ids. Max 50 identifiers can be passed in a single request.

    var requestBody []custom_user_levels.RequestBody
    if err := json.Unmarshal(requestbodyJson, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.ShowUserLevelCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.ShowUserLevelCountsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.ShowUserLevelCountsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ShowUserLevelCountsV1`: []AuthUserLevelsIdentityCount
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.ShowUserLevelCountsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-user-level-v1
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
Update a user level
Updates the details of a specific user level using JSON Patch.

[API Spec](https://developer.sailpoint.com/docs/api/update-user-level-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUserLevelV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

 **jsonPatch** | [**JsonPatch**](../models/json-patch) | JSON Patch payload for updating the user level.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case.  | 

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
    custom_user_levels "github.com/sailpoint-oss/golang-sdk/v3/custom_user_levels"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    id := `6e110911-5984-491b-be74-2707980a46a7` // string | The unique identifier of the user level. # string | The unique identifier of the user level.
    jsonpatchJson := []byte(`{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }`) // JsonPatch | JSON Patch payload for updating the user level.   - If only a parent right set id is included in the request body, all child right sets associated with that parent will be automatically assigned.   - If the request body includes both a parent right set and a subset of its children, only the explicitly listed right sets (parent and specified children) will be assigned. Implicit inheritance is not applied in this case. 

    var jsonPatch custom_user_levels.JsonPatch
    if err := json.Unmarshal(jsonpatchJson, &jsonPatch); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomUserLevelsAPI.UpdateUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
	  //resp, r, err := apiClient.CustomUserLevelsAPI.UpdateUserLevelV1(context.Background(), id).XSailPointExperimental(xSailPointExperimental).JsonPatch(jsonPatch).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CustomUserLevelsAPI.UpdateUserLevelV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateUserLevelV1`: UserLevelSummaryDTO
    fmt.Fprintf(os.Stdout, "Response from `CustomUserLevelsAPI.UpdateUserLevelV1`: %v\n", resp)
}
```

[[Back to top]](#)

