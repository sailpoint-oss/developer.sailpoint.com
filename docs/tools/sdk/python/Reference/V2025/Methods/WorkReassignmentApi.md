---
id: v2025-work-reassignment
title: Work_Reassignment
pagination_label: Work_Reassignment
sidebar_label: Work_Reassignment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Work_Reassignment', 'V2025Work_Reassignment'] 
slug: /tools/sdk/python/v2025/methods/work-reassignment
tags: ['SDK', 'Software Development Kit', 'Work_Reassignment', 'V2025Work_Reassignment']
---

# sailpoint.v2025.WorkReassignmentApi
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user’s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-reassignment-configuration**](#create-reassignment-configuration) | **POST** `/reassignment-configurations` | Create a Reassignment Configuration
[**delete-reassignment-configuration**](#delete-reassignment-configuration) | **DELETE** `/reassignment-configurations/{identityId}/{configType}` | Delete Reassignment Configuration
[**get-evaluate-reassignment-configuration**](#get-evaluate-reassignment-configuration) | **GET** `/reassignment-configurations/{identityId}/evaluate/{configType}` | Evaluate Reassignment Configuration
[**get-reassignment-config-types**](#get-reassignment-config-types) | **GET** `/reassignment-configurations/types` | List Reassignment Config Types
[**get-reassignment-configuration**](#get-reassignment-configuration) | **GET** `/reassignment-configurations/{identityId}` | Get Reassignment Configuration
[**get-tenant-config-configuration**](#get-tenant-config-configuration) | **GET** `/reassignment-configurations/tenant-config` | Get Tenant-wide Reassignment Configuration settings
[**list-reassignment-configurations**](#list-reassignment-configurations) | **GET** `/reassignment-configurations` | List Reassignment Configurations
[**put-reassignment-config**](#put-reassignment-config) | **PUT** `/reassignment-configurations/{identityId}` | Update Reassignment Configuration
[**put-tenant-configuration**](#put-tenant-configuration) | **PUT** `/reassignment-configurations/tenant-config` | Update Tenant-wide Reassignment Configuration settings


## create-reassignment-configuration
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
Create a Reassignment Configuration
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-reassignment-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | configuration_item_request | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The newly created Reassignment Configuration object | ConfigurationItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.configuration_item_request import ConfigurationItemRequest
from sailpoint.v2025.models.configuration_item_response import ConfigurationItemResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    configuration_item_request = '''{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }''' # ConfigurationItemRequest | 

    try:
        # Create a Reassignment Configuration
        new_configuration_item_request = ConfigurationItemRequest.from_json(configuration_item_request)
        results = WorkReassignmentApi(api_client).create_reassignment_configuration(x_sail_point_experimental=x_sail_point_experimental, configuration_item_request=new_configuration_item_request)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).create_reassignment_configuration(x_sail_point_experimental, new_configuration_item_request)
        print("The response of WorkReassignmentApi->create_reassignment_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->create_reassignment_configuration: %s\n" % e)
```



[[Back to top]](#) 

## delete-reassignment-configuration
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
Delete Reassignment Configuration
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-reassignment-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
Path   | config_type | [**ConfigTypeEnum**](../models/config-type-enum) | True  | 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Reassignment Configuration deleted |  |  -  |
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
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.config_type_enum import ConfigTypeEnum
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    config_type = sailpoint.v2025.ConfigTypeEnum() # ConfigTypeEnum |  # ConfigTypeEnum | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete Reassignment Configuration
        
        WorkReassignmentApi(api_client).delete_reassignment_configuration(identity_id=identity_id, config_type=config_type, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # WorkReassignmentApi(api_client).delete_reassignment_configuration(identity_id, config_type, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->delete_reassignment_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-evaluate-reassignment-configuration
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
Evaluate Reassignment Configuration
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-evaluate-reassignment-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
Path   | config_type | [**ConfigTypeEnum**](../models/config-type-enum) | True  | Reassignment work type
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | exclusion_filters | **[]str** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments

### Return type
[**List[EvaluateResponse]**](../models/evaluate-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Evaluated Reassignment Configuration | List[EvaluateResponse] |  -  |
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
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.config_type_enum import ConfigTypeEnum
from sailpoint.v2025.models.evaluate_response import EvaluateResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    config_type = sailpoint.v2025.ConfigTypeEnum() # ConfigTypeEnum | Reassignment work type # ConfigTypeEnum | Reassignment work type
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    exclusion_filters = '''['SELF_REVIEW_DELEGATION']''' # List[str] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)

    try:
        # Evaluate Reassignment Configuration
        
        results = WorkReassignmentApi(api_client).get_evaluate_reassignment_configuration(identity_id=identity_id, config_type=config_type, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_evaluate_reassignment_configuration(identity_id, config_type, x_sail_point_experimental, exclusion_filters)
        print("The response of WorkReassignmentApi->get_evaluate_reassignment_configuration:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_evaluate_reassignment_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-reassignment-config-types
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
List Reassignment Config Types
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-reassignment-config-types)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[ConfigType]**](../models/config-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Reassignment Configuration Types | List[ConfigType] |  -  |
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
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.config_type import ConfigType
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # List Reassignment Config Types
        
        results = WorkReassignmentApi(api_client).get_reassignment_config_types(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_reassignment_config_types(x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_reassignment_config_types:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_reassignment_config_types: %s\n" % e)
```



[[Back to top]](#) 

## get-reassignment-configuration
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
Get Reassignment Configuration
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-reassignment-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ConfigurationResponse**](../models/configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reassignment Configuration for an identity | ConfigurationResponse |  -  |
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
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.configuration_response import ConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504f' # str | unique identity id # str | unique identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Reassignment Configuration
        
        results = WorkReassignmentApi(api_client).get_reassignment_configuration(identity_id=identity_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_reassignment_configuration(identity_id, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_reassignment_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_reassignment_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-tenant-config-configuration
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
Get Tenant-wide Reassignment Configuration settings
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-tenant-config-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse |  -  |
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
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.tenant_configuration_response import TenantConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Tenant-wide Reassignment Configuration settings
        
        results = WorkReassignmentApi(api_client).get_tenant_config_configuration(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).get_tenant_config_configuration(x_sail_point_experimental)
        print("The response of WorkReassignmentApi->get_tenant_config_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->get_tenant_config_configuration: %s\n" % e)
```



[[Back to top]](#) 

## list-reassignment-configurations
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
List Reassignment Configurations
Gets all Reassignment configuration for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-reassignment-configurations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[ConfigurationResponse]**](../models/configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of Reassignment Configurations for an org | List[ConfigurationResponse] |  -  |
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
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.configuration_response import ConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # List Reassignment Configurations
        
        results = WorkReassignmentApi(api_client).list_reassignment_configurations(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).list_reassignment_configurations(x_sail_point_experimental)
        print("The response of WorkReassignmentApi->list_reassignment_configurations:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->list_reassignment_configurations: %s\n" % e)
```



[[Back to top]](#) 

## put-reassignment-config
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
Update Reassignment Configuration
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-reassignment-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | configuration_item_request | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reassignment Configuration updated | ConfigurationItemResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.configuration_item_request import ConfigurationItemRequest
from sailpoint.v2025.models.configuration_item_response import ConfigurationItemResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    configuration_item_request = '''{
          "endDate" : "2022-07-30T17:00:00Z",
          "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
          "configType" : "ACCESS_REQUESTS",
          "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
          "startDate" : "2022-07-21T11:13:12.345Z"
        }''' # ConfigurationItemRequest | 

    try:
        # Update Reassignment Configuration
        new_configuration_item_request = ConfigurationItemRequest.from_json(configuration_item_request)
        results = WorkReassignmentApi(api_client).put_reassignment_config(identity_id=identity_id, x_sail_point_experimental=x_sail_point_experimental, configuration_item_request=new_configuration_item_request)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).put_reassignment_config(identity_id, x_sail_point_experimental, new_configuration_item_request)
        print("The response of WorkReassignmentApi->put_reassignment_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->put_reassignment_config: %s\n" % e)
```



[[Back to top]](#) 

## put-tenant-configuration
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
Update Tenant-wide Reassignment Configuration settings
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-tenant-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | tenant_configuration_request | [**TenantConfigurationRequest**](../models/tenant-configuration-request) | True  | 

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.tenant_configuration_request import TenantConfigurationRequest
from sailpoint.v2025.models.tenant_configuration_response import TenantConfigurationResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    tenant_configuration_request = '''{
          "configDetails" : {
            "disabled" : true
          }
        }''' # TenantConfigurationRequest | 

    try:
        # Update Tenant-wide Reassignment Configuration settings
        new_tenant_configuration_request = TenantConfigurationRequest.from_json(tenant_configuration_request)
        results = WorkReassignmentApi(api_client).put_tenant_configuration(x_sail_point_experimental=x_sail_point_experimental, tenant_configuration_request=new_tenant_configuration_request)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).put_tenant_configuration(x_sail_point_experimental, new_tenant_configuration_request)
        print("The response of WorkReassignmentApi->put_tenant_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->put_tenant_configuration: %s\n" % e)
```



[[Back to top]](#) 



