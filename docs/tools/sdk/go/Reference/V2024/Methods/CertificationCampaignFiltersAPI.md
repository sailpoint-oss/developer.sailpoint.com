---
id: v2024-certification-campaign-filters
title: CertificationCampaignFilters
pagination_label: CertificationCampaignFilters
sidebar_label: CertificationCampaignFilters
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationCampaignFilters', 'V2024CertificationCampaignFilters'] 
slug: /tools/sdk/go/v2024/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'CertificationCampaignFilters', 'V2024CertificationCampaignFilters']
---

# \CertificationCampaignFiltersAPI
  Use this API to implement the certification campaign filter functionality. These filters can be used to create a certification campaign that includes a subset of your entitlements or users to certify.

For example, if for a certification campaign an organization wants to certify only specific users or entitlements, then those can be included/excluded on the basis of campaign filters.

For more information about creating a campaign filter, refer to [Creating a Campaign Filter](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#creating-a-campaign-filter)

You can create campaign filters using any of the following criteria types:

- Access Profile : This criteria type includes or excludes access profiles from a campaign.

- Account Attribute : This criteria type includes or excludes certification items that match a specified value in an account attribute.

- Entitlement : This criteria type includes or excludes entitlements from a campaign.

- Identity : This criteria type includes or excludes specific identities from your campaign.

- Identity Attribute : This criteria type includes or excludes identities based on whether they have an identity attribute that matches criteria you&#39;ve chosen.

- Role : This criteria type includes or excludes roles, as opposed to identities.

- Source : This criteria type includes or excludes entitlements from a source you select.

For more information about these criteria types, refer to [Types of Campaign Filters](https://documentation.sailpoint.com/saas/help/certs/campaign_filters.html#types-of-campaign-filters)

Once the campaign filter is created, it can be linked while creating the campaign. The generated campaign will have the items to review as per the campaign filter.

For example, An inclusion campaign filter is created with a source of Source 1, an operation of Equals, and an entitlement of Entitlement 1. When this filter is selected, only users who have Entitlement 1 are included in the campaign, and only Entitlement 1 is shown in the certification.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-campaign-filter**](#create-campaign-filter) | **Post** `/campaign-filters` | Create Campaign Filter
[**delete-campaign-filters**](#delete-campaign-filters) | **Post** `/campaign-filters/delete` | Deletes Campaign Filters
[**get-campaign-filter-by-id**](#get-campaign-filter-by-id) | **Get** `/campaign-filters/{id}` | Get Campaign Filter by ID
[**list-campaign-filters**](#list-campaign-filters) | **Get** `/campaign-filters` | List Campaign Filters
[**update-campaign-filter**](#update-campaign-filter) | **Post** `/campaign-filters/{id}` | Updates a Campaign Filter


## create-campaign-filter
Create Campaign Filter
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-campaign-filter)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignFilterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignFilterDetails** | [**CampaignFilterDetails**](../models/campaign-filter-details) |  | 

### Return type

[**CampaignFilterDetails**](../models/campaign-filter-details)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    campaignFilterDetails := fmt.Sprintf(`{
          "owner" : "SailPoint Support",
          "mode" : "INCLUSION",
          "isSystemFilter" : false,
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on an identity attribute's specified property.",
          "id" : "5ec18cef39020d6fd7a60ad3970aba61",
          "criteriaList" : [ {
            "type" : "IDENTITY_ATTRIBUTE",
            "property" : "displayName",
            "value" : "support",
            "operation" : "CONTAINS",
            "negateResult" : false,
            "shortCircuit" : false,
            "recordChildMatches" : false,
            "suppressMatchedItems" : false
          } ]
        }`) # CampaignFilterDetails | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.CertificationCampaignFiltersAPI.CreateCampaignFilter(context.Background()).CampaignFilterDetails(campaignFilterDetails).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.CreateCampaignFilter``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateCampaignFilter`: CampaignFilterDetails
	fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.CreateCampaignFilter`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-campaign-filters
Deletes Campaign Filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-campaign-filters)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignFiltersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestBody** | **[]string** | A json list of IDs of campaign filters to delete. | 

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestBody := fmt.Sprintf(``) # []string | A json list of IDs of campaign filters to delete.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient.CertificationCampaignFiltersAPI.DeleteCampaignFilters(context.Background()).RequestBody(requestBody).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.DeleteCampaignFilters``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-campaign-filter-by-id
Get Campaign Filter by ID
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-campaign-filter-by-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign filter to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignFilterByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CampaignFilterDetails**](../models/campaign-filter-details)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := e9f9a1397b842fd5a65842087040d3ac # string | The ID of the campaign filter to be retrieved. # string | The ID of the campaign filter to be retrieved.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.CertificationCampaignFiltersAPI.GetCampaignFilterById(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.GetCampaignFilterById``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetCampaignFilterById`: CampaignFilterDetails
	fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.GetCampaignFilterById`: %v\n", resp)
}
```

[[Back to top]](#)

## list-campaign-filters
List Campaign Filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-campaign-filters)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCampaignFiltersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **start** | **int32** | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **includeSystemFilters** | **bool** | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  | [default to true]

### Return type

[**ListCampaignFilters200Response**](../models/list-campaign-filters200-response)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    start := 0 # int32 | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    includeSystemFilters := true # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to true) # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to true)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.CertificationCampaignFiltersAPI.ListCampaignFilters(context.Background()).Limit(limit).Start(start).IncludeSystemFilters(includeSystemFilters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.ListCampaignFilters``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListCampaignFilters`: ListCampaignFilters200Response
	fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.ListCampaignFilters`: %v\n", resp)
}
```

[[Back to top]](#)

## update-campaign-filter
Updates a Campaign Filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-campaign-filter)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**filterId** | **string** | The ID of the campaign filter being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCampaignFilterRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **campaignFilterDetails** | [**CampaignFilterDetails**](../models/campaign-filter-details) | A campaign filter details with updated field values. | 

### Return type

[**CampaignFilterDetails**](../models/campaign-filter-details)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    filterId := e9f9a1397b842fd5a65842087040d3ac # string | The ID of the campaign filter being modified. # string | The ID of the campaign filter being modified.
    campaignFilterDetails := fmt.Sprintf(`{
          "owner" : "SailPoint Support",
          "mode" : "INCLUSION",
          "isSystemFilter" : false,
          "name" : "Identity Attribute Campaign Filter",
          "description" : "Campaign filter to certify data based on an identity attribute's specified property.",
          "id" : "5ec18cef39020d6fd7a60ad3970aba61",
          "criteriaList" : [ {
            "type" : "IDENTITY_ATTRIBUTE",
            "property" : "displayName",
            "value" : "support",
            "operation" : "CONTAINS",
            "negateResult" : false,
            "shortCircuit" : false,
            "recordChildMatches" : false,
            "suppressMatchedItems" : false
          } ]
        }`) # CampaignFilterDetails | A campaign filter details with updated field values.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.CertificationCampaignFiltersAPI.UpdateCampaignFilter(context.Background(), filterId).CampaignFilterDetails(campaignFilterDetails).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.UpdateCampaignFilter``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `UpdateCampaignFilter`: CampaignFilterDetails
	fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.UpdateCampaignFilter`: %v\n", resp)
}
```

[[Back to top]](#)

