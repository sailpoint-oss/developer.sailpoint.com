---
id: data-segmentation
title: DataSegmentation
pagination_label: DataSegmentation
sidebar_label: DataSegmentation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataSegmentation', 'DataSegmentation'] 
slug: /tools/sdk/powershell/datasegmentation/methods/data-segmentation
tags: ['SDK', 'Software Development Kit', 'DataSegmentation', 'DataSegmentation']
---

# DataSegmentation
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-DataSegmentV1**](#create-data-segment-v1) | **POST** `/data-segments/v1` | Create segment
[**Remove-DataSegmentV1**](#delete-data-segment-v1) | **DELETE** `/data-segments/v1/{segmentId}` | Delete segment by id
[**Get-DataSegmentIdentityMembershipV1**](#get-data-segment-identity-membership-v1) | **GET** `/data-segments/v1/membership/{identityId}` | Get segmentmembership by identity id
[**Get-DataSegmentV1**](#get-data-segment-v1) | **GET** `/data-segments/v1/{segmentId}` | Get segment by id
[**Get-DataSegmentationEnabledForUserV1**](#get-data-segmentation-enabled-for-user-v1) | **GET** `/data-segments/v1/user-enabled/{identityId}` | Is segmentation enabled by identity
[**Get-DataSegmentsV1**](#list-data-segments-v1) | **GET** `/data-segments/v1` | Get segments
[**Update-DataSegmentV1**](#patch-data-segment-v1) | **PATCH** `/data-segments/v1/{segmentId}` | Update segment
[**Publish-DataSegmentV1**](#publish-data-segment-v1) | **POST** `/data-segments/v1/{segmentId}` | Publish segment by id


## create-data-segment-v1
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-data-segment-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$DataSegment = @""@

# Create segment

try {
    $Result = ConvertFrom-JsonToDataSegment -Json $DataSegment
    New-DataSegmentV1 -DataSegment $Result 
    
    # Below is a request that includes all optional parameters
    # New-DataSegmentV1 -DataSegment $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-DataSegmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-data-segment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API deletes the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-data-segment-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SegmentId | **String** | True  | The segment ID to delete.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Published | **Boolean** |   (optional) (default to $false) | This determines which version of the segment to delete

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SegmentId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The segment ID to delete.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Published = $false # Boolean | This determines which version of the segment to delete (optional) (default to $false)

# Delete segment by id

try {
    Remove-DataSegmentV1 -SegmentId $SegmentId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-DataSegmentV1 -SegmentId $SegmentId -XSailPointExperimental $XSailPointExperimental -Published $Published  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-DataSegmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-data-segment-identity-membership-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the segment membership specified by the given identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-data-segment-identity-membership-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | IdentityId | **String** | True  | The identity ID to retrieve the segments they are in.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**Segmentmembership[]**](../models/segmentmembership)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segment Memberships for specified identity | Segmentmembership[]
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The identity ID to retrieve the segments they are in.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get segmentmembership by identity id

try {
    Get-DataSegmentIdentityMembershipV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DataSegmentIdentityMembershipV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DataSegmentIdentityMembershipV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-data-segment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-data-segment-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SegmentId | **String** | True  | The segment ID to retrieve.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segment | DataSegment
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$SegmentId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The segment ID to retrieve.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get segment by id

try {
    Get-DataSegmentV1 -SegmentId $SegmentId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DataSegmentV1 -SegmentId $SegmentId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DataSegmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-data-segmentation-enabled-for-user-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns whether or not segmentation is enabled for the identity.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-data-segmentation-enabled-for-user-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$IdentityId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The identity ID to retrieve if segmentation is enabled for the identity.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Is segmentation enabled by identity

try {
    Get-DataSegmentationEnabledForUserV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DataSegmentationEnabledForUserV1 -IdentityId $IdentityId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DataSegmentationEnabledForUserV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-data-segments-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-data-segments-v1)

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
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

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

# Get segments

try {
    Get-DataSegmentsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-DataSegmentsV1 -XSailPointExperimental $XSailPointExperimental -Enabled $Enabled -Unique $Unique -Published $Published -Limit $Limit -Offset $Offset -Count $Count -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-DataSegmentsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-data-segment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-data-segment-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | SegmentId | **String** | True  | The segment ID to modify.
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 

### Return type
[**DataSegment**](../models/data-segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the segment&#39;s new representation. | DataSegment
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$SegmentId = "ef38f943-47e9-4562-b5bb-8424a56397d8" # String | The segment ID to modify.
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$RequestBody =  # SystemCollectionsHashtable[] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
 $RequestBody = @"[{"op":"replace","path":"/memberFilter","value":{"expression":{"operator":"AND","children":[{"operator":"EQUALS","attribute":"location","value":{"type":"STRING","value":"Philadelphia"}},{"operator":"EQUALS","attribute":"department","value":{"type":"STRING","value":"HR"}}]}}}]"@ # SystemCollectionsHashtable[] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
 

# Update segment

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-DataSegmentV1 -SegmentId $SegmentId -XSailPointExperimental $XSailPointExperimental -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-DataSegmentV1 -SegmentId $SegmentId -XSailPointExperimental $XSailPointExperimental -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-DataSegmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## publish-data-segment-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
This will publish the segment so that it starts applying the segmentation to the desired users if enabled

[API Spec](https://developer.sailpoint.com/docs/api/v1/publish-data-segment-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
Path   | SegmentId | **String** | True  | The segmentId.
 Body  | RequestBody | **[]String** | True  | A list of segment ids that you wish to publish
  Query | PublishAll | **Boolean** |   (optional) (default to $true) | This flag decides whether you want to publish all unpublished or a list of specific segment ids

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segments published | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetDataSegmentIdentityMembershipV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetDataSegmentIdentityMembershipV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$SegmentId = "MySegmentId" # String | The segmentId.
$RequestBody = "MyRequestBody" # String[] | A list of segment ids that you wish to publish
 $RequestBody = @""@ # String[] | A list of segment ids that you wish to publish
 
$PublishAll = $true # Boolean | This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional) (default to $true)

# Publish segment by id

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Publish-DataSegmentV1 -XSailPointExperimental $XSailPointExperimental -SegmentId $SegmentId -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Publish-DataSegmentV1 -XSailPointExperimental $XSailPointExperimental -SegmentId $SegmentId -RequestBody $Result -PublishAll $PublishAll  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Publish-DataSegmentV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
