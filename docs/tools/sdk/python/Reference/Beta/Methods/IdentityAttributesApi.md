---
id: beta-identity-attributes
title: Identity_Attributes
pagination_label: Identity_Attributes
sidebar_label: Identity_Attributes
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identity_Attributes', 'BetaIdentity_Attributes'] 
slug: /tools/sdk/python/beta/methods/identity-attributes
tags: ['SDK', 'Software Development Kit', 'Identity_Attributes', 'BetaIdentity_Attributes']
---

# sailpoint.beta.IdentityAttributesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute**](#create-identity-attribute) | **POST** `/identity-attributes` | Create Identity Attribute
[**delete-identity-attribute**](#delete-identity-attribute) | **DELETE** `/identity-attributes/{name}` | Delete Identity Attribute
[**delete-identity-attributes-in-bulk**](#delete-identity-attributes-in-bulk) | **DELETE** `/identity-attributes/bulk-delete` | Bulk delete Identity Attributes
[**get-identity-attribute**](#get-identity-attribute) | **GET** `/identity-attributes/{name}` | Get Identity Attribute
[**list-identity-attributes**](#list-identity-attributes) | **GET** `/identity-attributes` | List Identity Attributes
[**put-identity-attribute**](#put-identity-attribute) | **PUT** `/identity-attributes/{name}` | Update Identity Attribute


## create-identity-attribute
Create Identity Attribute
Use this API to create a new identity attribute.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-identity-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identity_attribute | [**IdentityAttribute**](../models/identity-attribute) | True  | 

### Return type
[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | The identity attribute was created successfully. | IdentityAttribute |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_attribute import IdentityAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    identity_attribute = {
          "standard" : false,
          "system" : false,
          "sources" : [ {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          }, {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          } ],
          "displayName" : "Cost Center",
          "name" : "costCenter",
          "type" : "string",
          "searchable" : false,
          "multi" : false
        } # IdentityAttribute | 

    try:
        # Create Identity Attribute
        new_identity_attribute = IdentityAttribute()
        new_identity_attribute.from_json(identity_attribute)
        results =IdentityAttributesApi(api_client).create_identity_attribute(new_identity_attribute)
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).create_identity_attribute(new_identity_attribute)
        print("The response of IdentityAttributesApi->create_identity_attribute:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling IdentityAttributesApi->create_identity_attribute: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-attribute
Delete Identity Attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity-attribute)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.beta.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    name = 'displayName' # str | The attribute's technical name. # str | The attribute's technical name.

    try:
        # Delete Identity Attribute
        
        IdentityAttributesApi(api_client).delete_identity_attribute(name)
        # Below is a request that includes all optional parameters
        # IdentityAttributesApi(api_client).delete_identity_attribute(name)
        except Exception as e:
        print("Exception when calling IdentityAttributesApi->delete_identity_attribute: %s\n" % e)
```



[[Back to top]](#) 

## delete-identity-attributes-in-bulk
Bulk delete Identity Attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-identity-attributes-in-bulk)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | identity_attribute_names | [**IdentityAttributeNames**](../models/identity-attribute-names) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_attribute_names import IdentityAttributeNames
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    identity_attribute_names = {
          "ids" : [ "name", "displayName" ]
        } # IdentityAttributeNames | 

    try:
        # Bulk delete Identity Attributes
        new_identity_attribute_names = IdentityAttributeNames()
        new_identity_attribute_names.from_json(identity_attribute_names)
        IdentityAttributesApi(api_client).delete_identity_attributes_in_bulk(new_identity_attribute_names)
        # Below is a request that includes all optional parameters
        # IdentityAttributesApi(api_client).delete_identity_attributes_in_bulk(new_identity_attribute_names)
        except Exception as e:
        print("Exception when calling IdentityAttributesApi->delete_identity_attributes_in_bulk: %s\n" % e)
```



[[Back to top]](#) 

## get-identity-attribute
Get Identity Attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-identity-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The attribute's technical name.

### Return type
[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity attribute with the given name | IdentityAttribute |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_attribute import IdentityAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    name = 'displayName' # str | The attribute's technical name. # str | The attribute's technical name.

    try:
        # Get Identity Attribute
        
        results =IdentityAttributesApi(api_client).get_identity_attribute(name)
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).get_identity_attribute(name)
        print("The response of IdentityAttributesApi->get_identity_attribute:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling IdentityAttributesApi->get_identity_attribute: %s\n" % e)
```



[[Back to top]](#) 

## list-identity-attributes
List Identity Attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-identity-attributes)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | include_system | **bool** |   (optional) (default to False) | Include 'system' attributes in the response.
  Query | include_silent | **bool** |   (optional) (default to False) | Include 'silent' attributes in the response.
  Query | searchable_only | **bool** |   (optional) (default to False) | Include only 'searchable' attributes in the response.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**List[IdentityAttribute]**](../models/identity-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of identity attributes. | List[IdentityAttribute] |  -  |
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
import sailpoint.beta
from sailpoint.beta.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_attribute import IdentityAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    include_system = False # bool | Include 'system' attributes in the response. (optional) (default to False) # bool | Include 'system' attributes in the response. (optional) (default to False)
    include_silent = False # bool | Include 'silent' attributes in the response. (optional) (default to False) # bool | Include 'silent' attributes in the response. (optional) (default to False)
    searchable_only = False # bool | Include only 'searchable' attributes in the response. (optional) (default to False) # bool | Include only 'searchable' attributes in the response. (optional) (default to False)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)

    try:
        # List Identity Attributes
        
        results =IdentityAttributesApi(api_client).list_identity_attributes()
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).list_identity_attributes(include_system, include_silent, searchable_only, count)
        print("The response of IdentityAttributesApi->list_identity_attributes:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling IdentityAttributesApi->list_identity_attributes: %s\n" % e)
```



[[Back to top]](#) 

## put-identity-attribute
Update Identity Attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.   A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-identity-attribute)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The attribute's technical name.
 Body  | identity_attribute | [**IdentityAttribute**](../models/identity-attribute) | True  | 

### Return type
[**IdentityAttribute**](../models/identity-attribute)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The identity attribute was updated successfully | IdentityAttribute |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.api.identity_attributes_api import IdentityAttributesApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.identity_attribute import IdentityAttribute
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    name = 'displayName' # str | The attribute's technical name. # str | The attribute's technical name.
    identity_attribute = {
          "standard" : false,
          "system" : false,
          "sources" : [ {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          }, {
            "type" : "rule",
            "properties" : {
              "ruleType" : "IdentityAttribute",
              "ruleName" : "Cloud Promote Identity Attribute"
            }
          } ],
          "displayName" : "Cost Center",
          "name" : "costCenter",
          "type" : "string",
          "searchable" : false,
          "multi" : false
        } # IdentityAttribute | 

    try:
        # Update Identity Attribute
        new_identity_attribute = IdentityAttribute()
        new_identity_attribute.from_json(identity_attribute)
        results =IdentityAttributesApi(api_client).put_identity_attribute(name, new_identity_attribute)
        # Below is a request that includes all optional parameters
        # results = IdentityAttributesApi(api_client).put_identity_attribute(name, new_identity_attribute)
        print("The response of IdentityAttributesApi->put_identity_attribute:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling IdentityAttributesApi->put_identity_attribute: %s\n" % e)
```



[[Back to top]](#) 



