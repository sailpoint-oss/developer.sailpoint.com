---
id: managed-clusters
title: Managed_Clusters
pagination_label: Managed_Clusters
sidebar_label: Managed_Clusters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managed_Clusters', 'Managed_Clusters'] 
slug: /tools/sdk/python/v3/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'Managed_Clusters', 'Managed_Clusters']
---

# sailpoint.v3.ManagedClustersApi
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster**](#create-managed-cluster) | **POST** `/managed-clusters` | Create Create Managed Cluster
[**delete-managed-cluster**](#delete-managed-cluster) | **DELETE** `/managed-clusters/{id}` | Delete Managed Cluster
[**get-client-log-configuration**](#get-client-log-configuration) | **GET** `/managed-clusters/{id}/log-config` | Get Managed Cluster Log Configuration
[**get-managed-cluster**](#get-managed-cluster) | **GET** `/managed-clusters/{id}` | Get Managed Cluster
[**get-managed-clusters**](#get-managed-clusters) | **GET** `/managed-clusters` | Get Managed Clusters
[**put-client-log-configuration**](#put-client-log-configuration) | **PUT** `/managed-clusters/{id}/log-config` | Update Managed Cluster Log Configuration
[**update-managed-cluster**](#update-managed-cluster) | **PATCH** `/managed-clusters/{id}` | Update Managed Cluster


## create-managed-cluster
Create Create Managed Cluster
Create a new Managed Cluster.
The API returns a result that includes the managed cluster ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-managed-cluster)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | managed_cluster_request | [**ManagedClusterRequest**](../models/managed-cluster-request) | True  | 

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Created managed cluster. | ManagedCluster |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.managed_cluster import ManagedCluster
from sailpoint.v3.models.managed_cluster_request import ManagedClusterRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    managed_cluster_request = '''{
          "configuration" : {
            "clusterExternalId" : "externalId",
            "ccgVersion" : "77.0.0"
          },
          "name" : "Managed Cluster Name",
          "description" : "A short description of the managed cluster.",
          "type" : "idn"
        }''' # ManagedClusterRequest | 

    try:
        # Create Create Managed Cluster
        new_managed_cluster_request = ManagedClusterRequest.from_json(managed_cluster_request)
        results = ManagedClustersApi(api_client).create_managed_cluster(managed_cluster_request=new_managed_cluster_request)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).create_managed_cluster(new_managed_cluster_request)
        print("The response of ManagedClustersApi->create_managed_cluster:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->create_managed_cluster: %s\n" % e)
```



[[Back to top]](#) 

## delete-managed-cluster
Delete Managed Cluster
Delete an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-managed-cluster)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180897de347a2017de8859e8c5039' # str | Managed cluster ID. # str | Managed cluster ID.
    remove_clients = False # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to False) # bool | Flag to determine the need to delete a cluster with clients. (optional) (default to False)

    try:
        # Delete Managed Cluster
        
        ManagedClustersApi(api_client).delete_managed_cluster(id=id)
        # Below is a request that includes all optional parameters
        # ManagedClustersApi(api_client).delete_managed_cluster(id, remove_clients)
    except Exception as e:
        print("Exception when calling ManagedClustersApi->delete_managed_cluster: %s\n" % e)
```



[[Back to top]](#) 

## get-client-log-configuration
Get Managed Cluster Log Configuration
Get a managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-client-log-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of managed cluster to get log configuration for.

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Log configuration of managed cluster for given cluster ID. | ClientLogConfiguration |  -  |
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
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
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.client_log_configuration import ClientLogConfiguration
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | ID of managed cluster to get log configuration for. # str | ID of managed cluster to get log configuration for.

    try:
        # Get Managed Cluster Log Configuration
        
        results = ManagedClustersApi(api_client).get_client_log_configuration(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_client_log_configuration(id)
        print("The response of ManagedClustersApi->get_client_log_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->get_client_log_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster
Get Managed Cluster
Get a managed cluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-managed-cluster)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed cluster ID.

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with managed cluster for the given ID. | ManagedCluster |  -  |
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
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.managed_cluster import ManagedCluster
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180897de347a2017de8859e8c5039' # str | Managed cluster ID. # str | Managed cluster ID.

    try:
        # Get Managed Cluster
        
        results = ManagedClustersApi(api_client).get_managed_cluster(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_managed_cluster(id)
        print("The response of ManagedClustersApi->get_managed_cluster:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->get_managed_cluster: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-clusters
Get Managed Clusters
List current organization's managed clusters, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-managed-clusters)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq*

### Return type
[**List[ManagedCluster]**](../models/managed-cluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with a list of managed clusters. | List[ManagedCluster] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.managed_cluster import ManagedCluster
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'operational eq \"operation\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional)

    try:
        # Get Managed Clusters
        
        results = ManagedClustersApi(api_client).get_managed_clusters()
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_managed_clusters(offset, limit, count, filters)
        print("The response of ManagedClustersApi->get_managed_clusters:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->get_managed_clusters: %s\n" % e)
```



[[Back to top]](#) 

## put-client-log-configuration
Update Managed Cluster Log Configuration
Update a managed cluster's log configuration. You may only specify one of `durationMinutes` or `expiration`, up to 1440 minutes (24 hours) in the future. If neither is specified, the default value for `durationMinutes` is 240.

[API Spec](https://developer.sailpoint.com/docs/api/v3/put-client-log-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the managed cluster to update the log configuration for.
 Body  | put_client_log_configuration_request | [**PutClientLogConfigurationRequest**](../models/put-client-log-configuration-request) | True  | Client log configuration for the given managed cluster.

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Response with updated client log configuration for the given managed cluster. | ClientLogConfiguration |  -  |
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
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.client_log_configuration import ClientLogConfiguration
from sailpoint.v3.models.put_client_log_configuration_request import PutClientLogConfigurationRequest
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2b838de9-db9b-abcf-e646-d4f274ad4238' # str | ID of the managed cluster to update the log configuration for. # str | ID of the managed cluster to update the log configuration for.
    put_client_log_configuration_request = '''sailpoint.v3.PutClientLogConfigurationRequest()''' # PutClientLogConfigurationRequest | Client log configuration for the given managed cluster.

    try:
        # Update Managed Cluster Log Configuration
        new_put_client_log_configuration_request = PutClientLogConfigurationRequest.from_json(put_client_log_configuration_request)
        results = ManagedClustersApi(api_client).put_client_log_configuration(id=id, put_client_log_configuration_request=new_put_client_log_configuration_request)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).put_client_log_configuration(id, new_put_client_log_configuration_request)
        print("The response of ManagedClustersApi->put_client_log_configuration:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->put_client_log_configuration: %s\n" % e)
```



[[Back to top]](#) 

## update-managed-cluster
Update Managed Cluster
Update an existing managed cluster.

[API Spec](https://developer.sailpoint.com/docs/api/v3/update-managed-cluster)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | Managed cluster ID.
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSONPatch payload used to update the object.

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated managed cluster. | ManagedCluster |  -  |
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
from sailpoint.v3.api.managed_clusters_api import ManagedClustersApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.json_patch_operation import JsonPatchOperation
from sailpoint.v3.models.managed_cluster import ManagedCluster
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2c9180897de347a2017de8859e8c5039' # str | Managed cluster ID. # str | Managed cluster ID.
    json_patch_operation = '''[sailpoint.v3.JsonPatchOperation()]''' # List[JsonPatchOperation] | JSONPatch payload used to update the object.

    try:
        # Update Managed Cluster
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = ManagedClustersApi(api_client).update_managed_cluster(id=id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).update_managed_cluster(id, new_json_patch_operation)
        print("The response of ManagedClustersApi->update_managed_cluster:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClustersApi->update_managed_cluster: %s\n" % e)
```



[[Back to top]](#) 



