# SharedSignalsFrameworkSSF

# SharedSignalsFrameworkSSFAPI
  The SSF Transmitter Service is a security event notification system that monitors identity attribute changes
and automatically triggers session revocation events when specific lifecycle conditions are met.

Use this API to implement transmitter functionality so administrators can discover the transmitter and manage streams.
Transmitters send identity data and events from Identity Security Cloud to external receivers over the Secure Sync Framework (SSF).
The SSF configuration and JWKS endpoints support discovery and verification; the stream management endpoints support creating, updating, and managing streams and verifying receivers.
In Identity Security Cloud, administrators can use the &quot;Connections&quot; &gt; &quot;Shared Signals&quot; area to view and manage transmitters and their streams.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-stream-v1**](#create-stream-v1) | **Post** `/ssf/v1/streams` | Create stream
[**delete-stream-v1**](#delete-stream-v1) | **Delete** `/ssf/v1/streams` | Delete stream
[**get-jwks-data-v1**](#get-jwks-data-v1) | **Get** `/ssf/v1/jwks` | Get JWKS
[**get-ssf-configuration-v1**](#get-ssf-configuration-v1) | **Get** `/.well-known/v1/ssf-configuration` | Get SSF configuration
[**get-stream-status-v1**](#get-stream-status-v1) | **Get** `/ssf/v1/streams/status` | Get stream status
[**get-stream-v1**](#get-stream-v1) | **Get** `/ssf/v1/streams` | Get stream(s)
[**send-stream-verification-v1**](#send-stream-verification-v1) | **Post** `/ssf/v1/streams/verify` | Verify stream
[**set-stream-configuration-v1**](#set-stream-configuration-v1) | **Put** `/ssf/v1/streams` | Replace stream configuration
[**update-stream-configuration-v1**](#update-stream-configuration-v1) | **Patch** `/ssf/v1/streams` | Update stream configuration
[**update-stream-status-v1**](#update-stream-status-v1) | **Post** `/ssf/v1/streams/status` | Update stream status


## create-stream-v1
Create stream
An SSF stream is associated with the client ID of the OAuth 2.0 access token used to create the stream.
One SSF stream is allowed for each client ID.

You can create a maximum of 10 SSF stream configurations for one org.


[API Spec](https://developer.sailpoint.com/docs/api/create-stream-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateStreamV1Request struct via the builder pattern


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
    shared_signals_framework_ssf "github.com/sailpoint-oss/golang-sdk/v3/shared_signals_framework_ssf"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createstreamrequestJson := []byte(`{
          "delivery" : {
            "method" : "urn:ietf:rfc:8935",
            "endpoint_url" : "https://receiver.example.com/ssf/events",
            "authorization_header" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
          "description" : "Production event stream",
          "events_requested" : [ "https://schemas.openid.net/secevent/caep/event-type/session-revoked" ]
        }`) // CreateStreamRequest | 

    var createStreamRequest shared_signals_framework_ssf.CreateStreamRequest
    if err := json.Unmarshal(createstreamrequestJson, &createStreamRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.CreateStreamV1(context.Background()).CreateStreamRequest(createStreamRequest).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.CreateStreamV1(context.Background()).CreateStreamRequest(createStreamRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.CreateStreamV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateStreamV1`: StreamConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.CreateStreamV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-stream-v1
Delete stream
Deletes a stream by its ID. There is no request body; the stream is identified by the required
query parameter `stream_id`. On success the response has no body (204 No Content).

The associated stream with the client ID (through the request OAuth 2.0 access token) is deleted.


[API Spec](https://developer.sailpoint.com/docs/api/delete-stream-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteStreamV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    streamId := `550e8400-e29b-41d4-a716-446655440000` // string | ID of the stream to delete. Required; omitted or empty returns 400. # string | ID of the stream to delete. Required; omitted or empty returns 400.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SharedSignalsFrameworkSSFAPI.DeleteStreamV1(context.Background()).StreamId(streamId).Execute()
	  //r, err := apiClient.SharedSignalsFrameworkSSFAPI.DeleteStreamV1(context.Background()).StreamId(streamId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.DeleteStreamV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-jwks-data-v1
Get JWKS
Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-jwks-data-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetJWKSDataV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetJWKSDataV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetJWKSDataV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetJWKSDataV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetJWKSDataV1`: JWKS
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetJWKSDataV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-ssf-configuration-v1
Get SSF configuration
Returns the SSF transmitter discovery metadata (well-known configuration).

[API Spec](https://developer.sailpoint.com/docs/api/get-ssf-configuration-v-1)

### Path Parameters

This endpoint does not need any parameter.

### Other Parameters

Other parameters are passed through a pointer to a apiGetSSFConfigurationV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetSSFConfigurationV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetSSFConfigurationV1(context.Background()).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetSSFConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSSFConfigurationV1`: TransmitterMetadata
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetSSFConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-stream-status-v1
Get stream status
Returns the status (enabled, paused, disabled) and optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token. The stream_id query parameter is required.

[API Spec](https://developer.sailpoint.com/docs/api/get-stream-status-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStreamStatusV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    streamId := `550e8400-e29b-41d4-a716-446655440000` // string | ID of the stream whose status to retrieve. # string | ID of the stream whose status to retrieve.

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetStreamStatusV1(context.Background()).StreamId(streamId).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetStreamStatusV1(context.Background()).StreamId(streamId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetStreamStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStreamStatusV1`: StreamStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetStreamStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-stream-v1
Get stream(s)
Retrieves either a list of all SSF stream configurations or the individual configuration if specified by ID.

As stream configurations are tied to a client ID, you can only view the stream associated with the client ID
of the request OAuth 2.0 access token.

Query parameter `aud` (co filter) can be used to filter by audience.


[API Spec](https://developer.sailpoint.com/docs/api/get-stream-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStreamV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **streamId** | **string** | If provided, returns that stream; otherwise returns list of all streams. | 

### Return type

[**GetStreamV1200Response**](../models/get-stream-v1200-response)

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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    streamId := `550e8400-e29b-41d4-a716-446655440000` // string | If provided, returns that stream; otherwise returns list of all streams. (optional) # string | If provided, returns that stream; otherwise returns list of all streams. (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetStreamV1(context.Background()).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.GetStreamV1(context.Background()).StreamId(streamId).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.GetStreamV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStreamV1`: GetStreamV1200Response
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.GetStreamV1`: %v\n", resp)
}
```

[[Back to top]](#)

## send-stream-verification-v1
Verify stream
Verifies an SSF stream by publishing a verification event requested by a security events provider.

[API Spec](https://developer.sailpoint.com/docs/api/send-stream-verification-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSendStreamVerificationV1Request struct via the builder pattern


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
    shared_signals_framework_ssf "github.com/sailpoint-oss/golang-sdk/v3/shared_signals_framework_ssf"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    verificationrequestJson := []byte(`{
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "state" : "verification-challenge-state-123"
        }`) // VerificationRequest | 

    var verificationRequest shared_signals_framework_ssf.VerificationRequest
    if err := json.Unmarshal(verificationrequestJson, &verificationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.SharedSignalsFrameworkSSFAPI.SendStreamVerificationV1(context.Background()).VerificationRequest(verificationRequest).Execute()
	  //r, err := apiClient.SharedSignalsFrameworkSSFAPI.SendStreamVerificationV1(context.Background()).VerificationRequest(verificationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.SendStreamVerificationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## set-stream-configuration-v1
Replace stream configuration
Replaces a stream's configuration (PUT). stream_id and delivery are required; full receiver-supplied properties.

The associated stream with the client ID (through the request OAuth 2.0 access token) is replaced.


[API Spec](https://developer.sailpoint.com/docs/api/set-stream-configuration-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSetStreamConfigurationV1Request struct via the builder pattern


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
    shared_signals_framework_ssf "github.com/sailpoint-oss/golang-sdk/v3/shared_signals_framework_ssf"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    replacestreamconfigurationrequestJson := []byte(`{
          "delivery" : {
            "method" : "urn:ietf:rfc:8935",
            "endpoint_url" : "https://receiver.example.com/ssf/events",
            "authorization_header" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "description" : "Production event stream",
          "events_requested" : [ "https://schemas.openid.net/secevent/caep/event-type/session-revoked" ]
        }`) // ReplaceStreamConfigurationRequest | 

    var replaceStreamConfigurationRequest shared_signals_framework_ssf.ReplaceStreamConfigurationRequest
    if err := json.Unmarshal(replacestreamconfigurationrequestJson, &replaceStreamConfigurationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.SetStreamConfigurationV1(context.Background()).ReplaceStreamConfigurationRequest(replaceStreamConfigurationRequest).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.SetStreamConfigurationV1(context.Background()).ReplaceStreamConfigurationRequest(replaceStreamConfigurationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.SetStreamConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetStreamConfigurationV1`: UpdateStreamConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.SetStreamConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-stream-configuration-v1
Update stream configuration
Partially updates a stream's configuration (PATCH). Only provided fields are updated.

The associated stream with the client ID (through the request OAuth 2.0 access token) is updated.


[API Spec](https://developer.sailpoint.com/docs/api/update-stream-configuration-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStreamConfigurationV1Request struct via the builder pattern


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
    shared_signals_framework_ssf "github.com/sailpoint-oss/golang-sdk/v3/shared_signals_framework_ssf"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    updatestreamconfigurationrequestJson := []byte(`{
          "delivery" : {
            "method" : "urn:ietf:rfc:8935",
            "endpoint_url" : "https://receiver.example.com/ssf/events",
            "authorization_header" : "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9..."
          },
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "description" : "Updated production event stream configuration",
          "events_requested" : [ "https://schemas.openid.net/secevent/caep/event-type/session-revoked" ]
        }`) // UpdateStreamConfigurationRequest | 

    var updateStreamConfigurationRequest shared_signals_framework_ssf.UpdateStreamConfigurationRequest
    if err := json.Unmarshal(updatestreamconfigurationrequestJson, &updateStreamConfigurationRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.UpdateStreamConfigurationV1(context.Background()).UpdateStreamConfigurationRequest(updateStreamConfigurationRequest).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.UpdateStreamConfigurationV1(context.Background()).UpdateStreamConfigurationRequest(updateStreamConfigurationRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.UpdateStreamConfigurationV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateStreamConfigurationV1`: UpdateStreamConfigResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.UpdateStreamConfigurationV1`: %v\n", resp)
}
```

[[Back to top]](#)

## update-stream-status-v1
Update stream status
Updates the operational status (enabled, paused, disabled) with an optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token.

[API Spec](https://developer.sailpoint.com/docs/api/update-stream-status-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiUpdateStreamStatusV1Request struct via the builder pattern


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
    shared_signals_framework_ssf "github.com/sailpoint-oss/golang-sdk/v3/shared_signals_framework_ssf"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    updatestreamstatusrequestJson := []byte(`{
          "reason" : "manually paused",
          "stream_id" : "550e8400-e29b-41d4-a716-446655440000",
          "status" : "paused"
        }`) // UpdateStreamStatusRequest | 

    var updateStreamStatusRequest shared_signals_framework_ssf.UpdateStreamStatusRequest
    if err := json.Unmarshal(updatestreamstatusrequestJson, &updateStreamStatusRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.UpdateStreamStatusV1(context.Background()).UpdateStreamStatusRequest(updateStreamStatusRequest).Execute()
	  //resp, r, err := apiClient.SharedSignalsFrameworkSSFAPI.UpdateStreamStatusV1(context.Background()).UpdateStreamStatusRequest(updateStreamStatusRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `SharedSignalsFrameworkSSFAPI.UpdateStreamStatusV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateStreamStatusV1`: StreamStatusResponse
    fmt.Fprintf(os.Stdout, "Response from `SharedSignalsFrameworkSSFAPI.UpdateStreamStatusV1`: %v\n", resp)
}
```

[[Back to top]](#)

