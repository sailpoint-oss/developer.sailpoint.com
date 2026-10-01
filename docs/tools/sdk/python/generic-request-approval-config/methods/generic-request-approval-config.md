# Generic_Request_Approval_Config

# sailpoint.generic_request_approval_config.GenericRequestApprovalConfigApi
  Experimental APIs for resource-level and global approval settings used by agent lifecycle
requests (&#x60;ACTIVATE&#x60;, &#x60;DEACTIVATE&#x60;). Pass the &#x60;X-SailPoint-Experimental&#x60; header on every request.

Query parameters address the config because &#x60;targetId&#x60; can be a connector resource id
(for example &#x60;aws:bedrock-agent-alias-version&#x60;) that is not URL-safe as a path segment.
&#x60;sourceId&#x60; is a query parameter only and is never returned on the document.

An empty per-action object &#x60;\{\}&#x60; means no configuration at this scope. At submit, RESOURCE
is used first, then GLOBAL, then org-level agent request configuration.
There is no &#x60;approvalRequired&#x60; flag.

These routes require product &#x60;AGENTIC_IDENTITY_PROVISIONING&#x60; and LaunchDarkly flag
&#x60;MIS_2160_GENERIC_REQUEST_APPROVAL_CONFIG_API_ENABLED&#x60;. When the product is not licensed the
route looks absent (**404**). When the flag is off the API returns **403** with
&#x60;The requested endpoint is not yet enabled&#x60;.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-generic-request-approval-config-v1**](#get-generic-request-approval-config-v1) | **GET** `/generic-request-approval-config/v1` | Get generic request approval config
[**patch-generic-request-approval-config-v1**](#patch-generic-request-approval-config-v1) | **PATCH** `/generic-request-approval-config/v1/{id}` | Patch generic request approval config


## get-generic-request-approval-config-v1
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
Get generic request approval config
Returns the approval configuration document for one scope.

Scope rules for Phase II agent requests:

| targetType | Allowed actions | targetId | sourceId |
|------------|-----------------|----------|----------|
| RESOURCE | ACTIVATE, DEACTIVATE | Required. Connector resource **id**, not the `std:*` type. Resolved resource type must be `std:agent`. | Required |
| GLOBAL | ACTIVATE, DEACTIVATE | Derived (tenant id). Omit. | Must be omitted |

`DELETE_AT_SOURCE` is not returned and cannot be configured on this API.

A scope that has never been saved still returns **200**. Every allowed action is
present. Unset actions are `{}` (no config at this scope; submit uses RESOURCE, then GLOBAL,
then org-level). The first successful GET
materializes a row so the response `id` can be used on PATCH.

Unknown source, missing or invalid query params, a RESOURCE `targetId` the source
does not advertise, or a resource whose type is not `std:agent` return **400**.
Product not licensed returns **404**. Flag off, missing experimental header, or
insufficient rights return **403**.


[API Spec](https://developer.sailpoint.com/docs/api/get-generic-request-approval-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | target_type | [**GenericRequestTargetType**](../models/generic-request-target-type) | True  | Scope of the configuration document.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | target_id | **str** |   (optional) | Required for RESOURCE and SUBTYPE. Connector resource id for RESOURCE (for example `aws:bedrock-agent-alias-version`). Omit for GLOBAL.
  Query | source_id | **str** |   (optional) | Required for RESOURCE, SUBTYPE, and SOURCE. Must be omitted for GLOBAL.

### Return type
[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Approval configuration document for the requested scope. | GenericRequestApprovalConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetGenericRequestApprovalConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetGenericRequestApprovalConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.generic_request_approval_config.api.generic_request_approval_config_api import GenericRequestApprovalConfigApi
from sailpoint.generic_request_approval_config.api_client import ApiClient
from sailpoint.generic_request_approval_config.models.generic_request_approval_config import GenericRequestApprovalConfig
from sailpoint.generic_request_approval_config.models.generic_request_target_type import GenericRequestTargetType
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    target_type = sailpoint.generic_request_approval_config.GenericRequestTargetType() # GenericRequestTargetType | Scope of the configuration document. # GenericRequestTargetType | Scope of the configuration document.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    target_id = 'aws:bedrock-agent-alias-version' # str | Required for RESOURCE and SUBTYPE. Connector resource id for RESOURCE (for example `aws:bedrock-agent-alias-version`). Omit for GLOBAL. (optional) # str | Required for RESOURCE and SUBTYPE. Connector resource id for RESOURCE (for example `aws:bedrock-agent-alias-version`). Omit for GLOBAL. (optional)
    source_id = 'a86e1ab28a844b98b31dbe0ae531d867' # str | Required for RESOURCE, SUBTYPE, and SOURCE. Must be omitted for GLOBAL. (optional) # str | Required for RESOURCE, SUBTYPE, and SOURCE. Must be omitted for GLOBAL. (optional)

    try:
        # Get generic request approval config
        
        results = GenericRequestApprovalConfigApi(api_client).get_generic_request_approval_config_v1(target_type=target_type)
        # Below is a request that includes all optional parameters
        # results = GenericRequestApprovalConfigApi(api_client).get_generic_request_approval_config_v1(target_type, x_sail_point_experimental, target_id, source_id)
        print("The response of GenericRequestApprovalConfigApi->get_generic_request_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GenericRequestApprovalConfigApi->get_generic_request_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-generic-request-approval-config-v1
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
Patch generic request approval config
Updates stored approval configuration with an RFC 6902 JSON Patch.

Patchable paths are `/approvalConfig` and `/approvalConfig/{ACTION}` for each action
in the row's `targetType` vocabulary. For RESOURCE and GLOBAL those actions are
`ACTIVATE` and `DEACTIVATE`.

`id`, `targetType`, `targetId`, and `sourceId` are not patchable.
`/approvalConfig/DELETE_AT_SOURCE` is rejected with **400**.

Replace an action with `{}` (or remove it) to clear this scope. Submit then uses RESOURCE,
then GLOBAL, then org-level agent request configuration. Empty action objects are not persisted.

Allowed approver tokens for RESOURCE ACTIVATE and DEACTIVATE:
`sourceOwner`, `manager`, `machineIdentityPrimaryOwner`,
`machineIdentitySecondaryOwners`, `machineIdentityAllOwners`,
`workgroup:[workgroupId]`, `identity:[identityId]`.
`accountOwner` is not allowed on those actions. Role tokens may appear once.
`workgroup:` and `identity:` may repeat with distinct ids.

GLOBAL writes accept `scheme: WORKFLOW` only.
Unknown `id` returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-generic-request-approval-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Config id returned by GET.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch document used to update approvalConfig.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**GenericRequestApprovalConfig**](../models/generic-request-approval-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Full document after the patch, same shape as GET. | GenericRequestApprovalConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetGenericRequestApprovalConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetGenericRequestApprovalConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json, application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.generic_request_approval_config.api.generic_request_approval_config_api import GenericRequestApprovalConfigApi
from sailpoint.generic_request_approval_config.api_client import ApiClient
from sailpoint.generic_request_approval_config.models.generic_request_approval_config import GenericRequestApprovalConfig
from sailpoint.generic_request_approval_config.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'f0948adc-06f7-435b-a8fd-a06861012470' # str | Config id returned by GET. # str | Config id returned by GET.
    json_patch_operation = '''[{"op":"replace","path":"/approvalConfig/ACTIVATE","value":{"scheme":"APPROVAL","approvers":"sourceOwner, manager","comments":"REJECTION"}},{"op":"replace","path":"/approvalConfig/DEACTIVATE","value":{}}]''' # List[JsonPatchOperation] | JSON Patch document used to update approvalConfig.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch generic request approval config
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = GenericRequestApprovalConfigApi(api_client).patch_generic_request_approval_config_v1(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = GenericRequestApprovalConfigApi(api_client).patch_generic_request_approval_config_v1(id, new_json_patch_operation, x_sail_point_experimental)
        print("The response of GenericRequestApprovalConfigApi->patch_generic_request_approval_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling GenericRequestApprovalConfigApi->patch_generic_request_approval_config_v1: %s\n" % e)
```



[[Back to top]](#) 



