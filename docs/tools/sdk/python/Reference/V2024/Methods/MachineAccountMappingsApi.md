---
id: v2024-machine-account-mappings
title: Machine_Account_Mappings
pagination_label: Machine_Account_Mappings
sidebar_label: Machine_Account_Mappings
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Machine_Account_Mappings', 'V2024Machine_Account_Mappings'] 
slug: /tools/sdk/python/v2024/methods/machine-account-mappings
tags: ['SDK', 'Software Development Kit', 'Machine_Account_Mappings', 'V2024Machine_Account_Mappings']
---

# sailpoint.v2024.MachineAccountMappingsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-mappings**](#create-machine-account-mappings) | **POST** `/sources/{sourceId}/machine-account-mappings` | Create machine account mappings
[**delete-machine-account-mappings**](#delete-machine-account-mappings) | **DELETE** `/sources/{sourceId}/machine-account-mappings` | Delete source&#39;s machine account mappings
[**list-machine-account-mappings**](#list-machine-account-mappings) | **GET** `/sources/{sourceId}/machine-account-mappings` | Machine account mapping for source
[**set-machine-account-mappings**](#set-machine-account-mappings) | **PUT** `/sources/{sourceId}/machine-mappings` | Update source&#39;s machine account mappings


## create-machine-account-mappings
Create machine account mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-machine-account-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.
 Body  | attribute_mappings | [**AttributeMappings**](../models/attribute-mappings) | True  | 

### Return type
[**List[AttributeMappings]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Newly created Attribute Mapping Object | List[AttributeMappings] |  -  |
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
from sailpoint.v2024.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.attribute_mappings import AttributeMappings
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    attribute_mappings = '''{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }''' # AttributeMappings | 

    try:
        # Create machine account mappings
        new_attribute_mappings = AttributeMappings.from_json(attribute_mappings)
        results = MachineAccountMappingsApi(api_client).create_machine_account_mappings(id=id, attribute_mappings=new_attribute_mappings)
        # Below is a request that includes all optional parameters
        # results = MachineAccountMappingsApi(api_client).create_machine_account_mappings(id, new_attribute_mappings)
        print("The response of MachineAccountMappingsApi->create_machine_account_mappings:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->create_machine_account_mappings: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-mappings
Delete source's machine account mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-machine-account-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | source ID.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v2024.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | source ID. # str | source ID.

    try:
        # Delete source's machine account mappings
        
        MachineAccountMappingsApi(api_client).delete_machine_account_mappings(id=id)
        # Below is a request that includes all optional parameters
        # MachineAccountMappingsApi(api_client).delete_machine_account_mappings(id)
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->delete_machine_account_mappings: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-account-mappings
Machine account mapping for source
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-machine-account-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[AttributeMappings]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An array of Attribute Mapping Objects | List[AttributeMappings] |  -  |
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
from sailpoint.v2024.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.attribute_mappings import AttributeMappings
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID # str | Source ID
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # Machine account mapping for source
        
        results = MachineAccountMappingsApi(api_client).list_machine_account_mappings(id=id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountMappingsApi(api_client).list_machine_account_mappings(id, limit, offset)
        print("The response of MachineAccountMappingsApi->list_machine_account_mappings:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->list_machine_account_mappings: %s\n" % e)
```



[[Back to top]](#) 

## set-machine-account-mappings
Update source's machine account mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/set-machine-account-mappings)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Source ID.
 Body  | attribute_mappings | [**AttributeMappings**](../models/attribute-mappings) | True  | 

### Return type
[**List[AttributeMappings]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Account Attributes for a Source. | List[AttributeMappings] |  -  |
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
from sailpoint.v2024.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.attribute_mappings import AttributeMappings
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    attribute_mappings = '''{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }''' # AttributeMappings | 

    try:
        # Update source's machine account mappings
        new_attribute_mappings = AttributeMappings.from_json(attribute_mappings)
        results = MachineAccountMappingsApi(api_client).set_machine_account_mappings(id=id, attribute_mappings=new_attribute_mappings)
        # Below is a request that includes all optional parameters
        # results = MachineAccountMappingsApi(api_client).set_machine_account_mappings(id, new_attribute_mappings)
        print("The response of MachineAccountMappingsApi->set_machine_account_mappings:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->set_machine_account_mappings: %s\n" % e)
```



[[Back to top]](#) 



