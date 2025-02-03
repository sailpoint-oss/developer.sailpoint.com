---
id: v2024-identity-history
title: IdentityHistory
pagination_label: IdentityHistory
sidebar_label: IdentityHistory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityHistory', 'V2024IdentityHistory'] 
slug: /tools/sdk/powershell/v2024/methods/identity-history
tags: ['SDK', 'Software Development Kit', 'IdentityHistory', 'V2024IdentityHistory']
---

# IdentityHistory
   
  

All URIs are relative to *https://sailpoint.api.identitynow.com/v2024*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Compare-V2024IdentitySnapshots**](#compare-identity-snapshots) | **GET** `/historical-identities/{id}/compare` | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**Compare-V2024IdentitySnapshotsAccessType**](#compare-identity-snapshots-access-type) | **GET** `/historical-identities/{id}/compare/{access-type}` | Gets a list of differences of specific accessType for the given identity between 2 snapshots
[**Get-V2024HistoricalIdentity**](#get-historical-identity) | **GET** `/historical-identities/{id}` | Get latest snapshot of identity
[**Get-V2024HistoricalIdentityEvents**](#get-historical-identity-events) | **GET** `/historical-identities/{id}/events` | Lists all events for the given identity
[**Get-V2024IdentitySnapshot**](#get-identity-snapshot) | **GET** `/historical-identities/{id}/snapshots/{date}` | Gets an identity snapshot at a given date
[**Get-V2024IdentitySnapshotSummary**](#get-identity-snapshot-summary) | **GET** `/historical-identities/{id}/snapshot-summary` | Gets the summary for the event count for a specific identity
[**Get-V2024IdentityStartDate**](#get-identity-start-date) | **GET** `/historical-identities/{id}/start-date` | Gets the start date of the identity
[**Get-V2024HistoricalIdentities**](#list-historical-identities) | **GET** `/historical-identities` | Lists all the identities
[**Get-V2024IdentityAccessItems**](#list-identity-access-items) | **GET** `/historical-identities/{id}/access-items` | List Access Items by Identity
[**Get-V2024IdentitySnapshotAccessItems**](#list-identity-snapshot-access-items) | **GET** `/historical-identities/{id}/snapshots/{date}/access-items` | Gets the list of identity access items at a given date filterd by item type
[**Get-V2024IdentitySnapshots**](#list-identity-snapshots) | **GET** `/historical-identities/{id}/snapshots` | Lists all the snapshots for the identity

## compare-identity-snapshots
This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Snapshot1 | **String** |   (optional) | The snapshot 1 of identity
  Query | Snapshot2 | **String** |   (optional) | The snapshot 2 of identity
  Query | AccessItemTypes | **[]String** |   (optional) | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned 
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**IdentityCompareResponse[]**](../models/identity-compare-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A IdentityCompare object with difference details for each access item type | IdentityCompareResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Snapshot1 = "2007-03-01T13:00:00Z" # String | The snapshot 1 of identity (optional)
$Snapshot2 = "2008-03-01T13:00:00Z" # String | The snapshot 2 of identity (optional)
$AccessItemTypes = "MyAccessItemTypes" # String[] | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned  (optional)

 
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Gets a difference of count for each access item types for the given identity between 2 snapshots

try {
    Compare-V2024IdentitySnapshots -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Compare-V2024IdentitySnapshots -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024Snapshot1 $Snapshot1 -V2024Snapshot2 $Snapshot2 -V2024AccessItemTypes $AccessItemTypes -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Compare-V2024IdentitySnapshots"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## compare-identity-snapshots-access-type
This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
Path   | AccessType | **String** | True  | The specific type which needs to be compared
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | AccessAssociated | **Boolean** |   (optional) | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed
  Query | Snapshot1 | **String** |   (optional) | The snapshot 1 of identity
  Query | Snapshot2 | **String** |   (optional) | The snapshot 2 of identity
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**AccessItemDiff[]**](../models/access-item-diff)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of events for the identity | AccessItemDiff[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$AccessType = "accessProfile" # String | The specific type which needs to be compared
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$AccessAssociated = $false # Boolean | Indicates if added or removed access needs to be returned. true - added, false - removed, null - both added & removed (optional)
$Snapshot1 = "2008-03-01T13:00:00Z" # String | The snapshot 1 of identity (optional)
$Snapshot2 = "2009-03-01T13:00:00Z" # String | The snapshot 2 of identity (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Gets a list of differences of specific accessType for the given identity between 2 snapshots

try {
    Compare-V2024IdentitySnapshotsAccessType -V2024Id $Id  -V2024AccessType $AccessType  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Compare-V2024IdentitySnapshotsAccessType -V2024Id $Id -V2024AccessType $AccessType -V2024XSailPointExperimental $XSailPointExperimental -V2024AccessAssociated $AccessAssociated -V2024Snapshot1 $Snapshot1 -V2024Snapshot2 $Snapshot2 -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Compare-V2024IdentitySnapshotsAccessType"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-historical-identity
This method retrieves a specified identity Requires authorization scope of 'idn:identity-history:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**IdentityHistoryResponse**](../models/identity-history-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity object. | IdentityHistoryResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get latest snapshot of identity

try {
    Get-V2024HistoricalIdentity -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024HistoricalIdentity -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024HistoricalIdentity"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-historical-identity-events
This method retrieves all access events for the identity Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | From | **String** |   (optional) | The optional instant until which access events are returned
  Query | EventTypes | **[]String** |   (optional) | An optional list of event types to return.  If null or empty, all events are returned
  Query | AccessItemTypes | **[]String** |   (optional) | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**GetHistoricalIdentityEvents200ResponseInner[]**](../models/get-historical-identity-events200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of events for the identity | GetHistoricalIdentityEvents200ResponseInner[]
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
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$From = "2024-03-01T13:00:00Z" # String | The optional instant until which access events are returned (optional)
$EventTypes = "MyEventTypes" # String[] | An optional list of event types to return.  If null or empty, all events are returned (optional)

$EventTypes = @"[AccessAddedEvent, AccessRemovedEvent]"@ # String[] | An optional list of event types to return.  If null or empty, all events are returned (optional) 
$AccessItemTypes = "MyAccessItemTypes" # String[] | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned (optional)

$AccessItemTypes = @"[entitlement, account]"@ # String[] | An optional list of access item types (app, account, entitlement, etc...) to return.   If null or empty, all access items types are returned (optional) 
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Lists all events for the given identity

try {
    Get-V2024HistoricalIdentityEvents -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024HistoricalIdentityEvents -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024From $From -V2024EventTypes $EventTypes -V2024AccessItemTypes $AccessItemTypes -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024HistoricalIdentityEvents"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-identity-snapshot
This method retrieves a specified identity snapshot at a given date Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
Path   | Date | **String** | True  | The specified date
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**IdentityHistoryResponse**](../models/identity-history-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity object. | IdentityHistoryResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$Date = "2007-03-01T13:00:00Z" # String | The specified date
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Gets an identity snapshot at a given date

try {
    Get-V2024IdentitySnapshot -V2024Id $Id  -V2024Date $Date  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentitySnapshot -V2024Id $Id -V2024Date $Date -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentitySnapshot"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-identity-snapshot-summary
This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Before | **String** |   (optional) | The date before which snapshot summary is required
  Query | Interval | **String** |   (optional) | The interval indicating day or month. Defaults to month if not specified
  Query | TimeZone | **String** |   (optional) | The time zone. Defaults to UTC if not provided
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**MetricResponse[]**](../models/metric-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A summary list of identity changes in date histogram format. | MetricResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Before = "2007-03-01T13:00:00Z" # String | The date before which snapshot summary is required (optional)
$Interval = "day" # String | The interval indicating day or month. Defaults to month if not specified (optional)
$TimeZone = "UTC" # String | The time zone. Defaults to UTC if not provided (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Gets the summary for the event count for a specific identity

try {
    Get-V2024IdentitySnapshotSummary -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentitySnapshotSummary -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024Before $Before -V2024Interval $Interval -V2024TimeZone $TimeZone -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentitySnapshotSummary"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## get-identity-start-date
This method retrieves start date of the identity Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
**String**

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The start date of the identity | String
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Gets the start date of the identity

try {
    Get-V2024IdentityStartDate -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentityStartDate -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentityStartDate"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## list-historical-identities
This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of 'idn:identity-history:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | StartsWithQuery | **String** |   (optional) | This param is used for starts-with search for first, last and display name of the identity
  Query | IsDeleted | **Boolean** |   (optional) | Indicates if we want to only list down deleted identities or not.
  Query | IsActive | **Boolean** |   (optional) | Indicates if we want to only list active or inactive identities.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**IdentityListItem[]**](../models/identity-list-item)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of identities for the customer. | IdentityListItem[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListAccessProfiles429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$StartsWithQuery = "Ada" # String | This param is used for starts-with search for first, last and display name of the identity (optional)
$IsDeleted = $true # Boolean | Indicates if we want to only list down deleted identities or not. (optional)
$IsActive = $true # Boolean | Indicates if we want to only list active or inactive identities. (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# Lists all the identities

try {
    Get-V2024HistoricalIdentities -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024HistoricalIdentities -V2024XSailPointExperimental $XSailPointExperimental -V2024StartsWithQuery $StartsWithQuery -V2024IsDeleted $IsDeleted -V2024IsActive $IsActive -V2024Limit $Limit -V2024Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024HistoricalIdentities"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## list-identity-access-items
This method retrieves a list of access item for the identity filtered by the access item type


### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Type | **String** |   (optional) | The type of access item for the identity. If not provided, it defaults to account
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**ListIdentityAccessItems200ResponseInner[]**](../models/list-identity-access-items200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The list of access items. | ListIdentityAccessItems200ResponseInner[]
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
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Type = "account" # String | The type of access item for the identity. If not provided, it defaults to account (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)

# List Access Items by Identity

try {
    Get-V2024IdentityAccessItems -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentityAccessItems -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024Type $Type -V2024Limit $Limit -V2024Count $Count -V2024Offset $Offset  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentityAccessItems"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## list-identity-snapshot-access-items
This method retrieves the list of identity access items at a given date filterd by item type Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
Path   | Date | **String** | True  | The specified date
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Type | **String** |   (optional) | The access item type

### Return type
[**ListIdentityAccessItems200ResponseInner[]**](../models/list-identity-access-items200-response-inner)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The identity object. | ListIdentityAccessItems200ResponseInner[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$Date = "2007-03-01T13:00:00Z" # String | The specified date
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Type = "account" # String | The access item type (optional)

# Gets the list of identity access items at a given date filterd by item type

try {
    Get-V2024IdentitySnapshotAccessItems -V2024Id $Id  -V2024Date $Date  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentitySnapshotAccessItems -V2024Id $Id -V2024Date $Date -V2024XSailPointExperimental $XSailPointExperimental -V2024Type $Type  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentitySnapshotAccessItems"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
## list-identity-snapshots
This method retrieves all the snapshots for the identity Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Start | **String** |   (optional) | The specified start date
  Query | Interval | **String** |   (optional) | The interval indicating the range in day or month for the specified interval-name
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information.

### Return type
[**IdentitySnapshotSummaryResponse[]**](../models/identity-snapshot-summary-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | A list of identity summary for each snapshot. | IdentitySnapshotSummaryResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListAccessProfiles401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "8c190e6787aa4ed9a90bd9d5344523fb" # String | The identity id
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Start = "2007-03-01T13:00:00Z" # String | The specified start date (optional)
$Interval = "day" # String | The interval indicating the range in day or month for the specified interval-name (optional)
$Limit = 250 # Int32 | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional) (default to $false)

# Lists all the snapshots for the identity

try {
    Get-V2024IdentitySnapshots -V2024Id $Id  -V2024XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-V2024IdentitySnapshots -V2024Id $Id -V2024XSailPointExperimental $XSailPointExperimental -V2024Start $Start -V2024Interval $Interval -V2024Limit $Limit -V2024Offset $Offset -V2024Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-V2024IdentitySnapshots"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
