---
id: identity-history
title: IdentityHistory
pagination_label: IdentityHistory
sidebar_label: IdentityHistory
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'IdentityHistory'] 
slug: /tools/sdk/powershell/beta/methods/identity-history
tags: ['SDK', 'Software Development Kit', 'IdentityHistory']
---


# IdentityHistory

All URIs are relative to *https://sailpoint.api.identitynow.com/beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**compareIdentitySnapshots**](#compare-identity-snapshots) | **GET** /historical-identities/{id}/compare | Gets a difference of count for each access item types for the given identity between 2 snapshots
[**compareIdentitySnapshotsAccessType**](#compare-identity-snapshots-access-type) | **GET** /historical-identities/{id}/compare/{access-type} | Gets a list of differences of specific accessType for the given identity between 2 snapshots
[**getHistoricalIdentity**](#get-historical-identity) | **GET** /historical-identities/{id} | Get latest snapshot of identity
[**getHistoricalIdentityEvents**](#get-historical-identity-events) | **GET** /historical-identities/{id}/events | Lists all events for the given identity
[**getIdentitySnapshot**](#get-identity-snapshot) | **GET** /historical-identities/{id}/snapshots/{date} | Gets an identity snapshot at a given date
[**getIdentitySnapshotSummary**](#get-identity-snapshot-summary) | **GET** /historical-identities/{id}/snapshot-summary | Gets the summary for the event count for a specific identity
[**getIdentityStartDate**](#get-identity-start-date) | **GET** /historical-identities/{id}/start-date | Gets the start date of the identity
[**listHistoricalIdentities**](#list-historical-identities) | **GET** /historical-identities | Lists all the identities
[**listIdentityAccessItems**](#list-identity-access-items) | **GET** /historical-identities/{id}/access-items | Gets a list of access items for the identity filtered by item type
[**listIdentitySnapshotAccessItems**](#list-identity-snapshot-access-items) | **GET** /historical-identities/{id}/snapshots/{date}/access-items | Gets the list of identity access items at a given date filterd by item type
[**listIdentitySnapshots**](#list-identity-snapshots) | **GET** /historical-identities/{id}/snapshots | Lists all the snapshots for the identity



## compare-identity-snapshots


This method gets a difference of count for each access item types for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
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

[[Back to top]](#) 


## compare-identity-snapshots-access-type


This method gets a list of differences of specific accessType for the given identity between 2 snapshots Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
Path   | AccessType | **String** | True  | The specific type which needs to be compared
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

[[Back to top]](#) 


## get-historical-identity


This method retrieves a specified identity Requires authorization scope of 'idn:identity-history:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id

	
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

[[Back to top]](#) 


## get-historical-identity-events


This method retrieves all access events for the identity Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
  Query | From | **String** |   (optional) | The optional instant from which to return the access events
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

[[Back to top]](#) 


## get-identity-snapshot


This method retrieves a specified identity snapshot at a given date Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
Path   | Date | **String** | True  | The specified date

	
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

[[Back to top]](#) 


## get-identity-snapshot-summary


This method gets the summary for the event count for a specific identity by month/day Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
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

[[Back to top]](#) 


## get-identity-start-date


This method retrieves start date of the identity Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id

	
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

[[Back to top]](#) 


## list-historical-identities


This gets the list of identities for the customer. This list end point does not support count=true request param. The total  count of identities would never be returned even if the count param is specified in the request Requires authorization scope of 'idn:identity-history:read'

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
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

[[Back to top]](#) 


## list-identity-access-items


This method retrieves a list of access item for the identity filtered by the access item type Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
  Query | Type | **String** |   (optional) | The type of access item for the identity. If not provided, it defaults to account

	
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
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto


### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) 


## list-identity-snapshot-access-items


This method retrieves the list of identity access items at a given date filterd by item type Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
Path   | Date | **String** | True  | The specified date
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

[[Back to top]](#) 


## list-identity-snapshots


This method retrieves all the snapshots for the identity Requires authorization scope of 'idn:identity-history:read' 

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The identity id
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

[[Back to top]](#) 

