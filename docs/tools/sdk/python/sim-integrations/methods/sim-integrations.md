# SIM_Integrations

# sailpoint.sim_integrations.SIMIntegrationsApi
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint&#39;s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sim-integration-v1**](#create-sim-integration-v1) | **POST** `/sim-integrations/v1` | Create new sim integration
[**delete-sim-integration-v1**](#delete-sim-integration-v1) | **DELETE** `/sim-integrations/v1/{id}` | Delete a sim integration
[**get-sim-integration-v1**](#get-sim-integration-v1) | **GET** `/sim-integrations/v1/{id}` | Get a sim integration details.
[**get-sim-integrations-v1**](#get-sim-integrations-v1) | **GET** `/sim-integrations/v1` | List the existing sim integrations.
[**patch-before-provisioning-rule-v1**](#patch-before-provisioning-rule-v1) | **PATCH** `/sim-integrations/v1/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**patch-sim-attributes-v1**](#patch-sim-attributes-v1) | **PATCH** `/sim-integrations/v1/{id}` | Patch a sim attribute.
[**put-sim-integration-v1**](#put-sim-integration-v1) | **PUT** `/sim-integrations/v1/{id}` | Update an existing sim integration


## create-sim-integration-v1
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
Create new sim integration
Create a new SIM Integrations.

[API Spec](https://developer.sailpoint.com/docs/api/create-sim-integration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sim_integration_details | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | DTO containing the details of the SIM integration
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | details of the created integration | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.sim_integrations.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.sim_integrations.models.sim_integration_details import SimIntegrationDetails
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    sim_integration_details = '''{
          "cluster" : "xyzzy999",
          "statusMap" : "{\"closed_cancelled\":\"Failed\",\"closed_complete\":\"Committed\",\"closed_incomplete\":\"Failed\",\"closed_rejected\":\"Failed\",\"in_process\":\"Queued\",\"requested\":\"Queued\"}",
          "request" : "{\"description\":\"SailPoint Access Request,\",\"req_description\":\"The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,\",\"req_short_description\":\"SailPoint New Access Request Created from IdentityNow,\",\"short_description\":\"SailPoint Access Request $!plan.arguments.identityRequestId\"}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2015-05-28T14:07:17Z",
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "description" : "Integration description",
          "attributes" : "{\"uid\":\"Walter White\",\"firstname\":\"walter\",\"cloudStatus\":\"UNREGISTERED\",\"displayName\":\"Walter White\",\"identificationNumber\":\"942\",\"lastSyncDate\":1470348809380,\"email\":\"walter@gmail.com\",\"lastname\":\"white\"}",
          "id" : "id12345",
          "type" : "ServiceNow Service Desk",
          "beforeProvisioningRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "IDENTITY"
          }
        }''' # SimIntegrationDetails | DTO containing the details of the SIM integration
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create new sim integration
        new_sim_integration_details = SimIntegrationDetails.from_json(sim_integration_details)
        results = SIMIntegrationsApi(api_client).create_sim_integration_v1(sim_integration_details=new_sim_integration_details)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).create_sim_integration_v1(new_sim_integration_details, x_sail_point_experimental)
        print("The response of SIMIntegrationsApi->create_sim_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->create_sim_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-sim-integration-v1
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
Delete a sim integration
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sim-integration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the integration to delete.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content response |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '12345' # str | The id of the integration to delete. # str | The id of the integration to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete a sim integration
        
        SIMIntegrationsApi(api_client).delete_sim_integration_v1(id=id)
        # Below is a request that includes all optional parameters
        # SIMIntegrationsApi(api_client).delete_sim_integration_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->delete_sim_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sim-integration-v1
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
Get a sim integration details.
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the integration.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.sim_integrations.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '12345' # str | The id of the integration. # str | The id of the integration.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a sim integration details.
        
        results = SIMIntegrationsApi(api_client).get_sim_integration_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).get_sim_integration_v1(id, x_sail_point_experimental)
        print("The response of SIMIntegrationsApi->get_sim_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->get_sim_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sim-integrations-v1
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
List the existing sim integrations.
List the existing SIM integrations.

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integrations-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[ServiceDeskIntegrationDto]**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The DTO containing the details of the SIM integration | List[ServiceDeskIntegrationDto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.sim_integrations.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List the existing sim integrations.
        
        results = SIMIntegrationsApi(api_client).get_sim_integrations_v1()
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).get_sim_integrations_v1(x_sail_point_experimental)
        print("The response of SIMIntegrationsApi->get_sim_integrations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->get_sim_integrations_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-before-provisioning-rule-v1
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
Patch a sim beforeprovisioningrule attribute.
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/patch-before-provisioning-rule-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | SIM integration id
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.sim_integrations.models.json_patch import JsonPatch
from sailpoint.sim_integrations.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '12345' # str | SIM integration id # str | SIM integration id
    json_patch = '''{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }''' # JsonPatch | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch a sim beforeprovisioningrule attribute.
        new_json_patch = JsonPatch.from_json(json_patch)
        results = SIMIntegrationsApi(api_client).patch_before_provisioning_rule_v1(id=id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).patch_before_provisioning_rule_v1(id, new_json_patch, x_sail_point_experimental)
        print("The response of SIMIntegrationsApi->patch_before_provisioning_rule_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->patch_before_provisioning_rule_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-sim-attributes-v1
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
Patch a sim attribute.
Patch a SIM attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/patch-sim-attributes-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | SIM integration id
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.sim_integrations.models.json_patch import JsonPatch
from sailpoint.sim_integrations.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '12345' # str | SIM integration id # str | SIM integration id
    json_patch = '''{
          "operations" : [ {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          }, {
            "op" : "replace",
            "path" : "/description",
            "value" : "New description"
          } ]
        }''' # JsonPatch | The JsonPatch object that describes the changes of SIM
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Patch a sim attribute.
        new_json_patch = JsonPatch.from_json(json_patch)
        results = SIMIntegrationsApi(api_client).patch_sim_attributes_v1(id=id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).patch_sim_attributes_v1(id, new_json_patch, x_sail_point_experimental)
        print("The response of SIMIntegrationsApi->patch_sim_attributes_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->patch_sim_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-sim-integration-v1
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
Update an existing sim integration
Update an existing SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/put-sim-integration-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the integration.
 Body  | sim_integration_details | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | The full DTO of the integration containing the updated model
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | details of the updated integration | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSIMIntegrationV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSIMIntegrationV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.sim_integrations.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.sim_integrations.api_client import ApiClient
from sailpoint.sim_integrations.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.sim_integrations.models.sim_integration_details import SimIntegrationDetails
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = '12345' # str | The id of the integration. # str | The id of the integration.
    sim_integration_details = '''{
          "cluster" : "xyzzy999",
          "statusMap" : "{\"closed_cancelled\":\"Failed\",\"closed_complete\":\"Committed\",\"closed_incomplete\":\"Failed\",\"closed_rejected\":\"Failed\",\"in_process\":\"Queued\",\"requested\":\"Queued\"}",
          "request" : "{\"description\":\"SailPoint Access Request,\",\"req_description\":\"The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,\",\"req_short_description\":\"SailPoint New Access Request Created from IdentityNow,\",\"short_description\":\"SailPoint Access Request $!plan.arguments.identityRequestId\"}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2015-05-28T14:07:17Z",
          "name" : "aName",
          "modified" : "2015-05-28T14:07:17Z",
          "description" : "Integration description",
          "attributes" : "{\"uid\":\"Walter White\",\"firstname\":\"walter\",\"cloudStatus\":\"UNREGISTERED\",\"displayName\":\"Walter White\",\"identificationNumber\":\"942\",\"lastSyncDate\":1470348809380,\"email\":\"walter@gmail.com\",\"lastname\":\"white\"}",
          "id" : "id12345",
          "type" : "ServiceNow Service Desk",
          "beforeProvisioningRule" : {
            "name" : "Example Rule",
            "id" : "2c918085708c274401708c2a8a760001",
            "type" : "IDENTITY"
          }
        }''' # SimIntegrationDetails | The full DTO of the integration containing the updated model
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update an existing sim integration
        new_sim_integration_details = SimIntegrationDetails.from_json(sim_integration_details)
        results = SIMIntegrationsApi(api_client).put_sim_integration_v1(id=id, sim_integration_details=new_sim_integration_details)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).put_sim_integration_v1(id, new_sim_integration_details, x_sail_point_experimental)
        print("The response of SIMIntegrationsApi->put_sim_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->put_sim_integration_v1: %s\n" % e)
```



[[Back to top]](#) 



