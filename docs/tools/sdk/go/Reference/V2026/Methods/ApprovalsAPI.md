---
id: v2026-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvals', 'V2026Approvals'] 
slug: /tools/sdk/go/v2026/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'V2026Approvals']
---

# ApprovalsAPI
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval**](#approve-approval) | **Post** `/generic-approvals/{id}/approve` | Post Approvals Approve
[**approve-approval-in-bulk**](#approve-approval-in-bulk) | **Post** `/generic-approvals/bulk-approve` | Post Bulk Approve Approvals
[**cancel-approval**](#cancel-approval) | **Post** `/generic-approvals/bulk-cancel` | Post Bulk Cancel Approvals
[**cancel-approval-by-id**](#cancel-approval-by-id) | **Post** `/generic-approvals/{id}/cancel` | Post Approval Cancel
[**delete-approval-config-request**](#delete-approval-config-request) | **Delete** `/generic-approvals/config/{id}/{scope}` | Delete Approval Configuration
[**get-approval**](#get-approval) | **Get** `/generic-approvals/{id}` | Get an approval
[**get-approvals**](#get-approvals) | **Get** `/generic-approvals` | Get approvals
[**get-approvals-config**](#get-approvals-config) | **Get** `/generic-approvals/config/{id}` | Get Approval Config
[**move-approval**](#move-approval) | **Post** `/generic-approvals/bulk-reassign` | Post Bulk Reassign Approvals
[**put-approvals-config**](#put-approvals-config) | **Put** `/generic-approvals/config/{id}/{scope}` | Put Approval Config
[**reject-approval**](#reject-approval) | **Post** `/generic-approvals/{id}/reject` | Post Approvals Reject
[**reject-approval-in-bulk**](#reject-approval-in-bulk) | **Post** `/generic-approvals/bulk-reject` | Post Bulk Reject Approvals
[**update-approvals-attributes**](#update-approvals-attributes) | **Post** `/generic-approvals/{id}/attributes` | Post Approvals Attributes
[**update-approvals-comments**](#update-approvals-comments) | **Post** `/generic-approvals/{id}/comments` | Post Approvals Comments
[**update-approvals-reassign**](#update-approvals-reassign) | **Post** `/generic-approvals/{id}/reassign` | Post Approvals Reassign


## approve-approval
Post Approvals Approve
Approves a specified approval request on behalf of the caller. The approval request must be in a state that allows it to be approved. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to approve. | 

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
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to approve. # string | Approval ID that correlates to an existing approval request that a user wants to approve.
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
    resp, r, err := apiClient.V2026.ApprovalsAPI.ApproveApproval(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.ApproveApproval(context.Background(), id).ApprovalApproveRequest(approvalApproveRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.ApproveApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApproval`: Approval
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.ApproveApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## approve-approval-in-bulk
Post Bulk Approve Approvals
Bulk Approves specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkApproveRequestDTO** | [**BulkApproveRequestDTO**](../models/bulk-approve-request-dto) |  | 

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkapproverequestdto := []byte(`{
          "comment" : "Bulk approved by admin for monthly review",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ],
          "additionalAttributes" : {
            "source" : "automation",
            "urgency" : "high"
          }
        }`) // BulkApproveRequestDTO | 

    var bulkApproveRequestDTO v2026.BulkApproveRequestDTO
    if err := json.Unmarshal(bulkapproverequestdto, &bulkApproveRequestDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.ApproveApprovalInBulk(context.Background()).BulkApproveRequestDTO(bulkApproveRequestDTO).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.ApproveApprovalInBulk(context.Background()).BulkApproveRequestDTO(bulkApproveRequestDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.ApproveApprovalInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalInBulk`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.ApproveApprovalInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-approval
Post Bulk Cancel Approvals
Bulk cancels specified approval requests on behalf of the caller. 
Note: To bulk cancel access request approvals, please use the following:
/access-requests/bulk-cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCancelRequestDTO** | [**BulkCancelRequestDTO**](../models/bulk-cancel-request-dto) |  | 

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkcancelrequestdto := []byte(`{
          "comment" : "Bulk cancellation by admin",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
        }`) // BulkCancelRequestDTO | 

    var bulkCancelRequestDTO v2026.BulkCancelRequestDTO
    if err := json.Unmarshal(bulkcancelrequestdto, &bulkCancelRequestDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.CancelApproval(context.Background()).BulkCancelRequestDTO(bulkCancelRequestDTO).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.CancelApproval(context.Background()).BulkCancelRequestDTO(bulkCancelRequestDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.CancelApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelApproval`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.CancelApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-approval-by-id
Post Approval Cancel
Cancels a specified approval requests on behalf of the caller. 
Note: This endpoint does not support access request IDs. To cancel access request approvals, please use the following:
/access-requests/cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-by-id-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the approval request to cancel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelApprovalByIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalCancelRequest** | [**ApprovalCancelRequest**](../models/approval-cancel-request) |  | 

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
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | ID of the approval request to cancel. # string | ID of the approval request to cancel.
    approvalcancelrequest := []byte(`{
          "comment" : "Cancelled by administrator"
        }`) // ApprovalCancelRequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.ApprovalsAPI.CancelApprovalById(context.Background(), id).Execute()
	  //r, err := apiClient.V2026.ApprovalsAPI.CancelApprovalById(context.Background(), id).ApprovalCancelRequest(approvalCancelRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.CancelApprovalById``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-approval-config-request
Delete Approval Configuration
Deletes an approval configuration.
Configurations at the APPROVAL_REQUEST scope cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-approval-config-request-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 
**scope** | **string** | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApprovalConfigRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

 (empty response body)

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
    id := `ACCESS_REQUEST_APPROVAL` // string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
    scope := `APPROVAL_TYPE` // string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.ApprovalsAPI.DeleteApprovalConfigRequest(context.Background(), id, scope).Execute()
	  //r, err := apiClient.V2026.ApprovalsAPI.DeleteApprovalConfigRequest(context.Background(), id, scope).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.DeleteApprovalConfigRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-approval
Get an approval
Fetches an approval request by it's approval ID. For lookups by access request ID please use the following:
/generic-approvals?filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"

[API Spec](https://developer.sailpoint.com/docs/api/get-approval-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the approval that is to be returned | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | ID of the approval that is to be returned # string | ID of the approval that is to be returned

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.GetApproval(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.GetApproval(context.Background(), id).Execute()
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
Gets a list of approvals.

One of the following query parameters should be present: 'mine', 'approverId', 'requesterId', 'requesteeId'.

The absence of all query parameters for non admins will default to mine=true (which is the equivalent of 'approverId=[your_identity_id]') 
while admins will default to mine=false (which will show all approvals in the org).

For lookups by access request ID please use the following:

'/generic-approvals?mine=false&filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"'

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mine** | **bool** | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of &#39;approverId&#x3D;[your_identity_id]&#39;). | [default to false]
 **requesterId** | **string** | Returns the list of approvals for a given requester ID. Must match the calling user&#39;s identity ID unless they are an admin. | 
 **requesteeId** | **string** | Returns the list of approvals for a given requesteeId ID. Must match the calling user&#39;s identity ID unless they are an admin. | 
 **approverId** | **string** | Returns the list of approvals for a given approverId ID. Must match the calling user&#39;s identity ID unless they are an admin. | 
 **count** | **bool** | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. | [default to false]
 **countOnly** | **bool** | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. | [default to false]
 **includeComments** | **bool** | If set to true in the query, the approval requests returned will include comments. | [default to false]
 **includeApprovers** | **bool** | If set to true in the query, the approval requests returned will include approvers. | [default to false]
 **includeReassignmentHistory** | **bool** | If set to true in the query, the approval requests returned will include reassignment history. | [default to false]
 **includeBatchInfo** | **bool** | If set to true in the query, the approval requests returned will include batch information. | [default to false]
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* | 
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
    mine := true // bool | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]'). (optional) (default to false) # bool | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]'). (optional) (default to false)
    requesterId := `17e633e7d57e481569df76323169deb6a` // string | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional) # string | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
    requesteeId := `27e6334g757e481569df76323169db9sc` // string | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional) # string | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    approverId := `37e6334g557e481569df7g2d3169db9sb` // string | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional) # string | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    count := true // bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to false) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to false)
    countOnly := true // bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to false) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to false)
    includeComments := true // bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to false)
    includeApprovers := true // bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to false)
    includeReassignmentHistory := true // bool | If set to true in the query, the approval requests returned will include reassignment history. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include reassignment history. (optional) (default to false)
    includeBatchInfo := true // bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to false) # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to false)
    filters := `filters=status eq "PENDING" and type eq "ACCESS_REQUEST_APPROVAL"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* (optional)
    limit := 250 // int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.GetApprovals(context.Background()).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.GetApprovals(context.Background()).Mine(mine).RequesterId(requesterId).RequesteeId(requesteeId).ApproverId(approverId).Count(count).CountOnly(countOnly).IncludeComments(includeComments).IncludeApprovers(includeApprovers).IncludeReassignmentHistory(includeReassignmentHistory).IncludeBatchInfo(includeBatchInfo).Filters(filters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovals``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApprovals`: []Approval
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovals`: %v\n", resp)
}
```

[[Back to top]](#)

## get-approvals-config
Get Approval Config
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \&quot;ENTITLEMENT_DESCRIPTIONS\&quot;, \&quot;ACCESS_REQUEST_APPROVAL\&quot;, \&quot;ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, (tenantID)] | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**ApprovalConfig**](../models/approval-config)

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
    id := `12345678901234567890123456789012` // string | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \"ENTITLEMENT_DESCRIPTIONS\", \"ACCESS_REQUEST_APPROVAL\", \"ACCOUNT_CREATE_APPROVAL_REQUEST\", \"ACCOUNT_DELETE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\", (tenantID)] # string | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \"ENTITLEMENT_DESCRIPTIONS\", \"ACCESS_REQUEST_APPROVAL\", \"ACCOUNT_CREATE_APPROVAL_REQUEST\", \"ACCOUNT_DELETE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\", (tenantID)]

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.GetApprovalsConfig(context.Background(), id).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.GetApprovalsConfig(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovalsConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApprovalsConfig`: ApprovalConfig
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovalsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## move-approval
Post Bulk Reassign Approvals
Bulk reassigns specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/move-approval-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMoveApprovalRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkReassignRequestDTO** | [**BulkReassignRequestDTO**](../models/bulk-reassign-request-dto) |  | 

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkreassignrequestdto := []byte(`{
          "reassignTo" : "32454251-6ce2-5d8f-df93-5ce19e295238",
          "comment" : "Bulk reassignment by admin",
          "reassignFrom" : "12353251-6be2-5f8f-df93-5ce19b6e5837",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
        }`) // BulkReassignRequestDTO | 

    var bulkReassignRequestDTO v2026.BulkReassignRequestDTO
    if err := json.Unmarshal(bulkreassignrequestdto, &bulkReassignRequestDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.MoveApproval(context.Background()).BulkReassignRequestDTO(bulkReassignRequestDTO).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.MoveApproval(context.Background()).BulkReassignRequestDTO(bulkReassignRequestDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.MoveApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveApproval`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.MoveApproval`: %v\n", resp)
}
```

[[Back to top]](#)

## put-approvals-config
Put Approval Config
Upserts a singular approval configuration that matches the given configID and configScope. 
For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'

[API Spec](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 
**scope** | **string** | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutApprovalsConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **approvalConfig** | [**ApprovalConfig**](../models/approval-config) |  | 

### Return type

[**ApprovalConfig**](../models/approval-config)

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ACCESS_REQUEST_APPROVAL` // string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
    scope := `APPROVAL_TYPE` // string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
    approvalconfig := []byte(`{
          "timeoutConfig" : {
            "daysUntilTimeout" : 2,
            "enabled" : true,
            "timeoutResult" : "EXPIRED"
          },
          "requiresComment" : "ALL",
          "cronTimezone" : {
            "offset" : "",
            "location" : "America/New_York"
          },
          "fallbackApprover" : {
            "identityID" : "fdfda352157d4cc79bb749953131b457",
            "type" : "MANAGER_OF"
          },
          "reminderConfig" : {
            "reminderCronSchedule" : "1 1 1 1 1",
            "daysUntilFirstReminder" : 0,
            "maxReminders" : 5,
            "enabled" : false
          },
          "circumventApprovalProcess" : false,
          "escalationConfig" : {
            "escalationCronSchedule" : "*/5 * * * *",
            "escalationChain" : [ {
              "tier" : 1,
              "identityType" : "IDENTITY",
              "identityId" : "fdfda352157d4cc79bb749953131b457"
            }, {
              "tier" : 1,
              "identityType" : "IDENTITY",
              "identityId" : "fdfda352157d4cc79bb749953131b457"
            } ],
            "daysUntilFirstEscalation" : 2,
            "enabled" : true
          },
          "serialChain" : [ {
            "tier" : 1,
            "identityType" : "IDENTITY",
            "identityId" : "2c9180858090ea8801809a0465e829da"
          }, {
            "tier" : 1,
            "identityType" : "IDENTITY",
            "identityId" : "2c9180858090ea8801809a0465e829da"
          } ],
          "machineIdentityManagerAssignment" : "MACHINE_IDENTITY_OWNER",
          "autoApprove" : "OFF"
        }`) // ApprovalConfig | 

    var approvalConfig v2026.ApprovalConfig
    if err := json.Unmarshal(approvalconfig, &approvalConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.PutApprovalsConfig(context.Background(), id, scope).ApprovalConfig(approvalConfig).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.PutApprovalsConfig(context.Background(), id, scope).ApprovalConfig(approvalConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.PutApprovalsConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutApprovalsConfig`: ApprovalConfig
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.PutApprovalsConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval
Post Approvals Reject
Rejects a specified approval request on behalf of the caller. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user and approved.

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-v-1)

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
    r, err := apiClient.V2026.ApprovalsAPI.RejectApproval(context.Background(), id).Execute()
	  //r, err := apiClient.V2026.ApprovalsAPI.RejectApproval(context.Background(), id).ApprovalRejectRequest(approvalRejectRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.RejectApproval``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## reject-approval-in-bulk
Post Bulk Reject Approvals
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-in-bulk-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkRejectRequestDTO** | [**BulkRejectRequestDTO**](../models/bulk-reject-request-dto) |  | 

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkrejectrequestdto := []byte(`{
          "comment" : "Bulk reject by admin",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
        }`) // BulkRejectRequestDTO | 

    var bulkRejectRequestDTO v2026.BulkRejectRequestDTO
    if err := json.Unmarshal(bulkrejectrequestdto, &bulkRejectRequestDTO); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.RejectApprovalInBulk(context.Background()).BulkRejectRequestDTO(bulkRejectRequestDTO).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.RejectApprovalInBulk(context.Background()).BulkRejectRequestDTO(bulkRejectRequestDTO).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.RejectApprovalInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectApprovalInBulk`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.RejectApprovalInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## update-approvals-attributes
Post Approvals Attributes
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-attributes-v-1)

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
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

    var approvalAttributesRequest v2026.ApprovalAttributesRequest
    if err := json.Unmarshal(approvalattributesrequest, &approvalAttributesRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.UpdateApprovalsAttributes(context.Background(), id).ApprovalAttributesRequest(approvalAttributesRequest).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.UpdateApprovalsAttributes(context.Background(), id).ApprovalAttributesRequest(approvalAttributesRequest).Execute()
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
Adds comments to a specified approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-comments-v-1)

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to add a comment to. # string | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
    approvalcommentsrequest := []byte(`{
          "comment" : "Approval comment."
        }`) // ApprovalCommentsRequest | 

    var approvalCommentsRequest v2026.ApprovalCommentsRequest
    if err := json.Unmarshal(approvalcommentsrequest, &approvalCommentsRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.ApprovalsAPI.UpdateApprovalsComments(context.Background(), id).ApprovalCommentsRequest(approvalCommentsRequest).Execute()
	  //resp, r, err := apiClient.V2026.ApprovalsAPI.UpdateApprovalsComments(context.Background(), id).ApprovalCommentsRequest(approvalCommentsRequest).Execute()
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
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-reassign-v-1)

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
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to reassign. # string | Approval ID that correlates to an existing approval request that a user wants to reassign.
    approvalreassignrequest := []byte(`{
          "reassignTo" : "152354832eb6f8f539fd738592e19ec5",
          "comment" : "comment",
          "reassignFrom" : "384532516be25f8fdf935ce19e295837"
        }`) // ApprovalReassignRequest | 

    var approvalReassignRequest v2026.ApprovalReassignRequest
    if err := json.Unmarshal(approvalreassignrequest, &approvalReassignRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.ApprovalsAPI.UpdateApprovalsReassign(context.Background(), id).ApprovalReassignRequest(approvalReassignRequest).Execute()
	  //r, err := apiClient.V2026.ApprovalsAPI.UpdateApprovalsReassign(context.Background(), id).ApprovalReassignRequest(approvalReassignRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsReassign``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

