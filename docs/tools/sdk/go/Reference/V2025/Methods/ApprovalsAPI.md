---
id: v2025-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvals', 'V2025Approvals'] 
slug: /tools/sdk/go/v2025/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'V2025Approvals']
---

# ApprovalsAPI
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/v2025/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval**](#approve-approval) | **Post** `/generic-approvals/{id}/approve` | Post Approvals Approve
[**get-approval**](#get-approval) | **Get** `/generic-approvals/{id}` | Get an approval
[**get-approvals**](#get-approvals) | **Get** `/generic-approvals` | Get approvals
[**reject-approval**](#reject-approval) | **Post** `/generic-approvals/{id}/reject` | Post Approvals Reject
[**update-approvals-attributes**](#update-approvals-attributes) | **Post** `/generic-approvals/{id}/attributes` | Post Approvals Attributes
[**update-approvals-comments**](#update-approvals-comments) | **Post** `/generic-approvals/{id}/comments` | Post Approvals Comments
[**update-approvals-reassign**](#update-approvals-reassign) | **Post** `/generic-approvals/{id}/reassign` | Post Approvals Reassign


## approve-approval
Post Approvals Approve
Currently this endpoint only supports Entitlement Description Approvals.
Approves a specified approval request on behalf of the caller. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. The approval request must be in a state that allows it to be approved.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-approval)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to approve | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalApproveRequest** | [**ApprovalApproveRequest**](../models/approval-approve-request) |  | 

### Return type

[**Approval**](../models/approval)

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
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to approve # string | Approval ID that correlates to an existing approval request that a user wants to approve
    approvalapproverequest := []byte(`{
          "comment" : "comment",
          "additionalAttributes" : {
            "additionalProp1" : "string",
            "additionalProp2" : "string",
            "additionalProp3" : "string"
          }
        }`) // ApprovalApproveRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApprovalsAPI.ApproveApproval(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2025.ApprovalsAPI.ApproveApproval(context.Background(), id).ApprovalApproveRequest(approvalApproveRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.ApproveApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApproval`: Approval
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.ApproveApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## get-approval
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
Get an approval
Currently this endpoint only supports Entitlement Description Approvals.
Retrieve a single approval for a given approval ID. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approval)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the approval that is to be returned | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | ID of the approval that is to be returned # string | ID of the approval that is to be returned
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApprovalsAPI.GetApproval(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.ApprovalsAPI.GetApproval(context.Background(), id).XSailPointExperimental(xSailPointExperimental).Execute()
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
Get approvals
Currently this endpoint only supports Entitlement Description Approvals.
Get a list of approvals. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. 
Absence of all query parameters for non admins will will default to mine=true.
Absence of all query parameters for admins will return all approvals in the org.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approvals)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mine** | **bool** | Returns the list of approvals for the current caller. | [default to false]
 **requesterId** | **string** | Returns the list of approvals for a given requester ID. Must match the calling user&#39;s identity ID unless they are an admin. | 
 **requesteeId** | **string** | Returns the list of approvals for a given requesteeId ID. Must match the calling user&#39;s identity ID unless they are an admin. | 
 **approverId** | **string** | Returns the list of approvals for a given approverId ID. Must match the calling user&#39;s identity ID unless they are an admin. | 
 **count** | **bool** | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. | [default to false]
 **countOnly** | **bool** | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. | [default to false]
 **includeComments** | **bool** | If set to true in the query, the approval requests returned will include comments. | [default to false]
 **includeApprovers** | **bool** | If set to true in the query, the approval requests returned will include approvers. | [default to false]
 **includeBatchInfo** | **bool** | If set to true in the query, the approval requests returned will include batch information. | [default to false]
 **includeBatchInfo2** | **bool** | If set to true in the query, the approval requests returned will include batch information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq* | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    mine := true // bool | Returns the list of approvals for the current caller. (optional) (default to false) # bool | Returns the list of approvals for the current caller. (optional) (default to false)
    requesterId := `17e633e7d57e481569df76323169deb6a` // string | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional) # string | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
    requesteeId := `27e6334g757e481569df76323169db9sc` // string | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional) # string | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    approverId := `37e6334g557e481569df7g2d3169db9sb` // string | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional) # string | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    count := true // bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to false) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to false)
    countOnly := true // bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to false) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to false)
    includeComments := true // bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to false)
    includeApprovers := true // bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to false)
    includeBatchInfo := true // bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to false)
    includeBatchInfo2 := true // bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to false)
    filters := `filters=status eq PENDING` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApprovalsAPI.GetApprovals(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.ApprovalsAPI.GetApprovals(context.Background()).Mine(mine).RequesterId(requesterId).RequesteeId(requesteeId).ApproverId(approverId).Count(count).CountOnly(countOnly).IncludeComments(includeComments).IncludeApprovers(includeApprovers).IncludeBatchInfo(includeBatchInfo).IncludeBatchInfo2(includeBatchInfo2).Filters(filters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovals``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApprovals`: []Approval
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovals`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval
Post Approvals Reject
Currently this endpoint only supports Entitlement Description Approvals.
Rejects a specified approval request on behalf of the caller.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/reject-approval)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to reject. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalRejectRequest** | [**ApprovalRejectRequest**](../models/approval-reject-request) |  | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to reject. # string | Approval ID that correlates to an existing approval request that a user wants to reject.
    approvalrejectrequest := []byte(`{
          "comment" : "string"
        }`) // ApprovalRejectRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ApprovalsAPI.RejectApproval(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.ApprovalsAPI.RejectApproval(context.Background(), id).ApprovalRejectRequest(approvalRejectRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.RejectApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## update-approvals-attributes
Post Approvals Attributes
Currently this endpoint only supports Entitlement Description Approvals.
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-attributes)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApprovalsAttributesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalAttributesRequest** | [**ApprovalAttributesRequest**](../models/approval-attributes-request) |  | 

### Return type

[**Approval**](../models/approval)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. # string | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
    approvalattributesrequest := []byte(`{
          "removeAttributeKeys" : [ "string" ],
          "comment" : "comment",
          "additionalAttributes" : {
            "additionalProp1" : "string",
            "additionalProp2" : "string",
            "additionalProp3" : "string"
          }
        }`) // ApprovalAttributesRequest | 

    var approvalAttributesRequest v2025.ApprovalAttributesRequest
    if err := json.Unmarshal(approvalattributesrequest, &approvalAttributesRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApprovalsAPI.UpdateApprovalsAttributes(context.Background(), id).ApprovalAttributesRequest(approvalAttributesRequest).Execute()
	  //resp, r, err := apiClient.V2025.ApprovalsAPI.UpdateApprovalsAttributes(context.Background(), id).ApprovalAttributesRequest(approvalAttributesRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsAttributes``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateApprovalsAttributes`: Approval
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.UpdateApprovalsAttributes`: %v\n", resp)
}
```

[[Back to top]](#)

## update-approvals-comments
Post Approvals Comments
Currently this endpoint only supports Entitlement Description Approvals.
Adds comments to a specified approval request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-comments)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to add a comment to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApprovalsCommentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalCommentsRequest** | [**ApprovalCommentsRequest**](../models/approval-comments-request) |  | 

### Return type

[**Approval**](../models/approval)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to add a comment to. # string | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
    approvalcommentsrequest := []byte(`{
          "comment" : "Approval comment."
        }`) // ApprovalCommentsRequest | 

    var approvalCommentsRequest v2025.ApprovalCommentsRequest
    if err := json.Unmarshal(approvalcommentsrequest, &approvalCommentsRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.ApprovalsAPI.UpdateApprovalsComments(context.Background(), id).ApprovalCommentsRequest(approvalCommentsRequest).Execute()
	  //resp, r, err := apiClient.V2025.ApprovalsAPI.UpdateApprovalsComments(context.Background(), id).ApprovalCommentsRequest(approvalCommentsRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsComments``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateApprovalsComments`: Approval
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.UpdateApprovalsComments`: %v\n", resp)
}
```

[[Back to top]](#)

## update-approvals-reassign
Post Approvals Reassign
Currently this endpoint only supports Entitlement Description Approvals.
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-reassign)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to reassign. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApprovalsReassignRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalReassignRequest** | [**ApprovalReassignRequest**](../models/approval-reassign-request) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to reassign. # string | Approval ID that correlates to an existing approval request that a user wants to reassign.
    approvalreassignrequest := []byte(`{
          "reassignTo" : "152354832eb6f8f539fd738592e19ec5",
          "comment" : "comment",
          "reassignFrom" : "384532516be25f8fdf935ce19e295837"
        }`) // ApprovalReassignRequest | 

    var approvalReassignRequest v2025.ApprovalReassignRequest
    if err := json.Unmarshal(approvalreassignrequest, &approvalReassignRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.ApprovalsAPI.UpdateApprovalsReassign(context.Background(), id).ApprovalReassignRequest(approvalReassignRequest).Execute()
	  //r, err := apiClient.V2025.ApprovalsAPI.UpdateApprovalsReassign(context.Background(), id).ApprovalReassignRequest(approvalReassignRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsReassign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

