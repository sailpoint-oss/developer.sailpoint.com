---
id: v1-shared-signals-framework-ssf
title: SharedSignalsFrameworkSSF
pagination_label: SharedSignalsFrameworkSSF
sidebar_label: SharedSignalsFrameworkSSF
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SharedSignalsFrameworkSSF', 'v1SharedSignalsFrameworkSSF']
slug: /tools/sdk/typescript/shared_signals_framework_ssf/methods/shared-signals-framework-ssf
tags: ['SDK', 'Software Development Kit', 'SharedSignalsFrameworkSSF', 'v1SharedSignalsFrameworkSSF']
---

# SharedSignalsFrameworkSSFV1Api
  The SSF Transmitter Service is a security event notification system that monitors identity attribute changes
and automatically triggers session revocation events when specific lifecycle conditions are met.

Use this API to implement transmitter functionality so administrators can discover the transmitter and manage streams.
Transmitters send identity data and events from Identity Security Cloud to external receivers over the Secure Sync Framework (SSF).
The SSF configuration and JWKS endpoints support discovery and verification; the stream management endpoints support creating, updating, and managing streams and verifying receivers.
In Identity Security Cloud, administrators can use the &quot;Connections&quot; &gt; &quot;Shared Signals&quot; area to view and manage transmitters and their streams.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-stream-v1**](#create-stream-v1) | **POST** `/ssf/v1/streams` | Create stream
[**delete-stream-v1**](#delete-stream-v1) | **DELETE** `/ssf/v1/streams` | Delete stream
[**get-jwks-data-v1**](#get-jwks-data-v1) | **GET** `/ssf/v1/jwks` | Get JWKS
[**get-ssf-configuration-v1**](#get-ssf-configuration-v1) | **GET** `/.well-known/v1/ssf-configuration` | Get SSF configuration
[**get-stream-status-v1**](#get-stream-status-v1) | **GET** `/ssf/v1/streams/status` | Get stream status
[**get-stream-v1**](#get-stream-v1) | **GET** `/ssf/v1/streams` | Get stream(s)
[**send-stream-verification-v1**](#send-stream-verification-v1) | **POST** `/ssf/v1/streams/verify` | Verify stream
[**set-stream-configuration-v1**](#set-stream-configuration-v1) | **PUT** `/ssf/v1/streams` | Replace stream configuration
[**update-stream-configuration-v1**](#update-stream-configuration-v1) | **PATCH** `/ssf/v1/streams` | Update stream configuration
[**update-stream-status-v1**](#update-stream-status-v1) | **POST** `/ssf/v1/streams/status` | Update stream status


## create-stream-v1
Create stream
An SSF stream is associated with the client ID of the OAuth 2.0 access token used to create the stream.
One SSF stream is allowed for each client ID.

You can create a maximum of 10 SSF stream configurations for one org.


[API Spec](https://developer.sailpoint.com/docs/api/v1/create-stream-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createstreamrequestV1** | `CreatestreamrequestV1` |  | 

### Return type

`StreamconfigresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const createstreamrequestV1: CreatestreamrequestV1 = {"delivery":{"method":"urn:ietf:rfc:8935","endpoint_url":"https://receiver.example.com/ssf/events"},"events_requested":["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],"description":"Production event stream for session revocation notifications"}; // 
const result = await apiInstance.createStreamV1({ createstreamrequestV1: createstreamrequestV1 });
console.log(result);
```

[[Back to top]](#)

## delete-stream-v1
Delete stream
Deletes a stream by its ID. There is no request body; the stream is identified by the required
query parameter `stream_id`. On success the response has no body (204 No Content).

The associated stream with the client ID (through the request OAuth 2.0 access token) is deleted.


[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-stream-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**streamId** | `string` | ID of the stream to delete. Required; omitted or empty returns 400. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const streamId: string = 550e8400-e29b-41d4-a716-446655440000; // ID of the stream to delete. Required; omitted or empty returns 400.
const result = await apiInstance.deleteStreamV1({ streamId: streamId });
console.log(result);
```

[[Back to top]](#)

## get-jwks-data-v1
Get JWKS
Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-jwks-data-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`JwksV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const result = await apiInstance.getJWKSDataV1({  });
console.log(result);
```

[[Back to top]](#)

## get-ssf-configuration-v1
Get SSF configuration
Returns the SSF transmitter discovery metadata (well-known configuration).

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-ssf-configuration-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`TransmittermetadataV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const result = await apiInstance.getSSFConfigurationV1({  });
console.log(result);
```

[[Back to top]](#)

## get-stream-status-v1
Get stream status
Returns the status (enabled, paused, disabled) and optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token. The stream_id query parameter is required.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-stream-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**streamId** | `string` | ID of the stream whose status to retrieve. |  [default to undefined]

### Return type

`StreamstatusresponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const streamId: string = 550e8400-e29b-41d4-a716-446655440000; // ID of the stream whose status to retrieve.
const result = await apiInstance.getStreamStatusV1({ streamId: streamId });
console.log(result);
```

[[Back to top]](#)

## get-stream-v1
Get stream(s)
Retrieves either a list of all SSF stream configurations or the individual configuration if specified by ID.

As stream configurations are tied to a client ID, you can only view the stream associated with the client ID
of the request OAuth 2.0 access token.

Query parameter `aud` (co filter) can be used to filter by audience.


[API Spec](https://developer.sailpoint.com/docs/api/v1/get-stream-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**streamId** | `string` | If provided, returns that stream; otherwise returns list of all streams. | [optional] [default to undefined]

### Return type

`GetStreamV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const streamId: string = 550e8400-e29b-41d4-a716-446655440000; // If provided, returns that stream; otherwise returns list of all streams. (optional)
const result = await apiInstance.getStreamV1({  });
console.log(result);
```

[[Back to top]](#)

## send-stream-verification-v1
Verify stream
Verifies an SSF stream by publishing a verification event requested by a security events provider.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-stream-verification-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**verificationrequestV1** | `VerificationrequestV1` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const verificationrequestV1: VerificationrequestV1 = {"stream_id":"550e8400-e29b-41d4-a716-446655440000","state":"verification-challenge-state-123"}; // 
const result = await apiInstance.sendStreamVerificationV1({ verificationrequestV1: verificationrequestV1 });
console.log(result);
```

[[Back to top]](#)

## set-stream-configuration-v1
Replace stream configuration
Replaces a stream's configuration (PUT). stream_id and delivery are required; full receiver-supplied properties.

The associated stream with the client ID (through the request OAuth 2.0 access token) is replaced.


[API Spec](https://developer.sailpoint.com/docs/api/v1/set-stream-configuration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**replacestreamconfigurationrequestV1** | `ReplacestreamconfigurationrequestV1` |  | 

### Return type

`UpdatestreamconfigresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const replacestreamconfigurationrequestV1: ReplacestreamconfigurationrequestV1 = {"stream_id":"550e8400-e29b-41d4-a716-446655440000","delivery":{"method":"urn:ietf:rfc:8935","endpoint_url":"https://receiver.example.com/ssf/events"},"events_requested":["https://schemas.openid.net/secevent/caep/event-type/session-revoked"],"description":"Replaced stream configuration for production event delivery"}; // 
const result = await apiInstance.setStreamConfigurationV1({ replacestreamconfigurationrequestV1: replacestreamconfigurationrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-stream-configuration-v1
Update stream configuration
Partially updates a stream's configuration (PATCH). Only provided fields are updated.

The associated stream with the client ID (through the request OAuth 2.0 access token) is updated.


[API Spec](https://developer.sailpoint.com/docs/api/v1/update-stream-configuration-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**updatestreamconfigurationrequestV1** | `UpdatestreamconfigurationrequestV1` |  | 

### Return type

`UpdatestreamconfigresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const updatestreamconfigurationrequestV1: UpdatestreamconfigurationrequestV1 = {"stream_id":"550e8400-e29b-41d4-a716-446655440000","description":"Updated production event stream configuration"}; // 
const result = await apiInstance.updateStreamConfigurationV1({ updatestreamconfigurationrequestV1: updatestreamconfigurationrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-stream-status-v1
Update stream status
Updates the operational status (enabled, paused, disabled) with an optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-stream-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**updatestreamstatusrequestV1** | `UpdatestreamstatusrequestV1` |  | 

### Return type

`StreamstatusresponseV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SharedSignalsFrameworkSSFV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SharedSignalsFrameworkSSFV1Api(configuration);
const updatestreamstatusrequestV1: UpdatestreamstatusrequestV1 = {"stream_id":"550e8400-e29b-41d4-a716-446655440000","status":"paused","reason":"manually paused"}; // 
const result = await apiInstance.updateStreamStatusV1({ updatestreamstatusrequestV1: updatestreamstatusrequestV1 });
console.log(result);
```

[[Back to top]](#)

