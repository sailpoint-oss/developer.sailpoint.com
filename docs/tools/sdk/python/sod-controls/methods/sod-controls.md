# SOD_Controls

# sailpoint.sod_controls.SODControlsApi
  Use this API to create, list, retrieve, update, and delete compensating controls associated with separation-of-duties policies. Requires policy violation management license.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-control-v1**](#create-control-v1) | **POST** `/controls/v1` | Create Compensating Control
[**delete-control-v1**](#delete-control-v1) | **DELETE** `/controls/v1/{id}` | Delete compensating control by ID
[**get-control-v1**](#get-control-v1) | **GET** `/controls/v1/{id}` | Get compensating control by ID
[**list-controls-v1**](#list-controls-v1) | **GET** `/controls/v1` | List Compensating Controls
[**put-control-v1**](#put-control-v1) | **PUT** `/controls/v1/{id}` | Put Compensating Control


## create-control-v1
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
Create Compensating Control
Creates a compensating control associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/create-control-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | compensatingcontrolcreate | [**Compensatingcontrolcreate**](../models/compensatingcontrolcreate) | True  | Data needed to create a Compensating Control
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Compensating Control successfully created | Compensatingcontrolresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_controls.api.sod_controls_api import SODControlsApi
from sailpoint.sod_controls.api_client import ApiClient
from sailpoint.sod_controls.models.compensatingcontrolcreate import Compensatingcontrolcreate
from sailpoint.sod_controls.models.compensatingcontrolresponse import Compensatingcontrolresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    compensatingcontrolcreate = '''{
          "owner" : {
            "id" : "3e07886555ed43cfb83c85c58d2016e6",
            "type" : "IDENTITY"
          },
          "name" : "a name",
          "description" : "a description",
          "secondaryOwners" : [ {
            "id" : "943a7c57da334d07ba2454bf7fcf144f",
            "type" : "GOVERNANCE_GROUP"
          } ],
          "action" : "Workflow",
          "expiration" : "20d",
          "type" : "Mitigation",
          "justificationRequired" : true,
          "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
        }''' # Compensatingcontrolcreate | Data needed to create a Compensating Control
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create Compensating Control
        new_compensatingcontrolcreate = Compensatingcontrolcreate.from_json(compensatingcontrolcreate)
        results = SODControlsApi(api_client).create_control_v1(compensatingcontrolcreate=new_compensatingcontrolcreate)
        # Below is a request that includes all optional parameters
        # results = SODControlsApi(api_client).create_control_v1(new_compensatingcontrolcreate, x_sail_point_experimental)
        print("The response of SODControlsApi->create_control_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODControlsApi->create_control_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-control-v1
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
Delete compensating control by ID
Deletes the specified compensating control from the data store.

[API Spec](https://developer.sailpoint.com/docs/api/delete-control-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | the ID (UUID) of the compensating control to delete.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_controls.api.sod_controls_api import SODControlsApi
from sailpoint.sod_controls.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '3e078865-55ed-43cf-b83c-85c58d2016e6' # str | the ID (UUID) of the compensating control to delete. # str | the ID (UUID) of the compensating control to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete compensating control by ID
        
        SODControlsApi(api_client).delete_control_v1(id=id)
        # Below is a request that includes all optional parameters
        # SODControlsApi(api_client).delete_control_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling SODControlsApi->delete_control_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-control-v1
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
Get compensating control by ID
Returns a single compensating control by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-control-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of the compensating control to fetch
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Single compensating control | Compensatingcontrolresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_controls.api.sod_controls_api import SODControlsApi
from sailpoint.sod_controls.api_client import ApiClient
from sailpoint.sod_controls.models.compensatingcontrolresponse import Compensatingcontrolresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '3e078865-55ed-43cf-b83c-85c58d2016e6' # str | The ID of the compensating control to fetch # str | The ID of the compensating control to fetch
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get compensating control by ID
        
        results = SODControlsApi(api_client).get_control_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SODControlsApi(api_client).get_control_v1(id, x_sail_point_experimental)
        print("The response of SODControlsApi->get_control_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODControlsApi->get_control_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-controls-v1
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
List Compensating Controls
Returns a list of compensating controls associated with separation-of-duties policies.

[API Spec](https://developer.sailpoint.com/docs/api/list-controls-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in*
  Query | sort | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending.

### Return type
[**List[Compensatingcontrolresponse]**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of compensating controls | List[Compensatingcontrolresponse] |  * X-Total-Count - Total number of matching controls (only present when `count=true`).   |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_controls.api.sod_controls_api import SODControlsApi
from sailpoint.sod_controls.api_client import ApiClient
from sailpoint.sod_controls.models.compensatingcontrolresponse import Compensatingcontrolresponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'type eq \"Mitigation\" and name co \"payroll\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw, co*  **type**: *eq*  **owner**: *eq, in*  **description**: *eq, in, sw, co*  **action**: *eq, in* (optional)
    sort = '-name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**  Prefix a field with - for descending order, for example -name. If no sort is provided, results default to name ascending. (optional)

    try:
        # List Compensating Controls
        
        results = SODControlsApi(api_client).list_controls_v1()
        # Below is a request that includes all optional parameters
        # results = SODControlsApi(api_client).list_controls_v1(x_sail_point_experimental, limit, offset, count, filters, sort)
        print("The response of SODControlsApi->list_controls_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODControlsApi->list_controls_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-control-v1
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
Put Compensating Control
Updates the specified compensating control.

[API Spec](https://developer.sailpoint.com/docs/api/put-control-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The unique identifier of the Compensating Control to be updated.
 Body  | compensatingcontrolupdate | [**Compensatingcontrolupdate**](../models/compensatingcontrolupdate) | True  | Data needed to put a Compensating Control
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Compensatingcontrolresponse**](../models/compensatingcontrolresponse)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Compensating Control successfully patched | Compensatingcontrolresponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListControlsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListControlsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sod_controls.api.sod_controls_api import SODControlsApi
from sailpoint.sod_controls.api_client import ApiClient
from sailpoint.sod_controls.models.compensatingcontrolresponse import Compensatingcontrolresponse
from sailpoint.sod_controls.models.compensatingcontrolupdate import Compensatingcontrolupdate
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '3e078865-55ed-43cf-b83c-85c58d2016e6' # str | The unique identifier of the Compensating Control to be updated. # str | The unique identifier of the Compensating Control to be updated.
    compensatingcontrolupdate = '''{
          "owner" : {
            "id" : "3e07886555ed43cfb83c85c58d2016e6",
            "type" : "IDENTITY"
          },
          "name" : "a name",
          "description" : "a description",
          "secondaryOwners" : [ {
            "id" : "943a7c57da334d07ba2454bf7fcf144f",
            "type" : "GOVERNANCE_GROUP"
          } ],
          "action" : "Workflow",
          "expiration" : "20d",
          "type" : "Mitigation",
          "justificationRequired" : true,
          "workflowID" : "3e07886555ed43cfb83c85c58d2016e6"
        }''' # Compensatingcontrolupdate | Data needed to put a Compensating Control
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Put Compensating Control
        new_compensatingcontrolupdate = Compensatingcontrolupdate.from_json(compensatingcontrolupdate)
        results = SODControlsApi(api_client).put_control_v1(id=id, compensatingcontrolupdate=new_compensatingcontrolupdate)
        # Below is a request that includes all optional parameters
        # results = SODControlsApi(api_client).put_control_v1(id, new_compensatingcontrolupdate, x_sail_point_experimental)
        print("The response of SODControlsApi->put_control_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SODControlsApi->put_control_v1: %s\n" % e)
```



[[Back to top]](#) 



