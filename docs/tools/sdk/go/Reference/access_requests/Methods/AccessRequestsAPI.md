---
id: v1-access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequests', 'V1AccessRequests'] 
slug: /tools/sdk/go/accessrequests/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests', 'V1AccessRequests']
---

# AccessRequestsAPI
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-bulk-access-request-v1**](#approve-bulk-access-request-v1) | **Post** `/access-request-approvals/v1/bulk-approve` | Bulk approve access request
[**cancel-access-request-in-bulk-v1**](#cancel-access-request-in-bulk-v1) | **Post** `/access-requests/v1/bulk-cancel` | Bulk cancel access request
[**cancel-access-request-v1**](#cancel-access-request-v1) | **Post** `/access-requests/v1/cancel` | Cancel access request
[**close-access-request-v1**](#close-access-request-v1) | **Post** `/access-requests/v1/close` | Close access request
[**create-access-request-v1**](#create-access-request-v1) | **Post** `/access-requests/v1` | Submit access request
[**get-access-request-config-v1**](#get-access-request-config-v1) | **Get** `/access-request-config/v1` | Get access request configuration
[**get-access-request-config-v2**](#get-access-request-config-v2) | **Get** `/access-request-config/v2` | Get access request configuration
[**get-entitlement-details-for-identity-v1**](#get-entitlement-details-for-identity-v1) | **Get** `/revocable-objects/v1` | Identity entitlement details
[**list-access-request-status-v1**](#list-access-request-status-v1) | **Get** `/access-request-status/v1` | Access request status
[**list-administrators-access-request-status-v1**](#list-administrators-access-request-status-v1) | **Get** `/access-request-administration/v1` | Access request status for administrators
[**load-account-selections-v1**](#load-account-selections-v1) | **Post** `/access-requests/v1/accounts-selection` | Get accounts selections for identity
[**set-access-request-config-v1**](#set-access-request-config-v1) | **Put** `/access-request-config/v1` | Update access request configuration
[**set-access-request-config-v2**](#set-access-request-config-v2) | **Put** `/access-request-config/v2` | Update access request configuration


## approve-bulk-access-request-v1
Bulk approve access request
This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights "idn:access-request-administration:write" can approve the access requests in bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-bulk-access-request-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApproveBulkAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkapproveaccessrequest** | [**Bulkapproveaccessrequest**](../models/bulkapproveaccessrequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    bulkapproveaccessrequest := []byte(`{"accessRequestIds":["2c91808568c529c60168cca6f90c1313","2c91808568c529c60168cca6f90c1314"],"comment":"I approve these request items"}`) // Bulkapproveaccessrequest | 

    var bulkapproveaccessrequest v1.Bulkapproveaccessrequest
    if err := json.Unmarshal(bulkapproveaccessrequest, &bulkapproveaccessrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.ApproveBulkAccessRequestV1(context.Background()).Bulkapproveaccessrequest(bulkapproveaccessrequest).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.ApproveBulkAccessRequestV1(context.Background()).Bulkapproveaccessrequest(bulkapproveaccessrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ApproveBulkAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveBulkAccessRequestV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ApproveBulkAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-access-request-in-bulk-v1
Bulk cancel access request
This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation. 
Only ORG_ADMIN or users with rights "idn:access-request-administration:write" can cancel the access requests in  bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-access-request-in-bulk-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelAccessRequestInBulkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkcancelaccessrequest** | [**Bulkcancelaccessrequest**](../models/bulkcancelaccessrequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    bulkcancelaccessrequest := []byte(`{"accessRequestIds":["2c91808568c529c60168cca6f90c1313","2c91808568c529c60168cca6f90c1314"],"comment":"I requested this role by mistake."}`) // Bulkcancelaccessrequest | 

    var bulkcancelaccessrequest v1.Bulkcancelaccessrequest
    if err := json.Unmarshal(bulkcancelaccessrequest, &bulkcancelaccessrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.CancelAccessRequestInBulkV1(context.Background()).Bulkcancelaccessrequest(bulkcancelaccessrequest).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.CancelAccessRequestInBulkV1(context.Background()).Bulkcancelaccessrequest(bulkcancelaccessrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CancelAccessRequestInBulkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelAccessRequestInBulkV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CancelAccessRequestInBulkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-access-request-v1
Cancel access request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-access-request-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cancelaccessrequest** | [**Cancelaccessrequest**](../models/cancelaccessrequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    cancelaccessrequest := []byte(`{"accountActivityId":"2c91808568c529c60168cca6f90c1313","comment":"I requested this role by mistake."}`) // Cancelaccessrequest | 

    var cancelaccessrequest v1.Cancelaccessrequest
    if err := json.Unmarshal(cancelaccessrequest, &cancelaccessrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.CancelAccessRequestV1(context.Background()).Cancelaccessrequest(cancelaccessrequest).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.CancelAccessRequestV1(context.Background()).Cancelaccessrequest(cancelaccessrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CancelAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelAccessRequestV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CancelAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## close-access-request-v1
Close access request
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed/) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/v1/close-access-request-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCloseAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **closeaccessrequest** | [**Closeaccessrequest**](../models/closeaccessrequest) |  | 

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    closeaccessrequest := []byte(`{"accessRequestIds":["2c90ad2a70ace7d50170acf22ca90010"],"executionStatus":"Terminated","completionStatus":"Failure","message":"The IdentityNow Administrator manually closed this request."}`) // Closeaccessrequest | 

    var closeaccessrequest v1.Closeaccessrequest
    if err := json.Unmarshal(closeaccessrequest, &closeaccessrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.CloseAccessRequestV1(context.Background()).Closeaccessrequest(closeaccessrequest).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.CloseAccessRequestV1(context.Background()).Closeaccessrequest(closeaccessrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CloseAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CloseAccessRequestV1`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CloseAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-access-request-v1
Submit access request
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

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateAccessRequestV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessrequest** | [**Accessrequest**](../models/accessrequest) |  | 

### Return type

[**Accessrequestresponse**](../models/accessrequestresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    accessrequest := []byte(``) // Accessrequest | 

    var accessrequest v1.Accessrequest
    if err := json.Unmarshal(accessrequest, &accessrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.CreateAccessRequestV1(context.Background()).Accessrequest(accessrequest).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.CreateAccessRequestV1(context.Background()).Accessrequest(accessrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CreateAccessRequestV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateAccessRequestV1`: Accessrequestresponse
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CreateAccessRequestV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-config-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Get access request configuration
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-config-v1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestConfigV1Request struct via the builder pattern


### Return type

[**Accessrequestconfig**](../models/accessrequestconfig)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.GetAccessRequestConfigV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.GetAccessRequestConfigV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.GetAccessRequestConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestConfigV1`: Accessrequestconfig
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.GetAccessRequestConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-access-request-config-v2
Get access request configuration
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-config-v2)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccessRequestConfigV2Request struct via the builder pattern


### Return type

[**Accessrequestconfigv2**](../models/accessrequestconfigv2)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.GetAccessRequestConfigV2(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.GetAccessRequestConfigV2(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.GetAccessRequestConfigV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestConfigV2`: Accessrequestconfigv2
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.GetAccessRequestConfigV2`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-details-for-identity-v1
Identity entitlement details
Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-details-for-identity-v1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | The identity ID. | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementDetailsForIdentityV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



### Return type

[**Identityentitlementdetails**](../models/identityentitlementdetails)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    identityId := `7025c863c2704ba6beeaedf3cb091573` // string | The identity ID. # string | The identity ID.
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.GetEntitlementDetailsForIdentityV1(context.Background(), identityId, entitlementId).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.GetEntitlementDetailsForIdentityV1(context.Background(), identityId, entitlementId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.GetEntitlementDetailsForIdentityV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementDetailsForIdentityV1`: Identityentitlementdetails
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.GetEntitlementDetailsForIdentityV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-request-status-v1
Access request status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-request-status-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAccessRequestStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestedFor** | **string** | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **requestedBy** | **string** | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **regardingIdentity** | **string** | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | 
 **assignedTo** | **string** | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. | 
 **count** | **bool** | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [default to false]
 **limit** | **int32** | Max number of results to return. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** | 
 **requestState** | **string** | Filter the results by the state of the request. The only valid value is *EXECUTING*. | 

### Return type

[**[]Requesteditemstatus**](../models/requesteditemstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    requestedFor := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requestedBy := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regardingIdentity := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assignedTo := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count := false // bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)
    limit := 100 // int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters := `accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
    requestState := `request-state=EXECUTING` // string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.ListAccessRequestStatusV1(context.Background()).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.ListAccessRequestStatusV1(context.Background()).RequestedFor(requestedFor).RequestedBy(requestedBy).RegardingIdentity(regardingIdentity).AssignedTo(assignedTo).Count(count).Limit(limit).Offset(offset).Filters(filters).Sorters(sorters).RequestState(requestState).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ListAccessRequestStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessRequestStatusV1`: []Requesteditemstatus
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ListAccessRequestStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-administrators-access-request-status-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Access request status for administrators
Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-administrators-access-request-status-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAdministratorsAccessRequestStatusV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **requestedFor** | **string** | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **requestedBy** | **string** | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. | 
 **regardingIdentity** | **string** | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. | 
 **assignedTo** | **string** | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. | 
 **count** | **bool** | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [default to false]
 **limit** | **int32** | Max number of results to return. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** | 
 **requestState** | **string** | Filter the results by the state of the request. The only valid value is *EXECUTING*. | 

### Return type

[**[]Accessrequestadminitemstatus**](../models/accessrequestadminitemstatus)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestedFor := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requestedBy := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regardingIdentity := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assignedTo := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count := false // bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)
    limit := 100 // int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters := `accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional)
    requestState := `request-state=EXECUTING` // string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.ListAdministratorsAccessRequestStatusV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.ListAdministratorsAccessRequestStatusV1(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestedFor(requestedFor).RequestedBy(requestedBy).RegardingIdentity(regardingIdentity).AssignedTo(assignedTo).Count(count).Limit(limit).Offset(offset).Filters(filters).Sorters(sorters).RequestState(requestState).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ListAdministratorsAccessRequestStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAdministratorsAccessRequestStatusV1`: []Accessrequestadminitemstatus
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ListAdministratorsAccessRequestStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## load-account-selections-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get accounts selections for identity
Use this API to fetch account information for an identity against the items in an access request.

Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.


[API Spec](https://developer.sailpoint.com/docs/api/v1/load-account-selections-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLoadAccountSelectionsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accountsselectionrequest** | [**Accountsselectionrequest**](../models/accountsselectionrequest) |  | 

### Return type

[**Accountsselectionresponse**](../models/accountsselectionresponse)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accountsselectionrequest := []byte(``) // Accountsselectionrequest | 

    var accountsselectionrequest v1.Accountsselectionrequest
    if err := json.Unmarshal(accountsselectionrequest, &accountsselectionrequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.LoadAccountSelectionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Accountsselectionrequest(accountsselectionrequest).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.LoadAccountSelectionsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Accountsselectionrequest(accountsselectionrequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.LoadAccountSelectionsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LoadAccountSelectionsV1`: Accountsselectionresponse
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.LoadAccountSelectionsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-access-request-config-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Update access request configuration
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-access-request-config-v1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetAccessRequestConfigV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessrequestconfig** | [**Accessrequestconfig**](../models/accessrequestconfig) |  | 

### Return type

[**Accessrequestconfig**](../models/accessrequestconfig)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    accessrequestconfig := []byte(``) // Accessrequestconfig | 

    var accessrequestconfig v1.Accessrequestconfig
    if err := json.Unmarshal(accessrequestconfig, &accessrequestconfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.SetAccessRequestConfigV1(context.Background()).Accessrequestconfig(accessrequestconfig).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.SetAccessRequestConfigV1(context.Background()).Accessrequestconfig(accessrequestconfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.SetAccessRequestConfigV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetAccessRequestConfigV1`: Accessrequestconfig
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.SetAccessRequestConfigV1`: %v\n", resp)
}
```

[[Back to top]](#)

## set-access-request-config-v2
Update access request configuration
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-access-request-config-v2)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetAccessRequestConfigV2Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accessrequestconfigv2** | [**Accessrequestconfigv2**](../models/accessrequestconfigv2) |  | 

### Return type

[**Accessrequestconfigv2**](../models/accessrequestconfigv2)

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
    v1 "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3/access_requests"
)

func main() {
    accessrequestconfigv2 := []byte(``) // Accessrequestconfigv2 | 

    var accessrequestconfigv2 v1.Accessrequestconfigv2
    if err := json.Unmarshal(accessrequestconfigv2, &accessrequestconfigv2); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.AccessRequestsAPI.SetAccessRequestConfigV2(context.Background()).Accessrequestconfigv2(accessrequestconfigv2).Execute()
	  //resp, r, err := apiClient.AccessRequestsAPI.SetAccessRequestConfigV2(context.Background()).Accessrequestconfigv2(accessrequestconfigv2).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.SetAccessRequestConfigV2``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetAccessRequestConfigV2`: Accessrequestconfigv2
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.SetAccessRequestConfigV2`: %v\n", resp)
}
```

[[Back to top]](#)

