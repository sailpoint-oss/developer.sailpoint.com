---
id: beta-iai-access-request-recommendations
title: IAIAccessRequestRecommendations
pagination_label: IAIAccessRequestRecommendations
sidebar_label: IAIAccessRequestRecommendations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIAccessRequestRecommendations', 'BetaIAIAccessRequestRecommendations'] 
slug: /tools/sdk/go/beta/methods/iai-access-request-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIAccessRequestRecommendations', 'BetaIAIAccessRequestRecommendations']
---

# IAIAccessRequestRecommendationsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add-access-request-recommendations-ignored-item**](#add-access-request-recommendations-ignored-item) | **Post** `/ai-access-request-recommendations/ignored-items` | Ignore Access Request Recommendation
[**add-access-request-recommendations-requested-item**](#add-access-request-recommendations-requested-item) | **Post** `/ai-access-request-recommendations/requested-items` | Accept Access Request Recommendation
[**add-access-request-recommendations-viewed-item**](#add-access-request-recommendations-viewed-item) | **Post** `/ai-access-request-recommendations/viewed-items` | Mark Viewed Access Request Recommendations
[**add-access-request-recommendations-viewed-items**](#add-access-request-recommendations-viewed-items) | **Post** `/ai-access-request-recommendations/viewed-items/bulk-create` | Bulk Mark Viewed Access Request Recommendations
[**get-access-request-recommendations**](#get-access-request-recommendations) | **Get** `/ai-access-request-recommendations` | Identity Access Request Recommendations
[**get-access-request-recommendations-ignored-items**](#get-access-request-recommendations-ignored-items) | **Get** `/ai-access-request-recommendations/ignored-items` | List Ignored Access Request Recommendations
[**get-access-request-recommendations-requested-items**](#get-access-request-recommendations-requested-items) | **Get** `/ai-access-request-recommendations/requested-items` | List Accepted Access Request Recommendations
[**get-access-request-recommendations-viewed-items**](#get-access-request-recommendations-viewed-items) | **Get** `/ai-access-request-recommendations/viewed-items` | List Viewed Access Request Recommendations


## add-access-request-recommendations-ignored-item
Ignore Access Request Recommendation
This API ignores a recommended access request item. Once an item is ignored, it will be marked as ignored=true if it is still a recommended item. The consumer can decide to hide ignored recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-ignored-item)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsIgnoredItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessRequestRecommendationActionItemDto := fmt.Sprintf(`{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }`) # AccessRequestRecommendationActionItemDto | The recommended access item to ignore for an identity.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItem(context.Background()).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddAccessRequestRecommendationsIgnoredItem`: AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsIgnoredItem`: %v\n", resp)
}
```

[[Back to top]](#)

## add-access-request-recommendations-requested-item
Accept Access Request Recommendation
This API consumes a notification that a recommended access request item was requested. This API does not actually make the request, it is just a notification. This will help provide feedback in order to improve our recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-requested-item)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsRequestedItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessRequestRecommendationActionItemDto := fmt.Sprintf(`{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }`) # AccessRequestRecommendationActionItemDto | The recommended access item that was requested for an identity.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItem(context.Background()).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddAccessRequestRecommendationsRequestedItem`: AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsRequestedItem`: %v\n", resp)
}
```

[[Back to top]](#)

## add-access-request-recommendations-viewed-item
Mark Viewed Access Request Recommendations
This API consumes a notification that a recommended access request item was viewed. Future recommendations with this item will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-viewed-item)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsViewedItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessRequestRecommendationActionItemDto := fmt.Sprintf(`{
          "access" : {
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          },
          "identityId" : "2c91808570313110017040b06f344ec9"
        }`) # AccessRequestRecommendationActionItemDto | The recommended access that was viewed for an identity.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItem(context.Background()).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItem``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddAccessRequestRecommendationsViewedItem`: AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItem`: %v\n", resp)
}
```

[[Back to top]](#)

## add-access-request-recommendations-viewed-items
Bulk Mark Viewed Access Request Recommendations
This API consumes a notification that a set of recommended access request item were viewed. Future recommendations with these items will be marked with viewed=true. This can be useful for the consumer to determine if there are any new/unviewed recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/add-access-request-recommendations-viewed-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddAccessRequestRecommendationsViewedItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessRequestRecommendationActionItemDto := fmt.Sprintf(``) # []AccessRequestRecommendationActionItemDto | The recommended access items that were viewed for an identity.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItems(context.Background()).AccessRequestRecommendationActionItemDto(accessRequestRecommendationActionItemDto).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `AddAccessRequestRecommendationsViewedItems`: []AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.AddAccessRequestRecommendationsViewedItems`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations
Identity Access Request Recommendations
This API returns the access request recommendations for the specified identity. The default identity is *me* which indicates the current user.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    identityId := 2c91808570313110017040b06f344ec9 # string | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to "me") # string | Get access request recommendations for an identityId. *me* indicates the current user. (optional) (default to "me")
    limit := 15 # int32 | Max number of results to return. (optional) (default to 15) # int32 | Max number of results to return. (optional) (default to 15)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    includeTranslationMessages := false # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to false) # bool | If *true* it will populate a list of translation messages in the response. (optional) (default to false)
    filters := access.name co "admin" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.name**: *co*  **access.type**: *eq, in*  **access.description**: *co, eq, in* (optional)
    sorters := access.name # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name, access.type**  By default the recommendations are sorted by highest confidence first. (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendations(context.Background()).IdentityId(identityId).Limit(limit).Offset(offset).Count(count).IncludeTranslationMessages(includeTranslationMessages).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendations``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessRequestRecommendations`: []AccessRequestRecommendationItemDetail
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendations`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-ignored-items
List Ignored Access Request Recommendations
This API returns the list of ignored access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations-ignored-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsIgnoredItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := identityId eq "2c9180846b0a0583016b299f210c1314" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters := access.id # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItems(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessRequestRecommendationsIgnoredItems`: []AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsIgnoredItems`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-requested-items
List Accepted Access Request Recommendations
This API returns a list of requested access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations-requested-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsRequestedItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := access.id eq "2c9180846b0a0583016b299f210c1314" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters := access.id # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItems(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessRequestRecommendationsRequestedItems`: []AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsRequestedItems`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-recommendations-viewed-items
List Viewed Access Request Recommendations
This API returns the list of viewed access request recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-recommendations-viewed-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestRecommendationsViewedItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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
  beta "github.com/sailpoint-oss/golang-sdk/v2/api_beta"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := access.id eq "2c9180846b0a0583016b299f210c1314" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **access.id**: *eq, in*  **access.type**: *eq, in*  **identityId**: *eq, in* (optional)
    sorters := access.id # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.id, access.type, identityId, timestamp** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.Beta.IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItems(context.Background()).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItems``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessRequestRecommendationsViewedItems`: []AccessRequestRecommendationActionItemResponseDto
	fmt.Fprintf(os.Stdout, "Response from `IAIAccessRequestRecommendationsAPI.GetAccessRequestRecommendationsViewedItems`: %v\n", resp)
}
```

[[Back to top]](#)

