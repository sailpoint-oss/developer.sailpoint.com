# Machine_Account_Mappings

# sailpoint.machine_account_mappings.MachineAccountMappingsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-mappings-v1**](#create-machine-account-mappings-v1) | **POST** `/sources/v1/{sourceId}/machine-account-mappings` | Create machine account mappings
[**delete-machine-account-mappings-v1**](#delete-machine-account-mappings-v1) | **DELETE** `/sources/v1/{sourceId}/machine-account-mappings` | Delete source&#39;s machine account mappings
[**list-machine-account-mappings-v1**](#list-machine-account-mappings-v1) | **GET** `/sources/v1/{sourceId}/machine-account-mappings` | Machine account mapping for source
[**set-machine-account-mappings-v1**](#set-machine-account-mappings-v1) | **PUT** `/sources/v1/{sourceId}/machine-account-mappings` | Update source&#39;s machine account mappings


## create-machine-account-mappings-v1
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
Create machine account mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-mappings-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | attribute_mappings | [**AttributeMappings**](../models/attribute-mappings) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AttributeMappings]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Newly created Attribute Mapping Object | List[AttributeMappings] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_mappings.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.machine_account_mappings.api_client import ApiClient
from sailpoint.machine_account_mappings.models.attribute_mappings import AttributeMappings
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    attribute_mappings = '''{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }''' # AttributeMappings | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create machine account mappings
        new_attribute_mappings = AttributeMappings.from_json(attribute_mappings)
        results = MachineAccountMappingsApi(api_client).create_machine_account_mappings_v1(source_id=source_id, attribute_mappings=new_attribute_mappings)
        # Below is a request that includes all optional parameters
        # results = MachineAccountMappingsApi(api_client).create_machine_account_mappings_v1(source_id, new_attribute_mappings, x_sail_point_experimental)
        print("The response of MachineAccountMappingsApi->create_machine_account_mappings_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->create_machine_account_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-machine-account-mappings-v1
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
Delete source's machine account mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-mappings-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | source ID.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_mappings.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.machine_account_mappings.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | source ID. # str | source ID.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete source's machine account mappings
        
        MachineAccountMappingsApi(api_client).delete_machine_account_mappings_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # MachineAccountMappingsApi(api_client).delete_machine_account_mappings_v1(source_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->delete_machine_account_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-machine-account-mappings-v1
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
Machine account mapping for source
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-mappings-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AttributeMappings]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | An array of Attribute Mapping Objects | List[AttributeMappings] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_mappings.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.machine_account_mappings.api_client import ApiClient
from sailpoint.machine_account_mappings.models.attribute_mappings import AttributeMappings
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID # str | Source ID
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Machine account mapping for source
        
        results = MachineAccountMappingsApi(api_client).list_machine_account_mappings_v1(source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = MachineAccountMappingsApi(api_client).list_machine_account_mappings_v1(source_id, limit, offset, x_sail_point_experimental)
        print("The response of MachineAccountMappingsApi->list_machine_account_mappings_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->list_machine_account_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-machine-account-mappings-v1
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
Update source's machine account mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-account-mappings-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | source_id | **str** | True  | Source ID.
 Body  | attribute_mappings | [**AttributeMappings**](../models/attribute-mappings) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[AttributeMappings]**](../models/attribute-mappings)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated Machine Account Attributes for a Source. | List[AttributeMappings] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineAccountMappingsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineAccountMappingsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.machine_account_mappings.api.machine_account_mappings_api import MachineAccountMappingsApi
from sailpoint.machine_account_mappings.api_client import ApiClient
from sailpoint.machine_account_mappings.models.attribute_mappings import AttributeMappings
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    source_id = 'ef38f94347e94562b5bb8424a56397d8' # str | Source ID. # str | Source ID.
    attribute_mappings = '''{
          "transformDefinition" : {
            "attributes" : {
              "input" : {
                "attributes" : {
                  "name" : "8d3e0094e99445de98eef6c75e25jc04",
                  "attributeName" : "givenName",
                  "sourceName" : "delimited-src"
                },
                "type" : "accountAttribute"
              }
            },
            "id" : "ToUpper",
            "type" : "reference"
          },
          "target" : {
            "sourceId" : "2c9180835d2e5168015d32f890ca1581",
            "attributeName" : "businessApplication",
            "type" : "IDENTITY"
          }
        }''' # AttributeMappings | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update source's machine account mappings
        new_attribute_mappings = AttributeMappings.from_json(attribute_mappings)
        results = MachineAccountMappingsApi(api_client).set_machine_account_mappings_v1(source_id=source_id, attribute_mappings=new_attribute_mappings)
        # Below is a request that includes all optional parameters
        # results = MachineAccountMappingsApi(api_client).set_machine_account_mappings_v1(source_id, new_attribute_mappings, x_sail_point_experimental)
        print("The response of MachineAccountMappingsApi->set_machine_account_mappings_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MachineAccountMappingsApi->set_machine_account_mappings_v1: %s\n" % e)
```



[[Back to top]](#) 



