# Access_Requests

# sailpoint.access_requests.AccessRequestsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-bulk-access-request-v1**](#approve-bulk-access-request-v1) | **POST** `/access-request-approvals/v1/bulk-approve` | Bulk approve access request
[**cancel-access-request-in-bulk-v1**](#cancel-access-request-in-bulk-v1) | **POST** `/access-requests/v1/bulk-cancel` | Bulk cancel access request
[**cancel-access-request-v1**](#cancel-access-request-v1) | **POST** `/access-requests/v1/cancel` | Cancel access request
[**close-access-request-v1**](#close-access-request-v1) | **POST** `/access-requests/v1/close` | Close access request
[**create-access-request-v1**](#create-access-request-v1) | **POST** `/access-requests/v1` | Submit access request
[**get-access-request-config-v1**](#get-access-request-config-v1) | **GET** `/access-request-config/v1` | Get access request configuration
[**get-access-request-config-v2**](#get-access-request-config-v2) | **GET** `/access-request-config/v2` | Get access request configuration
[**get-entitlement-details-for-identity-v1**](#get-entitlement-details-for-identity-v1) | **GET** `/revocable-objects/v1` | Identity entitlement details
[**list-access-request-status-v1**](#list-access-request-status-v1) | **GET** `/access-request-status/v1` | Access request status
[**list-administrators-access-request-status-v1**](#list-administrators-access-request-status-v1) | **GET** `/access-request-administration/v1` | Access request status for administrators
[**load-account-selections-v1**](#load-account-selections-v1) | **POST** `/access-requests/v1/accounts-selection` | Get accounts selections for identity
[**set-access-request-config-v1**](#set-access-request-config-v1) | **PUT** `/access-request-config/v1` | Update access request configuration
[**set-access-request-config-v2**](#set-access-request-config-v2) | **PUT** `/access-request-config/v2` | Update access request configuration


## approve-bulk-access-request-v1
Bulk approve access request
This API endpoint allows approving pending access requests in bulk. Maximum of 50 approval ids can be  provided in the request for one single invocation.  ORG_ADMIN or users with rights "idn:access-request-administration:write" can approve the access requests in bulk.

[API Spec](https://developer.sailpoint.com/docs/api/approve-bulk-access-request-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.bulk_approve_access_request import BulkApproveAccessRequest
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
        results = AccessRequestsApi(api_client).approve_bulk_access_request_v1(bulk_approve_access_request=new_bulk_approve_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).approve_bulk_access_request_v1(new_bulk_approve_access_request)
        print("The response of AccessRequestsApi->approve_bulk_access_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->approve_bulk_access_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## cancel-access-request-in-bulk-v1
Bulk cancel access request
This API endpoint allows cancelling pending access requests in bulk. Maximum of 50 access request ids can be  provided in the request for one single invocation. 
Only ORG_ADMIN or users with rights "idn:access-request-administration:write" can cancel the access requests in  bulk.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-access-request-in-bulk-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.bulk_cancel_access_request import BulkCancelAccessRequest
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
        results = AccessRequestsApi(api_client).cancel_access_request_in_bulk_v1(bulk_cancel_access_request=new_bulk_cancel_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).cancel_access_request_in_bulk_v1(new_bulk_cancel_access_request)
        print("The response of AccessRequestsApi->cancel_access_request_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->cancel_access_request_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## cancel-access-request-v1
Cancel access request
This API endpoint cancels a pending access request. An access request can be cancelled only if it has not passed the approval step.
In addition to users with ORG_ADMIN, any user who originally submitted the access request may cancel it.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-access-request-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.cancel_access_request import CancelAccessRequest
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
        results = AccessRequestsApi(api_client).cancel_access_request_v1(cancel_access_request=new_cancel_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).cancel_access_request_v1(new_cancel_access_request)
        print("The response of AccessRequestsApi->cancel_access_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->cancel_access_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## close-access-request-v1
Close access request
This endpoint closes access requests that are stuck in a pending state. It can be used throughout a request's lifecycle even after the approval state, unlike the [Cancel Access Request endpoint](https://developer.sailpoint.com/docs/api/cancel-access-request-v-1).

To find pending access requests with the UI, navigate to Search and use this query: status: Pending AND "Access Request". Use the Column Chooser to select 'Tracking Number', and use the 'Download' button to export a CSV containing the tracking numbers.

To find pending access requests with the API, use the [List Account Activities endpoint](https://developer.sailpoint.com/docs/api/list-account-activities-v-1).

Input the IDs from either source.

To track the status of endpoint requests, navigate to Search and use this query: name:"Close Identity Requests". Search will include "Close Identity Requests Started" audits when requests are initiated and "Close Identity Requests Completed" audits when requests are completed. The completion audit will list the identity request IDs that finished in error.

This API triggers the [Provisioning Completed event trigger](https://developer.sailpoint.com/docs/extensibility/event-triggers/triggers/provisioning-completed/) for each access request that is closed.


[API Spec](https://developer.sailpoint.com/docs/api/close-access-request-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | close_access_request | [**CloseAccessRequest**](../models/close-access-request) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.close_access_request import CloseAccessRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    close_access_request = '''{
          "executionStatus" : "Terminated",
          "accessRequestIds" : [ "2c90ad2a70ace7d50170acf22ca90010" ],
          "completionStatus" : "Failure",
          "message" : "The IdentityNow Administrator manually closed this request."
        }''' # CloseAccessRequest | 

    try:
        # Close access request
        new_close_access_request = CloseAccessRequest.from_json(close_access_request)
        results = AccessRequestsApi(api_client).close_access_request_v1(close_access_request=new_close_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).close_access_request_v1(new_close_access_request)
        print("The response of AccessRequestsApi->close_access_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->close_access_request_v1: %s\n" % e)
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
be accomplished by using the [List Access Request Status](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1) or the [Pending Access Request Approvals](https://developer.sailpoint.com/docs/api/list-pending-approvals-v-1) APIs. You can also
use the [Search API](https://developer.sailpoint.com/docs/api/search) to check the existing access items an identity has before submitting
an access request to ensure that you aren't requesting access that is already granted. If you use this API to request access that an identity already has, 
without changing the account details or end date information from the existing assignment, 
the API will cancel the request as a duplicate.

There are two types of access request:

__GRANT_ACCESS__
* Can be requested for multiple identities in a single request.
* Supports self request and request on behalf of other users. Refer to the [Get Access Request Configuration](https://developer.sailpoint.com/docs/api/get-access-request-config-v-2) endpoint for request configuration options.  
* Allows any authenticated token (except API) to call this endpoint to request to grant access to themselves. Depending on the configuration, a user can request access for others.
* Roles, access profiles and entitlements can be requested.
* You can specify a `startDate` to set or alter a sunrise date-time on an assignment. The startDate must be a future date-time, in the UTC timezone. Additionally, if the user already has the access assigned with a sunrise date and its yet to be provisioned, you can also submit a request without a `startDate` to request immediate provisioning after approval.
* If a `startDate` is specified, then the requested role, access profile, or entitlement will be provisioned on that date and time.
* You can specify a `removeDate` to set or alter a sunset date-time on an assignment. The removeDate must be a future date-time, in the UTC timezone. Additionally, if the user already has the access assigned with a sunset date, you can also submit a request without a `removeDate` to request removal of the sunset date and time.
* If a `removeDate` is specified, then the requested role, access profile, or entitlement will be removed on that date and time.
* Now supports an alternate field 'requestedForWithRequestedItems' for users to specify account selections while requesting items where they have more than one account on the source.

__MACHINE IDENTITY ACCESS REQUESTS__
* Machine identity access requests reuse this same endpoint. They must use `requestedForWithRequestedItems` with `identityType: MACHINE` on each entry. Do not use the flat `requestedFor` / `requestedItems` shape for machines. Mixed human and machine identities in one request are not supported.
* Request `identityType` uses `HUMAN` / `MACHINE`. List, status, and approval responses use `IDENTITY` / `MACHINE_IDENTITY` on `requestedFor.type` for the same distinction.

Prerequisites and authorization:
* The organization must have Machine Identity Security licensed; otherwise the request is rejected with 403.
* Access request config v2 `machineIdentityAccessRequestEnabled` must be true (default true); otherwise 403.
* Request-on-behalf-of for machines is controlled by `allowRequestOnBehalfOfForMachineIdentity` and `allowRequestForMachineByOwner` on the access request configuration. See those schema fields for the authorization cascade (open ROBO, owner/admin ROBO, then admin-only fallback).

Constraints for machine requests:
* Only `ENTITLEMENT` items are supported (roles and access profiles are rejected).
* GRANT_ACCESS and MODIFY_ACCESS requests require `accountSelection` to be provided with `accountUuid` and/or `nativeIdentity`  that match a real machine account for that machine identity on the selected source. Prefer values returned by the accounts-selection API.
* MODIFY_ACCESS requests additionally require each item to have `startDate` and/or `removeDate` to denote date modifications.
* REVOKE_ACCESS must target exactly one machine identity. Per entitlement item, provide `nativeIdentity` (or it may be auto-resolved when the machine has exactly one account on the entitlement source). Do not send `accountSelection` on machine revoke.
* Multi-machine GRANT_ACCESS is allowed within existing recipient limits; multi-machine REVOKE_ACCESS is not.

__FORMS IN ACCESS REQUESTS__
* Forms apply to human GRANT_ACCESS requests for roles, access profiles, and entitlements. Forms are not used for REVOKE_ACCESS.
* Roles, access profiles, and entitlements can optionally reference a `formDefinitionId` in their request configuration. When configured, the requester completes that form and includes the resulting `formInstanceId` on each affected GRANT_ACCESS line item when submitting the access request.
* Provide `formInstanceId` on each GRANT_ACCESS line item in `requestedItems` (flat payload) or in `requestedForWithRequestedItems.requestedItems` (nested payload). An empty `formInstanceId` on a GRANT_ACCESS line item is rejected with HTTP 400.
* When a configured form is required, a missing `formInstanceId`, a submitted form whose definition does not match the configured `formDefinitionId`, or form instance data that could not be read may fail the request during asynchronous processing even when this endpoint returns success.
* Reusing the same `formInstanceId` for the same requested object across multiple recipients is supported.
* Completed form answers are returned on access request status, administration, and approval responses in the `form` object on each item. Access request pre-approval and dynamic approver trigger inputs may include `form` on each entry in `requestedItems`. The post-approval trigger includes `form` on each entry in `requestedItemsStatus`.

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
* For human identities, usage of 'requestedForWithRequestedItems' is not supported for revoke requests. Machine identity revoke requests must use 'requestedForWithRequestedItems' with `identityType: MACHINE` as described above.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-request-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.access_request import AccessRequest
from sailpoint.access_requests.models.access_request_response import AccessRequestResponse
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
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          } ],
          "requestedForWithRequestedItems" : [ {
            "identityType" : "HUMAN",
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
            } ]
          }, {
            "identityType" : "HUMAN",
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
            } ]
          } ]
        }''' # AccessRequest | 

    try:
        # Submit access request
        new_access_request = AccessRequest.from_json(access_request)
        results = AccessRequestsApi(api_client).create_access_request_v1(access_request=new_access_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).create_access_request_v1(new_access_request)
        print("The response of AccessRequestsApi->create_access_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->create_access_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-config-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Get access request configuration
This endpoint returns the current access-request configuration.

To manage approval configurations, use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-config-v-1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**AccessRequestConfig**](../models/access-request-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | AccessRequestConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.access_request_config import AccessRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get access request configuration
        
        results = AccessRequestsApi(api_client).get_access_request_config_v1()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).get_access_request_config_v1()
        print("The response of AccessRequestsApi->get_access_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->get_access_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-config-v2
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
Get access request configuration
This endpoint returns the current access-request configuration.

To manage approval configurations, use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-config-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestConfig2**](../models/access-request-config2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | AccessRequestConfig2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.access_request_config2 import AccessRequestConfig2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get access request configuration
        
        results = AccessRequestsApi(api_client).get_access_request_config_v2()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).get_access_request_config_v2(x_sail_point_experimental)
        print("The response of AccessRequestsApi->get_access_request_config_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->get_access_request_config_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-details-for-identity-v1
Identity entitlement details
Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-details-for-identity-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The identity ID.
Path   | entitlement_id | **str** | True  | The entitlement ID

### Return type
[**IdentityEntitlementDetails**](../models/identity-entitlement-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Entitlement and Account Reference | IdentityEntitlementDetails |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.identity_entitlement_details import IdentityEntitlementDetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identity_id = '7025c863c2704ba6beeaedf3cb091573' # str | The identity ID. # str | The identity ID.
    entitlement_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The entitlement ID # str | The entitlement ID

    try:
        # Identity entitlement details
        
        results = AccessRequestsApi(api_client).get_entitlement_details_for_identity_v1(identity_id=identity_id, entitlement_id=entitlement_id)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).get_entitlement_details_for_identity_v1(identity_id, entitlement_id)
        print("The response of AccessRequestsApi->get_entitlement_details_for_identity_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->get_entitlement_details_for_identity_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-access-request-status-v1
Access request status
Use this API to return a list of access request statuses based on the specified query parameters.
If an access request was made for access that an identity already has, the API ignores the access request.  These ignored requests do not display in the list of access request statuses.
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users. For access requests for machines, each status item will include `identityType` as `MACHINE` and `requestedFor` with `type: MACHINE_IDENTITY` and the machine id. Requests without a stored identity type are returned as `HUMAN` / `IDENTITY`.
When a requested object has an associated form, each status item may include a `form` object with the form definition ID, instance ID, and answers (`formData`).

[API Spec](https://developer.sailpoint.com/docs/api/list-access-request-status-v-1)

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
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name**
  Query | request_state | **str** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**List[RequestedItemStatus]**](../models/requested-item-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requested item statuses. | List[RequestedItemStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.requested_item_status import RequestedItemStatus
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
    filters = 'accountActivityItemId eq \"2c918086771c86df0177401efcdf54c0\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accessRequestId**: *eq, ge, gt, le, lt, ne, sw*  **accountActivityItemId**: *eq, in, ge, gt, le, ne, sw*  **created**: *eq, ge, gt, le, lt, ne* (optional)
    sorters = 'created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name** (optional)
    request_state = 'request-state=EXECUTING' # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    try:
        # Access request status
        
        results = AccessRequestsApi(api_client).list_access_request_status_v1()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).list_access_request_status_v1(requested_for, requested_by, regarding_identity, assigned_to, count, limit, offset, filters, sorters, request_state)
        print("The response of AccessRequestsApi->list_access_request_status_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->list_access_request_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-administrators-access-request-status-v1
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
Access request status for administrators
Use this API to get access request statuses of all the access requests in the org based on the specified query  parameters.
Any user with user level ORG_ADMIN or scope idn:access-request-administration:read can access this endpoint to get  the  access request statuses
When a requested object has an associated form, each status item may include a `form` object with the form definition ID, instance ID, and answers (`formData`).

[API Spec](https://developer.sailpoint.com/docs/api/list-administrators-access-request-status-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | requested_for | **str** |   (optional) | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | requested_by | **str** |   (optional) | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*.
  Query | regarding_identity | **str** |   (optional) | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*.
  Query | assigned_to | **str** |   (optional) | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user.
  Query | count | **bool** |   (optional) (default to False) | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return.
  Query | offset | **int** |   (optional) | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId**
  Query | request_state | **str** |   (optional) | Filter the results by the state of the request. The only valid value is *EXECUTING*.

### Return type
[**List[AccessRequestAdminItemStatus]**](../models/access-request-admin-item-status)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requested item statuses. | List[AccessRequestAdminItemStatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.access_request_admin_item_status import AccessRequestAdminItemStatus
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    requested_for = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | Filter the results by the identity the requests were made for. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    requested_by = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional) # str | Filter the results by the identity who made the requests. *me* indicates the current user. Mutually exclusive with *regarding-identity*. (optional)
    regarding_identity = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional) # str | Filter the results by the specified identity who is either the requester or target of the requests. *me* indicates the current user. Mutually exclusive with *requested-for* and *requested-by*. (optional)
    assigned_to = '2c9180877b2b6ea4017b2c545f971429' # str | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional) # str | Filter the results by the specified identity who is the owner of the Identity Request Work Item. *me* indicates the current user. (optional)
    count = False # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to False) # bool | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional) (default to False)
    limit = 250 # int | Max number of results to return. (optional) (default to 250) # int | Max number of results to return. (optional) (default to 250)
    offset = 10 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    filters = 'accountActivityItemId eq \"2c918086771c86df0177401efcdf54c0\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **accountActivityItemId**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **accessRequestId**: *in, eq, ne, ge, gt, le, lt, sw*  **status**: *in, eq, ne*  **created**: *eq, in, ge, gt, le, lt, ne, isnull, sw* (optional)
    sorters = 'created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, accountActivityItemId, name, accessRequestId** (optional)
    request_state = 'request-state=EXECUTING' # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional) # str | Filter the results by the state of the request. The only valid value is *EXECUTING*. (optional)

    try:
        # Access request status for administrators
        
        results = AccessRequestsApi(api_client).list_administrators_access_request_status_v1(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).list_administrators_access_request_status_v1(x_sail_point_experimental, requested_for, requested_by, regarding_identity, assigned_to, count, limit, offset, filters, sorters, request_state)
        print("The response of AccessRequestsApi->list_administrators_access_request_status_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->list_administrators_access_request_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## load-account-selections-v1
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
Get accounts selections for identity
Use this API to fetch account information for an identity against the items in an access request.

Used to fetch accountSelection for the AccessRequest prior to submitting for async processing.

__Machine identities__

* Must use `requestedForWithRequestedItems` with `identityType: MACHINE` on each entry.

* Fields `requestedFor` / `requestedItems` are not supported and should be omitted.

* Only `ENTITLEMENT` items are supported.

* Mixed human and machine identities in one request are not supported.

* Response identities use `type: MACHINE_IDENTITY`. Use the returned account `accountUuid` / `nativeIdentity`
values when submitting the access request; invalid or mismatched account details are rejected on create.

* If the machine has no account on a requested source, the item may be returned with
`accountsSelectionBlocked: true` and `accountsSelectionBlockedReason: NO_ACCOUNT_ON_SOURCE` (empty accounts on the
response in that blocked case is expected).

* Same licensing, `machineIdentityAccessRequestEnabled`, and request-on-behalf-of rules as create access request
apply.


[API Spec](https://developer.sailpoint.com/docs/api/load-account-selections-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accounts_selection_request | [**AccountsSelectionRequest**](../models/accounts-selection-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccountsSelectionResponse**](../models/accounts-selection-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Accounts Selection Response | AccountsSelectionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accounts_selection_request import AccountsSelectionRequest
from sailpoint.access_requests.models.accounts_selection_response import AccountsSelectionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

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
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          }, {
            "clientMetadata" : {
              "requestedAppName" : "test-app",
              "requestedAppId" : "2c91808f7892918f0178b78da4a305a1"
            },
            "removeDate" : "2020-07-11T21:23:15Z",
            "comment" : "Requesting access profile for John Doe",
            "id" : "2c9180835d2e5168015d32f890ca1581",
            "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
            "type" : "ACCESS_PROFILE",
            "assignmentId" : "ee48a191c00d49bf9264eb0a4fc3a9fc",
            "startDate" : "2020-06-12T21:22:23Z",
            "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
          } ],
          "requestedForWithRequestedItems" : [ {
            "identityType" : "HUMAN",
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
            } ]
          }, {
            "identityType" : "HUMAN",
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
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
              "formInstanceId" : "9f3a1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e",
              "type" : "ACCESS_PROFILE",
              "startDate" : "2020-06-12T21:22:23Z",
              "nativeIdentity" : "CN=User db3377de14bf,OU=YOURCONTAINER, DC=YOURDOMAIN"
            } ]
          } ]
        }''' # AccountsSelectionRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get accounts selections for identity
        new_accounts_selection_request = AccountsSelectionRequest.from_json(accounts_selection_request)
        results = AccessRequestsApi(api_client).load_account_selections_v1(accounts_selection_request=new_accounts_selection_request)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).load_account_selections_v1(new_accounts_selection_request, x_sail_point_experimental)
        print("The response of AccessRequestsApi->load_account_selections_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->load_account_selections_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-access-request-config-v1
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Update access request configuration
This endpoint replaces the current access-request configuration.

To manage approval configurations, use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/set-access-request-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.access_request_config import AccessRequestConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    access_request_config = '''{
          "requestOnBehalfOfConfig" : {
            "allowRequestOnBehalfOfEmployeeByManager" : true,
            "allowRequestOnBehalfOfForMachineIdentity" : true,
            "allowRequestOnBehalfOfAnyoneByAnyone" : true,
            "allowRequestForMachineByOwner" : false
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
              "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
              "requestCommentRequired" : true,
              "requireEndDate" : true,
              "maxPermittedAccessDuration" : {
                "value" : 5,
                "timeUnit" : "DAYS"
              }
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
        results = AccessRequestsApi(api_client).set_access_request_config_v1(access_request_config=new_access_request_config)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).set_access_request_config_v1(new_access_request_config)
        print("The response of AccessRequestsApi->set_access_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->set_access_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-access-request-config-v2
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
Update access request configuration
This endpoint replaces the current access-request configuration.

To manage approval configurations, use the [Put approval config](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1/) endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/set-access-request-config-v-2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | access_request_config2 | [**AccessRequestConfig2**](../models/access-request-config2) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**AccessRequestConfig2**](../models/access-request-config2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | AccessRequestConfig2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.access_request_config2 import AccessRequestConfig2
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    access_request_config2 = '''sailpoint.access_requests.AccessRequestConfig2()''' # AccessRequestConfig2 | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update access request configuration
        new_access_request_config2 = AccessRequestConfig2.from_json(access_request_config2)
        results = AccessRequestsApi(api_client).set_access_request_config_v2(access_request_config2=new_access_request_config2)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).set_access_request_config_v2(new_access_request_config2, x_sail_point_experimental)
        print("The response of AccessRequestsApi->set_access_request_config_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->set_access_request_config_v2: %s\n" % e)
```



[[Back to top]](#) 



