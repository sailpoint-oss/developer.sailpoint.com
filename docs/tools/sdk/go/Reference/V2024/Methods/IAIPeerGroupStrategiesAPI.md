---
id: v2024-iai-peer-group-strategies
title: IAIPeerGroupStrategies
pagination_label: IAIPeerGroupStrategies
sidebar_label: IAIPeerGroupStrategies
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIPeerGroupStrategies', 'V2024IAIPeerGroupStrategies'] 
slug: /tools/sdk/go/v2024/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAIPeerGroupStrategies', 'V2024IAIPeerGroupStrategies']
---

# IAIPeerGroupStrategiesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-peer-group-outliers**](#get-peer-group-outliers) | **Get** `/peer-group-strategies/{strategy}/identity-outliers` | Identity Outliers List


## get-peer-group-outliers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
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
Identity Outliers List
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-peer-group-outliers)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**strategy** | **string** | The strategy used to create peer groups. Currently, &#39;entitlement&#39; is supported. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPeerGroupOutliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]PeerGroupMember**](../models/peer-group-member)

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
  v2024 "github.com/sailpoint-oss/golang-sdk/v2/api_v2024"
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    strategy := entitlement # string | The strategy used to create peer groups. Currently, 'entitlement' is supported. # string | The strategy used to create peer groups. Currently, 'entitlement' is supported.
    xSailPointExperimental := true # string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.V2024.IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers(context.Background(), strategy).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetPeerGroupOutliers`: []PeerGroupMember
	fmt.Fprintf(os.Stdout, "Response from `IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers`: %v\n", resp)
}
```

[[Back to top]](#)

