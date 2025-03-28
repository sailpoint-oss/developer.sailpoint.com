---
id: beta-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvals', 'BetaApprovals'] 
slug: /tools/sdk/go/beta/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'BetaApprovals']
---

# \ApprovalsAPI
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/beta/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-approval**](#get-approval) | **Get** `/generic-approvals/{id}` | Get Approval
[**get-approvals**](#get-approvals) | **Get** `/generic-approvals` | Get Approvals


## get-approval
Get Approval
Get a single approval for a given approval ID. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and doesn't include access-request-approvals.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-approval)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the approval that to be returned. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Approval**](../models/approval)

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
    id := 38453251-6be2-5f8f-df93-5ce19e295837 # string | ID of the approval that to be returned. # string | ID of the approval that to be returned.

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ApprovalsAPI.GetApproval(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApproval``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetApproval`: Approval
	fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## get-approvals
Get Approvals
Get a list of approvals, which can be filtered by requester ID, status, or reference type. You can use the "Mine" query parameter to return all approvals for the current approver. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. 
Absence of all query parameters will will default to mine=true.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-approvals)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mine** | **bool** | Returns the list of approvals for the current caller. | 
 **requesterId** | **string** | Returns the list of approvals for a given requester ID. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* | 

### Return type

[**[]Approval**](../models/approval)

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
    mine := true # bool | Returns the list of approvals for the current caller. (optional) # bool | Returns the list of approvals for the current caller. (optional)
    requesterId := 17e633e7d57e481569df76323169deb6a # string | Returns the list of approvals for a given requester ID. (optional) # string | Returns the list of approvals for a given requester ID. (optional)
    filters := filters=status eq PENDING # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.ApprovalsAPI.GetApprovals(context.Background()).Mine(mine).RequesterId(requesterId).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovals``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetApprovals`: []Approval
	fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovals`: %v\n", resp)
}
```

[[Back to top]](#)

