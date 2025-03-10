---
id: beta-certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certifications', 'BetaCertifications'] 
slug: /tools/sdk/python/beta/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications', 'BetaCertifications']
---

# sailpoint.beta.CertificationsApi
  Use this API to implement certification functionality.
This API provides specific functionality that improves an organization&#39;s ability to manage its certification process.

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access.
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved.
Multiple certifications by different reviewers are often required to approve a user&#39;s access.
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers.
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more.

This API enables administrators and reviewers to get useful information about certifications at a high level, such as the reviewers involved, and at a more granular level, such as the permissions affected by changes to entitlements within those certifications.
It also provides the useful ability to reassign identities and items within certifications to other reviewers, rather than [reassigning the entire certifications themselves](https://developer.sailpoint.com/idn/api/beta/submit-reassign-certs-async/).

Refer to [Managing User Accounts](https://documentation.sailpoint.com/saas/help/common/users/user_access.html#managing-user-accounts) for more information about accounts.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-identity-certification-item-permissions**](#get-identity-certification-item-permissions) | **GET** `/certifications/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for Entitlement Certification Item
[**get-identity-certification-pending-tasks**](#get-identity-certification-pending-tasks) | **GET** `/certifications/{id}/tasks-pending` | Pending Certification Tasks
[**get-identity-certification-task-status**](#get-identity-certification-task-status) | **GET** `/certifications/{id}/tasks/{taskId}` | Certification Task Status
[**list-certification-reviewers**](#list-certification-reviewers) | **GET** `/certifications/{id}/reviewers` | List of Reviewers for certification
[**list-certifications**](#list-certifications) | **GET** `/certifications` | Certifications by IDs
[**submit-reassign-certs-async**](#submit-reassign-certs-async) | **POST** `/certifications/{id}/reassign-async` | Reassign Certifications Asynchronously


## get-identity-certification-item-permissions
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Permissions for Entitlement Certification Item
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-item-permissions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | item_id | **str** | True  | The certification item ID
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)`
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[PermissionDto]**](../models/permission-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of permissions associated with the given itemId | List[PermissionDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.certifications_api import CertificationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.permission_dto import PermissionDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification ID # str | The certification ID
    item_id = '2c91808671bcbab40171bd945d961227' # str | The certification item ID # str | The certification item ID
    filters = 'target eq \"SYS.OBJAUTH2\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)` (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: `?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)` (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Permissions for Entitlement Certification Item
        
        results =CertificationsApi(api_client).get_identity_certification_item_permissions(certification_id, item_id, )
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).get_identity_certification_item_permissions(certification_id, item_id, filters, limit, offset, count)
        print("The response of CertificationsApi->get_identity_certification_item_permissions:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->get_identity_certification_item_permissions: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-certification-pending-tasks
Pending Certification Tasks
This API returns the status of all pending (`QUEUED` or `IN_PROGRESS`) tasks for an identity campaign certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-pending-tasks)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID

### Return type
[**List[IdentityCertificationTask]**](../models/identity-certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of pending (&#x60;QUEUED&#x60; or &#x60;IN_PROGRESS&#x60;) certification task objects. | List[IdentityCertificationTask] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.certifications_api import CertificationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_certification_task import IdentityCertificationTask
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'id_example' # str | The identity campaign certification ID # str | The identity campaign certification ID

    try:
        # Pending Certification Tasks
        
        results =CertificationsApi(api_client).get_identity_certification_pending_tasks(id)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).get_identity_certification_pending_tasks(id)
        print("The response of CertificationsApi->get_identity_certification_pending_tasks:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->get_identity_certification_pending_tasks: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-certification-task-status
Certification Task Status
This API returns the status of a certification task. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-certification-task-status)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
Path   | task_id | **str** | True  | The certification task ID

### Return type
[**IdentityCertificationTask**](../models/identity-certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A certification task object. | IdentityCertificationTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.certifications_api import CertificationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_certification_task import IdentityCertificationTask
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'id_example' # str | The identity campaign certification ID # str | The identity campaign certification ID
    task_id = 'task_id_example' # str | The certification task ID # str | The certification task ID

    try:
        # Certification Task Status
        
        results =CertificationsApi(api_client).get_identity_certification_task_status(id, task_id)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).get_identity_certification_task_status(id, task_id)
        print("The response of CertificationsApi->get_identity_certification_task_status:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->get_identity_certification_task_status: %s\n" % e)
```



[[Back to top]](#) 

## list-certification-reviewers
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
List of Reviewers for certification
This API returns a list of reviewers for the certification. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-certification-reviewers)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The certification ID
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email**

### Return type
[**List[IdentityReferenceWithNameAndEmail]**](../models/identity-reference-with-name-and-email)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of reviewers | List[IdentityReferenceWithNameAndEmail] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.certifications_api import CertificationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_reference_with_name_and_email import IdentityReferenceWithNameAndEmail
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification ID # str | The certification ID
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"Bob\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)

    try:
        # List of Reviewers for certification
        
        results =CertificationsApi(api_client).list_certification_reviewers(id, )
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).list_certification_reviewers(id, limit, offset, count, filters, sorters)
        print("The response of CertificationsApi->list_certification_reviewers:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->list_certification_reviewers: %s\n" % e)
```



[[Back to top]](#) 

## list-certifications
Certifications by IDs
This API returns a list of certifications that satisfy the given query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-certifications)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | reviewer_identitiy | **str** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq, ne*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed**

### Return type
[**List[CertificationDto]**](../models/certification-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of certifications | List[CertificationDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.certifications_api import CertificationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.certification_dto import CertificationDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    reviewer_identitiy = 'reviewer_identitiy_example' # str | The ID of reviewer identity. *me* indicates the current user. (optional) # str | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'filters_example' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq, ne*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **phase**: *eq*  **completed**: *eq, ne*  **campaignRef.campaignType**: *eq, in*  **campaignRef.id**: *eq, in* (optional)
    sorters = 'sorters_example' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional)

    try:
        # Certifications by IDs
        
        results =CertificationsApi(api_client).list_certifications()
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).list_certifications(reviewer_identitiy, limit, offset, count, filters, sorters)
        print("The response of CertificationsApi->list_certifications:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->list_certifications: %s\n" % e)
```



[[Back to top]](#) 

## submit-reassign-certs-async
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Reassign Certifications Asynchronously
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the reassignment is complete. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/submit-reassign-certs-async)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
 Body  | review_reassign | [**ReviewReassign**](../models/review-reassign) | True  | 

### Return type
[**IdentityCertificationTask**](../models/identity-certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A certification task object for the reassignment which can be queried for status. | IdentityCertificationTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.certifications_api import CertificationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_certification_task import IdentityCertificationTask
from sailpoint.beta.models.review_reassign import ReviewReassign
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The identity campaign certification ID # str | The identity campaign certification ID
    review_reassign = {
          "reason" : "reassigned for some reason",
          "reassignTo" : "ef38f94347e94562b5bb8424a56397d8",
          "reassign" : [ {
            "id" : "ef38f94347e94562b5bb8424a56397d8",
            "type" : "ITEM"
          }, {
            "id" : "ef38f94347e94562b5bb8424a56397d8",
            "type" : "ITEM"
          } ]
        } # ReviewReassign | 

    try:
        # Reassign Certifications Asynchronously
        new_review_reassign = ReviewReassign()
        new_review_reassign.from_json(review_reassign)
        results =CertificationsApi(api_client).submit_reassign_certs_async(id, new_review_reassign)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).submit_reassign_certs_async(id, new_review_reassign)
        print("The response of CertificationsApi->submit_reassign_certs_async:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->submit_reassign_certs_async: %s\n" % e)
```



[[Back to top]](#) 



