---
id: v2024-access-requests
title: Access_Requests
pagination_label: Access_Requests
sidebar_label: Access_Requests
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Requests', 'V2024Access_Requests'] 
slug: /tools/sdk/python/v2024/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'Access_Requests', 'V2024Access_Requests']
---

# sailpoint.v2024.AccessRequestsApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-bulk-access-request**](#approve-bulk-access-request) | **POST** `/access-request-approvals/bulk-approve` | Bulk approve access request
[**cancel-access-request**](#cancel-access-request) | **POST** `/access-requests/cancel` | Cancel access request
[**cancel-access-request-in-bulk**](#cancel-access-request-in-bulk) | **POST** `/access-requests/bulk-cancel` | Bulk cancel access request
[**close-access-request**](#close-access-request) | **POST** `/access-requests/close` | Close access request
[**create-access-request**](#create-access-request) | **POST** `/access-requests` | Submit access request
[**get-access-request-config**](#get-access-request-config) | **GET** `/access-request-config` | Get access request configuration
[**list-access-request-status**](#list-access-request-status) | **GET** `/access-request-status` | Access request status
[**list-administrators-access-request-status**](#list-administrators-access-request-status) | **GET** `/access-request-administration` | Access request status for administrators
[**load-account-selections**](#load-account-selections) | **POST** `/access-requests/accounts-selection` | Get accounts selections for identity
[**set-access-request-config**](#set-access-request-config) | **PUT** `/access-request-config` | Update access request configuration


## approve-bulk-access-request
Bulk approve access request
This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights "idn:access-request-administration:write" can approve the access requests in bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/approve-bulk-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_approve_access_request | [**BulkApproveAccessRequest**](../models/bulk-approve-access-request) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.bulk_approve_access_request import BulkApproveAccessRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_approve_access_request = '''{
          "comment" : "I approve these request items",
          "approvalIds" : [ "2c9180835d2e5168015d32f890ca1581", "2c9180835d2e5168015d32f890ca1582" ]
        }''' # BulkApproveAccessRequest | 

    try:
        # Bulk approve access request
        new_bulk_approve_access_request = BulkApproveAccessRequest.from_json(bulk_approve_access_request)
        results = AccessRequestsApi(api_client).approve_bulk_access_request(bulk_approve_access_request=new_bulk_approve_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).approve_bulk_access_request(new_bulk_approve_access_request)
        print("The response of AccessRequestsApi->approve_bulk_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->approve_bulk_access_request: %s\n" % e)
```



[[Back to top]](#) 

## cancel-access-request
Cancel access request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/cancel-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | cancel_access_request | [**CancelAccessRequest**](../models/cancel-access-request) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.cancel_access_request import CancelAccessRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    cancel_access_request = '''{
          "accountActivityId" : "2c9180835d2e5168015d32f890ca1581",
          "comment" : "I requested this role by mistake."
        }''' # CancelAccessRequest | 

    try:
        # Cancel access request
        new_cancel_access_request = CancelAccessRequest.from_json(cancel_access_request)
        results = AccessRequestsApi(api_client).cancel_access_request(cancel_access_request=new_cancel_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).cancel_access_request(new_cancel_access_request)
        print("The response of AccessRequestsApi->cancel_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->cancel_access_request: %s\n" % e)
```



[[Back to top]](#) 

## cancel-access-request-in-bulk
Bulk cancel access request
This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation. 
Only ORG_ADMIN or users with rights "idn:access-request-administration:write" can cancel the access requests in  bulk.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/cancel-access-request-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_cancel_access_request | [**BulkCancelAccessRequest**](../models/bulk-cancel-access-request) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.bulk_cancel_access_request import BulkCancelAccessRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_cancel_access_request = '''{
          "accessRequestIds" : [ "2c9180835d2e5168015d32f890ca1581", "2c9180835d2e5168015d32f890ca1582" ],
          "comment" : "I requested this role by mistake."
        }''' # BulkCancelAccessRequest | 

    try:
        # Bulk cancel access request
        new_bulk_cancel_access_request = BulkCancelAccessRequest.from_json(bulk_cancel_access_request)
        results = AccessRequestsApi(api_client).cancel_access_request_in_bulk(bulk_cancel_access_request=new_bulk_cancel_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).cancel_access_request_in_bulk(new_bulk_cancel_access_request)
        print("The response of AccessRequestsApi->cancel_access_request_in_bulk:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->cancel_access_request_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## close-access-request
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Close access request
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/idn/api/v3/cancel-access-request/).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/idn/api/v3/list-account-activities/).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/idn/docs/event-triggers/triggers/provisioning-completed/) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/close-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | close_access_request | [**CloseAccessRequest**](../models/close-access-request) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.close_access_request import CloseAccessRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    close_access_request = '''{
          "executionStatus" : "Terminated",
          "accessRequestIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
          "completionStatus" : "Failure",
          "message" : "The IdentityNow Administrator manually closed this request."
        }''' # CloseAccessRequest | 

    try:
        # Close access request
        new_close_access_request = CloseAccessRequest.from_json(close_access_request)
        results = AccessRequestsApi(api_client).close_access_request(x_sail_point_experimental=x_sail_point_experimental, close_access_request=new_close_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).close_access_request(x_sail_point_experimental, new_close_access_request)
        print("The response of AccessRequestsApi->close_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->close_access_request: %s\n" % e)
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


[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request | [**AccessRequest**](../models/access-request) | True  | 

### Return type
[**AccessRequestResponse**](../models/access-request-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Access Request Response. | AccessRequestResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request import AccessRequest
from sailpoint.v2024.models.access_request_response import AccessRequestResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request = '''{
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
        }''' # AccessRequest | 

    try:
        # Submit access request
        new_access_request = AccessRequest.from_json(access_request)
        results = AccessRequestsApi(api_client).create_access_request(access_request=new_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).create_access_request(new_access_request)
        print("The response of AccessRequestsApi->create_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->create_access_request: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-config
Get access request configuration
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-access-request-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | AccessRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_config import AccessRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get access request configuration
        
        results = AccessRequestsApi(api_client).get_access_request_config()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).get_access_request_config()
        print("The response of AccessRequestsApi->get_access_request_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->get_access_request_config: %s\n" % e)
```



[[Back to top]](#) 

## list-access-request-status
Access request status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-access-request-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requested_for | **str** |   (optional) | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | requested_by | **str** |   (optional) | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | regarding_identity | **str** |   (optional) | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | assigned_to | **str** |   (optional) | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
  Query | count | **bool** |   (optional) (default to False) | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return.
  Query | offset | **int** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**
  Query | request_state | **str** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**List[RequestedItemStatus]**](../models/requested-item-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requested item statuses. | List[RequestedItemStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.requested_item_status import RequestedItemStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requested_by = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regarding_identity = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # str | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assigned_to = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # str | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count = False # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to False) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to False)
    limit = 250 # int | Max number of results to return. (optional) (default to 250) # int | Max number of results to return. (optional) (default to 250)
    offset = 10 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters = 'accountActivityItemId eq \"2c918086771c86df0177401efcdf54c0\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, in, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters = 'created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
    request_state = 'request-state=EXECUTING' # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    try:
        # Access request status
        
        results = AccessRequestsApi(api_client).list_access_request_status()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).list_access_request_status(requested_for, requested_by, regarding_identity, assigned_to, count, limit, offset, filters, sorters, request_state)
        print("The response of AccessRequestsApi->list_access_request_status:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->list_access_request_status: %s\n" % e)
```



[[Back to top]](#) 

## list-administrators-access-request-status
Access request status for administrators
Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-administrators-access-request-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | requested_for | **str** |   (optional) | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | requested_by | **str** |   (optional) | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | regarding_identity | **str** |   (optional) | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | assigned_to | **str** |   (optional) | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
  Query | count | **bool** |   (optional) (default to False) | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return.
  Query | offset | **int** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId**
  Query | request_state | **str** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**List[AccessRequestAdminItemStatus]**](../models/access-request-admin-item-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requested item statuses. | List[AccessRequestAdminItemStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_admin_item_status import AccessRequestAdminItemStatus
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    requested_for = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requested_by = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regarding_identity = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # str | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assigned_to = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # str | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count = False # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to False) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to False)
    limit = 250 # int | Max number of results to return. (optional) (default to 250) # int | Max number of results to return. (optional) (default to 250)
    offset = 10 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters = 'accountActivityItemId eq \"2c918086771c86df0177401efcdf54c0\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters = 'created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional)
    request_state = 'request-state=EXECUTING' # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    try:
        # Access request status for administrators
        
        results = AccessRequestsApi(api_client).list_administrators_access_request_status()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).list_administrators_access_request_status(requested_for, requested_by, regarding_identity, assigned_to, count, limit, offset, filters, sorters, request_state)
        print("The response of AccessRequestsApi->list_administrators_access_request_status:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->list_administrators_access_request_status: %s\n" % e)
```



[[Back to top]](#) 

## load-account-selections
Get accounts selections for identity
Use this API to fetch account information for an identity against the items in an access request.

Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/load-account-selections)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accounts_selection_request | [**AccountsSelectionRequest**](../models/accounts-selection-request) | True  | 

### Return type
[**AccountsSelectionResponse**](../models/accounts-selection-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Accounts Selection Response | AccountsSelectionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.accounts_selection_request import AccountsSelectionRequest
from sailpoint.v2024.models.accounts_selection_response import AccountsSelectionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    accounts_selection_request = '''{
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
        }''' # AccountsSelectionRequest | 

    try:
        # Get accounts selections for identity
        new_accounts_selection_request = AccountsSelectionRequest.from_json(accounts_selection_request)
        results = AccessRequestsApi(api_client).load_account_selections(accounts_selection_request=new_accounts_selection_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).load_account_selections(new_accounts_selection_request)
        print("The response of AccessRequestsApi->load_account_selections:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->load_account_selections: %s\n" % e)
```



[[Back to top]](#) 

## set-access-request-config
Update access request configuration
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-access-request-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_config | [**AccessRequestConfig**](../models/access-request-config) | True  | 

### Return type
[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | AccessRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.access_requests_api import AccessRequestsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_request_config import AccessRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request_config = '''{
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
        }''' # AccessRequestConfig | 

    try:
        # Update access request configuration
        new_access_request_config = AccessRequestConfig.from_json(access_request_config)
        results = AccessRequestsApi(api_client).set_access_request_config(access_request_config=new_access_request_config)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).set_access_request_config(new_access_request_config)
        print("The response of AccessRequestsApi->set_access_request_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->set_access_request_config: %s\n" % e)
```



[[Back to top]](#) 



