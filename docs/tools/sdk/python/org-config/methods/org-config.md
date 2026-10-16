# Org_Config

# sailpoint.org_config.OrgConfigApi
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-org-config-v1**](#get-org-config-v1) | **GET** `/org-config/v1` | Get org config settings
[**get-valid-time-zones-v1**](#get-valid-time-zones-v1) | **GET** `/org-config/v1/valid-time-zones` | Get valid time zones
[**patch-org-config-v1**](#patch-org-config-v1) | **PATCH** `/org-config/v1` | Patch org config


## get-org-config-v1
Get org config settings
Get the current organization's configuration settings, only external accessible properties.

[API Spec](https://developer.sailpoint.com/docs/api/get-org-config-v-1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**OrgConfig**](../models/org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | OrgConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetOrgConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetOrgConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.org_config.api.org_config_api import OrgConfigApi
from sailpoint.org_config.api_client import ApiClient
from sailpoint.org_config.models.org_config import OrgConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get org config settings
        
        results = OrgConfigApi(api_client).get_org_config_v1()
        # Below is a request that includes all optional parameters
        # results = OrgConfigApi(api_client).get_org_config_v1()
        print("The response of OrgConfigApi->get_org_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OrgConfigApi->get_org_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-valid-time-zones-v1
Get valid time zones
List the valid time zones that can be set in organization configurations.

[API Spec](https://developer.sailpoint.com/docs/api/get-valid-time-zones-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
**List[str]**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request successful. | List[str] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetOrgConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetOrgConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.org_config.api.org_config_api import OrgConfigApi
from sailpoint.org_config.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 50 # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # Get valid time zones
        
        results = OrgConfigApi(api_client).get_valid_time_zones_v1()
        # Below is a request that includes all optional parameters
        # results = OrgConfigApi(api_client).get_valid_time_zones_v1(limit, offset, count)
        print("The response of OrgConfigApi->get_valid_time_zones_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OrgConfigApi->get_valid_time_zones_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-org-config-v1
Patch org config
Patch the current organization's configuration, using http://jsonpatch.com/ syntax. This is commonly used to changing an organization's time zone.

[API Spec](https://developer.sailpoint.com/docs/api/patch-org-config-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**OrgConfig**](../models/org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Successfully patched org config. | OrgConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetOrgConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetOrgConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.org_config.api.org_config_api import OrgConfigApi
from sailpoint.org_config.api_client import ApiClient
from sailpoint.org_config.models.json_patch_operation import JsonPatchOperation
from sailpoint.org_config.models.org_config import OrgConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    json_patch_operation = '''[{"op":"replace","path":"/timeZone","value":"America/Toronto"}]''' # List[JsonPatchOperation] | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

    try:
        # Patch org config
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = OrgConfigApi(api_client).patch_org_config_v1(json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = OrgConfigApi(api_client).patch_org_config_v1(new_json_patch_operation)
        print("The response of OrgConfigApi->patch_org_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling OrgConfigApi->patch_org_config_v1: %s\n" % e)
```



[[Back to top]](#) 



