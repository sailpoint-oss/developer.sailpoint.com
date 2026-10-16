# SharedSignalsFrameworkSSF

# SharedSignalsFrameworkSSFService
  The SSF Transmitter Service is a security event notification system that monitors identity attribute changes
and automatically triggers session revocation events when specific lifecycle conditions are met.

Use this API to implement transmitter functionality so administrators can discover the transmitter and manage streams.
Transmitters send identity data and events from Identity Security Cloud to external receivers over the Secure Sync Framework (SSF).
The SSF configuration and JWKS endpoints support discovery and verification; the stream management endpoints support creating, updating, and managing streams and verifying receivers.
In Identity Security Cloud, administrators can use the &quot;Connections&quot; &gt; &quot;Shared Signals&quot; area to view and manage transmitters and their streams.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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


[API Spec](https://developer.sailpoint.com/docs/api/create-stream-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateStreamV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createStreamRequest** | `CreateStreamRequest` |  | 

### Return type

`Observable<StreamConfigResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
import { CreateStreamRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  createStreamV1(): void {
    const createStreamRequest: CreateStreamRequest = ; // 
    this.api.createStreamV1({ createStreamRequest: createStreamRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-stream-v1
Delete stream
Deletes a stream by its ID. There is no request body; the stream is identified by the required
query parameter `stream_id`. On success the response has no body (204 No Content).

The associated stream with the client ID (through the request OAuth 2.0 access token) is deleted.


[API Spec](https://developer.sailpoint.com/docs/api/delete-stream-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteStreamV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**streamId** | `string` | ID of the stream to delete. Required; omitted or empty returns 400. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  deleteStreamV1(): void {
    const streamId: string = ; // ID of the stream to delete. Required; omitted or empty returns 400.
    this.api.deleteStreamV1({ streamId: streamId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-jwks-data-v1
Get JWKS
Returns the transmitter's JSON Web Key Set (JWKS) for verifying signed delivery requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-jwks-data-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetJWKSDataV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<JWKS>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  getJWKSDataV1(): void {
    this.api.getJWKSDataV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-ssf-configuration-v1
Get SSF configuration
Returns the SSF transmitter discovery metadata (well-known configuration).

[API Spec](https://developer.sailpoint.com/docs/api/get-ssf-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSSFConfigurationV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<TransmitterMetadata>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  getSSFConfigurationV1(): void {
    this.api.getSSFConfigurationV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-stream-status-v1
Get stream status
Returns the status (enabled, paused, disabled) and optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token. The stream_id query parameter is required.

[API Spec](https://developer.sailpoint.com/docs/api/get-stream-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetStreamStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**streamId** | `string` | ID of the stream whose status to retrieve. |  [default to undefined]

### Return type

`Observable<StreamStatusResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  getStreamStatusV1(): void {
    const streamId: string = ; // ID of the stream whose status to retrieve.
    this.api.getStreamStatusV1({ streamId: streamId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
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

### Parameters

The service takes one object that holds every parameter. Its type is `GetStreamV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**streamId** | `string` | If provided, returns that stream; otherwise returns list of all streams. | [optional] [default to undefined]

### Return type

`Observable<GetStreamV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  getStreamV1(): void {
    const streamId: string = ; // If provided, returns that stream; otherwise returns list of all streams. (optional)
    this.api.getStreamV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## send-stream-verification-v1
Verify stream
Verifies an SSF stream by publishing a verification event requested by a security events provider.

[API Spec](https://developer.sailpoint.com/docs/api/send-stream-verification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SendStreamVerificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**verificationRequest** | `VerificationRequest` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
import { VerificationRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  sendStreamVerificationV1(): void {
    const verificationRequest: VerificationRequest = ; // 
    this.api.sendStreamVerificationV1({ verificationRequest: verificationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-stream-configuration-v1
Replace stream configuration
Replaces a stream's configuration (PUT). stream_id and delivery are required; full receiver-supplied properties.

The associated stream with the client ID (through the request OAuth 2.0 access token) is replaced.


[API Spec](https://developer.sailpoint.com/docs/api/set-stream-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetStreamConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**replaceStreamConfigurationRequest** | `ReplaceStreamConfigurationRequest` |  | 

### Return type

`Observable<UpdateStreamConfigResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
import { ReplaceStreamConfigurationRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  setStreamConfigurationV1(): void {
    const replaceStreamConfigurationRequest: ReplaceStreamConfigurationRequest = ; // 
    this.api.setStreamConfigurationV1({ replaceStreamConfigurationRequest: replaceStreamConfigurationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-stream-configuration-v1
Update stream configuration
Partially updates a stream's configuration (PATCH). Only provided fields are updated.

The associated stream with the client ID (through the request OAuth 2.0 access token) is updated.


[API Spec](https://developer.sailpoint.com/docs/api/update-stream-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateStreamConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**updateStreamConfigurationRequest** | `UpdateStreamConfigurationRequest` |  | 

### Return type

`Observable<UpdateStreamConfigResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
import { UpdateStreamConfigurationRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  updateStreamConfigurationV1(): void {
    const updateStreamConfigurationRequest: UpdateStreamConfigurationRequest = ; // 
    this.api.updateStreamConfigurationV1({ updateStreamConfigurationRequest: updateStreamConfigurationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-stream-status-v1
Update stream status
Updates the operational status (enabled, paused, disabled) with an optional reason for the stream associated with the client ID of the request's OAuth 2.0 access token.

[API Spec](https://developer.sailpoint.com/docs/api/update-stream-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateStreamStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**updateStreamStatusRequest** | `UpdateStreamStatusRequest` |  | 

### Return type

`Observable<StreamStatusResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SharedSignalsFrameworkSSFService } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';
import { UpdateStreamStatusRequest } from '@sailpoint/angular-sdk/shared_signals_framework_ssf';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SharedSignalsFrameworkSSFService);

  updateStreamStatusV1(): void {
    const updateStreamStatusRequest: UpdateStreamStatusRequest = ; // 
    this.api.updateStreamStatusV1({ updateStreamStatusRequest: updateStreamStatusRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

