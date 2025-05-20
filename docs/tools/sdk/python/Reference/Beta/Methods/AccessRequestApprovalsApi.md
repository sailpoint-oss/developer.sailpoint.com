---
id: beta-access-request-approvals
title: Access_Request_Approvals
pagination_label: Access_Request_Approvals
sidebar_label: Access_Request_Approvals
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Access_Request_Approvals', 'BetaAccess_Request_Approvals'] 
slug: /tools/sdk/python/beta/methods/access-request-approvals
tags: ['SDK', 'Software Development Kit', 'Access_Request_Approvals', 'BetaAccess_Request_Approvals']
---

# sailpoint.beta.AccessRequestApprovalsApi
  Use this API to implement and customize access request approval functionality.
With this functionality in place, administrators can delegate qualified users to review users&#39; requests for access or managers&#39; requests to revoke team members&#39; access to applications, entitlements, or roles.
This enables more qualified users to review access requests and the others to spend their time on other tasks.

In Identity Security Cloud, users can request access to applications, entitlements, and roles, and managers can request that team members&#39; access be revoked.
For applications and entitlements, administrators can set access profiles to require approval from the access profile owner, the application owner, the source owner, the requesting user&#39;s manager, or a governance group for access to be granted or revoked.
For roles, administrators can also set roles to allow access requests and require approval from the role owner, the requesting user&#39;s manager, or a governance group for access to be granted or revoked.
If the administrator designates a governance group as the required approver, any governance group member can approve the requests.

When a user submits an access request, Identity Security Cloud sends the first required approver in the queue an email notification, based on the access request configuration&#39;s approval and reminder escalation configuration.

In Approvals in Identity Security Cloud, required approvers can view pending access requests under the Requested tab and approve or deny them, or the approvers can reassign the requests to different reviewers for approval.
If the required approver approves the request and is the only reviewer required, Identity Security Cloud grants or revokes access, based on the request.
If multiple reviewers are required, Identity Security Cloud sends the request to the next reviewer in the queue, based on the access request configuration&#39;s approval reminder and escalation configuration.
The required approver can then view any completed access requests under the Reviewed tab.

Refer to [Access Requests](https://documentation.sailpoint.com/saas/help/requests/index.html) for more information about access request approvals.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-access-request**](#approve-access-request) | **POST** `/access-request-approvals/{approvalId}/approve` | Approve access request approval
[**forward-access-request**](#forward-access-request) | **POST** `/access-request-approvals/{approvalId}/forward` | Forward access request approval
[**get-access-request-approval-summary**](#get-access-request-approval-summary) | **GET** `/access-request-approvals/approval-summary` | Get access requests approvals number
[**list-completed-approvals**](#list-completed-approvals) | **GET** `/access-request-approvals/completed` | Completed access request approvals list
[**list-pending-approvals**](#list-pending-approvals) | **GET** `/access-request-approvals/pending` | Pending access request approvals list
[**reject-access-request**](#reject-access-request) | **POST** `/access-request-approvals/{approvalId}/reject` | Reject access request approval


## approve-access-request
Approve access request approval
Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/beta/approve-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | approval_id | **str** | True  | Approval ID.
 Body  | comment_dto | [**CommentDto**](../models/comment-dto) | True  | Reviewer's comment.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.beta.api.access_request_approvals_api import AccessRequestApprovalsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.comment_dto import CommentDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    approval_id = '2c91808b7294bea301729568c68c002e' # str | Approval ID. # str | Approval ID.
    comment_dto = '''{
          "author" : {
            "name" : "Adam Kennedy",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "created" : "2017-07-11T18:45:37.098Z",
          "comment" : "This is a comment."
        }''' # CommentDto | Reviewer's comment.

    try:
        # Approve access request approval
        new_comment_dto = CommentDto.from_json(comment_dto)
        results = AccessRequestApprovalsApi(api_client).approve_access_request(approval_id=approval_id, comment_dto=new_comment_dto)
        # Below is a request that includes all optional parameters
        # results = AccessRequestApprovalsApi(api_client).approve_access_request(approval_id, new_comment_dto)
        print("The response of AccessRequestApprovalsApi->approve_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestApprovalsApi->approve_access_request: %s\n" % e)
```



[[Back to top]](#) 

## forward-access-request
Forward access request approval
Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/beta/forward-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | approval_id | **str** | True  | Approval ID.
 Body  | forward_approval_dto | [**ForwardApprovalDto**](../models/forward-approval-dto) | True  | Information about the forwarded approval.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.beta.api.access_request_approvals_api import AccessRequestApprovalsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.forward_approval_dto import ForwardApprovalDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    approval_id = '2c91808b7294bea301729568c68c002e' # str | Approval ID. # str | Approval ID.
    forward_approval_dto = '''{
          "newOwnerId" : "newOwnerId",
          "comment" : "comment"
        }''' # ForwardApprovalDto | Information about the forwarded approval.

    try:
        # Forward access request approval
        new_forward_approval_dto = ForwardApprovalDto.from_json(forward_approval_dto)
        results = AccessRequestApprovalsApi(api_client).forward_access_request(approval_id=approval_id, forward_approval_dto=new_forward_approval_dto)
        # Below is a request that includes all optional parameters
        # results = AccessRequestApprovalsApi(api_client).forward_access_request(approval_id, new_forward_approval_dto)
        print("The response of AccessRequestApprovalsApi->forward_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestApprovalsApi->forward_access_request: %s\n" % e)
```



[[Back to top]](#) 

## get-access-request-approval-summary
Get access requests approvals number
Use this API to return the number of pending, approved and rejected access requests approvals. See the "owner-id" query parameter for authorization information.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-access-request-approval-summary)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  Query | from_date | **str** |   (optional) | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format.

### Return type
[**ApprovalSummary**](../models/approval-summary)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Number of pending, approved, rejected access request approvals. | ApprovalSummary |  -  |
400 | Client Error - Returned if the query parameter is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_request_approvals_api import AccessRequestApprovalsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.approval_summary import ApprovalSummary
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = '2c91808568c529c60168cca6f90c1313' # str | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # str | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    from_date = 'from-date=2020-03-19T19:59:11Z' # str | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional) # str | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional)

    try:
        # Get access requests approvals number
        
        results = AccessRequestApprovalsApi(api_client).get_access_request_approval_summary()
        # Below is a request that includes all optional parameters
        # results = AccessRequestApprovalsApi(api_client).get_access_request_approval_summary(owner_id, from_date)
        print("The response of AccessRequestApprovalsApi->get_access_request_approval_summary:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestApprovalsApi->get_access_request_approval_summary: %s\n" % e)
```



[[Back to top]](#) 

## list-completed-approvals
Completed access request approvals list
This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-completed-approvals)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type
[**List[CompletedApproval]**](../models/completed-approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Completed Approvals. | List[CompletedApproval] |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_request_approvals_api import AccessRequestApprovalsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.completed_approval import CompletedApproval
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = 'owner_id_example' # str | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # str | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'filters_example' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional)
    sorters = 'sorters_example' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

    try:
        # Completed access request approvals list
        
        results = AccessRequestApprovalsApi(api_client).list_completed_approvals()
        # Below is a request that includes all optional parameters
        # results = AccessRequestApprovalsApi(api_client).list_completed_approvals(owner_id, limit, offset, count, filters, sorters)
        print("The response of AccessRequestApprovalsApi->list_completed_approvals:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestApprovalsApi->list_completed_approvals: %s\n" % e)
```



[[Back to top]](#) 

## list-pending-approvals
Pending access request approvals list
This endpoint returns a list of pending approvals. See "owner-id" query parameter below for authorization info.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-pending-approvals)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | owner_id | **str** |   (optional) | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified**

### Return type
[**List[PendingApproval]**](../models/pending-approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Pending Approvals. | List[PendingApproval] |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.access_request_approvals_api import AccessRequestApprovalsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.pending_approval import PendingApproval
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    owner_id = 'owner_id_example' # str | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional) # str | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'filters_example' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in* (optional)
    sorters = 'sorters_example' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)

    try:
        # Pending access request approvals list
        
        results = AccessRequestApprovalsApi(api_client).list_pending_approvals()
        # Below is a request that includes all optional parameters
        # results = AccessRequestApprovalsApi(api_client).list_pending_approvals(owner_id, limit, offset, count, filters, sorters)
        print("The response of AccessRequestApprovalsApi->list_pending_approvals:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestApprovalsApi->list_pending_approvals: %s\n" % e)
```



[[Back to top]](#) 

## reject-access-request
Reject access request approval
Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/beta/reject-access-request)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | approval_id | **str** | True  | Approval ID.
 Body  | comment_dto | [**CommentDto**](../models/comment-dto) | True  | Reviewer's comment.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.beta.api.access_request_approvals_api import AccessRequestApprovalsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.comment_dto import CommentDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    approval_id = '2c91808b7294bea301729568c68c002e' # str | Approval ID. # str | Approval ID.
    comment_dto = '''{
          "author" : {
            "name" : "Adam Kennedy",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "created" : "2017-07-11T18:45:37.098Z",
          "comment" : "This is a comment."
        }''' # CommentDto | Reviewer's comment.

    try:
        # Reject access request approval
        new_comment_dto = CommentDto.from_json(comment_dto)
        results = AccessRequestApprovalsApi(api_client).reject_access_request(approval_id=approval_id, comment_dto=new_comment_dto)
        # Below is a request that includes all optional parameters
        # results = AccessRequestApprovalsApi(api_client).reject_access_request(approval_id, new_comment_dto)
        print("The response of AccessRequestApprovalsApi->reject_access_request:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling AccessRequestApprovalsApi->reject_access_request: %s\n" % e)
```



[[Back to top]](#) 



