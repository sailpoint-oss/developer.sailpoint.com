# Connector_Rule_Management

# sailpoint.connector_rule_management.ConnectorRuleManagementApi
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule-v1**](#create-connector-rule-v1) | **POST** `/connector-rules/v1` | Create connector rule
[**delete-connector-rule-v1**](#delete-connector-rule-v1) | **DELETE** `/connector-rules/v1/{id}` | Delete connector rule
[**get-connector-rule-list-v1**](#get-connector-rule-list-v1) | **GET** `/connector-rules/v1` | List connector rules
[**get-connector-rule-v1**](#get-connector-rule-v1) | **GET** `/connector-rules/v1/{id}` | Get connector rule
[**put-connector-rule-v1**](#put-connector-rule-v1) | **PUT** `/connector-rules/v1/{id}` | Update connector rule
[**test-connector-rule-v1**](#test-connector-rule-v1) | **POST** `/connector-rules/v1/validate` | Validate connector rule


## create-connector-rule-v1
Create connector rule
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-rule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | connector_rule_create_request | [**ConnectorRuleCreateRequest**](../models/connector-rule-create-request) | True  | Connector rule to create.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created connector rule. | ConnectorRuleResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connector_rule_create_request import ConnectorRuleCreateRequest
from sailpoint.connector_rule_management.models.connector_rule_response import ConnectorRuleResponse
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
        }''' # ConnectorRuleCreateRequest | Connector rule to create.

    try:
        # Create connector rule
        new_connector_rule_create_request = ConnectorRuleCreateRequest.from_json(connector_rule_create_request)
        results = ConnectorRuleManagementApi(api_client).create_connector_rule_v1(connector_rule_create_request=new_connector_rule_create_request)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).create_connector_rule_v1(new_connector_rule_create_request)
        print("The response of ConnectorRuleManagementApi->create_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->create_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-connector-rule-v1
Delete connector rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-connector-rule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to delete. # str | ID of the connector rule to delete.

    try:
        # Delete connector rule
        
        ConnectorRuleManagementApi(api_client).delete_connector_rule_v1(id=id)
        # Below is a request that includes all optional parameters
        # ConnectorRuleManagementApi(api_client).delete_connector_rule_v1(id)
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->delete_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-rule-list-v1
List connector rules
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-rule-list-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 50 # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List connector rules
        
        results = ConnectorRuleManagementApi(api_client).get_connector_rule_list_v1()
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).get_connector_rule_list_v1(limit, offset, count)
        print("The response of ConnectorRuleManagementApi->get_connector_rule_list_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->get_connector_rule_list_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-connector-rule-v1
Get connector rule
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-rule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to get.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Connector rule with the given ID. | ConnectorRuleResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to get. # str | ID of the connector rule to get.

    try:
        # Get connector rule
        
        results = ConnectorRuleManagementApi(api_client).get_connector_rule_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).get_connector_rule_v1(id)
        print("The response of ConnectorRuleManagementApi->get_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->get_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-connector-rule-v1
Update connector rule
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-rule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to update.
 Body  | connector_rule_update_request | [**ConnectorRuleUpdateRequest**](../models/connector-rule-update-request) |   (optional) | Connector rule with updated data.

### Return type
[**ConnectorRuleResponse**](../models/connector-rule-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated connector rule. | ConnectorRuleResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connector_rule_response import ConnectorRuleResponse
from sailpoint.connector_rule_management.models.connector_rule_update_request import ConnectorRuleUpdateRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to update. # str | ID of the connector rule to update.
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
        }''' # ConnectorRuleUpdateRequest | Connector rule with updated data. (optional)

    try:
        # Update connector rule
        
        results = ConnectorRuleManagementApi(api_client).put_connector_rule_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).put_connector_rule_v1(id, new_connector_rule_update_request)
        print("The response of ConnectorRuleManagementApi->put_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->put_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-connector-rule-v1
Validate connector rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/test-connector-rule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | source_code | [**SourceCode**](../models/source-code) | True  | Code to validate.

### Return type
[**ConnectorRuleValidationResponse**](../models/connector-rule-validation-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the code&#39;s eligibility as a connector rule. | ConnectorRuleValidationResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connector_rule_validation_response import ConnectorRuleValidationResponse
from sailpoint.connector_rule_management.models.source_code import SourceCode
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    source_code = '''{
          "version" : "1.0",
          "script" : "return \"Mr. \" + firstName;"
        }''' # SourceCode | Code to validate.

    try:
        # Validate connector rule
        new_source_code = SourceCode.from_json(source_code)
        results = ConnectorRuleManagementApi(api_client).test_connector_rule_v1(source_code=new_source_code)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).test_connector_rule_v1(new_source_code)
        print("The response of ConnectorRuleManagementApi->test_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->test_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 



