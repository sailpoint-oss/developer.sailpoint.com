# HumanAccountSubtypes

# HumanAccountSubtypes
  Use these APIs to get, create, update, and delete human account subtypes for sources, and to get and update
the account-create configuration of a human account subtype. These APIs are experimental and require the
&#x60;X-SailPoint-Experimental&#x60; header.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-HumanAccountSubtypeV2**](#create-human-account-subtype-v2) | **POST** `/accounts/v2/sources/{sourceId}/subtypes` | Create a human account subtype
[**Remove-HumanAccountSubtypeV2**](#delete-human-account-subtype-v2) | **DELETE** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Delete a human account subtype
[**Get-HumanAccountSubtypeConfigV2**](#get-human-account-subtype-config-v2) | **GET** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Get human subtype config
[**Get-HumanAccountSubtypeV2**](#get-human-account-subtype-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Get a human account subtype
[**Get-HumanAccountSubtypesV2**](#list-human-account-subtypes-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes` | List human account subtypes
[**Update-HumanAccountSubtypeConfigV2**](#update-human-account-subtype-config-v2) | **PATCH** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Update human subtype config
[**Update-HumanAccountSubtypeV2**](#update-human-account-subtype-v2) | **PATCH** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Update a human account subtype


## create-human-account-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a human account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-human-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of the source.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | HumanAccountSubtypeCreateRequest | [**HumanAccountSubtypeCreateRequest**](../models/human-account-subtype-create-request) | True  | 

### Return type
[**HumanAccountSubtype**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created human account subtype. | HumanAccountSubtype
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Returned if a subtype with the same technical name already exists for the source. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$HumanAccountSubtypeCreateRequest = @"{
  "default" : false,
  "displayName" : "Contractor",
  "description" : "Contractors with a limited account lifecycle",
  "technicalName" : "contractor"
}"@

# Create a human account subtype

try {
    $Result = ConvertFrom-JsonToHumanAccountSubtypeCreateRequest -Json $HumanAccountSubtypeCreateRequest
    New-HumanAccountSubtypeV2 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -HumanAccountSubtypeCreateRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-HumanAccountSubtypeV2 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -HumanAccountSubtypeCreateRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-HumanAccountSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-human-account-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a human account subtype of a source, together with its account-create configuration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-human-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of the source.
Path   | SubtypeId | **String** | True  | ID of the human account subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Human account subtype deleted. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Conflict - Returned if the subtype is in use and cannot be deleted. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source.
$SubtypeId = "38453251-6be2-5f8f-df93-5ce19e295838" # String | ID of the human account subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete a human account subtype

try {
    Remove-HumanAccountSubtypeV2 -SourceId $SourceId -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-HumanAccountSubtypeV2 -SourceId $SourceId -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-HumanAccountSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-human-account-subtype-config-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the account-create configuration of a human account subtype by subtype ID. A subtype with no stored configuration returns the default values.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-config-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | ID of the human account subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtypeConfig**](../models/human-account-subtype-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Account-create configuration of the human account subtype. | HumanAccountSubtypeConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "38453251-6be2-5f8f-df93-5ce19e295838" # String | ID of the human account subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get human subtype config

try {
    Get-HumanAccountSubtypeConfigV2 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-HumanAccountSubtypeConfigV2 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-HumanAccountSubtypeConfigV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-human-account-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a human account subtype of a source by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of the source.
Path   | SubtypeId | **String** | True  | ID of the human account subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**HumanAccountSubtype**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Human account subtype. | HumanAccountSubtype
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source.
$SubtypeId = "38453251-6be2-5f8f-df93-5ce19e295838" # String | ID of the human account subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a human account subtype

try {
    Get-HumanAccountSubtypeV2 -SourceId $SourceId -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-HumanAccountSubtypeV2 -SourceId $SourceId -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-HumanAccountSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-human-account-subtypes-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get the human account subtypes of a source.

[API Spec](https://developer.sailpoint.com/docs/api/list-human-account-subtypes-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of the source.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Sorters | **String** |   (optional) (default to "") | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId**

### Return type
[**HumanAccountSubtype[]**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of human account subtypes of the source. | HumanAccountSubtype[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Sorters = "sourceId" # String | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional) (default to "")

# List human account subtypes

try {
    Get-HumanAccountSubtypesV2 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-HumanAccountSubtypesV2 -SourceId $SourceId -XSailPointExperimental $XSailPointExperimental -Count $Count -Limit $Limit -Offset $Offset -Sorters $Sorters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-HumanAccountSubtypesV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-human-account-subtype-config-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update the account-create configuration of a human account subtype. Only operations under `/humanAccountCreate` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-config-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | ID of the human account subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch operations under `/humanAccountCreate`, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).

### Return type
[**HumanAccountSubtypeConfig**](../models/human-account-subtype-config)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated account-create configuration of the human account subtype. | HumanAccountSubtypeConfig
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "38453251-6be2-5f8f-df93-5ce19e295838" # String | ID of the human account subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | JSON Patch operations under `/humanAccountCreate`, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
 

# Update human subtype config

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-HumanAccountSubtypeConfigV2 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-HumanAccountSubtypeConfigV2 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-HumanAccountSubtypeConfigV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-human-account-subtype-v2
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update the display name or description of a human account subtype. Only replace operations on `/displayName` and `/description` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-v-2)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SourceId | **String** | True  | ID of the source.
Path   | SubtypeId | **String** | True  | ID of the human account subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).

### Return type
[**HumanAccountSubtype**](../models/human-account-subtype)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated human account subtype. | HumanAccountSubtype
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListHumanAccountSubtypesV2401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListHumanAccountSubtypesV2429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SourceId = "6d0458373bec4b4b80460992b76016da" # String | ID of the source.
$SubtypeId = "38453251-6be2-5f8f-df93-5ce19e295838" # String | ID of the human account subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
 

# Update a human account subtype

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-HumanAccountSubtypeV2 -SourceId $SourceId -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-HumanAccountSubtypeV2 -SourceId $SourceId -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-HumanAccountSubtypeV2"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
