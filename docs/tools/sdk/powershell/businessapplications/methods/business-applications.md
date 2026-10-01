# BusinessApplications

# BusinessApplications
  A Business Application groups machine identities (for example AI agents or applications) under a common owner and sanctioned status. Business Applications can be defined out-of-the-box, discovered from a source, or created by an administrator. Signatures on a Business Application drive automatic correlation of machine identities to it; sanctioned status is independent metadata that machine identities inherit once linked. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BusinessApplicationV1**](#create-business-application-v1) | **POST** `/business-applications/v1` | Create Business Application
[**Get-BusinessApplicationV1**](#get-business-application-v1) | **GET** `/business-applications/v1/{id}` | Get Business Application
[**Get-BusinessApplicationsV1**](#list-business-applications-v1) | **GET** `/business-applications/v1` | List Business Applications
[**Update-BusinessApplicationV1**](#update-business-application-v1) | **PATCH** `/business-applications/v1/{id}` | Update Business Application


## create-business-application-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Creates a custom Business Application. Requires the `idn:business-application:create` right, the Machine Identity Security product to be enabled, and the custom Business Application feature to be enabled for the tenant. The `name` must be unique within the tenant, and any provided `signatures` must not already be assigned to another Business Application.

[API Spec](https://developer.sailpoint.com/docs/api/create-business-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | BusinessApplication | [**BusinessApplication**](../models/business-application) | True  | 

### Return type
[**BusinessApplication**](../models/business-application)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The created Business Application. | BusinessApplication
400 | Client Error - Returned if the request body is invalid, for example a missing or blank &#x60;name&#x60;, an unrecognized signature &#x60;type&#x60;, or a duplicate &#x60;(type, name)&#x60; signature pair within the request. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
409 | Conflict - Returned if the &#x60;name&#x60; is already in use by another Business Application in the tenant, or if a requested signature is already assigned to another Business Application. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$BusinessApplication = @"{
  "owner" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "vendor" : "Cursor",
  "created" : "2026-01-15T13:45:12.312Z",
  "origin" : "",
  "name" : "Cursor",
  "description" : "AI coding assistant used by the platform engineering team.",
  "modified" : "2026-02-20T09:31:47.882Z",
  "id" : "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "source" : {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  },
  "signatures" : [ {
    "name" : "cursor",
    "type" : "AI Agent"
  }, {
    "name" : "cursor",
    "type" : "AI Agent"
  } ],
  "additionalOwners" : [ {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  }, {
    "name" : "William Wilson",
    "id" : "2c91808568c529c60168cca6f90c1313",
    "type" : "IDENTITY"
  } ],
  "sanctionedStatus" : ""
}"@

# Create Business Application

try {
    $Result = ConvertFrom-JsonToBusinessApplication -Json $BusinessApplication
    New-BusinessApplicationV1 -XSailPointExperimental $XSailPointExperimental -BusinessApplication $Result 
    
    # Below is a request that includes all optional parameters
    # New-BusinessApplicationV1 -XSailPointExperimental $XSailPointExperimental -BusinessApplication $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BusinessApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-business-application-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a single Business Application by ID for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled.

[API Spec](https://developer.sailpoint.com/docs/api/get-business-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Business Application ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**BusinessApplication**](../models/business-application)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A Business Application object. | BusinessApplication
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - Returned if no Business Application exists for the given ID. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "a1b2c3d4-e5f6-7890-abcd-ef1234567890" # String | Business Application ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get Business Application

try {
    Get-BusinessApplicationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-BusinessApplicationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BusinessApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-business-applications-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns the list of Business Applications defined for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-business-applications-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus**
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**BusinessApplication[]**](../models/business-application)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of Business Application objects. | BusinessApplication[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'sanctionedStatus eq "SANCTIONED"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq* (optional)
$Sorters = "name" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus** (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List Business Applications

try {
    Get-BusinessApplicationsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-BusinessApplicationsV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BusinessApplicationsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-business-application-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates a Business Application using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Requires the `idn:business-application:update` right and the Machine Identity Security product to be enabled. Patchable fields: `name`, `description`, `owner`, `additionalOwners`, `sanctionedStatus`, and `signatures`. Modifying `signatures` additionally requires the custom Business Application feature to be enabled.

[API Spec](https://developer.sailpoint.com/docs/api/update-business-application-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | Business Application ID.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A JSON array of patch operations per RFC 6902.

### Return type
[**BusinessApplication**](../models/business-application)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The updated Business Application. | BusinessApplication
400 | Client Error - Returned if the patch is malformed, targets a non-patchable field, clears the required &#x60;name&#x60;, or specifies an invalid signature. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListBusinessApplicationsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - Returned if no Business Application exists for the given ID. | ErrorResponseDto
409 | Conflict - Returned if the new &#x60;name&#x60; is already in use by another Business Application in the tenant, or if a requested signature is already assigned to another Business Application. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListBusinessApplicationsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json, application/json
- **Accept**: application/json

### Example
```powershell
$Id = "a1b2c3d4-e5f6-7890-abcd-ef1234567890" # String | Business Application ID.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A JSON array of patch operations per RFC 6902. $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A JSON array of patch operations per RFC 6902.
 

# Update Business Application

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-BusinessApplicationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BusinessApplicationV1 -Id $Id -XSailPointExperimental $XSailPointExperimental -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BusinessApplicationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
