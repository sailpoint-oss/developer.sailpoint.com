# ClassifySource

# ClassifySource
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-ClassifyMachineAccountFromSourceV1**](#delete-classify-machine-account-from-source-v1) | **DELETE** `/sources/v1/{sourceId}/classify` | Cancel classify source&#39;s accounts process
[**Get-ClassifyMachineAccountFromSourceStatusV1**](#get-classify-machine-account-from-source-status-v1) | **GET** `/sources/v1/{sourceId}/classify` | Source accounts classification status
[**Send-ClassifyMachineAccountFromSourceV1**](#send-classify-machine-account-from-source-v1) | **POST** `/sources/v1/{sourceId}/classify` | Classify source&#39;s all accounts


## delete-classify-machine-account-from-source-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to cancel account classification process on a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-classify-machine-account-from-source-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetClassifyMachineAccountFromSourceStatusV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetClassifyMachineAccountFromSourceStatusV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Cancel classify source's accounts process

try {
    Remove-ClassifyMachineAccountFromSourceV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-ClassifyMachineAccountFromSourceV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ClassifyMachineAccountFromSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-classify-machine-account-from-source-status-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to get the status of Machine Account Classification process for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/get-classify-machine-account-from-source-status-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SourceClassificationStatus**](../models/source-classification-status)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source Accounts Classification Status object. | SourceClassificationStatus
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetClassifyMachineAccountFromSourceStatusV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetClassifyMachineAccountFromSourceStatusV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Source accounts classification status

try {
    Get-ClassifyMachineAccountFromSourceStatusV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ClassifyMachineAccountFromSourceStatusV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ClassifyMachineAccountFromSourceStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-classify-machine-account-from-source-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to classify all the accounts from a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/send-classify-machine-account-from-source-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SendClassifyMachineAccountFromSourceV1200Response**](../models/send-classify-machine-account-from-source-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Source&#39;s all accounts submitted for classification. | SendClassifyMachineAccountFromSourceV1200Response
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetClassifyMachineAccountFromSourceStatusV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetClassifyMachineAccountFromSourceStatusV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Classify source's all accounts

try {
    Send-ClassifyMachineAccountFromSourceV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Send-ClassifyMachineAccountFromSourceV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ClassifyMachineAccountFromSourceV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
