---
id: v2026-shared-signals-framework-ssf
title: SharedSignalsFrameworkSSF
pagination_label: SharedSignalsFrameworkSSF
sidebar_label: SharedSignalsFrameworkSSF
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SharedSignalsFrameworkSSF', 'V2026SharedSignalsFrameworkSSF'] 
slug: /tools/sdk/go/v2026/methods/shared-signals-framework-ssf
tags: ['SDK', 'Software Development Kit', 'SharedSignalsFrameworkSSF', 'V2026SharedSignalsFrameworkSSF']
---

# SharedSignalsFrameworkSSFAPI
  The SSF Transmitter Service is a security event notification system that monitors identity attribute changes
and automatically triggers session revocation events when specific lifecycle conditions are met.

Use this API to implement transmitter functionality so administrators can discover the transmitter and manage streams.
Transmitters send identity data and events from Identity Security Cloud to external receivers over the Secure Sync Framework (SSF).
The SSF configuration and JWKS endpoints support discovery and verification; the stream management endpoints support creating, updating, and managing streams and verifying receivers.
In Identity Security Cloud, administrators can use the &quot;Connections&quot; &gt; &quot;Shared Signals&quot; area to view and manage transmitters and their streams.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2026*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-stream**](#create-stream) | **Post** `/ssf/streams` | Create stream
[**delete-stream**](#delete-stream) | **Delete** `/ssf/streams` | Delete stream
[**get-jwks-data**](#get-jwks-data) | **Get** `/ssf/jwks` | Get JWKS
[**get-ssf-configuration**](#get-ssf-configuration) | **Get** `/.well-known/ssf-configuration` | Get SSF configuration
[**get-stream**](#get-stream) | **Get** `/ssf/streams` | Get stream(s)
[**get-stream-status**](#get-stream-status) | **Get** `/ssf/streams/status` | Get stream status
[**send-stream-verification**](#send-stream-verification) | **Post** `/ssf/streams/verify` | Verify stream
[**set-stream-configuration**](#set-stream-configuration) | **Put** `/ssf/streams` | Replace stream configuration
[**update-stream-configuration**](#update-stream-configuration) | **Patch** `/ssf/streams` | Update stream configuration
[**update-stream-status**](#update-stream-status) | **Post** `/ssf/streams/status` | Update stream status


## create-stream
Create stream
An SSF stream is associated with the client ID of the OAuth 2.0 access token used to create the stream.
One SSF stream is allowed for each client ID.

You can create a maximum of 10 SSF stream configurations for one org.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/create-stream)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createStreamRequest** | [**CreateStreamRequest**](../models/create-stream-request) |  | 

### Return type

[**StreamConfigResponse**](../models/stream-config-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createstreamrequest := []byte(`{
          "delivery" : {
            "method" : "urn:ietf:rfc:8935",
            "endpoint_url" : "https://receiver.example.com/ssf/events",
            "authorization_header" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
          "description" : "Production event stream",
          "events_requested" : [ "https://schemas.openid.net/secevent/caep/event-type/session-revoked" ]
        }`) // CreateStreamRequest | 

    var createStreamRequest v2026.CreateStreamRequest
    if err := json.Unmarshal(createstreamrequest, &createStreamRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.CreateStream(context.Background()).CreateStreamRequest(createStreamRequest).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.CreateStream(context.Background()).CreateStreamRequest(createStreamRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.CreateStream``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateStream`: StreamConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.CreateStream`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-stream
Delete stream
Deletes a stream by its ID. There is no request body; the stream is identified by the required
query parameter `stream_id`. On success the response has no body (204 No Content).

The associated stream with the client ID (through the request OAuth 2.0 access token) is deleted.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/delete-stream)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **string** | ID of the stream to delete. Required; omitted or empty returns 400. | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    streamId := `550e8400-e29b-41d4-a716-446655440000` // string | ID of the stream to delete. Required; omitted or empty returns 400. # string | ID of the stream to delete. Required; omitted or empty returns 400.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.DeleteStream(context.Background()).StreamId(streamId).Execute()
	  //r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.DeleteStream(context.Background()).StreamId(streamId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.DeleteStream``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-jwks-data
Get JWKS
Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-jwks-data)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetJWKSDataRequest struct via the builder pattern


### Return type

[**JWKS**](../models/jwks)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetJWKSData(context.Background()).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetJWKSData(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetJWKSData``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetJWKSData`: JWKS
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetJWKSData`: %v\n", resp)
}
```

[[Back to top]](#)

## get-ssf-configuration
Get SSF configuration
Returns the SSF transmitter discovery metadata (well-known configuration).

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-ssf-configuration)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSSFConfigurationRequest struct via the builder pattern


### Return type

[**TransmitterMetadata**](../models/transmitter-metadata)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetSSFConfiguration(context.Background()).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetSSFConfiguration(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetSSFConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSSFConfiguration`: TransmitterMetadata
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetSSFConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## get-stream
Get stream(s)
Retrieves either a list of all SSF stream configurations or the individual configuration if specified by ID.

As stream configurations are tied to a client ID, you can only view the stream associated with the client ID
of the request OAuth 2.0 access token.

Query parameter `aud` (co filter) can be used to filter by audience.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-stream)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStreamRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **string** | If provided, returns that stream; otherwise returns list of all streams. | 

### Return type

[**GetStream200Response**](../models/get-stream200-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    streamId := `550e8400-e29b-41d4-a716-446655440000` // string | If provided, returns that stream; otherwise returns list of all streams. (optional) # string | If provided, returns that stream; otherwise returns list of all streams. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetStream(context.Background()).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetStream(context.Background()).StreamId(streamId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetStream``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStream`: GetStream200Response
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetStream`: %v\n", resp)
}
```

[[Back to top]](#)

## get-stream-status
Get stream status
Returns the status (enabled, paused, disabled) and optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token. The stream_id query parameter is required.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/get-stream-status)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStreamStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **string** | ID of the stream whose status to retrieve. | 

### Return type

[**StreamStatusResponse**](../models/stream-status-response)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    streamId := `550e8400-e29b-41d4-a716-446655440000` // string | ID of the stream whose status to retrieve. # string | ID of the stream whose status to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetStreamStatus(context.Background()).StreamId(streamId).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.GetStreamStatus(context.Background()).StreamId(streamId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetStreamStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStreamStatus`: StreamStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetStreamStatus`: %v\n", resp)
}
```

[[Back to top]](#)

## send-stream-verification
Verify stream
Verifies an SSF stream by publishing a verification event requested by a security events provider.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/send-stream-verification)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendStreamVerificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verificationRequest** | [**VerificationRequest**](../models/verification-request) |  | 

### Return type

 (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    verificationrequest := []byte(`{
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "state" : "verification-challenge-state-123"
        }`) // VerificationRequest | 

    var verificationRequest v2026.VerificationRequest
    if err := json.Unmarshal(verificationrequest, &verificationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.SendStreamVerification(context.Background()).VerificationRequest(verificationRequest).Execute()
	  //r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.SendStreamVerification(context.Background()).VerificationRequest(verificationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.SendStreamVerification``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## set-stream-configuration
Replace stream configuration
Replaces a stream's configuration (PUT). stream_id and delivery are required; full receiver-supplied properties.

The associated stream with the client ID (through the request OAuth 2.0 access token) is replaced.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/set-stream-configuration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetStreamConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **replaceStreamConfigurationRequest** | [**ReplaceStreamConfigurationRequest**](../models/replace-stream-configuration-request) |  | 

### Return type

[**UpdateStreamConfigResponse**](../models/update-stream-config-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    replacestreamconfigurationrequest := []byte(`{
          "delivery" : {
            "method" : "urn:ietf:rfc:8935",
            "endpoint_url" : "https://receiver.example.com/ssf/events",
            "authorization_header" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "description" : "Production event stream",
          "events_requested" : [ "https://schemas.openid.net/secevent/caep/event-type/session-revoked" ]
        }`) // ReplaceStreamConfigurationRequest | 

    var replaceStreamConfigurationRequest v2026.ReplaceStreamConfigurationRequest
    if err := json.Unmarshal(replacestreamconfigurationrequest, &replaceStreamConfigurationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.SetStreamConfiguration(context.Background()).ReplaceStreamConfigurationRequest(replaceStreamConfigurationRequest).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.SetStreamConfiguration(context.Background()).ReplaceStreamConfigurationRequest(replaceStreamConfigurationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.SetStreamConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetStreamConfiguration`: UpdateStreamConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.SetStreamConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## update-stream-configuration
Update stream configuration
Partially updates a stream's configuration (PATCH). Only provided fields are updated.

The associated stream with the client ID (through the request OAuth 2.0 access token) is updated.


[API Spec](https://developer.sailpoint.com/docs/api/v2026/update-stream-configuration)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStreamConfigurationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStreamConfigurationRequest** | [**UpdateStreamConfigurationRequest**](../models/update-stream-configuration-request) |  | 

### Return type

[**UpdateStreamConfigResponse**](../models/update-stream-config-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    updatestreamconfigurationrequest := []byte(`{
          "delivery" : {
            "method" : "urn:ietf:rfc:8935",
            "endpoint_url" : "https://receiver.example.com/ssf/events",
            "authorization_header" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "description" : "Updated production event stream configuration",
          "events_requested" : [ "https://schemas.openid.net/secevent/caep/event-type/session-revoked" ]
        }`) // UpdateStreamConfigurationRequest | 

    var updateStreamConfigurationRequest v2026.UpdateStreamConfigurationRequest
    if err := json.Unmarshal(updatestreamconfigurationrequest, &updateStreamConfigurationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.UpdateStreamConfiguration(context.Background()).UpdateStreamConfigurationRequest(updateStreamConfigurationRequest).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.UpdateStreamConfiguration(context.Background()).UpdateStreamConfigurationRequest(updateStreamConfigurationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.UpdateStreamConfiguration``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateStreamConfiguration`: UpdateStreamConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.UpdateStreamConfiguration`: %v\n", resp)
}
```

[[Back to top]](#)

## update-stream-status
Update stream status
Updates the operational status (enabled, paused, disabled) with an optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token.

[API Spec](https://developer.sailpoint.com/docs/api/v2026/update-stream-status)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStreamStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateStreamStatusRequest** | [**UpdateStreamStatusRequest**](../models/update-stream-status-request) |  | 

### Return type

[**StreamStatusResponse**](../models/stream-status-response)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2026 "github.com/sailpoint-oss/golang-sdk/v2/api_v2026"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    updatestreamstatusrequest := []byte(`{
          "reason" : "manually paused",
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "status" : "paused"
        }`) // UpdateStreamStatusRequest | 

    var updateStreamStatusRequest v2026.UpdateStreamStatusRequest
    if err := json.Unmarshal(updatestreamstatusrequest, &updateStreamStatusRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.UpdateStreamStatus(context.Background()).UpdateStreamStatusRequest(updateStreamStatusRequest).Execute()
	  //resp, r, err := apiClient.V2026.SharedSignalsFrameworkSSFAPI.UpdateStreamStatus(context.Background()).UpdateStreamStatusRequest(updateStreamStatusRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.UpdateStreamStatus``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateStreamStatus`: StreamStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.UpdateStreamStatus`: %v\n", resp)
}
```

[[Back to top]](#)

