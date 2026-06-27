---
id: managed-cluster-types
title: Managed_Cluster_Types
pagination_label: Managed_Cluster_Types
sidebar_label: Managed_Cluster_Types
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Managed_Cluster_Types', 'Managed_Cluster_Types'] 
slug: /tools/sdk/python/managed-cluster-types/methods/managed-cluster-types
tags: ['SDK', 'Software Development Kit', 'Managed_Cluster_Types', 'Managed_Cluster_Types']
---

# sailpoint.managed_cluster_types.ManagedClusterTypesApi
  Use this API to implement managed cluster types functionality. 
With this functionality in place, administrators can modify and delete existing managed cluster types and create new ones.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-managed-cluster-type-v1**](#create-managed-cluster-type-v1) | **POST** `/managed-cluster-types/v1` | Create new managed cluster type
[**delete-managed-cluster-type-v1**](#delete-managed-cluster-type-v1) | **DELETE** `/managed-cluster-types/v1/{id}` | Delete a managed cluster type
[**get-managed-cluster-type-v1**](#get-managed-cluster-type-v1) | **GET** `/managed-cluster-types/v1/{id}` | Get a managed cluster type
[**get-managed-cluster-types-v1**](#get-managed-cluster-types-v1) | **GET** `/managed-cluster-types/v1` | List managed cluster types
[**update-managed-cluster-type-v1**](#update-managed-cluster-type-v1) | **PATCH** `/managed-cluster-types/v1/{id}` | Update a managed cluster type


## create-managed-cluster-type-v1
Create new managed cluster type
Create a new Managed Cluster Type.

The API returns a result that includes the Managed Cluster Type ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-managed-cluster-type-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | managedclustertype | [**Managedclustertype**](../models/managedclustertype) | True  | 

### Return type
[**Managedclustertype**](../models/managedclustertype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The created ManagedClusterType | Managedclustertype |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_cluster_types.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.managed_cluster_types.api_client import ApiClient
from sailpoint.managed_cluster_types.models.managedclustertype import Managedclustertype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    managedclustertype = '''sailpoint.managed_cluster_types.Managedclustertype()''' # Managedclustertype | 

    try:
        # Create new managed cluster type
        new_managedclustertype = Managedclustertype.from_json(managedclustertype)
        results = ManagedClusterTypesApi(api_client).create_managed_cluster_type_v1(managedclustertype=new_managedclustertype)
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).create_managed_cluster_type_v1(new_managedclustertype)
        print("The response of ManagedClusterTypesApi->create_managed_cluster_type_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->create_managed_cluster_type_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-managed-cluster-type-v1
Delete a managed cluster type
Delete an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-managed-cluster-type-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_cluster_types.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.managed_cluster_types.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClusterTypeId' # str | The Managed Cluster Type ID # str | The Managed Cluster Type ID

    try:
        # Delete a managed cluster type
        
        ManagedClusterTypesApi(api_client).delete_managed_cluster_type_v1(id=id)
        # Below is a request that includes all optional parameters
        # ManagedClusterTypesApi(api_client).delete_managed_cluster_type_v1(id)
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->delete_managed_cluster_type_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster-type-v1
Get a managed cluster type
Get a Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-type-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Managed Cluster Type ID

### Return type
[**Managedclustertype**](../models/managedclustertype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a ManagedClusterType | Managedclustertype |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_cluster_types.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.managed_cluster_types.api_client import ApiClient
from sailpoint.managed_cluster_types.models.managedclustertype import Managedclustertype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClusterTypeId' # str | The Managed Cluster Type ID # str | The Managed Cluster Type ID

    try:
        # Get a managed cluster type
        
        results = ManagedClusterTypesApi(api_client).get_managed_cluster_type_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).get_managed_cluster_type_v1(id)
        print("The response of ManagedClusterTypesApi->get_managed_cluster_type_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->get_managed_cluster_type_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-managed-cluster-types-v1
List managed cluster types
Get a list of Managed Cluster Types.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-managed-cluster-types-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | type | **str** |   (optional) | Type descriptor
  Query | pod | **str** |   (optional) | Pinned pod (or default)
  Query | org | **str** |   (optional) | Pinned org (or default)
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Managedclustertype]**](../models/managedclustertype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with a list of ManagedClusterType based on the query params provided | List[Managedclustertype] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_cluster_types.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.managed_cluster_types.api_client import ApiClient
from sailpoint.managed_cluster_types.models.managedclustertype import Managedclustertype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    type = 'IDN' # str | Type descriptor (optional) # str | Type descriptor (optional)
    pod = 'megapod-useast1' # str | Pinned pod (or default) (optional) # str | Pinned pod (or default) (optional)
    org = 'denali-xyz' # str | Pinned org (or default) (optional) # str | Pinned org (or default) (optional)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)

    try:
        # List managed cluster types
        
        results = ManagedClusterTypesApi(api_client).get_managed_cluster_types_v1()
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).get_managed_cluster_types_v1(type, pod, org, offset, limit)
        print("The response of ManagedClusterTypesApi->get_managed_cluster_types_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->get_managed_cluster_types_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-managed-cluster-type-v1
Update a managed cluster type
Update an existing Managed Cluster Type.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-managed-cluster-type-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The Managed Cluster Type ID
 Body  | jsonpatch | [**Jsonpatch**](../models/jsonpatch) | True  | The JSONPatch payload used to update the schema.

### Return type
[**Managedclustertype**](../models/managedclustertype)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The updated ManagedClusterType | Managedclustertype |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetManagedClusterTypesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetManagedClusterTypesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.managed_cluster_types.api.managed_cluster_types_api import ManagedClusterTypesApi
from sailpoint.managed_cluster_types.api_client import ApiClient
from sailpoint.managed_cluster_types.models.jsonpatch import Jsonpatch
from sailpoint.managed_cluster_types.models.managedclustertype import Managedclustertype
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'aClusterTypeId' # str | The Managed Cluster Type ID # str | The Managed Cluster Type ID
    jsonpatch = '''sailpoint.managed_cluster_types.Jsonpatch()''' # Jsonpatch | The JSONPatch payload used to update the schema.

    try:
        # Update a managed cluster type
        new_jsonpatch = Jsonpatch.from_json(jsonpatch)
        results = ManagedClusterTypesApi(api_client).update_managed_cluster_type_v1(id=id, jsonpatch=new_jsonpatch)
        # Below is a request that includes all optional parameters
        # results = ManagedClusterTypesApi(api_client).update_managed_cluster_type_v1(id, new_jsonpatch)
        print("The response of ManagedClusterTypesApi->update_managed_cluster_type_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling ManagedClusterTypesApi->update_managed_cluster_type_v1: %s\n" % e)
```



[[Back to top]](#) 



