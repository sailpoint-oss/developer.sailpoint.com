---
id: custom-password-instructions
title: Custom_Password_Instructions
pagination_label: Custom_Password_Instructions
sidebar_label: Custom_Password_Instructions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Custom_Password_Instructions', 'Custom_Password_Instructions'] 
slug: /tools/sdk/python/custom-password-instructions/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'Custom_Password_Instructions', 'Custom_Password_Instructions']
---

# sailpoint.custom_password_instructions.CustomPasswordInstructionsApi
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/v2025/put-password-org-config/) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/v2025/create-custom-password-instructions/) to create custom page content for the specific pageId they select.

For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails.

Refer to [Creating Custom Instruction Text](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text) for more information about creating custom password instructions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-password-instructions-v1**](#create-custom-password-instructions-v1) | **POST** `/custom-password-instructions/v1` | Create custom password instructions
[**delete-custom-password-instructions-v1**](#delete-custom-password-instructions-v1) | **DELETE** `/custom-password-instructions/v1/{pageId}` | Delete custom password instructions by page id
[**get-custom-password-instructions-v1**](#get-custom-password-instructions-v1) | **GET** `/custom-password-instructions/v1/{pageId}` | Get custom password instructions by page id


## create-custom-password-instructions-v1
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
Create custom password instructions
This API creates the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-custom-password-instructions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | custompasswordinstruction | [**Custompasswordinstruction**](../models/custompasswordinstruction) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Custompasswordinstruction**](../models/custompasswordinstruction)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the custom password instructions. | Custompasswordinstruction |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.custom_password_instructions.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.custom_password_instructions.api_client import ApiClient
from sailpoint.custom_password_instructions.models.custompasswordinstruction import Custompasswordinstruction
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    custompasswordinstruction = '''{"pageId":"reset-password:enter-password","pageContent":"See company password policies for details by clicking <a href=\"url\">here</a>"}''' # Custompasswordinstruction | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create custom password instructions
        new_custompasswordinstruction = Custompasswordinstruction.from_json(custompasswordinstruction)
        results = CustomPasswordInstructionsApi(api_client).create_custom_password_instructions_v1(custompasswordinstruction=new_custompasswordinstruction)
        # Below is a request that includes all optional parameters
        # results = CustomPasswordInstructionsApi(api_client).create_custom_password_instructions_v1(new_custompasswordinstruction, x_sail_point_experimental)
        print("The response of CustomPasswordInstructionsApi->create_custom_password_instructions_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomPasswordInstructionsApi->create_custom_password_instructions_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-custom-password-instructions-v1
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
Delete custom password instructions by page id
This API delete the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-custom-password-instructions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | page_id | **str** | True  | The page ID of custom password instructions to delete.
  Query | locale | **str** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.custom_password_instructions.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.custom_password_instructions.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    page_id = 'mfa:select' # str | The page ID of custom password instructions to delete. # str | The page ID of custom password instructions to delete.
    locale = 'locale_example' # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete custom password instructions by page id
        
        CustomPasswordInstructionsApi(api_client).delete_custom_password_instructions_v1(page_id=page_id)
        # Below is a request that includes all optional parameters
        # CustomPasswordInstructionsApi(api_client).delete_custom_password_instructions_v1(page_id, locale, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling CustomPasswordInstructionsApi->delete_custom_password_instructions_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-custom-password-instructions-v1
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
Get custom password instructions by page id
This API returns the custom password instructions for the specified page ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-custom-password-instructions-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | page_id | **str** | True  | The page ID of custom password instructions to query.
  Query | locale | **str** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**Custompasswordinstruction**](../models/custompasswordinstruction)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the custom password instructions. | Custompasswordinstruction |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.custom_password_instructions.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.custom_password_instructions.api_client import ApiClient
from sailpoint.custom_password_instructions.models.custompasswordinstruction import Custompasswordinstruction
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    page_id = 'mfa:select' # str | The page ID of custom password instructions to query. # str | The page ID of custom password instructions to query.
    locale = 'locale_example' # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get custom password instructions by page id
        
        results = CustomPasswordInstructionsApi(api_client).get_custom_password_instructions_v1(page_id=page_id)
        # Below is a request that includes all optional parameters
        # results = CustomPasswordInstructionsApi(api_client).get_custom_password_instructions_v1(page_id, locale, x_sail_point_experimental)
        print("The response of CustomPasswordInstructionsApi->get_custom_password_instructions_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomPasswordInstructionsApi->get_custom_password_instructions_v1: %s\n" % e)
```



[[Back to top]](#) 



