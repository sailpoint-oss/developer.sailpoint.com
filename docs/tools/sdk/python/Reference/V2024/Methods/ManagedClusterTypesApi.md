---
id: v2024-managed-cluster-types
title: Managed_Cluster_Types
pagination_label: Managed_Cluster_Types
sidebar_label: Managed_Cluster_Types
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managed_Cluster_Types', 'V2024Managed_Cluster_Types'] 
slug: /tools/sdk/python/v2024/methods/managed-cluster-types
tags: ['SDK', 'Software Development Kit', 'Managed_Cluster_Types', 'V2024Managed_Cluster_Types']
---

# sailpoint.v2024.ManagedClusterTypesApi
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-type**](#create-managed-cluster-type) | **POST** `/managed-cluster-types` | Create new managed cluster type
[**delete-managed-cluster-type**](#delete-managed-cluster-type) | **DELETE** `/managed-cluster-types/{id}` | Delete a managed cluster type
[**get-managed-cluster-type**](#get-managed-cluster-type) | **GET** `/managed-cluster-types/{id}` | Get a managed cluster type
[**get-managed-cluster-types**](#get-managed-cluster-types) | **GET** `/managed-cluster-types` | Get managed cluster types
[**update-managed-cluster-type**](#update-managed-cluster-type) | **PATCH** `/managed-cluster-types/{id}` | Update a managed cluster type


## create-managed-cluster-type
Create new managed cluster type
Create a new Managed Cluster Type.
AMS Security: Devops, Internal A token with SaaS Platform Internal or DevOps is required to access this endpoint.
The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-managed-cluster-type)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | managed_cluster_type | [**ManagedClusterType**](../models/managed-cluster-type) | True  | 

### Return type
[**ManagedClusterType**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created ManagedClusterType | ManagedClusterType |  -  |
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
from sailpoint.v2024.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.managed_cluster_type import ManagedClusterType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    managed_cluster_type = '''{
          "managedProcessIds" : [ "someId", "someId2" ],
          "pod" : "megapod-useast1",
          "org" : "denali-cjh",
          "id" : "aClusterTypeId",
          "type" : "idn"
        }''' # ManagedClusterType | 

    try:
        # Create new managed cluster type
        new_managed_cluster_type = ManagedClusterType.from_json(managed_cluster_type)
        results = ManagedClusterTypesApi(api_client).create_managed_cluster_type(managed_cluster_type=new_managed_cluster_type)
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).create_managed_cluster_type(new_managed_cluster_type)
        print("The response of ManagedClusterTypesApi->create_managed_cluster_type:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->create_managed_cluster_type: %s\n" % e)
```



[[Back to top]](#) 

## delete-managed-cluster-type
Delete a managed cluster type
Delete an existing Managed Cluster Type.
AMS Security: Devops, Internal A token with SaaS Platform Internal or DevOps is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-managed-cluster-type)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Managed Cluster Type ID

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
from sailpoint.v2024.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClusterTypeId' # str | The Managed Cluster Type ID # str | The Managed Cluster Type ID

    try:
        # Delete a managed cluster type
        
        ManagedClusterTypesApi(api_client).delete_managed_cluster_type(id=id)
        # Below is a request that includes all optional parameters
        # ManagedClusterTypesApi(api_client).delete_managed_cluster_type(id)
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->delete_managed_cluster_type: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster-type
Get a managed cluster type
Get a Managed Cluster Type.
AMS Security: Devops, Internal A token with SaaS Platform Internal or DevOps is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-cluster-type)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Managed Cluster Type ID

### Return type
[**ManagedClusterType**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a ManagedClusterType | ManagedClusterType |  -  |
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
from sailpoint.v2024.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.managed_cluster_type import ManagedClusterType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClusterTypeId' # str | The Managed Cluster Type ID # str | The Managed Cluster Type ID

    try:
        # Get a managed cluster type
        
        results = ManagedClusterTypesApi(api_client).get_managed_cluster_type(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).get_managed_cluster_type(id)
        print("The response of ManagedClusterTypesApi->get_managed_cluster_type:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->get_managed_cluster_type: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster-types
Get managed cluster types
Get a list of Managed Cluster Types.
AMS Security: Devops, Internal A token with SaaS Platform Internal or DevOps is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-managed-cluster-types)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | type | **str** |   (optional) | Type descriptor
  Query | pod | **str** |   (optional) | Pinned pod (or default)
  Query | org | **str** |   (optional) | Pinned org (or default)
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[ManagedClusterType]**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a list of ManagedClusterType based on the query params provided | List[ManagedClusterType] |  -  |
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
from sailpoint.v2024.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.managed_cluster_type import ManagedClusterType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    type = 'IDN' # str | Type descriptor (optional) # str | Type descriptor (optional)
    pod = 'megapod-useast1' # str | Pinned pod (or default) (optional) # str | Pinned pod (or default) (optional)
    org = 'denali-xyz' # str | Pinned org (or default) (optional) # str | Pinned org (or default) (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # Get managed cluster types
        
        results = ManagedClusterTypesApi(api_client).get_managed_cluster_types()
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).get_managed_cluster_types(type, pod, org, offset, limit)
        print("The response of ManagedClusterTypesApi->get_managed_cluster_types:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->get_managed_cluster_types: %s\n" % e)
```



[[Back to top]](#) 

## update-managed-cluster-type
Update a managed cluster type
Update an existing Managed Cluster Type.
AMS Security: Devops, Internal A token with SaaS Platform Internal or DevOps is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/update-managed-cluster-type)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Managed Cluster Type ID
 Body  | json_patch | [**JsonPatch**](../models/json-patch) | True  | The JSONPatch payload used to update the schema.

### Return type
[**ManagedClusterType**](../models/managed-cluster-type)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated ManagedClusterType | ManagedClusterType |  -  |
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
from sailpoint.v2024.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.json_patch import JsonPatch
from sailpoint.v2024.models.managed_cluster_type import ManagedClusterType
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClusterTypeId' # str | The Managed Cluster Type ID # str | The Managed Cluster Type ID
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
        }''' # JsonPatch | The JSONPatch payload used to update the schema.

    try:
        # Update a managed cluster type
        new_json_patch = JsonPatch.from_json(json_patch)
        results = ManagedClusterTypesApi(api_client).update_managed_cluster_type(id=id, json_patch=new_json_patch)
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).update_managed_cluster_type(id, new_json_patch)
        print("The response of ManagedClusterTypesApi->update_managed_cluster_type:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->update_managed_cluster_type: %s\n" % e)
```



[[Back to top]](#) 



