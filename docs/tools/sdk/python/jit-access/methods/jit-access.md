# JIT_Access

# sailpoint.jit_access.JITAccessApi
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-jit-activation-config-v1**](#get-jit-activation-config-v1) | **GET** `/jit-activation-config/v1/{configType}` | Get JIT activation policy configuration
[**patch-jit-activation-config-v1**](#patch-jit-activation-config-v1) | **PATCH** `/jit-activation-config/v1/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config-v1
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
Get JIT activation policy configuration
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/get-jit-activation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | config_type | **str** | True  | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**JITActivationConfigResponse**](../models/jit-activation-config-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Current JIT activation policy configuration, including limits, entitlements in scope, and notification-related fields. | JITActivationConfigResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetJitActivationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetJitActivationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_access.api.jit_access_api import JITAccessApi
from sailpoint.jit_access.api_client import ApiClient
from sailpoint.jit_access.models.jit_activation_config_response import JITActivationConfigResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    config_type = 'policy' # str | Configuration kind to read. Only **policy** (JIT activation policy) is supported today.  # str | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get JIT activation policy configuration
        
        results = JITAccessApi(api_client).get_jit_activation_config_v1(config_type=config_type)
        # Below is a request that includes all optional parameters
        # results = JITAccessApi(api_client).get_jit_activation_config_v1(config_type, x_sail_point_experimental)
        print("The response of JITAccessApi->get_jit_activation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITAccessApi->get_jit_activation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-jit-activation-config-v1
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
Update JIT activation policy configuration
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/patch-jit-activation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | config_type | **str** | True  | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
 Body  | jit_access_operation_request | [**[]JitAccessOperationRequest**](../models/jit-access-operation-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**JITActivationConfigResponse**](../models/jit-activation-config-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Full JIT activation policy configuration after applying all requested replace operations. | JITActivationConfigResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetJitActivationConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetJitActivationConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_access.api.jit_access_api import JITAccessApi
from sailpoint.jit_access.api_client import ApiClient
from sailpoint.jit_access.models.jit_activation_config_response import JITActivationConfigResponse
from sailpoint.jit_access.models.jit_access_operation_request import JitAccessOperationRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    config_type = 'policy' # str | Configuration kind to update. Only **policy** (JIT activation policy) is supported today.  # str | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
    jit_access_operation_request = '''[sailpoint.jit_access.JitAccessOperationRequest()]''' # List[JitAccessOperationRequest] | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update JIT activation policy configuration
        new_jit_access_operation_request = JitAccessOperationRequest.from_json(jit_access_operation_request)
        results = JITAccessApi(api_client).patch_jit_activation_config_v1(config_type=config_type, jit_access_operation_request=new_jit_access_operation_request)
        # Below is a request that includes all optional parameters
        # results = JITAccessApi(api_client).patch_jit_activation_config_v1(config_type, new_jit_access_operation_request, x_sail_point_experimental)
        print("The response of JITAccessApi->patch_jit_activation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITAccessApi->patch_jit_activation_config_v1: %s\n" % e)
```



[[Back to top]](#) 



