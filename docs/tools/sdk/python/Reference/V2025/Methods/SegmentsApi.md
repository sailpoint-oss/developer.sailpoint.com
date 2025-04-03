---
id: v2025-segments
title: Segments
pagination_label: Segments
sidebar_label: Segments
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Segments', 'V2025Segments'] 
slug: /tools/sdk/python/v2025/methods/segments
tags: ['SDK', 'Software Development Kit', 'Segments', 'V2025Segments']
---

# sailpoint.v2025.SegmentsApi
  Use this API to implement and customize access request segment functionality. 
With this functionality in place, administrators can create and manage access request segments. 
Segments provide organizations with a way to make the access their users have even more granular - this can simply the access request process for the organization&#39;s users and improves security by reducing the risk of overprovisoning access. 

Segments represent sets of identities, all grouped by specified identity attributes, who are only able to see and access the access items associated with their segments.
For example, administrators could group all their organization&#39;s London office employees into one segment, &quot;London Office Employees,&quot; by their shared location. 
The administrators could then define the access items the London employees would need, and the identities in the &quot;London Office Employees&quot; would then only be able to see and access those items.

In Identity Security Cloud, administrators can use the &#39;Access&#39; drop-down menu and select &#39;Segments&#39; to reach the &#39;Access Requests Segments&#39; page. 
This page lists all the existing access request segments, along with their statuses, enabled or disabled. 
Administrators can use this page to create, edit, enable, disable, and delete segments. 
To create a segment, an administrator must provide a name, define the identities grouped in the segment, and define the items the identities in the segment can access.
These items can be access profiles, roles, or entitlements. 

When administrators use the API to create and manage segments, they use a JSON expression in the &#x60;visibilityCriteria&#x60; object to define the segment&#39;s identities and access items. 

Refer to [Managing Access Request Segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) for more information about segments in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-segment**](#create-segment) | **POST** `/segments` | Create Segment
[**delete-segment**](#delete-segment) | **DELETE** `/segments/{id}` | Delete Segment by ID
[**get-segment**](#get-segment) | **GET** `/segments/{id}` | Get Segment by ID
[**list-segments**](#list-segments) | **GET** `/segments` | List Segments
[**patch-segment**](#patch-segment) | **PATCH** `/segments/{id}` | Update Segment


## create-segment
Create Segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | segment | [**Segment**](../models/segment) | True  | 

### Return type
[**Segment**](../models/segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Segment created | Segment |  -  |
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
from sailpoint.v2025.api.segments_api import SegmentsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.segment import Segment
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    segment = '''{
          "owner" : {
            "name" : "support",
            "id" : "2c9180a46faadee4016fb4e018c20639",
            "type" : "IDENTITY"
          },
          "created" : "2020-01-01T00:00:00Z",
          "visibilityCriteria" : {
            "expression" : {
              "children" : [ ],
              "attribute" : "location",
              "value" : {
                "type" : "STRING",
                "value" : "Austin"
              },
              "operator" : "EQUALS"
            }
          },
          "name" : "segment-xyz",
          "modified" : "2020-01-01T00:00:00Z",
          "description" : "This segment represents xyz",
          "active" : true,
          "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
        }''' # Segment | 

    try:
        # Create Segment
        new_segment = Segment.from_json(segment)
        results = SegmentsApi(api_client).create_segment(segment=new_segment)
        # Below is a request that includes all optional parameters
        # results = SegmentsApi(api_client).create_segment(new_segment)
        print("The response of SegmentsApi->create_segment:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SegmentsApi->create_segment: %s\n" % e)
```



[[Back to top]](#) 

## delete-segment
Delete Segment by ID
This API deletes the segment specified by the given ID.
>**Note:** that segment deletion may take some time to become effective.    

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The segment ID to delete.

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
from sailpoint.v2025.api.segments_api import SegmentsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The segment ID to delete. # str | The segment ID to delete.

    try:
        # Delete Segment by ID
        
        SegmentsApi(api_client).delete_segment(id=id)
        # Below is a request that includes all optional parameters
        # SegmentsApi(api_client).delete_segment(id)
    except Exception as e:
        print("Exception when calling SegmentsApi->delete_segment: %s\n" % e)
```



[[Back to top]](#) 

## get-segment
Get Segment by ID
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The segment ID to retrieve.

### Return type
[**Segment**](../models/segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Segment | Segment |  -  |
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
from sailpoint.v2025.api.segments_api import SegmentsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.segment import Segment
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The segment ID to retrieve. # str | The segment ID to retrieve.

    try:
        # Get Segment by ID
        
        results = SegmentsApi(api_client).get_segment(id=id)
        # Below is a request that includes all optional parameters
        # results = SegmentsApi(api_client).get_segment(id)
        print("The response of SegmentsApi->get_segment:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SegmentsApi->get_segment: %s\n" % e)
```



[[Back to top]](#) 

## list-segments
List Segments
This API returns a list of all segments. 

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-segments)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Segment]**](../models/segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all segments | List[Segment] |  -  |
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
from sailpoint.v2025.api.segments_api import SegmentsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.segment import Segment
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List Segments
        
        results = SegmentsApi(api_client).list_segments()
        # Below is a request that includes all optional parameters
        # results = SegmentsApi(api_client).list_segments(limit, offset, count)
        print("The response of SegmentsApi->list_segments:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SegmentsApi->list_segments: %s\n" % e)
```



[[Back to top]](#) 

## patch-segment
Update Segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
>**Note:** Changes to a segment may take some time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-segment)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The segment ID to modify.
 Body  | request_body | **[]object** | True  | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 

### Return type
[**Segment**](../models/segment)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the PATCH operation succeeded, and returns the segment&#39;s new representation. | Segment |  -  |
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
from sailpoint.v2025.api.segments_api import SegmentsApi
from sailpoint.v2025.api_client import ApiClient
from sailpoint.v2025.models.segment import Segment
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The segment ID to modify. # str | The segment ID to modify.
    request_body = '''[{op=replace, path=/visibilityCriteria, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]''' # List[object] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 

    try:
        # Update Segment
        new_request_body = RequestBody.from_json(request_body)
        results = SegmentsApi(api_client).patch_segment(id=id, request_body=new_request_body)
        # Below is a request that includes all optional parameters
        # results = SegmentsApi(api_client).patch_segment(id, new_request_body)
        print("The response of SegmentsApi->patch_segment:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling SegmentsApi->patch_segment: %s\n" % e)
```



[[Back to top]](#) 



