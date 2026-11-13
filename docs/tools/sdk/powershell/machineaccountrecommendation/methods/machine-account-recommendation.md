# MachineAccountRecommendation

# MachineAccountRecommendation
  Use this API to review machine account discovery results. Machine account discovery analyzes accounts and recommends whether each account belongs to a machine rather than a person.

You can get the recommendation for an account, including the reasons behind it, and you can list the reasons that machine account discovery reports, with a readable message for each reason.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-MachineAccountRecommendationV1**](#get-machine-account-recommendation-v1) | **GET** `/accounts/v1/{id}/recommendation` | Get machine account recommendation
[**Get-MachineAccountDiscoveryReasonsV1**](#list-machine-account-discovery-reasons-v1) | **GET** `/ai-recommendations/v1/reasons/machine-account-discovery` | List machine account discovery reasons


## get-machine-account-recommendation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the machine account discovery recommendation for an account. The recommendation states whether
the account is likely a machine account and lists the reasons that contributed to it.


When no recommendation exists for the account, this API returns `200` with an empty response body.


When machine account discovery is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-recommendation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | Id | **String** | True  | Account ID.

### Return type
[**MachineAccountRecommendation**](../models/machine-account-recommendation)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine account recommendation for the account. | MachineAccountRecommendation
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineAccountRecommendationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineAccountRecommendationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Id = "2c9180835d2e5168015d32f890ca1581" # String | Account ID.

# Get machine account recommendation

try {
    Get-MachineAccountRecommendationV1 -XSailPointExperimental $XSailPointExperimental -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-MachineAccountRecommendationV1 -XSailPointExperimental $XSailPointExperimental -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineAccountRecommendationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-machine-account-discovery-reasons-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the reasons that machine account discovery can report for a recommendation. Each reason has an
ID and a readable message. Use this list to show a message for each reason in a machine account recommendation.


Messages are localized. Send the `Accept-Language` header to choose a language. When the requested language is not
available, messages are returned in the default language.


The reasons are returned in the order defined by the catalog. When the catalog does not define an order, the
reasons are sorted by ID.


When machine account discovery is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-discovery-reasons-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
   | AcceptLanguage | **String** |   (optional) (default to "en") | Preferred language for the reason messages.

### Return type
[**MachineAccountDiscoveryReason[]**](../models/machine-account-discovery-reason)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine account discovery reasons. | MachineAccountDiscoveryReason[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineAccountRecommendationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineAccountRecommendationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AcceptLanguage = "en-US" # String | Preferred language for the reason messages. (optional) (default to "en")

# List machine account discovery reasons

try {
    Get-MachineAccountDiscoveryReasonsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineAccountDiscoveryReasonsV1 -XSailPointExperimental $XSailPointExperimental -AcceptLanguage $AcceptLanguage  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineAccountDiscoveryReasonsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
