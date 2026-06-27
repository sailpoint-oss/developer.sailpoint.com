---
id: v1-access-request-identity-metrics
title: AccessRequestIdentityMetrics
pagination_label: AccessRequestIdentityMetrics
sidebar_label: AccessRequestIdentityMetrics
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestIdentityMetrics', 'V1AccessRequestIdentityMetrics'] 
slug: /tools/sdk/go/accessrequestidentitymetrics/methods/access-request-identity-metrics
tags: ['SDK', 'Software Development Kit', 'AccessRequestIdentityMetrics', 'V1AccessRequestIdentityMetrics']
---

# AccessRequestIdentityMetricsAPI
  Use this API to implement access request identity metrics functionality.
With this functionality in place, access request reviewers can see relevant details about the requested access item and associated source activity. 
This allows reviewers to see how many of the identities who share a manager with the access requester have this same type of access and how many of them have had activity in the related source. 
This additional context about whether the access has been granted before and how often it has been used can help those approving access requests make more informed decisions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-access-request-identity-metrics-v1**](#get-access-request-identity-metrics-v1) | **Get** `/access-request-identity-metrics/v1/{identityId}/requested-objects/{requestedObjectId}/type/{type}` | Return access request identity metrics


## get-access-request-identity-metrics-v1
Return access request identity metrics
Use this API to return information access metrics.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-identity-metrics-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | Manager&#39;s identity ID. | 
**requestedObjectId** | **string** | Requested access item&#39;s ID. | 
**type_** | **string** | Requested access item&#39;s type. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestIdentityMetricsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_request_identity_metrics"
)

func main() {
    identityId := `7025c863-c270-4ba6-beea-edf3cb091573` // string | Manager's identity ID. # string | Manager's identity ID.
    requestedObjectId := `2db501be-f0fb-4cc5-a695-334133c52891` // string | Requested access item's ID. # string | Requested access item's ID.
    type_ := `ENTITLEMENT` // string | Requested access item's type. # string | Requested access item's type.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestIdentityMetricsAPI.GetAccessRequestIdentityMetricsV1(context.Background(), identityId, requestedObjectId, type_).Execute()
	  //resp, r, err := apiClient.AccessRequestIdentityMetricsAPI.GetAccessRequestIdentityMetricsV1(context.Background(), identityId, requestedObjectId, type_).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestIdentityMetricsAPI.GetAccessRequestIdentityMetricsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestIdentityMetricsV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestIdentityMetricsAPI.GetAccessRequestIdentityMetricsV1`: %v\n", resp)
}
```

[[Back to top]](#)

