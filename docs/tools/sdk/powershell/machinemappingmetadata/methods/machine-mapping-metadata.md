# MachineMappingMetadata

# MachineMappingMetadata
  Use this API to get the identity and account attributes you can use as targets when you map source attributes for machine account classification. The lists tell you which attribute names a mapping can write to before you configure it.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get-MachineMappingTargetAccountAttributesV1**](#get-machine-mapping-target-account-attributes-v1) | **GET** `/machine-mapping-metadata/v1/target-account-attributes` | List target account attributes
[**Get-MachineMappingTargetIdentityAttributesV1**](#get-machine-mapping-target-identity-attributes-v1) | **GET** `/machine-mapping-metadata/v1/target-identity-attributes` | List target identity attributes


## get-machine-mapping-target-account-attributes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the account attribute names that a machine mapping can target.


The list always includes **name** and **nativeIdentity**. When expanded mapping targets are enabled for the tenant,
the list also includes **description**, **environment**, **subtype**, and **businessApplication**.


The caller needs the **idn:account:read** right.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-account-attributes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TargetAttributes**](../models/target-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Target account attributes. | TargetAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineMappingTargetIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineMappingTargetIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List target account attributes

try {
    Get-MachineMappingTargetAccountAttributesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineMappingTargetAccountAttributesV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineMappingTargetAccountAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-mapping-target-identity-attributes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the identity attribute names that a machine mapping can target.


The list always includes **name**, **alias**, **email**, and **uid**. When expanded mapping targets are enabled
for the tenant, the list also includes the tenant's searchable identity attributes.


When machine account classification is not enabled for the tenant, this API returns `404`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-mapping-target-identity-attributes-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TargetAttributes**](../models/target-attributes)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Target identity attributes. | TargetAttributes
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetMachineMappingTargetIdentityAttributesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetMachineMappingTargetIdentityAttributesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List target identity attributes

try {
    Get-MachineMappingTargetIdentityAttributesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-MachineMappingTargetIdentityAttributesV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineMappingTargetIdentityAttributesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
