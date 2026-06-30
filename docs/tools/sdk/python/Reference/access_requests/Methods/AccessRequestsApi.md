---
id: access-requests
title: Access_Requests
pagination_label: Access_Requests
sidebar_label: Access_Requests
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Requests', 'Access_Requests'] 
slug: /tools/sdk/python/access-requests/methods/access-requests
tags: ['SDK', 'Software Development Kit', 'Access_Requests', 'Access_Requests']
---

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-bulk-access-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulkapproveaccessrequest | [**Bulkapproveaccessrequest**](../models/bulkapproveaccessrequest) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.bulkapproveaccessrequest import Bulkapproveaccessrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulkapproveaccessrequest = '''{"accessRequestIds":["2c91808568c529c60168cca6f90c1313","2c91808568c529c60168cca6f90c1314"],"comment":"I approve these request items"}''' # Bulkapproveaccessrequest | 

    try:
        # Bulk approve access request
        new_bulkapproveaccessrequest = Bulkapproveaccessrequest.from_json(bulkapproveaccessrequest)
        results = AccessRequestsApi(api_client).approve_bulk_access_request_v1(bulkapproveaccessrequest=new_bulkapproveaccessrequest)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).approve_bulk_access_request_v1(new_bulkapproveaccessrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-access-request-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulkcancelaccessrequest | [**Bulkcancelaccessrequest**](../models/bulkcancelaccessrequest) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.bulkcancelaccessrequest import Bulkcancelaccessrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulkcancelaccessrequest = '''{"accessRequestIds":["2c91808568c529c60168cca6f90c1313","2c91808568c529c60168cca6f90c1314"],"comment":"I requested this role by mistake."}''' # Bulkcancelaccessrequest | 

    try:
        # Bulk cancel access request
        new_bulkcancelaccessrequest = Bulkcancelaccessrequest.from_json(bulkcancelaccessrequest)
        results = AccessRequestsApi(api_client).cancel_access_request_in_bulk_v1(bulkcancelaccessrequest=new_bulkcancelaccessrequest)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).cancel_access_request_in_bulk_v1(new_bulkcancelaccessrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-access-request-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | cancelaccessrequest | [**Cancelaccessrequest**](../models/cancelaccessrequest) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.cancelaccessrequest import Cancelaccessrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    cancelaccessrequest = '''{"accountActivityId":"2c91808568c529c60168cca6f90c1313","comment":"I requested this role by mistake."}''' # Cancelaccessrequest | 

    try:
        # Cancel access request
        new_cancelaccessrequest = Cancelaccessrequest.from_json(cancelaccessrequest)
        results = AccessRequestsApi(api_client).cancel_access_request_v1(cancelaccessrequest=new_cancelaccessrequest)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).cancel_access_request_v1(new_cancelaccessrequest)
        print("The response of AccessRequestsApi->cancel_access_request_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->cancel_access_request_v1: %s\n" % e)
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

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | closeaccessrequest | [**Closeaccessrequest**](../models/closeaccessrequest) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.closeaccessrequest import Closeaccessrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    closeaccessrequest = '''{"accessRequestIds":["2c90ad2a70ace7d50170acf22ca90010"],"executionStatus":"Terminated","completionStatus":"Failure","message":"The IdentityNow Administrator manually closed this request."}''' # Closeaccessrequest | 

    try:
        # Close access request
        new_closeaccessrequest = Closeaccessrequest.from_json(closeaccessrequest)
        results = AccessRequestsApi(api_client).close_access_request_v1(closeaccessrequest=new_closeaccessrequest)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).close_access_request_v1(new_closeaccessrequest)
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
 Body  | accessrequest | [**Accessrequest**](../models/accessrequest) | True  | 

### Return type
[**Accessrequestresponse**](../models/accessrequestresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Access Request Response. | Accessrequestresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accessrequest import Accessrequest
from sailpoint.access_requests.models.accessrequestresponse import Accessrequestresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    accessrequest = '''sailpoint.access_requests.Accessrequest()''' # Accessrequest | 

    try:
        # Submit access request
        new_accessrequest = Accessrequest.from_json(accessrequest)
        results = AccessRequestsApi(api_client).create_access_request_v1(accessrequest=new_accessrequest)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).create_access_request_v1(new_accessrequest)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Accessrequestconfigv1**](../models/accessrequestconfigv1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | Accessrequestconfigv1 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accessrequestconfigv1 import Accessrequestconfigv1
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
Get access request configuration
This endpoint returns the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-access-request-config-v2)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Accessrequestconfigv2**](../models/accessrequestconfigv2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | Accessrequestconfigv2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accessrequestconfigv2 import Accessrequestconfigv2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get access request configuration
        
        results = AccessRequestsApi(api_client).get_access_request_config_v2()
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).get_access_request_config_v2()
        print("The response of AccessRequestsApi->get_access_request_config_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->get_access_request_config_v2: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-details-for-identity-v1
Identity entitlement details
Use this API to return the details for a entitlement on an identity including specific data relating to remove date and the ability to revoke the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-details-for-identity-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The identity ID.
Path   | entitlement_id | **str** | True  | The entitlement ID

### Return type
[**Identityentitlementdetails**](../models/identityentitlementdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Entitlement and Account Reference | Identityentitlementdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.identityentitlementdetails import Identityentitlementdetails
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
Any user with any user level can get the status of their own access requests. A user with ORG_ADMIN is required to call this API to get a list of statuses for other users.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-access-request-status-v1)

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
[**List[Requesteditemstatus]**](../models/requesteditemstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requested item statuses. | List[Requesteditemstatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.requesteditemstatus import Requesteditemstatus
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-administrators-access-request-status-v1)

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
[**List[Accessrequestadminitemstatus]**](../models/accessrequestadminitemstatus)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of requested item statuses. | List[Accessrequestadminitemstatus] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accessrequestadminitemstatus import Accessrequestadminitemstatus
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


[API Spec](https://developer.sailpoint.com/docs/api/v1/load-account-selections-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accountsselectionrequest | [**Accountsselectionrequest**](../models/accountsselectionrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Accountsselectionresponse**](../models/accountsselectionresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Accounts Selection Response | Accountsselectionresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accountsselectionrequest import Accountsselectionrequest
from sailpoint.access_requests.models.accountsselectionresponse import Accountsselectionresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    accountsselectionrequest = '''sailpoint.access_requests.Accountsselectionrequest()''' # Accountsselectionrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get accounts selections for identity
        new_accountsselectionrequest = Accountsselectionrequest.from_json(accountsselectionrequest)
        results = AccessRequestsApi(api_client).load_account_selections_v1(accountsselectionrequest=new_accountsselectionrequest)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).load_account_selections_v1(new_accountsselectionrequest, x_sail_point_experimental)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-access-request-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accessrequestconfigv1 | [**Accessrequestconfigv1**](../models/accessrequestconfigv1) | True  | 

### Return type
[**Accessrequestconfigv1**](../models/accessrequestconfigv1)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | Accessrequestconfigv1 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accessrequestconfigv1 import Accessrequestconfigv1
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    accessrequestconfigv1 = '''sailpoint.access_requests.Accessrequestconfigv1()''' # Accessrequestconfigv1 | 

    try:
        # Update access request configuration
        new_accessrequestconfig = Accessrequestconfigv1.from_json(accessrequestconfigv1)
        results = AccessRequestsApi(api_client).set_access_request_config_v1(accessrequestconfigv1=new_accessrequestconfig)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).set_access_request_config_v1(new_accessrequestconfig)
        print("The response of AccessRequestsApi->set_access_request_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->set_access_request_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-access-request-config-v2
Update access request configuration
This endpoint replaces the current access-request configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-access-request-config-v2)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | accessrequestconfigv2 | [**Accessrequestconfigv2**](../models/accessrequestconfigv2) | True  | 

### Return type
[**Accessrequestconfigv2**](../models/accessrequestconfigv2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Access Request Configuration Details. | Accessrequestconfigv2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetAccessRequestConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetAccessRequestConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.access_requests.api.access_requests_api import AccessRequestsApi
from sailpoint.access_requests.api_client import ApiClient
from sailpoint.access_requests.models.accessrequestconfigv2 import Accessrequestconfigv2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    accessrequestconfigv2 = '''sailpoint.access_requests.Accessrequestconfigv2()''' # Accessrequestconfigv2 | 

    try:
        # Update access request configuration
        new_accessrequestconfigv2 = Accessrequestconfigv2.from_json(accessrequestconfigv2)
        results = AccessRequestsApi(api_client).set_access_request_config_v2(accessrequestconfigv2=new_accessrequestconfigv2)
        # Below is a request that includes all optional parameters
        # results = AccessRequestsApi(api_client).set_access_request_config_v2(new_accessrequestconfigv2)
        print("The response of AccessRequestsApi->set_access_request_config_v2:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestsApi->set_access_request_config_v2: %s\n" % e)
```



[[Back to top]](#) 



