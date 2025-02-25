---
id: branding
title: Branding
pagination_label: Branding
sidebar_label: Branding
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Branding', 'Branding'] 
slug: /tools/sdk/python/v3/methods/branding
tags: ['SDK', 'Software Development Kit', 'Branding', 'Branding']
---

# sailpoint.v3.BrandingApi
  Use this API to implement and customize branding functionality. 
With this functionality in place, administrators can get and manage existing branding items, and they can also create new branding items and configure them for use throughout Identity Security Cloud. 
The Branding APIs provide administrators with a way to customize branding items. 
This customization includes details like their colors, logos, and other information. 
Refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certifications.html) for more information about certifications.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-branding-item**](#create-branding-item) | **POST** `/brandings` | Create a branding item
[**delete-branding**](#delete-branding) | **DELETE** `/brandings/{name}` | Delete a branding item
[**get-branding**](#get-branding) | **GET** `/brandings/{name}` | Get a branding item
[**get-branding-list**](#get-branding-list) | **GET** `/brandings` | List of branding items
[**set-branding-item**](#set-branding-item) | **PUT** `/brandings/{name}` | Update a branding item


## create-branding-item
Create a branding item
This API endpoint creates a branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v3/create-branding-item)

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
[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Branding item created | BrandingItem |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.branding_api import BrandingApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.branding_item import BrandingItem
from pprint import pprint
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
        
        results =BrandingApi(api_client).create_branding_item(name, product_name, )
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).create_branding_item(name, product_name, action_button_color, active_link_color, navigation_color, email_from_address, login_informational_message, file_standard)
        print("The response of BrandingApi->create_branding_item:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling BrandingApi->create_branding_item: %s\n" % e)
```



[[Back to top]](#) 

## delete-branding
Delete a branding item
This API endpoint delete information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-branding)

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
import sailpoint.v3
from sailpoint.v3.api.branding_api import BrandingApi
from sailpoint.v3.api_client import ApiClient
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    name = 'default' # str | The name of the branding item to be deleted # str | The name of the branding item to be deleted

    try:
        # Delete a branding item
        
        BrandingApi(api_client).delete_branding(name)
        # Below is a request that includes all optional parameters
        # BrandingApi(api_client).delete_branding(name)
        except Exception as e:
        print("Exception when calling BrandingApi->delete_branding: %s\n" % e)
```



[[Back to top]](#) 

## get-branding
Get a branding item
This API endpoint retrieves information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-branding)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | name | **str** | True  | The name of the branding item to be retrieved

### Return type
[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A branding item object | BrandingItem |  -  |
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
import sailpoint.v3
from sailpoint.v3.api.branding_api import BrandingApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.branding_item import BrandingItem
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:
    name = 'default' # str | The name of the branding item to be retrieved # str | The name of the branding item to be retrieved

    try:
        # Get a branding item
        
        results =BrandingApi(api_client).get_branding(name)
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).get_branding(name)
        print("The response of BrandingApi->get_branding:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling BrandingApi->get_branding: %s\n" % e)
```



[[Back to top]](#) 

## get-branding-list
List of branding items
This API endpoint returns a list of branding items.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-branding-list)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**List[BrandingItem]**](../models/branding-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | A list of branding items. | List[BrandingItem] |  -  |
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
import sailpoint.v3
from sailpoint.v3.api.branding_api import BrandingApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.branding_item import BrandingItem
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()

with ApiClient(configuration) as api_client:

    try:
        # List of branding items
        
        results =BrandingApi(api_client).get_branding_list()
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).get_branding_list()
        print("The response of BrandingApi->get_branding_list:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling BrandingApi->get_branding_list: %s\n" % e)
```



[[Back to top]](#) 

## set-branding-item
Update a branding item
This API endpoint updates information for an existing branding item.

[API Spec](https://developer.sailpoint.com/docs/api/v3/set-branding-item)

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
[**BrandingItem**](../models/branding-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Branding item updated | BrandingItem |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
import sailpoint.v3
from sailpoint.v3.api.branding_api import BrandingApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.branding_item import BrandingItem
from pprint import pprint
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
        
        results =BrandingApi(api_client).set_branding_item(name, name2, product_name, )
        # Below is a request that includes all optional parameters
        # results = BrandingApi(api_client).set_branding_item(name, name2, product_name, action_button_color, active_link_color, navigation_color, email_from_address, login_informational_message, file_standard)
        print("The response of BrandingApi->set_branding_item:\n")
        pprint(results)
        except Exception as e:
        print("Exception when calling BrandingApi->set_branding_item: %s\n" % e)
```



[[Back to top]](#) 



