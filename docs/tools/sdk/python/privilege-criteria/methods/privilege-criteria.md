# Privilege_Criteria

# sailpoint.privilege_criteria.PrivilegeCriteriaApi
  Use this API to create, retrieve, update, and delete privilege criteria.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-privilege-criteria-v1**](#create-custom-privilege-criteria-v1) | **POST** `/criteria/v1/privilege` | Create custom privilege criteria
[**delete-custom-privilege-criteria-v1**](#delete-custom-privilege-criteria-v1) | **DELETE** `/criteria/v1/privilege/{criteriaId}` | Delete privilege criteria
[**get-privilege-criteria-v1**](#get-privilege-criteria-v1) | **GET** `/criteria/v1/privilege/{criteriaId}` | Get privilege criteria
[**list-privilege-criteria-v1**](#list-privilege-criteria-v1) | **GET** `/criteria/v1/privilege` | List privilege criteria
[**put-custom-privilege-criteria-value-v1**](#put-custom-privilege-criteria-value-v1) | **PUT** `/criteria/v1/privilege/{criteriaId}` | Update privilege criteria


## create-custom-privilege-criteria-v1
Create custom privilege criteria
Use this API to create a custom privilege criteria

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-privilege-criteria-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_privilege_criteria_request | [**CreatePrivilegeCriteriaRequest**](../models/create-privilege-criteria-request) | True  | Create custom privilege criteria request body.

### Return type
[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Custom privilege criteria created | PrivilegeCriteriaDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria.api.privilege_criteria_api import PrivilegeCriteriaApi
from sailpoint.privilege_criteria.api_client import ApiClient
from sailpoint.privilege_criteria.models.create_privilege_criteria_request import CreatePrivilegeCriteriaRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    create_privilege_criteria_request = '''{
          "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
          "privilegeLevel" : "HIGH",
          "groups" : [ {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            } ],
            "operator" : "AND"
          }, {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "targetType" : "group",
              "operator" : "displayName"
            } ],
            "operator" : "AND"
          } ],
          "type" : "CUSTOM",
          "operator" : "AND"
        }''' # CreatePrivilegeCriteriaRequest | Create custom privilege criteria request body.

    try:
        # Create custom privilege criteria
        new_create_privilege_criteria_request = CreatePrivilegeCriteriaRequest.from_json(create_privilege_criteria_request)
        results = PrivilegeCriteriaApi(api_client).create_custom_privilege_criteria_v1(create_privilege_criteria_request=new_create_privilege_criteria_request)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaApi(api_client).create_custom_privilege_criteria_v1(new_create_privilege_criteria_request)
        print("The response of PrivilegeCriteriaApi->create_custom_privilege_criteria_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaApi->create_custom_privilege_criteria_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-custom-privilege-criteria-v1
Delete privilege criteria
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-privilege-criteria-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | criteria_id | **str** | True  | The Id of the custom privilege criteria to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Success |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria.api.privilege_criteria_api import PrivilegeCriteriaApi
from sailpoint.privilege_criteria.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    criteria_id = '6d123044-5834-4e8d-a49f-9c70089b0de1' # str | The Id of the custom privilege criteria to delete. # str | The Id of the custom privilege criteria to delete.

    try:
        # Delete privilege criteria
        
        PrivilegeCriteriaApi(api_client).delete_custom_privilege_criteria_v1(criteria_id=criteria_id)
        # Below is a request that includes all optional parameters
        # PrivilegeCriteriaApi(api_client).delete_custom_privilege_criteria_v1(criteria_id)
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaApi->delete_custom_privilege_criteria_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-privilege-criteria-v1
Get privilege criteria
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/get-privilege-criteria-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | criteria_id | **str** | True  | The Id of the privilege criteria record to return.

### Return type
[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | PrivilegeCriteriaDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria.api.privilege_criteria_api import PrivilegeCriteriaApi
from sailpoint.privilege_criteria.api_client import ApiClient
from sailpoint.privilege_criteria.models.privilege_criteria_dto import PrivilegeCriteriaDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    criteria_id = '6d123044-5834-4e8d-a49f-9c70089b0de1' # str | The Id of the privilege criteria record to return. # str | The Id of the privilege criteria record to return.

    try:
        # Get privilege criteria
        
        results = PrivilegeCriteriaApi(api_client).get_privilege_criteria_v1(criteria_id=criteria_id)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaApi(api_client).get_privilege_criteria_v1(criteria_id)
        print("The response of PrivilegeCriteriaApi->get_privilege_criteria_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaApi->get_privilege_criteria_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-privilege-criteria-v1
List privilege criteria
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/list-privilege-criteria-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

### Return type
[**List[PrivilegeCriteriaDTO]**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[PrivilegeCriteriaDTO] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria.api.privilege_criteria_api import PrivilegeCriteriaApi
from sailpoint.privilege_criteria.api_client import ApiClient
from sailpoint.privilege_criteria.models.privilege_criteria_dto import PrivilegeCriteriaDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'type eq \"CUSTOM\" and sourceId eq \"c42c45d8d7c04d2da64d215cd8c32f21\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"` # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq \"CUSTOM\" and sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

    try:
        # List privilege criteria
        
        results = PrivilegeCriteriaApi(api_client).list_privilege_criteria_v1(filters=filters)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaApi(api_client).list_privilege_criteria_v1(filters)
        print("The response of PrivilegeCriteriaApi->list_privilege_criteria_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaApi->list_privilege_criteria_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-custom-privilege-criteria-value-v1
Update privilege criteria
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/put-custom-privilege-criteria-value-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | criteria_id | **str** | True  | The Id of the privilege criteria record to return.
 Body  | privilege_criteria_dto | [**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto) | True  | The new version of the custom privilege criteria. This overwrites the existing privilege criteria.

### Return type
[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | PrivilegeCriteriaDTO |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria.api.privilege_criteria_api import PrivilegeCriteriaApi
from sailpoint.privilege_criteria.api_client import ApiClient
from sailpoint.privilege_criteria.models.privilege_criteria_dto import PrivilegeCriteriaDTO
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    criteria_id = '6d123044-5834-4e8d-a49f-9c70089b0de1' # str | The Id of the privilege criteria record to return. # str | The Id of the privilege criteria record to return.
    privilege_criteria_dto = '''{
          "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
          "privilegeLevel" : "HIGH",
          "groups" : [ {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          }, {
            "criteriaItems" : [ {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            }, {
              "ignoreCase" : true,
              "values" : [ "admin", "superuser" ],
              "property" : "displayName",
              "targetType" : "group",
              "operator" : "IN"
            } ],
            "operator" : "AND"
          } ],
          "id" : "2c9180867817ac4d017817c491119a20",
          "type" : "CUSTOM",
          "operator" : "AND"
        }''' # PrivilegeCriteriaDTO | The new version of the custom privilege criteria. This overwrites the existing privilege criteria.

    try:
        # Update privilege criteria
        new_privilege_criteria_dto = PrivilegeCriteriaDto.from_json(privilege_criteria_dto)
        results = PrivilegeCriteriaApi(api_client).put_custom_privilege_criteria_value_v1(criteria_id=criteria_id, privilege_criteria_dto=new_privilege_criteria_dto)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaApi(api_client).put_custom_privilege_criteria_value_v1(criteria_id, new_privilege_criteria_dto)
        print("The response of PrivilegeCriteriaApi->put_custom_privilege_criteria_value_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaApi->put_custom_privilege_criteria_value_v1: %s\n" % e)
```



[[Back to top]](#) 



