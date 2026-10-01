# PrivilegeCriteria

# PrivilegeCriteria
  Use this API to create, retrieve, update, and delete privilege criteria.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-CustomPrivilegeCriteriaV1**](#create-custom-privilege-criteria-v1) | **POST** `/criteria/v1/privilege` | Create custom privilege criteria
[**Remove-CustomPrivilegeCriteriaV1**](#delete-custom-privilege-criteria-v1) | **DELETE** `/criteria/v1/privilege/{criteriaId}` | Delete privilege criteria
[**Get-PrivilegeCriteriaV1**](#get-privilege-criteria-v1) | **GET** `/criteria/v1/privilege/{criteriaId}` | Get privilege criteria
[**Get-PrivilegeCriteriaV1**](#list-privilege-criteria-v1) | **GET** `/criteria/v1/privilege` | List privilege criteria
[**Send-CustomPrivilegeCriteriaValueV1**](#put-custom-privilege-criteria-value-v1) | **PUT** `/criteria/v1/privilege/{criteriaId}` | Update privilege criteria


## create-custom-privilege-criteria-v1
Use this API to create a custom privilege criteria

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-privilege-criteria-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreatePrivilegeCriteriaRequest | [**CreatePrivilegeCriteriaRequest**](../models/create-privilege-criteria-request) | True  | Create custom privilege criteria request body.

### Return type
[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Custom privilege criteria created | PrivilegeCriteriaDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreatePrivilegeCriteriaRequest = @"{
  "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
  "privilegeLevel" : "HIGH",
  "groups" : [ {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    } ],
    "operator" : "AND"
  }, {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "targetType" : "group",
      "operator" : "displayName"
    } ],
    "operator" : "AND"
  } ],
  "type" : "CUSTOM",
  "operator" : "AND"
}"@

# Create custom privilege criteria

try {
    $Result = ConvertFrom-JsonToCreatePrivilegeCriteriaRequest -Json $CreatePrivilegeCriteriaRequest
    New-CustomPrivilegeCriteriaV1 -CreatePrivilegeCriteriaRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-CustomPrivilegeCriteriaV1 -CreatePrivilegeCriteriaRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-CustomPrivilegeCriteriaV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-custom-privilege-criteria-v1
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-privilege-criteria-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CriteriaId | **String** | True  | The Id of the custom privilege criteria to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Success | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$CriteriaId = "6d123044-5834-4e8d-a49f-9c70089b0de1" # String | The Id of the custom privilege criteria to delete.

# Delete privilege criteria

try {
    Remove-CustomPrivilegeCriteriaV1 -CriteriaId $CriteriaId 
    
    # Below is a request that includes all optional parameters
    # Remove-CustomPrivilegeCriteriaV1 -CriteriaId $CriteriaId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-CustomPrivilegeCriteriaV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-privilege-criteria-v1
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/get-privilege-criteria-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CriteriaId | **String** | True  | The Id of the privilege criteria record to return.

### Return type
[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | PrivilegeCriteriaDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$CriteriaId = "6d123044-5834-4e8d-a49f-9c70089b0de1" # String | The Id of the privilege criteria record to return.

# Get privilege criteria

try {
    Get-PrivilegeCriteriaV1 -CriteriaId $CriteriaId 
    
    # Below is a request that includes all optional parameters
    # Get-PrivilegeCriteriaV1 -CriteriaId $CriteriaId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PrivilegeCriteriaV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-privilege-criteria-v1
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/list-privilege-criteria-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Filters | **String** | True  | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq ""CUSTOM"" and sourceId eq ""2c91809175e6c63f0175fb5570220569""`

### Return type
[**PrivilegeCriteriaDTO[]**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | PrivilegeCriteriaDTO[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Filters = 'type eq "CUSTOM" and sourceId eq "c42c45d8d7c04d2da64d215cd8c32f21"" # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: `?filters=type eq ""CUSTOM"" and sourceId eq ""2c91809175e6c63f0175fb5570220569"'`

# List privilege criteria

try {
    Get-PrivilegeCriteriaV1 -Filters $Filters 
    
    # Below is a request that includes all optional parameters
    # Get-PrivilegeCriteriaV1 -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PrivilegeCriteriaV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-custom-privilege-criteria-value-v1
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/put-custom-privilege-criteria-value-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | CriteriaId | **String** | True  | The Id of the privilege criteria record to return.
 Body  | PrivilegeCriteriaDTO | [**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto) | True  | The new version of the custom privilege criteria. This overwrites the existing privilege criteria.

### Return type
[**PrivilegeCriteriaDTO**](../models/privilege-criteria-dto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | OK | PrivilegeCriteriaDTO
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPrivilegeCriteriaV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPrivilegeCriteriaV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CriteriaId = "6d123044-5834-4e8d-a49f-9c70089b0de1" # String | The Id of the privilege criteria record to return.
$PrivilegeCriteriaDTO = @"{
  "sourceId" : "c42c45d8d7c04d2da64d215cd8c32f21",
  "privilegeLevel" : "HIGH",
  "groups" : [ {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    } ],
    "operator" : "AND"
  }, {
    "criteriaItems" : [ {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    }, {
      "ignoreCase" : true,
      "values" : [ "admin", "superuser" ],
      "property" : "displayName",
      "targetType" : "group",
      "operator" : "IN"
    } ],
    "operator" : "AND"
  } ],
  "id" : "2c9180867817ac4d017817c491119a20",
  "type" : "CUSTOM",
  "operator" : "AND"
}"@

# Update privilege criteria

try {
    $Result = ConvertFrom-JsonToPrivilegeCriteriaDTO -Json $PrivilegeCriteriaDTO
    Send-CustomPrivilegeCriteriaValueV1 -CriteriaId $CriteriaId -PrivilegeCriteriaDTO $Result 
    
    # Below is a request that includes all optional parameters
    # Send-CustomPrivilegeCriteriaValueV1 -CriteriaId $CriteriaId -PrivilegeCriteriaDTO $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-CustomPrivilegeCriteriaValueV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
