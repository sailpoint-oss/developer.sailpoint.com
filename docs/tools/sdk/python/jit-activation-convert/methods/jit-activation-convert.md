# JIT_Activation_Convert

# sailpoint.jit_activation_convert.JITActivationConvertApi
  Use this API to convert the assignment type of an entitlement connection between
STANDING and JIT (Just-In-Time Privileged).

OAuth scope required: **idn:jit-assignment-type-conversion:manage**
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-entitlement-connection-conversion-v1**](#start-entitlement-connection-conversion-v1) | **POST** `/convert-entitlement-connection/v1` | Convert entitlement connection assignment type


## start-entitlement-connection-conversion-v1
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
Convert entitlement connection assignment type
Initiates an asynchronous workflow to convert the assignment type of an entitlement connection
between `STANDING` and `JIT` (Just-In-Time Privileged).

The response is returned with HTTP 202 Accepted while the conversion workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-entitlement-connection-conversion-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | convert_entitlement_connection_request | [**ConvertEntitlementConnectionRequest**](../models/convert-entitlement-connection-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ConvertEntitlementConnectionResponse**](../models/convert-entitlement-connection-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted. The conversion workflow was accepted and is running.  | ConvertEntitlementConnectionResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartEntitlementConnectionConversionV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartEntitlementConnectionConversionV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.jit_activation_convert.api.jit_activation_convert_api import JITActivationConvertApi
from sailpoint.jit_activation_convert.api_client import ApiClient
from sailpoint.jit_activation_convert.models.convert_entitlement_connection_request import ConvertEntitlementConnectionRequest
from sailpoint.jit_activation_convert.models.convert_entitlement_connection_response import ConvertEntitlementConnectionResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    convert_entitlement_connection_request = '''{
          "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3",
          "targetType" : "JIT"
        }''' # ConvertEntitlementConnectionRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Convert entitlement connection assignment type
        new_convert_entitlement_connection_request = ConvertEntitlementConnectionRequest.from_json(convert_entitlement_connection_request)
        results = JITActivationConvertApi(api_client).start_entitlement_connection_conversion_v1(convert_entitlement_connection_request=new_convert_entitlement_connection_request)
        # Below is a request that includes all optional parameters
        # results = JITActivationConvertApi(api_client).start_entitlement_connection_conversion_v1(new_convert_entitlement_connection_request, x_sail_point_experimental)
        print("The response of JITActivationConvertApi->start_entitlement_connection_conversion_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling JITActivationConvertApi->start_entitlement_connection_conversion_v1: %s\n" % e)
```



[[Back to top]](#) 



