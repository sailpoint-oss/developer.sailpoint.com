---
id: v2025-multi-host-integration
title: Multi_Host_Integration
pagination_label: Multi_Host_Integration
sidebar_label: Multi_Host_Integration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Multi_Host_Integration', 'V2025Multi_Host_Integration'] 
slug: /tools/sdk/python/v2025/methods/multi-host-integration
tags: ['SDK', 'Software Development Kit', 'Multi_Host_Integration', 'V2025Multi_Host_Integration']
---

# sailpoint.v2025.MultiHostIntegrationApi
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-multi-host-integration**](#create-multi-host-integration) | **POST** `/multihosts` | Create multi-host integration
[**create-sources-within-multi-host**](#create-sources-within-multi-host) | **POST** `/multihosts/{multihostId}` | Create sources within multi-host integration
[**delete-multi-host**](#delete-multi-host) | **DELETE** `/multihosts/{multihostId}` | Delete multi-host integration
[**delete-multi-host-sources**](#delete-multi-host-sources) | **POST** `/multihosts/{multiHostId}/sources/bulk-delete` | Delete sources within multi-host integration
[**get-acct-aggregation-groups**](#get-acct-aggregation-groups) | **GET** `/multihosts/{multihostId}/acctAggregationGroups` | List account-aggregation-groups by multi-host id
[**get-entitlement-aggregation-groups**](#get-entitlement-aggregation-groups) | **GET** `/multihosts/{multiHostId}/entitlementAggregationGroups` | List entitlement-aggregation-groups by integration id
[**get-multi-host-integrations**](#get-multi-host-integrations) | **GET** `/multihosts/{multihostId}` | Get multi-host integration by id
[**get-multi-host-integrations-list**](#get-multi-host-integrations-list) | **GET** `/multihosts` | List all existing multi-host integrations
[**get-multi-host-source-creation-errors**](#get-multi-host-source-creation-errors) | **GET** `/multihosts/{multiHostId}/sources/errors` | List multi-host source creation errors
[**get-multihost-integration-types**](#get-multihost-integration-types) | **GET** `/multihosts/types` | List multi-host integration types
[**get-sources-within-multi-host**](#get-sources-within-multi-host) | **GET** `/multihosts/{multihostId}/sources` | List sources within multi-host integration
[**test-connection-multi-host-sources**](#test-connection-multi-host-sources) | **POST** `/multihosts/{multihostId}/sources/testConnection` | Test configuration for multi-host integration
[**test-source-connection-multihost**](#test-source-connection-multihost) | **GET** `/multihosts/{multihostId}/sources/{sourceId}/testConnection` | Test configuration for multi-host integration&#39;s single source
[**update-multi-host-sources**](#update-multi-host-sources) | **PATCH** `/multihosts/{multihostId}` | Update multi-host integration


## create-multi-host-integration
Create multi-host integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-multi-host-integration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | multi_host_integrations_create | [**MultiHostIntegrationsCreate**](../models/multi-host-integrations-create) | True  | The specifics of the Multi-Host Integration to create

### Return type
[**MultiHostIntegrations**](../models/multi-host-integrations)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrations |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integrations import MultiHostIntegrations
from sailpoint.v2025.models.multi_host_integrations_create import MultiHostIntegrationsCreate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_integrations_create = '''{
          "owner" : {
            "name" : "MyName",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "managementWorkgroup" : {
            "name" : "My Management Workgroup",
            "id" : "2c91808568c529c60168cca6f90c2222",
            "type" : "GOVERNANCE_GROUP"
          },
          "cluster" : {
            "name" : "Corporate Cluster",
            "id" : "2c9180866166b5b0016167c32ef31a66",
            "type" : "CLUSTER"
          },
          "connector" : "multihost-microsoft-sql-server",
          "connectorAttributes" : {
            "maxSourcesPerAggGroup" : 10,
            "maxAllowedSources" : 300
          },
          "created" : "2022-02-08T14:50:03.827Z",
          "name" : "My Multi-Host Integration",
          "description" : "This is the Multi-Host Integration.",
          "modified" : "2024-01-23T18:08:50.897Z"
        }''' # MultiHostIntegrationsCreate | The specifics of the Multi-Host Integration to create

    try:
        # Create multi-host integration
        new_multi_host_integrations_create = MultiHostIntegrationsCreate.from_json(multi_host_integrations_create)
        results = MultiHostIntegrationApi(api_client).create_multi_host_integration(multi_host_integrations_create=new_multi_host_integrations_create)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).create_multi_host_integration(new_multi_host_integrations_create)
        print("The response of MultiHostIntegrationApi->create_multi_host_integration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->create_multi_host_integration: %s\n" % e)
```



[[Back to top]](#) 

## create-sources-within-multi-host
Create sources within multi-host integration
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-sources-within-multi-host)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration.
 Body  | multi_host_integrations_create_sources | [**[]MultiHostIntegrationsCreateSources**](../models/multi-host-integrations-create-sources) | True  | The specifics of the sources to create within Multi-Host Integration.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integrations_create_sources import MultiHostIntegrationsCreateSources
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of the Multi-Host Integration. # str | ID of the Multi-Host Integration.
    multi_host_integrations_create_sources = '''[sailpoint.v2025.MultiHostIntegrationsCreateSources()]''' # List[MultiHostIntegrationsCreateSources] | The specifics of the sources to create within Multi-Host Integration.

    try:
        # Create sources within multi-host integration
        new_multi_host_integrations_create_sources = MultiHostIntegrationsCreateSources.from_json(multi_host_integrations_create_sources)
        MultiHostIntegrationApi(api_client).create_sources_within_multi_host(multihost_id=multihost_id, multi_host_integrations_create_sources=new_multi_host_integrations_create_sources)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).create_sources_within_multi_host(multihost_id, new_multi_host_integrations_create_sources)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->create_sources_within_multi_host: %s\n" % e)
```



[[Back to top]](#) 

## delete-multi-host
Delete multi-host integration
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-multi-host)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of Multi-Host Integration to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of Multi-Host Integration to delete. # str | ID of Multi-Host Integration to delete.

    try:
        # Delete multi-host integration
        
        MultiHostIntegrationApi(api_client).delete_multi_host(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).delete_multi_host(multihost_id)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->delete_multi_host: %s\n" % e)
```



[[Back to top]](#) 

## delete-multi-host-sources
Delete sources within multi-host integration
This endpoint performs bulk sources delete within Multi-Host Integration via a list of supplied IDs.

The following rights are required to access this endpoint: idn:multihosts:delete, idn:sources:delete

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-multi-host-sources)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multi_host_id | **str** | True  | ID of the Multi-Host Integration
 Body  | request_body | **[]str** | True  | The delete bulk sources within multi-host integration request body

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_id = '004091cb79b04636b88662afa50a4440' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration
    request_body = '''['request_body_example']''' # List[str] | The delete bulk sources within multi-host integration request body

    try:
        # Delete sources within multi-host integration
        new_request_body = RequestBody.from_json(request_body)
        MultiHostIntegrationApi(api_client).delete_multi_host_sources(multi_host_id=multi_host_id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).delete_multi_host_sources(multi_host_id, new_request_body)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->delete_multi_host_sources: %s\n" % e)
```



[[Back to top]](#) 

## get-acct-aggregation-groups
List account-aggregation-groups by multi-host id
This API will return array of account aggregation groups within provided Multi-Host Integration ID.
A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-acct-aggregation-groups)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration to update
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[MultiHostIntegrationsAggScheduleUpdate]**](../models/multi-host-integrations-agg-schedule-update)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[MultiHostIntegrationsAggScheduleUpdate] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integrations_agg_schedule_update import MultiHostIntegrationsAggScheduleUpdate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = 'aMultiHostId' # str | ID of the Multi-Host Integration to update # str | ID of the Multi-Host Integration to update
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List account-aggregation-groups by multi-host id
        
        results = MultiHostIntegrationApi(api_client).get_acct_aggregation_groups(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_acct_aggregation_groups(multihost_id, offset, limit)
        print("The response of MultiHostIntegrationApi->get_acct_aggregation_groups:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_acct_aggregation_groups: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-aggregation-groups
List entitlement-aggregation-groups by integration id
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-entitlement-aggregation-groups)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multi_host_id | **str** | True  | ID of the Multi-Host Integration to update
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[MultiHostIntegrationsAggScheduleUpdate]**](../models/multi-host-integrations-agg-schedule-update)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[MultiHostIntegrationsAggScheduleUpdate] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integrations_agg_schedule_update import MultiHostIntegrationsAggScheduleUpdate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_id = 'aMultiHostId' # str | ID of the Multi-Host Integration to update # str | ID of the Multi-Host Integration to update
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List entitlement-aggregation-groups by integration id
        
        results = MultiHostIntegrationApi(api_client).get_entitlement_aggregation_groups(multi_host_id=multi_host_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_entitlement_aggregation_groups(multi_host_id, offset, limit)
        print("The response of MultiHostIntegrationApi->get_entitlement_aggregation_groups:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_entitlement_aggregation_groups: %s\n" % e)
```



[[Back to top]](#) 

## get-multi-host-integrations
Get multi-host integration by id
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-multi-host-integrations)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration.

### Return type
[**MultiHostIntegrations**](../models/multi-host-integrations)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | MultiHostIntegrations |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integrations import MultiHostIntegrations
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of the Multi-Host Integration. # str | ID of the Multi-Host Integration.

    try:
        # Get multi-host integration by id
        
        results = MultiHostIntegrationApi(api_client).get_multi_host_integrations(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multi_host_integrations(multihost_id)
        print("The response of MultiHostIntegrationApi->get_multi_host_integrations:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multi_host_integrations: %s\n" % e)
```



[[Back to top]](#) 

## get-multi-host-integrations-list
List all existing multi-host integrations
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-multi-host-integrations-list)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in*
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | for_subadmin | **str** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.

### Return type
[**List[MultiHostIntegrations]**](../models/multi-host-integrations)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[MultiHostIntegrations] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integrations import MultiHostIntegrations
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'id eq 2c91808b6ef1d43e016efba0ce470904' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    for_subadmin = '5168015d32f890ca15812c9180835d2e' # str | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # str | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)

    try:
        # List all existing multi-host integrations
        
        results = MultiHostIntegrationApi(api_client).get_multi_host_integrations_list()
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multi_host_integrations_list(offset, limit, sorters, filters, count, for_subadmin)
        print("The response of MultiHostIntegrationApi->get_multi_host_integrations_list:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multi_host_integrations_list: %s\n" % e)
```



[[Back to top]](#) 

## get-multi-host-source-creation-errors
List multi-host source creation errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-multi-host-source-creation-errors)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multi_host_id | **str** | True  | ID of the Multi-Host Integration

### Return type
[**List[SourceCreationErrors]**](../models/source-creation-errors)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[SourceCreationErrors] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.source_creation_errors import SourceCreationErrors
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_id = '004091cb79b04636b88662afa50a4440' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration

    try:
        # List multi-host source creation errors
        
        results = MultiHostIntegrationApi(api_client).get_multi_host_source_creation_errors(multi_host_id=multi_host_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multi_host_source_creation_errors(multi_host_id)
        print("The response of MultiHostIntegrationApi->get_multi_host_source_creation_errors:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multi_host_source_creation_errors: %s\n" % e)
```



[[Back to top]](#) 

## get-multihost-integration-types
List multi-host integration types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-multihost-integration-types)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[MultiHostIntegrationTemplateType]**](../models/multi-host-integration-template-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[MultiHostIntegrationTemplateType] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_integration_template_type import MultiHostIntegrationTemplateType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List multi-host integration types
        
        results = MultiHostIntegrationApi(api_client).get_multihost_integration_types()
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multihost_integration_types()
        print("The response of MultiHostIntegrationApi->get_multihost_integration_types:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multihost_integration_types: %s\n" % e)
```



[[Back to top]](#) 

## get-sources-within-multi-host
List sources within multi-host integration
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-sources-within-multi-host)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration to update
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name**
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in*
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[MultiHostSources]**](../models/multi-host-sources)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[MultiHostSources] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.multi_host_sources import MultiHostSources
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = 'aMultiHostId' # str | ID of the Multi-Host Integration to update # str | ID of the Multi-Host Integration to update
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    sorters = 'name' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    filters = 'id eq 2c91808b6ef1d43e016efba0ce470904' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List sources within multi-host integration
        
        results = MultiHostIntegrationApi(api_client).get_sources_within_multi_host(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_sources_within_multi_host(multihost_id, offset, limit, sorters, filters, count)
        print("The response of MultiHostIntegrationApi->get_sources_within_multi_host:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_sources_within_multi_host: %s\n" % e)
```



[[Back to top]](#) 

## test-connection-multi-host-sources
Test configuration for multi-host integration
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-connection-multi-host-sources)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1324' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration

    try:
        # Test configuration for multi-host integration
        
        MultiHostIntegrationApi(api_client).test_connection_multi_host_sources(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).test_connection_multi_host_sources(multihost_id)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->test_connection_multi_host_sources: %s\n" % e)
```



[[Back to top]](#) 

## test-source-connection-multihost
Test configuration for multi-host integration's single source
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/test-source-connection-multihost)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration
Path   | source_id | **str** | True  | ID of the source within the Multi-Host Integration

### Return type
[**TestSourceConnectionMultihost200Response**](../models/test-source-connection-multihost200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | TestSourceConnectionMultihost200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.test_source_connection_multihost200_response import TestSourceConnectionMultihost200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration
    source_id = '2c91808568c529f60168cca6f90c1324' # str | ID of the source within the Multi-Host Integration # str | ID of the source within the Multi-Host Integration

    try:
        # Test configuration for multi-host integration's single source
        
        results = MultiHostIntegrationApi(api_client).test_source_connection_multihost(multihost_id=multihost_id, source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).test_source_connection_multihost(multihost_id, source_id)
        print("The response of MultiHostIntegrationApi->test_source_connection_multihost:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->test_source_connection_multihost: %s\n" % e)
```



[[Back to top]](#) 

## update-multi-host-sources
Update multi-host integration
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/update-multi-host-sources)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration to update.
 Body  | update_multi_host_sources_request_inner | [**[]UpdateMultiHostSourcesRequestInner**](../models/update-multi-host-sources-request-inner) | True  | This endpoint allows you to update a Multi-Host Integration. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2025.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.update_multi_host_sources_request_inner import UpdateMultiHostSourcesRequestInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = 'anId' # str | ID of the Multi-Host Integration to update. # str | ID of the Multi-Host Integration to update.
    update_multi_host_sources_request_inner = '''[{op=add, path=/description, value=MDK Multi-Host Integration 222 description}]''' # List[UpdateMultiHostSourcesRequestInner] | This endpoint allows you to update a Multi-Host Integration. 

    try:
        # Update multi-host integration
        new_update_multi_host_sources_request_inner = UpdateMultiHostSourcesRequestInner.from_json(update_multi_host_sources_request_inner)
        MultiHostIntegrationApi(api_client).update_multi_host_sources(multihost_id=multihost_id, update_multi_host_sources_request_inner=new_update_multi_host_sources_request_inner)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).update_multi_host_sources(multihost_id, new_update_multi_host_sources_request_inner)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->update_multi_host_sources: %s\n" % e)
```



[[Back to top]](#) 



