# Approvals

# sailpoint.approvals.ApprovalsApi
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-in-bulk-v1**](#approve-approval-in-bulk-v1) | **POST** `/generic-approvals/v1/bulk-approve` | Post Bulk Approve Approvals
[**approve-approval-v1**](#approve-approval-v1) | **POST** `/generic-approvals/v1/{id}/approve` | Post Approvals Approve
[**cancel-approval-by-id-v1**](#cancel-approval-by-id-v1) | **POST** `/generic-approvals/v1/{id}/cancel` | Post Approval Cancel
[**cancel-approval-v1**](#cancel-approval-v1) | **POST** `/generic-approvals/v1/bulk-cancel` | Post Bulk Cancel Approvals
[**delete-approval-config-request-v1**](#delete-approval-config-request-v1) | **DELETE** `/generic-approvals/v1/config/{id}/{scope}` | Delete Approval Configuration
[**get-approval-v1**](#get-approval-v1) | **GET** `/generic-approvals/v1/{id}` | Get an approval
[**get-approvals-config-v1**](#get-approvals-config-v1) | **GET** `/generic-approvals/v1/config/{id}` | Get Approval Config
[**get-approvals-v1**](#get-approvals-v1) | **GET** `/generic-approvals/v1` | Get approvals
[**move-approval-v1**](#move-approval-v1) | **POST** `/generic-approvals/v1/bulk-reassign` | Post Bulk Reassign Approvals
[**put-approvals-config-v1**](#put-approvals-config-v1) | **PUT** `/generic-approvals/v1/config/{id}/{scope}` | Put Approval Config
[**reject-approval-in-bulk-v1**](#reject-approval-in-bulk-v1) | **POST** `/generic-approvals/v1/bulk-reject` | Post Bulk Reject Approvals
[**reject-approval-v1**](#reject-approval-v1) | **POST** `/generic-approvals/v1/{id}/reject` | Post Approvals Reject
[**update-approvals-attributes-v1**](#update-approvals-attributes-v1) | **POST** `/generic-approvals/v1/{id}/attributes` | Post Approvals Attributes
[**update-approvals-comments-v1**](#update-approvals-comments-v1) | **POST** `/generic-approvals/v1/{id}/comments` | Post Approvals Comments
[**update-approvals-reassign-v1**](#update-approvals-reassign-v1) | **POST** `/generic-approvals/v1/{id}/reassign` | Post Approvals Reassign


## approve-approval-in-bulk-v1
Post Bulk Approve Approvals
Bulk Approves specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_approve_request_dto | [**BulkApproveRequestDTO**](../models/bulk-approve-request-dto) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.bulk_approve_request_dto import BulkApproveRequestDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_approve_request_dto = '''{
          "comment" : "Bulk approved by admin for monthly review",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ],
          "additionalAttributes" : {
            "source" : "automation",
            "urgency" : "high"
          }
        }''' # BulkApproveRequestDTO | 

    try:
        # Post Bulk Approve Approvals
        new_bulk_approve_request_dto = BulkApproveRequestDto.from_json(bulk_approve_request_dto)
        results = ApprovalsApi(api_client).approve_approval_in_bulk_v1(bulk_approve_request_dto=new_bulk_approve_request_dto)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).approve_approval_in_bulk_v1(new_bulk_approve_request_dto)
        print("The response of ApprovalsApi->approve_approval_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->approve_approval_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## approve-approval-v1
Post Approvals Approve
Approves a specified approval request on behalf of the caller. The approval request must be in a state that allows it to be approved. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to approve.
 Body  | approval_approve_request | [**ApprovalApproveRequest**](../models/approval-approve-request) |   (optional) | 

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval2 import Approval2
from sailpoint.approvals.models.approval_approve_request import ApprovalApproveRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to approve. # str | Approval ID that correlates to an existing approval request that a user wants to approve.
    approval_approve_request = '''{
          "overrideApproverID" : "12345678901234567890123456789012",
          "comment" : "comment",
          "additionalAttributes" : {
            "additionalProp1" : "string",
            "additionalProp2" : "string",
            "additionalProp3" : "string"
          }
        }''' # ApprovalApproveRequest |  (optional)

    try:
        # Post Approvals Approve
        
        results = ApprovalsApi(api_client).approve_approval_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).approve_approval_v1(id, new_approval_approve_request)
        print("The response of ApprovalsApi->approve_approval_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->approve_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## cancel-approval-by-id-v1
Post Approval Cancel
Cancels a specified approval requests on behalf of the caller. 
Note: This endpoint does not support access request IDs. To cancel access request approvals, please use the following:
/access-requests/cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-by-id-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the approval request to cancel.
 Body  | approval_cancel_request | [**ApprovalCancelRequest**](../models/approval-cancel-request) |   (optional) | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval_cancel_request import ApprovalCancelRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | ID of the approval request to cancel. # str | ID of the approval request to cancel.
    approval_cancel_request = '''{
          "comment" : "Cancelled by administrator"
        }''' # ApprovalCancelRequest |  (optional)

    try:
        # Post Approval Cancel
        
        ApprovalsApi(api_client).cancel_approval_by_id_v1(id=id)
        # Below is a request that includes all optional parameters
        # ApprovalsApi(api_client).cancel_approval_by_id_v1(id, new_approval_cancel_request)
    except Exception as e:
        print("Exception when calling ApprovalsApi->cancel_approval_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 

## cancel-approval-v1
Post Bulk Cancel Approvals
Bulk cancels specified approval requests on behalf of the caller. 
Note: To bulk cancel access request approvals, please use the following:
/access-requests/bulk-cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_cancel_request_dto | [**BulkCancelRequestDTO**](../models/bulk-cancel-request-dto) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.bulk_cancel_request_dto import BulkCancelRequestDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_cancel_request_dto = '''{
          "comment" : "Bulk cancellation by admin",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
        }''' # BulkCancelRequestDTO | 

    try:
        # Post Bulk Cancel Approvals
        new_bulk_cancel_request_dto = BulkCancelRequestDto.from_json(bulk_cancel_request_dto)
        results = ApprovalsApi(api_client).cancel_approval_v1(bulk_cancel_request_dto=new_bulk_cancel_request_dto)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).cancel_approval_v1(new_bulk_cancel_request_dto)
        print("The response of ApprovalsApi->cancel_approval_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->cancel_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-approval-config-request-v1
Delete Approval Configuration
Deletes an approval configuration.
Configurations at the APPROVAL_REQUEST scope cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-approval-config-request-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
Path   | scope | **str** | True  | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ACCESS_REQUEST_APPROVAL' # str | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID.  # str | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
    scope = 'APPROVAL_TYPE' # str | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID.  # str | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

    try:
        # Delete Approval Configuration
        
        ApprovalsApi(api_client).delete_approval_config_request_v1(id=id, scope=scope)
        # Below is a request that includes all optional parameters
        # ApprovalsApi(api_client).delete_approval_config_request_v1(id, scope)
    except Exception as e:
        print("Exception when calling ApprovalsApi->delete_approval_config_request_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-approval-v1
Get an approval
Fetches an approval request by it's approval ID. For lookups by access request ID please use the following:
/generic-approvals?filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"

[API Spec](https://developer.sailpoint.com/docs/api/get-approval-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the approval that is to be returned

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval2 import Approval2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | ID of the approval that is to be returned # str | ID of the approval that is to be returned

    try:
        # Get an approval
        
        results = ApprovalsApi(api_client).get_approval_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approval_v1(id)
        print("The response of ApprovalsApi->get_approval_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-approvals-config-v1
Get Approval Config
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

### Return type
[**ApprovalConfig**](../models/approval-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | ApprovalConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval_config import ApprovalConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ACCESS_REQUEST_APPROVAL' # str | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID.  # str | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 

    try:
        # Get Approval Config
        
        results = ApprovalsApi(api_client).get_approvals_config_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approvals_config_v1(id)
        print("The response of ApprovalsApi->get_approvals_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approvals_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-approvals-v1
Get approvals
Gets a list of approvals.

One of the following query parameters should be present: 'mine', 'approverId', 'requesterId', 'requesteeId'.

The absence of all query parameters for non admins will default to mine=true (which is the equivalent of 'approverId=[your_identity_id]') 
while admins will default to mine=false (which will show all approvals in the org).

For lookups by access request ID please use the following:

'/generic-approvals?mine=false&filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"'

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | mine | **bool** |   (optional) (default to False) | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]').
  Query | requester_id | **str** |   (optional) | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin.
  Query | requestee_id | **str** |   (optional) | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin.
  Query | approver_id | **str** |   (optional) | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin.
  Query | count | **bool** |   (optional) (default to False) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query.
  Query | count_only | **bool** |   (optional) (default to False) | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects.
  Query | include_comments | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include comments.
  Query | include_approvers | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include approvers.
  Query | include_reassignment_history | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include reassignment history.
  Query | include_batch_info | **bool** |   (optional) (default to False) | If set to true in the query, the approval requests returned will include batch information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Approval2]**](../models/approval2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of approvals. | List[Approval2] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval2 import Approval2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    mine = False # bool | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]'). (optional) (default to False) # bool | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of 'approverId=[your_identity_id]'). (optional) (default to False)
    requester_id = '17e633e7d57e481569df76323169deb6a' # str | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional) # str | Returns the list of approvals for a given requester ID. Must match the calling user's identity ID unless they are an admin. (optional)
    requestee_id = '27e6334g757e481569df76323169db9sc' # str | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional) # str | Returns the list of approvals for a given requesteeId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    approver_id = '37e6334g557e481569df7g2d3169db9sb' # str | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional) # str | Returns the list of approvals for a given approverId ID. Must match the calling user's identity ID unless they are an admin. (optional)
    count = False # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to False) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional) (default to False)
    count_only = False # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to False) # bool | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional) (default to False)
    include_comments = False # bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include comments. (optional) (default to False)
    include_approvers = False # bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include approvers. (optional) (default to False)
    include_reassignment_history = False # bool | If set to true in the query, the approval requests returned will include reassignment history. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include reassignment history. (optional) (default to False)
    include_batch_info = False # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to False) # bool | If set to true in the query, the approval requests returned will include batch information. (optional) (default to False)
    filters = 'filters=status eq \"PENDING\" and type eq \"ACCESS_REQUEST_APPROVAL\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Get approvals
        
        results = ApprovalsApi(api_client).get_approvals_v1()
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).get_approvals_v1(mine, requester_id, requestee_id, approver_id, count, count_only, include_comments, include_approvers, include_reassignment_history, include_batch_info, filters, limit, offset)
        print("The response of ApprovalsApi->get_approvals_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->get_approvals_v1: %s\n" % e)
```



[[Back to top]](#) 

## move-approval-v1
Post Bulk Reassign Approvals
Bulk reassigns specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/move-approval-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_reassign_request_dto | [**BulkReassignRequestDTO**](../models/bulk-reassign-request-dto) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.bulk_reassign_request_dto import BulkReassignRequestDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_reassign_request_dto = '''{
          "reassignTo" : "32454251-6ce2-5d8f-df93-5ce19e295238",
          "comment" : "Bulk reassignment by admin",
          "reassignFrom" : "12353251-6be2-5f8f-df93-5ce19b6e5837",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
        }''' # BulkReassignRequestDTO | 

    try:
        # Post Bulk Reassign Approvals
        new_bulk_reassign_request_dto = BulkReassignRequestDto.from_json(bulk_reassign_request_dto)
        results = ApprovalsApi(api_client).move_approval_v1(bulk_reassign_request_dto=new_bulk_reassign_request_dto)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).move_approval_v1(new_bulk_reassign_request_dto)
        print("The response of ApprovalsApi->move_approval_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->move_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-approvals-config-v1
Put Approval Config
Upserts a singular approval configuration that matches the given configID and configScope. 
For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'

[API Spec](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
Path   | scope | **str** | True  | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
 Body  | approval_config | [**ApprovalConfig**](../models/approval-config) | True  | 

### Return type
[**ApprovalConfig**](../models/approval-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Verified Email Status | ApprovalConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval_config import ApprovalConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ACCESS_REQUEST_APPROVAL' # str | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID.  # str | The ID defined by the scope field, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
    scope = 'APPROVAL_TYPE' # str | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID.  # str | The scope that defines the type of id, where id/scope is the following:  * `{accountID}`/`ACCOUNT` * `{roleID}`/`ROLE` * `{entitlementID}`/`ENTITLEMENT` * `{accessProfileID}`/`ACCESS_PROFILE` * `{domainObjectID}`/`DOMAIN_OBJECT` * `ENTITLEMENT_DESCRIPTIONS`/`APPROVAL_TYPE` * `ACCESS_REQUEST_APPROVAL`/`APPROVAL_TYPE` * `ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST`/`APPROVAL_TYPE` * `AGENT_ACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `AGENT_DEACTIVATE_APPROVAL`/`APPROVAL_TYPE` * `{tenantID}`/`TENANT`  Replace placeholders such as `{roleID}` with the actual resource ID. 
    approval_config = '''{
          "timeoutConfig" : {
            "daysUntilTimeout" : 2,
            "enabled" : true,
            "timeoutResult" : "EXPIRED"
          },
          "requiresComment" : "ALL",
          "cronTimezone" : {
            "offset" : "",
            "location" : "America/New_York"
          },
          "fallbackApprover" : {
            "identityID" : "fdfda352157d4cc79bb749953131b457",
            "type" : "MANAGER_OF"
          },
          "reminderConfig" : {
            "reminderCronSchedule" : "@every 24h",
            "daysUntilFirstReminder" : 0,
            "maxReminders" : 5,
            "enabled" : false
          },
          "circumventApprovalProcess" : false,
          "escalationConfig" : {
            "escalationCronSchedule" : "@every 72h",
            "escalationChain" : [ {
              "identityType" : "IDENTITY",
              "identityId" : "fdfda352157d4cc79bb749953131b457"
            }, {
              "identityType" : "IDENTITY",
              "identityId" : "fdfda352157d4cc79bb749953131b457"
            } ],
            "daysUntilFirstEscalation" : 2,
            "enabled" : true
          },
          "serialChain" : [ {
            "identityType" : "IDENTITY",
            "identityId" : "2c9180858090ea8801809a0465e829da"
          }, {
            "identityType" : "IDENTITY",
            "identityId" : "2c9180858090ea8801809a0465e829da"
          } ],
          "machineIdentityManagerAssignment" : "MACHINE_IDENTITY_OWNER",
          "autoApprove" : "OFF"
        }''' # ApprovalConfig | 

    try:
        # Put Approval Config
        new_approval_config = ApprovalConfig.from_json(approval_config)
        results = ApprovalsApi(api_client).put_approvals_config_v1(id=id, scope=scope, approval_config=new_approval_config)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).put_approvals_config_v1(id, scope, new_approval_config)
        print("The response of ApprovalsApi->put_approvals_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->put_approvals_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval-in-bulk-v1
Post Bulk Reject Approvals
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-in-bulk-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_reject_request_dto | [**BulkRejectRequestDTO**](../models/bulk-reject-request-dto) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.bulk_reject_request_dto import BulkRejectRequestDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_reject_request_dto = '''{
          "comment" : "Bulk reject by admin",
          "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
        }''' # BulkRejectRequestDTO | 

    try:
        # Post Bulk Reject Approvals
        new_bulk_reject_request_dto = BulkRejectRequestDto.from_json(bulk_reject_request_dto)
        results = ApprovalsApi(api_client).reject_approval_in_bulk_v1(bulk_reject_request_dto=new_bulk_reject_request_dto)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).reject_approval_in_bulk_v1(new_bulk_reject_request_dto)
        print("The response of ApprovalsApi->reject_approval_in_bulk_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->reject_approval_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## reject-approval-v1
Post Approvals Reject
Rejects a specified approval request on behalf of the caller. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user and approved.

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval_reject_request import ApprovalRejectRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '38453251-6be2-5f8f-df93-5ce19e295837' # str | Approval ID that correlates to an existing approval request that a user wants to reject. # str | Approval ID that correlates to an existing approval request that a user wants to reject.
    approval_reject_request = '''{
          "overrideApproverID" : "12345678901234567890123456789012",
          "comment" : "string"
        }''' # ApprovalRejectRequest |  (optional)

    try:
        # Post Approvals Reject
        
        ApprovalsApi(api_client).reject_approval_v1(id=id)
        # Below is a request that includes all optional parameters
        # ApprovalsApi(api_client).reject_approval_v1(id, new_approval_reject_request)
    except Exception as e:
        print("Exception when calling ApprovalsApi->reject_approval_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-approvals-attributes-v1
Post Approvals Attributes
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
 Body  | approval_attributes_request | [**ApprovalAttributesRequest**](../models/approval-attributes-request) | True  | 

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval2 import Approval2
from sailpoint.approvals.models.approval_attributes_request import ApprovalAttributesRequest
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
        results = ApprovalsApi(api_client).update_approvals_attributes_v1(id=id, approval_attributes_request=new_approval_attributes_request)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).update_approvals_attributes_v1(id, new_approval_attributes_request)
        print("The response of ApprovalsApi->update_approvals_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->update_approvals_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-approvals-comments-v1
Post Approvals Comments
Adds comments to a specified approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-comments-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Approval ID that correlates to an existing approval request that a user wants to add a comment to.
 Body  | approval_comments_request | [**ApprovalCommentsRequest**](../models/approval-comments-request) | True  | 

### Return type
[**Approval2**](../models/approval2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval object | Approval2 |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval2 import Approval2
from sailpoint.approvals.models.approval_comments_request import ApprovalCommentsRequest
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
        results = ApprovalsApi(api_client).update_approvals_comments_v1(id=id, approval_comments_request=new_approval_comments_request)
        # Below is a request that includes all optional parameters
        # results = ApprovalsApi(api_client).update_approvals_comments_v1(id, new_approval_comments_request)
        print("The response of ApprovalsApi->update_approvals_comments_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ApprovalsApi->update_approvals_comments_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-approvals-reassign-v1
Post Approvals Reassign
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-reassign-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetApprovalsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetApprovalsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.approvals.api.approvals_api import ApprovalsApi
from sailpoint.approvals.api_client import ApiClient
from sailpoint.approvals.models.approval_reassign_request import ApprovalReassignRequest
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
        ApprovalsApi(api_client).update_approvals_reassign_v1(id=id, approval_reassign_request=new_approval_reassign_request)
        # Below is a request that includes all optional parameters
        # ApprovalsApi(api_client).update_approvals_reassign_v1(id, new_approval_reassign_request)
    except Exception as e:
        print("Exception when calling ApprovalsApi->update_approvals_reassign_v1: %s\n" % e)
```



[[Back to top]](#) 



