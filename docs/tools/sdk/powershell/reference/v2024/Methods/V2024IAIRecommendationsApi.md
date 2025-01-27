---
id: v2024-iai-recommendations
title: IAIRecommendations
pagination_label: IAIRecommendations
sidebar_label: IAIRecommendations
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IAIRecommendations'] 
slug: /tools/sdk/powershell/v2024/methods/iai-recommendations
tags: ['SDK', 'Software Development Kit', 'IAIRecommendations']
---


# IAIRecommendations

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-V2024Recommendations**](#get-recommendations) | **POST** `/recommendations/request` | Returns a Recommendation Based on Object
[**Get-V2024RecommendationsConfig**](#get-recommendations-config) | **GET** `/recommendations/config` | Get certification recommendation config values
[**Update-V2024RecommendationsConfig**](#update-recommendations-config) | **PUT** `/recommendations/config` | Update certification recommendation config values


## get-recommendations

The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RecommendationRequestDto | [**RecommendationRequestDto**](../models/recommendation-request-dto) | True  | 

### Return type

[**RecommendationResponseDto**](../models/recommendation-response-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The recommendations for a customer | RecommendationResponseDto
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
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RecommendationRequestDto = @"{
  "prescribeMode" : false,
  "excludeInterpretations" : false,
  "requests" : [ {
    "item" : {
      "id" : "2c938083633d259901633d2623ec0375",
      "type" : "ENTITLEMENT"
    },
    "identityId" : "2c938083633d259901633d25c68c00fa"
  }, {
    "item" : {
      "id" : "2c938083633d259901633d2623ec0375",
      "type" : "ENTITLEMENT"
    },
    "identityId" : "2c938083633d259901633d25c68c00fa"
  } ],
  "includeTranslationMessages" : false,
  "includeDebugInformation" : true
}"@
# Returns a Recommendation Based on Object
try {
    $Result = ConvertFrom-JsonToRecommendationRequestDto -Json $RecommendationRequestDto
    Get-V2024Recommendations-V2024XSailPointExperimental $XSailPointExperimental -V2024RecommendationRequestDto $Result
    
    # Below is a request that includes all optional parameters
    # Get-V2024Recommendations -V2024XSailPointExperimental $XSailPointExperimental -V2024RecommendationRequestDto $RecommendationRequestDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024Recommendations"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## get-recommendations-config

Retrieves configuration attributes used by certification recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type

[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Cert recommendation configuration attributes | RecommendationConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
# Get certification recommendation config values
try {
    Get-V2024RecommendationsConfig-V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024RecommendationsConfig -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024RecommendationsConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 

## update-recommendations-config

Updates configuration attributes used by certification recommendations.

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RecommendationConfigDto | [**RecommendationConfigDto**](../models/recommendation-config-dto) | True  | 

### Return type

[**RecommendationConfigDto**](../models/recommendation-config-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Cert recommendation configuration attributes after update | RecommendationConfigDto
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RecommendationConfigDto = @"{
  "recommenderFeatures" : [ "jobTitle", "location", "peer_group", "department", "active" ],
  "peerGroupPercentageThreshold" : 0.5,
  "runAutoSelectOnce" : false,
  "onlyTuneThreshold" : false
}"@
# Update certification recommendation config values
try {
    $Result = ConvertFrom-JsonToRecommendationConfigDto -Json $RecommendationConfigDto
    Update-V2024RecommendationsConfig-V2024XSailPointExperimental $XSailPointExperimental -V2024RecommendationConfigDto $Result
    
    # Below is a request that includes all optional parameters
    # Update-V2024RecommendationsConfig -V2024XSailPointExperimental $XSailPointExperimental -V2024RecommendationConfigDto $RecommendationConfigDto  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2024RecommendationsConfig"
    Write-Host $_.ErrorDetails
}
```

[[Back to top]](#) 


