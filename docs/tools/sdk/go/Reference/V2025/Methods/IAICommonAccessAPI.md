---
id: v2025-iai-common-access
title: IAICommonAccess
pagination_label: IAICommonAccess
sidebar_label: IAICommonAccess
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAICommonAccess', 'V2025IAICommonAccess'] 
slug: /tools/sdk/go/v2025/methods/iai-common-access
tags: ['SDK', 'Software Development Kit', 'IAICommonAccess', 'V2025IAICommonAccess']
---

# IAICommonAccessAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-common-access**](#create-common-access) | **Post** `/common-access` | Create common access items
[**get-common-access**](#get-common-access) | **Get** `/common-access` | Get a paginated list of common access
[**update-common-access-status-in-bulk**](#update-common-access-status-in-bulk) | **Post** `/common-access/update-status` | Bulk update common access status


## create-common-access
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
Create common access items
This API is used to add roles/access profiles to the list of common access for a customer. Requires authorization scope of iai:access-modeling:create

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-common-access)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCommonAccessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **commonAccessItemRequest** | [**CommonAccessItemRequest**](../models/common-access-item-request) |  | 

### Return type

[**CommonAccessItemResponse**](../models/common-access-item-response)

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
    commonaccessitemrequest := []byte(`{
          "access" : {
            "ownerName" : "ownerName",
            "name" : "name",
            "description" : "description",
            "id" : "id",
            "type" : "ACCESS_PROFILE",
            "ownerId" : "ownerId"
          },
          "status" : "CONFIRMED"
        }`) // CommonAccessItemRequest | 

    var commonAccessItemRequest v2025.CommonAccessItemRequest
    if err := json.Unmarshal(commonaccessitemrequest, &commonAccessItemRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAICommonAccessAPI.CreateCommonAccess(context.Background()).XSailPointExperimental(xSailPointExperimental).CommonAccessItemRequest(commonAccessItemRequest).Execute()
	  //resp, r, err := apiClient.V2025.IAICommonAccessAPI.CreateCommonAccess(context.Background()).XSailPointExperimental(xSailPointExperimental).CommonAccessItemRequest(commonAccessItemRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAICommonAccessAPI.CreateCommonAccess``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCommonAccess`: CommonAccessItemResponse
    fmt.Fprintf(os.Stdout, "Response from `IAICommonAccessAPI.CreateCommonAccess`: %v\n", resp)
}
```

[[Back to top]](#)

## get-common-access
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
Get a paginated list of common access
This endpoint returns the current common access for a customer. The returned items can be filtered and sorted. Requires authorization scope of iai:access-modeling:read

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-common-access)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCommonAccessRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. | 

### Return type

[**[]CommonAccessResponse**](../models/common-access-response)

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
    filters := `access.type eq "ROLE"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, sw*  **reviewedByUser** *eq*  **access.id**: *eq, sw*  **access.type**: *eq*  **access.name**: *sw, eq*  **access.description**: *sw, eq* (optional)
    sorters := `access.name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, status**  By default the common access items are sorted by name, ascending. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAICommonAccessAPI.GetCommonAccess(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.IAICommonAccessAPI.GetCommonAccess(context.Background()).XSailPointExperimental(xSailPointExperimental).Offset(offset).Limit(limit).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAICommonAccessAPI.GetCommonAccess``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCommonAccess`: []CommonAccessResponse
    fmt.Fprintf(os.Stdout, "Response from `IAICommonAccessAPI.GetCommonAccess`: %v\n", resp)
}
```

[[Back to top]](#)

## update-common-access-status-in-bulk
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
Bulk update common access status
This submits an update request to the common access application. At this time there are no parameters. Requires authorization scope of iai:access-modeling:update

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-common-access-status-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCommonAccessStatusInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **commonAccessIDStatus** | [**[]CommonAccessIDStatus**](../models/common-access-id-status) | Confirm or deny in bulk the common access ids that are (or aren&#39;t) common access | 

### Return type

**map[string]interface{}**

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
    commonaccessidstatus := []byte(``) // []CommonAccessIDStatus | Confirm or deny in bulk the common access ids that are (or aren't) common access

    var commonAccessIDStatus []v2025.CommonAccessIDStatus
    if err := json.Unmarshal(commonaccessidstatus, &commonAccessIDStatus); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.IAICommonAccessAPI.UpdateCommonAccessStatusInBulk(context.Background()).XSailPointExperimental(xSailPointExperimental).CommonAccessIDStatus(commonAccessIDStatus).Execute()
	  //resp, r, err := apiClient.V2025.IAICommonAccessAPI.UpdateCommonAccessStatusInBulk(context.Background()).XSailPointExperimental(xSailPointExperimental).CommonAccessIDStatus(commonAccessIDStatus).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAICommonAccessAPI.UpdateCommonAccessStatusInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateCommonAccessStatusInBulk`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `IAICommonAccessAPI.UpdateCommonAccessStatusInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

