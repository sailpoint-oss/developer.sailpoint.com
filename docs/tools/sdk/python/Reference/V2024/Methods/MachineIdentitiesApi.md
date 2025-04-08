---
id: v2024-machine-identities
title: Machine_Identities
pagination_label: Machine_Identities
sidebar_label: Machine_Identities
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Identities', 'V2024Machine_Identities'] 
slug: /tools/sdk/python/v2024/methods/machine-identities
tags: ['SDK', 'Software Development Kit', 'Machine_Identities', 'V2024Machine_Identities']
---

# sailpoint.v2024.MachineIdentitiesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity**](#create-machine-identity) | **POST** `/machine-identities` | Create Machine Identities
[**delete-machine-identity**](#delete-machine-identity) | **DELETE** `/machine-identities/{id}` | Delete machine identity
[**get-machine-identity**](#get-machine-identity) | **GET** `/machine-identities/{id}` | Machine Identity Details
[**list-machine-identities**](#list-machine-identities) | **GET** `/machine-identities` | List Machine Identities
[**update-machine-identity**](#update-machine-identity) | **PATCH** `/machine-identities/{id}` | Update a Machine Identity


## create-machine-identity
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
Create Machine Identities
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-machine-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | machine_identity | [**MachineIdentity**](../models/machine-identity) | True  | 

### Return type
[**MachineIdentity**](../models/machine-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine Identity created. | MachineIdentity |  -  |
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
from sailpoint.v2024.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.machine_identity import MachineIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    machine_identity = '''{
          "created" : "2015-05-28T14:07:17Z",
          "businessApplication" : "ADService",
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "description" : "",
          "attributes" : "{\"Region\":\"EU\"}",
          "id" : "id12345",
          "manuallyEdited" : true
        }''' # MachineIdentity | 

    try:
        # Create Machine Identities
        new_machine_identity = MachineIdentity.from_json(machine_identity)
        results = MachineIdentitiesApi(api_client).create_machine_identity(x_sail_point_experimental=x_sail_point_experimental, machine_identity=new_machine_identity)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).create_machine_identity(x_sail_point_experimental, new_machine_identity)
        print("The response of MachineIdentitiesApi->create_machine_identity:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->create_machine_identity: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-identity
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
Delete machine identity
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

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
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID # str | Machine Identity ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete machine identity
        
        MachineIdentitiesApi(api_client).delete_machine_identity(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # MachineIdentitiesApi(api_client).delete_machine_identity(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->delete_machine_identity: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-identity
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
Machine Identity Details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-machine-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineIdentity**](../models/machine-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A machine identity object | MachineIdentity |  -  |
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
from sailpoint.v2024.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.machine_identity import MachineIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID # str | Machine Identity ID
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Machine Identity Details
        
        results = MachineIdentitiesApi(api_client).get_machine_identity(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).get_machine_identity(id, x_sail_point_experimental)
        print("The response of MachineIdentitiesApi->get_machine_identity:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->get_machine_identity: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-identities
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
List Machine Identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-machine-identities)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **description**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name**
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[MachineIdentity]**](../models/machine-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine identities. | List[MachineIdentity] |  -  |
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
from sailpoint.v2024.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.machine_identity import MachineIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    filters = 'identityId eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **description**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **description**: *eq, in, sw*  **businessApplication**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq* (optional)
    sorters = 'businessApplication' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **businessApplication, name** (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List Machine Identities
        
        results = MachineIdentitiesApi(api_client).list_machine_identities(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).list_machine_identities(x_sail_point_experimental, filters, sorters, count, limit, offset)
        print("The response of MachineIdentitiesApi->list_machine_identities:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->list_machine_identities: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-identity
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
Update a Machine Identity
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-machine-identity)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Identity ID.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | request_body | **[]object** | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**MachineIdentity**](../models/machine-identity)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Identity object. | MachineIdentity |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.machine_identities_api import MachineIdentitiesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.machine_identity import MachineIdentity
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Identity ID. # str | Machine Identity ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    request_body = '''[{op=add, path=/attributes/securityRisk, value=medium}]''' # List[object] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Update a Machine Identity
        new_request_body = RequestBody.from_json(request_body)
        results = MachineIdentitiesApi(api_client).update_machine_identity(id=id, x_sail_point_experimental=x_sail_point_experimental, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineIdentitiesApi(api_client).update_machine_identity(id, x_sail_point_experimental, new_request_body)
        print("The response of MachineIdentitiesApi->update_machine_identity:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineIdentitiesApi->update_machine_identity: %s\n" % e)
```



[[Back to top]](#) 



