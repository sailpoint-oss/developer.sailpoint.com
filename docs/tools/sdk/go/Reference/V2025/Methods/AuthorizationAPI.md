---
id: v2025-authorization
title: Authorization
pagination_label: Authorization
sidebar_label: Authorization
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Authorization', 'V2025Authorization'] 
slug: /tools/sdk/go/v2025/methods/authorization
tags: ['SDK', 'Software Development Kit', 'Authorization', 'V2025Authorization']
---

# AuthorizationAPI
  Use this API to gather information related to the identities associated with a user level.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-user-level-counts**](#list-user-level-counts) | **Post** `/authorization/user-levels/get-identity-count` | Count user levels identities
[**list-user-level-identities**](#list-user-level-identities) | **Get** `/authorization/user-levels/{id}/identities` | List user level identities


## list-user-level-counts
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
Count user levels identities
List of user levels along with the number of identities associated to it.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-level-counts)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUserLevelCountsRequest struct via the builder pattern


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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestbody := []byte(``) // []string | List of user level ids. Max 50 identifiers can be passed in a single request.

    var requestBody []v2025.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AuthorizationAPI.ListUserLevelCounts(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V2025.AuthorizationAPI.ListUserLevelCounts(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthorizationAPI.ListUserLevelCounts``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUserLevelCounts`: []AuthUserLevelsIdentityCount
    fmt.Fprintf(os.Stdout, "Response from `AuthorizationAPI.ListUserLevelCounts`: %v\n", resp)
}
```

[[Back to top]](#)

## list-user-level-identities
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
List user level identities
List of identities associated with a user level.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-user-level-identities)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The unique identifier of the user level. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListUserLevelIdentitiesRequest struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
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
    resp, r, err := apiClient.V2025.AuthorizationAPI.ListUserLevelIdentities(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.AuthorizationAPI.ListUserLevelIdentities(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Count(count).Sorters(sorters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AuthorizationAPI.ListUserLevelIdentities``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUserLevelIdentities`: []AuthUserSlimResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthorizationAPI.ListUserLevelIdentities`: %v\n", resp)
}
```

[[Back to top]](#)

