# RolePropagation

# RolePropagation
  Role Change Propagation ensures that any changes to the composition of a role’s access objects 
(entitlements, access profiles, or dimensions) are applied to all member identities. 
For example: If an entitlement is removed from a role, all identities assigned to that role 
should lose access to that entitlement as part of this process.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Suspend-RolePropagationV1**](#cancel-role-propagation-v1) | **POST** `/role-propagation/v1/terminate` | Terminate Role Propagation process
[**Get-OngoingRolePropagationV1**](#get-ongoing-role-propagation-v1) | **GET** `/role-propagation/v1/is-running` | Get ongoing Role Propagation process
[**Get-RolePropagationConfigV1**](#get-role-propagation-config-v1) | **GET** `/role-propagation-config/v1` | Get Role Change Propagation Configuration
[**Get-RolePropagationStatusV1**](#get-role-propagation-status-v1) | **GET** `/role-propagation/v1/{rolePropagationId}/status` | Get status of Role-Propagation process
[**Set-RolePropagationConfigV1**](#set-role-propagation-config-v1) | **PUT** `/role-propagation-config/v1` | Update Role Change Propagation Configuration
[**Start-RolePropagationV1**](#start-role-propagation-v1) | **POST** `/role-propagation/v1` | Initiate Role Propagation process


## cancel-role-propagation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint terminates the ongoing role change propagation process for a tenant.

[API Spec](https://developer.sailpoint.com/docs/api/cancel-role-propagation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Role Propagation has been successfully terminated. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Terminate Role Propagation process

try {
    Suspend-RolePropagationV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Suspend-RolePropagationV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Suspend-RolePropagationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-ongoing-role-propagation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint returns the information of ongoing role change propagation process for a tenant. It returns the information whether the role propagation process is currently running or not, If it is running it returns the details of the ongoing role propagation process. The execution stage of the role propagation process can be one of the following: - PENDING - The role propagation process is queued to be executed. - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data. - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities. - SUCCEEDED - The role propagation process has successfully completed. - FAILED - The role propagation process has failed. - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/get-ongoing-role-propagation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Rolepropagationongoingresponse**](../models/rolepropagationongoingresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Information of ongoing role propagation process. | Rolepropagationongoingresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get ongoing Role Propagation process

try {
    Get-OngoingRolePropagationV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-OngoingRolePropagationV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-OngoingRolePropagationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-propagation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint fetches the Role Change Propagation Configuration for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/get-role-propagation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Rolepropagationconfigresponse**](../models/rolepropagationconfigresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Role Change Propagation configuration for the tenant. | Rolepropagationconfigresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get Role Change Propagation Configuration

try {
    Get-RolePropagationConfigV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-RolePropagationConfigV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RolePropagationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-role-propagation-status-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint returns the information of the specified role change propagation process. The execution stage of the role propagation process can be one of the following:
    - PENDING - The role propagation process is queued to be executed.
    - DATA_AGGREGATION_RUNNING - The role propagation process is currently aggregating data.
    - LAUNCH_PROVISIONING - The role propagation process has started to provision the access to the identities.
    - SUCCEEDED - The role propagation process has successfully completed.
    - FAILED - The role propagation process has failed.
    - TERMINATED - The role propagation process was externally terminated.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-propagation-status-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | RolePropagationId | **String** | True  | The ID of the role propagation process to retrieve the status for.

### Return type
[**Rolepropagationstatusresponse**](../models/rolepropagationstatusresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Information of the role propagation process. | Rolepropagationstatusresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RolePropagationId = "47b9fb02-e12e-42ba-8bfe-1860d78c88eb" # String | The ID of the role propagation process to retrieve the status for.

# Get status of Role-Propagation process

try {
    Get-RolePropagationStatusV1 -XSailPointExperimental $XSailPointExperimental -RolePropagationId $RolePropagationId 
    
    # Below is a request that includes all optional parameters
    # Get-RolePropagationStatusV1 -XSailPointExperimental $XSailPointExperimental -RolePropagationId $RolePropagationId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-RolePropagationStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-role-propagation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint enables or disables the Role Change Propagation Process for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/set-role-propagation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | Rolepropagationconfiginput | [**Rolepropagationconfiginput**](../models/rolepropagationconfiginput) | True  | 

### Return type
[**Rolepropagationconfigresponse**](../models/rolepropagationconfigresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Role Change Propagation configuration for the tenant is successfully updated. | Rolepropagationconfigresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Rolepropagationconfiginput = @"{
  "enabled" : true
}"@

# Update Role Change Propagation Configuration

try {
    $Result = ConvertFrom-JsonToRolepropagationconfiginput -Json $Rolepropagationconfiginput
    Set-RolePropagationConfigV1 -XSailPointExperimental $XSailPointExperimental -Rolepropagationconfiginput $Result 
    
    # Below is a request that includes all optional parameters
    # Set-RolePropagationConfigV1 -XSailPointExperimental $XSailPointExperimental -Rolepropagationconfiginput $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-RolePropagationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## start-role-propagation-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint initiates a role change propagation process for a tenant asynchronously.  If all preconditions are met, the request is accepted and a rolePropagationId is returned which  can be used to view the status.
API throws 4xx if any of the following conditions are met - Role propagation feature is disabled  - There is an ongoing role propagation for the tenant - Role refresh needs to be kicked off as part of the role propagation (skipRoleRefresh=false) and there is an ongoing refresh for the tenant

[API Spec](https://developer.sailpoint.com/docs/api/start-role-propagation-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | SkipRoleRefresh | **Boolean** |   (optional) (default to $false) | When true, the role refresh is not performed. Keeping it false is recommended.

### Return type
[**Rolepropagationresponse**](../models/rolepropagationresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Role Propagation has sucessfully started. | Rolepropagationresponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartRolePropagationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartRolePropagationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SkipRoleRefresh = $true # Boolean | When true, the role refresh is not performed. Keeping it false is recommended. (optional) (default to $false)

# Initiate Role Propagation process

try {
    Start-RolePropagationV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Start-RolePropagationV1 -XSailPointExperimental $XSailPointExperimental -SkipRoleRefresh $SkipRoleRefresh  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-RolePropagationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
