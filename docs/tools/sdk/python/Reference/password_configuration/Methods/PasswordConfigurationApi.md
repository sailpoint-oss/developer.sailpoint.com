---
id: password-configuration
title: Password_Configuration
pagination_label: Password_Configuration
sidebar_label: Password_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Password_Configuration', 'Password_Configuration'] 
slug: /tools/sdk/python/password-configuration/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'Password_Configuration', 'Password_Configuration']
---

# sailpoint.password_configuration.PasswordConfigurationApi
  Use this API to implement organization password configuration functionality. 
With this functionality in place, organization administrators can create organization-specific password configurations. 

These configurations include details like custom password instructions, as well as digit token length and duration. 

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-org-config-v1**](#create-password-org-config-v1) | **POST** `/password-org-config/v1` | Create password org config
[**get-password-org-config-v1**](#get-password-org-config-v1) | **GET** `/password-org-config/v1` | Get password org config
[**put-password-org-config-v1**](#put-password-org-config-v1) | **PUT** `/password-org-config/v1` | Update password org config


## create-password-org-config-v1
Create password org config
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-password-org-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | passwordorgconfig | [**Passwordorgconfig**](../models/passwordorgconfig) | True  | 

### Return type
[**Passwordorgconfig**](../models/passwordorgconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password org config. | Passwordorgconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordOrgConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordOrgConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_configuration.api.password_configuration_api import PasswordConfigurationApi
from sailpoint.password_configuration.api_client import ApiClient
from sailpoint.password_configuration.models.passwordorgconfig import Passwordorgconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    passwordorgconfig = '''{"customInstructionsEnabled":true,"digitTokenEnabled":true,"digitTokenDurationMinutes":12,"digitTokenLength":9}''' # Passwordorgconfig | 

    try:
        # Create password org config
        new_passwordorgconfig = Passwordorgconfig.from_json(passwordorgconfig)
        results = PasswordConfigurationApi(api_client).create_password_org_config_v1(passwordorgconfig=new_passwordorgconfig)
        # Below is a request that includes all optional parameters
        # results = PasswordConfigurationApi(api_client).create_password_org_config_v1(new_passwordorgconfig)
        print("The response of PasswordConfigurationApi->create_password_org_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordConfigurationApi->create_password_org_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-password-org-config-v1
Get password org config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-password-org-config-v1)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**Passwordorgconfig**](../models/passwordorgconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password org config. | Passwordorgconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordOrgConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordOrgConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.password_configuration.api.password_configuration_api import PasswordConfigurationApi
from sailpoint.password_configuration.api_client import ApiClient
from sailpoint.password_configuration.models.passwordorgconfig import Passwordorgconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get password org config
        
        results = PasswordConfigurationApi(api_client).get_password_org_config_v1()
        # Below is a request that includes all optional parameters
        # results = PasswordConfigurationApi(api_client).get_password_org_config_v1()
        print("The response of PasswordConfigurationApi->get_password_org_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordConfigurationApi->get_password_org_config_v1: %s\n" % e)
```



[[Back to top]](#) 

## put-password-org-config-v1
Update password org config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-password-org-config-v1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | passwordorgconfig | [**Passwordorgconfig**](../models/passwordorgconfig) | True  | 

### Return type
[**Passwordorgconfig**](../models/passwordorgconfig)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password org config. | Passwordorgconfig |  -  |
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordOrgConfigV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordOrgConfigV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_configuration.api.password_configuration_api import PasswordConfigurationApi
from sailpoint.password_configuration.api_client import ApiClient
from sailpoint.password_configuration.models.passwordorgconfig import Passwordorgconfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    passwordorgconfig = '''{"digitTokenEnabled":true,"digitTokenDurationMinutes":12}''' # Passwordorgconfig | 

    try:
        # Update password org config
        new_passwordorgconfig = Passwordorgconfig.from_json(passwordorgconfig)
        results = PasswordConfigurationApi(api_client).put_password_org_config_v1(passwordorgconfig=new_passwordorgconfig)
        # Below is a request that includes all optional parameters
        # results = PasswordConfigurationApi(api_client).put_password_org_config_v1(new_passwordorgconfig)
        print("The response of PasswordConfigurationApi->put_password_org_config_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordConfigurationApi->put_password_org_config_v1: %s\n" % e)
```



[[Back to top]](#) 



