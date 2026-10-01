# AccessRequestApprovals

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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-access-request-v1**](#approve-access-request-v1) | **Post** `/access-request-approvals/v1/{approvalId}/approve` | Approve access request approval
[**forward-access-request-v1**](#forward-access-request-v1) | **Post** `/access-request-approvals/v1/{approvalId}/forward` | Forward access request approval
[**get-access-request-approval-summary-v1**](#get-access-request-approval-summary-v1) | **Get** `/access-request-approvals/v1/approval-summary` | Get access requests approvals number
[**list-access-request-approvers-v1**](#list-access-request-approvers-v1) | **Get** `/access-request-approvals/v1/{accessRequestId}/approvers` | Access request approvers
[**list-completed-approvals-v1**](#list-completed-approvals-v1) | **Get** `/access-request-approvals/v1/completed` | Completed access request approvals list
[**list-pending-approvals-v1**](#list-pending-approvals-v1) | **Get** `/access-request-approvals/v1/pending` | Pending access request approvals list
[**reject-access-request-v1**](#reject-access-request-v1) | **Post** `/access-request-approvals/v1/{approvalId}/reject` | Reject access request approval


## approve-access-request-v1
Approve access request approval
Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/approve-access-request-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**approvalId** | **string** | Approval ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **commentDto** | [**CommentDto**](../models/comment-dto) | Reviewer&#39;s comment. | 

### Return type

**map[string]interface\{\}**

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    approvalId := `2c91808b7294bea301729568c68c002e` // string | Approval ID. # string | Approval ID.
    commentdtoJson := []byte(`{
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
    resp, r, err := apiClient.AccessRequestApprovalsAPI.ApproveAccessRequestV1(context.Background(), approvalId).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.ApproveAccessRequestV1(context.Background(), approvalId).CommentDto(commentDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ApproveAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveAccessRequestV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ApproveAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## forward-access-request-v1
Forward access request approval
Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/forward-access-request-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**approvalId** | **string** | Approval ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiForwardAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **forwardApprovalDto** | [**ForwardApprovalDto**](../models/forward-approval-dto) | Information about the forwarded approval. | 

### Return type

**map[string]interface\{\}**

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
    access_request_approvals "github.com/sailpoint-oss/golang-sdk/v3/access_request_approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    approvalId := `2c91808b7294bea301729568c68c002e` // string | Approval ID. # string | Approval ID.
    forwardapprovaldtoJson := []byte(`{
          "newOwnerId" : "2c91808568c529c60168cca6f90c1314",
          "comment" : "2c91808568c529c60168cca6f90c1313"
        }`) // ForwardApprovalDto | Information about the forwarded approval.

    var forwardApprovalDto access_request_approvals.ForwardApprovalDto
    if err := json.Unmarshal(forwardapprovaldtoJson, &forwardApprovalDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestApprovalsAPI.ForwardAccessRequestV1(context.Background(), approvalId).ForwardApprovalDto(forwardApprovalDto).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.ForwardAccessRequestV1(context.Background(), approvalId).ForwardApprovalDto(forwardApprovalDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ForwardAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ForwardAccessRequestV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ForwardAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-approval-summary-v1
Get access requests approvals number
Use this API to return the number of pending, approved and rejected access requests approvals. See the "owner-id" query parameter for authorization information. info.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-approval-summary-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestApprovalSummaryV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    ownerId := `2c91808568c529c60168cca6f90c1313` // string | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # string | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    fromDate := `from-date=2020-03-19T19:59:11Z` // string | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional) # string | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestApprovalsAPI.GetAccessRequestApprovalSummaryV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.GetAccessRequestApprovalSummaryV1(context.Background()).OwnerId(ownerId).FromDate(fromDate).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.GetAccessRequestApprovalSummaryV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestApprovalSummaryV1`: ApprovalSummary
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.GetAccessRequestApprovalSummaryV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-request-approvers-v1
Access request approvers
This API endpoint returns the list of approvers for the given access request id.


[API Spec](https://developer.sailpoint.com/docs/api/list-access-request-approvers-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**accessRequestId** | **string** | Access Request ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiListAccessRequestApproversV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **limit** | **int32** | Max number of results to return. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | 
 **count** | **bool** | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [default to false]

### Return type

[**[]AccessRequestApproversListResponse**](../models/access-request-approvers-list-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    accessRequestId := `2c91808568c529c60168cca6f90c1313` // string | Access Request ID. # string | Access Request ID.
    limit := 100 // int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    count := false // bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestApprovalsAPI.ListAccessRequestApproversV1(context.Background(), accessRequestId).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.ListAccessRequestApproversV1(context.Background(), accessRequestId).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ListAccessRequestApproversV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessRequestApproversV1`: []AccessRequestApproversListResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ListAccessRequestApproversV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-completed-approvals-v1
Completed access request approvals list
This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info. For access requests for machines, each approval will include 'identityType' as 'MACHINE' and 'requestedFor' with 'type: MACHINE_IDENTITY' and the machine id. Approvals without a stored identity type are returned as 'HUMAN' / 'IDENTITY'.
When a requested object has an associated form, each approval may include a `form` object with the form definition ID, instance ID, and answers (`formData`).


[API Spec](https://developer.sailpoint.com/docs/api/list-completed-approvals-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListCompletedApprovalsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    resp, r, err := apiClient.AccessRequestApprovalsAPI.ListCompletedApprovalsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.ListCompletedApprovalsV1(context.Background()).OwnerId(ownerId).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ListCompletedApprovalsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListCompletedApprovalsV1`: []CompletedApproval
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ListCompletedApprovalsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-pending-approvals-v1
Pending access request approvals list
This endpoint returns a list of pending approvals. See "owner-id" query parameter below for authorization info.
For access requests for machines, each approval will include `identityType` as `MACHINE` and `requestedFor` with `type: MACHINE_IDENTITY` and the machine id. Approvals without a stored identity type are returned as `HUMAN` / `IDENTITY`.
When a requested object has an associated form, each approval may include a `form` object with the form definition ID, instance ID, and answers (`formData`).


[API Spec](https://developer.sailpoint.com/docs/api/list-pending-approvals-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPendingApprovalsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
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
    resp, r, err := apiClient.AccessRequestApprovalsAPI.ListPendingApprovalsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.ListPendingApprovalsV1(context.Background()).OwnerId(ownerId).Limit(limit).Offset(offset).Count(count).Filters(filters).Sorters(sorters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.ListPendingApprovalsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPendingApprovalsV1`: []PendingApproval
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.ListPendingApprovalsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-access-request-v1
Reject access request approval
Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/reject-access-request-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**approvalId** | **string** | Approval ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **commentDto** | [**CommentDto**](../models/comment-dto) | Reviewer&#39;s comment. | 

### Return type

**map[string]interface\{\}**

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
    access_request_approvals "github.com/sailpoint-oss/golang-sdk/v3/access_request_approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    approvalId := `2c91808b7294bea301729568c68c002e` // string | Approval ID. # string | Approval ID.
    commentdtoJson := []byte(`{
          "created" : "2017-07-11T18:45:37.098Z",
          "author" : {
            "name" : "john.doe",
            "id" : "2c9180847e25f377017e2ae8cae4650b",
            "type" : "IDENTITY"
          },
          "comment" : "This is a comment."
        }`) // CommentDto | Reviewer's comment.

    var commentDto access_request_approvals.CommentDto
    if err := json.Unmarshal(commentdtoJson, &commentDto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestApprovalsAPI.RejectAccessRequestV1(context.Background(), approvalId).CommentDto(commentDto).Execute()
	  //resp, r, err := apiClient.AccessRequestApprovalsAPI.RejectAccessRequestV1(context.Background(), approvalId).CommentDto(commentDto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestApprovalsAPI.RejectAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectAccessRequestV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestApprovalsAPI.RejectAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

