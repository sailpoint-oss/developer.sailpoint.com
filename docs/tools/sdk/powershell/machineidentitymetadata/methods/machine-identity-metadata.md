# MachineIdentityMetadata

# MachineIdentityMetadata
  Use this API to get reference data about machine identities, such as the machine identity subtypes available in the tenant. Use these values to build filters and forms for machine identities.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-MachineIdentitySubtypesV1**](#list-machine-identity-subtypes-v1) | **GET** `/machine-identity-metadata/v1/subtypes` | List machine identity subtypes


## list-machine-identity-subtypes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the machine identity subtypes available in the tenant.


The list includes **Application** and **Device**. When agentic identity governance is enabled for the tenant, the
list also includes **AI Agent**.


When Machine Identity Security is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-subtypes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
**String[]**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine identity subtypes. | String[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListMachineIdentitySubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListMachineIdentitySubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List machine identity subtypes

try {
    Get-MachineIdentitySubtypesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineIdentitySubtypesV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineIdentitySubtypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
