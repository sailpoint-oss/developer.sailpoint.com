---
id: beta-mfa-configuration
title: MFA_Configuration
pagination_label: MFA_Configuration
sidebar_label: MFA_Configuration
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'MFA_Configuration', 'BetaMFA_Configuration'] 
slug: /tools/sdk/python/beta/methods/mfa-configuration
tags: ['SDK', 'Software Development Kit', 'MFA_Configuration', 'BetaMFA_Configuration']
---

# sailpoint.beta.MFAConfigurationApi
  Configure and test multifactor authentication (MFA) methods 
All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_mfa_config**](MFAConfigurationApi#delete-mfa-config) | **DELETE** `/mfa/{method}/delete` | Delete MFA method configuration
[**get_mfa_duo_config**](MFAConfigurationApi#get-mfa-duo-config) | **GET** `/mfa/duo-web/config` | Configuration of Duo MFA method
[**get_mfa_kba_config**](MFAConfigurationApi#get-mfa-kba-config) | **GET** `/mfa/kba/config` | Configuration of KBA MFA method
[**get_mfa_okta_config**](MFAConfigurationApi#get-mfa-okta-config) | **GET** `/mfa/okta-verify/config` | Configuration of Okta MFA method
[**set_mfa_duo_config**](MFAConfigurationApi#set-mfa-duo-config) | **PUT** `/mfa/duo-web/config` | Set Duo MFA configuration
[**set_mfa_okta_config**](MFAConfigurationApi#set-mfa-okta-config) | **PUT** `/mfa/okta-verify/config` | Set Okta MFA configuration
[**set_mfakba_config**](MFAConfigurationApi#set-mfakba-config) | **POST** `/mfa/kba/config/answers` | Set MFA KBA configuration
[**test_mfa_config**](MFAConfigurationApi#test-mfa-config) | **GET** `/mfa/{method}/test` | MFA method&#39;s test configuration


## delete-mfa-config
Delete MFA method configuration
This API removes the configuration for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-mfa-config)

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
from sailpoint.beta.models.mfa_okta_config import MfaOktaConfig
from sailpoint.beta.rest import ApiException
from pprint import pprint

    method = 'okta-verify' # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    try:
        # Delete MFA method configuration
        
        api_response = api_instance.delete_mfa_config(method)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.delete_mfa_config(method)
        print("The response of MFAConfigurationApi->delete_mfa_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->delete_mfa_config: %s\n" % e)
```



[[Back to top]](#) 

## get-mfa-duo-config
Configuration of Duo MFA method
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-duo-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**MfaDuoConfig**](../models/mfa-duo-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The configuration of an Duo MFA method. | MfaDuoConfig |  -  |
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
from sailpoint.beta.models.mfa_duo_config import MfaDuoConfig
from sailpoint.beta.rest import ApiException
from pprint import pprint


    try:
        # Configuration of Duo MFA method
        
        api_response = api_instance.get_mfa_duo_config()
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.get_mfa_duo_config()
        print("The response of MFAConfigurationApi->get_mfa_duo_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->get_mfa_duo_config: %s\n" % e)
```



[[Back to top]](#) 

## get-mfa-kba-config
Configuration of KBA MFA method
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-kba-config)

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
from sailpoint.beta.models.kba_question import KbaQuestion
from sailpoint.beta.rest import ApiException
from pprint import pprint

    all_languages = allLanguages=true # bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional) # bool | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)

    try:
        # Configuration of KBA MFA method
        
        api_response = api_instance.get_mfa_kba_config()
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.get_mfa_kba_config(all_languages)
        print("The response of MFAConfigurationApi->get_mfa_kba_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->get_mfa_kba_config: %s\n" % e)
```



[[Back to top]](#) 

## get-mfa-okta-config
Configuration of Okta MFA method
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-okta-config)

### Parameters 
This endpoint does not need any parameter. 

### Return type
[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | The configuration of an Okta MFA method. | MfaOktaConfig |  -  |
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
from sailpoint.beta.models.mfa_okta_config import MfaOktaConfig
from sailpoint.beta.rest import ApiException
from pprint import pprint


    try:
        # Configuration of Okta MFA method
        
        api_response = api_instance.get_mfa_okta_config()
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.get_mfa_okta_config()
        print("The response of MFAConfigurationApi->get_mfa_okta_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->get_mfa_okta_config: %s\n" % e)
```



[[Back to top]](#) 

## set-mfa-duo-config
Set Duo MFA configuration
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfa-duo-config)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.models.mfa_duo_config import MfaDuoConfig
from sailpoint.beta.rest import ApiException
from pprint import pprint

    mfa_duo_config = {
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "configProperties" : {
            "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
            "ikey" : "Q123WE45R6TY7890ZXCV"
          },
          "mfaMethod" : "duo-web",
          "enabled" : true,
          "identityAttribute" : "email"
        } # MfaDuoConfig | 

    try:
        # Set Duo MFA configuration
        Result = mfa_duo_config.from_json(mfa_duo_config)
        api_response = api_instance.set_mfa_duo_config(Result)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.set_mfa_duo_config(Result)
        print("The response of MFAConfigurationApi->set_mfa_duo_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->set_mfa_duo_config: %s\n" % e)
```



[[Back to top]](#) 

## set-mfa-okta-config
Set Okta MFA configuration
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfa-okta-config)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.models.mfa_okta_config import MfaOktaConfig
from sailpoint.beta.rest import ApiException
from pprint import pprint

    mfa_okta_config = {
          "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
          "host" : "example.com",
          "mfaMethod" : "okta-verify",
          "enabled" : true,
          "identityAttribute" : "email"
        } # MfaOktaConfig | 

    try:
        # Set Okta MFA configuration
        Result = mfa_okta_config.from_json(mfa_okta_config)
        api_response = api_instance.set_mfa_okta_config(Result)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.set_mfa_okta_config(Result)
        print("The response of MFAConfigurationApi->set_mfa_okta_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->set_mfa_okta_config: %s\n" % e)
```



[[Back to top]](#) 

## set-mfakba-config
Set MFA KBA configuration
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfakba-config)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
import sailpoint.beta
from sailpoint.beta.models.kba_answer_request_item import KbaAnswerRequestItem
from sailpoint.beta.models.kba_answer_response_item import KbaAnswerResponseItem
from sailpoint.beta.rest import ApiException
from pprint import pprint

    [{id=173423, answer=822cd15d6c15aa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a0859a2fea34}, {id=c54fee53-2d63-4fc5-9259-3e93b9994135, answer=9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08}] # List[KbaAnswerRequestItem] | 
     kba_answer_request_item = {
          "answer" : "Your answer",
          "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
        } # List[KbaAnswerRequestItem] | 
    

    try:
        # Set MFA KBA configuration
        Result = kba_answer_request_item.from_json(kba_answer_request_item)
        api_response = api_instance.set_mfakba_config(Result)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.set_mfakba_config(Result)
        print("The response of MFAConfigurationApi->set_mfakba_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->set_mfakba_config: %s\n" % e)
```



[[Back to top]](#) 

## test-mfa-config
MFA method's test configuration
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-mfa-config)

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
from sailpoint.beta.models.mfa_config_test_response import MfaConfigTestResponse
from sailpoint.beta.rest import ApiException
from pprint import pprint

    method = 'okta-verify' # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'. # str | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

    try:
        # MFA method's test configuration
        
        api_response = api_instance.test_mfa_config(method)
        
        # Below is a request that includes all optional parameters
        # api_response = api_instance.test_mfa_config(method)
        print("The response of MFAConfigurationApi->test_mfa_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MFAConfigurationApi->test_mfa_config: %s\n" % e)
```



[[Back to top]](#) 



