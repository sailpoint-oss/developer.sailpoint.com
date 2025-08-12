---
id: v2024-dimensions
title: Dimensions
pagination_label: Dimensions
sidebar_label: Dimensions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Dimensions', 'V2024Dimensions'] 
slug: /tools/sdk/python/v2024/methods/dimensions
tags: ['SDK', 'Software Development Kit', 'Dimensions', 'V2024Dimensions']
---

# sailpoint.v2024.DimensionsApi
  Use this API to implement and customize dynamic role functionality. With this functionality in place, administrators can create dimensions and configure them for use throughout Identity Security Cloud. Identity Security Cloud can use established criteria to automatically assign the dimensions to qualified users. This enables users to get all the access they need quickly and securely and administrators to spend their time on other tasks. Entitlements represent the most granular level of access in Identity Security Cloud.
Access profiles represent the next level and often group entitlements. Dimension represent access selectively based on the evaluation of contextual information that is available or provided. Each Dimension include context attributes and access selection expressions which map criteria to access right assignments. Each dimension can contain up to 5 context attributes. Dynamic Access Roles represent the broadest level of access and often group access profiles ,entitlements and dimensions.Each Dynamic Access Role may contain one or more Dimensions. 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-dimension**](#create-dimension) | **POST** `/roles/{roleId}/dimensions` | Create a dimension
[**delete-bulk-dimensions**](#delete-bulk-dimensions) | **POST** `/roles/{roleId}/dimensions/bulk-delete` | Delete dimension(s)
[**delete-dimension**](#delete-dimension) | **DELETE** `/roles/{roleId}/dimensions/{dimensionId}` | Delete a dimension
[**get-dimension**](#get-dimension) | **GET** `/roles/{roleId}/dimensions/{dimensionId}` | Get a dimension under role.
[**get-dimension-entitlements**](#get-dimension-entitlements) | **GET** `/roles/{roleId}/dimensions/{dimensionId}/entitlements` | List dimension&#39;s entitlements
[**list-dimension-access-profiles**](#list-dimension-access-profiles) | **GET** `/roles/{roleId}/dimensions/{dimensionId}/access-profiles` | List dimension&#39;s access profiles
[**list-dimensions**](#list-dimensions) | **GET** `/roles/{roleId}/dimensions` | List dimensions
[**patch-dimension**](#patch-dimension) | **PATCH** `/roles/{roleId}/dimensions/{dimensionId}` | Patch a specified dimension


## create-dimension
Create a dimension
This API creates a dimension.
You must have a token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority to call this API. 
Additionally, a ROLE_SUBADMIN cannot create a dimension that includes an access profile or entitlement if that access profile or entitlement is linked to a source that the ROLE_SUBADMIN is not associated with. 
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-dimension)

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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.dimension import Dimension
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension = '''{
          "owner" : {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "entitlements" : [ {
            "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
            "id" : "2c91809773dee32014e13e122092014e",
            "type" : "ENTITLEMENT"
          }, {
            "name" : "CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local",
            "id" : "2c91809773dee32014e13e122092014e",
            "type" : "ENTITLEMENT"
          } ],
          "accessProfiles" : [ {
            "name" : "Access Profile 2567",
            "id" : "ff808081751e6e129f1518161919ecca",
            "type" : "ACCESS_PROFILE"
          }, {
            "name" : "Access Profile 2567",
            "id" : "ff808081751e6e129f1518161919ecca",
            "type" : "ACCESS_PROFILE"
          } ],
          "created" : "2021-03-01T22:32:58.104Z",
          "name" : "Dimension 2567",
          "modified" : "2021-03-02T20:22:28.104Z",
          "description" : "Urna amet cursus pellentesque nisl orci maximus lorem nisl euismod fusce morbi placerat adipiscing maecenas nisi tristique et metus et lacus sed morbi nunc nisl maximus magna arcu varius sollicitudin elementum enim maecenas nisi id ipsum tempus fusce diam ipsum tortor.",
          "id" : "2c918086749d78830174a1a40e121518",
          "membership" : {
            "criteria" : {
              "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
              "children" : [ {
                "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                "children" : [ {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                }, {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                } ],
                "operation" : "EQUALS",
                "key" : {
                  "property" : "attribute.email",
                  "type" : "IDENTITY"
                }
              }, {
                "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                "children" : [ {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                }, {
                  "stringValue" : "carlee.cert1c9f9b6fd@mailinator.com",
                  "operation" : "EQUALS",
                  "key" : {
                    "property" : "attribute.email",
                    "type" : "IDENTITY"
                  }
                } ],
                "operation" : "EQUALS",
                "key" : {
                  "property" : "attribute.email",
                  "type" : "IDENTITY"
                }
              } ],
              "operation" : "EQUALS",
              "key" : {
                "property" : "attribute.email",
                "type" : "IDENTITY"
              }
            },
            "type" : "STANDARD"
          },
          "parentId" : "2c918086749d78830174a1a40e121518"
        }''' # Dimension | 

    try:
        # Create a dimension
        new_dimension = Dimension.from_json(dimension)
        results = DimensionsApi(api_client).create_dimension(role_id=role_id, dimension=new_dimension)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).create_dimension(role_id, new_dimension)
        print("The response of DimensionsApi->create_dimension:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->create_dimension: %s\n" % e)
```



[[Back to top]](#) 

## delete-bulk-dimensions
Delete dimension(s)
This endpoint initiates a bulk deletion of one or more dimensions.
When the request is successful, the endpoint returns the bulk delete's task result ID.  To follow the task, you can use [Get Task Status by ID](https://developer.sailpoint.com/docs/api/beta/get-task-status), which will return the task result's status and information. 
This endpoint can only bulk delete up to a limit of 50 roles per request. 
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this endpoint. In addition, a token with ROLE_SUBADMIN authority can only call this endpoint if all dimensions included in the request are associated with sources with management workgroups the ROLE_SUBADMIN is a member of.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-bulk-dimensions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimensions.
 Body  | dimension_bulk_delete_request | [**DimensionBulkDeleteRequest**](../models/dimension-bulk-delete-request) | True  | 

### Return type
[**TaskResultDto**](../models/task-result-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
202 | Returns an object with the id of the task performing the delete operation. | TaskResultDto |  -  |
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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.dimension_bulk_delete_request import DimensionBulkDeleteRequest
from sailpoint.v2024.models.task_result_dto import TaskResultDto
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimensions. # str | Parent Role Id of the dimensions.
    dimension_bulk_delete_request = '''{
          "dimensionIds" : [ "2c9180847812e0b1017817051919ecca", "2c9180887812e0b201781e129f151816" ]
        }''' # DimensionBulkDeleteRequest | 

    try:
        # Delete dimension(s)
        new_dimension_bulk_delete_request = DimensionBulkDeleteRequest.from_json(dimension_bulk_delete_request)
        results = DimensionsApi(api_client).delete_bulk_dimensions(role_id=role_id, dimension_bulk_delete_request=new_dimension_bulk_delete_request)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).delete_bulk_dimensions(role_id, new_dimension_bulk_delete_request)
        print("The response of DimensionsApi->delete_bulk_dimensions:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->delete_bulk_dimensions: %s\n" % e)
```



[[Back to top]](#) 

## delete-dimension
Delete a dimension
This API deletes a Dimension by its ID.
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles/Entitlements included in the Dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-dimension)

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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension

    try:
        # Delete a dimension
        
        DimensionsApi(api_client).delete_dimension(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # DimensionsApi(api_client).delete_dimension(role_id, dimension_id)
    except Exception as e:
        print("Exception when calling DimensionsApi->delete_dimension: %s\n" % e)
```



[[Back to top]](#) 

## get-dimension
Get a dimension under role.
This API returns a Dimension by its ID.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles or Entitlements included in the Dimension or Parent Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-dimension)

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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.dimension import Dimension
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension

    try:
        # Get a dimension under role.
        
        results = DimensionsApi(api_client).get_dimension(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).get_dimension(role_id, dimension_id)
        print("The response of DimensionsApi->get_dimension:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->get_dimension: %s\n" % e)
```



[[Back to top]](#) 

## get-dimension-entitlements
List dimension's entitlements
This API lists the Entitlements associated with a given dimension.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-dimension-entitlements)

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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.entitlement import Entitlement
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
        
        results = DimensionsApi(api_client).get_dimension_entitlements(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).get_dimension_entitlements(role_id, dimension_id, limit, offset, count, filters, sorters)
        print("The response of DimensionsApi->get_dimension_entitlements:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->get_dimension_entitlements: %s\n" % e)
```



[[Back to top]](#) 

## list-dimension-access-profiles
List dimension's access profiles
This API lists the Access Profiles associated with a given Dimension

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all Access Profiles included in the Role are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-dimension-access-profiles)

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
[**List[AccessProfile]**](../models/access-profile)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of Access Profiles | List[AccessProfile] |  -  |
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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.access_profile import AccessProfile
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
        
        results = DimensionsApi(api_client).list_dimension_access_profiles(role_id=role_id, dimension_id=dimension_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).list_dimension_access_profiles(role_id, dimension_id, limit, offset, count, filters, sorters)
        print("The response of DimensionsApi->list_dimension_access_profiles:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->list_dimension_access_profiles: %s\n" % e)
```



[[Back to top]](#) 

## list-dimensions
List dimensions
This API returns a list of dimensions under a specified role.

A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-dimensions)

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
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.dimension import Dimension
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
        
        results = DimensionsApi(api_client).list_dimensions(role_id=role_id)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).list_dimensions(role_id, for_subadmin, limit, offset, count, filters, sorters)
        print("The response of DimensionsApi->list_dimensions:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->list_dimensions: %s\n" % e)
```



[[Back to top]](#) 

## patch-dimension
Patch a specified dimension
This API updates an existing dimension using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.
The following fields are patchable: **name** **description** **owner** **accessProfiles** **entitlements** **membership**
A token with API, ORG_ADMIN, ROLE_ADMIN, or ROLE_SUBADMIN authority is required to call this API. In addition, a token with ROLE_SUBADMIN authority may only call this API if all access profiles/entitlements included in the dimension are associated to Sources with management workgroups of which the ROLE_SUBADMIN is a member.
The maximum supported length for the description field is 2000 characters.
When you use this API to modify a dimension's membership identities, you can only modify up to a limit of 500 membership identities at a time.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-dimension)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | role_id | **str** | True  | Parent Role Id of the dimension.
Path   | dimension_id | **str** | True  | Id of the Dimension
 Body  | json_patch_operation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**Dimension**](../models/dimension)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Responds with the Dimension as updated. | Dimension |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.v2024.api.dimensions_api import DimensionsApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.dimension import Dimension
from sailpoint.v2024.models.json_patch_operation import JsonPatchOperation
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    role_id = '6603fba3004f43c687610a29195252ce' # str | Parent Role Id of the dimension. # str | Parent Role Id of the dimension.
    dimension_id = '2c9180835d191a86015d28455b4a2329' # str | Id of the Dimension # str | Id of the Dimension
    json_patch_operation = '''[{op=replace, path=/description, value=Test Description}, {op=replace, path=/name, value=new name}]''' # List[JsonPatchOperation] | 

    try:
        # Patch a specified dimension
        new_json_patch_operation = JsonPatchOperation.from_json(json_patch_operation)
        results = DimensionsApi(api_client).patch_dimension(role_id=role_id, dimension_id=dimension_id, json_patch_operation=new_json_patch_operation)
        # Below is a request that includes all optional parameters
        # results = DimensionsApi(api_client).patch_dimension(role_id, dimension_id, new_json_patch_operation)
        print("The response of DimensionsApi->patch_dimension:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DimensionsApi->patch_dimension: %s\n" % e)
```



[[Back to top]](#) 



