---
id: beta-custom-password-instructions
title: Custom_Password_Instructions
pagination_label: Custom_Password_Instructions
sidebar_label: Custom_Password_Instructions
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Custom_Password_Instructions', 'BetaCustom_Password_Instructions'] 
slug: /tools/sdk/python/beta/methods/custom-password-instructions
tags: ['SDK', 'Software Development Kit', 'Custom_Password_Instructions', 'BetaCustom_Password_Instructions']
---

# sailpoint.beta.CustomPasswordInstructionsApi
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/beta/put-password-org-config/) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/beta/create-custom-password-instructions/) to create custom page content for the specific pageId they select.

For example, an administrator can use the pageId forget-username:user-email to set the custom text for the case when users forget their usernames and must enter their emails.

Refer to [Creating Custom Instruction Text](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html#creating-custom-instruction-text) for more information about creating custom password instructions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-password-instructions**](#create-custom-password-instructions) | **POST** `/custom-password-instructions` | Create custom password instructions
[**delete-custom-password-instructions**](#delete-custom-password-instructions) | **DELETE** `/custom-password-instructions/{pageId}` | Delete custom password instructions by page id
[**get-custom-password-instructions**](#get-custom-password-instructions) | **GET** `/custom-password-instructions/{pageId}` | Get custom password instructions by page id


## create-custom-password-instructions
Create custom password instructions
This API creates the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-custom-password-instructions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | custom_password_instruction | [**CustomPasswordInstruction**](../models/custom-password-instruction) | True  | 

### Return type
[**CustomPasswordInstruction**](../models/custom-password-instruction)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the custom password instructions. | CustomPasswordInstruction |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.custom_password_instruction import CustomPasswordInstruction
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    custom_password_instruction = '''{
          "pageContent" : "Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.",
          "pageId" : "change-password:enter-password",
          "locale" : "en"
        }''' # CustomPasswordInstruction | 

    try:
        # Create custom password instructions
        new_custom_password_instruction = CustomPasswordInstruction.from_json(custom_password_instruction)
        results = CustomPasswordInstructionsApi(api_client).create_custom_password_instructions(custom_password_instruction=new_custom_password_instruction)
        # Below is a request that includes all optional parameters
        # results = CustomPasswordInstructionsApi(api_client).create_custom_password_instructions(new_custom_password_instruction)
        print("The response of CustomPasswordInstructionsApi->create_custom_password_instructions:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomPasswordInstructionsApi->create_custom_password_instructions: %s\n" % e)
```



[[Back to top]](#) 

## delete-custom-password-instructions
Delete custom password instructions by page id
This API delete the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-custom-password-instructions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | page_id | **str** | True  | The page ID of custom password instructions to delete.
  Query | locale | **str** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    page_id = 'mfa:select' # str | The page ID of custom password instructions to delete. # str | The page ID of custom password instructions to delete.
    locale = 'locale_example' # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

    try:
        # Delete custom password instructions by page id
        
        CustomPasswordInstructionsApi(api_client).delete_custom_password_instructions(page_id=page_id)
        # Below is a request that includes all optional parameters
        # CustomPasswordInstructionsApi(api_client).delete_custom_password_instructions(page_id, locale)
    except Exception as e:
        print("Exception when calling CustomPasswordInstructionsApi->delete_custom_password_instructions: %s\n" % e)
```



[[Back to top]](#) 

## get-custom-password-instructions
Get custom password instructions by page id
This API returns the custom password instructions for the specified page ID. A token with ORG_ADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-custom-password-instructions)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | page_id | **str** | True  | The page ID of custom password instructions to query.
  Query | locale | **str** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".

### Return type
[**CustomPasswordInstruction**](../models/custom-password-instruction)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the custom password instructions. | CustomPasswordInstruction |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.beta.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.custom_password_instruction import CustomPasswordInstruction
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    page_id = 'mfa:select' # str | The page ID of custom password instructions to query. # str | The page ID of custom password instructions to query.
    locale = 'locale_example' # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional) # str | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\". (optional)

    try:
        # Get custom password instructions by page id
        
        results = CustomPasswordInstructionsApi(api_client).get_custom_password_instructions(page_id=page_id)
        # Below is a request that includes all optional parameters
        # results = CustomPasswordInstructionsApi(api_client).get_custom_password_instructions(page_id, locale)
        print("The response of CustomPasswordInstructionsApi->get_custom_password_instructions:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling CustomPasswordInstructionsApi->get_custom_password_instructions: %s\n" % e)
```



[[Back to top]](#) 



