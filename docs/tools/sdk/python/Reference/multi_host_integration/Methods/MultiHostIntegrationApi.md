---
id: multi-host-integration
title: Multi_Host_Integration
pagination_label: Multi_Host_Integration
sidebar_label: Multi_Host_Integration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Multi_Host_Integration', 'Multi_Host_Integration'] 
slug: /tools/sdk/python/multi-host-integration/methods/multi-host-integration
tags: ['SDK', 'Software Development Kit', 'Multi_Host_Integration', 'Multi_Host_Integration']
---

# sailpoint.multi_host_integration.MultiHostIntegrationApi
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-multi-host-integration-v1**](#create-multi-host-integration-v1) | **POST** `/multihosts/v1` | Create multi-host integration
[**create-sources-within-multi-host-v1**](#create-sources-within-multi-host-v1) | **POST** `/multihosts/v1/{multihostId}` | Create sources within multi-host integration
[**delete-multi-host-sources-v1**](#delete-multi-host-sources-v1) | **POST** `/multihosts/v1/{multiHostId}/sources/bulk-delete` | Delete sources within multi-host integration
[**delete-multi-host-v1**](#delete-multi-host-v1) | **DELETE** `/multihosts/v1/{multihostId}` | Delete multi-host integration
[**get-acct-aggregation-groups-v1**](#get-acct-aggregation-groups-v1) | **GET** `/multihosts/v1/{multihostId}/acctAggregationGroups` | List account-aggregation-groups by multi-host id
[**get-entitlement-aggregation-groups-v1**](#get-entitlement-aggregation-groups-v1) | **GET** `/multihosts/v1/{multiHostId}/entitlementAggregationGroups` | List entitlement-aggregation-groups by integration id
[**get-multi-host-integrations-list-v1**](#get-multi-host-integrations-list-v1) | **GET** `/multihosts/v1` | List all existing multi-host integrations
[**get-multi-host-integrations-v1**](#get-multi-host-integrations-v1) | **GET** `/multihosts/v1/{multihostId}` | Get multi-host integration by id
[**get-multi-host-source-creation-errors-v1**](#get-multi-host-source-creation-errors-v1) | **GET** `/multihosts/v1/{multiHostId}/sources/errors` | List multi-host source creation errors
[**get-multihost-integration-types-v1**](#get-multihost-integration-types-v1) | **GET** `/multihosts/v1/types` | List multi-host integration types
[**get-sources-within-multi-host-v1**](#get-sources-within-multi-host-v1) | **GET** `/multihosts/v1/{multihostId}/sources` | List sources within multi-host integration
[**test-connection-multi-host-sources-v1**](#test-connection-multi-host-sources-v1) | **POST** `/multihosts/v1/{multihostId}/sources/testConnection` | Test configuration for multi-host integration
[**test-source-connection-multihost-v1**](#test-source-connection-multihost-v1) | **GET** `/multihosts/v1/{multihostId}/sources/{sourceId}/testConnection` | Test configuration for multi-host integration&#39;s single source
[**update-multi-host-sources-v1**](#update-multi-host-sources-v1) | **PATCH** `/multihosts/v1/{multihostId}` | Update multi-host integration


## create-multi-host-integration-v1
Create multi-host integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-multi-host-integration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | multihostintegrationscreate | [**Multihostintegrationscreate**](../models/multihostintegrationscreate) | True  | The specifics of the Multi-Host Integration to create

### Return type
[**Multihostintegrations**](../models/multihostintegrations)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | OK. Returned if the request was successfully accepted into the system. | Multihostintegrations |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrations import Multihostintegrations
from sailpoint.multi_host_integration.models.multihostintegrationscreate import Multihostintegrationscreate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihostintegrationscreate = '''sailpoint.multi_host_integration.Multihostintegrationscreate()''' # Multihostintegrationscreate | The specifics of the Multi-Host Integration to create

    try:
        # Create multi-host integration
        new_multihostintegrationscreate = Multihostintegrationscreate.from_json(multihostintegrationscreate)
        results = MultiHostIntegrationApi(api_client).create_multi_host_integration_v1(multihostintegrationscreate=new_multihostintegrationscreate)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).create_multi_host_integration_v1(new_multihostintegrationscreate)
        print("The response of MultiHostIntegrationApi->create_multi_host_integration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->create_multi_host_integration_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-sources-within-multi-host-v1
Create sources within multi-host integration
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sources-within-multi-host-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration.
 Body  | multihostintegrationscreatesources | [**[]Multihostintegrationscreatesources**](../models/multihostintegrationscreatesources) | True  | The specifics of the sources to create within Multi-Host Integration.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrationscreatesources import Multihostintegrationscreatesources
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of the Multi-Host Integration. # str | ID of the Multi-Host Integration.
    multihostintegrationscreatesources = '''[sailpoint.multi_host_integration.Multihostintegrationscreatesources()]''' # List[Multihostintegrationscreatesources] | The specifics of the sources to create within Multi-Host Integration.

    try:
        # Create sources within multi-host integration
        new_multihostintegrationscreatesources = Multihostintegrationscreatesources.from_json(multihostintegrationscreatesources)
        MultiHostIntegrationApi(api_client).create_sources_within_multi_host_v1(multihost_id=multihost_id, multihostintegrationscreatesources=new_multihostintegrationscreatesources)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).create_sources_within_multi_host_v1(multihost_id, new_multihostintegrationscreatesources)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->create_sources_within_multi_host_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-multi-host-sources-v1
Delete sources within multi-host integration
This endpoint performs bulk sources delete within Multi-Host Integration via a list of supplied IDs.

The following rights are required to access this endpoint: idn:multihosts:delete, idn:sources:delete

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-multi-host-sources-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_id = '004091cb79b04636b88662afa50a4440' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration
    request_body = '''['request_body_example']''' # List[str] | The delete bulk sources within multi-host integration request body

    try:
        # Delete sources within multi-host integration
        new_request_body = RequestBody.from_json(request_body)
        MultiHostIntegrationApi(api_client).delete_multi_host_sources_v1(multi_host_id=multi_host_id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).delete_multi_host_sources_v1(multi_host_id, new_request_body)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->delete_multi_host_sources_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-multi-host-v1
Delete multi-host integration
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-multi-host-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of Multi-Host Integration to delete. # str | ID of Multi-Host Integration to delete.

    try:
        # Delete multi-host integration
        
        MultiHostIntegrationApi(api_client).delete_multi_host_v1(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).delete_multi_host_v1(multihost_id)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->delete_multi_host_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-acct-aggregation-groups-v1
List account-aggregation-groups by multi-host id
This API will return array of account aggregation groups within provided Multi-Host Integration ID.
A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-acct-aggregation-groups-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration to update
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Multihostintegrationsaggscheduleupdate]**](../models/multihostintegrationsaggscheduleupdate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[Multihostintegrationsaggscheduleupdate] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrationsaggscheduleupdate import Multihostintegrationsaggscheduleupdate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = 'aMultiHostId' # str | ID of the Multi-Host Integration to update # str | ID of the Multi-Host Integration to update
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List account-aggregation-groups by multi-host id
        
        results = MultiHostIntegrationApi(api_client).get_acct_aggregation_groups_v1(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_acct_aggregation_groups_v1(multihost_id, offset, limit)
        print("The response of MultiHostIntegrationApi->get_acct_aggregation_groups_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_acct_aggregation_groups_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-entitlement-aggregation-groups-v1
List entitlement-aggregation-groups by integration id
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-entitlement-aggregation-groups-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multi_host_id | **str** | True  | ID of the Multi-Host Integration to update
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Multihostintegrationsaggscheduleupdate]**](../models/multihostintegrationsaggscheduleupdate)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[Multihostintegrationsaggscheduleupdate] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrationsaggscheduleupdate import Multihostintegrationsaggscheduleupdate
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_id = 'aMultiHostId' # str | ID of the Multi-Host Integration to update # str | ID of the Multi-Host Integration to update
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List entitlement-aggregation-groups by integration id
        
        results = MultiHostIntegrationApi(api_client).get_entitlement_aggregation_groups_v1(multi_host_id=multi_host_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_entitlement_aggregation_groups_v1(multi_host_id, offset, limit)
        print("The response of MultiHostIntegrationApi->get_entitlement_aggregation_groups_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_entitlement_aggregation_groups_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-multi-host-integrations-list-v1
List all existing multi-host integrations
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-integrations-list-v1)

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
[**List[Multihostintegrations]**](../models/multihostintegrations)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[Multihostintegrations] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrations import Multihostintegrations
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
        
        results = MultiHostIntegrationApi(api_client).get_multi_host_integrations_list_v1()
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multi_host_integrations_list_v1(offset, limit, sorters, filters, count, for_subadmin)
        print("The response of MultiHostIntegrationApi->get_multi_host_integrations_list_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multi_host_integrations_list_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-multi-host-integrations-v1
Get multi-host integration by id
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-integrations-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration.

### Return type
[**Multihostintegrations**](../models/multihostintegrations)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | Multihostintegrations |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrations import Multihostintegrations
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of the Multi-Host Integration. # str | ID of the Multi-Host Integration.

    try:
        # Get multi-host integration by id
        
        results = MultiHostIntegrationApi(api_client).get_multi_host_integrations_v1(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multi_host_integrations_v1(multihost_id)
        print("The response of MultiHostIntegrationApi->get_multi_host_integrations_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multi_host_integrations_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-multi-host-source-creation-errors-v1
List multi-host source creation errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multi-host-source-creation-errors-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multi_host_id | **str** | True  | ID of the Multi-Host Integration

### Return type
[**List[Sourcecreationerrors]**](../models/sourcecreationerrors)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[Sourcecreationerrors] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.sourcecreationerrors import Sourcecreationerrors
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multi_host_id = '004091cb79b04636b88662afa50a4440' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration

    try:
        # List multi-host source creation errors
        
        results = MultiHostIntegrationApi(api_client).get_multi_host_source_creation_errors_v1(multi_host_id=multi_host_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multi_host_source_creation_errors_v1(multi_host_id)
        print("The response of MultiHostIntegrationApi->get_multi_host_source_creation_errors_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multi_host_source_creation_errors_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-multihost-integration-types-v1
List multi-host integration types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-multihost-integration-types-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Multihostintegrationtemplatetype]**](../models/multihostintegrationtemplatetype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[Multihostintegrationtemplatetype] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostintegrationtemplatetype import Multihostintegrationtemplatetype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List multi-host integration types
        
        results = MultiHostIntegrationApi(api_client).get_multihost_integration_types_v1()
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_multihost_integration_types_v1()
        print("The response of MultiHostIntegrationApi->get_multihost_integration_types_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_multihost_integration_types_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-sources-within-multi-host-v1
List sources within multi-host integration
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sources-within-multi-host-v1)

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
[**List[Multihostsources]**](../models/multihostsources)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | List[Multihostsources] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.multihostsources import Multihostsources
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
        
        results = MultiHostIntegrationApi(api_client).get_sources_within_multi_host_v1(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).get_sources_within_multi_host_v1(multihost_id, offset, limit, sorters, filters, count)
        print("The response of MultiHostIntegrationApi->get_sources_within_multi_host_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->get_sources_within_multi_host_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-connection-multi-host-sources-v1
Test configuration for multi-host integration
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-connection-multi-host-sources-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1324' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration

    try:
        # Test configuration for multi-host integration
        
        MultiHostIntegrationApi(api_client).test_connection_multi_host_sources_v1(multihost_id=multihost_id)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).test_connection_multi_host_sources_v1(multihost_id)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->test_connection_multi_host_sources_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-source-connection-multihost-v1
Test configuration for multi-host integration's single source
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/test-source-connection-multihost-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration
Path   | source_id | **str** | True  | ID of the source within the Multi-Host Integration

### Return type
[**TestSourceConnectionMultihostV1200Response**](../models/test-source-connection-multihost-v1200-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. | TestSourceConnectionMultihostV1200Response |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.test_source_connection_multihost_v1200_response import TestSourceConnectionMultihostV1200Response
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = '2c91808568c529c60168cca6f90c1326' # str | ID of the Multi-Host Integration # str | ID of the Multi-Host Integration
    source_id = '2c91808568c529f60168cca6f90c1324' # str | ID of the source within the Multi-Host Integration # str | ID of the source within the Multi-Host Integration

    try:
        # Test configuration for multi-host integration's single source
        
        results = MultiHostIntegrationApi(api_client).test_source_connection_multihost_v1(multihost_id=multihost_id, source_id=source_id)
        # Below is a request that includes all optional parameters
        # results = MultiHostIntegrationApi(api_client).test_source_connection_multihost_v1(multihost_id, source_id)
        print("The response of MultiHostIntegrationApi->test_source_connection_multihost_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->test_source_connection_multihost_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-multi-host-sources-v1
Update multi-host integration
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-multi-host-sources-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | multihost_id | **str** | True  | ID of the Multi-Host Integration to update.
 Body  | update_multi_host_sources_v1_request_inner | [**[]UpdateMultiHostSourcesV1RequestInner**](../models/update-multi-host-sources-v1-request-inner) | True  | This endpoint allows you to update a Multi-Host Integration. 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | OK. Returned if the request was successfully accepted into the system. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMultiHostIntegrationsListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMultiHostIntegrationsListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.multi_host_integration.api.multi_host_integration_api import MultiHostIntegrationApi
from sailpoint.multi_host_integration.api_client import ApiClient
from sailpoint.multi_host_integration.models.update_multi_host_sources_v1_request_inner import UpdateMultiHostSourcesV1RequestInner
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    multihost_id = 'anId' # str | ID of the Multi-Host Integration to update. # str | ID of the Multi-Host Integration to update.
    update_multi_host_sources_v1_request_inner = '''[{"op":"add","path":"/description","value":"MDK Multi-Host Integration 222 description"}]''' # List[UpdateMultiHostSourcesV1RequestInner] | This endpoint allows you to update a Multi-Host Integration. 

    try:
        # Update multi-host integration
        new_update_multi_host_sources_v1_request_inner = UpdateMultiHostSourcesV1RequestInner.from_json(update_multi_host_sources_v1_request_inner)
        MultiHostIntegrationApi(api_client).update_multi_host_sources_v1(multihost_id=multihost_id, update_multi_host_sources_v1_request_inner=new_update_multi_host_sources_v1_request_inner)
        # Below is a request that includes all optional parameters
        # MultiHostIntegrationApi(api_client).update_multi_host_sources_v1(multihost_id, new_update_multi_host_sources_v1_request_inner)
    except Exception as e:
        print("Exception when calling MultiHostIntegrationApi->update_multi_host_sources_v1: %s\n" % e)
```



[[Back to top]](#) 



