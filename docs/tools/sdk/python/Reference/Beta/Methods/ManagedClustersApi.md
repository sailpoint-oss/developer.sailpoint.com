---
id: beta-managed-clusters
title: Managed_Clusters
pagination_label: Managed_Clusters
sidebar_label: Managed_Clusters
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managed_Clusters', 'BetaManaged_Clusters'] 
slug: /tools/sdk/python/beta/methods/managed-clusters
tags: ['SDK', 'Software Development Kit', 'Managed_Clusters', 'BetaManaged_Clusters']
---

# sailpoint.beta.ManagedClustersApi
  Use this API to implement managed cluster functionality. 
With this functionality in place, administrators can modify and delete existing managed clients, get their statuses, and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-client-log-configuration**](#get-client-log-configuration) | **GET** `/managed-clusters/{id}/log-config` | Get managed cluster&#39;s log configuration
[**get-managed-cluster**](#get-managed-cluster) | **GET** `/managed-clusters/{id}` | Get a specified ManagedCluster.
[**get-managed-clusters**](#get-managed-clusters) | **GET** `/managed-clusters` | Retrieve all Managed Clusters.
[**put-client-log-configuration**](#put-client-log-configuration) | **PUT** `/managed-clusters/{id}/log-config` | Update managed cluster&#39;s log configuration


## get-client-log-configuration
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Get managed cluster's log configuration
Get managed cluster's log configuration.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-client-log-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of ManagedCluster to get log configuration for

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Log configuration of ManagedCluster matching given cluster ID | ClientLogConfiguration |  -  |
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
import sailpoint.beta
from sailpoint.beta.api.managed_clusters_api import ManagedClustersApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.client_log_configuration import ClientLogConfiguration
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'aClusterId' # str | ID of ManagedCluster to get log configuration for # str | ID of ManagedCluster to get log configuration for

    try:
        # Get managed cluster's log configuration
        
        results =ManagedClustersApi(api_client).get_client_log_configuration(id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_client_log_configuration(id)
        print("The response of ManagedClustersApi->get_client_log_configuration:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ManagedClustersApi->get_client_log_configuration: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Get a specified ManagedCluster.
Retrieve a ManagedCluster by ID.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-managed-cluster)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the ManagedCluster to get

### Return type
[**ManagedCluster**](../models/managed-cluster)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with ManagedCluster having the given ID. | ManagedCluster |  -  |
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
import sailpoint.beta
from sailpoint.beta.api.managed_clusters_api import ManagedClustersApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.managed_cluster import ManagedCluster
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'aClusterId' # str | ID of the ManagedCluster to get # str | ID of the ManagedCluster to get

    try:
        # Get a specified ManagedCluster.
        
        results =ManagedClustersApi(api_client).get_managed_cluster(id)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_managed_cluster(id)
        print("The response of ManagedClustersApi->get_managed_cluster:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ManagedClustersApi->get_managed_cluster: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-clusters
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Retrieve all Managed Clusters.
Retrieve all Managed Clusters for the current Org, based on request context.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-managed-clusters)

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
200 | Responds with a list of ManagedCluster. | List[ManagedCluster] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.managed_clusters_api import ManagedClustersApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.managed_cluster import ManagedCluster
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'operational eq operation' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **operational**: *eq* (optional)

    try:
        # Retrieve all Managed Clusters.
        
        results =ManagedClustersApi(api_client).get_managed_clusters()
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).get_managed_clusters(offset, limit, count, filters)
        print("The response of ManagedClustersApi->get_managed_clusters:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ManagedClustersApi->get_managed_clusters: %s\n" % e)
```



[[Back to top]](#) 

## put-client-log-configuration
:::caution deprecated 
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Update managed cluster's log configuration
Update managed cluster's log configuration

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-client-log-configuration)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of ManagedCluster to update log configuration for
 Body  | client_log_configuration | [**ClientLogConfiguration**](../models/client-log-configuration) | True  | ClientLogConfiguration for given ManagedCluster

### Return type
[**ClientLogConfiguration**](../models/client-log-configuration)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with updated ClientLogConfiguration for given ManagedCluster | ClientLogConfiguration |  -  |
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
import sailpoint.beta
from sailpoint.beta.api.managed_clusters_api import ManagedClustersApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.client_log_configuration import ClientLogConfiguration
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    id = 'aClusterId' # str | ID of ManagedCluster to update log configuration for # str | ID of ManagedCluster to update log configuration for
    client_log_configuration = {
          "durationMinutes" : 120,
          "rootLevel" : "INFO",
          "clientId" : "aClientId",
          "expiration" : "2020-12-15T19:13:36.079Z",
          "logLevels" : "INFO"
        } # ClientLogConfiguration | ClientLogConfiguration for given ManagedCluster

    try:
        # Update managed cluster's log configuration
        
        results =ManagedClustersApi(api_client).put_client_log_configuration(id, new_client_log_configuration)
        # Below is a request that includes all optional parameters
        # results = ManagedClustersApi(api_client).put_client_log_configuration(id, new_client_log_configuration)
        print("The response of ManagedClustersApi->put_client_log_configuration:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling ManagedClustersApi->put_client_log_configuration: %s\n" % e)
```



[[Back to top]](#) 



