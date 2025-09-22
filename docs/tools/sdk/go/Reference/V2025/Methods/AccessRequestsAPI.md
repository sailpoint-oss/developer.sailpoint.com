---
id: v2025-access-requests
title: AccessRequests
pagination_label: AccessRequests
sidebar_label: AccessRequests
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequests', 'V2025AccessRequests'] 
slug: /tools/sdk/go/v2025/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'AccessRequests', 'V2025AccessRequests']
---

# AccessRequestsAPI
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
[**approve-bulk-access-request**](#approve-bulk-access-request) | **Post** `/access-request-approvals/bulk-approve` | Bulk approve access request
[**cancel-access-request**](#cancel-access-request) | **Post** `/access-requests/cancel` | Cancel access request
[**cancel-access-request-in-bulk**](#cancel-access-request-in-bulk) | **Post** `/access-requests/bulk-cancel` | Bulk cancel access request
[**close-access-request**](#close-access-request) | **Post** `/access-requests/close` | Close access request
[**create-access-request**](#create-access-request) | **Post** `/access-requests` | Submit access request
[**get-access-request-config**](#get-access-request-config) | **Get** `/access-request-config` | Get access request configuration
[**get-entitlement-details-for-identity**](#get-entitlement-details-for-identity) | **Get** `/revocable-objects` | Identity entitlement details
[**list-access-request-status**](#list-access-request-status) | **Get** `/access-request-status` | Access request status
[**list-administrators-access-request-status**](#list-administrators-access-request-status) | **Get** `/access-request-administration` | Access request status for administrators
[**load-account-selections**](#load-account-selections) | **Post** `/access-requests/accounts-selection` | Get accounts selections for identity
[**set-access-request-config**](#set-access-request-config) | **Put** `/access-request-config` | Update access request configuration


## approve-bulk-access-request
Bulk approve access request
This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights "idn:access-request-administration:write" can approve the access requests in bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-bulk-access-request)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApproveBulkAccessRequestRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkApproveAccessRequest** | [**BulkApproveAccessRequest**](../models/bulk-approve-access-request) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkapproveaccessrequest := []byte(`{
          "comment" : "I approve these request items",
          "approvalIds" : [ "2c9180835d2e5168015d32f890ca1581", "2c9180835d2e5168015d32f890ca1582" ]
        }`) // BulkApproveAccessRequest | 

    var bulkApproveAccessRequest v2025.BulkApproveAccessRequest
    if err := json.Unmarshal(bulkapproveaccessrequest, &bulkApproveAccessRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.ApproveBulkAccessRequest(context.Background()).BulkApproveAccessRequest(bulkApproveAccessRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.ApproveBulkAccessRequest(context.Background()).BulkApproveAccessRequest(bulkApproveAccessRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ApproveBulkAccessRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ApproveBulkAccessRequest`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ApproveBulkAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-access-request
Cancel access request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-access-request)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    cancelaccessrequest := []byte(`{
          "accountActivityId" : "2c9180835d2e5168015d32f890ca1581",
          "comment" : "I requested this role by mistake."
        }`) // CancelAccessRequest | 

    var cancelAccessRequest v2025.CancelAccessRequest
    if err := json.Unmarshal(cancelaccessrequest, &cancelAccessRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.CancelAccessRequest(context.Background()).CancelAccessRequest(cancelAccessRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.CancelAccessRequest(context.Background()).CancelAccessRequest(cancelAccessRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CancelAccessRequest``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelAccessRequest`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CancelAccessRequest`: %v\n", resp)
}
```

[[Back to top]](#)

## cancel-access-request-in-bulk
Bulk cancel access request
This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation. 
Only ORG_ADMIN or users with rights "idn:access-request-administration:write" can cancel the access requests in  bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/cancel-access-request-in-bulk)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCancelAccessRequestInBulkRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bulkCancelAccessRequest** | [**BulkCancelAccessRequest**](../models/bulk-cancel-access-request) |  | 

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    bulkcancelaccessrequest := []byte(`{
          "accessRequestIds" : [ "2c9180835d2e5168015d32f890ca1581", "2c9180835d2e5168015d32f890ca1582" ],
          "comment" : "I requested this role by mistake."
        }`) // BulkCancelAccessRequest | 

    var bulkCancelAccessRequest v2025.BulkCancelAccessRequest
    if err := json.Unmarshal(bulkcancelaccessrequest, &bulkCancelAccessRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.CancelAccessRequestInBulk(context.Background()).BulkCancelAccessRequest(bulkCancelAccessRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.CancelAccessRequestInBulk(context.Background()).BulkCancelAccessRequest(bulkCancelAccessRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.CancelAccessRequestInBulk``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CancelAccessRequestInBulk`: map[string]interface{}
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.CancelAccessRequestInBulk`: %v\n", resp)
}
```

[[Back to top]](#)

## close-access-request
Close access request
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/close-access-request)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    closeaccessrequest := []byte(`{
          "executionStatus" : "Terminated",
          "accessRequestIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
          "completionStatus" : "Failure",
          "message" : "The IdentityNow Administrator manually closed this request."
        }`) // CloseAccessRequest | 

    var closeAccessRequest v2025.CloseAccessRequest
    if err := json.Unmarshal(closeaccessrequest, &closeAccessRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.CloseAccessRequest(context.Background()).CloseAccessRequest(closeAccessRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.CloseAccessRequest(context.Background()).CloseAccessRequest(closeAccessRequest).Execute()
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
Submit access request
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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessrequest := []byte(`{
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
        }`) // AccessRequest | 

    var accessRequest v2025.AccessRequest
    if err := json.Unmarshal(accessrequest, &accessRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.CreateAccessRequest(context.Background()).AccessRequest(accessRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.CreateAccessRequest(context.Background()).AccessRequest(accessRequest).Execute()
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
Get access request configuration
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-access-request-config)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.GetAccessRequestConfig(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.GetAccessRequestConfig(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.GetAccessRequestConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccessRequestConfig`: AccessRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.GetAccessRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

## get-entitlement-details-for-identity
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Identity entitlement details
Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-entitlement-details-for-identity)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**identityId** | **string** | The identity ID. | 
**entitlementId** | **string** | The entitlement ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEntitlementDetailsForIdentityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]



### Return type

[**IdentityEntitlementDetails**](../models/identity-entitlement-details)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    identityId := `7025c863c2704ba6beeaedf3cb091573` // string | The identity ID. # string | The identity ID.
    entitlementId := `ef38f94347e94562b5bb8424a56397d8` // string | The entitlement ID # string | The entitlement ID

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.GetEntitlementDetailsForIdentity(context.Background(), identityId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.GetEntitlementDetailsForIdentity(context.Background(), identityId, entitlementId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.GetEntitlementDetailsForIdentity``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEntitlementDetailsForIdentity`: IdentityEntitlementDetails
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.GetEntitlementDetailsForIdentity`: %v\n", resp)
}
```

[[Back to top]](#)

## list-access-request-status
Access request status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-access-request-status)

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
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* | 
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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    requestedFor := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requestedBy := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regardingIdentity := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assignedTo := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count := false // bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)
    limit := 100 // int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters := `accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
    requestState := `request-state=EXECUTING` // string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.ListAccessRequestStatus(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.ListAccessRequestStatus(context.Background()).RequestedFor(requestedFor).RequestedBy(requestedBy).RegardingIdentity(regardingIdentity).AssignedTo(assignedTo).Count(count).Limit(limit).Offset(offset).Filters(filters).Sorters(sorters).RequestState(requestState).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ListAccessRequestStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAccessRequestStatus`: []RequestedItemStatus
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ListAccessRequestStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## list-administrators-access-request-status
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Access request status for administrators
Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-administrators-access-request-status)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListAdministratorsAccessRequestStatusRequest struct via the builder pattern


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
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* | 
 **sorters** | **string** | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** | 
 **requestState** | **string** | Filter the results by the state of the request. The only valid value is *EXECUTING*. | 

### Return type

[**[]AccessRequestAdminItemStatus**](../models/access-request-admin-item-status)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    requestedFor := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requestedBy := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # string | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regardingIdentity := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # string | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assignedTo := `2c9180877b2b6ea4017b2c545f971429` // string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # string | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count := false // bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to false)
    limit := 100 // int32 | Max number of results to return. (optional) (default to 250) # int32 | Max number of results to return. (optional) (default to 250)
    offset := 10 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters := `accountActivityItemId eq "2c918086771c86df0177401efcdf54c0"` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters := `created` // string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional) # string | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional)
    requestState := `request-state=EXECUTING` // string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # string | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.ListAdministratorsAccessRequestStatus(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.ListAdministratorsAccessRequestStatus(context.Background()).XSailPointExperimental(xSailPointExperimental).RequestedFor(requestedFor).RequestedBy(requestedBy).RegardingIdentity(regardingIdentity).AssignedTo(assignedTo).Count(count).Limit(limit).Offset(offset).Filters(filters).Sorters(sorters).RequestState(requestState).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.ListAdministratorsAccessRequestStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListAdministratorsAccessRequestStatus`: []AccessRequestAdminItemStatus
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.ListAdministratorsAccessRequestStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## load-account-selections
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get accounts selections for identity
Use this API to fetch account information for an identity against the items in an access request.

Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.


[API Spec](https://developer.sailpoint.com/docs/api/v2025/load-account-selections)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiLoadAccountSelectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **accountsSelectionRequest** | [**AccountsSelectionRequest**](../models/accounts-selection-request) |  | 

### Return type

[**AccountsSelectionResponse**](../models/accounts-selection-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    accountsselectionrequest := []byte(`{
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
        }`) // AccountsSelectionRequest | 

    var accountsSelectionRequest v2025.AccountsSelectionRequest
    if err := json.Unmarshal(accountsselectionrequest, &accountsSelectionRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.LoadAccountSelections(context.Background()).XSailPointExperimental(xSailPointExperimental).AccountsSelectionRequest(accountsSelectionRequest).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.LoadAccountSelections(context.Background()).XSailPointExperimental(xSailPointExperimental).AccountsSelectionRequest(accountsSelectionRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.LoadAccountSelections``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `LoadAccountSelections`: AccountsSelectionResponse
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.LoadAccountSelections`: %v\n", resp)
}
```

[[Back to top]](#)

## set-access-request-config
Update access request configuration
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/set-access-request-config)

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
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    accessrequestconfig := []byte(`{
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
        }`) // AccessRequestConfig | 

    var accessRequestConfig v2025.AccessRequestConfig
    if err := json.Unmarshal(accessrequestconfig, &accessRequestConfig); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.AccessRequestsAPI.SetAccessRequestConfig(context.Background()).AccessRequestConfig(accessRequestConfig).Execute()
	  //resp, r, err := apiClient.V2025.AccessRequestsAPI.SetAccessRequestConfig(context.Background()).AccessRequestConfig(accessRequestConfig).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `AccessRequestsAPI.SetAccessRequestConfig``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetAccessRequestConfig`: AccessRequestConfig
    fmt.Fprintf(os.Stdout, "Response from `AccessRequestsAPI.SetAccessRequestConfig`: %v\n", resp)
}
```

[[Back to top]](#)

