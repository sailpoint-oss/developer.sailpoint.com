---
id: beta-tagged-objects
title: Tagged_Objects
pagination_label: Tagged_Objects
sidebar_label: Tagged_Objects
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Tagged_Objects', 'BetaTagged_Objects'] 
slug: /tools/sdk/python/beta/methods/tagged-objects
tags: ['SDK', 'Software Development Kit', 'Tagged_Objects', 'BetaTagged_Objects']
---

# sailpoint.beta.TaggedObjectsApi
  Use this API to implement object tagging functionality. 
With object tagging functionality in place, any user in an organization can use tags as a way to group objects together and find them more quickly when the user searches Identity Security Cloud. 

In Identity Security Cloud, users can search their tenants for information and add tags objects they find.
Tagging an object provides users with a way of grouping objects together and makes it easier to find these objects in the future. 

For example, if a user is searching for an entitlement that grants a risky level of access to Active Directory, it&#39;s possible that the user may have to search through hundreds of entitlements to find the correct one. 
Once the user finds that entitlement, the user can add a tag to the entitlement, &quot;AD_RISKY&quot; to make it easier to find the entitlement again.
The user can add the same tag to multiple objects the user wants to group together for an easy future search, and the user can also do so in bulk.
When the user wants to find that tagged entitlement again, the user can search for &quot;tags:AD_RISKY&quot; to find all objects with that tag. 

With the API, you can tag even more different object types than you can in Identity Security Cloud (access profiles, entitlements, identities, and roles). 
You can use the API to tag all these objects:

- Access profiles 

- Applications 

- Certification campaigns

- Entitlements

- Identities 

- Roles 

- SOD (separation of duties) policies

- Sources 

You can also use the API to directly find, create, and manage tagged objects without using search queries. 

There are limits to tags: 

- You can have up to 500 different tags in your tenant.

- You can apply up to 30 tags to one object. 

- You can have up to 10,000 tag associations, pairings of 1 tag to 1 object, in your tenant. 

Because of these limits, it is recommended that you work with your governance experts and security teams to establish a list of tags that are most expressive of governance objects and access managed by Identity Security Cloud. 

These are the types of information often expressed in tags: 

- Affected departments

- Compliance and regulatory categories 

- Remediation urgency levels 

- Risk levels 

Refer to [Tagging Items in Search](https://documentation.sailpoint.com/saas/help/search/index.html?h&#x3D;tags#tagging-items-in-search) for more information about tagging objects in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-tagged-object**](#delete-tagged-object) | **DELETE** `/tagged-objects/{type}/{id}` | Delete object tags
[**delete-tags-to-many-object**](#delete-tags-to-many-object) | **POST** `/tagged-objects/bulk-remove` | Remove tags from multiple objects
[**get-tagged-object**](#get-tagged-object) | **GET** `/tagged-objects/{type}/{id}` | Get tagged object
[**list-tagged-objects**](#list-tagged-objects) | **GET** `/tagged-objects` | List tagged objects
[**list-tagged-objects-by-type**](#list-tagged-objects-by-type) | **GET** `/tagged-objects/{type}` | List tagged objects by type
[**put-tagged-object**](#put-tagged-object) | **PUT** `/tagged-objects/{type}/{id}` | Update tagged object
[**set-tag-to-object**](#set-tag-to-object) | **POST** `/tagged-objects` | Add tag to object
[**set-tags-to-many-objects**](#set-tags-to-many-objects) | **POST** `/tagged-objects/bulk-add` | Tag multiple objects


## delete-tagged-object
Delete object tags
Delete all tags from a tagged object.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-tagged-object)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | type | **str** | True  | The type of object to delete tags from.
Path   | id | **str** | True  | The ID of the object to delete tags from.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content. |  |  -  |
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
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    type = 'ROLE' # str | The type of object to delete tags from. # str | The type of object to delete tags from.
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the object to delete tags from. # str | The ID of the object to delete tags from.

    try:
        # Delete object tags
        
        TaggedObjectsApi(api_client).delete_tagged_object(type=type, id=id)
        # Below is a request that includes all optional parameters
        # TaggedObjectsApi(api_client).delete_tagged_object(type, id)
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->delete_tagged_object: %s\n" % e)
```



[[Back to top]](#) 

## delete-tags-to-many-object
Remove tags from multiple objects
This API removes tags from multiple objects.

A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-tags-to-many-object)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_tagged_object | [**BulkTaggedObject**](../models/bulk-tagged-object) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.bulk_tagged_object import BulkTaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_tagged_object = '''{
          "objectRefs" : [ {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "operation" : "MERGE",
          "tags" : [ "BU_FINANCE", "PCI" ]
        }''' # BulkTaggedObject | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

    try:
        # Remove tags from multiple objects
        new_bulk_tagged_object = BulkTaggedObject.from_json(bulk_tagged_object)
        TaggedObjectsApi(api_client).delete_tags_to_many_object(bulk_tagged_object=new_bulk_tagged_object)
        # Below is a request that includes all optional parameters
        # TaggedObjectsApi(api_client).delete_tags_to_many_object(new_bulk_tagged_object)
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->delete_tags_to_many_object: %s\n" % e)
```



[[Back to top]](#) 

## get-tagged-object
Get tagged object
This gets a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-tagged-object)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | type | **str** | True  | The type of tagged object to retrieve.
Path   | id | **str** | True  | The ID of the object reference to retrieve.

### Return type
[**TaggedObject**](../models/tagged-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tagged object by type and ID. | TaggedObject |  -  |
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
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tagged_object import TaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    type = 'ROLE' # str | The type of tagged object to retrieve. # str | The type of tagged object to retrieve.
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the object reference to retrieve. # str | The ID of the object reference to retrieve.

    try:
        # Get tagged object
        
        results = TaggedObjectsApi(api_client).get_tagged_object(type=type, id=id)
        # Below is a request that includes all optional parameters
        # results = TaggedObjectsApi(api_client).get_tagged_object(type, id)
        print("The response of TaggedObjectsApi->get_tagged_object:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->get_tagged_object: %s\n" % e)
```



[[Back to top]](#) 

## list-tagged-objects
List tagged objects
This API returns a list of all tagged objects.

Any authenticated token may be used to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-tagged-objects)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in*

### Return type
[**List[TaggedObject]**](../models/tagged-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all tagged objects. | List[TaggedObject] |  -  |
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
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tagged_object import TaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'tagName eq \"BU_FINANCE\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq, in*  **objectRef.type**: *eq, in*  **tagName**: *eq, in* (optional)

    try:
        # List tagged objects
        
        results = TaggedObjectsApi(api_client).list_tagged_objects()
        # Below is a request that includes all optional parameters
        # results = TaggedObjectsApi(api_client).list_tagged_objects(limit, offset, count, filters)
        print("The response of TaggedObjectsApi->list_tagged_objects:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->list_tagged_objects: %s\n" % e)
```



[[Back to top]](#) 

## list-tagged-objects-by-type
List tagged objects by type
This API returns a list of all tagged objects by type.

Any authenticated token may be used to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-tagged-objects-by-type)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | type | **str** | True  | The type of tagged object to retrieve.
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq*

### Return type
[**List[TaggedObject]**](../models/tagged-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all tagged objects for specified type. | List[TaggedObject] |  -  |
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
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tagged_object import TaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    type = 'ROLE' # str | The type of tagged object to retrieve. # str | The type of tagged object to retrieve.
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    filters = 'objectRef.id eq \"2c91808568c529c60168cca6f90c1313\"' # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional) # str | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **objectRef.id**: *eq*  **objectRef.type**: *eq* (optional)

    try:
        # List tagged objects by type
        
        results = TaggedObjectsApi(api_client).list_tagged_objects_by_type(type=type)
        # Below is a request that includes all optional parameters
        # results = TaggedObjectsApi(api_client).list_tagged_objects_by_type(type, limit, offset, count, filters)
        print("The response of TaggedObjectsApi->list_tagged_objects_by_type:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->list_tagged_objects_by_type: %s\n" % e)
```



[[Back to top]](#) 

## put-tagged-object
Update tagged object
This updates a tagged object for the specified type.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-tagged-object)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | type | **str** | True  | The type of tagged object to update.
Path   | id | **str** | True  | The ID of the object reference to update.
 Body  | tagged_object | [**TaggedObject**](../models/tagged-object) | True  | 

### Return type
[**TaggedObject**](../models/tagged-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Tagged object by type and ID. | TaggedObject |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tagged_object import TaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    type = 'ROLE' # str | The type of tagged object to update. # str | The type of tagged object to update.
    id = 'ef38f94347e94562b5bb8424a56397d8' # str | The ID of the object reference to update. # str | The ID of the object reference to update.
    tagged_object = '''{
          "objectRef" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "tags" : [ "BU_FINANCE", "PCI" ]
        }''' # TaggedObject | 

    try:
        # Update tagged object
        new_tagged_object = TaggedObject.from_json(tagged_object)
        results = TaggedObjectsApi(api_client).put_tagged_object(type=type, id=id, tagged_object=new_tagged_object)
        # Below is a request that includes all optional parameters
        # results = TaggedObjectsApi(api_client).put_tagged_object(type, id, new_tagged_object)
        print("The response of TaggedObjectsApi->put_tagged_object:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->put_tagged_object: %s\n" % e)
```



[[Back to top]](#) 

## set-tag-to-object
Add tag to object
This adds a tag to an object.

Any authenticated token may be used to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-tag-to-object)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | tagged_object | [**TaggedObject**](../models/tagged-object) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Created. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.tagged_object import TaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    tagged_object = '''{
          "objectRef" : {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          },
          "tags" : [ "BU_FINANCE", "PCI" ]
        }''' # TaggedObject | 

    try:
        # Add tag to object
        new_tagged_object = TaggedObject.from_json(tagged_object)
        TaggedObjectsApi(api_client).set_tag_to_object(tagged_object=new_tagged_object)
        # Below is a request that includes all optional parameters
        # TaggedObjectsApi(api_client).set_tag_to_object(new_tagged_object)
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->set_tag_to_object: %s\n" % e)
```



[[Back to top]](#) 

## set-tags-to-many-objects
Tag multiple objects
This API adds tags to multiple objects.

A token with API, CERT_ADMIN, ORG_ADMIN, REPORT_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-tags-to-many-objects)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | bulk_tagged_object | [**BulkTaggedObject**](../models/bulk-tagged-object) | True  | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

### Return type
[**BulkTaggedObject**](../models/bulk-tagged-object)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Request succeeded. | BulkTaggedObject |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.tagged_objects_api import TaggedObjectsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.bulk_tagged_object import BulkTaggedObject
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    bulk_tagged_object = '''{
          "objectRefs" : [ {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          }, {
            "name" : "William Wilson",
            "id" : "2c91808568c529c60168cca6f90c1313",
            "type" : "IDENTITY"
          } ],
          "operation" : "MERGE",
          "tags" : [ "BU_FINANCE", "PCI" ]
        }''' # BulkTaggedObject | Supported object types are ACCESS_PROFILE, APPLICATION, CAMPAIGN, ENTITLEMENT, IDENTITY, ROLE, SOD_POLICY, SOURCE.

    try:
        # Tag multiple objects
        new_bulk_tagged_object = BulkTaggedObject.from_json(bulk_tagged_object)
        results = TaggedObjectsApi(api_client).set_tags_to_many_objects(bulk_tagged_object=new_bulk_tagged_object)
        # Below is a request that includes all optional parameters
        # results = TaggedObjectsApi(api_client).set_tags_to_many_objects(new_bulk_tagged_object)
        print("The response of TaggedObjectsApi->set_tags_to_many_objects:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling TaggedObjectsApi->set_tags_to_many_objects: %s\n" % e)
```



[[Back to top]](#) 



