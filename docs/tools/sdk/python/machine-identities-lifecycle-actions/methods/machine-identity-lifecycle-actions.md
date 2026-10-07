# Machine_Identity_Lifecycle_Actions

# sailpoint.machine_identities_lifecycle_actions.MachineIdentityLifecycleActionsApi
  Experimental APIs for machine identity lifecycle requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;), including
approval and provisioning status. Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Read and cancel by &#x60;requestId&#x60; return **403** for authorization denials
(&#x60;FORBIDDEN.lifecycle-request-access-denied&#x60;) and non-&#x60;AI_AGENT&#x60; rows
(&#x60;FORBIDDEN.unsupported-type&#x60;). Unknown ids and target-type mismatches return **404**
(&#x60;NOT_FOUND.detailed&#x60;).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-machine-identity-lifecycle-action-v1**](#cancel-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/lifecycle-actions/{requestId}/cancel` | Cancel lifecycle action
[**get-machine-identity-lifecycle-action-v1**](#get-machine-identity-lifecycle-action-v1) | **GET** `/machine-identities/v1/lifecycle-actions/{requestId}` | Get lifecycle action by requestId
[**list-machine-identity-lifecycle-actions-v1**](#list-machine-identity-lifecycle-actions-v1) | **GET** `/machine-identities/v1/lifecycle-actions` | List lifecycle actions
[**submit-machine-identity-lifecycle-action-v1**](#submit-machine-identity-lifecycle-action-v1) | **POST** `/machine-identities/v1/{id}/lifecycle-actions` | Submit machine identity lifecycle action


## cancel-machine-identity-lifecycle-action-v1
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
Cancel lifecycle action
Attempts to cancel a lifecycle request before provisioning starts.

The path `requestId` is authoritative for lookup and authorization. The request body is
optional and may carry cancel metadata such as `comment`. Any `requestId` value in the body is
ignored.

Workflow cancel signaling is attempted before the request is persisted as `CANCELING`. If
signaling fails, the service returns **503** (`DOWNSTREAM_SERVICE_UNAVAILABLE`, cause
`workflow-signal-failed`) and the lifecycle request status is unchanged.

Invalid cancel states are returned as **400** (`INVALID_REQUEST_IN_CURRENT_STATE` variants).

Cancel authorization matches https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1:
the original submitter is always allowed; otherwise callers must have the
`idn:machine-identity-lifecycle-action:manage` scope **and** target role-context access.

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context.
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`.

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType`/target-identity subtype
  mismatch.


[API Spec](https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | request_id | **str** | True  | Lifecycle request identifier.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
 Body  | cancel_lifecycle_action_request | [**CancelLifecycleActionRequest**](../models/cancel-lifecycle-action-request) |   (optional) | 

### Return type
[**CancelLifecycleActionResponse**](../models/cancel-lifecycle-action-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The lifecycle request cancel was accepted. | CancelLifecycleActionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities_lifecycle_actions.api.machine_identity_lifecycle_actions_api import MachineIdentityLifecycleActionsApi
from sailpoint.machine_identities_lifecycle_actions.api_client import ApiClient
from sailpoint.machine_identities_lifecycle_actions.models.cancel_lifecycle_action_request import CancelLifecycleActionRequest
from sailpoint.machine_identities_lifecycle_actions.models.cancel_lifecycle_action_response import CancelLifecycleActionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    request_id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' # str | Lifecycle request identifier. # str | Lifecycle request identifier.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    cancel_lifecycle_action_request = '''{
          "comment" : "Cancelling - will resubmit after maintenance window"
        }''' # CancelLifecycleActionRequest |  (optional)

    try:
        # Cancel lifecycle action
        
        results = MachineIdentityLifecycleActionsApi(api_client).cancel_machine_identity_lifecycle_action_v1(request_id=request_id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentityLifecycleActionsApi(api_client).cancel_machine_identity_lifecycle_action_v1(request_id, x_sail_point_experimental, new_cancel_lifecycle_action_request)
        print("The response of MachineIdentityLifecycleActionsApi->cancel_machine_identity_lifecycle_action_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentityLifecycleActionsApi->cancel_machine_identity_lifecycle_action_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity-lifecycle-action-v1
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
Get lifecycle action by requestId
Returns one lifecycle request snapshot by `requestId`. Used for request-level inspection,
including cancel acceptance and subsequent status changes.

The original requester is always allowed to read their request. Otherwise, callers must have
the `idn:machine-identity-lifecycle-action:manage` scope **and** role-context access to the target
machine identity (organization admin, source admin, scoped source sub-admin, or effective owner).

**403 Forbidden**

- `FORBIDDEN.lifecycle-request-access-denied` - caller is not the submitter and lacks both the
  `idn:machine-identity-lifecycle-action:manage` scope and target role-context (response includes `requestId` as a parameter).
- `FORBIDDEN.unsupported-type` - the persisted lifecycle row is not scoped to `AI_AGENT`
  (`targetType` on read-by-request-id paths).

**404 Not Found**

- `NOT_FOUND.detailed` - unknown `requestId`, or persisted `targetType` does not match the
  target machine identity's subtype-to-resource-type mapping.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | request_id | **str** | True  | Lifecycle request identifier.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**LifecycleActionRequest**](../models/lifecycle-action-request)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Lifecycle action request snapshot. | LifecycleActionRequest |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities_lifecycle_actions.api.machine_identity_lifecycle_actions_api import MachineIdentityLifecycleActionsApi
from sailpoint.machine_identities_lifecycle_actions.api_client import ApiClient
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_request import LifecycleActionRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    request_id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' # str | Lifecycle request identifier. # str | Lifecycle request identifier.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get lifecycle action by requestId
        
        results = MachineIdentityLifecycleActionsApi(api_client).get_machine_identity_lifecycle_action_v1(request_id=request_id)
        # Below is a request that includes all optional parameters
        # results = MachineIdentityLifecycleActionsApi(api_client).get_machine_identity_lifecycle_action_v1(request_id, x_sail_point_experimental)
        print("The response of MachineIdentityLifecycleActionsApi->get_machine_identity_lifecycle_action_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentityLifecycleActionsApi->get_machine_identity_lifecycle_action_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identity-lifecycle-actions-v1
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
List lifecycle actions
Lists lifecycle requests visible to the requester identity in the current request context.

Results are automatically scoped to the calling identity. If requester identity context is
missing, an empty list is returned.

When `limit` is omitted, this endpoint applies a default limit of 50.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first).
  Query | limit | **int** |   (optional) (default to 50) | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[LifecycleActionRequest]**](../models/lifecycle-action-request)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of lifecycle action requests for the requester. | List[LifecycleActionRequest] |  * X-Total-Count - The total result count (returned when count=true is passed).  * Cache-Control - Response cache directive for requester-scoped polling.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities_lifecycle_actions.api.machine_identity_lifecycle_actions_api import MachineIdentityLifecycleActionsApi
from sailpoint.machine_identities_lifecycle_actions.api_client import ApiClient
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_request import LifecycleActionRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'status in (\"RECEIVED\",\"COMPLETED\")' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **resourceType**: *eq, in*  **operationType**: *eq, in*  **status**: *eq, in*  **completed**: *eq*  **targetId**: *eq*  **targetName**: *eq, sw*  **sourceId**: *eq*  **created**: *gt, ge, lt, le* (optional)
    sorters = '-created' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, status**  Default sort is **-created** (newest first). (optional)
    limit = 50 # int | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Max number of results to return. When omitted, the default limit is 50. The maximum allowed limit is 250.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List lifecycle actions
        
        results = MachineIdentityLifecycleActionsApi(api_client).list_machine_identity_lifecycle_actions_v1()
        # Below is a request that includes all optional parameters
        # results = MachineIdentityLifecycleActionsApi(api_client).list_machine_identity_lifecycle_actions_v1(filters, sorters, limit, offset, count, x_sail_point_experimental)
        print("The response of MachineIdentityLifecycleActionsApi->list_machine_identity_lifecycle_actions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentityLifecycleActionsApi->list_machine_identity_lifecycle_actions_v1: %s\n" % e)
```



[[Back to top]](#) 

## submit-machine-identity-lifecycle-action-v1
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
Submit machine identity lifecycle action
Creates a lifecycle request for the target machine identity and returns the created lifecycle
snapshot.

The response includes the generated `requestId`, which is used by
https://developer.sailpoint.com/docs/api/list-machine-identity-lifecycle-actions-v-1,
https://developer.sailpoint.com/docs/api/get-machine-identity-lifecycle-action-v-1, and
https://developer.sailpoint.com/docs/api/cancel-machine-identity-lifecycle-action-v-1

Authorization is enforced in the service layer. Callers must have the
`idn:machine-identity-lifecycle-action:manage` scope or role-context access to the target machine
identity (organization admin, source admin, scoped source sub-admin, or effective owner).

Supported actions are `DEACTIVATE`, `ACTIVATE`.


[API Spec](https://developer.sailpoint.com/docs/api/submit-machine-identity-lifecycle-action-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine identity ID.
 Body  | lifecycle_action_submit_request | [**LifecycleActionSubmitRequest**](../models/lifecycle-action-submit-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**LifecycleActionSubmitResponse**](../models/lifecycle-action-submit-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The lifecycle request was created. | LifecycleActionSubmitResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SubmitMachineIdentityLifecycleActionV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SubmitMachineIdentityLifecycleActionV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_identities_lifecycle_actions.api.machine_identity_lifecycle_actions_api import MachineIdentityLifecycleActionsApi
from sailpoint.machine_identities_lifecycle_actions.api_client import ApiClient
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_submit_request import LifecycleActionSubmitRequest
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_submit_response import LifecycleActionSubmitResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0' # str | Machine identity ID. # str | Machine identity ID.
    lifecycle_action_submit_request = '''{
          "comments" : [ {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          }, {
            "comment" : "Suspending agent until security review completes"
          } ],
          "action" : "DEACTIVATE"
        }''' # LifecycleActionSubmitRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Submit machine identity lifecycle action
        new_lifecycle_action_submit_request = LifecycleActionSubmitRequest.from_json(lifecycle_action_submit_request)
        results = MachineIdentityLifecycleActionsApi(api_client).submit_machine_identity_lifecycle_action_v1(id=id, lifecycle_action_submit_request=new_lifecycle_action_submit_request)
        # Below is a request that includes all optional parameters
        # results = MachineIdentityLifecycleActionsApi(api_client).submit_machine_identity_lifecycle_action_v1(id, new_lifecycle_action_submit_request, x_sail_point_experimental)
        print("The response of MachineIdentityLifecycleActionsApi->submit_machine_identity_lifecycle_action_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentityLifecycleActionsApi->submit_machine_identity_lifecycle_action_v1: %s\n" % e)
```



[[Back to top]](#) 



