---
id: access-request-approvals
title: AccessRequestApprovals
pagination_label: AccessRequestApprovals
sidebar_label: AccessRequestApprovals
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestApprovals', 'AccessRequestApprovals'] 
slug: /tools/sdk/go/v3/methods/access-request-approvals
tags: ['SDK', 'Software Development Kit', 'AccessRequestApprovals', 'AccessRequestApprovals']
---

# AccessRequestApprovalsAPI
  Use this API to implement and customize access request approval functionality. 
With this functionality in place, administrators can delegate qualified users to review users&#39; requests for access or managers&#39; requests to revoke team members&#39; access to applications, entitlements, or roles.      
This enables more qualified users to review access requests and the others to spend their time on other tasks.  

In Identity Security Cloud, users can request access to applications, entitlements, and roles, and managers can request that team members&#39; access be revoked.   
For applications and entitlements, administrators can set access profiles to require approval from the access profile owner, the application owner, the source owner, the requesting user&#39;s manager, or a governance group for access to be granted or revoked.   
For roles, administrators can also set roles to allow access requests and require approval from the role owner, the requesting user&#39;s manager, or a governance group for access to be granted or revoked.   
If the administrator designates a governance group as the required approver, any governance group member can approve the requests.
   
When a user submits an access request, Identity Security Cloud sends the first required approver in the queue an email notification, based on the access request configuration&#39;s approval and reminder escalation configuration.

In Approvals in Identity Security Cloud, required approvers can view pending access requests under the Requested tab and approve or deny them, or the approvers can reassign the requests to different reviewers for approval.   
If the required approver approves the request and is the only reviewer required, Identity Security Cloud grants or revokes access, based on the request.   
If multiple reviewers are required, Identity Security Cloud sends the request to the next reviewer in the queue, based on the access request configuration&#39;s approval reminder and escalation configuration.   
The required approver can then view any completed access requests under the Reviewed tab.   

Refer to [Access Requests](https://documentation.sailpoint.com/saas/help/requests/index.html) for more information about access request approvals.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-access-request**](#approve-access-request) | **Post** `/access-request-approvals/{approvalId}/approve` | Approve access request approval
[**forward-access-request**](#forward-access-request) | **Post** `/access-request-approvals/{approvalId}/forward` | Forward access request approval
[**get-access-request-approval-summary**](#get-access-request-approval-summary) | **Get** `/access-request-approvals/approval-summary` | Get access requests approvals number
[**list-completed-approvals**](#list-completed-approvals) | **Get** `/access-request-approvals/completed` | Completed access request approvals list
[**list-pending-approvals**](#list-pending-approvals) | **Get** `/access-request-approvals/pending` | Pending access request approvals list
[**reject-access-request**](#reject-access-request) | **Post** `/access-request-approvals/{approvalId}/reject` | Reject access request approval


## approve-access-request
Approve access request approval
Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/v3/approve-access-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**approvalId** | **string** | Approval ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **commentDto** | [**CommentDto**](../models/comment-dto) | Reviewer&#39;s comment. | 

### Return type

**map[string]interface{}**

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
    approvalId := `2c91808b7294bea301729568c68c002e` // string | Approval ID. # string | Approval ID.
    commentdto := []byte(`{
          "created" : "2017-07-11T18:45:37.098Z",
          "author" : {
            "name" : "john.doe",
            "id" : "2c9180847e25f377017e2ae8cae4650b",
            "type" : "IDENTITY"
          },
          "comment" : "This is a comment."
        }`) // CommentDto | Reviewer's comment. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ApproveAccessRequest(context.Background(), approvalId).Execute()
	  //resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ApproveAccessRequest(context.Background(), approvalId).CommentDto(commentDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ApproveAccessRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveAccessRequest`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ApproveAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## forward-access-request
Forward access request approval
Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/v3/forward-access-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**approvalId** | **string** | Approval ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiForwardAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **forwardApprovalDto** | [**ForwardApprovalDto**](../models/forward-approval-dto) | Information about the forwarded approval. | 

### Return type

**map[string]interface{}**

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
    approvalId := `2c91808b7294bea301729568c68c002e` // string | Approval ID. # string | Approval ID.
    forwardapprovaldto := []byte(`{
          "newOwnerId" : "2c91808568c529c60168cca6f90c1314",
          "comment" : "2c91808568c529c60168cca6f90c1313"
        }`) // ForwardApprovalDto | Information about the forwarded approval.

    var forwardApprovalDto v3.ForwardApprovalDto
    if err := json.Unmarshal(forwardapprovaldto, &forwardApprovalDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ForwardAccessRequest(context.Background(), approvalId).ForwardApprovalDto(forwardApprovalDto).Execute()
	  //resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ForwardAccessRequest(context.Background(), approvalId).ForwardApprovalDto(forwardApprovalDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ForwardAccessRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ForwardAccessRequest`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ForwardAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-approval-summary
Get access requests approvals number
Use this API to return the number of pending, approved and rejected access requests approvals. See the "owner-id" query parameter for authorization information. info.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-access-request-approval-summary)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestApprovalSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. | 
 **fromDate** | **string** | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. | 

### Return type

[**ApprovalSummary**](../models/approval-summary)

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
    ownerId := `2c91808568c529c60168cca6f90c1313` // string | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # string | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    fromDate := `from-date=2020-03-19T19:59:11Z` // string | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional) # string | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.GetAccessRequestApprovalSummary(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.GetAccessRequestApprovalSummary(context.Background()).OwnerId(ownerId).FromDate(fromDate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.GetAccessRequestApprovalSummary``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestApprovalSummary`: ApprovalSummary
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.GetAccessRequestApprovalSummary`: %v\n", resp)
}
```

[[Back to top]](#)

## list-completed-approvals
Completed access request approvals list
This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-completed-approvals)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCompletedApprovalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | 

### Return type

[**[]CompletedApproval**](../models/completed-approval)

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
    ownerId := `2c91808568c529c60168cca6f90c1313` // string | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # string | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional)
    sorters := `modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ListCompletedApprovals(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ListCompletedApprovals(context.Background()).OwnerId(ownerId).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ListCompletedApprovals``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCompletedApprovals`: []CompletedApproval
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ListCompletedApprovals`: %v\n", resp)
}
```

[[Back to top]](#)

## list-pending-approvals
Pending access request approvals list
This endpoint returns a list of pending approvals. See "owner-id" query parameter below for authorization info.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-pending-approvals)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPendingApprovalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | 
 **limit** | **int32** | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | 

### Return type

[**[]PendingApproval**](../models/pending-approval)

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
    ownerId := `2c91808568c529c60168cca6f90c1313` // string | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # string | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to false)
    filters := `id eq "2c91808568c529c60168cca6f90c1313"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in* (optional)
    sorters := `modified` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ListPendingApprovals(context.Background()).Execute()
	  //resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.ListPendingApprovals(context.Background()).OwnerId(ownerId).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ListPendingApprovals``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPendingApprovals`: []PendingApproval
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ListPendingApprovals`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-access-request
Reject access request approval
Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/v3/reject-access-request)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**approvalId** | **string** | Approval ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **commentDto** | [**CommentDto**](../models/comment-dto) | Reviewer&#39;s comment. | 

### Return type

**map[string]interface{}**

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
    approvalId := `2c91808b7294bea301729568c68c002e` // string | Approval ID. # string | Approval ID.
    commentdto := []byte(`{
          "created" : "2017-07-11T18:45:37.098Z",
          "author" : {
            "name" : "john.doe",
            "id" : "2c9180847e25f377017e2ae8cae4650b",
            "type" : "IDENTITY"
          },
          "comment" : "This is a comment."
        }`) // CommentDto | Reviewer's comment.

    var commentDto v3.CommentDto
    if err := json.Unmarshal(commentdto, &commentDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.RejectAccessRequest(context.Background(), approvalId).CommentDto(commentDto).Execute()
	  //resp, r, err := apiClient.V3.AccessRequestApprovalsAPI.RejectAccessRequest(context.Background(), approvalId).CommentDto(commentDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.RejectAccessRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectAccessRequest`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.RejectAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

