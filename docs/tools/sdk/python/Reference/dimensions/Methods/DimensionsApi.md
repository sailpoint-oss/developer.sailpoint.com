---
id: dimensions
title: Dimensions
pagination_label: Dimensions
sidebar_label: Dimensions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensions', 'Dimensions'] 
slug: /tools/sdk/python/dimensions/methods/dimensions
tags: ['SDK', 'Software Development Kit', 'Dimensions', 'Dimensions']
---

# sailpoint.dimensions.DimensionsApi
  Use this API to implement and customize dynamic role functionality. With this functionality in place, administrators can create dimensions and configure them for use throughout Identity Security Cloud. Identity Security Cloud can use established criteria to automatically assign the dimensions to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks. Entitlements represent the most granular level of access in Identity Security Cloud.
Access profiles represent the next level and often group entitlements. Dimension represent access selectively based on the evaluation of contextual information that is available or provided. Each Dimension include context attributes and access selection expressions which map criteria to access right assignments. Each dimension can contain up to 5 context attributes. Dynamic Access Roles represent the broadest level of access and often group access profiles ,entitlements and dimensions.Each Dynamic Access Role may contain one or more Dimensions. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-dimension-v1**](#create-dimension-v1) | **POST** `/roles/v1/{roleId}/dimensions` | Create a dimension
[**delete-bulk-dimensions-v1**](#delete-bulk-dimensions-v1) | **POST** `/roles/v1/{roleId}/dimensions/bulk-delete` | Delete dimension(s)
[**delete-dimension-v1**](#delete-dimension-v1) | **DELETE** `/roles/v1/{roleId}/dimensions/{dimensionId}` | Delete a dimension
[**get-dimension-entitlements-v1**](#get-dimension-entitlements-v1) | **GET** `/roles/v1/{roleId}/dimensions/{dimensionId}/entitlements` | List dimension&#39;s entitlements
[**get-dimension-v1**](#get-dimension-v1) | **GET** `/roles/v1/{roleId}/dimensions/{dimensionId}` | Get a dimension under role.
[**list-dimension-access-profiles-v1**](#list-dimension-access-profiles-v1) | **GET** `/roles/v1/{roleId}/dimensions/{dimensionId}/access-profiles` | List dimension&#39;s access profiles
[**list-dimensions-v1**](#list-dimensions-v1) | **GET** `/roles/v1/{roleId}/dimensions` | List dimensions
[**patch-dimension-v1**](#patch-dimension-v1) | **PATCH** `/roles/v1/{roleId}/dimensions/{dimensionId}` | Patch a specified dimension


## create-dimension-v1
Create a dimension
This API creates a dimension.
You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 
Additionally, a ROLE_SUBADMIN cannot create a dimension that includes an access profile or entitlement if that access profile or entitlement is linked to a source that the ROLE_SUBADMIN is not associated with. 
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-dimension-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
 Body  | dimension | [**Dimension**](../models/dimension) | True  | 

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Dimension created | Dimension |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.dimension import Dimension
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension = '''sailpoint.dimensions.Dimension()''' # Dimension | 

    try:
        # Create a dimension
        new_dimension = Dimension.from_json(dimension)
        results = DimensionsApi(api_client).create_dimension_v1(role_id=role_id, dimension=new_dimension)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).create_dimension_v1(role_id, new_dimension)
        print("The response of DimensionsApi->create_dimension_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->create_dimension_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-bulk-dimensions-v1
Delete dimension(s)
This endpoint initiates a bulk deletion of one or more dimensions.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all dimensions included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-bulk-dimensions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimensions.
 Body  | dimensionbulkdeleterequest | [**Dimensionbulkdeleterequest**](../models/dimensionbulkdeleterequest) | True  | 

### Return type
[**Taskresultdto**](../models/taskresultdto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returns an object with the id of the task performing the delete operation. | Taskresultdto |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.dimensionbulkdeleterequest import Dimensionbulkdeleterequest
from sailpoint.dimensions.models.taskresultdto import Taskresultdto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimensions. # str | Parent Role Id of the dimensions.
    dimensionbulkdeleterequest = '''{"dimensionIds":["2c91808876438bb2017668b91919ecca","2c91808876438ba801766e129f151816"]}''' # Dimensionbulkdeleterequest | 

    try:
        # Delete dimension(s)
        new_dimensionbulkdeleterequest = Dimensionbulkdeleterequest.from_json(dimensionbulkdeleterequest)
        results = DimensionsApi(api_client).delete_bulk_dimensions_v1(role_id=role_id, dimensionbulkdeleterequest=new_dimensionbulkdeleterequest)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).delete_bulk_dimensions_v1(role_id, new_dimensionbulkdeleterequest)
        print("The response of DimensionsApi->delete_bulk_dimensions_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->delete_bulk_dimensions_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-dimension-v1
Delete a dimension
This API deletes a Dimension by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles/Entitlements included in the Dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-dimension-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
Path   | dimension_id | **str** | True  | Id of the Dimension

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension

    try:
        # Delete a dimension
        
        DimensionsApi(api_client).delete_dimension_v1(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # DimensionsApi(api_client).delete_dimension_v1(role_id, dimension_id)
    except Exception as e:
        print("Exception when calling DimensionsApi->delete_dimension_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-dimension-entitlements-v1
List dimension's entitlements
This API lists the Entitlements associated with a given dimension.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-dimension-entitlements-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
Path   | dimension_id | **str** | True  | Id of the Dimension
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified**

### Return type
[**List[Entitlement]**](../models/entitlement)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Entitlements | List[Entitlement] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.entitlement import Entitlement
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'attribute eq \"memberOf\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **attribute**: *eq, sw*  **value**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, attribute, value, created, modified** (optional)

    try:
        # List dimension's entitlements
        
        results = DimensionsApi(api_client).get_dimension_entitlements_v1(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).get_dimension_entitlements_v1(role_id, dimension_id, limit, offset, count, filters, sorters)
        print("The response of DimensionsApi->get_dimension_entitlements_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->get_dimension_entitlements_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-dimension-v1
Get a dimension under role.
This API returns a Dimension by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles or Entitlements included in the Dimension or Parent Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-dimension-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
Path   | dimension_id | **str** | True  | Id of the Dimension

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Dimension | Dimension |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.dimension import Dimension
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension

    try:
        # Get a dimension under role.
        
        results = DimensionsApi(api_client).get_dimension_v1(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).get_dimension_v1(role_id, dimension_id)
        print("The response of DimensionsApi->get_dimension_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->get_dimension_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-dimension-access-profiles-v1
List dimension's access profiles
This API lists the Access Profiles associated with a given Dimension

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-dimension-access-profiles-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
Path   | dimension_id | **str** | True  | Id of the Dimension
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**List[Accessprofile]**](../models/accessprofile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Access Profiles | List[Accessprofile] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.accessprofile import Accessprofile
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'source.id eq \"2c91808982f979270182f99e386d00fa\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **source.id**: *eq, in* (optional)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    try:
        # List dimension's access profiles
        
        results = DimensionsApi(api_client).list_dimension_access_profiles_v1(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).list_dimension_access_profiles_v1(role_id, dimension_id, limit, offset, count, filters, sorters)
        print("The response of DimensionsApi->list_dimension_access_profiles_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->list_dimension_access_profiles_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-dimensions-v1
List dimensions
This API returns a list of dimensions under a specified role.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-dimensions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
  Query | for_subadmin | **str** |   (optional) | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin.
  Query | limit | **int** |   (optional) (default to 50) | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*
  Query | sorters | **str** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified**

### Return type
[**List[Dimension]**](../models/dimension)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Dimensions | List[Dimension] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.dimension import Dimension
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    for_subadmin = '5168015d32f890ca15812c9180835d2e' # str | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional) # str | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity. The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity's ID. A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    limit = 50 # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50) # int | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 50)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'id eq \'2c918086749d78830174a1a40e121518\'' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in* (optional)
    sorters = 'name,-modified' # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional) # str | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, created, modified** (optional)

    try:
        # List dimensions
        
        results = DimensionsApi(api_client).list_dimensions_v1(role_id=role_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).list_dimensions_v1(role_id, for_subadmin, limit, offset, count, filters, sorters)
        print("The response of DimensionsApi->list_dimensions_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->list_dimensions_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-dimension-v1
Patch a specified dimension
This API updates an existing dimension using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **name** **description** **owner** **accessProfiles** **entitlements** **membership**
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles/entitlements included in the dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
The maximum supported length for the description field is 2000 characters.
When you use this API to modify a dimension's membership identities, you can only modify up to a limit of 500 membership identities at a time.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-dimension-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
Path   | dimension_id | **str** | True  | Id of the Dimension
 Body  | jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | 

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the Dimension as updated. | Dimension |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListDimensionsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListDimensionsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.dimensions.api.dimensions_api import DimensionsApi
from sailpoint.dimensions.api_client import ApiClient
from sailpoint.dimensions.models.dimension import Dimension
from sailpoint.dimensions.models.jsonpatchoperation import Jsonpatchoperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension
    jsonpatchoperation = '''[{"op":"replace","path":"/description","value":"Test Description"},{"op":"replace","path":"/name","value":"new name"}]''' # List[Jsonpatchoperation] | 

    try:
        # Patch a specified dimension
        new_jsonpatchoperation = Jsonpatchoperation.from_json(jsonpatchoperation)
        results = DimensionsApi(api_client).patch_dimension_v1(role_id=role_id, dimension_id=dimension_id, jsonpatchoperation=new_jsonpatchoperation)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).patch_dimension_v1(role_id, dimension_id, new_jsonpatchoperation)
        print("The response of DimensionsApi->patch_dimension_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->patch_dimension_v1: %s\n" % e)
```



[[Back to top]](#) 



