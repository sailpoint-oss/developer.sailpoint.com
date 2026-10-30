# MFAConfiguration

# MFAConfiguration
  Configure and test multifactor authentication (MFA) methods 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-MFADuoConfigV1**](#get-mfa-duo-config-v1) | **GET** `/mfa/v1/duo-web/config` | Configuration of duo mfa method
[**Get-MFAKbaConfigV1**](#get-mfa-kba-config-v1) | **GET** `/mfa/v1/kba/config` | Configuration of kba mfa method
[**Get-MFAOktaConfigV1**](#get-mfa-okta-config-v1) | **GET** `/mfa/v1/okta-verify/config` | Configuration of okta mfa method
[**Set-MFADuoConfigV1**](#set-mfa-duo-config-v1) | **PUT** `/mfa/v1/duo-web/config` | Set duo mfa configuration
[**Set-MFAKBAConfigV1**](#set-mfakba-config-v1) | **POST** `/mfa/v1/kba/config/answers` | Set mfa kba configuration
[**Set-MFAOktaConfigV1**](#set-mfa-okta-config-v1) | **PUT** `/mfa/v1/okta-verify/config` | Set okta mfa configuration
[**Test-MFAConfigV1**](#test-mfa-config-v1) | **GET** `/mfa/v1/{method}/test` | Mfa method&#39;s test configuration


## get-mfa-duo-config-v1
This API returns the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-duo-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Configuration of duo mfa method

try {
    Get-MFADuoConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-MFADuoConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MFADuoConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mfa-kba-config-v1
This API returns the KBA configuration for MFA.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-kba-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$AllLanguages = $false # Boolean | Indicator whether the question text should be returned in all configured languages    * If true, the question text is returned in all languages that it is configured in.    * If false, the question text is returned in the user locale if available, else for the default locale.     * If not passed, it behaves the same way as passing this parameter as false (optional)

# Configuration of kba mfa method

try {
    Get-MFAKbaConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-MFAKbaConfigV1 -AllLanguages $AllLanguages  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MFAKbaConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-mfa-okta-config-v1
This API returns the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/get-mfa-okta-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Configuration of okta mfa method

try {
    Get-MFAOktaConfigV1 
    
    # Below is a request that includes all optional parameters
    # Get-MFAOktaConfigV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MFAOktaConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-mfa-duo-config-v1
This API sets the configuration of an Duo MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-duo-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
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
    $Result = ConvertFrom-JsonToMfaDuoConfig -Json $MfaDuoConfig
    Set-MFADuoConfigV1 -MfaDuoConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-MFADuoConfigV1 -MfaDuoConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-MFADuoConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-mfakba-config-v1
This API sets answers to challenge questions.  Any configured questions omitted from the request are removed from user KBA configuration.    

[API Spec](https://developer.sailpoint.com/docs/api/set-mfakba-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
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
    $Result = ConvertFrom-JsonToKbaAnswerRequestItem -Json $KbaAnswerRequestItem
    Set-MFAKBAConfigV1 -KbaAnswerRequestItem $Result 
    
    # Below is a request that includes all optional parameters
    # Set-MFAKBAConfigV1 -KbaAnswerRequestItem $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-MFAKBAConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-mfa-okta-config-v1
This API sets the configuration of an Okta MFA method.

[API Spec](https://developer.sailpoint.com/docs/api/set-mfa-okta-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
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
    $Result = ConvertFrom-JsonToMfaOktaConfig -Json $MfaOktaConfig
    Set-MFAOktaConfigV1 -MfaOktaConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-MFAOktaConfigV1 -MfaOktaConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-MFAOktaConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-mfa-config-v1
This API validates that the configuration is valid and will properly authenticate with the MFA provider identified by the method path parameter.

[API Spec](https://developer.sailpoint.com/docs/api/test-mfa-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMFAOktaConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMFAOktaConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Method = "okta-verify" # String | The name of the MFA method. The currently supported method names are 'okta-verify' and 'duo-web'.

# Mfa method's test configuration

try {
    Test-MFAConfigV1 -Method $Method 
    
    # Below is a request that includes all optional parameters
    # Test-MFAConfigV1 -Method $Method  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-MFAConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
