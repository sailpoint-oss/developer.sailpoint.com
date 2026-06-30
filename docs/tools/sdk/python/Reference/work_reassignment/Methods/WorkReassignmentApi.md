---
id: work-reassignment
title: Work_Reassignment
pagination_label: Work_Reassignment
sidebar_label: Work_Reassignment
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Work_Reassignment', 'Work_Reassignment'] 
slug: /tools/sdk/python/work-reassignment/methods/work-reassignment
tags: ['SDK', 'Software Development Kit', 'Work_Reassignment', 'Work_Reassignment']
---

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-reassignment-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | configurationitemrequest | [**Configurationitemrequest**](../models/configurationitemrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Configurationitemresponse**](../models/configurationitemresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The newly created Reassignment Configuration object | Configurationitemresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configurationitemrequest import Configurationitemrequest
from sailpoint.work_reassignment.models.configurationitemresponse import Configurationitemresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    configurationitemrequest = '''sailpoint.work_reassignment.Configurationitemrequest()''' # Configurationitemrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a reassignment configuration
        new_configurationitemrequest = Configurationitemrequest.from_json(configurationitemrequest)
        results = WorkReassignmentApi(api_client).create_reassignment_configuration_v1(configurationitemrequest=new_configurationitemrequest)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).create_reassignment_configuration_v1(new_configurationitemrequest, x_sail_point_experimental)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-reassignment-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
Path   | config_type | [**Configtypeenum**](../models/configtypeenum) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Reassignment Configuration deleted |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configtypeenum import Configtypeenum
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    config_type = sailpoint.work_reassignment.Configtypeenum() # Configtypeenum |  # Configtypeenum | 
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-evaluate-reassignment-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
Path   | config_type | [**Configtypeenum**](../models/configtypeenum) | True  | Reassignment work type
  Query | exclusion_filters | **[]str** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Evaluateresponse]**](../models/evaluateresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Evaluated Reassignment Configuration | List[Evaluateresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configtypeenum import Configtypeenum
from sailpoint.work_reassignment.models.evaluateresponse import Evaluateresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    config_type = sailpoint.work_reassignment.Configtypeenum() # Configtypeenum | Reassignment work type # Configtypeenum | Reassignment work type
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-reassignment-config-types-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Configtype]**](../models/configtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Reassignment Configuration Types | List[Configtype] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configtype import Configtype
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-reassignment-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Configurationresponse**](../models/configurationresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reassignment Configuration for an identity | Configurationresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configurationresponse import Configurationresponse
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-tenant-config-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Tenantconfigurationresponse**](../models/tenantconfigurationresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant-wide Reassignment Configuration settings | Tenantconfigurationresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.tenantconfigurationresponse import Tenantconfigurationresponse
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
Gets all Reassignment configuration for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-reassignment-configurations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Configurationresponse]**](../models/configurationresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of Reassignment Configurations for an org | List[Configurationresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configurationresponse import Configurationresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List reassignment configurations
        
        results = WorkReassignmentApi(api_client).list_reassignment_configurations_v1()
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).list_reassignment_configurations_v1(x_sail_point_experimental)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-reassignment-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | unique identity id
 Body  | configurationitemrequest | [**Configurationitemrequest**](../models/configurationitemrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Configurationitemresponse**](../models/configurationitemresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reassignment Configuration updated | Configurationitemresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.configurationitemrequest import Configurationitemrequest
from sailpoint.work_reassignment.models.configurationitemresponse import Configurationitemresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = '2c91808781a71ddb0181b9090b5c504e' # str | unique identity id # str | unique identity id
    configurationitemrequest = '''sailpoint.work_reassignment.Configurationitemrequest()''' # Configurationitemrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update reassignment configuration
        new_configurationitemrequest = Configurationitemrequest.from_json(configurationitemrequest)
        results = WorkReassignmentApi(api_client).put_reassignment_config_v1(identity_id=identity_id, configurationitemrequest=new_configurationitemrequest)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).put_reassignment_config_v1(identity_id, new_configurationitemrequest, x_sail_point_experimental)
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-tenant-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | tenantconfigurationrequest | [**Tenantconfigurationrequest**](../models/tenantconfigurationrequest) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Tenantconfigurationresponse**](../models/tenantconfigurationresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tenant-wide Reassignment Configuration settings | Tenantconfigurationresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.work_reassignment.api.work_reassignment_api import WorkReassignmentApi
from sailpoint.work_reassignment.api_client import ApiClient
from sailpoint.work_reassignment.models.tenantconfigurationrequest import Tenantconfigurationrequest
from sailpoint.work_reassignment.models.tenantconfigurationresponse import Tenantconfigurationresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    tenantconfigurationrequest = '''sailpoint.work_reassignment.Tenantconfigurationrequest()''' # Tenantconfigurationrequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update tenant-wide reassignment configuration settings
        new_tenantconfigurationrequest = Tenantconfigurationrequest.from_json(tenantconfigurationrequest)
        results = WorkReassignmentApi(api_client).put_tenant_configuration_v1(tenantconfigurationrequest=new_tenantconfigurationrequest)
        # Below is a request that includes all optional parameters
        # results = WorkReassignmentApi(api_client).put_tenant_configuration_v1(new_tenantconfigurationrequest, x_sail_point_experimental)
        print("The response of WorkReassignmentApi->put_tenant_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling WorkReassignmentApi->put_tenant_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 



