---
id: v2024-certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Certifications', 'V2024Certifications'] 
slug: /tools/sdk/python/v2024/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications', 'V2024Certifications']
---

# sailpoint.v2024.CertificationsApi
  Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users&#39; access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations&#39; data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other Identity Security Cloud users as certification reviewers. 
Those reviewers can select the &#39;Certifications&#39; tab to view any of the certifications they either need to review or have already reviewed under the &#39;Active&#39; and &#39;Completed&#39; tabs, respectively. 

When a certification campaign is in progress, certification reviewers will see certifications listed under &#39;Active,&#39; where they can review the involved identities. 
Under the &#39;Decision&#39; column on the right, next to each access item, reviewers can select the checkmark to approve access, select the &#39;X&#39; to revoke access, or they can toggle the &#39;More Options&#39; menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. 

Once a reviewer has made decisions on all the certification&#39;s involved access items, he or she must select &#39;Sign Off&#39; to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer&#39;s list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities&#39; entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-certification-task**](#get-certification-task) | **GET** `/certification-tasks/{id}` | Certification Task by ID
[**get-identity-certification**](#get-identity-certification) | **GET** `/certifications/{id}` | Identity Certification by ID
[**get-identity-certification-item-permissions**](#get-identity-certification-item-permissions) | **GET** `/certifications/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for Entitlement Certification Item
[**get-pending-certification-tasks**](#get-pending-certification-tasks) | **GET** `/certification-tasks` | List of Pending Certification Tasks
[**list-certification-reviewers**](#list-certification-reviewers) | **GET** `/certifications/{id}/reviewers` | List of Reviewers for certification
[**list-identity-access-review-items**](#list-identity-access-review-items) | **GET** `/certifications/{id}/access-review-items` | List of Access Review Items
[**list-identity-certifications**](#list-identity-certifications) | **GET** `/certifications` | List Identity Campaign Certifications
[**make-identity-decision**](#make-identity-decision) | **POST** `/certifications/{id}/decide` | Decide on a Certification Item
[**reassign-identity-certifications**](#reassign-identity-certifications) | **POST** `/certifications/{id}/reassign` | Reassign Identities or Items
[**sign-off-identity-certification**](#sign-off-identity-certification) | **POST** `/certifications/{id}/sign-off` | Finalize Identity Certification Decisions
[**submit-reassign-certs-async**](#submit-reassign-certs-async) | **POST** `/certifications/{id}/reassign-async` | Reassign Certifications Asynchronously


## get-certification-task
Certification Task by ID
This API returns the certification task for the specified ID. Reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-certification-task)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The task ID

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A certification task | CertificationTask |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.certification_task import CertificationTask
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '63b32151-26c0-42f4-9299-8898dc1c9daa' # str | The task ID # str | The task ID

    try:
        # Certification Task by ID
        
        results =CertificationsApi(api_client).get_certification_task(id)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).get_certification_task(id)
        print("The response of CertificationsApi->get_certification_task:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->get_certification_task: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-certification
Identity Certification by ID
This API returns a single identity campaign certification by its ID. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-certification)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The certification id

### Return type
[**IdentityCertificationDto**](../models/identity-certification-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity campaign certification object | IdentityCertificationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_certification_dto import IdentityCertificationDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification id # str | The certification id

    try:
        # Identity Certification by ID
        
        results =CertificationsApi(api_client).get_identity_certification(id)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).get_identity_certification(id)
        print("The response of CertificationsApi->get_identity_certification:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->get_identity_certification: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-certification-item-permissions
Permissions for Entitlement Certification Item
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-identity-certification-item-permissions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | certification_id | **str** | True  | The certification ID
Path   | item_id | **str** | True  | The certification item ID
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: 1?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.permission_dto import PermissionDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    certification_id = 'ef38f94347e94562b5bb8424a56397d8' # str | The certification ID # str | The certification ID
    item_id = '2c91808671bcbab40171bd945d961227' # str | The certification item ID # str | The certification item ID
    filters = 'target eq \"SYS.OBJAUTH2\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: 1?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: `?filters=rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22`  The following is invalid: 1?filters=rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 (optional)
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

## get-pending-certification-tasks
List of Pending Certification Tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification tasks. Any authenticated token can call this API, but only certification tasks you are authorized to review will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-pending-certification-tasks)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | reviewer_identity | **str** |   (optional) | The ID of reviewer identity. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in*

### Return type
[**List[CertificationTask]**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of pending certification tasks | List[CertificationTask] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.certification_task import CertificationTask
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    reviewer_identity = 'Ada.1de82e55078344' # str | The ID of reviewer identity. *me* indicates the current user. (optional) # str | The ID of reviewer identity. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'type eq \"ADMIN_REASSIGN\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)

    try:
        # List of Pending Certification Tasks
        
        results =CertificationsApi(api_client).get_pending_certification_tasks()
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).get_pending_certification_tasks(reviewer_identity, limit, offset, count, filters)
        print("The response of CertificationsApi->get_pending_certification_tasks:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->get_pending_certification_tasks: %s\n" % e)
```



[[Back to top]](#) 

## list-certification-reviewers
List of Reviewers for certification
This API returns a list of reviewers for the certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-certification-reviewers)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_reference_with_name_and_email import IdentityReferenceWithNameAndEmail
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

## list-identity-access-review-items
List of Access Review Items
This API returns a list of access review items for an identity campaign certification. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-identity-access-review-items)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName**
  Query | entitlements | **str** |   (optional) | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time.
  Query | access_profiles | **str** |   (optional) | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time.
  Query | roles | **str** |   (optional) | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time.

### Return type
[**List[AccessReviewItem]**](../models/access-review-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of access review items | List[AccessReviewItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_review_item import AccessReviewItem
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The identity campaign certification ID # str | The identity campaign certification ID
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional)
    sorters = 'access.name,-accessProfile.sourceName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** (optional)
    entitlements = 'identityEntitlement' # str | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. (optional) # str | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. (optional)
    access_profiles = 'accessProfile1' # str | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. (optional) # str | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. (optional)
    roles = 'userRole' # str | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. (optional) # str | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. (optional)

    try:
        # List of Access Review Items
        
        results =CertificationsApi(api_client).list_identity_access_review_items(id, )
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).list_identity_access_review_items(id, limit, offset, count, filters, sorters, entitlements, access_profiles, roles)
        print("The response of CertificationsApi->list_identity_access_review_items:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->list_identity_access_review_items: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-certifications
List Identity Campaign Certifications
Use this API to get a list of identity campaign certifications for the specified query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. This API does not support requests for certifications assigned to governance groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-identity-certifications)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | reviewer_identity | **str** |   (optional) | Reviewer's identity. *me* indicates the current user.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed**

### Return type
[**List[IdentityCertificationDto]**](../models/identity-certification-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identity campaign certifications. | List[IdentityCertificationDto] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_certification_dto import IdentityCertificationDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    reviewer_identity = 'me' # str | Reviewer's identity. *me* indicates the current user. (optional) # str | Reviewer's identity. *me* indicates the current user. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \"ef38f94347e94562b5bb8424a56397d8\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* (optional)
    sorters = 'name,due' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional)

    try:
        # List Identity Campaign Certifications
        
        results =CertificationsApi(api_client).list_identity_certifications()
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).list_identity_certifications(reviewer_identity, limit, offset, count, filters, sorters)
        print("The response of CertificationsApi->list_identity_certifications:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->list_identity_certifications: %s\n" % e)
```



[[Back to top]](#) 

## make-identity-decision
Decide on a Certification Item
The API makes a decision to approve or revoke one or more identity campaign certification items. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/make-identity-decision)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the identity campaign certification on which to make decisions
 Body  | review_decision | [**[]ReviewDecision**](../models/review-decision) | True  | A non-empty array of decisions to be made.

### Return type
[**IdentityCertificationDto**](../models/identity-certification-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity campaign certification object | IdentityCertificationDto |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_certification_dto import IdentityCertificationDto
from sailpoint.v2024.models.review_decision import ReviewDecision
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the identity campaign certification on which to make decisions # str | The ID of the identity campaign certification on which to make decisions
    [{id=ef38f94347e94562b5bb8424a56396b5, decision=APPROVE, bulk=true, comments=This user still needs access to this source.}, {id=ef38f94347e94562b5bb8424a56397d8, decision=APPROVE, bulk=true, comments=This user still needs access to this source too.}] # List[ReviewDecision] | A non-empty array of decisions to be made.
     review_decision = {
          "comments" : "This user no longer needs access to this source",
          "decision" : "APPROVE",
          "proposedEndDate" : "2017-07-11T18:45:37.098Z",
          "recommendation" : {
            "reasons" : [ "Reason 1", "Reason 2" ],
            "recommendation" : "recommendation",
            "timestamp" : "2020-06-01T13:49:37.385Z"
          },
          "id" : "ef38f94347e94562b5bb8424a56397d8",
          "bulk" : true
        } # List[ReviewDecision] | A non-empty array of decisions to be made.
    

    try:
        # Decide on a Certification Item
        new_review_decision = ReviewDecision()
        new_review_decision.from_json(review_decision)
        results =CertificationsApi(api_client).make_identity_decision(id, new_review_decision)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).make_identity_decision(id, new_review_decision)
        print("The response of CertificationsApi->make_identity_decision:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->make_identity_decision: %s\n" % e)
```



[[Back to top]](#) 

## reassign-identity-certifications
Reassign Identities or Items
This API reassigns up to 50 identities or items in an identity campaign certification to another reviewer. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/reassign-identity-certifications)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
 Body  | review_reassign | [**ReviewReassign**](../models/review-reassign) | True  | 

### Return type
[**IdentityCertificationDto**](../models/identity-certification-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity campaign certification details after completing the reassignment. | IdentityCertificationDto |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_certification_dto import IdentityCertificationDto
from sailpoint.v2024.models.review_reassign import ReviewReassign
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
        # Reassign Identities or Items
        new_review_reassign = ReviewReassign()
        new_review_reassign.from_json(review_reassign)
        results =CertificationsApi(api_client).reassign_identity_certifications(id, new_review_reassign)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).reassign_identity_certifications(id, new_review_reassign)
        print("The response of CertificationsApi->reassign_identity_certifications:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->reassign_identity_certifications: %s\n" % e)
```



[[Back to top]](#) 

## sign-off-identity-certification
Finalize Identity Certification Decisions
This API finalizes all decisions made on an identity campaign certification and initiates any remediations required. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/sign-off-identity-certification)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID

### Return type
[**IdentityCertificationDto**](../models/identity-certification-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An identity campaign certification object | IdentityCertificationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.identity_certification_dto import IdentityCertificationDto
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The identity campaign certification ID # str | The identity campaign certification ID

    try:
        # Finalize Identity Certification Decisions
        
        results =CertificationsApi(api_client).sign_off_identity_certification(id)
        # Below is a request that includes all optional parameters
        # results = CertificationsApi(api_client).sign_off_identity_certification(id)
        print("The response of CertificationsApi->sign_off_identity_certification:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling CertificationsApi->sign_off_identity_certification: %s\n" % e)
```



[[Back to top]](#) 

## submit-reassign-certs-async
Reassign Certifications Asynchronously
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another
reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the
reassignment is complete. 

Reviewers for this certification can also call this API.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/submit-reassign-certs-async)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The identity campaign certification ID
 Body  | review_reassign | [**ReviewReassign**](../models/review-reassign) | True  | 

### Return type
[**CertificationTask**](../models/certification-task)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A certification task object for the reassignment which can be queried for status. | CertificationTask |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.certifications_api import CertificationsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.certification_task import CertificationTask
from sailpoint.v2024.models.review_reassign import ReviewReassign
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



