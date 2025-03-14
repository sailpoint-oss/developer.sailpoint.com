---
id: v2024-data-segmentation
title: Data_Segmentation
pagination_label: Data_Segmentation
sidebar_label: Data_Segmentation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Data_Segmentation', 'V2024Data_Segmentation'] 
slug: /tools/sdk/python/v2024/methods/data-segmentation
tags: ['SDK', 'Software Development Kit', 'Data_Segmentation', 'V2024Data_Segmentation']
---

# sailpoint.v2024.DataSegmentationApi
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-data-segment**](#create-data-segment) | **POST** `/data-segments` | Create Segment
[**delete-data-segment**](#delete-data-segment) | **DELETE** `/data-segments/{segmentId}` | Delete Segment by ID
[**get-data-segment**](#get-data-segment) | **GET** `/data-segments/{segmentId}` | Get Segment by ID
[**get-data-segment-identity-membership**](#get-data-segment-identity-membership) | **GET** `/data-segments/membership/{identityId}` | Get SegmentMembership by Identity ID
[**get-data-segmentation-enabled-for-user**](#get-data-segmentation-enabled-for-user) | **GET** `/data-segments/user-enabled/{identityId}` | Is Segmentation enabled by Identity
[**list-data-segments**](#list-data-segments) | **GET** `/data-segments` | Get Segments
[**patch-data-segment**](#patch-data-segment) | **PATCH** `/data-segments/{segmentId}` | Update Segment
[**publish-data-segment**](#publish-data-segment) | **POST** `/data-segments/{segmentId}` | Publish segment by ID


## create-data-segment
Create Segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/create-data-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | data_segment | [**DataSegment**](../models/data-segment) | True  | 

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Segment created | DataSegment |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.data_segment import DataSegment
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data_segment = '''sailpoint.v2024.DataSegment()''' # DataSegment | 

    try:
        # Create Segment
        new_data_segment = DataSegment.from_json(data_segment)
        results = DataSegmentationApi(api_client).create_data_segment(data_segment=new_data_segment)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).create_data_segment(new_data_segment)
        print("The response of DataSegmentationApi->create_data_segment:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->create_data_segment: %s\n" % e)
```



[[Back to top]](#) 

## delete-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete Segment by ID
This API deletes the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/delete-data-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The segment ID to delete.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | published | **bool** |   (optional) (default to False) | This determines which version of the segment to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content. |  |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The segment ID to delete. # str | The segment ID to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    published = False # bool | This determines which version of the segment to delete (optional) (default to False) # bool | This determines which version of the segment to delete (optional) (default to False)

    try:
        # Delete Segment by ID
        
        DataSegmentationApi(api_client).delete_data_segment(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # DataSegmentationApi(api_client).delete_data_segment(id, x_sail_point_experimental, published)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->delete_data_segment: %s\n" % e)
```



[[Back to top]](#) 

## get-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Segment by ID
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-data-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The segment ID to retrieve.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segment | DataSegment |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.data_segment import DataSegment
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The segment ID to retrieve. # str | The segment ID to retrieve.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get Segment by ID
        
        results = DataSegmentationApi(api_client).get_data_segment(id=id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).get_data_segment(id, x_sail_point_experimental)
        print("The response of DataSegmentationApi->get_data_segment:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->get_data_segment: %s\n" % e)
```



[[Back to top]](#) 

## get-data-segment-identity-membership
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get SegmentMembership by Identity ID
This API returns the segment membership specified by the given identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-data-segment-identity-membership)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The identity ID to retrieve the segments they are in.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
**object**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segment Memberships for specified identity | object |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    identity_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The identity ID to retrieve the segments they are in. # str | The identity ID to retrieve the segments they are in.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Get SegmentMembership by Identity ID
        
        results = DataSegmentationApi(api_client).get_data_segment_identity_membership(identity_id=identity_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).get_data_segment_identity_membership(identity_id, x_sail_point_experimental)
        print("The response of DataSegmentationApi->get_data_segment_identity_membership:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->get_data_segment_identity_membership: %s\n" % e)
```



[[Back to top]](#) 

## get-data-segmentation-enabled-for-user
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Is Segmentation enabled by Identity
This API returns whether or not segmentation is enabled for the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/get-data-segmentation-enabled-for-user)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The identity ID to retrieve if segmentation is enabled for the identity.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.

### Return type
**bool**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns if segmentation is enabled for a specified User | bool |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    identity_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The identity ID to retrieve if segmentation is enabled for the identity. # str | The identity ID to retrieve if segmentation is enabled for the identity.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')

    try:
        # Is Segmentation enabled by Identity
        
        results = DataSegmentationApi(api_client).get_data_segmentation_enabled_for_user(identity_id=identity_id, x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).get_data_segmentation_enabled_for_user(identity_id, x_sail_point_experimental)
        print("The response of DataSegmentationApi->get_data_segmentation_enabled_for_user:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->get_data_segmentation_enabled_for_user: %s\n" % e)
```



[[Back to top]](#) 

## list-data-segments
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get Segments
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/list-data-segments)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
  Query | enabled | **bool** |   (optional) (default to True) | This boolean indicates whether the segment is currently active. Inactive segments have no effect.
  Query | unique | **bool** |   (optional) (default to False) | This returns only one record if set to true and that would be the published record if exists.
  Query | published | **bool** |   (optional) (default to True) | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*

### Return type
[**List[DataSegment]**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all segments | List[DataSegment] |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.data_segment import DataSegment
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    enabled = True # bool | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to True) # bool | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to True)
    unique = False # bool | This returns only one record if set to true and that would be the published record if exists. (optional) (default to False) # bool | This returns only one record if set to true and that would be the published record if exists. (optional) (default to False)
    published = True # bool | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to True) # bool | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to True)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional)

    try:
        # Get Segments
        
        results = DataSegmentationApi(api_client).list_data_segments(x_sail_point_experimental=x_sail_point_experimental)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).list_data_segments(x_sail_point_experimental, enabled, unique, published, limit, offset, count, filters)
        print("The response of DataSegmentationApi->list_data_segments:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->list_data_segments: %s\n" % e)
```



[[Back to top]](#) 

## patch-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Update Segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v2024/patch-data-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The segment ID to modify.
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | request_body | **[]object** | True  | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the segment&#39;s new representation. | DataSegment |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from sailpoint.v2024.models.data_segment import DataSegment
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The segment ID to modify. # str | The segment ID to modify.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    request_body = '''[{op=replace, path=/memberFilter, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]''' # List[object] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 

    try:
        # Update Segment
        new_request_body = RequestBody.from_json(request_body)
        results = DataSegmentationApi(api_client).patch_data_segment(id=id, x_sail_point_experimental=x_sail_point_experimental, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).patch_data_segment(id, x_sail_point_experimental, new_request_body)
        print("The response of DataSegmentationApi->patch_data_segment:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->patch_data_segment: %s\n" % e)
```



[[Back to top]](#) 

## publish-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Publish segment by ID
This will publish the segment so that it starts applying the segmentation to the desired users if enabled

[API Spec](https://developer.sailpoint.com/docs/api/v2024/publish-data-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | x_sail_point_experimental | **str** | True  (default to 'true') | Use this header to enable this experimental API.
 Body  | request_body | **[]str** | True  | A list of segment ids that you wish to publish
  Query | publish_all | **bool** |   (optional) (default to True) | This flag decides whether you want to publish all unpublished or a list of specific segment ids

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segments published |  |  -  |
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
from sailpoint.v2024.api.data_segmentation_api import DataSegmentationApi
from sailpoint.v2024.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = true

with ApiClient(configuration) as api_client:
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (default to 'true') # str | Use this header to enable this experimental API. (default to 'true')
    request_body = '''['request_body_example']''' # List[str] | A list of segment ids that you wish to publish
    publish_all = True # bool | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to True) # bool | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to True)

    try:
        # Publish segment by ID
        new_request_body = RequestBody.from_json(request_body)
        DataSegmentationApi(api_client).publish_data_segment(x_sail_point_experimental=x_sail_point_experimental, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # DataSegmentationApi(api_client).publish_data_segment(x_sail_point_experimental, new_request_body, publish_all)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->publish_data_segment: %s\n" % e)
```



[[Back to top]](#) 



