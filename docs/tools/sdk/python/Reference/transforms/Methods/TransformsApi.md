---
id: transforms
title: Transforms
pagination_label: Transforms
sidebar_label: Transforms
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Transforms', 'Transforms'] 
slug: /tools/sdk/python/transforms/methods/transforms
tags: ['SDK', 'Software Development Kit', 'Transforms', 'Transforms']
---

# sailpoint.transforms.TransformsApi
  The purpose of this API is to expose functionality for the manipulation of Transform objects.
Transforms are a form of configurable objects which define an easy way to manipulate attribute data without having
to write code. 

Refer to [Transforms](https://developer.sailpoint.com/docs/extensibility/transforms/) for more information about transforms.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-transform-v1**](#create-transform-v1) | **POST** `/transforms/v1` | Create transform
[**delete-transform-v1**](#delete-transform-v1) | **DELETE** `/transforms/v1/{id}` | Delete a transform
[**get-transform-v1**](#get-transform-v1) | **GET** `/transforms/v1/{id}` | Transform by id
[**list-transforms-v1**](#list-transforms-v1) | **GET** `/transforms/v1` | List transforms
[**update-transform-v1**](#update-transform-v1) | **PUT** `/transforms/v1/{id}` | Update a transform


## create-transform-v1
Create transform
Creates a new transform object immediately. By default, the internal flag is set to false to indicate that this is a custom transform. Only SailPoint employees have the ability to create a transform with internal set to true. Newly created Transforms can be used in the Identity Profile mappings within the UI.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-transform-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | transform | [**Transform**](../models/transform) | True  | The transform to be created.

### Return type
[**Transformread**](../models/transformread)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Indicates the transform was successfully created and returns its representation. | Transformread |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.transforms.api.transforms_api import TransformsApi
from sailpoint.transforms.api_client import ApiClient
from sailpoint.transforms.models.transform import Transform
from sailpoint.transforms.models.transformread import Transformread
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    transform = '''{"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM dd yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}''' # Transform | The transform to be created.

    try:
        # Create transform
        new_transform = Transform.from_json(transform)
        results = TransformsApi(api_client).create_transform_v1(transform=new_transform)
        # Below is a request that includes all optional parameters
        # results = TransformsApi(api_client).create_transform_v1(new_transform)
        print("The response of TransformsApi->create_transform_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TransformsApi->create_transform_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-transform-v1
Delete a transform
Deletes the transform specified by the given ID. Attempting to delete a transform that is used in one or more Identity Profile mappings will result in an error. If this occurs, you must first remove the transform from all mappings before deleting the transform.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-transform-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the transform to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.transforms.api.transforms_api import TransformsApi
from sailpoint.transforms.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2cd78adghjkja34jh2b1hkjhasuecd' # str | ID of the transform to delete # str | ID of the transform to delete

    try:
        # Delete a transform
        
        TransformsApi(api_client).delete_transform_v1(id=id)
        # Below is a request that includes all optional parameters
        # TransformsApi(api_client).delete_transform_v1(id)
    except Exception as e:
        print("Exception when calling TransformsApi->delete_transform_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-transform-v1
Transform by id
This API returns the transform specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-transform-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the transform to retrieve

### Return type
[**Transformread**](../models/transformread)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Transform with the given ID | Transformread |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.transforms.api.transforms_api import TransformsApi
from sailpoint.transforms.api_client import ApiClient
from sailpoint.transforms.models.transformread import Transformread
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2cd78adghjkja34jh2b1hkjhasuecd' # str | ID of the transform to retrieve # str | ID of the transform to retrieve

    try:
        # Transform by id
        
        results = TransformsApi(api_client).get_transform_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = TransformsApi(api_client).get_transform_v1(id)
        print("The response of TransformsApi->get_transform_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TransformsApi->get_transform_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-transforms-v1
List transforms
Gets a list of all saved transform objects.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-transforms-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | name | **str** |   (optional) | Name of the transform to retrieve from the list.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw*

### Return type
[**List[Transformread]**](../models/transformread)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of transforms matching the given criteria. | List[Transformread] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.transforms.api.transforms_api import TransformsApi
from sailpoint.transforms.api_client import ApiClient
from sailpoint.transforms.models.transformread import Transformread
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    name = 'ExampleTransformName123' # str | Name of the transform to retrieve from the list. (optional) # str | Name of the transform to retrieve from the list. (optional)
    filters = 'name eq \"Uppercase\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **internal**: *eq*  **name**: *eq, sw* (optional)

    try:
        # List transforms
        
        results = TransformsApi(api_client).list_transforms_v1()
        # Below is a request that includes all optional parameters
        # results = TransformsApi(api_client).list_transforms_v1(offset, limit, count, name, filters)
        print("The response of TransformsApi->list_transforms_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TransformsApi->list_transforms_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-transform-v1
Update a transform
Replaces the transform specified by the given ID with the transform provided in the request body. Only the "attributes" field is mutable. Attempting to change other properties (ex. "name" and "type") will result in an error.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-transform-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | ID of the transform to update
 Body  | transform | [**Transform**](../models/transform) |   (optional) | The updated transform object. Must include \"name\", \"type\", and \"attributes\" fields, but \"name\" and \"type\" must not be modified.

### Return type
[**Transformread**](../models/transformread)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Indicates the transform was successfully updated and returns its new representation. | Transformread |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListTransformsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListTransformsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.transforms.api.transforms_api import TransformsApi
from sailpoint.transforms.api_client import ApiClient
from sailpoint.transforms.models.transform import Transform
from sailpoint.transforms.models.transformread import Transformread
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    id = '2cd78adghjkja34jh2b1hkjhasuecd' # str | ID of the transform to update # str | ID of the transform to update
    transform = '''{"name":"Timestamp To Date","type":"dateFormat","attributes":{"inputFormat":"MMM-dd-yyyy, HH:mm:ss.SSS","outputFormat":"yyyy/dd/MM"}}''' # Transform | The updated transform object. Must include \"name\", \"type\", and \"attributes\" fields, but \"name\" and \"type\" must not be modified. (optional)

    try:
        # Update a transform
        
        results = TransformsApi(api_client).update_transform_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = TransformsApi(api_client).update_transform_v1(id, new_transform)
        print("The response of TransformsApi->update_transform_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TransformsApi->update_transform_v1: %s\n" % e)
```



[[Back to top]](#) 



