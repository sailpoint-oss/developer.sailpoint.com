---
id: v2024-account-aggregations
title: AccountAggregations
pagination_label: AccountAggregations
sidebar_label: AccountAggregations
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAggregations', 'V2024AccountAggregations'] 
slug: /tools/sdk/go/v2024/methods/account-aggregations
tags: ['SDK', 'Software Development Kit', 'AccountAggregations', 'V2024AccountAggregations']
---

# AccountAggregationsAPI
  Use this API to implement account aggregation progress tracking functionality.
With this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details.

An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud.

Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.
To view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.
In Account Aggregation, administrators can view the account aggregations&#39; statuses and details in the Account Activity Log.

Refer to [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) for more information about account aggregations.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-aggregation-status**](#get-account-aggregation-status) | **Get** `/account-aggregations/{id}/status` | In-progress account aggregation status


## get-account-aggregation-status
In-progress account aggregation status
This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.

Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.

Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.

*Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.*
required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-account-aggregation-status)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The account aggregation id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountAggregationStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AccountAggregationStatus**](../models/account-aggregation-status)

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
    id := `2c91808477a6b0c60177a81146b8110b` // string | The account aggregation id # string | The account aggregation id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2024.AccountAggregationsAPI.GetAccountAggregationStatus(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2024.AccountAggregationsAPI.GetAccountAggregationStatus(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountAggregationsAPI.GetAccountAggregationStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccountAggregationStatus`: AccountAggregationStatus
    fmt.Fprintf(os.Stdout, "Response from `AccountAggregationsAPI.GetAccountAggregationStatus`: %v\n", resp)
}
```

[[Back to top]](#)

