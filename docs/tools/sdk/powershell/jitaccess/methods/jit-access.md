# JITAccess

# JITAccess
  Use these APIs to configure JIT provisioning activation policy for the tenant.
OAuth scopes: **idn:jit-policy:read** and **idn:jit-policy:manage** (get config), **idn:jit-policy:update** and **idn:jit-policy:manage** (update config). JIT activation workflow APIs use **idn:jit-activation-workflow:*** scopes (activate, extend, deactivate, manage, and **idn:jit-activation-workflow-internal:manage**).
For REST contract details, use the JIT Access operations in this specification and the [SailPoint API documentation](https://developer.sailpoint.com/idn/api/).
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-JitActivationConfigV1**](#get-jit-activation-config-v1) | **GET** `/jit-activation-config/v1/{configType}` | Get JIT activation policy configuration
[**Update-JitActivationConfigV1**](#patch-jit-activation-config-v1) | **PATCH** `/jit-activation-config/v1/{configType}` | Update JIT activation policy configuration


## get-jit-activation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns the tenant's current JIT activation policy configuration, including governed entitlement IDs, activation and extension time limits, default periods, notification settings, and whether the policy applies to future assignments.

The tenant comes from the authenticated request context (not the URL). Use **configType** to select which configuration to read. Returns **404** if that configuration has not been stored yet.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/get-jit-activation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ConfigType | **String** | True  | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**JITActivationConfigResponse**](../models/jit-activation-config-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Current JIT activation policy configuration, including limits, entitlements in scope, and notification-related fields. | JITActivationConfigResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetJitActivationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetJitActivationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$ConfigType = "policy" # String | Configuration kind to read. Only **policy** (JIT activation policy) is supported today. 
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get JIT activation policy configuration

try {
    Get-JitActivationConfigV1 -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-JitActivationConfigV1 -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-JitActivationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-jit-activation-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates the tenant's JIT activation policy configuration by applying one or more **replace** operations (same shape as JSON Patch: **op**, **path**, **value**). Use this to change entitlement lists, max/default activation and extension durations, notification recipients or template, and the apply-to-future-assignments flag.

The body must be a non-empty array. Only **replace** is supported; each **path** must be one of the values documented on the request item schema. The tenant is taken from the request context. **configType** selects which configuration to update. Returns **404** if the configuration does not exist, or **400** for an empty body, unknown **configType**, or invalid path/value.

**User level:** POLICY_ADMIN (policy administrator).


[API Spec](https://developer.sailpoint.com/docs/api/patch-jit-activation-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | ConfigType | **String** | True  | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JitAccessOperationRequest | [**[]JitAccessOperationRequest**](../models/jit-access-operation-request) | True  | 

### Return type
[**JITActivationConfigResponse**](../models/jit-activation-config-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Full JIT activation policy configuration after applying all requested replace operations. | JITActivationConfigResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetJitActivationConfigV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetJitActivationConfigV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$ConfigType = "policy" # String | Configuration kind to update. Only **policy** (JIT activation policy) is supported today. 
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JitAccessOperationRequest = @"{
  "op" : "replace",
  "path" : "/maxActivationPeriodMins",
  "value" : 60
}"@ # JitAccessOperationRequest[] | 
 

# Update JIT activation policy configuration

try {
    $Result = ConvertFrom-JsonToJitAccessOperationRequest -Json $JitAccessOperationRequest
    Update-JitActivationConfigV1 -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental -JitAccessOperationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-JitActivationConfigV1 -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental -JitAccessOperationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-JitActivationConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
