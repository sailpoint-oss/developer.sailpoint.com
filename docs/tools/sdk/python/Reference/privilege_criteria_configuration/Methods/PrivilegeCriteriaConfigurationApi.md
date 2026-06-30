---
id: privilege-criteria-configuration
title: Privilege_Criteria_Configuration
pagination_label: Privilege_Criteria_Configuration
sidebar_label: Privilege_Criteria_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Privilege_Criteria_Configuration', 'Privilege_Criteria_Configuration'] 
slug: /tools/sdk/python/privilege-criteria-configuration/methods/privilege-criteria-configuration
tags: ['SDK', 'Software Development Kit', 'Privilege_Criteria_Configuration', 'Privilege_Criteria_Configuration']
---

# sailpoint.privilege_criteria_configuration.PrivilegeCriteriaConfigurationApi
  Use this API to manage the configuration of privilege criteria.

**globalPrivilegeLevelEnabled**: Boolean flag indicating whether privilege classification is enabled.


**privilegeClassificationMode**: Enum specifying the mode (CRITERIA_PRIVILEGE_LEVEL, SINGLE_PRIVILEGE_LEVEL) to use for privilege classification. CRITERIA_PRIVILEGE_LEVEL mode uses criteria to determine privilege levels, while SINGLE_PRIVILEGE_LEVEL assigns the same privilege level to all enititlements based on the value of singlePrivilegeLevel.privilegeLevel.


**singlePrivilegeLevel.privilegeLevel**: Enum specifying the privilege level (HIGH, MEDIUM, LOW) to assign to all privileges when the privilege classification mode is SINGLE_PRIVILEGE_LEVEL.


**criteriaPrivilegeLevel.connectorHighEnabled**: Boolean flag indicating whether HIGH level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.connectorMediumEnabled**: Boolean flag indicating whether MEDIUM level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.connectorLowEnabled**: Boolean flag indicating whether LOW level connector criteria is used for privilege classification.


**criteriaPrivilegeLevel.customHighEnabled**: Boolean flag indicating whether HIGH level custom criteria is used for privilege classification.


**criteriaPrivilegeLevel.customMediumEnabled**: Boolean flag indicating whether MEDIUM level custom criteria is used for privilege classification.


**criteriaPrivilegeLevel.customLowEnabled**: Boolean flag indicating whether LOW level custom criteria is used for privilege classification.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-privilege-criteria-config-v1**](#get-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege/{criteriaConfigId}` | Get privilege criteria config
[**list-privilege-criteria-config-v1**](#list-privilege-criteria-config-v1) | **GET** `/criteria-config/v1/privilege` | List privilege criteria config
[**patch-privilege-criteria-config-v1**](#patch-privilege-criteria-config-v1) | **PATCH** `/criteria-config/v1/privilege/{criteriaConfigId}` | Update privilege criteria configuration


## get-privilege-criteria-config-v1
Get privilege criteria config
Use this API to get the privilege criteria configuration by Id.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-privilege-criteria-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | criteria_config_id | **str** | True  | The Id of the privilege criteria configuration record to retrieve.

### Return type
[**Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Privilegecriteriaconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPrivilegeCriteriaConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPrivilegeCriteriaConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria_configuration.api.privilege_criteria_configuration_api import PrivilegeCriteriaConfigurationApi
from sailpoint.privilege_criteria_configuration.api_client import ApiClient
from sailpoint.privilege_criteria_configuration.models.privilegecriteriaconfigdto import Privilegecriteriaconfigdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    criteria_config_id = '6d123044-5834-4e8d-a49f-9c70089b0de1' # str | The Id of the privilege criteria configuration record to retrieve. # str | The Id of the privilege criteria configuration record to retrieve.

    try:
        # Get privilege criteria config
        
        results = PrivilegeCriteriaConfigurationApi(api_client).get_privilege_criteria_config_v1(criteria_config_id=criteria_config_id)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaConfigurationApi(api_client).get_privilege_criteria_config_v1(criteria_config_id)
        print("The response of PrivilegeCriteriaConfigurationApi->get_privilege_criteria_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaConfigurationApi->get_privilege_criteria_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-privilege-criteria-config-v1
List privilege criteria config
Use this API to list the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-privilege-criteria-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

### Return type
[**List[Privilegecriteriaconfigdto]**](../models/privilegecriteriaconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | List[Privilegecriteriaconfigdto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPrivilegeCriteriaConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPrivilegeCriteriaConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria_configuration.api.privilege_criteria_configuration_api import PrivilegeCriteriaConfigurationApi
from sailpoint.privilege_criteria_configuration.api_client import ApiClient
from sailpoint.privilege_criteria_configuration.models.privilegecriteriaconfigdto import Privilegecriteriaconfigdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    filters = 'sourceId eq \"c42c45d8d7c04d2da64d215cd8c32f21\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"` # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **sourceId**: *eq*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=sourceId eq \"2c91809175e6c63f0175fb5570220569\"`

    try:
        # List privilege criteria config
        
        results = PrivilegeCriteriaConfigurationApi(api_client).list_privilege_criteria_config_v1(filters=filters)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaConfigurationApi(api_client).list_privilege_criteria_config_v1(filters)
        print("The response of PrivilegeCriteriaConfigurationApi->list_privilege_criteria_config_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaConfigurationApi->list_privilege_criteria_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-privilege-criteria-config-v1
Update privilege criteria configuration
Use this API to update the privilege criteria configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-privilege-criteria-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | criteria_config_id | **str** | True  | The Id of the privilege criteria configuration to update.
 Body  | request_body | **[]object** | True  | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Privilegecriteriaconfigdto**](../models/privilegecriteriaconfigdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK | Privilegecriteriaconfigdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPrivilegeCriteriaConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPrivilegeCriteriaConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.privilege_criteria_configuration.api.privilege_criteria_configuration_api import PrivilegeCriteriaConfigurationApi
from sailpoint.privilege_criteria_configuration.api_client import ApiClient
from sailpoint.privilege_criteria_configuration.models.privilegecriteriaconfigdto import Privilegecriteriaconfigdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    criteria_config_id = '6d123044-5834-4e8d-a49f-9c70089b0de1' # str | The Id of the privilege criteria configuration to update. # str | The Id of the privilege criteria configuration to update.
    request_body = '''[{"op":"replace","path":"/config/privilegeClassificationMode","value":"SINGLE_PRIVILEGE_LEVEL"},{"op":"replace","path":"/config/criteriaPrivilegeLevel/connectorMediumEnabled","value":true}]''' # List[object] | A list of criteria configuration operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Update privilege criteria configuration
        new_request_body = RequestBody.from_json(request_body)
        results = PrivilegeCriteriaConfigurationApi(api_client).patch_privilege_criteria_config_v1(criteria_config_id=criteria_config_id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = PrivilegeCriteriaConfigurationApi(api_client).patch_privilege_criteria_config_v1(criteria_config_id, new_request_body)
        print("The response of PrivilegeCriteriaConfigurationApi->patch_privilege_criteria_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PrivilegeCriteriaConfigurationApi->patch_privilege_criteria_config_v1: %s\n" % e)
```



[[Back to top]](#) 



