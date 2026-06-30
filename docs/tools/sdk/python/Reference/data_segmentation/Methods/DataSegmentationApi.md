---
id: data-segmentation
title: Data_Segmentation
pagination_label: Data_Segmentation
sidebar_label: Data_Segmentation
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Data_Segmentation', 'Data_Segmentation'] 
slug: /tools/sdk/python/data-segmentation/methods/data-segmentation
tags: ['SDK', 'Software Development Kit', 'Data_Segmentation', 'Data_Segmentation']
---

# sailpoint.data_segmentation.DataSegmentationApi
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-data-segment-v1**](#create-data-segment-v1) | **POST** `/data-segments/v1` | Create segment
[**delete-data-segment-v1**](#delete-data-segment-v1) | **DELETE** `/data-segments/v1/{segmentId}` | Delete segment by id
[**get-data-segment-identity-membership-v1**](#get-data-segment-identity-membership-v1) | **GET** `/data-segments/v1/membership/{identityId}` | Get segmentmembership by identity id
[**get-data-segment-v1**](#get-data-segment-v1) | **GET** `/data-segments/v1/{segmentId}` | Get segment by id
[**get-data-segmentation-enabled-for-user-v1**](#get-data-segmentation-enabled-for-user-v1) | **GET** `/data-segments/v1/user-enabled/{identityId}` | Is segmentation enabled by identity
[**list-data-segments-v1**](#list-data-segments-v1) | **GET** `/data-segments/v1` | Get segments
[**patch-data-segment-v1**](#patch-data-segment-v1) | **PATCH** `/data-segments/v1/{segmentId}` | Update segment
[**publish-data-segment-v1**](#publish-data-segment-v1) | **POST** `/data-segments/v1/{segmentId}` | Publish segment by id


## create-data-segment-v1
Create segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-data-segment-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.data_segmentation.models.data_segment import DataSegment
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    data_segment = '''sailpoint.data_segmentation.DataSegment()''' # DataSegment | 

    try:
        # Create segment
        new_data_segment = DataSegment.from_json(data_segment)
        results = DataSegmentationApi(api_client).create_data_segment_v1(data_segment=new_data_segment)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).create_data_segment_v1(new_data_segment)
        print("The response of DataSegmentationApi->create_data_segment_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DataSegmentationApi->create_data_segment_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-data-segment-v1
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
Delete segment by id
This API deletes the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-data-segment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | segment_id | **str** | True  | The segment ID to delete.
  Query | published | **bool** |   (optional) (default to False) | This determines which version of the segment to delete
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    segment_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The segment ID to delete. # str | The segment ID to delete.
    published = False # bool | This determines which version of the segment to delete (optional) (default to False) # bool | This determines which version of the segment to delete (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete segment by id
        
        DataSegmentationApi(api_client).delete_data_segment_v1(segment_id=segment_id)
        # Below is a request that includes all optional parameters
        # DataSegmentationApi(api_client).delete_data_segment_v1(segment_id, published, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->delete_data_segment_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-data-segment-identity-membership-v1
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
Get segmentmembership by identity id
This API returns the segment membership specified by the given identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-data-segment-identity-membership-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The identity ID to retrieve the segments they are in.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[Segmentmembership]**](../models/segmentmembership)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segment Memberships for specified identity | List[Segmentmembership] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.data_segmentation.models.segmentmembership import Segmentmembership
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The identity ID to retrieve the segments they are in. # str | The identity ID to retrieve the segments they are in.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get segmentmembership by identity id
        
        results = DataSegmentationApi(api_client).get_data_segment_identity_membership_v1(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).get_data_segment_identity_membership_v1(identity_id, x_sail_point_experimental)
        print("The response of DataSegmentationApi->get_data_segment_identity_membership_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DataSegmentationApi->get_data_segment_identity_membership_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-data-segment-v1
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
Get segment by id
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-data-segment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | segment_id | **str** | True  | The segment ID to retrieve.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segment | DataSegment |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.data_segmentation.models.data_segment import DataSegment
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    segment_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The segment ID to retrieve. # str | The segment ID to retrieve.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get segment by id
        
        results = DataSegmentationApi(api_client).get_data_segment_v1(segment_id=segment_id)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).get_data_segment_v1(segment_id, x_sail_point_experimental)
        print("The response of DataSegmentationApi->get_data_segment_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DataSegmentationApi->get_data_segment_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-data-segmentation-enabled-for-user-v1
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
Is segmentation enabled by identity
This API returns whether or not segmentation is enabled for the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-data-segmentation-enabled-for-user-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | identity_id | **str** | True  | The identity ID to retrieve if segmentation is enabled for the identity.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
**bool**

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Returns if segmentation is enabled for a specified User | bool |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    identity_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The identity ID to retrieve if segmentation is enabled for the identity. # str | The identity ID to retrieve if segmentation is enabled for the identity.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Is segmentation enabled by identity
        
        results = DataSegmentationApi(api_client).get_data_segmentation_enabled_for_user_v1(identity_id=identity_id)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).get_data_segmentation_enabled_for_user_v1(identity_id, x_sail_point_experimental)
        print("The response of DataSegmentationApi->get_data_segmentation_enabled_for_user_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DataSegmentationApi->get_data_segmentation_enabled_for_user_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-data-segments-v1
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
Get segments
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-data-segments-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | enabled | **bool** |   (optional) (default to True) | This boolean indicates whether the segment is currently active. Inactive segments have no effect.
  Query | unique | **bool** |   (optional) (default to False) | This returns only one record if set to true and that would be the published record if exists.
  Query | published | **bool** |   (optional) (default to True) | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[DataSegment]**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all segments | List[DataSegment] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.data_segmentation.models.data_segment import DataSegment
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    enabled = True # bool | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to True) # bool | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to True)
    unique = False # bool | This returns only one record if set to true and that would be the published record if exists. (optional) (default to False) # bool | This returns only one record if set to true and that would be the published record if exists. (optional) (default to False)
    published = True # bool | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to True) # bool | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to True)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'name eq \"\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get segments
        
        results = DataSegmentationApi(api_client).list_data_segments_v1()
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).list_data_segments_v1(enabled, unique, published, limit, offset, count, filters, x_sail_point_experimental)
        print("The response of DataSegmentationApi->list_data_segments_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DataSegmentationApi->list_data_segments_v1: %s\n" % e)
```



[[Back to top]](#) 

## patch-data-segment-v1
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
Update segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-data-segment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | segment_id | **str** | True  | The segment ID to modify.
 Body  | request_body | **[]object** | True  | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the segment&#39;s new representation. | DataSegment |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json-patch+json
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.data_segmentation.models.data_segment import DataSegment
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    segment_id = 'ef38f943-47e9-4562-b5bb-8424a56397d8' # str | The segment ID to modify. # str | The segment ID to modify.
    request_body = '''[{"op":"replace","path":"/memberFilter","value":{"expression":{"operator":"AND","children":[{"operator":"EQUALS","attribute":"location","value":{"type":"STRING","value":"Philadelphia"}},{"operator":"EQUALS","attribute":"department","value":{"type":"STRING","value":"HR"}}]}}}]''' # List[object] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update segment
        new_request_body = RequestBody.from_json(request_body)
        results = DataSegmentationApi(api_client).patch_data_segment_v1(segment_id=segment_id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = DataSegmentationApi(api_client).patch_data_segment_v1(segment_id, new_request_body, x_sail_point_experimental)
        print("The response of DataSegmentationApi->patch_data_segment_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling DataSegmentationApi->patch_data_segment_v1: %s\n" % e)
```



[[Back to top]](#) 

## publish-data-segment-v1
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
Publish segment by id
This will publish the segment so that it starts applying the segmentation to the desired users if enabled

[API Spec](https://developer.sailpoint.com/docs/api/v1/publish-data-segment-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | segment_id | **str** | True  | The segmentId.
 Body  | request_body | **[]str** | True  | A list of segment ids that you wish to publish
  Query | publish_all | **bool** |   (optional) (default to True) | This flag decides whether you want to publish all unpublished or a list of specific segment ids
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segments published |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.data_segmentation.api.data_segmentation_api import DataSegmentationApi
from sailpoint.data_segmentation.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    segment_id = 'segment_id_example' # str | The segmentId. # str | The segmentId.
    request_body = '''['request_body_example']''' # List[str] | A list of segment ids that you wish to publish
    publish_all = True # bool | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to True) # bool | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to True)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Publish segment by id
        new_request_body = RequestBody.from_json(request_body)
        DataSegmentationApi(api_client).publish_data_segment_v1(segment_id=segment_id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # DataSegmentationApi(api_client).publish_data_segment_v1(segment_id, new_request_body, publish_all, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling DataSegmentationApi->publish_data_segment_v1: %s\n" % e)
```



[[Back to top]](#) 



