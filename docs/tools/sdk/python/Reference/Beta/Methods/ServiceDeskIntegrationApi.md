---
id: beta-service-desk-integration
title: Service_Desk_Integration
pagination_label: Service_Desk_Integration
sidebar_label: Service_Desk_Integration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Service_Desk_Integration', 'BetaService_Desk_Integration'] 
slug: /tools/sdk/python/beta/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'Service_Desk_Integration', 'BetaService_Desk_Integration']
---

# sailpoint.beta.ServiceDeskIntegrationApi
  Use this API to build an integration between Identity Security Cloud and a service desk ITSM (IT service management) solution.
Once an administrator builds this integration between Identity Security Cloud and a service desk, users can use Identity Security Cloud to raise and track tickets that are synchronized between Identity Security Cloud and the service desk.

In Identity Security Cloud, administrators can create a service desk integration (sometimes also called an SDIM, or Service Desk Integration Module) by going to Admin &gt; Connections &gt; Service Desk and selecting &#39;Create.&#39;

To create a Generic Service Desk integration, for example, administrators must provide the required information on the General Settings page, the Connectivity and Authentication information, Ticket Creation information, Status Mapping information, and Requester Source information on the Configure page.
Refer to [Integrating SailPoint with Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html) for more information about the process of setting up a Generic Service Desk in Identity Security Cloud.

Administrators can create various service desk integrations, all with their own nuances.
The following service desk integrations are available:

- [Atlassian Cloud Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_cloud/help/integrating_jira_cloud_sd/introduction.html)

- [Atlassian Server Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_server/help/integrating_jira_server_sd/introduction.html)

- [BMC Helix ITSM Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_ITSM_sd/help/integrating_bmc_helix_itsm_sd/intro.html)

- [BMC Helix Remedyforce Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_remedyforce_sd/help/integrating_bmc_helix_remedyforce_sd/intro.html)

- [Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html)

- [ServiceNow Service Desk](https://documentation.sailpoint.com/connectors/servicenow/sdim/help/integrating_servicenow_sdim/intro.html)

- [Zendesk Service Desk](https://documentation.sailpoint.com/connectors/zendesk/help/integrating_zendesk_sd/introduction.html)
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-service-desk-integration**](#create-service-desk-integration) | **POST** `/service-desk-integrations` | Create new Service Desk integration
[**delete-service-desk-integration**](#delete-service-desk-integration) | **DELETE** `/service-desk-integrations/{id}` | Delete a Service Desk integration
[**get-service-desk-integration**](#get-service-desk-integration) | **GET** `/service-desk-integrations/{id}` | Get a Service Desk integration
[**get-service-desk-integration-list**](#get-service-desk-integration-list) | **GET** `/service-desk-integrations` | List existing Service Desk integrations
[**get-service-desk-integration-template**](#get-service-desk-integration-template) | **GET** `/service-desk-integrations/templates/{scriptName}` | Service Desk integration template by scriptName
[**get-service-desk-integration-types**](#get-service-desk-integration-types) | **GET** `/service-desk-integrations/types` | List Service Desk integration types
[**get-status-check-details**](#get-status-check-details) | **GET** `/service-desk-integrations/status-check-configuration` | Get the time check configuration
[**patch-service-desk-integration**](#patch-service-desk-integration) | **PATCH** `/service-desk-integrations/{id}` | Patch a Service Desk Integration
[**put-service-desk-integration**](#put-service-desk-integration) | **PUT** `/service-desk-integrations/{id}` | Update a Service Desk integration
[**update-status-check-details**](#update-status-check-details) | **PUT** `/service-desk-integrations/status-check-configuration` | Update the time check configuration


## create-service-desk-integration
Create new Service Desk integration
Create a new Service Desk integration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-service-desk-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | service_desk_integration_dto | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | True  | The specifics of a new integration to create

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Details of the created integration | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    service_desk_integration_dto = '''{
          "ownerRef" : "",
          "cluster" : "xyzzy999",
          "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "provisioningConfig" : {
            "managedResourceRefs" : [ {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb051111",
              "name" : "My Source 1"
            }, {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb052222",
              "name" : "My Source 2"
            } ],
            "provisioningRequestExpiration" : 7,
            "noProvisioningRequests" : true,
            "universalManager" : true,
            "planInitializerScript" : {
              "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
            }
          },
          "name" : "Service Desk Integration Name",
          "description" : "A very nice Service Desk integration",
          "attributes" : {
            "property" : "value",
            "key" : "value"
          },
          "clusterRef" : "",
          "type" : "ServiceNowSDIM",
          "beforeProvisioningRule" : ""
        }''' # ServiceDeskIntegrationDto | The specifics of a new integration to create

    try:
        # Create new Service Desk integration
        new_service_desk_integration_dto = ServiceDeskIntegrationDto.from_json(service_desk_integration_dto)
        results = ServiceDeskIntegrationApi(api_client).create_service_desk_integration(service_desk_integration_dto=new_service_desk_integration_dto)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).create_service_desk_integration(new_service_desk_integration_dto)
        print("The response of ServiceDeskIntegrationApi->create_service_desk_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->create_service_desk_integration: %s\n" % e)
```



[[Back to top]](#) 

## delete-service-desk-integration
Delete a Service Desk integration
Delete an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-service-desk-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of Service Desk integration to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | Service Desk integration with the given ID successfully deleted |  |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of Service Desk integration to delete # str | ID of Service Desk integration to delete

    try:
        # Delete a Service Desk integration
        
        ServiceDeskIntegrationApi(api_client).delete_service_desk_integration(id=id)
        # Below is a request that includes all optional parameters
        # ServiceDeskIntegrationApi(api_client).delete_service_desk_integration(id)
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->delete_service_desk_integration: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration
Get a Service Desk integration
Get an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-service-desk-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Service Desk integration to get

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | ServiceDeskIntegrationDto with the given ID | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of the Service Desk integration to get # str | ID of the Service Desk integration to get

    try:
        # Get a Service Desk integration
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration(id=id)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration(id)
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration-list
List existing Service Desk integrations
Get a list of Service Desk integration objects.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-service-desk-integration-list)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in*
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ServiceDeskIntegrationDto]**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of ServiceDeskIntegrationDto | List[ServiceDeskIntegrationDto] |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'id eq 2c91808b6ef1d43e016efba0ce470904' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List existing Service Desk integrations
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_list()
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_list(offset, limit, sorters, filters, count)
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration_list:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration_list: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration-template
Service Desk integration template by scriptName
This API endpoint returns an existing Service Desk integration template by scriptName.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-service-desk-integration-template)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the Service Desk integration template to get

### Return type
[**ServiceDeskIntegrationTemplateDto**](../models/service-desk-integration-template-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the ServiceDeskIntegrationTemplateDto with the specified scriptName. | ServiceDeskIntegrationTemplateDto |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_template_dto import ServiceDeskIntegrationTemplateDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the Service Desk integration template to get # str | The scriptName value of the Service Desk integration template to get

    try:
        # Service Desk integration template by scriptName
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_template(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_template(script_name)
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration_template:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration_template: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration-types
List Service Desk integration types
This API endpoint returns the current list of supported Service Desk integration types.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-service-desk-integration-types)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[ServiceDeskIntegrationTemplateType]**](../models/service-desk-integration-template-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with an array of the currently supported Service Desk integration types. | List[ServiceDeskIntegrationTemplateType] |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_template_type import ServiceDeskIntegrationTemplateType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List Service Desk integration types
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_types()
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_types()
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration_types:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration_types: %s\n" % e)
```



[[Back to top]](#) 

## get-status-check-details
Get the time check configuration
Get the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-status-check-details)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | QueuedCheckConfigDetails containing the configured values | QueuedCheckConfigDetails |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.queued_check_config_details import QueuedCheckConfigDetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get the time check configuration
        
        results = ServiceDeskIntegrationApi(api_client).get_status_check_details()
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_status_check_details()
        print("The response of ServiceDeskIntegrationApi->get_status_check_details:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_status_check_details: %s\n" % e)
```



[[Back to top]](#) 

## patch-service-desk-integration
Patch a Service Desk Integration
Update an existing Service Desk integration by ID with a PATCH request.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-service-desk-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Service Desk integration to update
 Body  | patch_service_desk_integration_request | [**PatchServiceDeskIntegrationRequest**](../models/patch-service-desk-integration-request) | True  | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | ServiceDeskIntegrationDto as updated | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.patch_service_desk_integration_request import PatchServiceDeskIntegrationRequest
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of the Service Desk integration to update # str | ID of the Service Desk integration to update
    patch_service_desk_integration_request = '''sailpoint.beta.PatchServiceDeskIntegrationRequest()''' # PatchServiceDeskIntegrationRequest | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

    try:
        # Patch a Service Desk Integration
        new_patch_service_desk_integration_request = PatchServiceDeskIntegrationRequest.from_json(patch_service_desk_integration_request)
        results = ServiceDeskIntegrationApi(api_client).patch_service_desk_integration(id=id, patch_service_desk_integration_request=new_patch_service_desk_integration_request)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).patch_service_desk_integration(id, new_patch_service_desk_integration_request)
        print("The response of ServiceDeskIntegrationApi->patch_service_desk_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->patch_service_desk_integration: %s\n" % e)
```



[[Back to top]](#) 

## put-service-desk-integration
Update a Service Desk integration
Update an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-service-desk-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Service Desk integration to update
 Body  | service_desk_integration_dto | [**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto) | True  | The specifics of the integration to update

### Return type
[**ServiceDeskIntegrationDto**](../models/service-desk-integration-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | ServiceDeskIntegrationDto as updated | ServiceDeskIntegrationDto |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.service_desk_integration_dto import ServiceDeskIntegrationDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of the Service Desk integration to update # str | ID of the Service Desk integration to update
    service_desk_integration_dto = '''{
          "ownerRef" : "",
          "cluster" : "xyzzy999",
          "managedSources" : [ "2c9180835d191a86015d28455b4a2329", "2c5680835d191a85765d28455b4a9823" ],
          "provisioningConfig" : {
            "managedResourceRefs" : [ {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb051111",
              "name" : "My Source 1"
            }, {
              "type" : "SOURCE",
              "id" : "2c9180855d191c59015d291ceb052222",
              "name" : "My Source 2"
            } ],
            "provisioningRequestExpiration" : 7,
            "noProvisioningRequests" : true,
            "universalManager" : true,
            "planInitializerScript" : {
              "source" : "<?xml version='1.0' encoding='UTF-8'?>\\r\\n<!DOCTYPE Rule PUBLIC \\\"sailpoint.dtd\\\" \\\"sailpoint.dtd\\\">\\r\\n<Rule name=\\\"Example Rule\\\" type=\\\"BeforeProvisioning\\\">\\r\\n  <Description>Before Provisioning Rule which changes disables and enables to a modify.</Description>\\r\\n  <Source><![CDATA[\\r\\nimport sailpoint.object.*;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest;\\r\\nimport sailpoint.object.ProvisioningPlan.AccountRequest.Operation;\\r\\nimport sailpoint.object.ProvisioningPlan.AttributeRequest;\\r\\nimport sailpoint.object.ProvisioningPlan;\\r\\nimport sailpoint.object.ProvisioningPlan.Operation;\\r\\n\\r\\nfor ( AccountRequest accountRequest : plan.getAccountRequests() ) {\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Disable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n  if ( accountRequest.getOp().equals( ProvisioningPlan.ObjectOperation.Enable ) ) {\\r\\n    accountRequest.setOp( ProvisioningPlan.ObjectOperation.Modify );\\r\\n  }\\r\\n}\\r\\n\\r\\n  ]]></Source>\n"
            }
          },
          "name" : "Service Desk Integration Name",
          "description" : "A very nice Service Desk integration",
          "attributes" : {
            "property" : "value",
            "key" : "value"
          },
          "clusterRef" : "",
          "type" : "ServiceNowSDIM",
          "beforeProvisioningRule" : ""
        }''' # ServiceDeskIntegrationDto | The specifics of the integration to update

    try:
        # Update a Service Desk integration
        new_service_desk_integration_dto = ServiceDeskIntegrationDto.from_json(service_desk_integration_dto)
        results = ServiceDeskIntegrationApi(api_client).put_service_desk_integration(id=id, service_desk_integration_dto=new_service_desk_integration_dto)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).put_service_desk_integration(id, new_service_desk_integration_dto)
        print("The response of ServiceDeskIntegrationApi->put_service_desk_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->put_service_desk_integration: %s\n" % e)
```



[[Back to top]](#) 

## update-status-check-details
Update the time check configuration
Update the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/beta/update-status-check-details)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | queued_check_config_details | [**QueuedCheckConfigDetails**](../models/queued-check-config-details) | True  | The modified time check configuration

### Return type
[**QueuedCheckConfigDetails**](../models/queued-check-config-details)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | QueuedCheckConfigDetails as updated | QueuedCheckConfigDetails |  -  |
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
from sailpoint.beta.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.queued_check_config_details import QueuedCheckConfigDetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    queued_check_config_details = '''{
          "provisioningStatusCheckIntervalMinutes" : "30",
          "provisioningMaxStatusCheckDays" : "2"
        }''' # QueuedCheckConfigDetails | The modified time check configuration

    try:
        # Update the time check configuration
        new_queued_check_config_details = QueuedCheckConfigDetails.from_json(queued_check_config_details)
        results = ServiceDeskIntegrationApi(api_client).update_status_check_details(queued_check_config_details=new_queued_check_config_details)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).update_status_check_details(new_queued_check_config_details)
        print("The response of ServiceDeskIntegrationApi->update_status_check_details:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->update_status_check_details: %s\n" % e)
```



[[Back to top]](#) 



