---
id: v2025-machine-accounts
title: Machine_Accounts
pagination_label: Machine_Accounts
sidebar_label: Machine_Accounts
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Accounts', 'V2025Machine_Accounts'] 
slug: /tools/sdk/python/v2025/methods/machine-accounts
tags: ['SDK', 'Software Development Kit', 'Machine_Accounts', 'V2025Machine_Accounts']
---

# sailpoint.v2025.MachineAccountsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-subtype**](#create-machine-account-subtype) | **POST** `/sources/{sourceId}/subtypes` | Create subtype
[**delete-machine-account-subtype**](#delete-machine-account-subtype) | **DELETE** `/sources/{sourceId}/subtypes/{technicalName}` | Delete subtype
[**get-machine-account**](#get-machine-account) | **GET** `/machine-accounts/{id}` | Machine account details
[**get-machine-account-subtype-by-id**](#get-machine-account-subtype-by-id) | **GET** `/sources/subtype/{subtypeId}` | Retrieve subtype by subtype id
[**get-machine-account-subtype-by-technical-name**](#get-machine-account-subtype-by-technical-name) | **GET** `/sources/{sourceId}/subtypes/{technicalName}` | Retrieve subtype by source and technicalName
[**list-machine-account-subtypes**](#list-machine-account-subtypes) | **GET** `/sources/{sourceId}/subtypes` | Retrieve all subtypes by source
[**list-machine-accounts**](#list-machine-accounts) | **GET** `/machine-accounts` | Machine accounts list
[**patch-machine-account-subtype**](#patch-machine-account-subtype) | **PATCH** `/sources/{sourceId}/subtypes/{technicalName}` | Patch subtype
[**update-machine-account**](#update-machine-account) | **PATCH** `/machine-accounts/{id}` | Update a machine account


## create-machine-account-subtype
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
Create subtype
Create a new machine account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-machine-account-subtype)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | source_subtype | [**SourceSubtype**](../models/source-subtype) | True  | 

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created machine account subtype. | SourceSubtype |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    source_subtype = '''{
          "sourceId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "displayName" : "Mr Foo",
          "created" : "2025-07-28T16:13:42.8013Z",
          "description" : "fighters",
          "modified" : "2025-07-28T16:13:42.75085Z",
          "id" : "43bdd144-4b17-4fce-a744-17c7fd3e717b",
          "technicalName" : "foo"
        }''' # SourceSubtype | 

    try:
        # Create subtype
        new_source_subtype = SourceSubtype.from_json(source_subtype)
        results = MachineAccountsApi(api_client).create_machine_account_subtype(source_id=source_id, x_sail_point_experimental=x_sail_point_experimental, source_subtype=new_source_subtype)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).create_machine_account_subtype(source_id, x_sail_point_experimental, new_source_subtype)
        print("The response of MachineAccountsApi->create_machine_account_subtype:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->create_machine_account_subtype: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-subtype
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
Delete subtype
Delete a machine account subtype by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-machine-account-subtype)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the machine account subtype.
Path   | technical_name | **str** | True  | The technical name of the subtype.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Subtype deleted successfully. |  |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the machine account subtype. # str | The ID of the machine account subtype.
    technical_name = 'foo' # str | The technical name of the subtype. # str | The technical name of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete subtype
        
        MachineAccountsApi(api_client).delete_machine_account_subtype(subtype_id=subtype_id, technical_name=technical_name, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # MachineAccountsApi(api_client).delete_machine_account_subtype(subtype_id, technical_name, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineAccountsApi->delete_machine_account_subtype: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account
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
Machine account details
Use this API to return the details for a single machine account by its ID.  

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-machine-account)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**MachineAccount**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine Account object. | MachineAccount |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Machine account details
        
        results = MachineAccountsApi(api_client).get_machine_account(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account(id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-subtype-by-id
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
Retrieve subtype by subtype id
Get a machine account subtype by its unique ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-machine-account-subtype-by-id)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the machine account subtype.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account subtype object. | SourceSubtype |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the machine account subtype. # str | The ID of the machine account subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Retrieve subtype by subtype id
        
        results = MachineAccountsApi(api_client).get_machine_account_subtype_by_id(subtype_id=subtype_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_subtype_by_id(subtype_id, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_subtype_by_id:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_subtype_by_id: %s\n" % e)
```



[[Back to top]](#) 

## get-machine-account-subtype-by-technical-name
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
Retrieve subtype by source and technicalName
Get a machine account subtype by source ID and technical name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-machine-account-subtype-by-technical-name)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
Path   | technical_name | **str** | True  | The technical name of the subtype.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Machine account subtype object. | SourceSubtype |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    technical_name = 'foo' # str | The technical name of the subtype. # str | The technical name of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Retrieve subtype by source and technicalName
        
        results = MachineAccountsApi(api_client).get_machine_account_subtype_by_technical_name(source_id=source_id, technical_name=technical_name, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).get_machine_account_subtype_by_technical_name(source_id, technical_name, x_sail_point_experimental)
        print("The response of MachineAccountsApi->get_machine_account_subtype_by_technical_name:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->get_machine_account_subtype_by_technical_name: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-account-subtypes
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
Retrieve all subtypes by source
Get all machine account subtypes for a given source.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-machine-account-subtypes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | The ID of the source.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName**
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[SourceSubtype]**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine account subtypes. | List[SourceSubtype] |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = '6d0458373bec4b4b80460992b76016da' # str | The ID of the source. # str | The ID of the source.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    filters = 'identityId eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **displayName**: *eq, sw*  **technicalName**: *eq, sw* (optional)
    sorters = 'displayName' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Retrieve all subtypes by source
        
        results = MachineAccountsApi(api_client).list_machine_account_subtypes(source_id=source_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).list_machine_account_subtypes(source_id, x_sail_point_experimental, filters, sorters, count, limit, offset)
        print("The response of MachineAccountsApi->list_machine_account_subtypes:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->list_machine_account_subtypes: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-accounts
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
Machine accounts list
This returns a list of machine accounts.  

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-machine-accounts)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **machineIdentity**: *eq, in, sw*  **description**: *eq, in, sw*  **ownerIdentity**: *eq, in, sw*  **ownerIdentityId**: *eq, in, sw*  **entitlements**: *eq*  **accessType**: *eq, in, sw*  **subType**: *eq, in, sw*  **environment**: *eq, in, sw*  **classificationMethod**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **manuallyEdited**: *eq*  **identity**: *eq, in, sw*  **source**: *eq, in*  **hasEntitlement**: *eq*  **locked**: *eq*  **connectorAttributes**: *eq*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, machineIdentity, identity.id, nativeIdentity, uuid, manuallyCorrelated, connectorAttributes, entitlements, identity.name, identity.type, source.id, source.name, source.type**

### Return type
[**List[MachineAccount]**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of machine account objects | List[MachineAccount] |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'identityId eq \"2c9180858082150f0180893dbaf44201\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **machineIdentity**: *eq, in, sw*  **description**: *eq, in, sw*  **ownerIdentity**: *eq, in, sw*  **ownerIdentityId**: *eq, in, sw*  **entitlements**: *eq*  **accessType**: *eq, in, sw*  **subType**: *eq, in, sw*  **environment**: *eq, in, sw*  **classificationMethod**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **manuallyEdited**: *eq*  **identity**: *eq, in, sw*  **source**: *eq, in*  **hasEntitlement**: *eq*  **locked**: *eq*  **connectorAttributes**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **machineIdentity**: *eq, in, sw*  **description**: *eq, in, sw*  **ownerIdentity**: *eq, in, sw*  **ownerIdentityId**: *eq, in, sw*  **entitlements**: *eq*  **accessType**: *eq, in, sw*  **subType**: *eq, in, sw*  **environment**: *eq, in, sw*  **classificationMethod**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **manuallyEdited**: *eq*  **identity**: *eq, in, sw*  **source**: *eq, in*  **hasEntitlement**: *eq*  **locked**: *eq*  **connectorAttributes**: *eq* (optional)
    sorters = 'id,name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, machineIdentity, identity.id, nativeIdentity, uuid, manuallyCorrelated, connectorAttributes, entitlements, identity.name, identity.type, source.id, source.name, source.type** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, machineIdentity, identity.id, nativeIdentity, uuid, manuallyCorrelated, connectorAttributes, entitlements, identity.name, identity.type, source.id, source.name, source.type** (optional)

    try:
        # Machine accounts list
        
        results = MachineAccountsApi(api_client).list_machine_accounts(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).list_machine_accounts(x_sail_point_experimental, limit, offset, count, filters, sorters)
        print("The response of MachineAccountsApi->list_machine_accounts:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->list_machine_accounts: %s\n" % e)
```



[[Back to top]](#) 

## patch-machine-account-subtype
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
Patch subtype
Update fields of a machine account subtype by its ID.
Patchable fields include: `displayName`, `description`, `technicalName`.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-machine-account-subtype)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | subtype_id | **str** | True  | The ID of the machine account subtype.
Path   | technical_name | **str** | True  | The technical name of the subtype.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | source_subtype | [**SourceSubtype**](../models/source-subtype) | True  | 

### Return type
[**SourceSubtype**](../models/source-subtype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated machine account subtype. | SourceSubtype |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_subtype import SourceSubtype
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    subtype_id = '43bdd144-4b17-4fce-a744-17c7fd3e717b' # str | The ID of the machine account subtype. # str | The ID of the machine account subtype.
    technical_name = 'foo' # str | The technical name of the subtype. # str | The technical name of the subtype.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    source_subtype = '''{
          "sourceId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
          "displayName" : "Mr Foo",
          "created" : "2025-07-28T16:13:42.8013Z",
          "description" : "fighters",
          "modified" : "2025-07-28T16:13:42.75085Z",
          "id" : "43bdd144-4b17-4fce-a744-17c7fd3e717b",
          "technicalName" : "foo"
        }''' # SourceSubtype | 

    try:
        # Patch subtype
        new_source_subtype = SourceSubtype.from_json(source_subtype)
        results = MachineAccountsApi(api_client).patch_machine_account_subtype(subtype_id=subtype_id, technical_name=technical_name, x_sail_point_experimental=x_sail_point_experimental, source_subtype=new_source_subtype)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).patch_machine_account_subtype(subtype_id, technical_name, x_sail_point_experimental, new_source_subtype)
        print("The response of MachineAccountsApi->patch_machine_account_subtype:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->patch_machine_account_subtype: %s\n" % e)
```



[[Back to top]](#) 

## update-machine-account
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
Update a machine account
Use this API to update machine accounts details. 


[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-machine-account)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Machine Account ID.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | request_body | **[]object** | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * ownerIdentity           * subType           * accessType           * environment           * attributes           * classificationMethod           * manuallyEdited           * nativeIdentity           * uuid           * source           * manuallyCorrelated           * enabled           * locked           * hasEntitlements           * connectorAttributes

### Return type
[**MachineAccount**](../models/machine-account)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Account object. | MachineAccount |  -  |
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
from sailpoint.v2025.api.machine_accounts_api import MachineAccountsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.machine_account import MachineAccount
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Machine Account ID. # str | Machine Account ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    request_body = '''[{op=add, path=/environment, value=test}]''' # List[object] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. The following fields are patchable:           * description           * ownerIdentity           * subType           * accessType           * environment           * attributes           * classificationMethod           * manuallyEdited           * nativeIdentity           * uuid           * source           * manuallyCorrelated           * enabled           * locked           * hasEntitlements           * connectorAttributes

    try:
        # Update a machine account
        new_request_body = RequestBody.from_json(request_body)
        results = MachineAccountsApi(api_client).update_machine_account(id=id, x_sail_point_experimental=x_sail_point_experimental, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = MachineAccountsApi(api_client).update_machine_account(id, x_sail_point_experimental, new_request_body)
        print("The response of MachineAccountsApi->update_machine_account:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountsApi->update_machine_account: %s\n" % e)
```



[[Back to top]](#) 



