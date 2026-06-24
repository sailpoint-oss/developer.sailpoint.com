---
id: v2026-account-deletion-requests
title: AccountDeletionRequests
pagination_label: AccountDeletionRequests
sidebar_label: AccountDeletionRequests
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountDeletionRequests', 'V2026AccountDeletionRequests'] 
slug: /tools/sdk/go/v2026/methods/account-deletion-requests
tags: ['SDK', 'Software Development Kit', 'AccountDeletionRequests', 'V2026AccountDeletionRequests']
---

# AccountDeletionRequestsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-account-request**](#delete-account-request) | **Post** `/account-requests/account/{accountId}/delete` | Delete account
[**get-account-deletion-requests**](#get-account-deletion-requests) | **Get** `/account-requests/deletion` | List of Account Deletion Requests


## delete-account-request
Delete account
Initiates an account deletion request for the specified account.
This method validates the input data, processes the deletion request,
and generates an asynchronous result containing a tracking ID. 
>**NOTE: You can only delete accounts from sources of the "Connected" type. which supports account deletion**

[API Spec](https://developer.sailpoint.com/docs/api/v2026/delete-account-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accountId** | **string** | Account ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **accountDeleteRequestInput** | [**AccountDeleteRequestInput**](../models/account-delete-request-input) |  | 

### Return type

[**AccountRequestAsyncResult**](../models/account-request-async-result)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accountId := `ef38f94347e94562b5bb8424a56498d8` // string | Account ID. # string | Account ID.
    accountdeleterequestinput := []byte(`{
          "comments" : "Requesting account deletion request"
        }`) // AccountDeleteRequestInput |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.AccountDeletionRequestsAPI.DeleteAccountRequest(context.Background(), accountId).Execute()
	  //resp, r, err := apiClient.V2026.AccountDeletionRequestsAPI.DeleteAccountRequest(context.Background(), accountId).AccountDeleteRequestInput(accountDeleteRequestInput).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountDeletionRequestsAPI.DeleteAccountRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountRequest`: AccountRequestAsyncResult
    fmt.Fprintf(os.Stdout, "Response from `AccountDeletionRequestsAPI.DeleteAccountRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## get-account-deletion-requests
List of Account Deletion Requests
Retrieves a paginated list of account deletion requests filtered by the provided query parameters. When the "mine" parameter is set to true, the response includes only those deletion requests that were initiated by the currently authenticated user. If "mine" is false or not specified, the endpoint returns all account deletion requests associated with the current tenant, regardless of the initiator. This allows both users and administrators to view relevant deletion requests based on their access level and intent.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-account-deletion-requests)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountDeletionRequestsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **mine** | **bool** | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. | [default to false]

### Return type

[**[]AccountActionRequestDto**](../models/account-action-request-dto)

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
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    mine := true // bool | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional) (default to false) # bool | Determines whether to return only the account deletion requests initiated by the currently authenticated user. If set to true, the response includes only deletion requests created by the logged-in user. If set to false or not provided, the response includes all deletion requests for the tenant, regardless of the initiator. This parameter allows users to view their own requests, while administrators can view all requests within the tenant. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.AccountDeletionRequestsAPI.GetAccountDeletionRequests(context.Background()).Execute()
	  //resp, r, err := apiClient.V2026.AccountDeletionRequestsAPI.GetAccountDeletionRequests(context.Background()).Limit(limit).Offset(offset).Count(count).Mine(mine).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccountDeletionRequestsAPI.GetAccountDeletionRequests``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccountDeletionRequests`: []AccountActionRequestDto
    fmt.Fprintf(os.Stdout, "Response from `AccountDeletionRequestsAPI.GetAccountDeletionRequests`: %v\n", resp)
}
```

[[Back to top]](#)

