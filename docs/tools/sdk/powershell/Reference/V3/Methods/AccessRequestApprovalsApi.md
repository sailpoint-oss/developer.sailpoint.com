---
id: access-request-approvals
title: AccessRequestApprovals
pagination_label: AccessRequestApprovals
sidebar_label: AccessRequestApprovals
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestApprovals', 'AccessRequestApprovals'] 
slug: /tools/sdk/powershell/v3/methods/access-request-approvals
tags: ['SDK', 'Software Development Kit', 'AccessRequestApprovals', 'AccessRequestApprovals']
---

# AccessRequestApprovals
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
[**Approve-AccessRequest**](#approve-access-request) | **POST** `/access-request-approvals/{approvalId}/approve` | Approve access request approval
[**Invoke-ForwardAccessRequest**](#forward-access-request) | **POST** `/access-request-approvals/{approvalId}/forward` | Forward access request approval
[**Get-AccessRequestApprovalSummary**](#get-access-request-approval-summary) | **GET** `/access-request-approvals/approval-summary` | Get access requests approvals number
[**Get-CompletedApprovals**](#list-completed-approvals) | **GET** `/access-request-approvals/completed` | Completed access request approvals list
[**Get-PendingApprovals**](#list-pending-approvals) | **GET** `/access-request-approvals/pending` | Pending access request approvals list
[**Deny-AccessRequest**](#reject-access-request) | **POST** `/access-request-approvals/{approvalId}/reject` | Reject access request approval


## approve-access-request
Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/v3/approve-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ApprovalId | **String** | True  | Approval ID.
 Body  | CommentDto | [**CommentDto**](../models/comment-dto) |   (optional) | Reviewer's comment.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ApprovalId = "2c91808b7294bea301729568c68c002e" # String | Approval ID.
$CommentDto = @"{
  "created" : "2017-07-11T18:45:37.098Z",
  "author" : {
    "name" : "john.doe",
    "id" : "2c9180847e25f377017e2ae8cae4650b",
    "type" : "IDENTITY"
  },
  "comment" : "This is a comment."
}"@

# Approve access request approval

try {
    Approve-AccessRequest -ApprovalId $ApprovalId 
    
    # Below is a request that includes all optional parameters
    # Approve-AccessRequest -ApprovalId $ApprovalId -CommentDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-AccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## forward-access-request
Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/v3/forward-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ApprovalId | **String** | True  | Approval ID.
 Body  | ForwardApprovalDto | [**ForwardApprovalDto**](../models/forward-approval-dto) | True  | Information about the forwarded approval.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ApprovalId = "2c91808b7294bea301729568c68c002e" # String | Approval ID.
$ForwardApprovalDto = @"{
  "newOwnerId" : "2c91808568c529c60168cca6f90c1314",
  "comment" : "2c91808568c529c60168cca6f90c1313"
}"@

# Forward access request approval

try {
    $Result = ConvertFrom-JsonToForwardApprovalDto -Json $ForwardApprovalDto
    Invoke-ForwardAccessRequest -ApprovalId $ApprovalId -ForwardApprovalDto $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-ForwardAccessRequest -ApprovalId $ApprovalId -ForwardApprovalDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-ForwardAccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-approval-summary
Use this API to return the number of pending, approved and rejected access requests approvals. See the "owner-id" query parameter for authorization information. info.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-access-request-approval-summary)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  Query | FromDate | **String** |   (optional) | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format.

### Return type
[**ApprovalSummary**](../models/approval-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Number of pending, approved, rejected access request approvals. | ApprovalSummary
400 | Client Error - Returned if the query parameter is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "2c91808568c529c60168cca6f90c1313" # String | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
$FromDate = "from-date=2020-03-19T19:59:11Z" # String | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional)

# Get access requests approvals number

try {
    Get-AccessRequestApprovalSummary 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestApprovalSummary -OwnerId $OwnerId -FromDate $FromDate  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestApprovalSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-completed-approvals
This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-completed-approvals)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type
[**CompletedApproval[]**](../models/completed-approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Completed Approvals. | CompletedApproval[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "2c91808568c529c60168cca6f90c1313" # String | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "2c91808568c529c60168cca6f90c1313"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional)
$Sorters = "modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

# Completed access request approvals list

try {
    Get-CompletedApprovals 
    
    # Below is a request that includes all optional parameters
    # Get-CompletedApprovals -OwnerId $OwnerId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-CompletedApprovals"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-pending-approvals
This endpoint returns a list of pending approvals. See "owner-id" query parameter below for authorization info.

[API Spec](https://developer.sailpoint.com/docs/api/v3/list-pending-approvals)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type
[**PendingApproval[]**](../models/pending-approval)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Pending Approvals. | PendingApproval[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "2c91808568c529c60168cca6f90c1313" # String | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'id eq "2c91808568c529c60168cca6f90c1313"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in* (optional)
$Sorters = "modified" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

# Pending access request approvals list

try {
    Get-PendingApprovals 
    
    # Below is a request that includes all optional parameters
    # Get-PendingApprovals -OwnerId $OwnerId -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PendingApprovals"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## reject-access-request
Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/v3/reject-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ApprovalId | **String** | True  | Approval ID.
 Body  | CommentDto | [**CommentDto**](../models/comment-dto) | True  | Reviewer's comment.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ApprovalId = "2c91808b7294bea301729568c68c002e" # String | Approval ID.
$CommentDto = @"{
  "created" : "2017-07-11T18:45:37.098Z",
  "author" : {
    "name" : "john.doe",
    "id" : "2c9180847e25f377017e2ae8cae4650b",
    "type" : "IDENTITY"
  },
  "comment" : "This is a comment."
}"@

# Reject access request approval

try {
    $Result = ConvertFrom-JsonToCommentDto -Json $CommentDto
    Deny-AccessRequest -ApprovalId $ApprovalId -CommentDto $Result 
    
    # Below is a request that includes all optional parameters
    # Deny-AccessRequest -ApprovalId $ApprovalId -CommentDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Deny-AccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
