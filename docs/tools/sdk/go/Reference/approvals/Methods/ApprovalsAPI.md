---
id: v1-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvals', 'V1Approvals'] 
slug: /tools/sdk/go/approvals/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'V1Approvals']
---

# ApprovalsAPI
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/v2025/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-in-bulk-v1**](#approve-approval-in-bulk-v1) | **Post** `/generic-approvals/v1/bulk-approve` | Post Bulk Approve Approvals
[**approve-approval-v1**](#approve-approval-v1) | **Post** `/generic-approvals/v1/{id}/approve` | Post Approvals Approve
[**cancel-approval-by-id-v1**](#cancel-approval-by-id-v1) | **Post** `/generic-approvals/v1/{id}/cancel` | Post Approval Cancel
[**cancel-approval-v1**](#cancel-approval-v1) | **Post** `/generic-approvals/v1/bulk-cancel` | Post Bulk Cancel Approvals
[**delete-approval-config-request-v1**](#delete-approval-config-request-v1) | **Delete** `/generic-approvals/v1/config/{id}/{scope}` | Delete Approval Configuration
[**get-approval-v1**](#get-approval-v1) | **Get** `/generic-approvals/v1/{id}` | Get an approval
[**get-approvals-config-v1**](#get-approvals-config-v1) | **Get** `/generic-approvals/v1/config/{id}` | Get Approval Config
[**get-approvals-v1**](#get-approvals-v1) | **Get** `/generic-approvals/v1` | Get approvals
[**move-approval-v1**](#move-approval-v1) | **Post** `/generic-approvals/v1/bulk-reassign` | Post Bulk Reassign Approvals
[**put-approvals-config-v1**](#put-approvals-config-v1) | **Put** `/generic-approvals/v1/config/{id}/{scope}` | Put Approval Config
[**reject-approval-in-bulk-v1**](#reject-approval-in-bulk-v1) | **Post** `/generic-approvals/v1/bulk-reject` | Post Bulk Reject Approvals
[**reject-approval-v1**](#reject-approval-v1) | **Post** `/generic-approvals/v1/{id}/reject` | Post Approvals Reject
[**update-approvals-attributes-v1**](#update-approvals-attributes-v1) | **Post** `/generic-approvals/v1/{id}/attributes` | Post Approvals Attributes
[**update-approvals-comments-v1**](#update-approvals-comments-v1) | **Post** `/generic-approvals/v1/{id}/comments` | Post Approvals Comments
[**update-approvals-reassign-v1**](#update-approvals-reassign-v1) | **Post** `/generic-approvals/v1/{id}/reassign` | Post Approvals Reassign


## approve-approval-in-bulk-v1
Post Bulk Approve Approvals
Bulk Approves specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-in-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkapproverequestdto** | [**Bulkapproverequestdto**](../models/bulkapproverequestdto) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    bulkapproverequestdto := []byte(``) // Bulkapproverequestdto | 

    var bulkapproverequestdto v1.Bulkapproverequestdto
    if err := json.Unmarshal(bulkapproverequestdto, &bulkapproverequestdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.ApproveApprovalInBulkV1(context.Background()).Bulkapproverequestdto(bulkapproverequestdto).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.ApproveApprovalInBulkV1(context.Background()).Bulkapproverequestdto(bulkapproverequestdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.ApproveApprovalInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalInBulkV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.ApproveApprovalInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## approve-approval-v1
Post Approvals Approve
Approves a specified approval request on behalf of the caller. The approval request must be in a state that allows it to be approved. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to approve. | 

### Other Parameters

Other parameters are passed through a pointer to a apiApproveApprovalV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalapproverequest** | [**Approvalapproverequest**](../models/approvalapproverequest) |  | 

### Return type

[**Approval2**](../models/approval2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to approve. # string | Approval ID that correlates to an existing approval request that a user wants to approve.
    approvalapproverequest := []byte(``) // Approvalapproverequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.ApproveApprovalV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.ApproveApprovalV1(context.Background(), id).Approvalapproverequest(approvalapproverequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.ApproveApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveApprovalV1`: Approval2
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.ApproveApprovalV1`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-approval-by-id-v1
Post Approval Cancel
Cancels a specified approval requests on behalf of the caller. 
Note: This endpoint does not support access request IDs. To cancel access request approvals, please use the following:
/access-requests/cancel

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-approval-by-id-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the approval request to cancel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiCancelApprovalByIdV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalcancelrequest** | [**Approvalcancelrequest**](../models/approvalcancelrequest) |  | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | ID of the approval request to cancel. # string | ID of the approval request to cancel.
    approvalcancelrequest := []byte(``) // Approvalcancelrequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ApprovalsAPI.CancelApprovalByIdV1(context.Background(), id).Execute()
	  //r, err := apiClient.ApprovalsAPI.CancelApprovalByIdV1(context.Background(), id).Approvalcancelrequest(approvalcancelrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.CancelApprovalByIdV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## cancel-approval-v1
Post Bulk Cancel Approvals
Bulk cancels specified approval requests on behalf of the caller. 
Note: To bulk cancel access request approvals, please use the following:
/access-requests/bulk-cancel

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-approval-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelApprovalV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkcancelrequestdto** | [**Bulkcancelrequestdto**](../models/bulkcancelrequestdto) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    bulkcancelrequestdto := []byte(``) // Bulkcancelrequestdto | 

    var bulkcancelrequestdto v1.Bulkcancelrequestdto
    if err := json.Unmarshal(bulkcancelrequestdto, &bulkcancelrequestdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.CancelApprovalV1(context.Background()).Bulkcancelrequestdto(bulkcancelrequestdto).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.CancelApprovalV1(context.Background()).Bulkcancelrequestdto(bulkcancelrequestdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.CancelApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelApprovalV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.CancelApprovalV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-approval-config-request-v1
Delete Approval Configuration
Deletes an approval configuration.
Configurations at the APPROVAL_REQUEST scope cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-approval-config-request-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 
**scope** | **string** | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteApprovalConfigRequestV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `ACCESS_REQUEST_APPROVAL` // string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
    scope := `APPROVAL_TYPE` // string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ApprovalsAPI.DeleteApprovalConfigRequestV1(context.Background(), id, scope).Execute()
	  //r, err := apiClient.ApprovalsAPI.DeleteApprovalConfigRequestV1(context.Background(), id, scope).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.DeleteApprovalConfigRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-approval-v1
Get an approval
Fetches an approval request by it's approval ID. For lookups by access request ID please use the following:
/generic-approvals?filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-approval-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | ID of the approval that is to be returned | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Approval2**](../models/approval2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | ID of the approval that is to be returned # string | ID of the approval that is to be returned

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.GetApprovalV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.GetApprovalV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApprovalV1`: Approval2
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovalV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-approvals-config-v1
Get Approval Config
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-approvals-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \&quot;ENTITLEMENT_DESCRIPTIONS\&quot;, \&quot;ACCESS_REQUEST_APPROVAL\&quot;, \&quot;ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, (tenantID)] | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**Approvalconfig**](../models/approvalconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `1.2345678901234567E+31` // string | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \"ENTITLEMENT_DESCRIPTIONS\", \"ACCESS_REQUEST_APPROVAL\", \"ACCOUNT_CREATE_APPROVAL_REQUEST\", \"ACCOUNT_DELETE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\", (tenantID)] # string | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \"ENTITLEMENT_DESCRIPTIONS\", \"ACCESS_REQUEST_APPROVAL\", \"ACCOUNT_CREATE_APPROVAL_REQUEST\", \"ACCOUNT_DELETE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\", \"MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\", (tenantID)]

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.GetApprovalsConfigV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.GetApprovalsConfigV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovalsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApprovalsConfigV1`: Approvalconfig
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovalsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-approvals-v1
Get approvals
Gets a list of approvals.

One of the following query parameters should be present: 'mine', 'approverId', 'requesterId', 'requesteeId'.

The absence of all query parameters for non admins will default to mine=true (which is the equivalent of 'approverId=[your_identity_id]') 
while admins will default to mine=false (which will show all approvals in the org).

For lookups by access request ID please use the following:

'/generic-approvals?mine=false&filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"'

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-approvals-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetApprovalsV1Request struct via the builder pattern


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

[**[]Approval2**](../models/approval2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
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
    resp, r, err := apiClient.ApprovalsAPI.GetApprovalsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.GetApprovalsV1(context.Background()).Mine(mine).RequesterId(requesterId).RequesteeId(requesteeId).ApproverId(approverId).Count(count).CountOnly(countOnly).IncludeComments(includeComments).IncludeApprovers(includeApprovers).IncludeReassignmentHistory(includeReassignmentHistory).IncludeBatchInfo(includeBatchInfo).Filters(filters).Limit(limit).Offset(offset).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.GetApprovalsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetApprovalsV1`: []Approval2
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.GetApprovalsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## move-approval-v1
Post Bulk Reassign Approvals
Bulk reassigns specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v1/move-approval-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiMoveApprovalV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkreassignrequestdto** | [**Bulkreassignrequestdto**](../models/bulkreassignrequestdto) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    bulkreassignrequestdto := []byte(``) // Bulkreassignrequestdto | 

    var bulkreassignrequestdto v1.Bulkreassignrequestdto
    if err := json.Unmarshal(bulkreassignrequestdto, &bulkreassignrequestdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.MoveApprovalV1(context.Background()).Bulkreassignrequestdto(bulkreassignrequestdto).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.MoveApprovalV1(context.Background()).Bulkreassignrequestdto(bulkreassignrequestdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.MoveApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MoveApprovalV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.MoveApprovalV1`: %v\n", resp)
}
```

[[Back to top]](#)

## put-approvals-config-v1
Put Approval Config
Upserts a singular approval configuration that matches the given configID and configScope. 
For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-approvals-config-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 
**scope** | **string** | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutApprovalsConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **approvalconfig** | [**Approvalconfig**](../models/approvalconfig) |  | 

### Return type

[**Approvalconfig**](../models/approvalconfig)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `ACCESS_REQUEST_APPROVAL` // string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
    scope := `APPROVAL_TYPE` // string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT # string | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
    approvalconfig := []byte(``) // Approvalconfig | 

    var approvalconfig v1.Approvalconfig
    if err := json.Unmarshal(approvalconfig, &approvalconfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.PutApprovalsConfigV1(context.Background(), id, scope).Approvalconfig(approvalconfig).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.PutApprovalsConfigV1(context.Background(), id, scope).Approvalconfig(approvalconfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.PutApprovalsConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutApprovalsConfigV1`: Approvalconfig
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.PutApprovalsConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval-in-bulk-v1
Post Bulk Reject Approvals
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-in-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkrejectrequestdto** | [**Bulkrejectrequestdto**](../models/bulkrejectrequestdto) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    bulkrejectrequestdto := []byte(``) // Bulkrejectrequestdto | 

    var bulkrejectrequestdto v1.Bulkrejectrequestdto
    if err := json.Unmarshal(bulkrejectrequestdto, &bulkrejectrequestdto); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.RejectApprovalInBulkV1(context.Background()).Bulkrejectrequestdto(bulkrejectrequestdto).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.RejectApprovalInBulkV1(context.Background()).Bulkrejectrequestdto(bulkrejectrequestdto).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.RejectApprovalInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RejectApprovalInBulkV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.RejectApprovalInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## reject-approval-v1
Post Approvals Reject
Rejects a specified approval request on behalf of the caller. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user and approved.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to reject. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRejectApprovalV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalrejectrequest** | [**Approvalrejectrequest**](../models/approvalrejectrequest) |  | 

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to reject. # string | Approval ID that correlates to an existing approval request that a user wants to reject.
    approvalrejectrequest := []byte(``) // Approvalrejectrequest |  (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ApprovalsAPI.RejectApprovalV1(context.Background(), id).Execute()
	  //r, err := apiClient.ApprovalsAPI.RejectApprovalV1(context.Background(), id).Approvalrejectrequest(approvalrejectrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.RejectApprovalV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## update-approvals-attributes-v1
Post Approvals Attributes
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-approvals-attributes-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApprovalsAttributesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalattributesrequest** | [**Approvalattributesrequest**](../models/approvalattributesrequest) |  | 

### Return type

[**Approval2**](../models/approval2)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. # string | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
    approvalattributesrequest := []byte(``) // Approvalattributesrequest | 

    var approvalattributesrequest v1.Approvalattributesrequest
    if err := json.Unmarshal(approvalattributesrequest, &approvalattributesrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.UpdateApprovalsAttributesV1(context.Background(), id).Approvalattributesrequest(approvalattributesrequest).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.UpdateApprovalsAttributesV1(context.Background(), id).Approvalattributesrequest(approvalattributesrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsAttributesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateApprovalsAttributesV1`: Approval2
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.UpdateApprovalsAttributesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-approvals-comments-v1
Post Approvals Comments
Adds comments to a specified approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-approvals-comments-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to add a comment to. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApprovalsCommentsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalcommentsrequest** | [**Approvalcommentsrequest**](../models/approvalcommentsrequest) |  | 

### Return type

[**Approval2**](../models/approval2)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to add a comment to. # string | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
    approvalcommentsrequest := []byte(``) // Approvalcommentsrequest | 

    var approvalcommentsrequest v1.Approvalcommentsrequest
    if err := json.Unmarshal(approvalcommentsrequest, &approvalcommentsrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.ApprovalsAPI.UpdateApprovalsCommentsV1(context.Background(), id).Approvalcommentsrequest(approvalcommentsrequest).Execute()
	  //resp, r, err := apiClient.ApprovalsAPI.UpdateApprovalsCommentsV1(context.Background(), id).Approvalcommentsrequest(approvalcommentsrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsCommentsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateApprovalsCommentsV1`: Approval2
    fmt.Fprintf(os.Stdout, "Response from `ApprovalsAPI.UpdateApprovalsCommentsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-approvals-reassign-v1
Post Approvals Reassign
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-approvals-reassign-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | Approval ID that correlates to an existing approval request that a user wants to reassign. | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateApprovalsReassignV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **approvalreassignrequest** | [**Approvalreassignrequest**](../models/approvalreassignrequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/approvals"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/approvals"
)

func main() {
    id := `38453251-6be2-5f8f-df93-5ce19e295837` // string | Approval ID that correlates to an existing approval request that a user wants to reassign. # string | Approval ID that correlates to an existing approval request that a user wants to reassign.
    approvalreassignrequest := []byte(``) // Approvalreassignrequest | 

    var approvalreassignrequest v1.Approvalreassignrequest
    if err := json.Unmarshal(approvalreassignrequest, &approvalreassignrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.ApprovalsAPI.UpdateApprovalsReassignV1(context.Background(), id).Approvalreassignrequest(approvalreassignrequest).Execute()
	  //r, err := apiClient.ApprovalsAPI.UpdateApprovalsReassignV1(context.Background(), id).Approvalreassignrequest(approvalreassignrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `ApprovalsAPI.UpdateApprovalsReassignV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

