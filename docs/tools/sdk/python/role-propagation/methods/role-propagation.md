# Role_Propagation

# sailpoint.role_propagation.RolePropagationApi
  Role Change Propagation ensures that any changes to the composition of a role’s access objects 
(entitlements, access profiles, or dimensions) are applied to all member identities. 
For example: If an entitlement is removed from a role, all identities assigned to that role 
should lose access to that entitlement as part of this process.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel-role-propagation-v1**](#cancel-role-propagation-v1) | **POST** `/role-propagation/v1/terminate` | Terminate Role Propagation process
[**get-ongoing-role-propagation-v1**](#get-ongoing-role-propagation-v1) | **GET** `/role-propagation/v1/is-running` | Get ongoing Role Propagation process
[**get-role-propagation-config-v1**](#get-role-propagation-config-v1) | **GET** `/role-propagation-config/v1` | Get Role Change Propagation Configuration
[**get-role-propagation-status-v1**](#get-role-propagation-status-v1) | **GET** `/role-propagation/v1/{rolePropagationId}/status` | Get status of Role-Propagation process
[**set-role-propagation-config-v1**](#set-role-propagation-config-v1) | **PUT** `/role-propagation-config/v1` | Update Role Change Propagation Configuration
[**start-role-propagation-v1**](#start-role-propagation-v1) | **POST** `/role-propagation/v1` | Initiate Role Propagation process


## cancel-role-propagation-v1
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
Terminate Role Propagation process
This endpoint terminates the ongoing role change propagation process for a tenant.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-role-propagation-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Role Propagation has been successfully terminated. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.role_propagation.api.role_propagation_api import RolePropagationApi
from sailpoint.role_propagation.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Terminate Role Propagation process
        
        RolePropagationApi(api_client).cancel_role_propagation_v1()
        # Below is a request that includes all optional parameters
        # RolePropagationApi(api_client).cancel_role_propagation_v1(x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling RolePropagationApi->cancel_role_propagation_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-ongoing-role-propagation-v1
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
Get ongoing Role Propagation process
This endpoint returns the information of ongoing role change propagation process for a tenant. It returns the information whether the role propagation process is currently running or not, If it is running it returns the details of the ongoing role propagation process. The execution stage of the role propagation process can be one of the following: - PENDING - The role propagation process is queued to be executed. - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data. - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities. - SUCCEEDED - The role propagation process has successfully completed. - FAILED - The role propagation process has failed. - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/get-ongoing-role-propagation-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Rolepropagationongoingresponse**](../models/rolepropagationongoingresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Information of ongoing role propagation process. | Rolepropagationongoingresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.role_propagation.api.role_propagation_api import RolePropagationApi
from sailpoint.role_propagation.api_client import ApiClient
from sailpoint.role_propagation.models.rolepropagationongoingresponse import Rolepropagationongoingresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get ongoing Role Propagation process
        
        results = RolePropagationApi(api_client).get_ongoing_role_propagation_v1()
        # Below is a request that includes all optional parameters
        # results = RolePropagationApi(api_client).get_ongoing_role_propagation_v1(x_sail_point_experimental)
        print("The response of RolePropagationApi->get_ongoing_role_propagation_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling RolePropagationApi->get_ongoing_role_propagation_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-propagation-config-v1
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
Get Role Change Propagation Configuration
This endpoint fetches the Role Change Propagation Configuration for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/get-role-propagation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Rolepropagationconfigresponse**](../models/rolepropagationconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Role Change Propagation configuration for the tenant. | Rolepropagationconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.role_propagation.api.role_propagation_api import RolePropagationApi
from sailpoint.role_propagation.api_client import ApiClient
from sailpoint.role_propagation.models.rolepropagationconfigresponse import Rolepropagationconfigresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get Role Change Propagation Configuration
        
        results = RolePropagationApi(api_client).get_role_propagation_config_v1()
        # Below is a request that includes all optional parameters
        # results = RolePropagationApi(api_client).get_role_propagation_config_v1(x_sail_point_experimental)
        print("The response of RolePropagationApi->get_role_propagation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling RolePropagationApi->get_role_propagation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-role-propagation-status-v1
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
Get status of Role-Propagation process
This endpoint returns the information of the specified role change propagation process. The execution stage of the role propagation process can be one of the following:
    - PENDING - The role propagation process is queued to be executed.
    - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data.
    - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities.
    - SUCCEEDED - The role propagation process has successfully completed.
    - FAILED - The role propagation process has failed.
    - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-propagation-status-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_propagation_id | **str** | True  | The ID of the role propagation process to retrieve the status for.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Rolepropagationstatusresponse**](../models/rolepropagationstatusresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Information of the role propagation process. | Rolepropagationstatusresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.role_propagation.api.role_propagation_api import RolePropagationApi
from sailpoint.role_propagation.api_client import ApiClient
from sailpoint.role_propagation.models.rolepropagationstatusresponse import Rolepropagationstatusresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    role_propagation_id = '47b9fb02-e12e-42ba-8bfe-1860d78c88eb' # str | The ID of the role propagation process to retrieve the status for. # str | The ID of the role propagation process to retrieve the status for.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get status of Role-Propagation process
        
        results = RolePropagationApi(api_client).get_role_propagation_status_v1(role_propagation_id=role_propagation_id)
        # Below is a request that includes all optional parameters
        # results = RolePropagationApi(api_client).get_role_propagation_status_v1(role_propagation_id, x_sail_point_experimental)
        print("The response of RolePropagationApi->get_role_propagation_status_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling RolePropagationApi->get_role_propagation_status_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-role-propagation-config-v1
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
Update Role Change Propagation Configuration
This endpoint enables or disables the Role Change Propagation Process for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/set-role-propagation-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | rolepropagationconfiginput | [**Rolepropagationconfiginput**](../models/rolepropagationconfiginput) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Rolepropagationconfigresponse**](../models/rolepropagationconfigresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Role Change Propagation configuration for the tenant is successfully updated. | Rolepropagationconfigresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.role_propagation.api.role_propagation_api import RolePropagationApi
from sailpoint.role_propagation.api_client import ApiClient
from sailpoint.role_propagation.models.rolepropagationconfiginput import Rolepropagationconfiginput
from sailpoint.role_propagation.models.rolepropagationconfigresponse import Rolepropagationconfigresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    rolepropagationconfiginput = '''{
          "enabled" : true
        }''' # Rolepropagationconfiginput | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update Role Change Propagation Configuration
        new_rolepropagationconfiginput = Rolepropagationconfiginput.from_json(rolepropagationconfiginput)
        results = RolePropagationApi(api_client).set_role_propagation_config_v1(rolepropagationconfiginput=new_rolepropagationconfiginput)
        # Below is a request that includes all optional parameters
        # results = RolePropagationApi(api_client).set_role_propagation_config_v1(new_rolepropagationconfiginput, x_sail_point_experimental)
        print("The response of RolePropagationApi->set_role_propagation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling RolePropagationApi->set_role_propagation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## start-role-propagation-v1
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
Initiate Role Propagation process
This endpoint initiates a role change propagation process for a tenant asynchronously.  If all preconditions are met, the request is accepted and a rolePropagationId is returned which  can be used to view the status.
API throws 4xx if any of the following conditions are met - Role propagation feature is disabled  - There is an ongoing role propagation for the tenant - Role refresh needs to be kicked off as part of the role propagation (skipRoleRefresh=false) and there is an ongoing refresh for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/start-role-propagation-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | skip_role_refresh | **bool** |   (optional) (default to False) | When true, the role refresh is not performed. Keeping it false is recommended.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Rolepropagationresponse**](../models/rolepropagationresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Role Propagation has sucessfully started. | Rolepropagationresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.role_propagation.api.role_propagation_api import RolePropagationApi
from sailpoint.role_propagation.api_client import ApiClient
from sailpoint.role_propagation.models.rolepropagationresponse import Rolepropagationresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    skip_role_refresh = False # bool | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to False) # bool | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Initiate Role Propagation process
        
        results = RolePropagationApi(api_client).start_role_propagation_v1()
        # Below is a request that includes all optional parameters
        # results = RolePropagationApi(api_client).start_role_propagation_v1(skip_role_refresh, x_sail_point_experimental)
        print("The response of RolePropagationApi->start_role_propagation_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling RolePropagationApi->start_role_propagation_v1: %s\n" % e)
```



[[Back to top]](#) 



