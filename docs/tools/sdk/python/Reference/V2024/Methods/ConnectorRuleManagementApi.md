---
id: v2024-connector-rule-management
title: Connector_Rule_Management
pagination_label: Connector_Rule_Management
sidebar_label: Connector_Rule_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connector_Rule_Management', 'V2024Connector_Rule_Management'] 
slug: /tools/sdk/python/v2024/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'Connector_Rule_Management', 'V2024Connector_Rule_Management']
---

# sailpoint.v2024.ConnectorRuleManagementApi
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule**](#create-connector-rule) | **POST** `/connector-rules` | Create Connector Rule
[**delete-connector-rule**](#delete-connector-rule) | **DELETE** `/connector-rules/{id}` | Delete Connector Rule
[**get-connector-rule**](#get-connector-rule) | **GET** `/connector-rules/{id}` | Get Connector Rule
[**get-connector-rule-list**](#get-connector-rule-list) | **GET** `/connector-rules` | List Connector Rules
[**put-connector-rule**](#put-connector-rule) | **PUT** `/connector-rules/{id}` | Update Connector Rule
[**test-connector-rule**](#test-connector-rule) | **POST** `/connector-rules/validate` | Validate Connector Rule


## create-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create Connector Rule
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | connector_rule_create_request | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | True  | Connector rule to create.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created connector rule. | ConnectorRuleResponse |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.connector_rule_create_request import ConnectorRuleCreateRequest
from sailpoint.v2024.models.connector_rule_response import ConnectorRuleResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    connector_rule_create_request = {
          "sourceCode" : {
            "version" : "1.0",
            "script" : "return \"Mr. \" + firstName;"
          },
          "signature" : {
            "output" : {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            },
            "input" : [ {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            }, {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            } ]
          },
          "name" : "WebServiceBeforeOperationRule",
          "description" : "This rule does that",
          "attributes" : { },
          "type" : "BuildMap"
        } # ConnectorRuleCreateRequest | Connector rule to create.

    try:
        # Create Connector Rule
        new_connector_rule_create_request = ConnectorRuleCreateRequest()
        new_connector_rule_create_request.from_json(connector_rule_create_request)
        results =ConnectorRuleManagementApi(api_client).create_connector_rule(x_sail_point_experimental, new_connector_rule_create_request)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).create_connector_rule(x_sail_point_experimental, new_connector_rule_create_request)
        print("The response of ConnectorRuleManagementApi->create_connector_rule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->create_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## delete-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete Connector Rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to delete.
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
import sailpoint.v2024
from sailpoint.v2024.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to delete. # str | ID of the connector rule to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Delete Connector Rule
        
        ConnectorRuleManagementApi(api_client).delete_connector_rule(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # ConnectorRuleManagementApi(api_client).delete_connector_rule(id, x_sail_point_experimental)
        except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->delete_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Connector Rule
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to get.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Connector rule with the given ID. | ConnectorRuleResponse |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.connector_rule_response import ConnectorRuleResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to get. # str | ID of the connector rule to get.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Connector Rule
        
        results =ConnectorRuleManagementApi(api_client).get_connector_rule(id, x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).get_connector_rule(id, x_sail_point_experimental)
        print("The response of ConnectorRuleManagementApi->get_connector_rule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->get_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-rule-list
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Connector Rules
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-connector-rule-list)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ConnectorRuleResponse]**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of connector rules. | List[ConnectorRuleResponse] |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.connector_rule_response import ConnectorRuleResponse
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    limit = 50 # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List Connector Rules
        
        results =ConnectorRuleManagementApi(api_client).get_connector_rule_list(x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).get_connector_rule_list(x_sail_point_experimental, limit, offset, count)
        print("The response of ConnectorRuleManagementApi->get_connector_rule_list:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->get_connector_rule_list: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Connector Rule
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/v2024/put-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to update.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | connector_rule_update_request | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) |   (optional) | Connector rule with updated data.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated connector rule. | ConnectorRuleResponse |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.v2024.models.connector_rule_update_request import ConnectorRuleUpdateRequest
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to update. # str | ID of the connector rule to update.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    connector_rule_update_request = {
          "sourceCode" : {
            "version" : "1.0",
            "script" : "return \"Mr. \" + firstName;"
          },
          "signature" : {
            "output" : {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            },
            "input" : [ {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            }, {
              "name" : "firstName",
              "description" : "the first name of the identity",
              "type" : "String"
            } ]
          },
          "name" : "WebServiceBeforeOperationRule",
          "description" : "This rule does that",
          "attributes" : { },
          "id" : "8113d48c0b914f17b4c6072d4dcb9dfe",
          "type" : "BuildMap"
        } # ConnectorRuleUpdateRequest | Connector rule with updated data. (optional)

    try:
        # Update Connector Rule
        
        results =ConnectorRuleManagementApi(api_client).put_connector_rule(id, x_sail_point_experimental, )
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).put_connector_rule(id, x_sail_point_experimental, new_connector_rule_update_request)
        print("The response of ConnectorRuleManagementApi->put_connector_rule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->put_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## test-connector-rule
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Validate Connector Rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/test-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | source_code | [**SourceCode**](../models/source-code) | True  | Code to validate.

### Return type
[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the code&#39;s eligibility as a connector rule. | ConnectorRuleValidationResponse |  -  |
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
import sailpoint.v2024
from sailpoint.v2024.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.connector_rule_validation_response import ConnectorRuleValidationResponse
from sailpoint.v2024.models.source_code import SourceCode
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    source_code = {
          "version" : "1.0",
          "script" : "return \"Mr. \" + firstName;"
        } # SourceCode | Code to validate.

    try:
        # Validate Connector Rule
        new_source_code = SourceCode()
        new_source_code.from_json(source_code)
        results =ConnectorRuleManagementApi(api_client).test_connector_rule(x_sail_point_experimental, new_source_code)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).test_connector_rule(x_sail_point_experimental, new_source_code)
        print("The response of ConnectorRuleManagementApi->test_connector_rule:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->test_connector_rule: %s\n" % e)
```



[[Back to top]](#) 



