---
id: search-attribute-configuration
title: Search_Attribute_Configuration
pagination_label: Search_Attribute_Configuration
sidebar_label: Search_Attribute_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Search_Attribute_Configuration', 'Search_Attribute_Configuration'] 
slug: /tools/sdk/python/v3/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'Search_Attribute_Configuration', 'Search_Attribute_Configuration']
---

# sailpoint.v3.SearchAttributeConfigurationApi
  Use this API to implement search attribute configuration functionality, along with [Search](https://developer.sailpoint.com/docs/api/v3/search).
With this functionality in place, administrators can create custom search attributes that and run extended searches based on those attributes to further narrow down their searches and get the information and insights they want. 

Identity Security Cloud (ISC) enables organizations to store user data from across all their connected sources and manage the users&#39; access, so the ability to query and filter that data is essential.  
Its search goes through all those sources and finds the results quickly and specifically. 

The search query is flexible - it can be very broad or very narrow. 
The search only returns results for searchable objects it is filtering for. 
The following objects are searchable: identities, roles, access profiles, entitlements, events, and account activities. 
By default, no filter is applied, so a search for &quot;Ad&quot; returns both the identity &quot;Adam.Archer&quot; as well as the role &quot;Administrator.&quot;

Users can further narrow their results by using ISC&#39;s specific syntax and punctuation to structure their queries. 
For example, the query &quot;attributes.location:austin AND NOT manager.name:amanda.ross&quot; returns all results associated with the Austin location, but it excludes those associated with the manager Amanda Ross.
Refer to [Building a Search Query](https://documentation.sailpoint.com/saas/help/search/building-query.html) for more information about how to construct specific search queries. 

Refer to [Search Attribute Configuration](https://developer.sailpoint.com/docs/extensibility/rules/rule-utility/#configuration-of-search-attributes-within-identity-security-cloud) for more information about ISC&#39;s search and its different possibilities. 

With Search Attribute Configuration, administrators can create, manage, and run searches based on the attributes they want to search. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-search-attribute-config**](#create-search-attribute-config) | **POST** `/accounts/search-attribute-config` | Create extended search attributes
[**delete-search-attribute-config**](#delete-search-attribute-config) | **DELETE** `/accounts/search-attribute-config/{name}` | Delete extended search attribute
[**get-search-attribute-config**](#get-search-attribute-config) | **GET** `/accounts/search-attribute-config` | List extended search attributes
[**get-single-search-attribute-config**](#get-single-search-attribute-config) | **GET** `/accounts/search-attribute-config/{name}` | Get extended search attribute
[**patch-search-attribute-config**](#patch-search-attribute-config) | **PATCH** `/accounts/search-attribute-config/{name}` | Update extended search attribute


## create-search-attribute-config
Create extended search attributes
Create and configure extended search attributes. This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names. It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig.
>**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes' `applicationAttributes`.**

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-search-attribute-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | search_attribute_config | [**SearchAttributeConfig**](../models/search-attribute-config) | True  | 

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
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
from sailpoint.v3.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.search_attribute_config import SearchAttributeConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    search_attribute_config = '''{
          "displayName" : "New Mail Attribute",
          "name" : "newMailAttribute",
          "applicationAttributes" : {
            "2c91808b79fd2422017a0b35d30f3968" : "employeeNumber",
            "2c91808b79fd2422017a0b36008f396b" : "employeeNumber"
          }
        }''' # SearchAttributeConfig | 

    try:
        # Create extended search attributes
        new_search_attribute_config = SearchAttributeConfig.from_json(search_attribute_config)
        results = SearchAttributeConfigurationApi(api_client).create_search_attribute_config(search_attribute_config=new_search_attribute_config)
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).create_search_attribute_config(new_search_attribute_config)
        print("The response of SearchAttributeConfigurationApi->create_search_attribute_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->create_search_attribute_config: %s\n" % e)
```



[[Back to top]](#) 

## delete-search-attribute-config
Delete extended search attribute
Delete an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-search-attribute-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | Name of the extended search attribute configuration to delete.

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
from sailpoint.v3.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'newMailAttribute' # str | Name of the extended search attribute configuration to delete. # str | Name of the extended search attribute configuration to delete.

    try:
        # Delete extended search attribute
        
        SearchAttributeConfigurationApi(api_client).delete_search_attribute_config(name=name)
        # Below is a request that includes all optional parameters
        # SearchAttributeConfigurationApi(api_client).delete_search_attribute_config(name)
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->delete_search_attribute_config: %s\n" % e)
```



[[Back to top]](#) 

## get-search-attribute-config
List extended search attributes
Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-search-attribute-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[SearchAttributeConfig]**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of attribute configurations in IdentityNow. | List[SearchAttributeConfig] |  -  |
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
from sailpoint.v3.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.search_attribute_config import SearchAttributeConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

    try:
        # List extended search attributes
        
        results = SearchAttributeConfigurationApi(api_client).get_search_attribute_config()
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).get_search_attribute_config(limit, offset)
        print("The response of SearchAttributeConfigurationApi->get_search_attribute_config:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->get_search_attribute_config: %s\n" % e)
```



[[Back to top]](#) 

## get-single-search-attribute-config
Get extended search attribute
Get an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-single-search-attribute-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | Name of the extended search attribute configuration to retrieve.

### Return type
[**List[SearchAttributeConfig]**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Specific attribute configuration in ISC. | List[SearchAttributeConfig] |  -  |
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
from sailpoint.v3.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.search_attribute_config import SearchAttributeConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'newMailAttribute' # str | Name of the extended search attribute configuration to retrieve. # str | Name of the extended search attribute configuration to retrieve.

    try:
        # Get extended search attribute
        
        results = SearchAttributeConfigurationApi(api_client).get_single_search_attribute_config(name=name)
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).get_single_search_attribute_config(name)
        print("The response of SearchAttributeConfigurationApi->get_single_search_attribute_config:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->get_single_search_attribute_config: %s\n" % e)
```



[[Back to top]](#) 

## patch-search-attribute-config
Update extended search attribute
Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

[API Spec](https://developer.sailpoint.com/docs/api/v3/patch-search-attribute-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | Name of the search attribute configuration to patch.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**SearchAttributeConfig**](../models/search-attribute-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated search attribute configuration. | SearchAttributeConfig |  -  |
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
from sailpoint.v3.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.search_attribute_config import SearchAttributeConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'promotedMailAttribute' # str | Name of the search attribute configuration to patch. # str | Name of the search attribute configuration to patch.
    json_patch_operation = '''[{op=replace, path=/name, value=newAttributeName}, {op=replace, path=/displayName, value=new attribute display name}, {op=add, path=/applicationAttributes, value={2c91808b79fd2422017a0b35d30f3968=employeeNumber}}]''' # List[JsonPatchOperation] | 

    try:
        # Update extended search attribute
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = SearchAttributeConfigurationApi(api_client).patch_search_attribute_config(name=name, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).patch_search_attribute_config(name, new_json_patch_operation)
        print("The response of SearchAttributeConfigurationApi->patch_search_attribute_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->patch_search_attribute_config: %s\n" % e)
```



[[Back to top]](#) 



