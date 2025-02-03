---
id: beta-mfa-configuration
title: MFAConfiguration
pagination_label: MFAConfiguration
sidebar_label: MFAConfiguration
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MFAConfiguration', 'BetaMFAConfiguration'] 
slug: /tools/sdk/powershell/beta/methods/mfa-configuration
tags: ['SDK', 'Software Development Kit', 'MFAConfiguration', 'BetaMFAConfiguration']
---


# MFAConfiguration
  Configure and test multifactor authentication (MFA) methods 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-BetaMFAConfig**](#delete-mfa-config) | **DELETE** `/mfa/{method}/delete` | Delete MFA method configuration
[**Get-BetaMFADuoConfig**](#get-mfa-duo-config) | **GET** `/mfa/duo-web/config` | Configuration of Duo MFA method
[**Get-BetaMFAKbaConfig**](#get-mfa-kba-config) | **GET** `/mfa/kba/config` | Configuration of KBA MFA method
[**Get-BetaMFAOktaConfig**](#get-mfa-okta-config) | **GET** `/mfa/okta-verify/config` | Configuration of Okta MFA method
[**Set-BetaMFADuoConfig**](#set-mfa-duo-config) | **PUT** `/mfa/duo-web/config` | Set Duo MFA configuration
[**Set-BetaMFAKBAConfig**](#set-mfakba-config) | **POST** `/mfa/kba/config/answers` | Set MFA KBA configuration
[**Set-BetaMFAOktaConfig**](#set-mfa-okta-config) | **PUT** `/mfa/okta-verify/config` | Set Okta MFA configuration
[**Test-BetaMFAConfig**](#test-mfa-config) | **GET** `/mfa/{method}/test` | MFA method&#39;s test configuration


## delete-mfa-config

This API removes the configuration for the specified MFA method.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Method | **String** | True  | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

### Return type

[**MfaOktaConfig**](../models/mfa-okta-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | MFA configuration of an MFA method. | MfaOktaConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Method = "okta-verify" # String | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.
# Delete MFA method configuration
try {
    Remove-BetaMFAConfig-BetaMethod $Method 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaMFAConfig -BetaMethod $Method  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaMFAConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Configuration of Duo MFA method
try {
    Get-BetaMFADuoConfig
    
    # Below is a request that includes all optional parameters
    # Get-BetaMFADuoConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMFADuoConfig"
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AllLanguages = $false # Boolean | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)
# Configuration of KBA MFA method
try {
    Get-BetaMFAKbaConfig
    
    # Below is a request that includes all optional parameters
    # Get-BetaMFAKbaConfig -BetaAllLanguages $AllLanguages  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMFAKbaConfig"
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
# Configuration of Okta MFA method
try {
    Get-BetaMFAOktaConfig
    
    # Below is a request that includes all optional parameters
    # Get-BetaMFAOktaConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMFAOktaConfig"
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    Set-BetaMFADuoConfig-BetaMfaDuoConfig $Result
    
    # Below is a request that includes all optional parameters
    # Set-BetaMFADuoConfig -BetaMfaDuoConfig $MfaDuoConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaMFADuoConfig"
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    Set-BetaMFAKBAConfig-BetaKbaAnswerRequestItem $Result
    
    # Below is a request that includes all optional parameters
    # Set-BetaMFAKBAConfig -BetaKbaAnswerRequestItem $KbaAnswerRequestItem  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaMFAKBAConfig"
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
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
    Set-BetaMFAOktaConfig-BetaMfaOktaConfig $Result
    
    # Below is a request that includes all optional parameters
    # Set-BetaMFAOktaConfig -BetaMfaOktaConfig $MfaOktaConfig  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaMFAOktaConfig"
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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Method = "okta-verify" # String | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.
# MFA method's test configuration
try {
    Test-BetaMFAConfig-BetaMethod $Method 
    
    # Below is a request that includes all optional parameters
    # Test-BetaMFAConfig -BetaMethod $Method  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaMFAConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


