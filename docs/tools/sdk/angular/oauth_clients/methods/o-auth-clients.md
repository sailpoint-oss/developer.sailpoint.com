# OAuthClients

# OAuthClientsService
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-oauth-client-v1**](#create-oauth-client-v1) | **POST** `/oauth-clients/v1` | Create oauth client
[**delete-oauth-client-v1**](#delete-oauth-client-v1) | **DELETE** `/oauth-clients/v1/{id}` | Delete oauth client
[**get-oauth-client-v1**](#get-oauth-client-v1) | **GET** `/oauth-clients/v1/{id}` | Get oauth client
[**list-oauth-clients-v1**](#list-oauth-clients-v1) | **GET** `/oauth-clients/v1` | List oauth clients
[**patch-oauth-client-v1**](#patch-oauth-client-v1) | **PATCH** `/oauth-clients/v1/{id}` | Patch oauth client


## create-oauth-client-v1
Create oauth client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/create-oauth-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateOauthClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createOAuthClientRequest** | `CreateOAuthClientRequest` |  | 

### Return type

`Observable<CreateOAuthClientResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OAuthClientsService } from '@sailpoint/angular-sdk/oauth_clients';
import { CreateOAuthClientRequest } from '@sailpoint/angular-sdk/oauth_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OAuthClientsService);

  createOauthClientV1(): void {
    const createOAuthClientRequest: CreateOAuthClientRequest = ; // 
    this.api.createOauthClientV1({ createOAuthClientRequest: createOAuthClientRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-oauth-client-v1
Delete oauth client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/delete-oauth-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteOauthClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The OAuth client id |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OAuthClientsService } from '@sailpoint/angular-sdk/oauth_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OAuthClientsService);

  deleteOauthClientV1(): void {
    const id: string = ; // The OAuth client id
    this.api.deleteOauthClientV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-oauth-client-v1
Get oauth client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/get-oauth-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetOauthClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The OAuth client id |  [default to undefined]

### Return type

`Observable<GetOAuthClientResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OAuthClientsService } from '@sailpoint/angular-sdk/oauth_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OAuthClientsService);

  getOauthClientV1(): void {
    const id: string = ; // The OAuth client id
    this.api.getOauthClientV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-oauth-clients-v1
List oauth clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api/list-oauth-clients-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListOauthClientsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | [optional] [default to undefined]

### Return type

`Observable<Array<GetOAuthClientResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OAuthClientsService } from '@sailpoint/angular-sdk/oauth_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OAuthClientsService);

  listOauthClientsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)
    this.api.listOauthClientsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-oauth-client-v1
Patch oauth client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/patch-oauth-client-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchOauthClientV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The OAuth client id |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported  | 

### Return type

`Observable<GetOAuthClientResponse>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OAuthClientsService } from '@sailpoint/angular-sdk/oauth_clients';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/oauth_clients';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OAuthClientsService);

  patchOauthClientV1(): void {
    const id: string = ; // The OAuth client id
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 
    this.api.patchOauthClientV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

