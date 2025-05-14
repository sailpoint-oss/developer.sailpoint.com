---
id: beta-iai-peer-group-strategies
title: IAIPeerGroupStrategies
pagination_label: IAIPeerGroupStrategies
sidebar_label: IAIPeerGroupStrategies
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IAIPeerGroupStrategies', 'BetaIAIPeerGroupStrategies'] 
slug: /tools/sdk/go/beta/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAIPeerGroupStrategies', 'BetaIAIPeerGroupStrategies']
---

# IAIPeerGroupStrategiesAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-peer-group-outliers**](#get-peer-group-outliers) | **Get** `/peer-group-strategies/{strategy}/identity-outliers` | Identity Outliers List


## get-peer-group-outliers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Identity Outliers List
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-peer-group-outliers)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**strategy** | **string** | The strategy used to create peer groups. Currently, &#39;entitlement&#39; is supported. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPeerGroupOutliersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    strategy := `entitlement` // string | The strategy used to create peer groups. Currently, 'entitlement' is supported. # string | The strategy used to create peer groups. Currently, 'entitlement' is supported.
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.Beta.IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers(context.Background(), strategy).Execute()
	  //resp, r, err := apiClient.Beta.IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers(context.Background(), strategy).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPeerGroupOutliers`: []PeerGroupMember
    fmt.Fprintf(os.Stdout, "Response from `IAIPeerGroupStrategiesAPI.GetPeerGroupOutliers`: %v\n", resp)
}
```

[[Back to top]](#)

