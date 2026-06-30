---
id: managed-clusters
title: Managed_Clusters
pagination_label: Managed_Clusters
sidebar_label: Managed_Clusters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managed_Clusters', 'Managed_Clusters'] 
slug: /tools/sdk/python/managed-clusters/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'Managed_Clusters', 'Managed_Clusters']
---

# sailpoint.managed_clusters.ManagedClustersApi
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-v1**](#create-managed-cluster-v1) | **POST** `/managed-clusters/v1` | Create create managed cluster
[**delete-managed-cluster-v1**](#delete-managed-cluster-v1) | **DELETE** `/managed-clusters/v1/{id}` | Delete managed cluster
[**get-client-log-configuration-v1**](#get-client-log-configuration-v1) | **GET** `/managed-clusters/v1/{id}/log-config` | Get managed cluster log configuration
[**get-managed-cluster-v1**](#get-managed-cluster-v1) | **GET** `/managed-clusters/v1/{id}` | Get managed cluster
[**get-managed-clusters-v1**](#get-managed-clusters-v1) | **GET** `/managed-clusters/v1` | Get managed clusters
[**put-client-log-configuration-v1**](#put-client-log-configuration-v1) | **PUT** `/managed-clusters/v1/{id}/log-config` | Update managed cluster log configuration
[**update-managed-cluster-v1**](#update-managed-cluster-v1) | **PATCH** `/managed-clusters/v1/{id}` | Update managed cluster
[**update-v1**](#update-v1) | **POST** `/managed-clusters/v1/{id}/manualUpgrade` | Trigger manual upgrade for managed cluster


## create-managed-cluster-v1
Create create managed cluster
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-cluster-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | managedclusterrequest | [**Managedclusterrequest**](../models/managedclusterrequest) | True  | 

### Return type
[**Managedcluster**](../models/managedcluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created managed cluster. | Managedcluster |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.managedcluster import Managedcluster
from sailpoint.managed_clusters.models.managedclusterrequest import Managedclusterrequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    managedclusterrequest = '''sailpoint.managed_clusters.Managedclusterrequest()''' # Managedclusterrequest | 

    try:
        # Create create managed cluster
        new_managedclusterrequest = Managedclusterrequest.from_json(managedclusterrequest)
        results = ManagedClustersApi(api_client).create_managed_cluster_v1(managedclusterrequest=new_managedclusterrequest)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).create_managed_cluster_v1(new_managedclusterrequest)
        print("The response of ManagedClustersApi->create_managed_cluster_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->create_managed_cluster_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-managed-cluster-v1
Delete managed cluster
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-cluster-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed cluster ID.
  Query | remove_clients | **bool** |   (optional) (default to False) | Flag to determine the need to delete a cluster with clients.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180897de347a2017de8859e8c5039' # str | Managed cluster ID. # str | Managed cluster ID.
    remove_clients = False # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to False) # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to False)

    try:
        # Delete managed cluster
        
        ManagedClustersApi(api_client).delete_managed_cluster_v1(id=id)
        # Below is a request that includes all optional parameters
        # ManagedClustersApi(api_client).delete_managed_cluster_v1(id, remove_clients)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->delete_managed_cluster_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-client-log-configuration-v1
Get managed cluster log configuration
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-client-log-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of managed cluster to get log configuration for.

### Return type
[**Clientlogconfiguration**](../models/clientlogconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Log configuration of managed cluster for given cluster ID. | Clientlogconfiguration |  -  |
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.clientlogconfiguration import Clientlogconfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | ID of managed cluster to get log configuration for. # str | ID of managed cluster to get log configuration for.

    try:
        # Get managed cluster log configuration
        
        results = ManagedClustersApi(api_client).get_client_log_configuration_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_client_log_configuration_v1(id)
        print("The response of ManagedClustersApi->get_client_log_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->get_client_log_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster-v1
Get managed cluster
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed cluster ID.

### Return type
[**Managedcluster**](../models/managedcluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with managed cluster for the given ID. | Managedcluster |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.managedcluster import Managedcluster
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180897de347a2017de8859e8c5039' # str | Managed cluster ID. # str | Managed cluster ID.

    try:
        # Get managed cluster
        
        results = ManagedClustersApi(api_client).get_managed_cluster_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_managed_cluster_v1(id)
        print("The response of ManagedClustersApi->get_managed_cluster_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->get_managed_cluster_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-clusters-v1
Get managed clusters
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-clusters-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq*

### Return type
[**List[Managedcluster]**](../models/managedcluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with a list of managed clusters. | List[Managedcluster] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.managedcluster import Managedcluster
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'operational eq \"operation\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*  **name**: *eq*  **type**: *eq*  **status**: *eq* (optional)

    try:
        # Get managed clusters
        
        results = ManagedClustersApi(api_client).get_managed_clusters_v1()
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_managed_clusters_v1(offset, limit, count, filters)
        print("The response of ManagedClustersApi->get_managed_clusters_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->get_managed_clusters_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-client-log-configuration-v1
Update managed cluster log configuration
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-client-log-configuration-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the managed cluster to update the log configuration for.
 Body  | put_client_log_configuration_v1_request | [**PutClientLogConfigurationV1Request**](../models/put-client-log-configuration-v1-request) | True  | Client log configuration for the given managed cluster.

### Return type
[**Clientlogconfiguration**](../models/clientlogconfiguration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with updated client log configuration for the given managed cluster. | Clientlogconfiguration |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.clientlogconfiguration import Clientlogconfiguration
from sailpoint.managed_clusters.models.put_client_log_configuration_v1_request import PutClientLogConfigurationV1Request
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | ID of the managed cluster to update the log configuration for. # str | ID of the managed cluster to update the log configuration for.
    put_client_log_configuration_v1_request = '''sailpoint.managed_clusters.PutClientLogConfigurationV1Request()''' # PutClientLogConfigurationV1Request | Client log configuration for the given managed cluster.

    try:
        # Update managed cluster log configuration
        new_put_client_log_configuration_v1_request = PutClientLogConfigurationV1Request.from_json(put_client_log_configuration_v1_request)
        results = ManagedClustersApi(api_client).put_client_log_configuration_v1(id=id, put_client_log_configuration_v1_request=new_put_client_log_configuration_v1_request)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).put_client_log_configuration_v1(id, new_put_client_log_configuration_v1_request)
        print("The response of ManagedClustersApi->put_client_log_configuration_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->put_client_log_configuration_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-managed-cluster-v1
Update managed cluster
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-cluster-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed cluster ID.
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | JSONPatch payload used to update the object.

### Return type
[**Managedcluster**](../models/managedcluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated managed cluster. | Managedcluster |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.managed_clusters.models.managedcluster import Managedcluster
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180897de347a2017de8859e8c5039' # str | Managed cluster ID. # str | Managed cluster ID.
    jsonpatchoperation = '''[sailpoint.managed_clusters.Jsonpatchoperation()]''' # List[Jsonpatchoperation] | JSONPatch payload used to update the object.

    try:
        # Update managed cluster
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = ManagedClustersApi(api_client).update_managed_cluster_v1(id=id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).update_managed_cluster_v1(id, new_jsonpatchoperation)
        print("The response of ManagedClustersApi->update_managed_cluster_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->update_managed_cluster_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-v1
Trigger manual upgrade for managed cluster
Trigger Manual Upgrade for Managed Cluster.
AMS Security: API, Internal A token with SYSTEM_ADMINISTRATOR authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of managed cluster to trigger manual upgrade.

### Return type
[**Clustermanualupgrade**](../models/clustermanualupgrade)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Manual upgrade of managed cluster for given cluster ID. | Clustermanualupgrade |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClustersV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClustersV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_clusters.api.managed_clusters_api import ManagedClustersApi
from sailpoint.managed_clusters.api_client import ApiClient
from sailpoint.managed_clusters.models.clustermanualupgrade import Clustermanualupgrade
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | ID of managed cluster to trigger manual upgrade. # str | ID of managed cluster to trigger manual upgrade.

    try:
        # Trigger manual upgrade for managed cluster
        
        results = ManagedClustersApi(api_client).update_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).update_v1(id)
        print("The response of ManagedClustersApi->update_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->update_v1: %s\n" % e)
```



[[Back to top]](#) 



