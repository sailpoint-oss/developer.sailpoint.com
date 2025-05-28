---
id: beta-sim-integrations
title: SIM_Integrations
pagination_label: SIM_Integrations
sidebar_label: SIM_Integrations
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SIM_Integrations', 'BetaSIM_Integrations'] 
slug: /tools/sdk/python/beta/methods/sim-integrations
tags: ['SDK', 'Software Development Kit', 'SIM_Integrations', 'BetaSIM_Integrations']
---

# sailpoint.beta.SIMIntegrationsApi
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint’s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sim-integration**](#create-sim-integration) | **POST** `/sim-integrations` | Create new sim integration
[**delete-sim-integration**](#delete-sim-integration) | **DELETE** `/sim-integrations/{id}` | Delete a sim integration
[**get-sim-integration**](#get-sim-integration) | **GET** `/sim-integrations/{id}` | Get a sim integration details.
[**get-sim-integrations**](#get-sim-integrations) | **GET** `/sim-integrations` | List the existing sim integrations.
[**patch-before-provisioning-rule**](#patch-before-provisioning-rule) | **PATCH** `/sim-integrations/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**patch-sim-attributes**](#patch-sim-attributes) | **PATCH** `/sim-integrations/{id}` | Patch a sim attribute.
[**put-sim-integration**](#put-sim-integration) | **PUT** `/sim-integrations/{id}` | Update an existing sim integration


## create-sim-integration
Create new sim integration
Create a new SIM Integrations.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-sim-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | sim_integration_details | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | DTO containing the details of the SIM integration

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | details of the created integration | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.beta.models.sim_integration_details import SimIntegrationDetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    sim_integration_details = '''{
          "cluster" : "xyzzy999",
          "statusMap" : "{closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued}",
          "request" : "{description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2023-01-03T21:16:22.432Z",
          "name" : "aName",
          "modified" : "2023-01-03T21:16:22.432Z",
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

    try:
        # Create new sim integration
        new_sim_integration_details = SimIntegrationDetails.from_json(sim_integration_details)
        results = SIMIntegrationsApi(api_client).create_sim_integration(sim_integration_details=new_sim_integration_details)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).create_sim_integration(new_sim_integration_details)
        print("The response of SIMIntegrationsApi->create_sim_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->create_sim_integration: %s\n" % e)
```



[[Back to top]](#) 

## delete-sim-integration
Delete a sim integration
Get the details of a SIM integration. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-sim-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the integration to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | No content response |  |  -  |
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
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '12345' # str | The id of the integration to delete. # str | The id of the integration to delete.

    try:
        # Delete a sim integration
        
        SIMIntegrationsApi(api_client).delete_sim_integration(id=id)
        # Below is a request that includes all optional parameters
        # SIMIntegrationsApi(api_client).delete_sim_integration(id)
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->delete_sim_integration: %s\n" % e)
```



[[Back to top]](#) 

## get-sim-integration
Get a sim integration details.
Get the details of a SIM integration. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sim-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the integration.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '12345' # str | The id of the integration. # str | The id of the integration.

    try:
        # Get a sim integration details.
        
        results = SIMIntegrationsApi(api_client).get_sim_integration(id=id)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).get_sim_integration(id)
        print("The response of SIMIntegrationsApi->get_sim_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->get_sim_integration: %s\n" % e)
```



[[Back to top]](#) 

## get-sim-integrations
List the existing sim integrations.
List the existing SIM integrations. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-sim-integrations)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The DTO containing the details of the SIM integration | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List the existing sim integrations.
        
        results = SIMIntegrationsApi(api_client).get_sim_integrations()
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).get_sim_integrations()
        print("The response of SIMIntegrationsApi->get_sim_integrations:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->get_sim_integrations: %s\n" % e)
```



[[Back to top]](#) 

## patch-before-provisioning-rule
Patch a sim beforeprovisioningrule attribute.
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-before-provisioning-rule)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | SIM integration id
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch import JsonPatch
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '12345' # str | SIM integration id # str | SIM integration id
    json_patch = '''"[\n  {\n\t  \"op\": \"replace\",\n\t  \"path\": \"/description\",\n\t  \"value\": \"A new description\"\n  }\n]"''' # JsonPatch | The JsonPatch object that describes the changes of SIM beforeProvisioningRule.

    try:
        # Patch a sim beforeprovisioningrule attribute.
        new_json_patch = JsonPatch.from_json(json_patch)
        results = SIMIntegrationsApi(api_client).patch_before_provisioning_rule(id=id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).patch_before_provisioning_rule(id, new_json_patch)
        print("The response of SIMIntegrationsApi->patch_before_provisioning_rule:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->patch_before_provisioning_rule: %s\n" % e)
```



[[Back to top]](#) 

## patch-sim-attributes
Patch a sim attribute.
Patch a SIM attribute given a JsonPatch object. A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-sim-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | SIM integration id
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | The JsonPatch object that describes the changes of SIM

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated DTO containing the details of the SIM integration. | ServiceDeskIntegrationDto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.json_patch import JsonPatch
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '12345' # str | SIM integration id # str | SIM integration id
    json_patch = '''"[\n  {\n\t  \"op\": \"replace\",\n\t  \"path\": \"/description\",\n\t  \"value\": \"A new description\"\n  }\n]"''' # JsonPatch | The JsonPatch object that describes the changes of SIM

    try:
        # Patch a sim attribute.
        new_json_patch = JsonPatch.from_json(json_patch)
        results = SIMIntegrationsApi(api_client).patch_sim_attributes(id=id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).patch_sim_attributes(id, new_json_patch)
        print("The response of SIMIntegrationsApi->patch_sim_attributes:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->patch_sim_attributes: %s\n" % e)
```



[[Back to top]](#) 

## put-sim-integration
Update an existing sim integration
Update an existing SIM integration.  A token with Org Admin or Service Desk Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-sim-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The id of the integration.
 Body  | sim_integration_details | [**SimIntegrationDetails**](../models/sim-integration-details) | True  | The full DTO of the integration containing the updated model

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | details of the updated integration | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.sim_integrations_api import SIMIntegrationsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.beta.models.sim_integration_details import SimIntegrationDetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '12345' # str | The id of the integration. # str | The id of the integration.
    sim_integration_details = '''{
          "cluster" : "xyzzy999",
          "statusMap" : "{closed_cancelled=Failed, closed_complete=Committed, closed_incomplete=Failed, closed_rejected=Failed, in_process=Queued, requested=Queued}",
          "request" : "{description=SailPoint Access Request,, req_description=The Service Request created by SailPoint ServiceNow Service Integration Module (SIM).,, req_short_description=SailPoint New Access Request Created from IdentityNow,, short_description=SailPoint Access Request $!plan.arguments.identityRequestId}",
          "sources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "created" : "2023-01-03T21:16:22.432Z",
          "name" : "aName",
          "modified" : "2023-01-03T21:16:22.432Z",
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

    try:
        # Update an existing sim integration
        new_sim_integration_details = SimIntegrationDetails.from_json(sim_integration_details)
        results = SIMIntegrationsApi(api_client).put_sim_integration(id=id, sim_integration_details=new_sim_integration_details)
        # Below is a request that includes all optional parameters
        # results = SIMIntegrationsApi(api_client).put_sim_integration(id, new_sim_integration_details)
        print("The response of SIMIntegrationsApi->put_sim_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SIMIntegrationsApi->put_sim_integration: %s\n" % e)
```



[[Back to top]](#) 



