# Approvals

# Approvals
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-ApprovalInBulkV1**](#approve-approval-in-bulk-v1) | **POST** `/generic-approvals/v1/bulk-approve` | Post Bulk Approve Approvals
[**Approve-ApprovalV1**](#approve-approval-v1) | **POST** `/generic-approvals/v1/{id}/approve` | Post Approvals Approve
[**Suspend-ApprovalByIdV1**](#cancel-approval-by-id-v1) | **POST** `/generic-approvals/v1/{id}/cancel` | Post Approval Cancel
[**Suspend-ApprovalV1**](#cancel-approval-v1) | **POST** `/generic-approvals/v1/bulk-cancel` | Post Bulk Cancel Approvals
[**Remove-ApprovalConfigRequestV1**](#delete-approval-config-request-v1) | **DELETE** `/generic-approvals/v1/config/{id}/{scope}` | Delete Approval Configuration
[**Get-ApprovalV1**](#get-approval-v1) | **GET** `/generic-approvals/v1/{id}` | Get an approval
[**Get-ApprovalsConfigV1**](#get-approvals-config-v1) | **GET** `/generic-approvals/v1/config/{id}` | Get Approval Config
[**Get-ApprovalsV1**](#get-approvals-v1) | **GET** `/generic-approvals/v1` | Get approvals
[**Move-ApprovalV1**](#move-approval-v1) | **POST** `/generic-approvals/v1/bulk-reassign` | Post Bulk Reassign Approvals
[**Send-ApprovalsConfigV1**](#put-approvals-config-v1) | **PUT** `/generic-approvals/v1/config/{id}/{scope}` | Put Approval Config
[**Deny-ApprovalInBulkV1**](#reject-approval-in-bulk-v1) | **POST** `/generic-approvals/v1/bulk-reject` | Post Bulk Reject Approvals
[**Deny-ApprovalV1**](#reject-approval-v1) | **POST** `/generic-approvals/v1/{id}/reject` | Post Approvals Reject
[**Update-ApprovalsAttributesV1**](#update-approvals-attributes-v1) | **POST** `/generic-approvals/v1/{id}/attributes` | Post Approvals Attributes
[**Update-ApprovalsCommentsV1**](#update-approvals-comments-v1) | **POST** `/generic-approvals/v1/{id}/comments` | Post Approvals Comments
[**Update-ApprovalsReassignV1**](#update-approvals-reassign-v1) | **POST** `/generic-approvals/v1/{id}/reassign` | Post Approvals Reassign


## approve-approval-in-bulk-v1
Bulk Approves specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-in-bulk-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkApproveRequestDTO | [**BulkApproveRequestDTO**](../models/bulk-approve-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkApproveRequestDTO = @"{
  "comment" : "Bulk approved by admin for monthly review",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ],
  "additionalAttributes" : {
    "source" : "automation",
    "urgency" : "high"
  }
}"@

# Post Bulk Approve Approvals

try {
    $Result = ConvertFrom-JsonToBulkApproveRequestDTO -Json $BulkApproveRequestDTO
    Approve-ApprovalInBulkV1 -BulkApproveRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-ApprovalInBulkV1 -BulkApproveRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-ApprovalInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## approve-approval-v1
Approves a specified approval request on behalf of the caller. The approval request must be in a state that allows it to be approved. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to approve.
 Body  | ApprovalApproveRequest | [**ApprovalApproveRequest**](../models/approval-approve-request) |   (optional) | 

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to approve.
$ApprovalApproveRequest = @"{
  "overrideApproverID" : "12345678901234567890123456789012",
  "comment" : "comment",
  "additionalAttributes" : {
    "additionalProp1" : "string",
    "additionalProp2" : "string",
    "additionalProp3" : "string"
  }
}"@

# Post Approvals Approve

try {
    Approve-ApprovalV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Approve-ApprovalV1 -Id $Id -ApprovalApproveRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-ApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-approval-by-id-v1
Cancels a specified approval requests on behalf of the caller. 
Note: This endpoint does not support access request IDs. To cancel access request approvals, please use the following:
/access-requests/cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-by-id-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the approval request to cancel.
 Body  | ApprovalCancelRequest | [**ApprovalCancelRequest**](../models/approval-cancel-request) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | ID of the approval request to cancel.
$ApprovalCancelRequest = @"{
  "comment" : "Cancelled by administrator"
}"@

# Post Approval Cancel

try {
    Suspend-ApprovalByIdV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Suspend-ApprovalByIdV1 -Id $Id -ApprovalCancelRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-ApprovalByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-approval-v1
Bulk cancels specified approval requests on behalf of the caller. 
Note: To bulk cancel access request approvals, please use the following:
/access-requests/bulk-cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkCancelRequestDTO | [**BulkCancelRequestDTO**](../models/bulk-cancel-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkCancelRequestDTO = @"{
  "comment" : "Bulk cancellation by admin",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}"@

# Post Bulk Cancel Approvals

try {
    $Result = ConvertFrom-JsonToBulkCancelRequestDTO -Json $BulkCancelRequestDTO
    Suspend-ApprovalV1 -BulkCancelRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-ApprovalV1 -BulkCancelRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-ApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-approval-config-request-v1
Deletes an approval configuration.
Configurations at the APPROVAL_REQUEST scope cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-approval-config-request-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
Path   | Scope | **String** | True  | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ACCESS_REQUEST_APPROVAL" # String | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
$Scope = "DOMAIN_OBJECT" # String | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

# Delete Approval Configuration

try {
    Remove-ApprovalConfigRequestV1 -Id $Id -Scope $Scope 
    
    # Below is a request that includes all optional parameters
    # Remove-ApprovalConfigRequestV1 -Id $Id -Scope $Scope  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ApprovalConfigRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-approval-v1
Fetches an approval request by it's approval ID. For lookups by access request ID please use the following:
/generic-approvals?filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"

[API Spec](https://developer.sailpoint.com/docs/api/get-approval-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the approval that is to be returned

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | ID of the approval that is to be returned

# Get an approval

try {
    Get-ApprovalV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ApprovalV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-approvals-config-v1
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

### Return type
[**ApprovalConfig**](../models/approval-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | ApprovalConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ACCESS_REQUEST_APPROVAL" # String | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

# Get Approval Config

try {
    Get-ApprovalsConfigV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ApprovalsConfigV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ApprovalsConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-approvals-v1
Gets a list of approvals.

One of the following query parameters should be present: 'mine', 'approverId', 'requesterId', 'requesteeId'.

The absence of all query parameters for non admins will default to mine=true (which is the equivalent of 'approverId=[your_identity_id]') 
while admins will default to mine=false (which will show all approvals in the org).

For lookups by access request ID please use the following:

'/generic-approvals?mine=false&filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"'

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Mine | **Boolean** |   (optional) (default to $false) | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]').
  Query | RequesterId | **String** |   (optional) | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin.
  Query | RequesteeId | **String** |   (optional) | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin.
  Query | ApproverId | **String** |   (optional) | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin.
  Query | Count | **Boolean** |   (optional) (default to $false) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query.
  Query | CountOnly | **Boolean** |   (optional) (default to $false) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects.
  Query | IncludeComments | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include comments.
  Query | IncludeApprovers | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include approvers.
  Query | IncludeReassignmentHistory | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include reassignment history.
  Query | IncludeBatchInfo | **Boolean** |   (optional) (default to $false) | If set to true in the query, the approval requests returned will include batch information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw*
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Approval2[]**](../models/approval2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of approvals. | Approval2[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Mine = $true # Boolean | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]'). (optional) (default to $false)
$RequesterId = "17e633e7d57e481569df76323169deb6a" # String | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
$RequesteeId = "27e6334g757e481569df76323169db9sc" # String | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
$ApproverId = "37e6334g557e481569df7g2d3169db9sb" # String | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
$Count = $true # Boolean | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to $false)
$CountOnly = $true # Boolean | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to $false)
$IncludeComments = $true # Boolean | If set to true in the query, the approval requests returned will include comments. (optional) (default to $false)
$IncludeApprovers = $true # Boolean | If set to true in the query, the approval requests returned will include approvers. (optional) (default to $false)
$IncludeReassignmentHistory = $true # Boolean | If set to true in the query, the approval requests returned will include reassignment history. (optional) (default to $false)
$IncludeBatchInfo = $true # Boolean | If set to true in the query, the approval requests returned will include batch information. (optional) (default to $false)
$Filters = 'filters=status eq "PENDING" and type eq "ACCESS_REQUEST_APPROVAL"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Get approvals

try {
    Get-ApprovalsV1 
    
    # Below is a request that includes all optional parameters
    # Get-ApprovalsV1 -Mine $Mine -RequesterId $RequesterId -RequesteeId $RequesteeId -ApproverId $ApproverId -Count $Count -CountOnly $CountOnly -IncludeComments $IncludeComments -IncludeApprovers $IncludeApprovers -IncludeReassignmentHistory $IncludeReassignmentHistory -IncludeBatchInfo $IncludeBatchInfo -Filters $Filters -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ApprovalsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## move-approval-v1
Bulk reassigns specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/move-approval-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkReassignRequestDTO | [**BulkReassignRequestDTO**](../models/bulk-reassign-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkReassignRequestDTO = @"{
  "reassignTo" : "32454251-6ce2-5d8f-df93-5ce19e295238",
  "comment" : "Bulk reassignment by admin",
  "reassignFrom" : "12353251-6be2-5f8f-df93-5ce19b6e5837",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}"@

# Post Bulk Reassign Approvals

try {
    $Result = ConvertFrom-JsonToBulkReassignRequestDTO -Json $BulkReassignRequestDTO
    Move-ApprovalV1 -BulkReassignRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Move-ApprovalV1 -BulkReassignRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Move-ApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-approvals-config-v1
Upserts a singular approval configuration that matches the given configID and configScope. 
For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'

[API Spec](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
Path   | Scope | **String** | True  | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
 Body  | ApprovalConfig | [**ApprovalConfig**](../models/approval-config) | True  | 

### Return type
[**ApprovalConfig**](../models/approval-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Verified Email Status | ApprovalConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "ACCESS_REQUEST_APPROVAL" # String | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
$Scope = "DOMAIN_OBJECT" # String | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
$ApprovalConfig = @"{
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
    "reminderCronSchedule" : "@every 24h",
    "daysUntilFirstReminder" : 0,
    "maxReminders" : 5,
    "enabled" : false
  },
  "circumventApprovalProcess" : false,
  "escalationConfig" : {
    "escalationCronSchedule" : "@every 72h",
    "escalationChain" : [ {
      "identityType" : "IDENTITY",
      "identityId" : "fdfda352157d4cc79bb749953131b457"
    }, {
      "identityType" : "IDENTITY",
      "identityId" : "fdfda352157d4cc79bb749953131b457"
    } ],
    "daysUntilFirstEscalation" : 2,
    "enabled" : true
  },
  "serialChain" : [ {
    "identityType" : "IDENTITY",
    "identityId" : "2c9180858090ea8801809a0465e829da"
  }, {
    "identityType" : "IDENTITY",
    "identityId" : "2c9180858090ea8801809a0465e829da"
  } ],
  "machineIdentityManagerAssignment" : "MACHINE_IDENTITY_OWNER",
  "autoApprove" : "OFF"
}"@

# Put Approval Config

try {
    $Result = ConvertFrom-JsonToApprovalConfig -Json $ApprovalConfig
    Send-ApprovalsConfigV1 -Id $Id -Scope $Scope -ApprovalConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ApprovalsConfigV1 -Id $Id -Scope $Scope -ApprovalConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ApprovalsConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-approval-in-bulk-v1
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-in-bulk-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkRejectRequestDTO | [**BulkRejectRequestDTO**](../models/bulk-reject-request-dto) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkRejectRequestDTO = @"{
  "comment" : "Bulk reject by admin",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}"@

# Post Bulk Reject Approvals

try {
    $Result = ConvertFrom-JsonToBulkRejectRequestDTO -Json $BulkRejectRequestDTO
    Deny-ApprovalInBulkV1 -BulkRejectRequestDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Deny-ApprovalInBulkV1 -BulkRejectRequestDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-ApprovalInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-approval-v1
Rejects a specified approval request on behalf of the caller. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user and approved.

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to reject.
 Body  | ApprovalRejectRequest | [**ApprovalRejectRequest**](../models/approval-reject-request) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to reject.
$ApprovalRejectRequest = @"{
  "overrideApproverID" : "12345678901234567890123456789012",
  "comment" : "string"
}"@

# Post Approvals Reject

try {
    Deny-ApprovalV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Deny-ApprovalV1 -Id $Id -ApprovalRejectRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-ApprovalV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-approvals-attributes-v1
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-attributes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
 Body  | ApprovalAttributesRequest | [**ApprovalAttributesRequest**](../models/approval-attributes-request) | True  | 

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
$ApprovalAttributesRequest = @"{
  "removeAttributeKeys" : [ "string" ],
  "comment" : "comment",
  "additionalAttributes" : {
    "additionalProp1" : "string",
    "additionalProp2" : "string",
    "additionalProp3" : "string"
  }
}"@

# Post Approvals Attributes

try {
    $Result = ConvertFrom-JsonToApprovalAttributesRequest -Json $ApprovalAttributesRequest
    Update-ApprovalsAttributesV1 -Id $Id -ApprovalAttributesRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ApprovalsAttributesV1 -Id $Id -ApprovalAttributesRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ApprovalsAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-approvals-comments-v1
Adds comments to a specified approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-comments-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
 Body  | ApprovalCommentsRequest | [**ApprovalCommentsRequest**](../models/approval-comments-request) | True  | 

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Approval object | Approval2
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
$ApprovalCommentsRequest = @"{
  "comment" : "Approval comment."
}"@

# Post Approvals Comments

try {
    $Result = ConvertFrom-JsonToApprovalCommentsRequest -Json $ApprovalCommentsRequest
    Update-ApprovalsCommentsV1 -Id $Id -ApprovalCommentsRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ApprovalsCommentsV1 -Id $Id -ApprovalCommentsRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ApprovalsCommentsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-approvals-reassign-v1
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-reassign-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Approval ID that correlates to an existing approval request that a user wants to reassign.
 Body  | ApprovalReassignRequest | [**ApprovalReassignRequest**](../models/approval-reassign-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Id = "38453251-6be2-5f8f-df93-5ce19e295837" # String | Approval ID that correlates to an existing approval request that a user wants to reassign.
$ApprovalReassignRequest = @"{
  "reassignTo" : "152354832eb6f8f539fd738592e19ec5",
  "comment" : "comment",
  "reassignFrom" : "384532516be25f8fdf935ce19e295837"
}"@

# Post Approvals Reassign

try {
    $Result = ConvertFrom-JsonToApprovalReassignRequest -Json $ApprovalReassignRequest
    Update-ApprovalsReassignV1 -Id $Id -ApprovalReassignRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ApprovalsReassignV1 -Id $Id -ApprovalReassignRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ApprovalsReassignV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
