---
id: v2025-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Approvals', 'V2025Approvals'] 
slug: /tools/sdk/python/v2025/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'V2025Approvals']
---

# sailpoint.v2025.ApprovalsApi
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/v2025/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval**](#approve-approval) | **POST** `/generic-approvals/{id}/approve` | Post Approvals Approve
[**get-approval**](#get-approval) | **GET** `/generic-approvals/{id}` | Get an approval
[**get-approvals**](#get-approvals) | **GET** `/generic-approvals` | Get approvals
[**reject-approval**](#reject-approval) | **POST** `/generic-approvals/{id}/reject` | Post Approvals Reject
[**update-approvals-attributes**](#update-approvals-attributes) | **POST** `/generic-approvals/{id}/attributes` | Post Approvals Attributes
[**update-approvals-comments**](#update-approvals-comments) | **POST** `/generic-approvals/{id}/comments` | Post Approvals Comments
[**update-approvals-reassign**](#update-approvals-reassign) | **POST** `/generic-approvals/{id}/reassign` | Post Approvals Reassign


## approve-approval
Post Approvals Approve
Currently this endpoint only supports Entitlement Description Approvals.
Approves a specified approval request on behalf of the caller. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. The approval request must be in a state that allows it to be approved.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/approve-approval)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to approve
 Body  | approval_approve_request | [**ApprovalApproveRequest**](../models/approval-approve-request) |   (optional) | 

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.v2025.models.approval_approve_request import ApprovalApproveRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to approve # str | Approval ID that correlates to an existing approval request that a user wants to approve
    approval_approve_request = '''{
          "comment" : "comment",
          "additionalAttributes" : {
            "additionalProp1" : "string",
            "additionalProp2" : "string",
            "additionalProp3" : "string"
          }
        }''' # ApprovalApproveRequest |  (optional)

    try:
        # Post Approvals Approve
        
        results = ApprovalsApi(api_client).approve_approval(id=id)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).approve_approval(id, new_approval_approve_request)
        print("The response of ApprovalsApi->approve_approval:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->approve_approval: %s\n" % e)
```



[[Back to top]](#) 

## get-approval
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
Get an approval
Currently this endpoint only supports Entitlement Description Approvals.
Retrieve a single approval for a given approval ID. This endpoint is for generic approvals, different than the access-request-approval endpoint and does not include access-request-approvals.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approval)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the approval that is to be returned
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | ID of the approval that is to be returned # str | ID of the approval that is to be returned
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get an approval
        
        results = ApprovalsApi(api_client).get_approval(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approval(id, x_sail_point_experimental)
        print("The response of ApprovalsApi->get_approval:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approval: %s\n" % e)
```



[[Back to top]](#) 

## get-approvals
Get approvals
Currently this endpoint only supports Entitlement Description Approvals.
Get a list of approvals. This endpoint is for generic approvals, unlike the access-request-approval endpoint, and does not include access-request-approvals. 
Absence of all query parameters for non admins will will default to mine=true.
Absence of all query parameters for admins will return all approvals in the org.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-approvals)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | mine | **bool** |   (optional) (default to False) | Returns the list of approvals for the current caller.
  Query | requester_id | **str** |   (optional) | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin.
  Query | requestee_id | **str** |   (optional) | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin.
  Query | approver_id | **str** |   (optional) | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin.
  Query | count | **bool** |   (optional) (default to False) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query.
  Query | count_only | **bool** |   (optional) (default to False) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects.
  Query | include_comments | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include comments.
  Query | include_approvers | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include approvers.
  Query | include_batch_info | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include batch information.
  Query | include_batch_info2 | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include batch information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Approval]**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of approvals. | List[Approval] |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    mine = False # bool | Returns the list of approvals for the current caller. (optional) (default to False) # bool | Returns the list of approvals for the current caller. (optional) (default to False)
    requester_id = '17e633e7d57e481569df76323169deb6a' # str | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional) # str | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
    requestee_id = '27e6334g757e481569df76323169db9sc' # str | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional) # str | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    approver_id = '37e6334g557e481569df7g2d3169db9sb' # str | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional) # str | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    count = False # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to False) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to False)
    count_only = False # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to False) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to False)
    include_comments = False # bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to False)
    include_approvers = False # bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to False)
    include_batch_info = False # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to False)
    include_batch_info2 = False # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to False)
    filters = 'filters=status eq PENDING' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **referenceType**: *eq*  **name**: *eq*  **priority**: *eq*  **type**: *eq*  **medium**: *eq*  **description**: *eq*  **batchId**: *eq*  **approvalId**: *eq*  **tenantId**: *eq*  **createdDate**: *eq*  **dueDate**: *eq*  **completedDate**: *eq*  **search**: *eq*  **referenceId**: *eq*  **referenceName**: *eq*  **requestedTargetType**: *eq*  **requestedTargetRequestType**: *eq*  **requestedTargetId**: *eq*  **modifiedDate**: *eq*  **requesterId**: *eq*  **requesteeId**: *eq*  **approverId**: *eq* (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Get approvals
        
        results = ApprovalsApi(api_client).get_approvals()
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approvals(mine, requester_id, requestee_id, approver_id, count, count_only, include_comments, include_approvers, include_batch_info, include_batch_info2, filters, limit, offset)
        print("The response of ApprovalsApi->get_approvals:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approvals: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval
Post Approvals Reject
Currently this endpoint only supports Entitlement Description Approvals.
Rejects a specified approval request on behalf of the caller.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/reject-approval)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to reject.
 Body  | approval_reject_request | [**ApprovalRejectRequest**](../models/approval-reject-request) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval_reject_request import ApprovalRejectRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to reject. # str | Approval ID that correlates to an existing approval request that a user wants to reject.
    approval_reject_request = '''{
          "comment" : "string"
        }''' # ApprovalRejectRequest |  (optional)

    try:
        # Post Approvals Reject
        
        ApprovalsApi(api_client).reject_approval(id=id)
        # Below is a request that includes all optional parameters
        # ApprovalsApi(api_client).reject_approval(id, new_approval_reject_request)
    except Exception as e:
        print("Exception when calling ApprovalsApi->reject_approval: %s\n" % e)
```



[[Back to top]](#) 

## update-approvals-attributes
Post Approvals Attributes
Currently this endpoint only supports Entitlement Description Approvals.
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
 Body  | approval_attributes_request | [**ApprovalAttributesRequest**](../models/approval-attributes-request) | True  | 

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.v2025.models.approval_attributes_request import ApprovalAttributesRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. # str | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
    approval_attributes_request = '''{
          "removeAttributeKeys" : [ "string" ],
          "comment" : "comment",
          "additionalAttributes" : {
            "additionalProp1" : "string",
            "additionalProp2" : "string",
            "additionalProp3" : "string"
          }
        }''' # ApprovalAttributesRequest | 

    try:
        # Post Approvals Attributes
        new_approval_attributes_request = ApprovalAttributesRequest.from_json(approval_attributes_request)
        results = ApprovalsApi(api_client).update_approvals_attributes(id=id, approval_attributes_request=new_approval_attributes_request)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).update_approvals_attributes(id, new_approval_attributes_request)
        print("The response of ApprovalsApi->update_approvals_attributes:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->update_approvals_attributes: %s\n" % e)
```



[[Back to top]](#) 

## update-approvals-comments
Post Approvals Comments
Currently this endpoint only supports Entitlement Description Approvals.
Adds comments to a specified approval request.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-comments)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
 Body  | approval_comments_request | [**ApprovalCommentsRequest**](../models/approval-comments-request) | True  | 

### Return type
[**Approval**](../models/approval)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval import Approval
from sailpoint.v2025.models.approval_comments_request import ApprovalCommentsRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to add a comment to. # str | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
    approval_comments_request = '''{
          "comment" : "Approval comment."
        }''' # ApprovalCommentsRequest | 

    try:
        # Post Approvals Comments
        new_approval_comments_request = ApprovalCommentsRequest.from_json(approval_comments_request)
        results = ApprovalsApi(api_client).update_approvals_comments(id=id, approval_comments_request=new_approval_comments_request)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).update_approvals_comments(id, new_approval_comments_request)
        print("The response of ApprovalsApi->update_approvals_comments:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->update_approvals_comments: %s\n" % e)
```



[[Back to top]](#) 

## update-approvals-reassign
Post Approvals Reassign
Currently this endpoint only supports Entitlement Description Approvals.
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-approvals-reassign)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to reassign.
 Body  | approval_reassign_request | [**ApprovalReassignRequest**](../models/approval-reassign-request) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v2025.api.approvals_api import ApprovalsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.approval_reassign_request import ApprovalReassignRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to reassign. # str | Approval ID that correlates to an existing approval request that a user wants to reassign.
    approval_reassign_request = '''{
          "reassignTo" : "152354832eb6f8f539fd738592e19ec5",
          "comment" : "comment",
          "reassignFrom" : "384532516be25f8fdf935ce19e295837"
        }''' # ApprovalReassignRequest | 

    try:
        # Post Approvals Reassign
        new_approval_reassign_request = ApprovalReassignRequest.from_json(approval_reassign_request)
        ApprovalsApi(api_client).update_approvals_reassign(id=id, approval_reassign_request=new_approval_reassign_request)
        # Below is a request that includes all optional parameters
        # ApprovalsApi(api_client).update_approvals_reassign(id, new_approval_reassign_request)
    except Exception as e:
        print("Exception when calling ApprovalsApi->update_approvals_reassign: %s\n" % e)
```



[[Back to top]](#) 



