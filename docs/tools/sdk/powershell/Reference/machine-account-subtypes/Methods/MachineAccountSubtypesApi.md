---
id: machine-account-subtypes
title: MachineAccountSubtypes
pagination_label: MachineAccountSubtypes
sidebar_label: MachineAccountSubtypes
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MachineAccountSubtypes', 'MachineAccountSubtypes'] 
slug: /tools/sdk/powershell/machineaccountsubtypes/methods/machine-account-subtypes
tags: ['SDK', 'Software Development Kit', 'MachineAccountSubtypes', 'MachineAccountSubtypes']
---

# MachineAccountSubtypes
  Use this API to get, update, and delete machine account subtype for sources.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-SourceSubtypeV1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**Remove-MachineAccountSubtypeV1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**Get-MachineAccountSubtypeApprovalConfigV1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**Get-SourceSubtypeByIdV1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**Get-SourceSubtypesV1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**Invoke-LoadBulkSourceSubtypesV1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**Update-MachineAccountSubtypeV1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**Update-MachineAccountSubtypeApprovalConfigV1**](#update-machine-account-subtype-approval-config-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-source-subtype-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CreateSourceSubtypeV1Request | [**CreateSourceSubtypeV1Request**](../models/create-source-subtype-v1-request) | True  | 

### Return type
[**Sourcesubtypewithsource**](../models/sourcesubtypewithsource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Created machine account subtype. | Sourcesubtypewithsource
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CreateSourceSubtypeV1Request = @"{"sourceId":"6d0458373bec4b4b80460992b76016da","technicalName":"foo","displayName":"Mr Foo","description":"fighters","type":"MACHINE"}"@

# Create subtype

try {
    $Result = ConvertFrom-JsonToCreateSourceSubtypeV1Request -Json $CreateSourceSubtypeV1Request
    New-SourceSubtypeV1 -XSailPointExperimental $XSailPointExperimental -CreateSourceSubtypeV1Request $Result 
    
    # Below is a request that includes all optional parameters
    # New-SourceSubtypeV1 -XSailPointExperimental $XSailPointExperimental -CreateSourceSubtypeV1Request $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-SourceSubtypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-machine-account-subtype-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-machine-account-subtype-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | Subtype deleted successfully. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete subtype by ID

try {
    Remove-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-MachineAccountSubtypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-machine-account-subtype-approval-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-machine-account-subtype-approval-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | SubtypeId | **String** | True  | machine subtype id.

### Return type
[**Machineaccountsubtypeconfigdto**](../models/machineaccountsubtypeconfigdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Responds with a MachineAccountSubtypeConfigDto for machine account creation and deletion approval config by subtypeId. | Machineaccountsubtypeconfigdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SubtypeId = "ef38f94347e94562b5bb8424a56498d8" # String | machine subtype id.

# Machine Subtype Approval Config

try {
    Get-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId 
    
    # Below is a request that includes all optional parameters
    # Get-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-MachineAccountSubtypeApprovalConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-source-subtype-by-id-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-source-subtype-by-id-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Sourcesubtypewithsource**](../models/sourcesubtypewithsource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Machine account subtype object. | Sourcesubtypewithsource
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get subtype by ID

try {
    Get-SourceSubtypeByIdV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypeByIdV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypeByIdV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-source-subtypes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-source-subtypes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*
  Query | Sorters | **String** |   (optional) | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName**
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Sourcesubtypewithsource[]**](../models/sourcesubtypewithsource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of machine account subtypes. | Sourcesubtypewithsource[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'displayName eq "sail"' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
$Sorters = "displayName" # String | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Retrieve all subtypes

try {
    Get-SourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-SourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -Sorters $Sorters -Count $Count -Limit $Limit -Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SourceSubtypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## load-bulk-source-subtypes-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/v1/load-bulk-source-subtypes-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | 

### Return type
[**Sourcesubtypewithsource[]**](../models/sourcesubtypewithsource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of source subtypes. | Sourcesubtypewithsource[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "38453251-6be2-5f8f-df93-5ce19e295838" # String[] | 
 $RequestBody = @""@ # String[] | 
 

# Bulk Retrieve of Source Subtypes

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Invoke-LoadBulkSourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Invoke-LoadBulkSourceSubtypesV1 -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Invoke-LoadBulkSourceSubtypesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-machine-account-subtype-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-machine-account-subtype-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SubtypeId | **String** | True  | The ID of the subtype.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

### Return type
[**Sourcesubtypewithsource**](../models/sourcesubtypewithsource)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated machine account subtype. | Sourcesubtypewithsource
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SubtypeId = "6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa" # String | The ID of the subtype.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody =  # SystemCollectionsHashtable[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 $RequestBody = @"[{"op":"replace","path":"/displayName","value":"Test New DisplayName"}]"@ # SystemCollectionsHashtable[] | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
 

# Patch subtype by ID

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineAccountSubtypeV1 -SubtypeId $SubtypeId -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineAccountSubtypeV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-machine-account-subtype-approval-config-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-machine-account-subtype-approval-config-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | SubtypeId | **String** | True  | machine account subtype ID.
 Body  | Jsonpatchoperation | [**[]Jsonpatchoperation**](../models/jsonpatchoperation) | True  | The JSONPatch payload used to update the object.

### Return type
[**Machineaccountsubtypeconfigdto**](../models/machineaccountsubtypeconfigdto)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | This response indicates the PATCH operation succeeded and the API returns the updated MachineAccountSubtypeConfigDto object. | Machineaccountsubtypeconfigdto
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | LoadBulkSourceSubtypesV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | LoadBulkSourceSubtypesV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SubtypeId = "00eebcf881994e419d72e757fd30dc0e" # String | machine account subtype ID.
 $Jsonpatchoperation = @""@ # Jsonpatchoperation[] | The JSONPatch payload used to update the object.
 

# Machine Subtype Approval Config

try {
    $Result = ConvertFrom-JsonToJsonpatchoperation -Json $Jsonpatchoperation
    Update-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId -Jsonpatchoperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-MachineAccountSubtypeApprovalConfigV1 -XSailPointExperimental $XSailPointExperimental -SubtypeId $SubtypeId -Jsonpatchoperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-MachineAccountSubtypeApprovalConfigV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
