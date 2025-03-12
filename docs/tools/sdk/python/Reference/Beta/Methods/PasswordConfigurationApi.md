---
id: beta-password-configuration
title: Password_Configuration
pagination_label: Password_Configuration
sidebar_label: Password_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Password_Configuration', 'BetaPassword_Configuration'] 
slug: /tools/sdk/python/beta/methods/password-configuration
tags: ['SDK', 'Software Development Kit', 'Password_Configuration', 'BetaPassword_Configuration']
---

# sailpoint.beta.PasswordConfigurationApi
  Use this API to implement organization password configuration functionality.
With this functionality in place, organization administrators can create organization-specific password configurations.

These configurations include details like custom password instructions, as well as digit token length and duration.

Refer to [Configuring User Authentication for Password Resets](https://documentation.sailpoint.com/saas/help/pwd/pwd_reset.html) for more information about organization password configuration functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-org-config**](#create-password-org-config) | **POST** `/password-org-config` | Create Password Org Config
[**get-password-org-config**](#get-password-org-config) | **GET** `/password-org-config` | Get Password Org Config
[**put-password-org-config**](#put-password-org-config) | **PUT** `/password-org-config` | Update Password Org Config


## create-password-org-config
Create Password Org Config
This API creates the password org config. Unspecified fields will use default value.
To be able to use the custom password instructions, you must set the `customInstructionsEnabled` field to "true".
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-password-org-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | password_org_config | [**PasswordOrgConfig**](../models/password-org-config) | True  | 

### Return type
[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password org config. | PasswordOrgConfig |  -  |
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
from sailpoint.beta.api.password_configuration_api import PasswordConfigurationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_org_config import PasswordOrgConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    password_org_config = '''{
          "digitTokenLength" : 9,
          "digitTokenEnabled" : true,
          "digitTokenDurationMinutes" : 10,
          "customInstructionsEnabled" : true
        }''' # PasswordOrgConfig | 

    try:
        # Create Password Org Config
        new_password_org_config = PasswordOrgConfig.from_json(password_org_config)
        results = PasswordConfigurationApi(api_client).create_password_org_config(password_org_config=new_password_org_config)
        # Below is a request that includes all optional parameters
        # results = PasswordConfigurationApi(api_client).create_password_org_config(new_password_org_config)
        print("The response of PasswordConfigurationApi->create_password_org_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling PasswordConfigurationApi->create_password_org_config: %s\n" % e)
```



[[Back to top]](#) 

## get-password-org-config
Get Password Org Config
This API returns the password org config . Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:read'

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-password-org-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password org config. | PasswordOrgConfig |  -  |
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
from sailpoint.beta.api.password_configuration_api import PasswordConfigurationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_org_config import PasswordOrgConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Get Password Org Config
        
        results = PasswordConfigurationApi(api_client).get_password_org_config()
        # Below is a request that includes all optional parameters
        # results = PasswordConfigurationApi(api_client).get_password_org_config()
        print("The response of PasswordConfigurationApi->get_password_org_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling PasswordConfigurationApi->get_password_org_config: %s\n" % e)
```



[[Back to top]](#) 

## put-password-org-config
Update Password Org Config
This API updates the password org config for specified fields. Other fields will keep original value.
You must set the `customInstructionsEnabled` field to "true" to be able to use custom password instructions. 
Requires ORG_ADMIN, API role or authorization scope of 'idn:password-org-config:write'

[API Spec](https://developer.sailpoint.com/docs/api/beta/put-password-org-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | password_org_config | [**PasswordOrgConfig**](../models/password-org-config) | True  | 

### Return type
[**PasswordOrgConfig**](../models/password-org-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password org config. | PasswordOrgConfig |  -  |
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
from sailpoint.beta.api.password_configuration_api import PasswordConfigurationApi
from sailpoint.beta.api_client import ApiClient
from sailpoint.beta.models.password_org_config import PasswordOrgConfig
from pprint import pprint
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    password_org_config = '''{
          "digitTokenLength" : 9,
          "digitTokenEnabled" : true,
          "digitTokenDurationMinutes" : 10,
          "customInstructionsEnabled" : true
        }''' # PasswordOrgConfig | 

    try:
        # Update Password Org Config
        new_password_org_config = PasswordOrgConfig.from_json(password_org_config)
        results = PasswordConfigurationApi(api_client).put_password_org_config(password_org_config=new_password_org_config)
        # Below is a request that includes all optional parameters
        # results = PasswordConfigurationApi(api_client).put_password_org_config(new_password_org_config)
        print("The response of PasswordConfigurationApi->put_password_org_config:\n")
        pprint(results)
    except Exception as e:
        print("Exception when calling PasswordConfigurationApi->put_password_org_config: %s\n" % e)
```



[[Back to top]](#) 



