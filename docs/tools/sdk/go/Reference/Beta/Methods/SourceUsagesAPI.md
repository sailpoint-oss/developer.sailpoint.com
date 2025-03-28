---
id: beta-source-usages
title: SourceUsages
pagination_label: SourceUsages
sidebar_label: SourceUsages
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceUsages', 'BetaSourceUsages'] 
slug: /tools/sdk/go/beta/methods/source-usages
tags: ['SDK', 'Software Development Kit', 'SourceUsages', 'BetaSourceUsages']
---

# \SourceUsagesAPI
  Use this API to implement source usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; sources are being used.
This allows organizations to get the information they need to start optimizing and securing source usage.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-status-by-source-id**](#get-status-by-source-id) | **Get** `/source-usages/{sourceId}/status` | Finds status of source usage
[**get-usages-by-source-id**](#get-usages-by-source-id) | **Get** `/source-usages/{sourceId}/summaries` | Returns source usage insights


## get-status-by-source-id
Finds status of source usage
This API returns the status of the source usage insights setup by IDN source ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-status-by-source-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of IDN source | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStatusBySourceIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**SourceUsageStatus**](../models/source-usage-status)

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
    sourceId := 2c9180835d191a86015d28455b4a2329 # string | ID of IDN source # string | ID of IDN source

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.SourceUsagesAPI.GetStatusBySourceId(context.Background(), sourceId).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourceUsagesAPI.GetStatusBySourceId``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetStatusBySourceId`: SourceUsageStatus
	fmt.Fprintf(os.Stdout, "Response from `SourceUsagesAPI.GetStatusBySourceId`: %v\n", resp)
}
```

[[Back to top]](#)

## get-usages-by-source-id
Returns source usage insights
This API returns a summary of source usage insights for past 12 months.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-usages-by-source-id)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**sourceId** | **string** | ID of IDN source | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUsagesBySourceIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** | 

### Return type

[**[]SourceUsage**](../models/source-usage)

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
    sourceId := 2c9180835d191a86015d28455b4a2329 # string | ID of IDN source # string | ID of IDN source
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    sorters := -date # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.SourceUsagesAPI.GetUsagesBySourceId(context.Background(), sourceId).Limit(limit).Offset(offset).Count(count).Sorters(sorters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SourceUsagesAPI.GetUsagesBySourceId``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetUsagesBySourceId`: []SourceUsage
	fmt.Fprintf(os.Stdout, "Response from `SourceUsagesAPI.GetUsagesBySourceId`: %v\n", resp)
}
```

[[Back to top]](#)

