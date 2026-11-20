# AuthProfile

# AuthProfile
  Use this API to implement Auth Profile functionality. 
With this functionality in place, users can read authentication profiles and make changes to them. 

An authentication profile represents an identity profile&#39;s authentication configuration. 
When the identity profile is created, its authentication profile is also created. 
An authentication profile includes information like its authentication profile type (&#x60;BLOCK&#x60;, &#x60;MFA&#x60;, &#x60;NON_PTA&#x60;, PTA&#x60;) and settings controlling whether or not it blocks access from off network or untrusted geographies. 
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-ProfileConfigListV1**](#get-profile-config-list-v1) | **GET** `/auth-profiles/v1` | Get list of auth profiles
[**Get-ProfileConfigV1**](#get-profile-config-v1) | **GET** `/auth-profiles/v1/{id}` | Get auth profile
[**Update-ProfileConfigV1**](#patch-profile-config-v1) | **PATCH** `/auth-profiles/v1/{id}` | Patch a specified auth profile


## get-profile-config-list-v1
This API returns a list of auth profiles.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-list-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**AuthProfileSummary[]**](../models/auth-profile-summary)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Auth Profiles | AuthProfileSummary[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetProfileConfigListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetProfileConfigListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get list of auth profiles

try {
    Get-ProfileConfigListV1 
    
    # Below is a request that includes all optional parameters
    # Get-ProfileConfigListV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ProfileConfigListV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-profile-config-v1
This API returns auth profile information.

[API Spec](https://developer.sailpoint.com/docs/api/get-profile-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Auth Profile to patch.

### Return type
[**AuthProfile**](../models/auth-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Auth Profile | AuthProfile
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetProfileConfigListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetProfileConfigListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the Auth Profile to patch.

# Get auth profile

try {
    Get-ProfileConfigV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-ProfileConfigV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ProfileConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-profile-config-v1
This API updates an existing Auth Profile. The following fields are patchable:
**offNetwork**, **untrustedGeography**, **applicationId**, **applicationName**, **type**

[API Spec](https://developer.sailpoint.com/docs/api/patch-profile-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | ID of the Auth Profile to patch.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | 

### Return type
[**AuthProfile**](../models/auth-profile)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with the Auth Profile as updated. | AuthProfile
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetProfileConfigListV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetProfileConfigListV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "2c91808a7813090a017814121919ecca" # String | ID of the Auth Profile to patch.
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | 
 

# Patch a specified auth profile

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-ProfileConfigV1 -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-ProfileConfigV1 -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-ProfileConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
