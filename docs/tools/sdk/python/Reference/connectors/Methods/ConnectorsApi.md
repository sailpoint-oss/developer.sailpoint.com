---
id: connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectors', 'Connectors'] 
slug: /tools/sdk/python/connectors/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'Connectors']
---

# sailpoint.connectors.ConnectorsApi
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about using connectors in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-connector-v1**](#create-custom-connector-v1) | **POST** `/connectors/v1` | Create custom connector
[**delete-custom-connector-v1**](#delete-custom-connector-v1) | **DELETE** `/connectors/v1/{scriptName}` | Delete connector by script name
[**get-connector-correlation-config-v1**](#get-connector-correlation-config-v1) | **GET** `/connectors/v1/{scriptName}/correlation-config` | Get connector correlation configuration
[**get-connector-list-v1**](#get-connector-list-v1) | **GET** `/connectors/v1` | Get connector list
[**get-connector-source-config-v1**](#get-connector-source-config-v1) | **GET** `/connectors/v1/{scriptName}/source-config` | Get connector source configuration
[**get-connector-source-template-v1**](#get-connector-source-template-v1) | **GET** `/connectors/v1/{scriptName}/source-template` | Get connector source template
[**get-connector-translations-v1**](#get-connector-translations-v1) | **GET** `/connectors/v1/{scriptName}/translations/{locale}` | Get connector translations
[**get-connector-v1**](#get-connector-v1) | **GET** `/connectors/v1/{scriptName}` | Get connector by script name
[**put-connector-correlation-config-v1**](#put-connector-correlation-config-v1) | **PUT** `/connectors/v1/{scriptName}/correlation-config` | Update connector correlation configuration
[**put-connector-source-config-v1**](#put-connector-source-config-v1) | **PUT** `/connectors/v1/{scriptName}/source-config` | Update connector source configuration
[**put-connector-source-template-v1**](#put-connector-source-template-v1) | **PUT** `/connectors/v1/{scriptName}/source-template` | Update connector source template
[**put-connector-translations-v1**](#put-connector-translations-v1) | **PUT** `/connectors/v1/{scriptName}/translations/{locale}` | Update connector translations
[**update-connector-v1**](#update-connector-v1) | **PATCH** `/connectors/v1/{scriptName}` | Update connector by script name


## create-custom-connector-v1
Create custom connector
Create custom connector.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-connector-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | v3createconnectordto | [**V3createconnectordto**](../models/v3createconnectordto) | True  | 

### Return type
[**V3connectordto**](../models/v3connectordto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | V3connectordto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.v3connectordto import V3connectordto
from sailpoint.connectors.models.v3createconnectordto import V3createconnectordto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    v3createconnectordto = '''sailpoint.connectors.V3createconnectordto()''' # V3createconnectordto | 

    try:
        # Create custom connector
        new_v3createconnectordto = V3createconnectordto.from_json(v3createconnectordto)
        results = ConnectorsApi(api_client).create_custom_connector_v1(v3createconnectordto=new_v3createconnectordto)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).create_custom_connector_v1(new_v3createconnectordto)
        print("The response of ConnectorsApi->create_custom_connector_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->create_custom_connector_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-custom-connector-v1
Delete connector by script name
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-connector-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    try:
        # Delete connector by script name
        
        ConnectorsApi(api_client).delete_custom_connector_v1(script_name=script_name)
        # Below is a request that includes all optional parameters
        # ConnectorsApi(api_client).delete_custom_connector_v1(script_name)
    except Exception as e:
        print("Exception when calling ConnectorsApi->delete_custom_connector_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-correlation-config-v1
Get connector correlation configuration
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-correlation-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s correlation config | str |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

    try:
        # Get connector correlation configuration
        
        results = ConnectorsApi(api_client).get_connector_correlation_config_v1(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_correlation_config_v1(script_name)
        print("The response of ConnectorsApi->get_connector_correlation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-list-v1
Get connector list
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-list-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**List[V3connectordto]**](../models/v3connectordto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | List[V3connectordto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.v3connectordto import V3connectordto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'directConnect eq \"true\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca* (optional)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Get connector list
        
        results = ConnectorsApi(api_client).get_connector_list_v1()
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_list_v1(filters, limit, offset, count, locale)
        print("The response of ConnectorsApi->get_connector_list_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_list_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-source-config-v1
Get connector source configuration
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s source template | str |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    try:
        # Get connector source configuration
        
        results = ConnectorsApi(api_client).get_connector_source_config_v1(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_source_config_v1(script_name)
        print("The response of ConnectorsApi->get_connector_source_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_source_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-source-template-v1
Get connector source template
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-source-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s source template | str |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    try:
        # Get connector source template
        
        results = ConnectorsApi(api_client).get_connector_source_template_v1(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_source_template_v1(script_name)
        print("The response of ConnectorsApi->get_connector_source_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_source_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-translations-v1
Get connector translations
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-translations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | locale | **str** | True  | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
**str**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s translations | str |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

    try:
        # Get connector translations
        
        results = ConnectorsApi(api_client).get_connector_translations_v1(script_name=script_name, locale=locale)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_translations_v1(script_name, locale)
        print("The response of ConnectorsApi->get_connector_translations_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_translations_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-v1
Get connector by script name
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**Connectordetail**](../models/connectordetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | Connectordetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.connectordetail import Connectordetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Get connector by script name
        
        results = ConnectorsApi(api_client).get_connector_v1(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_v1(script_name, locale)
        print("The response of ConnectorsApi->get_connector_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-correlation-config-v1
Update connector correlation configuration
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-correlation-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | file | **bytearray** | True  | connector correlation config xml file

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | Updatedetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.updatedetail import Updatedetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    file = None # bytearray | connector correlation config xml file # bytearray | connector correlation config xml file

    try:
        # Update connector correlation configuration
        
        results = ConnectorsApi(api_client).put_connector_correlation_config_v1(script_name=script_name, file=file)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_correlation_config_v1(script_name, file)
        print("The response of ConnectorsApi->put_connector_correlation_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_correlation_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-source-config-v1
Update connector source configuration
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | file | **bytearray** | True  | connector source config xml file

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | Updatedetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.updatedetail import Updatedetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file = None # bytearray | connector source config xml file # bytearray | connector source config xml file

    try:
        # Update connector source configuration
        
        results = ConnectorsApi(api_client).put_connector_source_config_v1(script_name=script_name, file=file)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_source_config_v1(script_name, file)
        print("The response of ConnectorsApi->put_connector_source_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_source_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-source-template-v1
Update connector source template
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-source-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | file | **bytearray** | True  | connector source template xml file

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | Updatedetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.updatedetail import Updatedetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file = None # bytearray | connector source template xml file # bytearray | connector source template xml file

    try:
        # Update connector source template
        
        results = ConnectorsApi(api_client).put_connector_source_template_v1(script_name=script_name, file=file)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_source_template_v1(script_name, file)
        print("The response of ConnectorsApi->put_connector_source_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_source_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-translations-v1
Update connector translations
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-translations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | locale | **str** | True  | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**Updatedetail**](../models/updatedetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | Updatedetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.updatedetail import Updatedetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

    try:
        # Update connector translations
        
        results = ConnectorsApi(api_client).put_connector_translations_v1(script_name=script_name, locale=locale)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_translations_v1(script_name, locale)
        print("The response of ConnectorsApi->put_connector_translations_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_translations_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-connector-v1
Update connector by script name
This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-connector-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of connector detail update operations 

### Return type
[**Connectordetail**](../models/connectordetail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A updated Connector Dto object | Connectordetail |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.connectors.api.connectors_api import ConnectorsApi
from sailpoint.connectors.api_client import ApiClient
from sailpoint.connectors.models.connectordetail import Connectordetail
from sailpoint.connectors.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    jsonpatchoperation = '''[sailpoint.connectors.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | A list of connector detail update operations 

    try:
        # Update connector by script name
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = ConnectorsApi(api_client).update_connector_v1(script_name=script_name, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).update_connector_v1(script_name, new_jsonpatchoperation)
        print("The response of ConnectorsApi->update_connector_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->update_connector_v1: %s\n" % e)
```



[[Back to top]](#) 



