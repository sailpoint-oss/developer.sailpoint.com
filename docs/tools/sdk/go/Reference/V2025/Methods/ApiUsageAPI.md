---
id: v2025-api-usage
title: ApiUsage
pagination_label: ApiUsage
sidebar_label: ApiUsage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApiUsage', 'V2025ApiUsage'] 
slug: /tools/sdk/go/v2025/methods/api-usage
tags: ['SDK', 'Software Development Kit', 'ApiUsage', 'V2025ApiUsage']
---

# ApiUsageAPI
  Use this API to retrieve metrics about an org&#39;s API usage.
With this functionality in place, administrators can monitor the usage of APIs within a specified timespan, as well as a breakdown of commonly-used APIs sorted by number of requests.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-total-count**](#get-total-count) | **Get** `/api-usage/count` | Total number of API requests
[**list-api-summary**](#list-api-summary) | **Get** `/api-usage/summary` | Get Api Summary


## get-total-count
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
Total number of API requests
This API gets an aggregated number of all API calls from an org in a specific timespan. Unless specified, the results are aggregated between the first day of the current month and today.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-total-count)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTotalCountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* | 

### Return type

**map[string]interface{}**

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
    filters := `method eq "GET", startDate gt "2025-08-01"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApiUsageAPI.GetTotalCount(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.ApiUsageAPI.GetTotalCount(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApiUsageAPI.GetTotalCount``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTotalCount`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApiUsageAPI.GetTotalCount`: %v\n", resp)
}
```

[[Back to top]](#)

## list-api-summary
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
Get Api Summary
This API gets a list of APIs called by the org in a specific timespan, sorted by number of calls. Unless specified,  the results are aggregated between the first day of the current month and today.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-api-summary)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListApiSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* | 
 **limit** | **int32** | Max number of results to return. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | 

### Return type

[**[]SummaryResponse**](../models/summary-response)

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
    filters := `method eq "GET", startDate gt "2025-08-01"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **method**: *eq*  **startDate**: *gt, eq*  **endDate**: *lt, eq* (optional)
    limit := 100 // int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApiUsageAPI.ListApiSummary(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.ApiUsageAPI.ListApiSummary(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApiUsageAPI.ListApiSummary``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListApiSummary`: []SummaryResponse
    fmt.Fprintf(os.Stdout, "Response from `ApiUsageAPI.ListApiSummary`: %v\n", resp)
}
```

[[Back to top]](#)

