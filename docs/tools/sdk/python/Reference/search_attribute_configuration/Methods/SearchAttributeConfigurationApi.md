---
id: search-attribute-configuration
title: Search_Attribute_Configuration
pagination_label: Search_Attribute_Configuration
sidebar_label: Search_Attribute_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Search_Attribute_Configuration', 'Search_Attribute_Configuration'] 
slug: /tools/sdk/python/search-attribute-configuration/methods/search-attribute-configuration
tags: ['SDK', 'Software Development Kit', 'Search_Attribute_Configuration', 'Search_Attribute_Configuration']
---

# sailpoint.search_attribute_configuration.SearchAttributeConfigurationApi
  Use this API to implement search attribute configuration functionality, along with [Search](https://developer.sailpoint.com/docs/api/v2025/search).
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-search-attribute-config-v1**](#create-search-attribute-config-v1) | **POST** `/accounts/v1/search-attribute-config` | Create extended search attributes
[**delete-search-attribute-config-v1**](#delete-search-attribute-config-v1) | **DELETE** `/accounts/v1/search-attribute-config/{name}` | Delete extended search attribute
[**get-search-attribute-config-v1**](#get-search-attribute-config-v1) | **GET** `/accounts/v1/search-attribute-config` | List extended search attributes
[**get-single-search-attribute-config-v1**](#get-single-search-attribute-config-v1) | **GET** `/accounts/v1/search-attribute-config/{name}` | Get extended search attribute
[**patch-search-attribute-config-v1**](#patch-search-attribute-config-v1) | **PATCH** `/accounts/v1/search-attribute-config/{name}` | Update extended search attribute


## create-search-attribute-config-v1
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
Create extended search attributes
Create and configure extended search attributes.  This API accepts an attribute name, an attribute display name and a list of name/value pair associates of application IDs to attribute names.  It will then validate the inputs and configure/create the attribute promotion configuration in the Link ObjectConfig.
>**Note: Give searchable attributes unique names.  Do not give them the same names used for account attributes or source attributes.  Also, do not give them the same names present in account schema for a current or future source, regardless of whether that source is included in the searchable attributes' `applicationAttributes`.**

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-search-attribute-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | searchattributeconfig | [**Searchattributeconfig**](../models/searchattributeconfig) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Accepted - Returned if the request was successfully accepted into the system. | object |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.search_attribute_configuration.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.search_attribute_configuration.api_client import ApiClient
from sailpoint.search_attribute_configuration.models.searchattributeconfig import Searchattributeconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    searchattributeconfig = '''{"name":"newMailAttribute","displayName":"New Mail Attribute","applicationAttributes":{"2c9180866166b5b0016167c32ef31a66":"mail","2c9180866166b5b0016167c32ef31a67":"mail"}}''' # Searchattributeconfig | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create extended search attributes
        new_searchattributeconfig = Searchattributeconfig.from_json(searchattributeconfig)
        results = SearchAttributeConfigurationApi(api_client).create_search_attribute_config_v1(searchattributeconfig=new_searchattributeconfig)
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).create_search_attribute_config_v1(new_searchattributeconfig, x_sail_point_experimental)
        print("The response of SearchAttributeConfigurationApi->create_search_attribute_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->create_search_attribute_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-search-attribute-config-v1
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
Delete extended search attribute
Delete an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-search-attribute-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | Name of the extended search attribute configuration to delete.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.search_attribute_configuration.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.search_attribute_configuration.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    name = 'newMailAttribute' # str | Name of the extended search attribute configuration to delete. # str | Name of the extended search attribute configuration to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete extended search attribute
        
        SearchAttributeConfigurationApi(api_client).delete_search_attribute_config_v1(name=name)
        # Below is a request that includes all optional parameters
        # SearchAttributeConfigurationApi(api_client).delete_search_attribute_config_v1(name, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->delete_search_attribute_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-search-attribute-config-v1
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
List extended search attributes
Get a list of attribute/application attributes currently configured in Identity Security Cloud (ISC).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-search-attribute-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Searchattributeconfig]**](../models/searchattributeconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of attribute configurations in ISC. | List[Searchattributeconfig] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.search_attribute_configuration.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.search_attribute_configuration.api_client import ApiClient
from sailpoint.search_attribute_configuration.models.searchattributeconfig import Searchattributeconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List extended search attributes
        
        results = SearchAttributeConfigurationApi(api_client).get_search_attribute_config_v1()
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).get_search_attribute_config_v1(limit, offset, x_sail_point_experimental)
        print("The response of SearchAttributeConfigurationApi->get_search_attribute_config_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->get_search_attribute_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-single-search-attribute-config-v1
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
Get extended search attribute
Get an extended attribute configuration by name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-single-search-attribute-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | Name of the extended search attribute configuration to get.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Searchattributeconfig**](../models/searchattributeconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Specific attribute configuration in IdentityNow. | Searchattributeconfig |  -  |
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.search_attribute_configuration.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.search_attribute_configuration.api_client import ApiClient
from sailpoint.search_attribute_configuration.models.searchattributeconfig import Searchattributeconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    name = 'newMailAttribute' # str | Name of the extended search attribute configuration to get. # str | Name of the extended search attribute configuration to get.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get extended search attribute
        
        results = SearchAttributeConfigurationApi(api_client).get_single_search_attribute_config_v1(name=name)
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).get_single_search_attribute_config_v1(name, x_sail_point_experimental)
        print("The response of SearchAttributeConfigurationApi->get_single_search_attribute_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->get_single_search_attribute_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-search-attribute-config-v1
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
Update extended search attribute
Update an existing search attribute configuration. 
You can patch these fields:
* name  * displayName * applicationAttributes

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-search-attribute-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | Name of the search attribute configuration to patch.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Searchattributeconfig**](../models/searchattributeconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the search attribute configuration as updated. | Searchattributeconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSearchAttributeConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSearchAttributeConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.search_attribute_configuration.api.search_attribute_configuration_api import SearchAttributeConfigurationApi
from sailpoint.search_attribute_configuration.api_client import ApiClient
from sailpoint.search_attribute_configuration.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.search_attribute_configuration.models.searchattributeconfig import Searchattributeconfig
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    name = 'promotedMailAttribute' # str | Name of the search attribute configuration to patch. # str | Name of the search attribute configuration to patch.
    jsonpatchoperation = '''[{"op":"replace","path":"/name","value":"newAttributeName"},{"op":"replace","path":"/displayName","value":"new attribute display name"},{"op":"add","path":"/applicationAttributes","value":{"2c91808b79fd2422017a0b35d30f3968":"employeeNumber"}}]''' # List[Jsonpatchoperation] | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update extended search attribute
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = SearchAttributeConfigurationApi(api_client).patch_search_attribute_config_v1(name=name, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = SearchAttributeConfigurationApi(api_client).patch_search_attribute_config_v1(name, new_jsonpatchoperation, x_sail_point_experimental)
        print("The response of SearchAttributeConfigurationApi->patch_search_attribute_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SearchAttributeConfigurationApi->patch_search_attribute_config_v1: %s\n" % e)
```



[[Back to top]](#) 



