---
id: v1-work-items
title: WorkItems
pagination_label: WorkItems
sidebar_label: WorkItems
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkItems', 'V1WorkItems'] 
slug: /tools/sdk/go/workitems/methods/work-items
tags: ['SDK', 'Software Development Kit', 'WorkItems', 'V1WorkItems']
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-item-v1**](#approve-approval-item-v1) | **Post** `/work-items/v1/{id}/approve/{approvalItemId}` | Approve an approval item
[**approve-approval-items-in-bulk-v1**](#approve-approval-items-in-bulk-v1) | **Post** `/work-items/v1/bulk-approve/{id}` | Bulk approve approval items
[**complete-work-item-v1**](#complete-work-item-v1) | **Post** `/work-items/v1/{id}` | Complete a work item
[**forward-work-item-v1**](#forward-work-item-v1) | **Post** `/work-items/v1/{id}/forward` | Forward a work item
[**get-completed-work-items-v1**](#get-completed-work-items-v1) | **Get** `/work-items/v1/completed` | Completed work items
[**get-count-completed-work-items-v1**](#get-count-completed-work-items-v1) | **Get** `/work-items/v1/completed/count` | Count completed work items
[**get-count-work-items-v1**](#get-count-work-items-v1) | **Get** `/work-items/v1/count` | Count work items
[**get-work-item-v1**](#get-work-item-v1) | **Get** `/work-items/v1/{id}` | Get a work item
[**get-work-items-summary-v1**](#get-work-items-summary-v1) | **Get** `/work-items/v1/summary` | Work items summary
[**list-work-items-v1**](#list-work-items-v1) | **Get** `/work-items/v1` | List work items
[**reject-approval-item-v1**](#reject-approval-item-v1) | **Post** `/work-items/v1/{id}/reject/{approvalItemId}` | Reject an approval item
[**reject-approval-items-in-bulk-v1**](#reject-approval-items-in-bulk-v1) | **Post** `/work-items/v1/bulk-reject/{id}` | Bulk reject approval items
[**submit-account-selection-v1**](#submit-account-selection-v1) | **Post** `/work-items/v1/{id}/submit-account-selection` | Submit account selections


## approve-approval-item-v1
Approve an approval item
This API approves an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-item-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 
**approvalItemId** | **string** | The ID of the approval item. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    approvalItemId := `1211bcaa32112bcef6122adb21cef1ac` // string | The ID of the approval item. # string | The ID of the approval item.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.ApproveApprovalItemV1(context.Background(), id, approvalItemId).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.ApproveApprovalItemV1(context.Background(), id, approvalItemId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ApproveApprovalItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalItemV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.ApproveApprovalItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## approve-approval-items-in-bulk-v1
Bulk approve approval items
This API bulk approves Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-items-in-bulk-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalItemsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.ApproveApprovalItemsInBulkV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.ApproveApprovalItemsInBulkV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ApproveApprovalItemsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalItemsInBulkV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.ApproveApprovalItemsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## complete-work-item-v1
Complete a work item
This API completes a work item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/complete-work-item-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiCompleteWorkItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **body** | **string** | Body is the request payload to create form definition request | 

### Return type

[**Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    body := `body_example` // string | Body is the request payload to create form definition request (optional) # string | Body is the request payload to create form definition request (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.CompleteWorkItemV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.CompleteWorkItemV1(context.Background(), id).Body(body).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.CompleteWorkItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CompleteWorkItemV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.CompleteWorkItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## forward-work-item-v1
Forward a work item
This API forwards a work item to a new owner. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/forward-work-item-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiForwardWorkItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **workitemforward** | [**Workitemforward**](../models/workitemforward) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/work_items"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    workitemforward := []byte(``) // Workitemforward | 

    var workitemforward v1.Workitemforward
    if err := json.Unmarshal(workitemforward, &workitemforward); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.WorkItemsAPI.ForwardWorkItemV1(context.Background(), id).Workitemforward(workitemforward).Execute()
	  //r, err := apiClient.WorkItemsAPI.ForwardWorkItemV1(context.Background(), id).Workitemforward(workitemforward).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ForwardWorkItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-completed-work-items-v1
Completed work items
This gets a collection of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-completed-work-items-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCompletedWorkItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional) # string | The id of the owner of the work item list being requested.  Either an admin, or the owning/current user must make this request. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.GetCompletedWorkItemsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.GetCompletedWorkItemsV1(context.Background()).OwnerId(ownerId).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetCompletedWorkItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompletedWorkItemsV1`: []Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetCompletedWorkItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-count-completed-work-items-v1
Count completed work items
This gets a count of completed work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-completed-work-items-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCountCompletedWorkItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**Workitemscount**](../models/workitemscount)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    ownerId := `ownerId_example` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.GetCountCompletedWorkItemsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.GetCountCompletedWorkItemsV1(context.Background()).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetCountCompletedWorkItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCountCompletedWorkItemsV1`: Workitemscount
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetCountCompletedWorkItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-count-work-items-v1
Count work items
This gets a count of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-count-work-items-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCountWorkItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**Workitemscount**](../models/workitemscount)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    ownerId := `ef38f94347e94562b5bb8424a56397d8` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.GetCountWorkItemsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.GetCountWorkItemsV1(context.Background()).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetCountWorkItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCountWorkItemsV1`: Workitemscount
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetCountWorkItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-work-item-v1
Get a work item
This gets the details of a Work Item belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-item-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the work item. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `2c9180835d191a86015d28455b4a2329` // string | ID of the work item. # string | ID of the work item.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.GetWorkItemV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.GetWorkItemV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetWorkItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkItemV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetWorkItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-work-items-summary-v1
Work items summary
This gets a summary of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-work-items-summary-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetWorkItemsSummaryV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**Workitemssummary**](../models/workitemssummary)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.GetWorkItemsSummaryV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.GetWorkItemsSummaryV1(context.Background()).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.GetWorkItemsSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetWorkItemsSummaryV1`: Workitemssummary
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.GetWorkItemsSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-work-items-v1
List work items
This gets a collection of work items belonging to either the specified user(admin required), or the current user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-work-items-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListWorkItemsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **ownerId** | **string** | ID of the work item owner. | 

### Return type

[**[]Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    ownerId := `1211bcaa32112bcef6122adb21cef1ac` // string | ID of the work item owner. (optional) # string | ID of the work item owner. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.ListWorkItemsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.ListWorkItemsV1(context.Background()).Limit(limit).Offset(offset).Count(count).OwnerId(ownerId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.ListWorkItemsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListWorkItemsV1`: []Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.ListWorkItemsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval-item-v1
Reject an approval item
This API rejects an Approval Item. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-item-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 
**approvalItemId** | **string** | The ID of the approval item. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalItemV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    approvalItemId := `1211bcaa32112bcef6122adb21cef1ac` // string | The ID of the approval item. # string | The ID of the approval item.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.RejectApprovalItemV1(context.Background(), id, approvalItemId).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.RejectApprovalItemV1(context.Background(), id, approvalItemId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.RejectApprovalItemV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectApprovalItemV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.RejectApprovalItemV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval-items-in-bulk-v1
Bulk reject approval items
This API bulk rejects Approval Items. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-items-in-bulk-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalItemsInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Workitems**](../models/workitems)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.RejectApprovalItemsInBulkV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.RejectApprovalItemsInBulkV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.RejectApprovalItemsInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectApprovalItemsInBulkV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.RejectApprovalItemsInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## submit-account-selection-v1
Submit account selections
This API submits account selections. Either an admin, or the owning/current user must make this request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-account-selection-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID of the work item | 

### Other Parameters

Other parameters are passed through a pointer to a apiSubmitAccountSelectionV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **requestBody** | **map[string]interface{}** | Account Selection Data map, keyed on fieldName | 

### Return type

[**Workitems**](../models/workitems)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/work_items"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/work_items"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The ID of the work item # string | The ID of the work item
    requestBody := {"fieldName":"fieldValue"} // map[string]interface{} | Account Selection Data map, keyed on fieldName # map[string]interface{} | Account Selection Data map, keyed on fieldName

    var requestBody v1.RequestBody
    if err := json.Unmarshal(requestbody, &requestBody); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.WorkItemsAPI.SubmitAccountSelectionV1(context.Background(), id).RequestBody(requestBody).Execute()
	  //resp, r, err := apiClient.WorkItemsAPI.SubmitAccountSelectionV1(context.Background(), id).RequestBody(requestBody).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `WorkItemsAPI.SubmitAccountSelectionV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SubmitAccountSelectionV1`: Workitems
    fmt.Fprintf(os.Stdout, "Response from `WorkItemsAPI.SubmitAccountSelectionV1`: %v\n", resp)
}
```

[[Back to top]](#)

