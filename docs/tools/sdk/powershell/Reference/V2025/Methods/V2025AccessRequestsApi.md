---
id: v2025-access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequests', 'V2025AccessRequests'] 
slug: /tools/sdk/powershell/v2025/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests', 'V2025AccessRequests']
---

# AccessRequests
  Use this API to implement and customize access request functionality. 
With this functionality in place, users can request access to applications, entitlements, or roles, and managers can request that team members&#39; access be revoked.
This allows users to get access to the tools they need quickly and securely, and it allows managers to take away access to those tools. 

Identity Security Cloud&#39;s Access Request service allows end users to request access that requires approval before it can be granted to users and enables qualified users to review those requests and approve or deny them.

In the Request Center in Identity Security Cloud, users can view available applications, roles, and entitlements and request access to them. 
If the requested tools requires approval, the requests appear as &#39;Pending&#39; under the My Requests tab until the required approver approves, rejects, or cancels them. 

Users can use My Requests to track and/or cancel the requests.

In My Team on the Identity Security Cloud Home, managers can submit requests to revoke their team members&#39; access. 
They can use the My Requests tab under Request Center to track and/or cancel the requests.

Refer to [Requesting Access](https://documentation.sailpoint.com/saas/user-help/requests/) for more information about access requests.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-V2025BulkAccessRequest**](#approve-bulk-access-request) | **POST** `/access-request-approvals/bulk-approve` | Bulk approve access request
[**Suspend-V2025AccessRequest**](#cancel-access-request) | **POST** `/access-requests/cancel` | Cancel access request
[**Suspend-V2025AccessRequestInBulk**](#cancel-access-request-in-bulk) | **POST** `/access-requests/bulk-cancel` | Bulk cancel access request
[**Close-V2025AccessRequest**](#close-access-request) | **POST** `/access-requests/close` | Close access request
[**New-V2025AccessRequest**](#create-access-request) | **POST** `/access-requests` | Submit access request
[**Get-V2025AccessRequestConfig**](#get-access-request-config) | **GET** `/access-request-config` | Get access request configuration
[**Get-V2025EntitlementDetailsForIdentity**](#get-entitlement-details-for-identity) | **GET** `/revocable-objects` | Identity entitlement details
[**Get-V2025AccessRequestStatus**](#list-access-request-status) | **GET** `/access-request-status` | Access request status
[**Get-V2025AdministratorsAccessRequestStatus**](#list-administrators-access-request-status) | **GET** `/access-request-administration` | Access request status for administrators
[**Invoke-V2025LoadAccountSelections**](#load-account-selections) | **POST** `/access-requests/accounts-selection` | Get accounts selections for identity
[**Set-V2025AccessRequestConfig**](#set-access-request-config) | **PUT** `/access-request-config` | Update access request configuration


## approve-bulk-access-request
This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights "idn:access-request-administration:write" can approve the access requests in bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-bulk-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkApproveAccessRequest | [**BulkApproveAccessRequest**](../models/bulk-approve-access-request) | True  | 

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
$BulkApproveAccessRequest = @"{
  "comment" : "I approve these request items",
  "approvalIds" : [ "2c9180835d2e5168015d32f890ca1581", "2c9180835d2e5168015d32f890ca1582" ]
}"@

# Bulk approve access request

try {
    $Result = ConvertFrom-JsonToBulkApproveAccessRequest -Json $BulkApproveAccessRequest
    Approve-V2025BulkAccessRequest -BulkApproveAccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-V2025BulkAccessRequest -BulkApproveAccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-V2025BulkAccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-access-request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CancelAccessRequest | [**CancelAccessRequest**](../models/cancel-access-request) | True  | 

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
$CancelAccessRequest = @"{
  "accountActivityId" : "2c9180835d2e5168015d32f890ca1581",
  "comment" : "I requested this role by mistake."
}"@

# Cancel access request

try {
    $Result = ConvertFrom-JsonToCancelAccessRequest -Json $CancelAccessRequest
    Suspend-V2025AccessRequest -CancelAccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-V2025AccessRequest -CancelAccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-V2025AccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-access-request-in-bulk
This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation. 
Only ORG_ADMIN or users with rights "idn:access-request-administration:write" can cancel the access requests in  bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-access-request-in-bulk)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkCancelAccessRequest | [**BulkCancelAccessRequest**](../models/bulk-cancel-access-request) | True  | 

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
$BulkCancelAccessRequest = @"{
  "accessRequestIds" : [ "2c9180835d2e5168015d32f890ca1581", "2c9180835d2e5168015d32f890ca1582" ],
  "comment" : "I requested this role by mistake."
}"@

# Bulk cancel access request

try {
    $Result = ConvertFrom-JsonToBulkCancelAccessRequest -Json $BulkCancelAccessRequest
    Suspend-V2025AccessRequestInBulk -BulkCancelAccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-V2025AccessRequestInBulk -BulkCancelAccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-V2025AccessRequestInBulk"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## close-access-request
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/close-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CloseAccessRequest | [**CloseAccessRequest**](../models/close-access-request) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CloseAccessRequest = @"{
  "executionStatus" : "Terminated",
  "accessRequestIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
  "completionStatus" : "Failure",
  "message" : "The IdentityNow Administrator manually closed this request."
}"@

# Close access request

try {
    $Result = ConvertFrom-JsonToCloseAccessRequest -Json $CloseAccessRequest
    Close-V2025AccessRequest -CloseAccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Close-V2025AccessRequest -CloseAccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Close-V2025AccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-access-request
Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.

:::info
The ability to request access using this API is constrained by the Access Request Segments defined in the API token’s user context.
:::

Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request
has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it doesn't return an error
if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.

It's best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can
be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) or the [Pending Access Request Approvals](https://developer.sailpoint.com/idn/api/v3/list-pending-approvals) APIs. You can also
use the [Search API](https://developer.sailpoint.com/idn/api/v3/search) to check the existing access items an identity has before submitting
an access request to ensure that you aren't requesting access that is already granted. If you use this API to request access that an identity already has, 
without changing the account details or end date information from the existing assignment, 
the API will cancel the request as a duplicate.

There are two types of access request:

__GRANT_ACCESS__
* Can be requested for multiple identities in a single request.
* Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/idn/api/v3/get-access-request-config) endpoint for request configuration options.  
* Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others.
* Roles, access profiles and entitlements can be requested.
* You can specify a `removeDate` to set or alter a sunset date-time on an assignment. The removeDate must be a future date-time, in the UTC timezone. Additionally, if the user already has the access assigned with a sunset date, you can also submit a request without a `removeDate` to request removal of the sunset date and time.
* If a `removeDate` is specified, then the requested role, access profile, or entitlement will be removed on that date and time.
* Now supports an alternate field 'requestedForWithRequestedItems' for users to specify account selections while requesting items where they have more than one account on the source.

:::caution

If any entitlements are being requested, then the maximum number of entitlements that can be requested is 25, and the maximum number of identities that can be requested for is 10. If you exceed these limits, the request will fail with a 400 error. If you are not requesting any entitlements, then there are no limits.

:::

__REVOKE_ACCESS__
* Can only be requested for a single identity at a time.
* You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning. 
* Does not support self request. Only manager can request to revoke access for their directly managed employees.
* If a `removeDate` is specified, then the requested role, access profile, or entitlement will be removed on that date and time.
* Roles, access profiles, and entitlements can be requested for revocation.
* Revoke requests for entitlements are limited to 1 entitlement per access request currently.
* You can specify a `removeDate` to add or alter a sunset date and time on an assignment. The `removeDate` must be a future date-time, in the UTC timezone. If the user already has the access assigned with a sunset date and time, the removeDate must be a date-time earlier than the existing sunset date and time. 
* Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone.
* Now supports REVOKE_ACCESS requests for identities with multiple accounts on a single source, with the help of 'assignmentId' and 'nativeIdentity' fields. These fields should be used within the 'requestedItems' section for the revoke requests. 
* Usage of 'requestedForWithRequestedItems' field is not supported for revoke requests.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-access-request)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessRequest | [**AccessRequest**](../models/access-request) | True  | 

### Return type
[**AccessRequestResponse**](../models/access-request-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Access Request Response. | AccessRequestResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AccessRequest = @"{
  "requestedFor" : "2c918084660f45d6016617daa9210584",
  "clientMetadata" : {
    "requestedAppId" : "2c91808f7892918f0178b78da4a305a1",
    "requestedAppName" : "test-app"
  },
  "requestType" : "GRANT_ACCESS",
  "requestedItems" : [ {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  }, {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  } ],
  "requestedForWithRequestedItems" : [ {
    "identityId" : "cb89bc2f1ee6445fbea12224c526ba3a",
    "requestedItems" : [ {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "removeDate" : "2020-07-11T21:23:15Z",
      "accountSelection" : [ {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      }, {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      } ],
      "comment" : "Requesting access profile for John Doe",
      "id" : "2c9180835d2e5168015d32f890ca1581",
      "type" : "ACCESS_PROFILE"
    }, {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "removeDate" : "2020-07-11T21:23:15Z",
      "accountSelection" : [ {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      }, {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      } ],
      "comment" : "Requesting access profile for John Doe",
      "id" : "2c9180835d2e5168015d32f890ca1581",
      "type" : "ACCESS_PROFILE"
    } ]
  }, {
    "identityId" : "cb89bc2f1ee6445fbea12224c526ba3a",
    "requestedItems" : [ {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "removeDate" : "2020-07-11T21:23:15Z",
      "accountSelection" : [ {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      }, {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      } ],
      "comment" : "Requesting access profile for John Doe",
      "id" : "2c9180835d2e5168015d32f890ca1581",
      "type" : "ACCESS_PROFILE"
    }, {
      "clientMetadata" : {
        "requestedAppName" : "test-app",
        "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
      },
      "removeDate" : "2020-07-11T21:23:15Z",
      "accountSelection" : [ {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      }, {
        "sourceId" : "cb89bc2f1ee6445fbea12224c526ba3a",
        "accounts" : [ {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        }, {
          "accountUuid" : "{fab7119e-004f-4822-9c33-b8d570d6c6a6}",
          "nativeIdentity" : "CN=Glen 067da3248e914,OU=YOUROU,OU=org-data-service,DC=YOURDC,DC=local"
        } ]
      } ],
      "comment" : "Requesting access profile for John Doe",
      "id" : "2c9180835d2e5168015d32f890ca1581",
      "type" : "ACCESS_PROFILE"
    } ]
  } ]
}"@

# Submit access request

try {
    $Result = ConvertFrom-JsonToAccessRequest -Json $AccessRequest
    New-V2025AccessRequest -AccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025AccessRequest -AccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025AccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-config
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-access-request-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | AccessRequestConfig
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

# Get access request configuration

try {
    Get-V2025AccessRequestConfig 
    
    # Below is a request that includes all optional parameters
    # Get-V2025AccessRequestConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025AccessRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-details-for-identity
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-entitlement-details-for-identity)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | IdentityId | **String** | True  | The identity ID.
Path   | EntitlementId | **String** | True  | The entitlement ID

### Return type
[**IdentityEntitlementDetails**](../models/identity-entitlement-details)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Entitlement and Account Reference | IdentityEntitlementDetails
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$IdentityId = "7025c863c2704ba6beeaedf3cb091573" # String | The identity ID.
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID

# Identity entitlement details

try {
    Get-V2025EntitlementDetailsForIdentity -XSailPointExperimental $XSailPointExperimental -IdentityId $IdentityId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-V2025EntitlementDetailsForIdentity -XSailPointExperimental $XSailPointExperimental -IdentityId $IdentityId -EntitlementId $EntitlementId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025EntitlementDetailsForIdentity"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-request-status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-access-request-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | RequestedFor | **String** |   (optional) | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RequestedBy | **String** |   (optional) | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RegardingIdentity | **String** |   (optional) | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | AssignedTo | **String** |   (optional) | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
  Query | Count | **Boolean** |   (optional) (default to $false) | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return.
  Query | Offset | **Int32** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**
  Query | RequestState | **String** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**RequestedItemStatus[]**](../models/requested-item-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requested item statuses. | RequestedItemStatus[]
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
$RequestedFor = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
$RequestedBy = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
$RegardingIdentity = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
$AssignedTo = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
$Count = $false # Boolean | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to $false)
$Limit = 100 # Int32 | Max number of results to return. (optional) (default to 250)
$Offset = 10 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
$Filters = 'accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
$RequestState = "request-state=EXECUTING" # String | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

# Access request status

try {
    Get-V2025AccessRequestStatus 
    
    # Below is a request that includes all optional parameters
    # Get-V2025AccessRequestStatus -RequestedFor $RequestedFor -RequestedBy $RequestedBy -RegardingIdentity $RegardingIdentity -AssignedTo $AssignedTo -Count $Count -Limit $Limit -Offset $Offset -Filters $Filters -Sorters $Sorters -RequestState $RequestState  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025AccessRequestStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-administrators-access-request-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-administrators-access-request-status)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | RequestedFor | **String** |   (optional) | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RequestedBy | **String** |   (optional) | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | RegardingIdentity | **String** |   (optional) | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | AssignedTo | **String** |   (optional) | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
  Query | Count | **Boolean** |   (optional) (default to $false) | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return.
  Query | Offset | **Int32** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId**
  Query | RequestState | **String** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**AccessRequestAdminItemStatus[]**](../models/access-request-admin-item-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requested item statuses. | AccessRequestAdminItemStatus[]
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestedFor = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
$RequestedBy = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
$RegardingIdentity = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
$AssignedTo = "2c9180877b2b6ea4017b2c545f971429" # String | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
$Count = $false # Boolean | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to $false)
$Limit = 100 # Int32 | Max number of results to return. (optional) (default to 250)
$Offset = 10 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
$Filters = 'accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional)
$RequestState = "request-state=EXECUTING" # String | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

# Access request status for administrators

try {
    Get-V2025AdministratorsAccessRequestStatus -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025AdministratorsAccessRequestStatus -XSailPointExperimental $XSailPointExperimental -RequestedFor $RequestedFor -RequestedBy $RequestedBy -RegardingIdentity $RegardingIdentity -AssignedTo $AssignedTo -Count $Count -Limit $Limit -Offset $Offset -Filters $Filters -Sorters $Sorters -RequestState $RequestState  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025AdministratorsAccessRequestStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## load-account-selections
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to fetch account information for an identity against the items in an access request.

Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/load-account-selections)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | AccountsSelectionRequest | [**AccountsSelectionRequest**](../models/accounts-selection-request) | True  | 

### Return type
[**AccountsSelectionResponse**](../models/accounts-selection-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Accounts Selection Response | AccountsSelectionResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AccountsSelectionRequest = @"{
  "requestedFor" : "2c918084660f45d6016617daa9210584",
  "clientMetadata" : {
    "requestedAppId" : "2c91808f7892918f0178b78da4a305a1",
    "requestedAppName" : "test-app"
  },
  "requestType" : "GRANT_ACCESS",
  "requestedItems" : [ {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  }, {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  }, {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  }, {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  }, {
    "clientMetadata" : {
      "requestedAppName" : "test-app",
      "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
    },
    "removeDate" : "2020-07-11T21:23:15Z",
    "comment" : "Requesting access profile for John Doe",
    "id" : "2c9180835d2e5168015d32f890ca1581",
    "type" : "ACCESS_PROFILE",
    "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
    "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
  } ]
}"@

# Get accounts selections for identity

try {
    $Result = ConvertFrom-JsonToAccountsSelectionRequest -Json $AccountsSelectionRequest
    Invoke-V2025LoadAccountSelections -XSailPointExperimental $XSailPointExperimental -AccountsSelectionRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-V2025LoadAccountSelections -XSailPointExperimental $XSailPointExperimental -AccountsSelectionRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-V2025LoadAccountSelections"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-access-request-config
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-access-request-config)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | AccessRequestConfig | [**AccessRequestConfig**](../models/access-request-config) | True  | 

### Return type
[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | AccessRequestConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$AccessRequestConfig = @"{
  "requestOnBehalfOfConfig" : {
    "allowRequestOnBehalfOfEmployeeByManager" : true,
    "allowRequestOnBehalfOfAnyoneByAnyone" : true
  },
  "approvalReminderAndEscalationConfig" : {
    "fallbackApproverRef" : {
      "name" : "Alison Ferguso",
      "id" : "5168015d32f890ca15812c9180835d2e",
      "type" : "IDENTITY",
      "email" : "alison.ferguso@identitysoon.com"
    },
    "maxReminders" : 1,
    "daysUntilEscalation" : 0,
    "daysBetweenReminders" : 0
  },
  "autoApprovalEnabled" : true,
  "entitlementRequestConfig" : {
    "accessRequestConfig" : {
      "denialCommentRequired" : false,
      "approvalSchemes" : [ {
        "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
        "approverType" : "GOVERNANCE_GROUP"
      }, {
        "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
        "approverType" : "GOVERNANCE_GROUP"
      } ],
      "reauthorizationRequired" : false,
      "requestCommentRequired" : true
    },
    "revocationRequestConfig" : {
      "approvalSchemes" : [ {
        "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
        "approverType" : "GOVERNANCE_GROUP"
      }, {
        "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
        "approverType" : "GOVERNANCE_GROUP"
      } ]
    }
  },
  "reauthorizationEnabled" : true,
  "approvalsMustBeExternal" : true
}"@

# Update access request configuration

try {
    $Result = ConvertFrom-JsonToAccessRequestConfig -Json $AccessRequestConfig
    Set-V2025AccessRequestConfig -AccessRequestConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-V2025AccessRequestConfig -AccessRequestConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2025AccessRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
