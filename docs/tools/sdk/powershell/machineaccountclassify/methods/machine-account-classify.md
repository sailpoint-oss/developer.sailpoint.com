# MachineAccountClassify

# MachineAccountClassify
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Send-ClassifyMachineAccountV1**](#send-classify-machine-account-v1) | **POST** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Account ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | ClassificationMode | **String** |   (optional) (default to "default") | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human.

### Return type
[**SendClassifyMachineAccountV1200Response**](../models/send-classify-machine-account-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account classified as Machine. | SendClassifyMachineAccountV1200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | SendClassifyMachineAccountV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | SendClassifyMachineAccountV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | Account ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ClassificationMode = "default" # String | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional) (default to "default")

# Classify single machine account

try {
    Send-ClassifyMachineAccountV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Send-ClassifyMachineAccountV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -ClassificationMode $ClassificationMode  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ClassifyMachineAccountV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
