# JITActivationConvert

# JITActivationConvert
  Use this API to convert the assignment type of an entitlement connection between
STANDING and JIT (Just-In-Time Privileged).

OAuth scope required: **idn:jit-assignment-type-conversion:manage**
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Start-EntitlementConnectionConversionV1**](#start-entitlement-connection-conversion-v1) | **POST** `/convert-entitlement-connection/v1` | Convert entitlement connection assignment type


## start-entitlement-connection-conversion-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Initiates an asynchronous workflow to convert the assignment type of an entitlement connection
between `STANDING` and `JIT` (Just-In-Time Privileged).

The response is returned with HTTP 202 Accepted while the conversion workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-entitlement-connection-conversion-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ConvertEntitlementConnectionRequest | [**ConvertEntitlementConnectionRequest**](../models/convert-entitlement-connection-request) | True  | 

### Return type
[**ConvertEntitlementConnectionResponse**](../models/convert-entitlement-connection-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
202 | Accepted. The conversion workflow was accepted and is running.  | ConvertEntitlementConnectionResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | StartEntitlementConnectionConversionV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | StartEntitlementConnectionConversionV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ConvertEntitlementConnectionRequest = @"{
  "connectionId" : "757fb803-9024-5861-e510-83a56e4c5bd3",
  "targetType" : "JIT"
}"@

# Convert entitlement connection assignment type

try {
    $Result = ConvertFrom-JsonToConvertEntitlementConnectionRequest -Json $ConvertEntitlementConnectionRequest
    Start-EntitlementConnectionConversionV1 -XSailPointExperimental $XSailPointExperimental -ConvertEntitlementConnectionRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Start-EntitlementConnectionConversionV1 -XSailPointExperimental $XSailPointExperimental -ConvertEntitlementConnectionRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Start-EntitlementConnectionConversionV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
