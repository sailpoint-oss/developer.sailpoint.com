---
id: branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Branding', 'Branding'] 
slug: /tools/sdk/python/branding/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding', 'Branding']
---

# sailpoint.branding.BrandingApi
  Use this API to implement and customize branding functionality. 
With this functionality in place, administrators can get and manage existing branding items, and they can also create new branding items and configure them for use throughout Identity Security Cloud. 
The Branding APIs provide administrators with a way to customize branding items. 
This customization includes details like their colors, logos, and other information. 
Refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) for more information about certifications.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-branding-item-v1**](#create-branding-item-v1) | **POST** `/brandings/v1` | Create a branding item
[**delete-branding-v1**](#delete-branding-v1) | **DELETE** `/brandings/v1/{name}` | Delete a branding item
[**get-branding-list-v1**](#get-branding-list-v1) | **GET** `/brandings/v1` | List of branding items
[**get-branding-v1**](#get-branding-v1) | **GET** `/brandings/v1/{name}` | Get a branding item
[**set-branding-item-v1**](#set-branding-item-v1) | **PUT** `/brandings/v1/{name}` | Update a branding item


## create-branding-item-v1
Create a branding item
This API endpoint creates a branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-branding-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | name | **str** | True  | name of branding item
   | product_name | **str** | True  | product name
   | action_button_color | **str** |   (optional) | hex value of color for action button
   | active_link_color | **str** |   (optional) | hex value of color for link
   | navigation_color | **str** |   (optional) | hex value of color for navigation bar
   | email_from_address | **str** |   (optional) | email from address
   | login_informational_message | **str** |   (optional) | login information message
   | file_standard | **bytearray** |   (optional) | png file with logo

### Return type
[**Brandingitem**](../models/brandingitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Branding item created | Brandingitem |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.branding.api.branding_api import BrandingApi
from sailpoint.branding.api_client import ApiClient
from sailpoint.branding.models.brandingitem import Brandingitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'name_example' # str | name of branding item # str | name of branding item
    product_name = 'product_name_example' # str | product name # str | product name
    action_button_color = 'action_button_color_example' # str | hex value of color for action button (optional) # str | hex value of color for action button (optional)
    active_link_color = 'active_link_color_example' # str | hex value of color for link (optional) # str | hex value of color for link (optional)
    navigation_color = 'navigation_color_example' # str | hex value of color for navigation bar (optional) # str | hex value of color for navigation bar (optional)
    email_from_address = 'email_from_address_example' # str | email from address (optional) # str | email from address (optional)
    login_informational_message = 'login_informational_message_example' # str | login information message (optional) # str | login information message (optional)
    file_standard = None # bytearray | png file with logo (optional) # bytearray | png file with logo (optional)

    try:
        # Create a branding item
        
        results = BrandingApi(api_client).create_branding_item_v1(name=name, product_name=product_name)
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).create_branding_item_v1(name, product_name, action_button_color, active_link_color, navigation_color, email_from_address, login_informational_message, file_standard)
        print("The response of BrandingApi->create_branding_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BrandingApi->create_branding_item_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-branding-v1
Delete a branding item
This API endpoint delete information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-branding-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The name of the branding item to be deleted

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.branding.api.branding_api import BrandingApi
from sailpoint.branding.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'default' # str | The name of the branding item to be deleted # str | The name of the branding item to be deleted

    try:
        # Delete a branding item
        
        BrandingApi(api_client).delete_branding_v1(name=name)
        # Below is a request that includes all optional parameters
        # BrandingApi(api_client).delete_branding_v1(name)
    except Exception as e:
        print("Exception when calling BrandingApi->delete_branding_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-branding-list-v1
List of branding items
This API endpoint returns a list of branding items.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-branding-list-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[Brandingitem]**](../models/brandingitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of branding items. | List[Brandingitem] |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.branding.api.branding_api import BrandingApi
from sailpoint.branding.api_client import ApiClient
from sailpoint.branding.models.brandingitem import Brandingitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # List of branding items
        
        results = BrandingApi(api_client).get_branding_list_v1()
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).get_branding_list_v1()
        print("The response of BrandingApi->get_branding_list_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BrandingApi->get_branding_list_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-branding-v1
Get a branding item
This API endpoint retrieves information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-branding-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The name of the branding item to be retrieved

### Return type
[**Brandingitem**](../models/brandingitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A branding item object | Brandingitem |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.branding.api.branding_api import BrandingApi
from sailpoint.branding.api_client import ApiClient
from sailpoint.branding.models.brandingitem import Brandingitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'default' # str | The name of the branding item to be retrieved # str | The name of the branding item to be retrieved

    try:
        # Get a branding item
        
        results = BrandingApi(api_client).get_branding_v1(name=name)
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).get_branding_v1(name)
        print("The response of BrandingApi->get_branding_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BrandingApi->get_branding_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-branding-item-v1
Update a branding item
This API endpoint updates information for an existing branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v1/set-branding-item-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The name of the branding item to be retrieved
   | name2 | **str** | True  | name of branding item
   | product_name | **str** | True  | product name
   | action_button_color | **str** |   (optional) | hex value of color for action button
   | active_link_color | **str** |   (optional) | hex value of color for link
   | navigation_color | **str** |   (optional) | hex value of color for navigation bar
   | email_from_address | **str** |   (optional) | email from address
   | login_informational_message | **str** |   (optional) | login information message
   | file_standard | **bytearray** |   (optional) | png file with logo

### Return type
[**Brandingitem**](../models/brandingitem)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Branding item updated | Brandingitem |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetBrandingListV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetBrandingListV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.branding.api.branding_api import BrandingApi
from sailpoint.branding.api_client import ApiClient
from sailpoint.branding.models.brandingitem import Brandingitem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    name = 'default' # str | The name of the branding item to be retrieved # str | The name of the branding item to be retrieved
    name2 = 'name_example' # str | name of branding item # str | name of branding item
    product_name = 'product_name_example' # str | product name # str | product name
    action_button_color = 'action_button_color_example' # str | hex value of color for action button (optional) # str | hex value of color for action button (optional)
    active_link_color = 'active_link_color_example' # str | hex value of color for link (optional) # str | hex value of color for link (optional)
    navigation_color = 'navigation_color_example' # str | hex value of color for navigation bar (optional) # str | hex value of color for navigation bar (optional)
    email_from_address = 'email_from_address_example' # str | email from address (optional) # str | email from address (optional)
    login_informational_message = 'login_informational_message_example' # str | login information message (optional) # str | login information message (optional)
    file_standard = None # bytearray | png file with logo (optional) # bytearray | png file with logo (optional)

    try:
        # Update a branding item
        
        results = BrandingApi(api_client).set_branding_item_v1(name=name, name2=name2, product_name=product_name)
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).set_branding_item_v1(name, name2, product_name, action_button_color, active_link_color, navigation_color, email_from_address, login_informational_message, file_standard)
        print("The response of BrandingApi->set_branding_item_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling BrandingApi->set_branding_item_v1: %s\n" % e)
```



[[Back to top]](#) 



