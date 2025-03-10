---
id: beta-segments
title: Segments
pagination_label: Segments
sidebar_label: Segments
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Segments', 'BetaSegments'] 
slug: /tools/sdk/powershell/beta/methods/segments
tags: ['SDK', 'Software Development Kit', 'Segments', 'BetaSegments']
---

# Segments
  Use this API to implement and customize access request segment functionality. 
With this functionality in place, administrators can create and manage access request segments. 
Segments provide organizations with a way to make the access their users have even more granular - this can simply the access request process for the organization&#39;s users and improves security by reducing the risk of overprovisoning access. 

Segments represent sets of identities, all grouped by specified identity attributes, who are only able to see and access the access items associated with their segments.
For example, administrators could group all their organization&#39;s London office employees into one segment, &quot;London Office Employees,&quot; by their shared location. 
The administrators could then define the access items the London employees would need, and the identities in the &quot;London Office Employees&quot; would then only be able to see and access those items.

In Identity Security Cloud, administrators can use the &#39;Access&#39; drop-down menu and select &#39;Segments&#39; to reach the &#39;Access Requests Segments&#39; page. 
This page lists all the existing access request segments, along with their statuses, enabled or disabled. 
Administrators can use this page to create, edit, enable, disable, and delete segments. 
To create a segment, an administrator must provide a name, define the identities grouped in the segment, and define the items the identities in the segment can access.
These items can be access profiles, roles, or entitlements. 

When administrators use the API to create and manage segments, they use a JSON expression in the &#x60;visibilityCriteria&#x60; object to define the segment&#39;s identities and access items. 

Refer to [Managing Access Request Segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) for more information about segments in Identity Security Cloud.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-BetaSegment**](#create-segment) | **POST** `/segments` | Create Segment
[**Remove-BetaSegment**](#delete-segment) | **DELETE** `/segments/{id}` | Delete Segment by ID
[**Get-BetaSegment**](#get-segment) | **GET** `/segments/{id}` | Get Segment by ID
[**Get-BetaSegments**](#list-segments) | **GET** `/segments` | List Segments
[**Update-BetaSegment**](#patch-segment) | **PATCH** `/segments/{id}` | Update Segment


## create-segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/create-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Segment | [**Segment**](../models/segment) | True  | 

### Return type
[**Segment**](../models/segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Segment created | Segment
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Segment = @"{
  "owner" : {
    "name" : "support",
    "id" : "2c9180a46faadee4016fb4e018c20639",
    "type" : "IDENTITY"
  },
  "created" : "2020-01-01T00:00:00Z",
  "visibilityCriteria" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "active" : true,
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde"
}"@

# Create Segment

try {
    $Result = ConvertFrom-JsonToSegment -Json $Segment
    New-BetaSegment -Segment $Result 
    
    # Below is a request that includes all optional parameters
    # New-BetaSegment -Segment $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-BetaSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-segment
This API deletes the segment specified by the given ID.
>**Note:** Segment deletion may take some time to go into effect. 
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/delete-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The segment ID to delete.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The segment ID to delete.

# Delete Segment by ID

try {
    Remove-BetaSegment -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-BetaSegment -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-BetaSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-segment
This API returns the segment specified by the given ID.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/get-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The segment ID to retrieve.

### Return type
[**Segment**](../models/segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Segment | Segment
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The segment ID to retrieve.

# Get Segment by ID

try {
    Get-BetaSegment -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSegment -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-segments
This API returns a list of all segments.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/list-segments)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**Segment[]**](../models/segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of all segments | Segment[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List Segments

try {
    Get-BetaSegments 
    
    # Below is a request that includes all optional parameters
    # Get-BetaSegments -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-BetaSegments"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
>**Note:** Changes to a segment may take some time to propagate to all identities.
A token with ORG_ADMIN or API authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/beta/patch-segment)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The segment ID to modify.
 Body  | RequestBody | [**[]SystemCollectionsHashtable**](https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0) | True  | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 

### Return type
[**Segment**](../models/segment)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the segment&#39;s new representation. | Segment
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessModelMetadataAttribute401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessModelMetadataAttribute429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The segment ID to modify.
$RequestBody =  # SystemCollectionsHashtable[] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 
 $RequestBody = @"[{op=replace, path=/visibilityCriteria, value={expression={operator=AND, children=[{operator=EQUALS, attribute=location, value={type=STRING, value=Philadelphia}}, {operator=EQUALS, attribute=department, value={type=STRING, value=HR}}]}}}]"@ # SystemCollectionsHashtable[] | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 
 

# Update Segment

try {
    $Result = ConvertFrom-JsonToRequestBody -Json $RequestBody
    Update-BetaSegment -Id $Id -RequestBody $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BetaSegment -Id $Id -RequestBody $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BetaSegment"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
