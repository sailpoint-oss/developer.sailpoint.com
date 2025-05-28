---
id: mfa-configuration
title: MFA_Configuration
pagination_label: MFA_Configuration
sidebar_label: MFA_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MFA_Configuration', 'MFA_Configuration'] 
slug: /tools/sdk/python/v3/methods/mfa-configuration
tags: ['SDK', 'Software Development Kit', 'MFA_Configuration', 'MFA_Configuration']
---

# sailpoint.v3.MFAConfigurationApi
  Configure and test multifactor authentication (MFA) methods 
All URIs are relative to *https://sailpoint.api.identitynow.com/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-mfa-config**](#delete-mfa-config) | **DELETE** `/mfa/{method}/delete` | Delete mfa method configuration
[**get-mfa-duo-config**](#get-mfa-duo-config) | **GET** `/mfa/duo-web/config` | Configuration of duo mfa method
[**get-mfa-kba-config**](#get-mfa-kba-config) | **GET** `/mfa/kba/config` | Configuration of kba mfa method
[**get-mfa-okta-config**](#get-mfa-okta-config) | **GET** `/mfa/okta-verify/config` | Configuration of okta mfa method
[**set-mfa-duo-config**](#set-mfa-duo-config) | **PUT** `/mfa/duo-web/config` | Set duo mfa configuration
[**set-mfa-okta-config**](#set-mfa-okta-config) | **PUT** `/mfa/okta-verify/config` | Set okta mfa configuration
[**set-mfakba-config**](#set-mfakba-config) | **POST** `/mfa/kba/config/answers` | Set mfa kba configuration
[**test-mfa-config**](#test-mfa-config) | **GET** `/mfa/{method}/test` | Mfa method&#39;s test configuration


## delete-mfa-config
Delete mfa method configuration
This API removes the configuration for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/delete-mfa-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | method | **str** | True  | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

### Return type
[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MFA configuration of an MFA method. | MfaOktaConfig |  -  |
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
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.mfa_okta_config import MfaOktaConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    method = 'okta-verify' # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    try:
        # Delete mfa method configuration
        
        results = MFAConfigurationApi(api_client).delete_mfa_config(method=method)
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).delete_mfa_config(method)
        print("The response of MFAConfigurationApi->delete_mfa_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->delete_mfa_config: %s\n" % e)
```



[[Back to top]](#) 

## get-mfa-duo-config
Configuration of duo mfa method
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-mfa-duo-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**MfaDuoConfig**](../models/mfa-duo-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The configuration of an Duo MFA method. | MfaDuoConfig |  -  |
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
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.mfa_duo_config import MfaDuoConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Configuration of duo mfa method
        
        results = MFAConfigurationApi(api_client).get_mfa_duo_config()
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).get_mfa_duo_config()
        print("The response of MFAConfigurationApi->get_mfa_duo_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->get_mfa_duo_config: %s\n" % e)
```



[[Back to top]](#) 

## get-mfa-kba-config
Configuration of kba mfa method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-mfa-kba-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | all_languages | **bool** |   (optional) | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false

### Return type
[**List[KbaQuestion]**](../models/kba-question)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The configuration for KBA MFA method. | List[KbaQuestion] |  -  |
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
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.kba_question import KbaQuestion
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    all_languages = allLanguages=true # bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional) # bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)

    try:
        # Configuration of kba mfa method
        
        results = MFAConfigurationApi(api_client).get_mfa_kba_config()
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).get_mfa_kba_config(all_languages)
        print("The response of MFAConfigurationApi->get_mfa_kba_config:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->get_mfa_kba_config: %s\n" % e)
```



[[Back to top]](#) 

## get-mfa-okta-config
Configuration of okta mfa method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/get-mfa-okta-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The configuration of an Okta MFA method. | MfaOktaConfig |  -  |
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
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.mfa_okta_config import MfaOktaConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:

    try:
        # Configuration of okta mfa method
        
        results = MFAConfigurationApi(api_client).get_mfa_okta_config()
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).get_mfa_okta_config()
        print("The response of MFAConfigurationApi->get_mfa_okta_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->get_mfa_okta_config: %s\n" % e)
```



[[Back to top]](#) 

## set-mfa-duo-config
Set duo mfa configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/set-mfa-duo-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | mfa_duo_config | [**MfaDuoConfig**](../models/mfa-duo-config) | True  | 

### Return type
[**MfaDuoConfig**](../models/mfa-duo-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MFA configuration of an Duo MFA method. | MfaDuoConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.mfa_duo_config import MfaDuoConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    mfa_duo_config = '''{
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "configProperties" : {
            "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
            "ikey" : "Q123WE45R6TY7890ZXCV"
          },
          "mfaMethod" : "duo-web",
          "enabled" : true,
          "identityAttribute" : "email"
        }''' # MfaDuoConfig | 

    try:
        # Set duo mfa configuration
        new_mfa_duo_config = MfaDuoConfig.from_json(mfa_duo_config)
        results = MFAConfigurationApi(api_client).set_mfa_duo_config(mfa_duo_config=new_mfa_duo_config)
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).set_mfa_duo_config(new_mfa_duo_config)
        print("The response of MFAConfigurationApi->set_mfa_duo_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->set_mfa_duo_config: %s\n" % e)
```



[[Back to top]](#) 

## set-mfa-okta-config
Set okta mfa configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/v3/set-mfa-okta-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | mfa_okta_config | [**MfaOktaConfig**](../models/mfa-okta-config) | True  | 

### Return type
[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | MFA configuration of an Okta MFA method. | MfaOktaConfig |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.mfa_okta_config import MfaOktaConfig
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    mfa_okta_config = '''{
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "mfaMethod" : "okta-verify",
          "enabled" : true,
          "identityAttribute" : "email"
        }''' # MfaOktaConfig | 

    try:
        # Set okta mfa configuration
        new_mfa_okta_config = MfaOktaConfig.from_json(mfa_okta_config)
        results = MFAConfigurationApi(api_client).set_mfa_okta_config(mfa_okta_config=new_mfa_okta_config)
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).set_mfa_okta_config(new_mfa_okta_config)
        print("The response of MFAConfigurationApi->set_mfa_okta_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->set_mfa_okta_config: %s\n" % e)
```



[[Back to top]](#) 

## set-mfakba-config
Set mfa kba configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/v3/set-mfakba-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | kba_answer_request_item | [**[]KbaAnswerRequestItem**](../models/kba-answer-request-item) | True  | 

### Return type
[**List[KbaAnswerResponseItem]**](../models/kba-answer-response-item)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The new KBA configuration for the user. | List[KbaAnswerResponseItem] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.kba_answer_request_item import KbaAnswerRequestItem
from sailpoint.v3.models.kba_answer_response_item import KbaAnswerResponseItem
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    kba_answer_request_item = '''[{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}]''' # List[KbaAnswerRequestItem] | 

    try:
        # Set mfa kba configuration
        new_kba_answer_request_item = KbaAnswerRequestItem.from_json(kba_answer_request_item)
        results = MFAConfigurationApi(api_client).set_mfakba_config(kba_answer_request_item=new_kba_answer_request_item)
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).set_mfakba_config(new_kba_answer_request_item)
        print("The response of MFAConfigurationApi->set_mfakba_config:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->set_mfakba_config: %s\n" % e)
```



[[Back to top]](#) 

## test-mfa-config
Mfa method's test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/v3/test-mfa-config)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | method | **str** | True  | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

### Return type
[**MfaConfigTestResponse**](../models/mfa-config-test-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The result of configuration test for the MFA provider. | MfaConfigTestResponse |  -  |
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
from sailpoint.v3.api.mfa_configuration_api import MFAConfigurationApi
from sailpoint.v3.api_client import ApiClient
from sailpoint.v3.models.mfa_config_test_response import MfaConfigTestResponse
from sailpoint.configuration import Configuration
configuration = Configuration()


with ApiClient(configuration) as api_client:
    method = 'okta-verify' # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    try:
        # Mfa method's test configuration
        
        results = MFAConfigurationApi(api_client).test_mfa_config(method=method)
        # Below is a request that includes all optional parameters
        # results = MFAConfigurationApi(api_client).test_mfa_config(method)
        print("The response of MFAConfigurationApi->test_mfa_config:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->test_mfa_config: %s\n" % e)
```



[[Back to top]](#) 



