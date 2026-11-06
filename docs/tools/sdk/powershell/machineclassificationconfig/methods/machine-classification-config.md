# MachineClassificationConfig

# MachineClassificationConfig
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Remove-MachineClassificationConfigV1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source&#39;s classification config
[**Get-MachineClassificationConfigV1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**Set-MachineClassificationConfigV1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source&#39;s classification config


## delete-machine-classification-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-classification-config-v-1)

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
200 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete source's classification config

try {
    Remove-MachineClassificationConfigV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineClassificationConfigV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineClassificationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-classification-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-classification-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Config Object | MachineClassificationConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Machine classification config for source

try {
    Get-MachineClassificationConfigV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineClassificationConfigV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineClassificationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-machine-classification-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-classification-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | Source ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | MachineClassificationConfig | [**MachineClassificationConfig**](../models/machine-classification-config) | True  | 

### Return type
[**MachineClassificationConfig**](../models/machine-classification-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated Machine Classification Config Object. | MachineClassificationConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineClassificationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineClassificationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "ef38f94347e94562b5bb8424a56397d8" # String | Source ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$MachineClassificationConfig = @"{
  "criteria" : {
    "children" : [ {
      "children" : [ {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      }, {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      } ],
      "caseSensitive" : false,
      "dataType" : "dataType",
      "attribute" : "employeeType",
      "operation" : "EQUALS",
      "value" : "SERVICE"
    }, {
      "children" : [ {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      }, {
        "children" : [ "{}", "{}" ],
        "caseSensitive" : false,
        "dataType" : "dataType",
        "attribute" : "sAMAccountName",
        "operation" : "EQUALS",
        "value" : "SVC"
      } ],
      "caseSensitive" : false,
      "dataType" : "dataType",
      "attribute" : "employeeType",
      "operation" : "EQUALS",
      "value" : "SERVICE"
    } ],
    "caseSensitive" : false,
    "dataType" : "dataType",
    "attribute" : "distinguishedName",
    "operation" : "EQUALS",
    "value" : "OU=Service Accounts"
  },
  "created" : "2017-07-11T18:45:37.098Z",
  "modified" : "2018-06-25T20:22:28.104Z",
  "classificationMethod" : "SOURCE",
  "enabled" : true
}"@

# Update source's classification config

try {
    $Result = ConvertFrom-JsonToMachineClassificationConfig -Json $MachineClassificationConfig
    Set-MachineClassificationConfigV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -MachineClassificationConfig $Result 
    
    # Below is a request that includes all optional parameters
    # Set-MachineClassificationConfigV1 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -MachineClassificationConfig $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-MachineClassificationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
