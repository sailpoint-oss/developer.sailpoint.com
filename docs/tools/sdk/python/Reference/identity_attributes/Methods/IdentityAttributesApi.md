---
id: identity-attributes
title: Identity_Attributes
pagination_label: Identity_Attributes
sidebar_label: Identity_Attributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identity_Attributes', 'Identity_Attributes'] 
slug: /tools/sdk/python/identity-attributes/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'Identity_Attributes', 'Identity_Attributes']
---

# sailpoint.identity_attributes.IdentityAttributesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute-v1**](#create-identity-attribute-v1) | **POST** `/identity-attributes/v1` | Create identity attribute
[**delete-identity-attribute-v1**](#delete-identity-attribute-v1) | **DELETE** `/identity-attributes/v1/{name}` | Delete identity attribute
[**delete-identity-attributes-in-bulk-v1**](#delete-identity-attributes-in-bulk-v1) | **DELETE** `/identity-attributes/v1/bulk-delete` | Bulk delete identity attributes
[**get-identity-attribute-v1**](#get-identity-attribute-v1) | **GET** `/identity-attributes/v1/{name}` | Get identity attribute
[**list-identity-attributes-v1**](#list-identity-attributes-v1) | **GET** `/identity-attributes/v1` | List identity attributes
[**put-identity-attribute-v1**](#put-identity-attribute-v1) | **PUT** `/identity-attributes/v1/{name}` | Update identity attribute


## create-identity-attribute-v1
Create identity attribute
Use this API to create a new identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-identity-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identityattribute2 | [**Identityattribute2**](../models/identityattribute2) | True  | 

### Return type
[**Identityattribute2**](../models/identityattribute2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The identity attribute was created successfully. | Identityattribute2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_attributes.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.identity_attributes.api_client import ApiClient
from sailpoint.identity_attributes.models.identityattribute2 import Identityattribute2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identityattribute2 = '''sailpoint.identity_attributes.Identityattribute2()''' # Identityattribute2 | 

    try:
        # Create identity attribute
        new_identityattribute2 = Identityattribute2.from_json(identityattribute2)
        results = IdentityAttributesApi(api_client).create_identity_attribute_v1(identityattribute2=new_identityattribute2)
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).create_identity_attribute_v1(new_identityattribute2)
        print("The response of IdentityAttributesApi->create_identity_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityAttributesApi->create_identity_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-attribute-v1
Delete identity attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The attribute's technical name.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_attributes.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.identity_attributes.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'displayName' # str | The attribute's technical name. # str | The attribute's technical name.

    try:
        # Delete identity attribute
        
        IdentityAttributesApi(api_client).delete_identity_attribute_v1(name=name)
        # Below is a request that includes all optional parameters
        # IdentityAttributesApi(api_client).delete_identity_attribute_v1(name)
    except Exception as e:
        print("Exception when calling IdentityAttributesApi->delete_identity_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-attributes-in-bulk-v1
Bulk delete identity attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-identity-attributes-in-bulk-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identityattributenames | [**Identityattributenames**](../models/identityattributenames) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_attributes.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.identity_attributes.api_client import ApiClient
from sailpoint.identity_attributes.models.identityattributenames import Identityattributenames
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    identityattributenames = '''sailpoint.identity_attributes.Identityattributenames()''' # Identityattributenames | 

    try:
        # Bulk delete identity attributes
        new_identityattributenames = Identityattributenames.from_json(identityattributenames)
        IdentityAttributesApi(api_client).delete_identity_attributes_in_bulk_v1(identityattributenames=new_identityattributenames)
        # Below is a request that includes all optional parameters
        # IdentityAttributesApi(api_client).delete_identity_attributes_in_bulk_v1(new_identityattributenames)
    except Exception as e:
        print("Exception when calling IdentityAttributesApi->delete_identity_attributes_in_bulk_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-attribute-v1
Get identity attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The attribute's technical name.

### Return type
[**Identityattribute2**](../models/identityattribute2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity attribute with the given name | Identityattribute2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_attributes.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.identity_attributes.api_client import ApiClient
from sailpoint.identity_attributes.models.identityattribute2 import Identityattribute2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'displayName' # str | The attribute's technical name. # str | The attribute's technical name.

    try:
        # Get identity attribute
        
        results = IdentityAttributesApi(api_client).get_identity_attribute_v1(name=name)
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).get_identity_attribute_v1(name)
        print("The response of IdentityAttributesApi->get_identity_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityAttributesApi->get_identity_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-attributes-v1
List identity attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-attributes-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | include_system | **bool** |   (optional) (default to False) | Include 'system' attributes in the response.
  Query | include_silent | **bool** |   (optional) (default to False) | Include 'silent' attributes in the response.
  Query | searchable_only | **bool** |   (optional) (default to False) | Include only 'searchable' attributes in the response.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[Identityattribute2]**](../models/identityattribute2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identity attributes. | List[Identityattribute2] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_attributes.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.identity_attributes.api_client import ApiClient
from sailpoint.identity_attributes.models.identityattribute2 import Identityattribute2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    include_system = False # bool | Include 'system' attributes in the response. (optional) (default to False) # bool | Include 'system' attributes in the response. (optional) (default to False)
    include_silent = False # bool | Include 'silent' attributes in the response. (optional) (default to False) # bool | Include 'silent' attributes in the response. (optional) (default to False)
    searchable_only = False # bool | Include only 'searchable' attributes in the response. (optional) (default to False) # bool | Include only 'searchable' attributes in the response. (optional) (default to False)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List identity attributes
        
        results = IdentityAttributesApi(api_client).list_identity_attributes_v1()
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).list_identity_attributes_v1(include_system, include_silent, searchable_only, count)
        print("The response of IdentityAttributesApi->list_identity_attributes_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityAttributesApi->list_identity_attributes_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-identity-attribute-v1
Update identity attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-identity-attribute-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The attribute's technical name.
 Body  | identityattribute2 | [**Identityattribute2**](../models/identityattribute2) | True  | 

### Return type
[**Identityattribute2**](../models/identityattribute2)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity attribute was updated successfully | Identityattribute2 |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListIdentityAttributesV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListIdentityAttributesV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.identity_attributes.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.identity_attributes.api_client import ApiClient
from sailpoint.identity_attributes.models.identityattribute2 import Identityattribute2
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'displayName' # str | The attribute's technical name. # str | The attribute's technical name.
    identityattribute2 = '''sailpoint.identity_attributes.Identityattribute2()''' # Identityattribute2 | 

    try:
        # Update identity attribute
        new_identityattribute2 = Identityattribute2.from_json(identityattribute2)
        results = IdentityAttributesApi(api_client).put_identity_attribute_v1(name=name, identityattribute2=new_identityattribute2)
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).put_identity_attribute_v1(name, new_identityattribute2)
        print("The response of IdentityAttributesApi->put_identity_attribute_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling IdentityAttributesApi->put_identity_attribute_v1: %s\n" % e)
```



[[Back to top]](#) 



