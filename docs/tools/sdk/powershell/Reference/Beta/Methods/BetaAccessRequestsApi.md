---
id: beta-access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequests', 'BetaAccessRequests'] 
slug: /tools/sdk/powershell/beta/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests', 'BetaAccessRequests']
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

Refer to [Requesting Access](https://documentation.sailpoint.com/saas/user-help/requests/requesting_access.html) for more information about access requests.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-BetaAccessRequest**](#cancel-access-request) | **POST** `/access-requests/cancel` | Cancel access request
[**Close-BetaAccessRequest**](#close-access-request) | **POST** `/access-requests/close` | Close access request
[**New-BetaAccessRequest**](#create-access-request) | **POST** `/access-requests` | Submit access request
[**Get-BetaAccessRequestConfig**](#get-access-request-config) | **GET** `/access-request-config` | Get access request configuration
[**Get-BetaAccessRequestStatus**](#list-access-request-status) | **GET** `/access-request-status` | Access request status
[**Set-BetaAccessRequestConfig**](#set-access-request-config) | **PUT** `/access-request-config` | Update access request configuration


## cancel-access-request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/beta/cancel-access-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    Suspend-BetaAccessRequest -CancelAccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-BetaAccessRequest -CancelAccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-BetaAccessRequest"
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

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/idn/docs/event-triggers/triggers/provisioning-completed/) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/beta/close-access-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    Close-BetaAccessRequest -CloseAccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Close-BetaAccessRequest -CloseAccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Close-BetaAccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-access-request
Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.

Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request
has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it doesn't return an error
if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.

It's best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can
be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) or the [Pending Access Request Approvals](https://developer.sailpoint.com/idn/api/v3/list-pending-approvals) APIs. You can also
use the [Search API](https://developer.sailpoint.com/idn/api/v3/search) to check the existing access items an identity has before submitting
an access request to ensure that you aren't requesting access that is already granted. If you use this API to request access that an identity already has, the API will ignore the request. 
These ignored requests do not display when you use the [List Access Request Status](https://developer.sailpoint.com/idn/api/v3/list-access-request-status) API.

There are two types of access request:

__GRANT_ACCESS__
* Can be requested for multiple identities in a single request.
* Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/idn/api/v3/get-access-request-config) endpoint for request configuration options.  
* Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others.
* Roles, access profiles and entitlements can be requested.
* While requesting entitlements, maximum of 25 entitlements and 10 recipients are allowed in a request.
* Now supports an alternate field 'requestedForWithRequestedItems' for users to specify account selections while requesting items where they have more than one account on the source.
 
__REVOKE_ACCESS__
* Can only be requested for a single identity at a time.
* You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning. 
* Does not support self request. Only manager can request to revoke access for their directly managed employees.
* If a `removeDate` is specified, then the access will be removed on that date and time only for roles, access profiles and entitlements.
* Roles, access profiles, and entitlements can be requested for revocation.
* Revoke requests for entitlements are limited to 1 entitlement per access request currently.
* You can specify a `removeDate` if the access doesn't already have a sunset date. The `removeDate` must be a future date, in the UTC timezone. 
* Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone.
* Now supports REVOKE_ACCESS requests for identities with multiple accounts on a single source, with the help of 'assignmentId' and 'nativeIdentity' fields. These fields should be used within the 'requestedItems' section for the revoke requests. 
* Usage of 'requestedForWithRequestedItems' field is not supported for revoke requests.


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-request)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    New-BetaAccessRequest -AccessRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaAccessRequest -AccessRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaAccessRequest"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-config
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-config)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get access request configuration

try {
    Get-BetaAccessRequestConfig 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-request-status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-request-status)

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
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**
  Query | RequestState | **String** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**RequestedItemStatus[]**](../models/requested-item-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requested item statuses. | RequestedItemStatus[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
$Filters = 'accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
$RequestState = "request-state=EXECUTING" # String | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

# Access request status

try {
    Get-BetaAccessRequestStatus 
    
    # Below is a request that includes all optional parameters
    # Get-BetaAccessRequestStatus -RequestedFor $RequestedFor -RequestedBy $RequestedBy -RegardingIdentity $RegardingIdentity -AssignedTo $AssignedTo -Count $Count -Limit $Limit -Offset $Offset -Filters $Filters -Sorters $Sorters -RequestState $RequestState  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaAccessRequestStatus"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-access-request-config
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-access-request-config)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    "requestCommentsRequired" : false,
    "deniedCommentsRequired" : false,
    "allowEntitlementRequest" : true,
    "grantRequestApprovalSchemes" : "entitlementOwner, sourceOwner, manager, workgroup:2c918084660f45d6016617daa9210584"
  },
  "reauthorizationEnabled" : true,
  "approvalsMustBeExternal" : true
}"@

# Update access request configuration

try {
    $Result = ConvertFrom-JsonToAccessRequestConfig -Json $AccessRequestConfig
    Set-BetaAccessRequestConfig -AccessRequestConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaAccessRequestConfig -AccessRequestConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaAccessRequestConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
