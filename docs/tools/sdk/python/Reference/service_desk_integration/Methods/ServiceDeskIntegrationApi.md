---
id: service-desk-integration
title: Service_Desk_Integration
pagination_label: Service_Desk_Integration
sidebar_label: Service_Desk_Integration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Service_Desk_Integration', 'Service_Desk_Integration'] 
slug: /tools/sdk/python/service-desk-integration/methods/service-desk-integration
tags: ['SDK', 'Software Development Kit', 'Service_Desk_Integration', 'Service_Desk_Integration']
---

# sailpoint.service_desk_integration.ServiceDeskIntegrationApi
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
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-service-desk-integration-v1**](#create-service-desk-integration-v1) | **POST** `/service-desk-integrations/v1` | Create new service desk integration
[**delete-service-desk-integration-v1**](#delete-service-desk-integration-v1) | **DELETE** `/service-desk-integrations/v1/{id}` | Delete a service desk integration
[**get-service-desk-integration-template-v1**](#get-service-desk-integration-template-v1) | **GET** `/service-desk-integrations/v1/templates/{scriptName}` | Service desk integration template by scriptname
[**get-service-desk-integration-types-v1**](#get-service-desk-integration-types-v1) | **GET** `/service-desk-integrations/v1/types` | List service desk integration types
[**get-service-desk-integration-v1**](#get-service-desk-integration-v1) | **GET** `/service-desk-integrations/v1/{id}` | Get a service desk integration
[**get-service-desk-integrations-v1**](#get-service-desk-integrations-v1) | **GET** `/service-desk-integrations/v1` | List existing service desk integrations
[**get-status-check-details-v1**](#get-status-check-details-v1) | **GET** `/service-desk-integrations/v1/status-check-configuration` | Get the time check configuration
[**patch-service-desk-integration-v1**](#patch-service-desk-integration-v1) | **PATCH** `/service-desk-integrations/v1/{id}` | Patch a service desk integration
[**put-service-desk-integration-v1**](#put-service-desk-integration-v1) | **PUT** `/service-desk-integrations/v1/{id}` | Update a service desk integration
[**update-status-check-details-v1**](#update-status-check-details-v1) | **PUT** `/service-desk-integrations/v1/status-check-configuration` | Update the time check configuration


## create-service-desk-integration-v1
Create new service desk integration
Create a new Service Desk integration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-service-desk-integration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | servicedeskintegrationdto | [**Servicedeskintegrationdto**](../models/servicedeskintegrationdto) | True  | The specifics of a new integration to create

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Details of the created integration | Servicedeskintegrationdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.servicedeskintegrationdto import Servicedeskintegrationdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    servicedeskintegrationdto = '''sailpoint.service_desk_integration.Servicedeskintegrationdto()''' # Servicedeskintegrationdto | The specifics of a new integration to create

    try:
        # Create new service desk integration
        new_servicedeskintegrationdto = Servicedeskintegrationdto.from_json(servicedeskintegrationdto)
        results = ServiceDeskIntegrationApi(api_client).create_service_desk_integration_v1(servicedeskintegrationdto=new_servicedeskintegrationdto)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).create_service_desk_integration_v1(new_servicedeskintegrationdto)
        print("The response of ServiceDeskIntegrationApi->create_service_desk_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->create_service_desk_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-service-desk-integration-v1
Delete a service desk integration
Delete an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-service-desk-integration-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of Service Desk integration to delete # str | ID of Service Desk integration to delete

    try:
        # Delete a service desk integration
        
        ServiceDeskIntegrationApi(api_client).delete_service_desk_integration_v1(id=id)
        # Below is a request that includes all optional parameters
        # ServiceDeskIntegrationApi(api_client).delete_service_desk_integration_v1(id)
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->delete_service_desk_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration-template-v1
Service desk integration template by scriptname
This API endpoint returns an existing Service Desk integration template by scriptName.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-template-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | script_name | **str** | True  | The scriptName value of the Service Desk integration template to get

### Return type
[**Servicedeskintegrationtemplatedto**](../models/servicedeskintegrationtemplatedto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the ServiceDeskIntegrationTemplateDto with the specified scriptName. | Servicedeskintegrationtemplatedto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.servicedeskintegrationtemplatedto import Servicedeskintegrationtemplatedto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    script_name = 'aScriptName' # str | The scriptName value of the Service Desk integration template to get # str | The scriptName value of the Service Desk integration template to get

    try:
        # Service desk integration template by scriptname
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_template_v1(script_name=script_name)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_template_v1(script_name)
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration_template_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration_template_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration-types-v1
List service desk integration types
This API endpoint returns the current list of supported Service Desk integration types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-types-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Servicedeskintegrationtemplatetype]**](../models/servicedeskintegrationtemplatetype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with an array of the currently supported Service Desk integration types. | List[Servicedeskintegrationtemplatetype] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.servicedeskintegrationtemplatetype import Servicedeskintegrationtemplatetype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List service desk integration types
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_types_v1()
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_types_v1()
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration_types_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration_types_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integration-v1
Get a service desk integration
Get an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Service Desk integration to get

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | ServiceDeskIntegrationDto with the given ID | Servicedeskintegrationdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.servicedeskintegrationdto import Servicedeskintegrationdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of the Service Desk integration to get # str | ID of the Service Desk integration to get

    try:
        # Get a service desk integration
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integration_v1(id)
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-service-desk-integrations-v1
List existing service desk integrations
Get a list of Service Desk integration objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-service-desk-integrations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in*
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Servicedeskintegrationdto]**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of ServiceDeskIntegrationDto | List[Servicedeskintegrationdto] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.servicedeskintegrationdto import Servicedeskintegrationdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'name eq \"John Doe\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List existing service desk integrations
        
        results = ServiceDeskIntegrationApi(api_client).get_service_desk_integrations_v1()
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_service_desk_integrations_v1(offset, limit, sorters, filters, count)
        print("The response of ServiceDeskIntegrationApi->get_service_desk_integrations_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_service_desk_integrations_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-status-check-details-v1
Get the time check configuration
Get the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-status-check-details-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Queuedcheckconfigdetails**](../models/queuedcheckconfigdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | QueuedCheckConfigDetails containing the configured values | Queuedcheckconfigdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.queuedcheckconfigdetails import Queuedcheckconfigdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get the time check configuration
        
        results = ServiceDeskIntegrationApi(api_client).get_status_check_details_v1()
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).get_status_check_details_v1()
        print("The response of ServiceDeskIntegrationApi->get_status_check_details_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->get_status_check_details_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-service-desk-integration-v1
Patch a service desk integration
Update an existing Service Desk integration by ID with a PATCH request.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-service-desk-integration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Service Desk integration to update
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | ServiceDeskIntegrationDto as updated | Servicedeskintegrationdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.service_desk_integration.models.servicedeskintegrationdto import Servicedeskintegrationdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of the Service Desk integration to update # str | ID of the Service Desk integration to update
    jsonpatchoperation = '''[sailpoint.service_desk_integration.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only `replace` operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 

    try:
        # Patch a service desk integration
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = ServiceDeskIntegrationApi(api_client).patch_service_desk_integration_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).patch_service_desk_integration_v1(id, new_jsonpatchoperation)
        print("The response of ServiceDeskIntegrationApi->patch_service_desk_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->patch_service_desk_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-service-desk-integration-v1
Update a service desk integration
Update an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-service-desk-integration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the Service Desk integration to update
 Body  | servicedeskintegrationdto | [**Servicedeskintegrationdto**](../models/servicedeskintegrationdto) | True  | The specifics of the integration to update

### Return type
[**Servicedeskintegrationdto**](../models/servicedeskintegrationdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | ServiceDeskIntegrationDto as updated | Servicedeskintegrationdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.servicedeskintegrationdto import Servicedeskintegrationdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'anId' # str | ID of the Service Desk integration to update # str | ID of the Service Desk integration to update
    servicedeskintegrationdto = '''sailpoint.service_desk_integration.Servicedeskintegrationdto()''' # Servicedeskintegrationdto | The specifics of the integration to update

    try:
        # Update a service desk integration
        new_servicedeskintegrationdto = Servicedeskintegrationdto.from_json(servicedeskintegrationdto)
        results = ServiceDeskIntegrationApi(api_client).put_service_desk_integration_v1(id=id, servicedeskintegrationdto=new_servicedeskintegrationdto)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).put_service_desk_integration_v1(id, new_servicedeskintegrationdto)
        print("The response of ServiceDeskIntegrationApi->put_service_desk_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->put_service_desk_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-status-check-details-v1
Update the time check configuration
Update the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-status-check-details-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | queuedcheckconfigdetails | [**Queuedcheckconfigdetails**](../models/queuedcheckconfigdetails) | True  | The modified time check configuration

### Return type
[**Queuedcheckconfigdetails**](../models/queuedcheckconfigdetails)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | QueuedCheckConfigDetails as updated | Queuedcheckconfigdetails |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetServiceDeskIntegrationsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetServiceDeskIntegrationsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.service_desk_integration.api.service_desk_integration_api import ServiceDeskIntegrationApi
from sailpoint.service_desk_integration.api_client import ApiClient
from sailpoint.service_desk_integration.models.queuedcheckconfigdetails import Queuedcheckconfigdetails
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    queuedcheckconfigdetails = '''sailpoint.service_desk_integration.Queuedcheckconfigdetails()''' # Queuedcheckconfigdetails | The modified time check configuration

    try:
        # Update the time check configuration
        new_queuedcheckconfigdetails = Queuedcheckconfigdetails.from_json(queuedcheckconfigdetails)
        results = ServiceDeskIntegrationApi(api_client).update_status_check_details_v1(queuedcheckconfigdetails=new_queuedcheckconfigdetails)
        # Below is a request that includes all optional parameters
        # results = ServiceDeskIntegrationApi(api_client).update_status_check_details_v1(new_queuedcheckconfigdetails)
        print("The response of ServiceDeskIntegrationApi->update_status_check_details_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ServiceDeskIntegrationApi->update_status_check_details_v1: %s\n" % e)
```



[[Back to top]](#) 



