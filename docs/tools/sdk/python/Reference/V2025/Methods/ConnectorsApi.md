---
id: v2025-connectors
title: Connectors
pagination_label: Connectors
sidebar_label: Connectors
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connectors', 'V2025Connectors'] 
slug: /tools/sdk/python/v2025/methods/connectors
tags: ['SDK', 'Software Development Kit', 'Connectors', 'V2025Connectors']
---

# sailpoint.v2025.ConnectorsApi
  Use this API to implement connector functionality.
With this functionality in place, administrators can view available connectors.

Connectors are the bridges Identity Security Cloud uses to communicate with and aggregate data from sources.
For example, if it is necessary to set up a connection between Identity Security Cloud and the Active Directory source, a connector can bridge the two and enable Identity Security Cloud to synchronize data between the systems.
This ensures account entitlements and states are correct throughout the organization.

In Identity Security Cloud, administrators can use the Connections drop-down menu and select Sources to view the available source connectors.

Refer to [Identity Security Cloud Connectors](https://documentation.sailpoint.com/connectors/identitynow/landingpages/help/landingpages/identitynow_connectivity_landing.html) for more information about the connectors available in Identity Security Cloud.

Refer to [SaaS Connectivity](https://developer.sailpoint.com/docs/connectivity/saas-connectivity/) for more information about the SaaS custom connectors that do not need VAs (virtual appliances) to communicate with their sources.

Refer to [Managing Sources](https://documentation.sailpoint.com/saas/help/sources/index.html) for more information about using connectors in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-connector**](#create-custom-connector) | **POST** `/connectors` | Create custom connector
[**delete-custom-connector**](#delete-custom-connector) | **DELETE** `/connectors/{scriptName}` | Delete connector by script name
[**get-connector**](#get-connector) | **GET** `/connectors/{scriptName}` | Get connector by script name
[**get-connector-correlation-config**](#get-connector-correlation-config) | **GET** `/connectors/{scriptName}/correlation-config` | Get connector correlation configuration
[**get-connector-list**](#get-connector-list) | **GET** `/connectors` | Get connector list
[**get-connector-source-config**](#get-connector-source-config) | **GET** `/connectors/{scriptName}/source-config` | Get connector source configuration
[**get-connector-source-template**](#get-connector-source-template) | **GET** `/connectors/{scriptName}/source-template` | Get connector source template
[**get-connector-translations**](#get-connector-translations) | **GET** `/connectors/{scriptName}/translations/{locale}` | Get connector translations
[**put-connector-correlation-config**](#put-connector-correlation-config) | **PUT** `/connectors/{scriptName}/correlation-config` | Update connector correlation configuration
[**put-connector-source-config**](#put-connector-source-config) | **PUT** `/connectors/{scriptName}/source-config` | Update connector source configuration
[**put-connector-source-template**](#put-connector-source-template) | **PUT** `/connectors/{scriptName}/source-template` | Update connector source template
[**put-connector-translations**](#put-connector-translations) | **PUT** `/connectors/{scriptName}/translations/{locale}` | Update connector translations
[**update-connector**](#update-connector) | **PATCH** `/connectors/{scriptName}` | Update connector by script name


## create-custom-connector
Create custom connector
Create custom connector.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-custom-connector)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | v3_create_connector_dto | [**V3CreateConnectorDto**](../models/v3-create-connector-dto) | True  | 

### Return type
[**V3ConnectorDto**](../models/v3-connector-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | V3ConnectorDto |  -  |
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
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.v3_connector_dto import V3ConnectorDto
from sailpoint.v2025.models.v3_create_connector_dto import V3CreateConnectorDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    v3_create_connector_dto = '''{
          "name" : "custom connector",
          "directConnect" : true,
          "className" : "sailpoint.connector.OpenConnectorAdapter",
          "type" : "custom connector type",
          "status" : "RELEASED"
        }''' # V3CreateConnectorDto | 

    try:
        # Create custom connector
        new_v3_create_connector_dto = V3CreateConnectorDto.from_json(v3_create_connector_dto)
        results = ConnectorsApi(api_client).create_custom_connector(v3_create_connector_dto=new_v3_create_connector_dto)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).create_custom_connector(new_v3_create_connector_dto)
        print("The response of ConnectorsApi->create_custom_connector:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->create_custom_connector: %s\n" % e)
```



[[Back to top]](#) 

## delete-custom-connector
Delete connector by script name
Delete a custom connector that using its script name.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-custom-connector)

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
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    try:
        # Delete connector by script name
        
        ConnectorsApi(api_client).delete_custom_connector(script_name=script_name)
        # Below is a request that includes all optional parameters
        # ConnectorsApi(api_client).delete_custom_connector(script_name)
    except Exception as e:
        print("Exception when calling ConnectorsApi->delete_custom_connector: %s\n" % e)
```



[[Back to top]](#) 

## get-connector
Get connector by script name
Fetches a connector that using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | ConnectorDetail |  -  |
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
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_detail import ConnectorDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional) # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" (optional)

    try:
        # Get connector by script name
        
        results = ConnectorsApi(api_client).get_connector(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector(script_name, locale)
        print("The response of ConnectorsApi->get_connector:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-correlation-config
Get connector correlation configuration
Fetches a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-correlation-config)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.

    try:
        # Get connector correlation configuration
        
        results = ConnectorsApi(api_client).get_connector_correlation_config(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_correlation_config(script_name)
        print("The response of ConnectorsApi->get_connector_correlation_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_correlation_config: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-list
Get connector list
Fetches list of connectors that have 'RELEASED' status using filtering and pagination.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-list)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw, co*  **type**: *sw, co, eq*  **directConnect**: *eq*  **category**: *eq*  **features**: *ca*  **labels**: *ca*
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | locale | **str** |   (optional) | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**List[V3ConnectorDto]**](../models/v3-connector-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A Connector Dto object | List[V3ConnectorDto] |  -  |
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
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.v3_connector_dto import V3ConnectorDto
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
        
        results = ConnectorsApi(api_client).get_connector_list()
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_list(filters, limit, offset, count, locale)
        print("The response of ConnectorsApi->get_connector_list:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_list: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-source-config
Get connector source configuration
Fetches a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-source-config)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    try:
        # Get connector source configuration
        
        results = ConnectorsApi(api_client).get_connector_source_config(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_source_config(script_name)
        print("The response of ConnectorsApi->get_connector_source_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_source_config: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-source-template
Get connector source template
Fetches a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-source-template)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/xml, application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.

    try:
        # Get connector source template
        
        results = ConnectorsApi(api_client).get_connector_source_template(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_source_template(script_name)
        print("The response of ConnectorsApi->get_connector_source_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_source_template: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-translations
Get connector translations
Fetches a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-connector-translations)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

    try:
        # Get connector translations
        
        results = ConnectorsApi(api_client).get_connector_translations(script_name=script_name, locale=locale)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).get_connector_translations(script_name, locale)
        print("The response of ConnectorsApi->get_connector_translations:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->get_connector_translations: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-correlation-config
Update connector correlation configuration
Update a connector's correlation config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-correlation-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
   | file | **bytearray** | True  | connector correlation config xml file

### Return type
[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | UpdateDetail |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.update_detail import UpdateDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    file = None # bytearray | connector correlation config xml file # bytearray | connector correlation config xml file

    try:
        # Update connector correlation configuration
        
        results = ConnectorsApi(api_client).put_connector_correlation_config(script_name=script_name, file=file)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_correlation_config(script_name, file)
        print("The response of ConnectorsApi->put_connector_correlation_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_correlation_config: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-source-config
Update connector source configuration
Update a connector's source config using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-source-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | file | **bytearray** | True  | connector source config xml file

### Return type
[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | UpdateDetail |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.update_detail import UpdateDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file = None # bytearray | connector source config xml file # bytearray | connector source config xml file

    try:
        # Update connector source configuration
        
        results = ConnectorsApi(api_client).put_connector_source_config(script_name=script_name, file=file)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_source_config(script_name, file)
        print("The response of ConnectorsApi->put_connector_source_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_source_config: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-source-template
Update connector source template
Update a connector's source template using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-source-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
   | file | **bytearray** | True  | connector source template xml file

### Return type
[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | UpdateDetail |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.update_detail import UpdateDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    file = None # bytearray | connector source template xml file # bytearray | connector source template xml file

    try:
        # Update connector source template
        
        results = ConnectorsApi(api_client).put_connector_source_template(script_name=script_name, file=file)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_source_template(script_name, file)
        print("The response of ConnectorsApi->put_connector_source_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_source_template: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-translations
Update connector translations
Update a connector's translations using its script name.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/put-connector-translations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
Path   | locale | **str** | True  | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

### Return type
[**UpdateDetail**](../models/update-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The connector&#39;s update detail | UpdateDetail |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.update_detail import UpdateDetail
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation. # str | The scriptName value of the connector. Scriptname is the unique id generated at connector creation.
    locale = 'de' # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\" # str | The locale to apply to the config. If no viable locale is given, it will default to \"en\"

    try:
        # Update connector translations
        
        results = ConnectorsApi(api_client).put_connector_translations(script_name=script_name, locale=locale)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).put_connector_translations(script_name, locale)
        print("The response of ConnectorsApi->put_connector_translations:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->put_connector_translations: %s\n" % e)
```



[[Back to top]](#) 

## update-connector
Update connector by script name
This API updates a custom connector by script name using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable:


* connectorMetadata

* applicationXml

* correlationConfigXml

* sourceConfigXml


[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-connector)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of connector detail update operations 

### Return type
[**ConnectorDetail**](../models/connector-detail)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A updated Connector Dto object | ConnectorDetail |  -  |
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
from sailpoint.v2025.api.connectors_api import ConnectorsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.connector_detail import ConnectorDetail
from sailpoint.v2025.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation. # str | The scriptName value of the connector. ScriptName is the unique id generated at connector creation.
    json_patch_operation = '''[sailpoint.v2025.JsonPatchOperation()]''' # List[JsonPatchOperation] | A list of connector detail update operations 

    try:
        # Update connector by script name
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = ConnectorsApi(api_client).update_connector(script_name=script_name, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = ConnectorsApi(api_client).update_connector(script_name, new_json_patch_operation)
        print("The response of ConnectorsApi->update_connector:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorsApi->update_connector: %s\n" % e)
```



[[Back to top]](#) 



