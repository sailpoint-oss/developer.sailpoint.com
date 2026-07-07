---
id: v1-certification-campaign-filters
title: CertificationCampaignFilters
pagination_label: CertificationCampaignFilters
sidebar_label: CertificationCampaignFilters
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationCampaignFilters', 'V1CertificationCampaignFilters'] 
slug: /tools/sdk/go/certificationcampaignfilters/methods/certification-campaign-filters
tags: ['SDK', 'Software Development Kit', 'CertificationCampaignFilters', 'V1CertificationCampaignFilters']
---

# CertificationCampaignFiltersAPI
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-campaign-filter-v1**](#create-campaign-filter-v1) | **Post** `/campaign-filters/v1` | Create campaign filter
[**delete-campaign-filters-v1**](#delete-campaign-filters-v1) | **Post** `/campaign-filters/v1/delete` | Deletes campaign filters
[**get-campaign-filter-by-id-v1**](#get-campaign-filter-by-id-v1) | **Get** `/campaign-filters/v1/{id}` | Get campaign filter by id
[**list-campaign-filters-v1**](#list-campaign-filters-v1) | **Get** `/campaign-filters/v1` | List campaign filters
[**update-campaign-filter-v1**](#update-campaign-filter-v1) | **Post** `/campaign-filters/v1/{id}` | Updates a campaign filter


## create-campaign-filter-v1
Create campaign filter
Use this API to create a campaign filter based on filter details and criteria.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-campaign-filter-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateCampaignFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **campaignfilterdetails** | [**Campaignfilterdetails**](../models/campaignfilterdetails) |  | 

### Return type

[**Campaignfilterdetails**](../models/campaignfilterdetails)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
)

func main() {
    campaignfilterdetails := []byte(``) // Campaignfilterdetails | 

    var campaignfilterdetails v1.Campaignfilterdetails
    if err := json.Unmarshal(campaignfilterdetails, &campaignfilterdetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignFiltersAPI.CreateCampaignFilterV1(context.Background()).Campaignfilterdetails(campaignfilterdetails).Execute()
	  //resp, r, err := apiClient.CertificationCampaignFiltersAPI.CreateCampaignFilterV1(context.Background()).Campaignfilterdetails(campaignfilterdetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.CreateCampaignFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateCampaignFilterV1`: Campaignfilterdetails
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.CreateCampaignFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-campaign-filters-v1
Deletes campaign filters
Deletes campaign filters whose Ids are specified in the provided list of campaign filter Ids. Authorized callers must be an ORG_ADMIN or a CERT_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-campaign-filters-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCampaignFiltersV1Request struct via the builder pattern


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
  "encoding/json"
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
)

func main() {
    requestbody := []byte(``) // []string | A json list of IDs of campaign filters to delete.

    var requestBody []v1.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.CertificationCampaignFiltersAPI.DeleteCampaignFiltersV1(context.Background()).RequestBody(requestBody).Execute()
	  //r, err := apiClient.CertificationCampaignFiltersAPI.DeleteCampaignFiltersV1(context.Background()).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.DeleteCampaignFiltersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-campaign-filter-by-id-v1
Get campaign filter by id
Retrieves information for an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-campaign-filter-by-id-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign filter to be retrieved. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCampaignFilterByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Campaignfilterdetails**](../models/campaignfilterdetails)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
)

func main() {
    id := `e9f9a1397b842fd5a65842087040d3ac` // string | The ID of the campaign filter to be retrieved. # string | The ID of the campaign filter to be retrieved.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignFiltersAPI.GetCampaignFilterByIdV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.CertificationCampaignFiltersAPI.GetCampaignFilterByIdV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.GetCampaignFilterByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCampaignFilterByIdV1`: Campaignfilterdetails
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.GetCampaignFilterByIdV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-campaign-filters-v1
List campaign filters
Use this API to list all campaign filters. You can reduce scope with standard V3 query parameters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-campaign-filters-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCampaignFiltersV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **start** | **int32** | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **includeSystemFilters** | **bool** | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  | [default to true]

### Return type

[**ListCampaignFiltersV1200Response**](../models/list-campaign-filters-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    start := 0 // int32 | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Start/Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    includeSystemFilters := true // bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to true) # bool | If this is true, the API includes system filters in the count and results. Otherwise it excludes them. If no value is provided, the default is true.  (optional) (default to true)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignFiltersAPI.ListCampaignFiltersV1(context.Background()).Execute()
	  //resp, r, err := apiClient.CertificationCampaignFiltersAPI.ListCampaignFiltersV1(context.Background()).Limit(limit).Start(start).IncludeSystemFilters(includeSystemFilters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.ListCampaignFiltersV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCampaignFiltersV1`: ListCampaignFiltersV1200Response
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.ListCampaignFiltersV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-campaign-filter-v1
Updates a campaign filter
Updates an existing campaign filter using the filter's ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-campaign-filter-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the campaign filter being modified. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateCampaignFilterV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **campaignfilterdetails** | [**Campaignfilterdetails**](../models/campaignfilterdetails) | A campaign filter details with updated field values. | 

### Return type

[**Campaignfilterdetails**](../models/campaignfilterdetails)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/certification_campaign_filters"
)

func main() {
    id := `e9f9a1397b842fd5a65842087040d3ac` // string | The ID of the campaign filter being modified. # string | The ID of the campaign filter being modified.
    campaignfilterdetails := []byte(``) // Campaignfilterdetails | A campaign filter details with updated field values.

    var campaignfilterdetails v1.Campaignfilterdetails
    if err := json.Unmarshal(campaignfilterdetails, &campaignfilterdetails); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.CertificationCampaignFiltersAPI.UpdateCampaignFilterV1(context.Background(), id).Campaignfilterdetails(campaignfilterdetails).Execute()
	  //resp, r, err := apiClient.CertificationCampaignFiltersAPI.UpdateCampaignFilterV1(context.Background(), id).Campaignfilterdetails(campaignfilterdetails).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `CertificationCampaignFiltersAPI.UpdateCampaignFilterV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateCampaignFilterV1`: Campaignfilterdetails
    fmt.Fprintf(os.Stdout, "Response from `CertificationCampaignFiltersAPI.UpdateCampaignFilterV1`: %v\n", resp)
}
```

[[Back to top]](#)

