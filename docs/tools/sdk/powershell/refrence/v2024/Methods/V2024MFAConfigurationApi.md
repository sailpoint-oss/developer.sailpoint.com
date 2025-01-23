---
id: mfa-configuration
title: MFAConfiguration
pagination_label: MFAConfiguration
sidebar_label: MFAConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MFAConfiguration'] 
slug: /tools/sdk/powershell/v2024/methods/mfa-configuration
tags: ['SDK', 'Software Development Kit', 'MFAConfiguration']
---


# MFAConfiguration

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024MFADuoConfig**](#get-mfa-duo-config) | **GET** `/mfa/duo-web/config` | Configuration of Duo MFA method
[**Get-V2024MFAKbaConfig**](#get-mfa-kba-config) | **GET** `/mfa/kba/config` | Configuration of KBA MFA method
[**Get-V2024MFAOktaConfig**](#get-mfa-okta-config) | **GET** `/mfa/okta-verify/config` | Configuration of Okta MFA method
[**Set-V2024MFADuoConfig**](#set-mfa-duo-config) | **PUT** `/mfa/duo-web/config` | Set Duo MFA configuration
[**Set-V2024MFAKBAConfig**](#set-mfakba-config) | **POST** `/mfa/kba/config/answers` | Set MFA KBA configuration
[**Set-V2024MFAOktaConfig**](#set-mfa-okta-config) | **PUT** `/mfa/okta-verify/config` | Set Okta MFA configuration
[**Test-V2024MFAConfig**](#test-mfa-config) | **GET** `/mfa/{method}/test` | MFA method&#39;s test configuration


## get-mfa-duo-config

This API returns the configuration of an Duo MFA method.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**MfaDuoConfig**](../models/mfa-duo-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The configuration of an Duo MFA method. | MfaDuoConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Configuration of Duo MFA method
try {
    Get-V2024MFADuoConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024MFADuoConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024MFADuoConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-mfa-kba-config

This API returns the KBA configuration for MFA.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | AllLanguages | **Boolean** |   (optional) | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false

### Return type

[**KbaQuestion[]**](../models/kba-question)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The configuration for KBA MFA method. | KbaQuestion[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AllLanguages = $false # Boolean | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)
# Configuration of KBA MFA method
try {
    Get-V2024MFAKbaConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024MFAKbaConfig -V2024AllLanguages $AllLanguages  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024MFAKbaConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-mfa-okta-config

This API returns the configuration of an Okta MFA method.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type

[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The configuration of an Okta MFA method. | MfaOktaConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Configuration of Okta MFA method
try {
    Get-V2024MFAOktaConfig
    
    # Below is a request that includes all optional parameters
    # Get-V2024MFAOktaConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024MFAOktaConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-mfa-duo-config

This API sets the configuration of an Duo MFA method.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | MfaDuoConfig | [**MfaDuoConfig**](../models/mfa-duo-config) | True  | 

### Return type

[**MfaDuoConfig**](../models/mfa-duo-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MFA configuration of an Duo MFA method. | MfaDuoConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$MfaDuoConfig = @"{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "configProperties" : {
    "skey" : "qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x",
    "ikey" : "Q123WE45R6TY7890ZXCV"
  },
  "mfaMethod" : "duo-web",
  "enabled" : true,
  "identityAttribute" : "email"
}"@
# Set Duo MFA configuration
try {
    $Result = ConvertFrom-JsonToMfaDuoConfig -Json $MfaDuoConfig
    Set-V2024MFADuoConfig-V2024MfaDuoConfig $Result
    
    # Below is a request that includes all optional parameters
    # Set-V2024MFADuoConfig -V2024MfaDuoConfig $MfaDuoConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024MFADuoConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-mfakba-config

This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | KbaAnswerRequestItem | [**[]KbaAnswerRequestItem**](../models/kba-answer-request-item) | True  | 

### Return type

[**KbaAnswerResponseItem[]**](../models/kba-answer-response-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The new KBA configuration for the user. | KbaAnswerResponseItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
 # KbaAnswerRequestItem[] | 
 $KbaAnswerRequestItem = @"{
  "answer" : "Your answer",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
}"@ 

# Set MFA KBA configuration
try {
    $Result = ConvertFrom-JsonToKbaAnswerRequestItem -Json $KbaAnswerRequestItem
    Set-V2024MFAKBAConfig-V2024KbaAnswerRequestItem $Result
    
    # Below is a request that includes all optional parameters
    # Set-V2024MFAKBAConfig -V2024KbaAnswerRequestItem $KbaAnswerRequestItem  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024MFAKBAConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## set-mfa-okta-config

This API sets the configuration of an Okta MFA method.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | MfaOktaConfig | [**MfaOktaConfig**](../models/mfa-okta-config) | True  | 

### Return type

[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MFA configuration of an Okta MFA method. | MfaOktaConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$MfaOktaConfig = @"{
  "accessKey" : "qw123Y3QlA5UqocYpdU3rEkzrK2D497y",
  "host" : "example.com",
  "mfaMethod" : "okta-verify",
  "enabled" : true,
  "identityAttribute" : "email"
}"@
# Set Okta MFA configuration
try {
    $Result = ConvertFrom-JsonToMfaOktaConfig -Json $MfaOktaConfig
    Set-V2024MFAOktaConfig-V2024MfaOktaConfig $Result
    
    # Below is a request that includes all optional parameters
    # Set-V2024MFAOktaConfig -V2024MfaOktaConfig $MfaOktaConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-V2024MFAOktaConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## test-mfa-config

This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Method | **String** | True  | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

### Return type

[**MfaConfigTestResponse**](../models/mfa-config-test-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The result of configuration test for the MFA provider. | MfaConfigTestResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Method = "okta-verify" # String | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.
# MFA method's test configuration
try {
    Test-V2024MFAConfig-V2024Method $Method 
    
    # Below is a request that includes all optional parameters
    # Test-V2024MFAConfig -V2024Method $Method  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-V2024MFAConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


