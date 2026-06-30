---
id: access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequests', 'AccessRequests'] 
slug: /tools/sdk/powershell/accessrequests/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests', 'AccessRequests']
---

# AccessRequests
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Approve-BulkAccessRequestV1**](#approve-bulk-access-request-v1) | **POST** `/access-request-approvals/v1/bulk-approve` | Bulk approve access request
[**Suspend-AccessRequestInBulkV1**](#cancel-access-request-in-bulk-v1) | **POST** `/access-requests/v1/bulk-cancel` | Bulk cancel access request
[**Suspend-AccessRequestV1**](#cancel-access-request-v1) | **POST** `/access-requests/v1/cancel` | Cancel access request
[**Close-AccessRequestV1**](#close-access-request-v1) | **POST** `/access-requests/v1/close` | Close access request
[**New-AccessRequestV1**](#create-access-request-v1) | **POST** `/access-requests/v1` | Submit access request
[**Get-AccessRequestConfigV1**](#get-access-request-config-v1) | **GET** `/access-request-config/v1` | Get access request configuration
[**Get-AccessRequestConfigV2**](#get-access-request-config-v2) | **GET** `/access-request-config/v2` | Get access request configuration
[**Get-EntitlementDetailsForIdentityV1**](#get-entitlement-details-for-identity-v1) | **GET** `/revocable-objects/v1` | Identity entitlement details
[**Get-AccessRequestStatusV1**](#list-access-request-status-v1) | **GET** `/access-request-status/v1` | Access request status
[**Get-AdministratorsAccessRequestStatusV1**](#list-administrators-access-request-status-v1) | **GET** `/access-request-administration/v1` | Access request status for administrators
[**Invoke-LoadAccountSelectionsV1**](#load-account-selections-v1) | **POST** `/access-requests/v1/accounts-selection` | Get accounts selections for identity
[**Set-AccessRequestConfigV1**](#set-access-request-config-v1) | **PUT** `/access-request-config/v1` | Update access request configuration
[**Set-AccessRequestConfigV2**](#set-access-request-config-v2) | **PUT** `/access-request-config/v2` | Update access request configuration


## approve-bulk-access-request-v1
This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights "idn:access-request-administration:write" can approve the access requests in bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-bulk-access-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Bulkapproveaccessrequest | [**Bulkapproveaccessrequest**](../models/bulkapproveaccessrequest) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Bulkapproveaccessrequest = @"{"accessRequestIds":["2c91808568c529c60168cca6f90c1313","2c91808568c529c60168cca6f90c1314"],"comment":"I approve these request items"}"@

# Bulk approve access request

try {
    $Result = ConvertFrom-JsonToBulkapproveaccessrequest -Json $Bulkapproveaccessrequest
    Approve-BulkAccessRequestV1 -Bulkapproveaccessrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Approve-BulkAccessRequestV1 -Bulkapproveaccessrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Approve-BulkAccessRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-access-request-in-bulk-v1
This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation. 
Only ORG_ADMIN or users with rights "idn:access-request-administration:write" can cancel the access requests in  bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-access-request-in-bulk-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Bulkcancelaccessrequest | [**Bulkcancelaccessrequest**](../models/bulkcancelaccessrequest) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Bulkcancelaccessrequest = @"{"accessRequestIds":["2c91808568c529c60168cca6f90c1313","2c91808568c529c60168cca6f90c1314"],"comment":"I requested this role by mistake."}"@

# Bulk cancel access request

try {
    $Result = ConvertFrom-JsonToBulkcancelaccessrequest -Json $Bulkcancelaccessrequest
    Suspend-AccessRequestInBulkV1 -Bulkcancelaccessrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-AccessRequestInBulkV1 -Bulkcancelaccessrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-AccessRequestInBulkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## cancel-access-request-v1
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-access-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Cancelaccessrequest | [**Cancelaccessrequest**](../models/cancelaccessrequest) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Cancelaccessrequest = @"{"accountActivityId":"2c91808568c529c60168cca6f90c1313","comment":"I requested this role by mistake."}"@

# Cancel access request

try {
    $Result = ConvertFrom-JsonToCancelaccessrequest -Json $Cancelaccessrequest
    Suspend-AccessRequestV1 -Cancelaccessrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Suspend-AccessRequestV1 -Cancelaccessrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-AccessRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## close-access-request-v1
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed/) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/v1/close-access-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Closeaccessrequest | [**Closeaccessrequest**](../models/closeaccessrequest) | True  | 

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted - Returned if the request was successfully accepted into the system. | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Closeaccessrequest = @"{"accessRequestIds":["2c90ad2a70ace7d50170acf22ca90010"],"executionStatus":"Terminated","completionStatus":"Failure","message":"The IdentityNow Administrator manually closed this request."}"@

# Close access request

try {
    $Result = ConvertFrom-JsonToCloseaccessrequest -Json $Closeaccessrequest
    Close-AccessRequestV1 -Closeaccessrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Close-AccessRequestV1 -Closeaccessrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Close-AccessRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-access-request-v1
Use this API to submit an access request in Identity Security Cloud (ISC), where it follows any ISC approval processes.

>**Security:** idn:access-request:manage is for ORG_ADMIN level. idn:access-request-self:manage is for USER level.

:::info
The ability to request access using this API is constrained by the Access Request Segments defined in the API token's user context.
:::

Access requests are processed asynchronously by ISC. A successful response from this endpoint means that the request
has been submitted to ISC and is queued for processing. Because this endpoint is asynchronous, it does not return an error
if you submit duplicate access requests in quick succession or submit an access request for access that is already in progress, approved, or rejected.

It is best practice to check for any existing access requests that reference the same access items before submitting a new access request. This can
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
* You can specify a `startDate` to set or alter a sunrise date-time on an assignment. The startDate must be a future date-time, in the UTC timezone. Additionally, if the user already has the access assigned with a sunrise date and its yet to be provisioned, you can also submit a request without a `startDate` to request immediate provisioning after approval.
* If a `startDate` is specified, then the requested role, access profile, or entitlement will be provisioned on that date and time.
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
* You cannot specify a 'startDate' in a REVOKE_ACCESS request, as startDate is only applicable for GRANT_ACCESS requests to indicate when the access should be provisioned, and it does not make sense in the context of revoking access.
* You can specify a `removeDate` to add or alter a sunset date and time on an assignment. The `removeDate` must be a future date-time, in the UTC timezone. If the user already has the access assigned with a sunset date and time, the removeDate must be a date-time earlier than the existing sunset date and time. 
* Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone.
* Now supports REVOKE_ACCESS requests for identities with multiple accounts on a single source, with the help of 'assignmentId' and 'nativeIdentity' fields. These fields should be used within the 'requestedItems' section for the revoke requests. 
* Usage of 'requestedForWithRequestedItems' field is not supported for revoke requests.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-access-request-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Accessrequest | [**Accessrequest**](../models/accessrequest) | True  | 

### Return type
[**Accessrequestresponse**](../models/accessrequestresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Access Request Response. | Accessrequestresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Accessrequest = @""@

# Submit access request

try {
    $Result = ConvertFrom-JsonToAccessrequest -Json $Accessrequest
    New-AccessRequestV1 -Accessrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-AccessRequestV1 -Accessrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-AccessRequestV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-config-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Accessrequestconfig**](../models/accessrequestconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | Accessrequestconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get access request configuration

try {
    Get-AccessRequestConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-access-request-config-v2
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-config-v2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Accessrequestconfigv2**](../models/accessrequestconfigv2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | Accessrequestconfigv2
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get access request configuration

try {
    Get-AccessRequestConfigV2 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestConfigV2  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestConfigV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-entitlement-details-for-identity-v1
Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-details-for-identity-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The identity ID.
Path   | EntitlementId | **String** | True  | The entitlement ID

### Return type
[**Identityentitlementdetails**](../models/identityentitlementdetails)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Entitlement and Account Reference | Identityentitlementdetails
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "7025c863c2704ba6beeaedf3cb091573" # String | The identity ID.
$EntitlementId = "ef38f94347e94562b5bb8424a56397d8" # String | The entitlement ID

# Identity entitlement details

try {
    Get-EntitlementDetailsForIdentityV1 -IdentityId $IdentityId -EntitlementId $EntitlementId 
    
    # Below is a request that includes all optional parameters
    # Get-EntitlementDetailsForIdentityV1 -IdentityId $IdentityId -EntitlementId $EntitlementId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EntitlementDetailsForIdentityV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-access-request-status-v1
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-request-status-v1)

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
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**
  Query | RequestState | **String** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**Requesteditemstatus[]**](../models/requesteditemstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requested item statuses. | Requesteditemstatus[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
$Filters = 'accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
$RequestState = "request-state=EXECUTING" # String | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

# Access request status

try {
    Get-AccessRequestStatusV1 
    
    # Below is a request that includes all optional parameters
    # Get-AccessRequestStatusV1 -RequestedFor $RequestedFor -RequestedBy $RequestedBy -RegardingIdentity $RegardingIdentity -AssignedTo $AssignedTo -Count $Count -Limit $Limit -Offset $Offset -Filters $Filters -Sorters $Sorters -RequestState $RequestState  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AccessRequestStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-administrators-access-request-status-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-administrators-access-request-status-v1)

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
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId**
  Query | RequestState | **String** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**Accessrequestadminitemstatus[]**](../models/accessrequestadminitemstatus)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of requested item statuses. | Accessrequestadminitemstatus[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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
$Filters = 'accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
$Sorters = "created" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional)
$RequestState = "request-state=EXECUTING" # String | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

# Access request status for administrators

try {
    Get-AdministratorsAccessRequestStatusV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-AdministratorsAccessRequestStatusV1 -XSailPointExperimental $XSailPointExperimental -RequestedFor $RequestedFor -RequestedBy $RequestedBy -RegardingIdentity $RegardingIdentity -AssignedTo $AssignedTo -Count $Count -Limit $Limit -Offset $Offset -Filters $Filters -Sorters $Sorters -RequestState $RequestState  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-AdministratorsAccessRequestStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## load-account-selections-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to fetch account information for an identity against the items in an access request.

Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.


[API Spec](https://developer.sailpoint.com/docs/api/v1/load-account-selections-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Accountsselectionrequest | [**Accountsselectionrequest**](../models/accountsselectionrequest) | True  | 

### Return type
[**Accountsselectionresponse**](../models/accountsselectionresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Accounts Selection Response | Accountsselectionresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Accountsselectionrequest = @""@

# Get accounts selections for identity

try {
    $Result = ConvertFrom-JsonToAccountsselectionrequest -Json $Accountsselectionrequest
    Invoke-LoadAccountSelectionsV1 -XSailPointExperimental $XSailPointExperimental -Accountsselectionrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-LoadAccountSelectionsV1 -XSailPointExperimental $XSailPointExperimental -Accountsselectionrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-LoadAccountSelectionsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-access-request-config-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-access-request-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Accessrequestconfig | [**Accessrequestconfig**](../models/accessrequestconfig) | True  | 

### Return type
[**Accessrequestconfig**](../models/accessrequestconfig)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | Accessrequestconfig
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Accessrequestconfig = @""@

# Update access request configuration

try {
    $Result = ConvertFrom-JsonToAccessrequestconfig -Json $Accessrequestconfig
    Set-AccessRequestConfigV1 -Accessrequestconfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-AccessRequestConfigV1 -Accessrequestconfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-AccessRequestConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-access-request-config-v2
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-access-request-config-v2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Accessrequestconfigv2 | [**Accessrequestconfigv2**](../models/accessrequestconfigv2) | True  | 

### Return type
[**Accessrequestconfigv2**](../models/accessrequestconfigv2)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Access Request Configuration Details. | Accessrequestconfigv2
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Accessrequestconfigv2 = @""@

# Update access request configuration

try {
    $Result = ConvertFrom-JsonToAccessrequestconfigv2 -Json $Accessrequestconfigv2
    Set-AccessRequestConfigV2 -Accessrequestconfigv2 $Result 
    
    # Below is a request that includes all optional parameters
    # Set-AccessRequestConfigV2 -Accessrequestconfigv2 $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-AccessRequestConfigV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
