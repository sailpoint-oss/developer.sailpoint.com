---
id: connector-rule-management
title: Connector_Rule_Management
pagination_label: Connector_Rule_Management
sidebar_label: Connector_Rule_Management
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Connector_Rule_Management', 'Connector_Rule_Management'] 
slug: /tools/sdk/python/connector-rule-management/methods/connector-rule-management
tags: ['SDK', 'Software Development Kit', 'Connector_Rule_Management', 'Connector_Rule_Management']
---

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-connector-rule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | connectorrulecreaterequest | [**Connectorrulecreaterequest**](../models/connectorrulecreaterequest) | True  | Connector rule to create.

### Return type
[**Connectorruleresponse**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created connector rule. | Connectorruleresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connectorrulecreaterequest import Connectorrulecreaterequest
from sailpoint.connector_rule_management.models.connectorruleresponse import Connectorruleresponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    connectorrulecreaterequest = '''sailpoint.connector_rule_management.Connectorrulecreaterequest()''' # Connectorrulecreaterequest | Connector rule to create.

    try:
        # Create connector rule
        new_connectorrulecreaterequest = Connectorrulecreaterequest.from_json(connectorrulecreaterequest)
        results = ConnectorRuleManagementApi(api_client).create_connector_rule_v1(connectorrulecreaterequest=new_connectorrulecreaterequest)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).create_connector_rule_v1(new_connectorrulecreaterequest)
        print("The response of ConnectorRuleManagementApi->create_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->create_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-connector-rule-v1
Delete connector rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-connector-rule-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-rule-list-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Connectorruleresponse]**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of connector rules. | List[Connectorruleresponse] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connectorruleresponse import Connectorruleresponse
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-connector-rule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to get.

### Return type
[**Connectorruleresponse**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Connector rule with the given ID. | Connectorruleresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connectorruleresponse import Connectorruleresponse
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

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-connector-rule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the connector rule to update.
 Body  | connectorruleupdaterequest | [**Connectorruleupdaterequest**](../models/connectorruleupdaterequest) |   (optional) | Connector rule with updated data.

### Return type
[**Connectorruleresponse**](../models/connectorruleresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated connector rule. | Connectorruleresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connectorruleresponse import Connectorruleresponse
from sailpoint.connector_rule_management.models.connectorruleupdaterequest import Connectorruleupdaterequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '8c190e6787aa4ed9a90bd9d5344523fb' # str | ID of the connector rule to update. # str | ID of the connector rule to update.
    connectorruleupdaterequest = '''sailpoint.connector_rule_management.Connectorruleupdaterequest()''' # Connectorruleupdaterequest | Connector rule with updated data. (optional)

    try:
        # Update connector rule
        
        results = ConnectorRuleManagementApi(api_client).put_connector_rule_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).put_connector_rule_v1(id, new_connectorruleupdaterequest)
        print("The response of ConnectorRuleManagementApi->put_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->put_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-connector-rule-v1
Validate connector rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-connector-rule-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sourcecode | [**Sourcecode**](../models/sourcecode) | True  | Code to validate.

### Return type
[**Connectorrulevalidationresponse**](../models/connectorrulevalidationresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Status of the code&#39;s eligibility as a connector rule. | Connectorrulevalidationresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetConnectorRuleListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetConnectorRuleListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.connector_rule_management.api.connector_rule_management_api import ConnectorRuleManagementApi
from sailpoint.connector_rule_management.api_client import ApiClient
from sailpoint.connector_rule_management.models.connectorrulevalidationresponse import Connectorrulevalidationresponse
from sailpoint.connector_rule_management.models.sourcecode import Sourcecode
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sourcecode = '''sailpoint.connector_rule_management.Sourcecode()''' # Sourcecode | Code to validate.

    try:
        # Validate connector rule
        new_sourcecode = Sourcecode.from_json(sourcecode)
        results = ConnectorRuleManagementApi(api_client).test_connector_rule_v1(sourcecode=new_sourcecode)
        # Below is a request that includes all optional parameters
        # results = ConnectorRuleManagementApi(api_client).test_connector_rule_v1(new_sourcecode)
        print("The response of ConnectorRuleManagementApi->test_connector_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ConnectorRuleManagementApi->test_connector_rule_v1: %s\n" % e)
```



[[Back to top]](#) 



