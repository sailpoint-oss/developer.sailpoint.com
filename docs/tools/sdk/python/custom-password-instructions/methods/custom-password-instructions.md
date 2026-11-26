# Custom_Password_Instructions

# sailpoint.custom_password_instructions.CustomPasswordInstructionsApi
  Use this API to implement custom password instruction functionality.
With this functionality in place, administrators can create custom password instructions to help users reset their passwords, change them, unlock their accounts, or recover their usernames.
This allows administrators to emphasize password policies or provide organization-specific instructions.

Administrators must first use [Update Password Org Config](https://developer.sailpoint.com/docs/api/put-password-org-config-v-1) to set &#x60;customInstructionsEnabled&#x60; to &#x60;true&#x60;.

Once they have enabled custom instructions, they can use [Create Custom Password Instructions](https://developer.sailpoint.com/docs/api/create-custom-password-instructions-v-1) to create custom page content for the specific pageId they select.

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

The `pageId` determines which login and password-recovery screen your custom instructions appear on. The following table describes each supported page ID and where its text is displayed:

| Page ID | Where the custom text appears |
| --- | --- |
| `flow-selection:select` | Flow-selection landing screen, under "Need help signing in?", above the navigation links. |
| `reset-password:enter-username` | Reset-password "enter username" step, under the prompt, above the username field. |
| `unlock-account:enter-username` | Unlock-account "enter username" step, under the prompt, above the username field. |
| `forget-username:user-email` | Forgot-username screen, under "Enter the email address for", above the email field. |
| `reset-password:enter-password` | Reset-password "new password" step, under the header, above the password fields. |
| `change-password:enter-password` | Same "new password" screen, but the authenticated app/sync-group change variant. |
| `reset-password:finish` | Reset-password success screen, under the success icon/heading, above the return button. |
| `change-password:finish` | Success screen for the authenticated app/sync-group change, under the heading. |
| `mfa:select` | MFA method-selection step, under the prompt, above the list of MFA options. |
| `mfa:enter-code` | MFA code-entry step, under the option label, above the code field. |
| `mfa:enter-kba` | KBA step, under "Please answer these security questions", above the questions form. |
| `unlock-account:finish` | Unlock-account success screen, under the success icon/heading, above the return button. |

In every case the text shows as an info-icon + paragraph block that only appears if custom text is configured for that page ID, positioned between the screen's built-in heading and its form controls.


[API Spec](https://developer.sailpoint.com/docs/api/create-custom-password-instructions-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | custom_password_instruction | [**CustomPasswordInstruction**](../models/custom-password-instruction) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

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
from sailpoint.custom_password_instructions.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.custom_password_instructions.api_client import ApiClient
from sailpoint.custom_password_instructions.models.custom_password_instruction import CustomPasswordInstruction
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    custom_password_instruction = '''{
          "pageContent" : "Please enter a new password. Your password must be at least 8 characters long and contain at least one number and one letter.",
          "pageId" : "change-password:enter-password",
          "locale" : "en"
        }''' # CustomPasswordInstruction | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create custom password instructions
        new_custom_password_instruction = CustomPasswordInstruction.from_json(custom_password_instruction)
        results = CustomPasswordInstructionsApi(api_client).create_custom_password_instructions_v1(custom_password_instruction=new_custom_password_instruction)
        # Below is a request that includes all optional parameters
        # results = CustomPasswordInstructionsApi(api_client).create_custom_password_instructions_v1(new_custom_password_instruction, x_sail_point_experimental)
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

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-password-instructions-v-1)

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
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

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

[API Spec](https://developer.sailpoint.com/docs/api/get-custom-password-instructions-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | page_id | **str** | True  | The page ID of custom password instructions to query.
  Query | locale | **str** |   (optional) | The locale for the custom instructions, a BCP47 language tag. The default value is \\\"default\\\".
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

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
from sailpoint.custom_password_instructions.api.custom_password_instructions_api import CustomPasswordInstructionsApi
from sailpoint.custom_password_instructions.api_client import ApiClient
from sailpoint.custom_password_instructions.models.custom_password_instruction import CustomPasswordInstruction
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



