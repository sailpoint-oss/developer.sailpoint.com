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
[**Remove-BetaMFAConfig**](#delete-mfa-config) | **DELETE** `/mfa/{method}/delete` | Delete mfa method configuration
[**Get-BetaMFADuoConfig**](#get-mfa-duo-config) | **GET** `/mfa/duo-web/config` | Configuration of duo mfa method
[**Get-BetaMFAKbaConfig**](#get-mfa-kba-config) | **GET** `/mfa/kba/config` | Configuration of kba mfa method
[**Get-BetaMFAOktaConfig**](#get-mfa-okta-config) | **GET** `/mfa/okta-verify/config` | Configuration of okta mfa method
[**Set-BetaMFADuoConfig**](#set-mfa-duo-config) | **PUT** `/mfa/duo-web/config` | Set duo mfa configuration
[**Set-BetaMFAKBAConfig**](#set-mfakba-config) | **POST** `/mfa/kba/config/answers` | Set mfa kba configuration
[**Set-BetaMFAOktaConfig**](#set-mfa-okta-config) | **PUT** `/mfa/okta-verify/config` | Set okta mfa configuration
[**Test-BetaMFAConfig**](#test-mfa-config) | **GET** `/mfa/{method}/test` | Mfa method&#39;s test configuration


## delete-mfa-config
This API removes the configuration for the specified MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-mfa-config)

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

# Delete mfa method configuration

try {
    Remove-BetaMFAConfig -Method $Method 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaMFAConfig -Method $Method  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaMFAConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mfa-duo-config
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-duo-config)

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

# Configuration of duo mfa method

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

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-kba-config)

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

# Configuration of kba mfa method

try {
    Get-BetaMFAKbaConfig 
    
    # Below is a request that includes all optional parameters
    # Get-BetaMFAKbaConfig -AllLanguages $AllLanguages  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaMFAKbaConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mfa-okta-config
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-mfa-okta-config)

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

# Configuration of okta mfa method

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

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfa-duo-config)

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

# Set duo mfa configuration

try {
    $Result = ConvertFrom-BetaJsonToMfaDuoConfig -Json $MfaDuoConfig
    Set-BetaMFADuoConfig -MfaDuoConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaMFADuoConfig -MfaDuoConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaMFADuoConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-mfakba-config
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfakba-config)

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
 $KbaAnswerRequestItem = @"{
  "answer" : "Your answer",
  "id" : "c54fee53-2d63-4fc5-9259-3e93b9994135"
}"@ # KbaAnswerRequestItem[] | 
 

# Set mfa kba configuration

try {
    $Result = ConvertFrom-BetaJsonToKbaAnswerRequestItem -Json $KbaAnswerRequestItem
    Set-BetaMFAKBAConfig -KbaAnswerRequestItem $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaMFAKBAConfig -KbaAnswerRequestItem $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaMFAKBAConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-mfa-okta-config
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/beta/set-mfa-okta-config)

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

# Set okta mfa configuration

try {
    $Result = ConvertFrom-BetaJsonToMfaOktaConfig -Json $MfaOktaConfig
    Set-BetaMFAOktaConfig -MfaOktaConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-BetaMFAOktaConfig -MfaOktaConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-BetaMFAOktaConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-mfa-config
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/beta/test-mfa-config)

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

# Mfa method's test configuration

try {
    Test-BetaMFAConfig -Method $Method 
    
    # Below is a request that includes all optional parameters
    # Test-BetaMFAConfig -Method $Method  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-BetaMFAConfig"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
