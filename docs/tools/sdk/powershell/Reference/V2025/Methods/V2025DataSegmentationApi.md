---
id: v2025-data-segmentation
title: DataSegmentation
pagination_label: DataSegmentation
sidebar_label: DataSegmentation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataSegmentation', 'V2025DataSegmentation'] 
slug: /tools/sdk/powershell/v2025/methods/data-segmentation
tags: ['SDK', 'Software Development Kit', 'DataSegmentation', 'V2025DataSegmentation']
---

# DataSegmentation
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-V2025DataSegment**](#create-data-segment) | **POST** `/data-segments` | Create Segment
[**Remove-V2025DataSegment**](#delete-data-segment) | **DELETE** `/data-segments/{segmentId}` | Delete Segment by ID
[**Get-V2025DataSegment**](#get-data-segment) | **GET** `/data-segments/{segmentId}` | Get Segment by ID
[**Get-V2025DataSegmentIdentityMembership**](#get-data-segment-identity-membership) | **GET** `/data-segments/membership/{identityId}` | Get SegmentMembership by Identity ID
[**Get-V2025DataSegmentationEnabledForUser**](#get-data-segmentation-enabled-for-user) | **GET** `/data-segments/user-enabled/{identityId}` | Is Segmentation enabled by Identity
[**Get-V2025DataSegments**](#list-data-segments) | **GET** `/data-segments` | Get Segments
[**Update-V2025DataSegment**](#patch-data-segment) | **PATCH** `/data-segments/{segmentId}` | Update Segment
[**Publish-V2025DataSegment**](#publish-data-segment) | **POST** `/data-segments/{segmentId}` | Publish segment by ID


## create-data-segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-data-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | DataSegment | [**DataSegment**](../models/data-segment) | True  | 

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Segment created | DataSegment
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DataSegment = @""@

# Create Segment

try {
    $Result = ConvertFrom-JsonToDataSegment -Json $DataSegment
    New-V2025DataSegment -DataSegment $Result 
    
    # Below is a request that includes all optional parameters
    # New-V2025DataSegment -DataSegment $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-V2025DataSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API deletes the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-data-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The segment ID to delete.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Published | **Boolean** |   (optional) (default to $false) | This determines which version of the segment to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The segment ID to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Published = $false # Boolean | This determines which version of the segment to delete (optional) (default to $false)

# Delete Segment by ID

try {
    Remove-V2025DataSegment -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-V2025DataSegment -Id $Id -XSailPointExperimental $XSailPointExperimental -Published $Published  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-V2025DataSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-data-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The segment ID to retrieve.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segment | DataSegment
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The segment ID to retrieve.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get Segment by ID

try {
    Get-V2025DataSegment -Id $Id -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025DataSegment -Id $Id -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025DataSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-data-segment-identity-membership
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the segment membership specified by the given identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-data-segment-identity-membership)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The identity ID to retrieve the segments they are in.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segment Memberships for specified identity | SystemCollectionsHashtable
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The identity ID to retrieve the segments they are in.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get SegmentMembership by Identity ID

try {
    Get-V2025DataSegmentIdentityMembership -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025DataSegmentIdentityMembership -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025DataSegmentIdentityMembership"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-data-segmentation-enabled-for-user
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns whether or not segmentation is enabled for the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/get-data-segmentation-enabled-for-user)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The identity ID to retrieve if segmentation is enabled for the identity.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
**Boolean**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Returns if segmentation is enabled for a specified User | Boolean
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The identity ID to retrieve if segmentation is enabled for the identity.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Is Segmentation enabled by Identity

try {
    Get-V2025DataSegmentationEnabledForUser -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025DataSegmentationEnabledForUser -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025DataSegmentationEnabledForUser"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-data-segments
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-data-segments)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Enabled | **Boolean** |   (optional) (default to $true) | This boolean indicates whether the segment is currently active. Inactive segments have no effect.
  Query | Unique | **Boolean** |   (optional) (default to $false) | This returns only one record if set to true and that would be the published record if exists.
  Query | Published | **Boolean** |   (optional) (default to $true) | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw*

### Return type
[**DataSegment[]**](../models/data-segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all segments | DataSegment[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Enabled = $true # Boolean | This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional) (default to $true)
$Unique = $false # Boolean | This returns only one record if set to true and that would be the published record if exists. (optional) (default to $false)
$Published = $true # Boolean | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional) (default to $true)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Filters = 'name eq ""' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional)

# Get Segments

try {
    Get-V2025DataSegments -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2025DataSegments -XSailPointExperimental $XSailPointExperimental -Enabled $Enabled -Unique $Unique -Published $Published -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2025DataSegments"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-data-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The segment ID to modify.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the segment&#39;s new representation. | DataSegment
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The segment ID to modify.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody =  # SystemCollectionsHashtable[] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
 $RequestBody = @"[{op=replace, path=/memberFilter, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]"@ # SystemCollectionsHashtable[] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
 

# Update Segment

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-V2025DataSegment -Id $Id -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-V2025DataSegment -Id $Id -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-V2025DataSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## publish-data-segment
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This will publish the segment so that it starts applying the segmentation to the desired users if enabled

[API Spec](https://developer.sailpoint.com/docs/api/v2025/publish-data-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | **[]String** | True  | A list of segment ids that you wish to publish
  Query | PublishAll | **Boolean** |   (optional) (default to $true) | This flag decides whether you want to publish all unpublished or a list of specific segment ids

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segments published | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody = "MyRequestBody" # String[] | A list of segment ids that you wish to publish
 $RequestBody = @""@ # String[] | A list of segment ids that you wish to publish
 
$PublishAll = $true # Boolean | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to $true)

# Publish segment by ID

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Publish-V2025DataSegment -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Publish-V2025DataSegment -XSailPointExperimental $XSailPointExperimental -RequestBody $Result -PublishAll $PublishAll  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Publish-V2025DataSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
