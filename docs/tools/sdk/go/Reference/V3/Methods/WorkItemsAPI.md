---
id: work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkItems', 'WorkItems'] 
slug: /tools/sdk/go/v3/methods/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'WorkItems']
---

# WorkItemsAPI
  Use this API to implement work item functionality. 
With this functionality in place, users can manage their work items (tasks). 

Work items refer to the tasks users see in Identity Security Cloud&#39;s Task Manager. 
They can see the pending work items they need to complete, as well as the work items they have already completed. 
Task Manager lists the work items along with the involved sources, identities, accounts, and the timestamp when the work item was created. 
For example, a user may see a pending &#39;Create an Account&#39; work item for the identity Fred.Astaire in GitHub for Fred&#39;s GitHub account, fred-astaire-sp. 
Once the user completes the work item, the work item will be listed with his or her other completed work items. 

To complete work items, users can use their dashboards and select the &#39;My Tasks&#39; widget. 
The widget will list any work items they need to complete, and they can select the work item from the list to review its details. 
When they complete the work item, they can select &#39;Mark Complete&#39; to add it to their list of completed work items. 

Refer to [Task Manager](https://documentation.sailpoint.com/saas/user-help/task_manager.html) for more information about work items, including the different types of work items users may need to complete.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-item**](#approve-approval-item) | **Post** `/work-items/{id}/approve/{approvalItemId}` | Approve an approval item
[**approve-approval-items-in-bulk**](#approve-approval-items-in-bulk) | **Post** `/work-items/bulk-approve/{id}` | Bulk approve approval items
[**complete-work-item**](#complete-work-item) | **Post** `/work-items/{id}` | Complete a work item
[**get-completed-work-items**](#get-completed-work-items) | **Get** `/work-items/completed` | Completed work items
[**get-count-completed-work-items**](#get-count-completed-work-items) | **Get** `/work-items/completed/count` | Count completed work items
[**get-count-work-items**](#get-count-work-items) | **Get** `/work-items/count` | Count work items
[**get-work-item**](#get-work-item) | **Get** `/work-items/{id}` | Get a work item
[**get-work-items-summary**](#get-work-items-summary) | **Get** `/work-items/summary` | Work items summary
[**list-work-items**](#list-work-items) | **Get** `/work-items` | List work items
[**reject-approval-item**](#reject-approval-item) | **Post** `/work-items/{id}/reject/{approvalItemId}` | Reject an approval item
[**reject-approval-items-in-bulk**](#reject-approval-items-in-bulk) | **Post** `/work-items/bulk-reject/{id}` | Bulk reject approval items
[**send-work-item-forward**](#send-work-item-forward) | **Post** `/work-items/{id}/forward` | Forward a work item
[**submit-account-selection**](#submit-account-selection) | **Post** `/work-items/{id}/submit-account-selection` | Submit account selections


## approve-approval-item
Approve an approval item
This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/approve-approval-item)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 
**approvalItemId** | **string** | The ID of the approval item. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**WorkItems**](../models/work-items)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    approvalItemId := `1211bcaa32112bcef6122adb21cef1ac` // string | The ID of the approval item. # string | The ID of the approval item.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.ApproveApprovalItem(context.Background(), id, approvalItemId).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.ApproveApprovalItem(context.Background(), id, approvalItemId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ApproveApprovalItem``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalItem`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.ApproveApprovalItem`: %v\n", resp)
}
```

[[Back to top]](#)

## approve-approval-items-in-bulk
Bulk approve approval items
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/approve-approval-items-in-bulk)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalItemsInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**WorkItems**](../models/work-items)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.ApproveApprovalItemsInBulk(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.ApproveApprovalItemsInBulk(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ApproveApprovalItemsInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalItemsInBulk`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.ApproveApprovalItemsInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## complete-work-item
Complete a work item
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/complete-work-item)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteWorkItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | Body is the request payload to create form definition request | 

### Return type

[**WorkItems**](../models/work-items)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    body := `body_example` // string | Body is the request payload to create form definition request (optional) # string | Body is the request payload to create form definition request (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.CompleteWorkItem(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.CompleteWorkItem(context.Background(), id).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.CompleteWorkItem``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteWorkItem`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.CompleteWorkItem`: %v\n", resp)
}
```

[[Back to top]](#)

## get-completed-work-items
Completed work items
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-completed-work-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCompletedWorkItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]WorkItems**](../models/work-items)

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
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional) # string | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.GetCompletedWorkItems(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.GetCompletedWorkItems(context.Background()).OwnerId(ownerId).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetCompletedWorkItems``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompletedWorkItems`: []WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetCompletedWorkItems`: %v\n", resp)
}
```

[[Back to top]](#)

## get-count-completed-work-items
Count completed work items
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-count-completed-work-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCountCompletedWorkItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**WorkItemsCount**](../models/work-items-count)

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
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.GetCountCompletedWorkItems(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.GetCountCompletedWorkItems(context.Background()).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetCountCompletedWorkItems``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCountCompletedWorkItems`: WorkItemsCount
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetCountCompletedWorkItems`: %v\n", resp)
}
```

[[Back to top]](#)

## get-count-work-items
Count work items
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-count-work-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCountWorkItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**WorkItemsCount**](../models/work-items-count)

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
    ownerId := `ef38f94347e94562b5bb8424a56397d8` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.GetCountWorkItems(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.GetCountWorkItems(context.Background()).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetCountWorkItems``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCountWorkItems`: WorkItemsCount
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetCountWorkItems`: %v\n", resp)
}
```

[[Back to top]](#)

## get-work-item
Get a work item
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-work-item)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the work item. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**WorkItems**](../models/work-items)

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
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the work item. # string | ID of the work item.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.GetWorkItem(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.GetWorkItem(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetWorkItem``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkItem`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetWorkItem`: %v\n", resp)
}
```

[[Back to top]](#)

## get-work-items-summary
Work items summary
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-work-items-summary)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkItemsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**WorkItemsSummary**](../models/work-items-summary)

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
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.GetWorkItemsSummary(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.GetWorkItemsSummary(context.Background()).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetWorkItemsSummary``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkItemsSummary`: WorkItemsSummary
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetWorkItemsSummary`: %v\n", resp)
}
```

[[Back to top]](#)

## list-work-items
List work items
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-work-items)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**[]WorkItems**](../models/work-items)

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
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.ListWorkItems(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.ListWorkItems(context.Background()).Limit(limit).Offset(offset).Count(count).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ListWorkItems``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkItems`: []WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.ListWorkItems`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval-item
Reject an approval item
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/reject-approval-item)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 
**approvalItemId** | **string** | The ID of the approval item. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalItemRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**WorkItems**](../models/work-items)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    approvalItemId := `1211bcaa32112bcef6122adb21cef1ac` // string | The ID of the approval item. # string | The ID of the approval item.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.RejectApprovalItem(context.Background(), id, approvalItemId).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.RejectApprovalItem(context.Background(), id, approvalItemId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.RejectApprovalItem``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectApprovalItem`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.RejectApprovalItem`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval-items-in-bulk
Bulk reject approval items
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/reject-approval-items-in-bulk)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalItemsInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**WorkItems**](../models/work-items)

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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.RejectApprovalItemsInBulk(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.RejectApprovalItemsInBulk(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.RejectApprovalItemsInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectApprovalItemsInBulk`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.RejectApprovalItemsInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## send-work-item-forward
Forward a work item
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request. Accessible to work-item Owner, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, SOURCE_SUBADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v3/send-work-item-forward)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiSendWorkItemForwardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **workItemForward** | [**WorkItemForward**](../models/work-item-forward) |  | 

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    workitemforward := []byte(`{
          "targetOwnerId" : "2c9180835d2e5168015d32f890ca1581",
          "comment" : "I'm going on vacation.",
          "sendNotifications" : true
        }`) // WorkItemForward | 

    var workItemForward v3.WorkItemForward
    if err := json.Unmarshal(workitemforward, &workItemForward); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V3.WorkItemsAPI.SendWorkItemForward(context.Background(), id).WorkItemForward(workItemForward).Execute()
	  //r, err := apiClient.V3.WorkItemsAPI.SendWorkItemForward(context.Background(), id).WorkItemForward(workItemForward).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.SendWorkItemForward``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## submit-account-selection
Submit account selections
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v3/submit-account-selection)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitAccountSelectionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **map[string]interface{}** | Account Selection Data map, keyed on fieldName | 

### Return type

[**WorkItems**](../models/work-items)

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
    v3 "github.com/sailpoint-oss/golang-sdk/v2/api_v3"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    requestBody := {fieldName=fieldValue} // map[string]interface{} | Account Selection Data map, keyed on fieldName # map[string]interface{} | Account Selection Data map, keyed on fieldName

    var requestBody v3.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.WorkItemsAPI.SubmitAccountSelection(context.Background(), id).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.V3.WorkItemsAPI.SubmitAccountSelection(context.Background(), id).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.SubmitAccountSelection``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitAccountSelection`: WorkItems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.SubmitAccountSelection`: %v\n", resp)
}
```

[[Back to top]](#)

