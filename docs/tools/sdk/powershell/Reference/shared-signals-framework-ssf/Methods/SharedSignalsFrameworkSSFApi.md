---
id: shared-signals-framework-ssf
title: SharedSignalsFrameworkSSF
pagination_label: SharedSignalsFrameworkSSF
sidebar_label: SharedSignalsFrameworkSSF
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SharedSignalsFrameworkSSF', 'SharedSignalsFrameworkSSF'] 
slug: /tools/sdk/powershell/sharedsignalsframeworkssf/methods/shared-signals-framework-ssf
tags: ['SDK', 'Software Development Kit', 'SharedSignalsFrameworkSSF', 'SharedSignalsFrameworkSSF']
---

# SharedSignalsFrameworkSSF
  The SSF Transmitter Service is a security event notification system that monitors identity attribute changes
and automatically triggers session revocation events when specific lifecycle conditions are met.

Use this API to implement transmitter functionality so administrators can discover the transmitter and manage streams.
Transmitters send identity data and events from Identity Security Cloud to external receivers over the Secure Sync Framework (SSF).
The SSF configuration and JWKS endpoints support discovery and verification; the stream management endpoints support creating, updating, and managing streams and verifying receivers.
In Identity Security Cloud, administrators can use the &quot;Connections&quot; &gt; &quot;Shared Signals&quot; area to view and manage transmitters and their streams.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-StreamV1**](#create-stream-v1) | **POST** `/ssf/v1/streams` | Create stream
[**Remove-StreamV1**](#delete-stream-v1) | **DELETE** `/ssf/v1/streams` | Delete stream
[**Get-JWKSDataV1**](#get-jwks-data-v1) | **GET** `/ssf/v1/jwks` | Get JWKS
[**Get-SSFConfigurationV1**](#get-ssf-configuration-v1) | **GET** `/.well-known/v1/ssf-configuration` | Get SSF configuration
[**Get-StreamStatusV1**](#get-stream-status-v1) | **GET** `/ssf/v1/streams/status` | Get stream status
[**Get-StreamV1**](#get-stream-v1) | **GET** `/ssf/v1/streams` | Get stream(s)
[**Send-StreamVerificationV1**](#send-stream-verification-v1) | **POST** `/ssf/v1/streams/verify` | Verify stream
[**Set-StreamConfigurationV1**](#set-stream-configuration-v1) | **PUT** `/ssf/v1/streams` | Replace stream configuration
[**Update-StreamConfigurationV1**](#update-stream-configuration-v1) | **PATCH** `/ssf/v1/streams` | Update stream configuration
[**Update-StreamStatusV1**](#update-stream-status-v1) | **POST** `/ssf/v1/streams/status` | Update stream status


## create-stream-v1
An SSF stream is associated with the client ID of the OAuth 2.0 access token used to create the stream.
One SSF stream is allowed for each client ID.

You can create a maximum of 10 SSF stream configurations for one org.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-stream-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Createstreamrequest | [**Createstreamrequest**](../models/createstreamrequest) | True  | 

### Return type
[**Streamconfigresponse**](../models/streamconfigresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Stream created. | Streamconfigresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Createstreamrequest = @"{"delivery":{"method":"urn:ietf:rfc:8935","endpoint_url":"https://receiver.example.com/ssf/events"},"events_requested":["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],"description":"Production event stream for session revocation notifications"}"@

# Create stream

try {
    $Result = ConvertFrom-JsonToCreatestreamrequest -Json $Createstreamrequest
    New-StreamV1 -Createstreamrequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-StreamV1 -Createstreamrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-StreamV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-stream-v1
Deletes a stream by its ID. There is no request body; the stream is identified by the required
query parameter `stream_id`. On success the response has no body (204 No Content).

The associated stream with the client ID (through the request OAuth 2.0 access token) is deleted.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-stream-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | StreamId | **String** | True  | ID of the stream to delete. Required; omitted or empty returns 400.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$StreamId = "550e8400-e29b-41d4-a716-446655440000" # String | ID of the stream to delete. Required; omitted or empty returns 400.

# Delete stream

try {
    Remove-StreamV1 -StreamId $StreamId 
    
    # Below is a request that includes all optional parameters
    # Remove-StreamV1 -StreamId $StreamId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-StreamV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-jwks-data-v1
Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-jwks-data-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Jwks**](../models/jwks)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | JSON Web Key Set (RFC 7517) containing the transmitter&#39;s public keys. | Jwks
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get JWKS

try {
    Get-JWKSDataV1 
    
    # Below is a request that includes all optional parameters
    # Get-JWKSDataV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-JWKSDataV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-ssf-configuration-v1
Returns the SSF transmitter discovery metadata (well-known configuration).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-ssf-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 

### Return type
[**Transmittermetadata**](../models/transmittermetadata)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | SSF transmitter configuration (issuer, jwks_uri, endpoints, authorization_schemes). | Transmittermetadata
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell

# Get SSF configuration

try {
    Get-SSFConfigurationV1 
    
    # Below is a request that includes all optional parameters
    # Get-SSFConfigurationV1  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-SSFConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-stream-status-v1
Returns the status (enabled, paused, disabled) and optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token. The stream_id query parameter is required.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-stream-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | StreamId | **String** | True  | ID of the stream whose status to retrieve.

### Return type
[**Streamstatusresponse**](../models/streamstatusresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Stream status (enabled, paused, or disabled; reason may be set when status was updated). | Streamstatusresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$StreamId = "550e8400-e29b-41d4-a716-446655440000" # String | ID of the stream whose status to retrieve.

# Get stream status

try {
    Get-StreamStatusV1 -StreamId $StreamId 
    
    # Below is a request that includes all optional parameters
    # Get-StreamStatusV1 -StreamId $StreamId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-StreamStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-stream-v1
Retrieves either a list of all SSF stream configurations or the individual configuration if specified by ID.

As stream configurations are tied to a client ID, you can only view the stream associated with the client ID
of the request OAuth 2.0 access token.

Query parameter `aud` (co filter) can be used to filter by audience.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-stream-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | StreamId | **String** |   (optional) | If provided, returns that stream; otherwise returns list of all streams.

### Return type
[**GetStreamV1200Response**](../models/get-stream-v1200-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Single stream (when stream_id is provided) or list of streams (when stream_id is omitted). | GetStreamV1200Response
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$StreamId = "550e8400-e29b-41d4-a716-446655440000" # String | If provided, returns that stream; otherwise returns list of all streams. (optional)

# Get stream(s)

try {
    Get-StreamV1 
    
    # Below is a request that includes all optional parameters
    # Get-StreamV1 -StreamId $StreamId  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-StreamV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## send-stream-verification-v1
Verifies an SSF stream by publishing a verification event requested by a security events provider.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-stream-verification-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Verificationrequest | [**Verificationrequest**](../models/verificationrequest) | True  | 

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Verificationrequest = @"{"stream_id":"550e8400-e29b-41d4-a716-446655440000","state":"verification-challenge-state-123"}"@

# Verify stream

try {
    $Result = ConvertFrom-JsonToVerificationrequest -Json $Verificationrequest
    Send-StreamVerificationV1 -Verificationrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Send-StreamVerificationV1 -Verificationrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Send-StreamVerificationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## set-stream-configuration-v1
Replaces a stream's configuration (PUT). stream_id and delivery are required; full receiver-supplied properties.

The associated stream with the client ID (through the request OAuth 2.0 access token) is replaced.


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-stream-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Replacestreamconfigurationrequest | [**Replacestreamconfigurationrequest**](../models/replacestreamconfigurationrequest) | True  | 

### Return type
[**Updatestreamconfigresponse**](../models/updatestreamconfigresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Replaced stream configuration (same JSON shape as PATCH/GET single stream). | Updatestreamconfigresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Replacestreamconfigurationrequest = @"{"stream_id":"550e8400-e29b-41d4-a716-446655440000","delivery":{"method":"urn:ietf:rfc:8935","endpoint_url":"https://receiver.example.com/ssf/events"},"events_requested":["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],"description":"Replaced stream configuration for production event delivery"}"@

# Replace stream configuration

try {
    $Result = ConvertFrom-JsonToReplacestreamconfigurationrequest -Json $Replacestreamconfigurationrequest
    Set-StreamConfigurationV1 -Replacestreamconfigurationrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Set-StreamConfigurationV1 -Replacestreamconfigurationrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Set-StreamConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-stream-configuration-v1
Partially updates a stream's configuration (PATCH). Only provided fields are updated.

The associated stream with the client ID (through the request OAuth 2.0 access token) is updated.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-stream-configuration-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Updatestreamconfigurationrequest | [**Updatestreamconfigurationrequest**](../models/updatestreamconfigurationrequest) | True  | 

### Return type
[**Updatestreamconfigresponse**](../models/updatestreamconfigresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated stream configuration (same JSON shape as GET single stream, plus updatedAt). | Updatestreamconfigresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Updatestreamconfigurationrequest = @"{"stream_id":"550e8400-e29b-41d4-a716-446655440000","description":"Updated production event stream configuration"}"@

# Update stream configuration

try {
    $Result = ConvertFrom-JsonToUpdatestreamconfigurationrequest -Json $Updatestreamconfigurationrequest
    Update-StreamConfigurationV1 -Updatestreamconfigurationrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-StreamConfigurationV1 -Updatestreamconfigurationrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-StreamConfigurationV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-stream-status-v1
Updates the operational status (enabled, paused, disabled) with an optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-stream-status-v1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | Updatestreamstatusrequest | [**Updatestreamstatusrequest**](../models/updatestreamstatusrequest) | True  | 

### Return type
[**Streamstatusresponse**](../models/streamstatusresponse)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated stream status (same JSON shape as GET /ssf/streams/status). | Streamstatusresponse
400 | Client Error - Returned if the request body is invalid. | Errorresponsedto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | GetSSFConfigurationV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | Errorresponsedto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | Errorresponsedto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | GetSSFConfigurationV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | Errorresponsedto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$Updatestreamstatusrequest = @"{"stream_id":"550e8400-e29b-41d4-a716-446655440000","status":"paused","reason":"manually paused"}"@

# Update stream status

try {
    $Result = ConvertFrom-JsonToUpdatestreamstatusrequest -Json $Updatestreamstatusrequest
    Update-StreamStatusV1 -Updatestreamstatusrequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-StreamStatusV1 -Updatestreamstatusrequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-StreamStatusV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
