# Work_Reassignment

# sailpoint.work_reassignment.WorkReassignmentApi
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user&#39;s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reassignment-configuration-v1**](#create-reassignment-configuration-v1) | **POST** `/reassignment-configurations/v1` | Create a reassignment configuration
[**delete-reassignment-configuration-v1**](#delete-reassignment-configuration-v1) | **DELETE** `/reassignment-configurations/v1/{identityId}/{configType}` | Delete reassignment configuration
[**get-evaluate-reassignment-configuration-v1**](#get-evaluate-reassignment-configuration-v1) | **GET** `/reassignment-configurations/v1/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**get-reassignment-config-types-v1**](#get-reassignment-config-types-v1) | **GET** `/reassignment-configurations/v1/types` | List reassignment config types
[**get-reassignment-configuration-v1**](#get-reassignment-configuration-v1) | **GET** `/reassignment-configurations/v1/{identityId}` | Get reassignment configuration
[**get-tenant-config-configuration-v1**](#get-tenant-config-configuration-v1) | **GET** `/reassignment-configurations/v1/tenant-config` | Get tenant-wide reassignment configuration settings
[**list-reassignment-configurations-v1**](#list-reassignment-configurations-v1) | **GET** `/reassignment-configurations/v1` | List reassignment configurations
[**put-reassignment-config-v1**](#put-reassignment-config-v1) | **PUT** `/reassignment-configurations/v1/{identityId}` | Update reassignment configuration
[**put-tenant-configuration-v1**](#put-tenant-configuration-v1) | **PUT** `/reassignment-configurations/v1/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration-v1
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
Create a reassignment configuration
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/create-reassignment-configuration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | configuration_item_request | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The newly created Reassignment Configuration object | ConfigurationItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configuration_item_request import ConfigurationItemRequest
from sailpoint.work_reassignment.models.configuration_item_response import ConfigurationItemResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    configuration_item_request = '''{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }''' # ConfigurationItemRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a reassignment configuration
        new_configuration_item_request = ConfigurationItemRequest.from_json(configuration_item_request)
        results = WorkReassignmentApi(api_client).create_reassignment_configuration_v1(configuration_item_request=new_configuration_item_request)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).create_reassignment_configuration_v1(new_configuration_item_request, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->create_reassignment_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->create_reassignment_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-reassignment-configuration-v1
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
Delete reassignment configuration
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/delete-reassignment-configuration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
Path   | config_type | [**ConfigTypeEnum**](../models/config-type-enum) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Reassignment Configuration deleted |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.config_type_enum import ConfigTypeEnum
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    config_type = sailpoint.work_reassignment.ConfigTypeEnum() # ConfigTypeEnum |  # ConfigTypeEnum | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete reassignment configuration
        
        WorkReassignmentApi(api_client).delete_reassignment_configuration_v1(identity_id=identity_id, config_type=config_type)
        # Below is a request that includes all optional parameters
        # WorkReassignmentApi(api_client).delete_reassignment_configuration_v1(identity_id, config_type, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->delete_reassignment_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-evaluate-reassignment-configuration-v1
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
Evaluate reassignment configuration
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/get-evaluate-reassignment-configuration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
Path   | config_type | [**ConfigTypeEnum**](../models/config-type-enum) | True  | Reassignment work type
  Query | exclusion_filters | **[]str** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[EvaluateResponse]**](../models/evaluate-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Evaluated Reassignment Configuration | List[EvaluateResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.config_type_enum import ConfigTypeEnum
from sailpoint.work_reassignment.models.evaluate_response import EvaluateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    config_type = sailpoint.work_reassignment.ConfigTypeEnum() # ConfigTypeEnum | Reassignment work type # ConfigTypeEnum | Reassignment work type
    exclusion_filters = '''['SELF_REVIEW_DELEGATION']''' # List[str] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Evaluate reassignment configuration
        
        results = WorkReassignmentApi(api_client).get_evaluate_reassignment_configuration_v1(identity_id=identity_id, config_type=config_type)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_evaluate_reassignment_configuration_v1(identity_id, config_type, exclusion_filters, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_evaluate_reassignment_configuration_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_evaluate_reassignment_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-reassignment-config-types-v1
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
List reassignment config types
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-config-types-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[ConfigType]**](../models/config-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Reassignment Configuration Types | List[ConfigType] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.config_type import ConfigType
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List reassignment config types
        
        results = WorkReassignmentApi(api_client).get_reassignment_config_types_v1()
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_reassignment_config_types_v1(x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_reassignment_config_types_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_reassignment_config_types_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-reassignment-configuration-v1
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
Get reassignment configuration
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-configuration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ConfigurationResponse**](../models/configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reassignment Configuration for an identity | ConfigurationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configuration_response import ConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504f' # str | unique identity id # str | unique identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get reassignment configuration
        
        results = WorkReassignmentApi(api_client).get_reassignment_configuration_v1(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_reassignment_configuration_v1(identity_id, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_reassignment_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_reassignment_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-tenant-config-configuration-v1
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
Get tenant-wide reassignment configuration settings
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-config-configuration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.tenant_configuration_response import TenantConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get tenant-wide reassignment configuration settings
        
        results = WorkReassignmentApi(api_client).get_tenant_config_configuration_v1()
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_tenant_config_configuration_v1(x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_tenant_config_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_tenant_config_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-reassignment-configurations-v1
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
List reassignment configurations
Gets a paginated list of Reassignment configurations for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/list-reassignment-configurations-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 20) | Max number of results to return.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ConfigurationResponse]**](../models/configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of Reassignment Configurations for an org | List[ConfigurationResponse] |  * X-Total-Count - The total number of reassignment configurations for the tenant. Included only when `count=true`.  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configuration_response import ConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 20 # int | Max number of results to return. (optional) (default to 20) # int | Max number of results to return. (optional) (default to 20)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List reassignment configurations
        
        results = WorkReassignmentApi(api_client).list_reassignment_configurations_v1()
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).list_reassignment_configurations_v1(limit, offset, x_sail_point_experimental, count)
        print("The response of WorkReassignmentApi->list_reassignment_configurations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->list_reassignment_configurations_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-reassignment-config-v1
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
Update reassignment configuration
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/put-reassignment-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
 Body  | configuration_item_request | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reassignment Configuration updated | ConfigurationItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configuration_item_request import ConfigurationItemRequest
from sailpoint.work_reassignment.models.configuration_item_response import ConfigurationItemResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    configuration_item_request = '''{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }''' # ConfigurationItemRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update reassignment configuration
        new_configuration_item_request = ConfigurationItemRequest.from_json(configuration_item_request)
        results = WorkReassignmentApi(api_client).put_reassignment_config_v1(identity_id=identity_id, configuration_item_request=new_configuration_item_request)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).put_reassignment_config_v1(identity_id, new_configuration_item_request, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->put_reassignment_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->put_reassignment_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-tenant-configuration-v1
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
Update tenant-wide reassignment configuration settings
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/put-tenant-configuration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | tenant_configuration_request | [**TenantConfigurationRequest**](../models/tenant-configuration-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.tenant_configuration_request import TenantConfigurationRequest
from sailpoint.work_reassignment.models.tenant_configuration_response import TenantConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    tenant_configuration_request = '''{
          "configDetails" : {
            "disabled" : true
          }
        }''' # TenantConfigurationRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update tenant-wide reassignment configuration settings
        new_tenant_configuration_request = TenantConfigurationRequest.from_json(tenant_configuration_request)
        results = WorkReassignmentApi(api_client).put_tenant_configuration_v1(tenant_configuration_request=new_tenant_configuration_request)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).put_tenant_configuration_v1(new_tenant_configuration_request, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->put_tenant_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->put_tenant_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 



