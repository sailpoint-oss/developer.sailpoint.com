# IAIAccessRequestRecommendations

# IAIAccessRequestRecommendationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add-access-request-recommendations-ignored-item-v1**](#add-access-request-recommendations-ignored-item-v1) | **Post** `/ai-access-request-recommendations/v1/ignored-items` | Ignore access request recommendation
[**add-access-request-recommendations-requested-item-v1**](#add-access-request-recommendations-requested-item-v1) | **Post** `/ai-access-request-recommendations/v1/requested-items` | Accept access request recommendation
[**add-access-request-recommendations-viewed-item-v1**](#add-access-request-recommendations-viewed-item-v1) | **Post** `/ai-access-request-recommendations/v1/viewed-items` | Mark viewed access request recommendations
[**add-access-request-recommendations-viewed-items-v1**](#add-access-request-recommendations-viewed-items-v1) | **Post** `/ai-access-request-recommendations/v1/viewed-items/bulk-create` | Bulk mark viewed access request recommendations
[**get-access-request-recommendations-config-v1**](#get-access-request-recommendations-config-v1) | **Get** `/ai-access-request-recommendations/v1/config` | Get access request recommendations config
[**get-access-request-recommendations-ignored-items-v1**](#get-access-request-recommendations-ignored-items-v1) | **Get** `/ai-access-request-recommendations/v1/ignored-items` | List ignored access request recommendations
[**get-access-request-recommendations-requested-items-v1**](#get-access-request-recommendations-requested-items-v1) | **Get** `/ai-access-request-recommendations/v1/requested-items` | List accepted access request recommendations
[**get-access-request-recommendations-v1**](#get-access-request-recommendations-v1) | **Get** `/ai-access-request-recommendations/v1` | Identity access request recommendations
[**get-access-request-recommendations-viewed-items-v1**](#get-access-request-recommendations-viewed-items-v1) | **Get** `/ai-access-request-recommendations/v1/viewed-items` | List viewed access request recommendations
[**set-access-request-recommendations-config-v1**](#set-access-request-recommendations-config-v1) | **Put** `/ai-access-request-recommendations/v1/config` | Update access request recommendations config


## add-access-request-recommendations-ignored-item-v1
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
Ignore access request recommendation
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-ignored-item-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsIgnoredItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessRequestRecommendationActionItemDto** | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | The recommended access item to ignore for an identity. | 

### Return type

[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    iai_access_request_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_access_request_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessrequestrecommendationactionitemdtoJson := []byte(`{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }`) // AccessRequestRecommendationActionItemDto | The recommended access item to ignore for an identity.

    var accessRequestRecommendationActionItemDto iai_access_request_recommendations.AccessRequestRecommendationActionItemDto
    if err := json.Unmarshal(accessrequestrecommendationactionitemdtoJson, &accessRequestRecommendationActionItemDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItemV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItemV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddAccessRequestRecommendationsIgnoredItemV1`: AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## add-access-request-recommendations-requested-item-v1
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
Accept access request recommendation
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-requested-item-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsRequestedItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessRequestRecommendationActionItemDto** | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | The recommended access item that was requested for an identity. | 

### Return type

[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    iai_access_request_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_access_request_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessrequestrecommendationactionitemdtoJson := []byte(`{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }`) // AccessRequestRecommendationActionItemDto | The recommended access item that was requested for an identity.

    var accessRequestRecommendationActionItemDto iai_access_request_recommendations.AccessRequestRecommendationActionItemDto
    if err := json.Unmarshal(accessrequestrecommendationactionitemdtoJson, &accessRequestRecommendationActionItemDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItemV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItemV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddAccessRequestRecommendationsRequestedItemV1`: AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## add-access-request-recommendations-viewed-item-v1
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
Mark viewed access request recommendations
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-item-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsViewedItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessRequestRecommendationActionItemDto** | [**AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | The recommended access that was viewed for an identity. | 

### Return type

[**AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    iai_access_request_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_access_request_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessrequestrecommendationactionitemdtoJson := []byte(`{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }`) // AccessRequestRecommendationActionItemDto | The recommended access that was viewed for an identity.

    var accessRequestRecommendationActionItemDto iai_access_request_recommendations.AccessRequestRecommendationActionItemDto
    if err := json.Unmarshal(accessrequestrecommendationactionitemdtoJson, &accessRequestRecommendationActionItemDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddAccessRequestRecommendationsViewedItemV1`: AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## add-access-request-recommendations-viewed-items-v1
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
Bulk mark viewed access request recommendations
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/add-access-request-recommendations-viewed-items-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsViewedItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessRequestRecommendationActionItemDto** | [**[]AccessRequestRecommendationActionItemDto**](../models/access-request-recommendation-action-item-dto) | The recommended access items that were viewed for an identity. | 

### Return type

[**[]AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    iai_access_request_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_access_request_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessrequestrecommendationactionitemdtoJson := []byte(``) // []AccessRequestRecommendationActionItemDto | The recommended access items that were viewed for an identity.

    var accessRequestRecommendationActionItemDto []iai_access_request_recommendations.AccessRequestRecommendationActionItemDto
    if err := json.Unmarshal(accessrequestrecommendationactionitemdtoJson, &accessRequestRecommendationActionItemDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddAccessRequestRecommendationsViewedItemsV1`: []AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-config-v1
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
Get access request recommendations config
This API returns the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

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

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestRecommendationsConfigV1`: AccessRequestRecommendationConfigDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-ignored-items-v1
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
List ignored access request recommendations
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-ignored-items-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsIgnoredItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | 

### Return type

[**[]AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `identityId eq "2c9180846b0a0583016b299f210c1314"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters := `access.id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestRecommendationsIgnoredItemsV1`: []AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-requested-items-v1
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
List accepted access request recommendations
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-requested-items-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsRequestedItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | 

### Return type

[**[]AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `access.id eq "2c9180846b0a0583016b299f210c1314"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters := `access.id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestRecommendationsRequestedItemsV1`: []AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-v1
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
Identity access request recommendations
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **identityId** | **string** | Get access request recommendations for an identityId. *me* indicates the current user. | [default to &quot;me&quot;]
 **limit** | **int32** | Max number of results to return. | [default to 15]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **includeTranslationMessages** | **bool** | If *true* it will populate a list of translation messages in the response. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. | 

### Return type

[**[]AccessRequestRecommendationItemDetail**](../models/access-request-recommendation-item-detail)

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
    identityId := `2c91808570313110017040b06f344ec9` // string | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to "me") # string | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to "me")
    limit := 15 // int32 | Max number of results to return. (optional) (default to 15) # int32 | Max number of results to return. (optional) (default to 15)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    includeTranslationMessages := false // bool | If *true* it will populate a list of translation messages in the response. (optional) (default to false) # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to false)
    filters := `access.name co "admin"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
    sorters := `access.name` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).IdentityId(identityId).Limit(limit).Offset(offset).Count(count).IncludeTranslationMessages(includeTranslationMessages).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestRecommendationsV1`: []AccessRequestRecommendationItemDetail
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-viewed-items-v1
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
List viewed access request recommendations
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-recommendations-viewed-items-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsViewedItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** | 

### Return type

[**[]AccessRequestRecommendationActionItemResponseDto**](../models/access-request-recommendation-action-item-response-dto)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `access.id eq "2c9180846b0a0583016b299f210c1314"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters := `access.id` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItemsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestRecommendationsViewedItemsV1`: []AccessRequestRecommendationActionItemResponseDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-access-request-recommendations-config-v1
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
Update access request recommendations config
This API updates the configurations for Access Request Recommender for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/set-access-request-recommendations-config-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetAccessRequestRecommendationsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accessRequestRecommendationConfigDto** | [**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto) | The desired configurations for Access Request Recommender for the tenant. | 

### Return type

[**AccessRequestRecommendationConfigDto**](../models/access-request-recommendation-config-dto)

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
    iai_access_request_recommendations "github.com/sailpoint-oss/golang-sdk/v3/iai_access_request_recommendations"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accessrequestrecommendationconfigdtoJson := []byte(`{
          "scoreThreshold" : 0.5,
          "startDateAttribute" : "startDate",
          "restrictionAttribute" : "location",
          "moverAttribute" : "isMover",
          "joinerAttribute" : "isJoiner",
          "useRestrictionAttribute" : true
        }`) // AccessRequestRecommendationConfigDto | The desired configurations for Access Request Recommender for the tenant.

    var accessRequestRecommendationConfigDto iai_access_request_recommendations.AccessRequestRecommendationConfigDto
    if err := json.Unmarshal(accessrequestrecommendationconfigdtoJson, &accessRequestRecommendationConfigDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.SetAccessRequestRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationConfigDto(accessRequestRecommendationConfigDto).Execute()
	  //resp, r, err := apiClient.IAIAccessRequestRecommendationsAPI.SetAccessRequestRecommendationsConfigV1(context.Background()).XSailPointExperimental(xSailPointExperimental).AccessRequestRecommendationConfigDto(accessRequestRecommendationConfigDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.SetAccessRequestRecommendationsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetAccessRequestRecommendationsConfigV1`: AccessRequestRecommendationConfigDto
    fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.SetAccessRequestRecommendationsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

