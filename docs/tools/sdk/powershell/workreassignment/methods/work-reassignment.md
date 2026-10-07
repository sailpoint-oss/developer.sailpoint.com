# WorkReassignment

# WorkReassignment
  Use this API to implement work reassignment functionality.

Work Reassignment allows access request reviews, certifications, and manual provisioning tasks assigned to a user to be reassigned to a different user. This is primarily used for:

- Temporarily redirecting work for users who are out of office, such as on vacation or sick leave
- Permanently redirecting work for users who should not be assigned these tasks at all, such as senior executives or service identities

Users can define reassignments for themselves, managers can add them for their team members, and administrators can configure them on any user&#39;s behalf. Work assigned during the specified reassignment timeframes will be automatically reassigned to the designated user as it is created.

Refer to [Work Reassignment](https://documentation.sailpoint.com/saas/help/users/work_reassignment.html) for more information about this topic.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-ReassignmentConfigurationV1**](#create-reassignment-configuration-v1) | **POST** `/reassignment-configurations/v1` | Create a reassignment configuration
[**Remove-ReassignmentConfigurationV1**](#delete-reassignment-configuration-v1) | **DELETE** `/reassignment-configurations/v1/{identityId}/{configType}` | Delete reassignment configuration
[**Get-EvaluateReassignmentConfigurationV1**](#get-evaluate-reassignment-configuration-v1) | **GET** `/reassignment-configurations/v1/{identityId}/evaluate/{configType}` | Evaluate reassignment configuration
[**Get-ReassignmentConfigTypesV1**](#get-reassignment-config-types-v1) | **GET** `/reassignment-configurations/v1/types` | List reassignment config types
[**Get-ReassignmentConfigurationV1**](#get-reassignment-configuration-v1) | **GET** `/reassignment-configurations/v1/{identityId}` | Get reassignment configuration
[**Get-TenantConfigConfigurationV1**](#get-tenant-config-configuration-v1) | **GET** `/reassignment-configurations/v1/tenant-config` | Get tenant-wide reassignment configuration settings
[**Get-ReassignmentConfigurationsV1**](#list-reassignment-configurations-v1) | **GET** `/reassignment-configurations/v1` | List reassignment configurations
[**Send-ReassignmentConfigV1**](#put-reassignment-config-v1) | **PUT** `/reassignment-configurations/v1/{identityId}` | Update reassignment configuration
[**Send-TenantConfigurationV1**](#put-tenant-configuration-v1) | **PUT** `/reassignment-configurations/v1/tenant-config` | Update tenant-wide reassignment configuration settings


## create-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a new Reassignment Configuration for the specified identity.

[API Spec](https://developer.sailpoint.com/docs/api/create-reassignment-configuration-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | The newly created Reassignment Configuration object | ConfigurationItemResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ConfigurationItemRequest = @"{
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}"@

# Create a reassignment configuration

try {
    $Result = ConvertFrom-JsonToConfigurationItemRequest -Json $ConfigurationItemRequest
    New-ReassignmentConfigurationV1 -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-ReassignmentConfigurationV1 -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-ReassignmentConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes a single reassignment configuration for the specified identity

[API Spec](https://developer.sailpoint.com/docs/api/delete-reassignment-configuration-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Reassignment Configuration deleted | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigType = "ACCESS_REQUESTS" # ConfigTypeEnum | 
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete reassignment configuration

try {
    Remove-ReassignmentConfigurationV1 -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-ReassignmentConfigurationV1 -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-ReassignmentConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-evaluate-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Evaluates the Reassignment Configuration for an `Identity` to determine if work items for the specified type should be reassigned. If a valid Reassignment Configuration is found for the identity & work type, then a lookup is initiated which recursively fetches the Reassignment Configuration for the next `TargetIdentity` until no more results are found or a max depth of 5. That lookup trail is provided in the response and the final reassigned identity in the lookup list is returned as the `reassignToId` property. If no Reassignment Configuration is found for the specified identity & config type then the requested Identity ID will be used as the `reassignToId` value and the lookupTrail node will be empty.

[API Spec](https://developer.sailpoint.com/docs/api/get-evaluate-reassignment-configuration-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
Path   | ConfigType | [**ConfigTypeEnum**](../models/config-type-enum) | True  | Reassignment work type
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | ExclusionFilters | **[]String** |   (optional) | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments

### Return type
[**EvaluateResponse[]**](../models/evaluate-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Evaluated Reassignment Configuration | EvaluateResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$ConfigType = "ACCESS_REQUESTS" # ConfigTypeEnum | Reassignment work type
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ExclusionFilters = "MyExclusionFilters" # String[] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional)

$ExclusionFilters = @"SELF_REVIEW_DELEGATION"@ # String[] | Exclusion filters that disable parts of the reassignment evaluation. Possible values are listed below: - `SELF_REVIEW_DELEGATION`: This will exclude delegations of self-review reassignments (optional) 

# Evaluate reassignment configuration

try {
    Get-EvaluateReassignmentConfigurationV1 -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-EvaluateReassignmentConfigurationV1 -IdentityId $IdentityId -ConfigType $ConfigType -XSailPointExperimental $XSailPointExperimental -ExclusionFilters $ExclusionFilters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-EvaluateReassignmentConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reassignment-config-types-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets a collection of types which are available in the Reassignment Configuration UI.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-config-types-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ConfigType[]**](../models/config-type)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of Reassignment Configuration Types | ConfigType[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# List reassignment config types

try {
    Get-ReassignmentConfigTypesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ReassignmentConfigTypesV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReassignmentConfigTypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-reassignment-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the Reassignment Configuration for an identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-reassignment-configuration-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**ConfigurationResponse**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration for an identity | ConfigurationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "2c91808781a71ddb0181b9090b5c504f" # String | unique identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get reassignment configuration

try {
    Get-ReassignmentConfigurationV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ReassignmentConfigurationV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReassignmentConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-tenant-config-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets the global Reassignment Configuration settings for the requestor's tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-config-configuration-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get tenant-wide reassignment configuration settings

try {
    Get-TenantConfigConfigurationV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-TenantConfigConfigurationV1 -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-TenantConfigConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-reassignment-configurations-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Gets a paginated list of Reassignment configurations for the current org.

[API Spec](https://developer.sailpoint.com/docs/api/list-reassignment-configurations-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 20) | Max number of results to return.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ConfigurationResponse[]**](../models/configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Reassignment Configurations for an org | ConfigurationResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 20 # Int32 | Max number of results to return. (optional) (default to 20)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List reassignment configurations

try {
    Get-ReassignmentConfigurationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-ReassignmentConfigurationsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-ReassignmentConfigurationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-reassignment-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Replaces existing Reassignment configuration for an identity with the newly provided configuration.

[API Spec](https://developer.sailpoint.com/docs/api/put-reassignment-config-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | unique identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | ConfigurationItemRequest | [**ConfigurationItemRequest**](../models/configuration-item-request) | True  | 

### Return type
[**ConfigurationItemResponse**](../models/configuration-item-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Reassignment Configuration updated | ConfigurationItemResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$IdentityId = "2c91808781a71ddb0181b9090b5c504e" # String | unique identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$ConfigurationItemRequest = @"{
  "endDate" : "2022-07-30T17:00:00Z",
  "reassignedFromId" : "2c91808781a71ddb0181b9090b5c504e",
  "configType" : "ACCESS_REQUESTS",
  "reassignedToId" : "2c91808781a71ddb0181b9090b53504a",
  "startDate" : "2022-07-21T11:13:12.345Z"
}"@

# Update reassignment configuration

try {
    $Result = ConvertFrom-JsonToConfigurationItemRequest -Json $ConfigurationItemRequest
    Send-ReassignmentConfigV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-ReassignmentConfigV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental -ConfigurationItemRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-ReassignmentConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## put-tenant-configuration-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Replaces existing Tenant-wide Reassignment Configuration settings with the newly provided settings.

[API Spec](https://developer.sailpoint.com/docs/api/put-tenant-configuration-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | TenantConfigurationRequest | [**TenantConfigurationRequest**](../models/tenant-configuration-request) | True  | 

### Return type
[**TenantConfigurationResponse**](../models/tenant-configuration-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Tenant-wide Reassignment Configuration settings | TenantConfigurationResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetReassignmentConfigTypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetReassignmentConfigTypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$TenantConfigurationRequest = @"{
  "configDetails" : {
    "disabled" : true
  }
}"@

# Update tenant-wide reassignment configuration settings

try {
    $Result = ConvertFrom-JsonToTenantConfigurationRequest -Json $TenantConfigurationRequest
    Send-TenantConfigurationV1 -XSailPointExperimental $XSailPointExperimental -TenantConfigurationRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-TenantConfigurationV1 -XSailPointExperimental $XSailPointExperimental -TenantConfigurationRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-TenantConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
