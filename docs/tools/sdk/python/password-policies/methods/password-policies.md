# Password_Policies

# sailpoint.password_policies.PasswordPoliciesApi
  Use these APIs to implement password policies functionality.
These APIs allow you to define the policy parameters for choosing passwords.

IdentityNow comes with a default policy that you can modify to define the password requirements your users must meet to log in to IdentityNow, such as requiring a minimum password length, including special characters, and disallowing certain patterns.
If you have licensed Password Management, you can create additional password policies beyond the default one to manage passwords for supported sources in your org.

In the Identity Security Cloud Admin panel, administrators can use the Password Mgmt dropdown menu to select Sync Groups.
Refer to [Managing Password Policies](https://documentation.sailpoint.com/saas/help/pwd/pwd_policies/pwd_policies.html) for more information about password policies.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-password-policy-v1**](#create-password-policy-v1) | **POST** `/password-policies/v1` | Create password policy
[**delete-password-policy-v1**](#delete-password-policy-v1) | **DELETE** `/password-policies/v1/{id}` | Delete password policy by id
[**get-password-policy-by-id-v1**](#get-password-policy-by-id-v1) | **GET** `/password-policies/v1/{id}` | Get password policy by id
[**list-password-policies-v1**](#list-password-policies-v1) | **GET** `/password-policies/v1` | List password policies
[**set-password-policy-v1**](#set-password-policy-v1) | **PUT** `/password-policies/v1/{id}` | Update password policy by id


## create-password-policy-v1
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
Create password policy
This API creates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/create-password-policy-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | password_policy_v3_dto | [**PasswordPolicyV3Dto**](../models/password-policy-v3-dto) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password policy. | PasswordPolicyV3Dto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_policies.api.password_policies_api import PasswordPoliciesApi
from sailpoint.password_policies.api_client import ApiClient
from sailpoint.password_policies.models.password_policy_v3_dto import PasswordPolicyV3Dto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    password_policy_v3_dto = '''{
          "validateAgainstAccountName" : true,
          "minLength" : 8,
          "description" : "Information about the Password Policy",
          "requireStrongAuthUntrustedGeographies" : true,
          "enablePasswdExpiration" : true,
          "minNumeric" : 8,
          "lastUpdated" : 1939056206564,
          "validateAgainstAccountId" : false,
          "dateCreated" : 1639056206564,
          "accountNameMinWordLength" : 6,
          "minUpper" : 8,
          "firstExpirationReminder" : 45,
          "modified" : "modified",
          "id" : "2c91808e7d976f3b017d9f5ceae440c8",
          "requireStrongAuthn" : true,
          "useDictionary" : false,
          "minSpecial" : 8,
          "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
          "passwordExpiration" : 8,
          "maxRepeatedChars" : 3,
          "minCharacterTypes" : 5,
          "minAlpha" : 5,
          "created" : "created",
          "useAccountAttributes" : false,
          "accountIdMinWordLength" : 4,
          "minLower" : 8,
          "useIdentityAttributes" : false,
          "defaultPolicy" : true,
          "requireStrongAuthOffNetwork" : true,
          "name" : "PasswordPolicy Example",
          "maxLength" : 25
        }''' # PasswordPolicyV3Dto | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create password policy
        new_password_policy_v3_dto = PasswordPolicyV3Dto.from_json(password_policy_v3_dto)
        results = PasswordPoliciesApi(api_client).create_password_policy_v1(password_policy_v3_dto=new_password_policy_v3_dto)
        # Below is a request that includes all optional parameters
        # results = PasswordPoliciesApi(api_client).create_password_policy_v1(new_password_policy_v3_dto, x_sail_point_experimental)
        print("The response of PasswordPoliciesApi->create_password_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordPoliciesApi->create_password_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-password-policy-v1
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
Delete password policy by id
This API deletes the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/delete-password-policy-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of password policy to delete.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.password_policies.api.password_policies_api import PasswordPoliciesApi
from sailpoint.password_policies.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ff808081838d9e9d01838da6a03e0002' # str | The ID of password policy to delete. # str | The ID of password policy to delete.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete password policy by id
        
        PasswordPoliciesApi(api_client).delete_password_policy_v1(id=id)
        # Below is a request that includes all optional parameters
        # PasswordPoliciesApi(api_client).delete_password_policy_v1(id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling PasswordPoliciesApi->delete_password_policy_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-password-policy-by-id-v1
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
Get password policy by id
This API returns the password policy for the specified ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-password-policy-by-id-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of password policy to retrieve.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password policy. | PasswordPolicyV3Dto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.password_policies.api.password_policies_api import PasswordPoliciesApi
from sailpoint.password_policies.api_client import ApiClient
from sailpoint.password_policies.models.password_policy_v3_dto import PasswordPolicyV3Dto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ff808081838d9e9d01838da6a03e0005' # str | The ID of password policy to retrieve. # str | The ID of password policy to retrieve.
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get password policy by id
        
        results = PasswordPoliciesApi(api_client).get_password_policy_by_id_v1(id=id)
        # Below is a request that includes all optional parameters
        # results = PasswordPoliciesApi(api_client).get_password_policy_by_id_v1(id, x_sail_point_experimental)
        print("The response of PasswordPoliciesApi->get_password_policy_by_id_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordPoliciesApi->get_password_policy_by_id_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-password-policies-v1
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
List password policies
This gets list of all Password Policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/list-password-policies-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[PasswordPolicyV3Dto]**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of all Password Policies. | List[PasswordPolicyV3Dto] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.password_policies.api.password_policies_api import PasswordPoliciesApi
from sailpoint.password_policies.api_client import ApiClient
from sailpoint.password_policies.models.password_policy_v3_dto import PasswordPolicyV3Dto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List password policies
        
        results = PasswordPoliciesApi(api_client).list_password_policies_v1()
        # Below is a request that includes all optional parameters
        # results = PasswordPoliciesApi(api_client).list_password_policies_v1(limit, offset, count, x_sail_point_experimental)
        print("The response of PasswordPoliciesApi->list_password_policies_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordPoliciesApi->list_password_policies_v1: %s\n" % e)
```



[[Back to top]](#) 

## set-password-policy-v1
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
Update password policy by id
This API updates the specified password policy.

[API Spec](https://developer.sailpoint.com/docs/api/set-password-policy-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | id | **str** | True  | The ID of password policy to update.
 Body  | password_policy_v3_dto | [**PasswordPolicyV3Dto**](../models/password-policy-v3-dto) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**PasswordPolicyV3Dto**](../models/password-policy-v3-dto)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Reference to the password policy. | PasswordPolicyV3Dto |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetPasswordPolicyByIdV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetPasswordPolicyByIdV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.password_policies.api.password_policies_api import PasswordPoliciesApi
from sailpoint.password_policies.api_client import ApiClient
from sailpoint.password_policies.models.password_policy_v3_dto import PasswordPolicyV3Dto
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    id = 'ff808081838d9e9d01838da6a03e0007' # str | The ID of password policy to update. # str | The ID of password policy to update.
    password_policy_v3_dto = '''{
          "validateAgainstAccountName" : true,
          "minLength" : 8,
          "description" : "Information about the Password Policy",
          "requireStrongAuthUntrustedGeographies" : true,
          "enablePasswdExpiration" : true,
          "minNumeric" : 8,
          "lastUpdated" : 1939056206564,
          "validateAgainstAccountId" : false,
          "dateCreated" : 1639056206564,
          "accountNameMinWordLength" : 6,
          "minUpper" : 8,
          "firstExpirationReminder" : 45,
          "modified" : "modified",
          "id" : "2c91808e7d976f3b017d9f5ceae440c8",
          "requireStrongAuthn" : true,
          "useDictionary" : false,
          "minSpecial" : 8,
          "sourceIds" : [ "2c91808382ffee0b01830de154f14034", "2f98808382ffee0b01830de154f12134" ],
          "passwordExpiration" : 8,
          "maxRepeatedChars" : 3,
          "minCharacterTypes" : 5,
          "minAlpha" : 5,
          "created" : "created",
          "useAccountAttributes" : false,
          "accountIdMinWordLength" : 4,
          "minLower" : 8,
          "useIdentityAttributes" : false,
          "defaultPolicy" : true,
          "requireStrongAuthOffNetwork" : true,
          "name" : "PasswordPolicy Example",
          "maxLength" : 25
        }''' # PasswordPolicyV3Dto | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Update password policy by id
        new_password_policy_v3_dto = PasswordPolicyV3Dto.from_json(password_policy_v3_dto)
        results = PasswordPoliciesApi(api_client).set_password_policy_v1(id=id, password_policy_v3_dto=new_password_policy_v3_dto)
        # Below is a request that includes all optional parameters
        # results = PasswordPoliciesApi(api_client).set_password_policy_v1(id, new_password_policy_v3_dto, x_sail_point_experimental)
        print("The response of PasswordPoliciesApi->set_password_policy_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling PasswordPoliciesApi->set_password_policy_v1: %s\n" % e)
```



[[Back to top]](#) 



