---
id: beta-access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequests', 'BetaAccessRequests'] 
slug: /tools/sdk/go/beta/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests', 'BetaAccessRequests']
---

# \AccessRequestsAPI
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
[**cancel-access-request**](#cancel-access-request) | **Post** `/access-requests/cancel` | Cancel Access Request
[**close-access-request**](#close-access-request) | **Post** `/access-requests/close` | Close Access Request
[**create-access-request**](#create-access-request) | **Post** `/access-requests` | Submit Access Request
[**get-access-request-config**](#get-access-request-config) | **Get** `/access-request-config` | Get Access Request Configuration
[**list-access-request-status**](#list-access-request-status) | **Get** `/access-request-status` | Access Request Status
[**set-access-request-config**](#set-access-request-config) | **Put** `/access-request-config` | Update Access Request Configuration


## cancel-access-request
Cancel Access Request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/beta/cancel-access-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelAccessRequest** | [**CancelAccessRequest**](../models/cancel-access-request) |  | 

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    cancelAccessRequest := fmt.Sprintf(`{
          "accountActivityId" : "2c9180835d2e5168015d32f890ca1581",
          "comment" : "I requested this role by mistake."
        }`) # CancelAccessRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.AccessRequestsAPI.CancelAccessRequest(context.Background()).CancelAccessRequest(cancelAccessRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CancelAccessRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CancelAccessRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CancelAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## close-access-request
Close Access Request
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/idn/docs/event-triggers/triggers/provisioning-completed/) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/beta/close-access-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCloseAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeAccessRequest** | [**CloseAccessRequest**](../models/close-access-request) |  | 

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    closeAccessRequest := fmt.Sprintf(`{
          "executionStatus" : "Terminated",
          "accessRequestIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
          "completionStatus" : "Failure",
          "message" : "The IdentityNow Administrator manually closed this request."
        }`) # CloseAccessRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.AccessRequestsAPI.CloseAccessRequest(context.Background()).CloseAccessRequest(closeAccessRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CloseAccessRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CloseAccessRequest`: map[string]interface{}
	fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CloseAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## create-access-request
Submit Access Request
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
 
__REVOKE_ACCESS__
* Can only be requested for a single identity at a time.
* You cannot use an access request to revoke access from an identity if that access has been granted by role membership or by birthright provisioning. 
* Does not support self request. Only manager can request to revoke access for their directly managed employees.
* If a `removeDate` is specified, then the access will be removed on that date and time only for roles, access profiles and entitlements.
* Roles, access profiles, and entitlements can be requested for revocation.
* Revoke requests for entitlements are limited to 1 entitlement per access request currently.
* You can specify a `removeDate` if the access doesn't already have a sunset date. The `removeDate` must be a future date, in the UTC timezone. 
* Allows a manager to request to revoke access for direct employees. A user with ORG_ADMIN authority can also request to revoke access from anyone.


[API Spec](https://developer.sailpoint.com/docs/api/beta/create-access-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequest** | [**AccessRequest**](../models/access-request) |  | 

### Return type

[**AccessRequestResponse**](../models/access-request-response)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessRequest := fmt.Sprintf(`{
          "requestedFor" : [ "2c918084660f45d6016617daa9210584", "2c918084660f45d6016617daa9210584" ],
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
            "type" : "ACCESS_PROFILE"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "type" : "ACCESS_PROFILE"
          } ]
        }`) # AccessRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.AccessRequestsAPI.CreateAccessRequest(context.Background()).AccessRequest(accessRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CreateAccessRequest``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateAccessRequest`: AccessRequestResponse
	fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CreateAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-config
Get Access Request Configuration
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-config)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestConfigRequest struct via the builder pattern


### Return type

[**AccessRequestConfig**](../models/access-request-config)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.AccessRequestsAPI.GetAccessRequestConfig(context.Background()).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.GetAccessRequestConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetAccessRequestConfig`: AccessRequestConfig
	fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.GetAccessRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-request-status
Access Request Status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-access-request-status)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessRequestStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **requestedBy** | **string** | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **regardingIdentity** | **string** | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | 
 **assignedTo** | **string** | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. | 
 **count** | **bool** | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [default to false]
 **limit** | **int32** | Max number of results to return. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** | 
 **requestState** | **string** | Filter the results by the state of the request. The only valid value is *EXECUTING*. | 

### Return type

[**[]RequestedItemStatus**](../models/requested-item-status)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestedFor := 2c9180877b2b6ea4017b2c545f971429 # string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requestedBy := 2c9180877b2b6ea4017b2c545f971429 # string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regardingIdentity := 2c9180877b2b6ea4017b2c545f971429 # string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assignedTo := 2c9180877b2b6ea4017b2c545f971429 # string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count := false # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)
    limit := 100 # int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters := accountActivityItemId eq "2c918086771c86df0177401efcdf54c0" # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *in*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters := created # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
    requestState := request-state=EXECUTING # string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.AccessRequestsAPI.ListAccessRequestStatus(context.Background()).RequestedFor(requestedFor).RequestedBy(requestedBy).RegardingIdentity(regardingIdentity).AssignedTo(assignedTo).Count(count).Limit(limit).Offset(offset).Filters(filters).Sorters(sorters).RequestState(requestState).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ListAccessRequestStatus``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListAccessRequestStatus`: []RequestedItemStatus
	fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ListAccessRequestStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## set-access-request-config
Update Access Request Configuration
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-access-request-config)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetAccessRequestConfigRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessRequestConfig** | [**AccessRequestConfig**](../models/access-request-config) |  | 

### Return type

[**AccessRequestConfig**](../models/access-request-config)

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
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessRequestConfig := fmt.Sprintf(`{
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
        }`) # AccessRequestConfig | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient.AccessRequestsAPI.SetAccessRequestConfig(context.Background()).AccessRequestConfig(accessRequestConfig).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.SetAccessRequestConfig``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SetAccessRequestConfig`: AccessRequestConfig
	fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.SetAccessRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

