---
id: beta-connector-rule-management
title: Connector_Rule_Management
pagination_label: Connector_Rule_Management
sidebar_label: Connector_Rule_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connector_Rule_Management', 'BetaConnector_Rule_Management'] 
slug: /tools/sdk/python/beta/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'Connector_Rule_Management', 'BetaConnector_Rule_Management']
---

# sailpoint.beta.ConnectorRuleManagementApi
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 
This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule**](#create-connector-rule) | **POST** `/connector-rules` | Create connector rule
[**delete-connector-rule**](#delete-connector-rule) | **DELETE** `/connector-rules/{id}` | Delete a connector-rule
[**get-connector-rule**](#get-connector-rule) | **GET** `/connector-rules/{id}` | Connector-rule by id
[**get-connector-rule-list**](#get-connector-rule-list) | **GET** `/connector-rules` | List connector rules
[**update-connector-rule**](#update-connector-rule) | **PUT** `/connector-rules/{id}` | Update a connector rule
[**validate-connector-rule**](#validate-connector-rule) | **POST** `/connector-rules/validate` | Validate connector rule


## create-connector-rule
Create connector rule
Creates a new connector rule.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | connector_rule_create_request | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | True  | The connector rule to create

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The created connector rule | ConnectorRuleResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.connector_rule_create_request import ConnectorRuleCreateRequest
from sailpoint.beta.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    connector_rule_create_request = '''{
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
        }''' # ConnectorRuleCreateRequest | The connector rule to create

    try:
        # Create connector rule
        new_connector_rule_create_request = ConnectorRuleCreateRequest.from_json(connector_rule_create_request)
        results = ConnectorRuleManagementApi(api_client).create_connector_rule(connector_rule_create_request=new_connector_rule_create_request)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).create_connector_rule(new_connector_rule_create_request)
        print("The response of ConnectorRuleManagementApi->create_connector_rule:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->create_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## delete-connector-rule
Delete a connector-rule
Deletes the connector rule specified by the given ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to delete # str | ID of the connector rule to delete

    try:
        # Delete a connector-rule
        
        ConnectorRuleManagementApi(api_client).delete_connector_rule(id=id)
        # Below is a request that includes all optional parameters
        # ConnectorRuleManagementApi(api_client).delete_connector_rule(id)
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->delete_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-rule
Connector-rule by id
Returns the connector rule specified by ID.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to retrieve

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Connector rule with the given ID | ConnectorRuleResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to retrieve # str | ID of the connector rule to retrieve

    try:
        # Connector-rule by id
        
        results = ConnectorRuleManagementApi(api_client).get_connector_rule(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).get_connector_rule(id)
        print("The response of ConnectorRuleManagementApi->get_connector_rule:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->get_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-rule-list
List connector rules
Returns the list of connector rules.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-connector-rule-list)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[ConnectorRuleResponse]**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of connector rules | List[ConnectorRuleResponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List connector rules
        
        results = ConnectorRuleManagementApi(api_client).get_connector_rule_list()
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).get_connector_rule_list()
        print("The response of ConnectorRuleManagementApi->get_connector_rule_list:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->get_connector_rule_list: %s\n" % e)
```



[[Back to top]](#) 

## update-connector-rule
Update a connector rule
Updates an existing connector rule with the one provided in the request body. Note that the fields 'id', 'name', and 'type' are immutable.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to update
 Body  | connector_rule_update_request | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) |   (optional) | The connector rule with updated data

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated connector rule | ConnectorRuleResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.beta.models.connector_rule_update_request import ConnectorRuleUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to update # str | ID of the connector rule to update
    connector_rule_update_request = '''{
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
        }''' # ConnectorRuleUpdateRequest | The connector rule with updated data (optional)

    try:
        # Update a connector rule
        
        results = ConnectorRuleManagementApi(api_client).update_connector_rule(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).update_connector_rule(id, new_connector_rule_update_request)
        print("The response of ConnectorRuleManagementApi->update_connector_rule:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->update_connector_rule: %s\n" % e)
```



[[Back to top]](#) 

## validate-connector-rule
Validate connector rule
Returns a list of issues within the code to fix, if any.
A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/validate-connector-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | source_code | [**SourceCode**](../models/source-code) | True  | The code to validate

### Return type
[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The status of the code&#39;s eligibility as a connector rule | ConnectorRuleValidationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.connector_rule_validation_response import ConnectorRuleValidationResponse
from sailpoint.beta.models.source_code import SourceCode
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_code = '''{
          "version" : "1.0",
          "script" : "return \"Mr. \" + firstName;"
        }''' # SourceCode | The code to validate

    try:
        # Validate connector rule
        new_source_code = SourceCode.from_json(source_code)
        results = ConnectorRuleManagementApi(api_client).validate_connector_rule(source_code=new_source_code)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).validate_connector_rule(new_source_code)
        print("The response of ConnectorRuleManagementApi->validate_connector_rule:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->validate_connector_rule: %s\n" % e)
```



[[Back to top]](#) 



