# IAIRecommendations

# IAIRecommendations
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-RecommendationsConfigV1**](#get-recommendations-config-v1) | **GET** `/recommendations/v1/config` | Get certification recommendation config values
[**Get-RecommendationsV1**](#get-recommendations-v1) | **POST** `/recommendations/v1/request` | Returns recommendation based on object
[**Update-RecommendationsConfigV1**](#update-recommendations-config-v1) | **PUT** `/recommendations/v1/config` | Update certification recommendation config values


## get-recommendations-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get certification recommendation config values

try {
    Get-RecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RecommendationsConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-recommendations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
The getRecommendations API returns recommendations based on the requested object. The recommendations are invoked by IdentityIQ and IdentityNow plug-ins that retrieve recommendations based on the performed calculations.

[API Spec](https://developer.sailpoint.com/docs/api/get-recommendations-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response
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

# Returns recommendation based on object

try {
    $Result = ConvertFrom-JsonToRecommendationRequestDto -Json $RecommendationRequestDto
    Get-RecommendationsV1 -XSailPointExperimental $XSailPointExperimental -RecommendationRequestDto $Result 
    
    # Below is a request that includes all optional parameters
    # Get-RecommendationsV1 -XSailPointExperimental $XSailPointExperimental -RecommendationRequestDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RecommendationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-recommendations-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates configuration attributes used by certification recommendations.

[API Spec](https://developer.sailpoint.com/docs/api/update-recommendations-config-v-1)

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
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetRecommendationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetRecommendationsV1429Response
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
    Update-RecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental -RecommendationConfigDto $Result 
    
    # Below is a request that includes all optional parameters
    # Update-RecommendationsConfigV1 -XSailPointExperimental $XSailPointExperimental -RecommendationConfigDto $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-RecommendationsConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
