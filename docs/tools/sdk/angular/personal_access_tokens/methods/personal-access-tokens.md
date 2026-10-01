# PersonalAccessTokens

# PersonalAccessTokensService
  Use this API to implement personal access token (PAT) functionality. 
With this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud. 

PATs embed user information into the client ID and secret. 
This replaces the API clients&#39; need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations&#39; integration security. 

In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens. 
They must then provide a description about the token&#39;s purpose. 
They can then select &#39;Create Token&#39; at the bottom of the page to generate and view the Secret and Client ID. 

Refer to [Managing Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/api_keys.html?h&#x3D;token#generating-a-personal-access-token) for more information about PATs.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-personal-access-token-v1**](#create-personal-access-token-v1) | **POST** `/personal-access-tokens/v1` | Create personal access token
[**delete-personal-access-token-v1**](#delete-personal-access-token-v1) | **DELETE** `/personal-access-tokens/v1/{id}` | Delete personal access token
[**list-personal-access-tokens-v1**](#list-personal-access-tokens-v1) | **GET** `/personal-access-tokens/v1` | List personal access tokens
[**patch-personal-access-token-v1**](#patch-personal-access-token-v1) | **PATCH** `/personal-access-tokens/v1/{id}` | Patch personal access token
[**update-bulk-personal-access-tokens-v1**](#update-bulk-personal-access-tokens-v1) | **PATCH** `/personal-access-tokens/v1/bulk-update` | Bulk update personal access tokens


## create-personal-access-token-v1
Create personal access token
This creates a personal access token.
**expirationDate and userAwareTokenNeverExpires Relationship:**
**Important:** When `expirationDate` is `null` or empty (not included in the request body), the token will never expire.
**Required Validation:** If `expirationDate` is `null` or empty, `userAwareTokenNeverExpires` must be set to `true`. This is a required validation rule.
The valid values for `expirationDate` depend on the value provided for `userAwareTokenNeverExpires`:
* **When `userAwareTokenNeverExpires` is `true` (or required to be `true`):** `expirationDate` can be `null` or omitted from the request body. When `expirationDate` is `null` or empty, the token will never expire. This creates a PAT that never expires and serves as an explicit acknowledgment that the user is aware of the security implications of creating a non-expiring token. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (there is no upper limit). `expirationDate` cannot be `null` in this case. In this scenario, `userAwareTokenNeverExpires` can be omitted.
**Validation Rules:** * **If `expirationDate` is `null` or not included in the request body:** `userAwareTokenNeverExpires` must be set to `true` (required). The token will never expire. * **If `expirationDate` is provided and is not `null`:** `userAwareTokenNeverExpires` can be omitted.
**Security Considerations:** The `userAwareTokenNeverExpires` field is designed to ensure that users explicitly acknowledge the security implications of creating tokens that never expire. Setting this field to `true` indicates that the user understands the increased security risks and has made an informed decision to proceed.
**Note:** The `userAwareTokenNeverExpires` field indicates that the user acknowledges they are creating a token that will never expire. It does not affect token behavior beyond indicating this acknowledgment.

[API Spec](https://developer.sailpoint.com/docs/api/create-personal-access-token-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreatePersonalAccessTokenV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createPersonalAccessTokenRequest** | `CreatePersonalAccessTokenRequest` | Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between &#x60;expirationDate&#x60; and &#x60;userAwareTokenNeverExpires&#x60;. | 

### Return type

`Observable<CreatePersonalAccessTokenResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PersonalAccessTokensService } from '@sailpoint/angular-sdk/personal_access_tokens';
import { CreatePersonalAccessTokenRequest } from '@sailpoint/angular-sdk/personal_access_tokens';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PersonalAccessTokensService);

  createPersonalAccessTokenV1(): void {
    const createPersonalAccessTokenRequest: CreatePersonalAccessTokenRequest = ; // Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between &#x60;expirationDate&#x60; and &#x60;userAwareTokenNeverExpires&#x60;.
    this.api.createPersonalAccessTokenV1({ createPersonalAccessTokenRequest: createPersonalAccessTokenRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-personal-access-token-v1
Delete personal access token
This deletes a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/delete-personal-access-token-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeletePersonalAccessTokenV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The personal access token id |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PersonalAccessTokensService } from '@sailpoint/angular-sdk/personal_access_tokens';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PersonalAccessTokensService);

  deletePersonalAccessTokenV1(): void {
    const id: string = ; // The personal access token id
    this.api.deletePersonalAccessTokenV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-personal-access-tokens-v1
List personal access tokens
This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the 'idn:all-personal-access-tokens:read' right.

[API Spec](https://developer.sailpoint.com/docs/api/list-personal-access-tokens-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListPersonalAccessTokensV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | The identity ID of the owner whose personal access tokens should be listed.  If \&quot;me\&quot;, the caller should have the following right: \&#39;idn:my-personal-access-tokens:read\&#39; If an actual owner ID or if the &#x60;owner-id&#x60; parameter is omitted in the request,  the caller should have the following right: \&#39;idn:all-personal-access-tokens:read\&#39;.  If the caller has the following right, then managed personal access tokens associated with &#x60;owner-id&#x60;  will be retrieved: \&#39;idn:managed-personal-access-tokens:read\&#39; | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | [optional] [default to undefined]

### Return type

`Observable<Array<GetPersonalAccessTokenResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PersonalAccessTokensService } from '@sailpoint/angular-sdk/personal_access_tokens';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PersonalAccessTokensService);

  listPersonalAccessTokensV1(): void {
    const ownerId: string = ; // The identity ID of the owner whose personal access tokens should be listed.  If \&quot;me\&quot;, the caller should have the following right: \&#39;idn:my-personal-access-tokens:read\&#39; If an actual owner ID or if the &#x60;owner-id&#x60; parameter is omitted in the request,  the caller should have the following right: \&#39;idn:all-personal-access-tokens:read\&#39;.  If the caller has the following right, then managed personal access tokens associated with &#x60;owner-id&#x60;  will be retrieved: \&#39;idn:managed-personal-access-tokens:read\&#39; (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)
    this.api.listPersonalAccessTokensV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-personal-access-token-v1
Patch personal access token
This performs a targeted update to the field(s) of a Personal Access Token.
Changing scopes for a Personal Access Token does not impact existing bearer tokens. You will need to create a new bearer token to have the new scopes. Please note that it can take up to 20 minutes for scope changes to be seen on new bearer tokens.
**expirationDate and userAwareTokenNeverExpires Relationship:**
**Important:** When `expirationDate` is `null` or empty (replaced to `null` or omitted from the patch request), the token will never expire.
**Required Validation:** If `expirationDate` is being replaced to `null` or is empty, `userAwareTokenNeverExpires` must be set to `true` in the patch request. This is a required validation rule.
When patching `expirationDate` and `userAwareTokenNeverExpires`, the valid values for `expirationDate` depend on the value provided for `userAwareTokenNeverExpires`:
* **When `userAwareTokenNeverExpires` is being set to `true` (or required to be `true`):** `expirationDate` can be replaced to `null` or omitted from the patch request. When `expirationDate` is `null` or empty, the token will never expire. This sets the PAT to never expire and serves as an explicit acknowledgment that the user is aware of the security implications of creating a non-expiring token. * **When `userAwareTokenNeverExpires` is `false` or omitted:** `expirationDate` must be provided and must be a valid date-time string representing a future date (there is no upper limit). `expirationDate` cannot be `null` in this case. In this scenario, `userAwareTokenNeverExpires` can be omitted.
**Validation Rules:** * **If `expirationDate` is being replaced to `null`:** `userAwareTokenNeverExpires` must also be present in the patch request with a value of `true` (required). The token will never expire. * **If `expirationDate` is not being replaced to `null` (i.e., set to a future date):** `userAwareTokenNeverExpires` can be omitted.
**Security Considerations:** The `userAwareTokenNeverExpires` field is designed to ensure that users explicitly acknowledge the security implications of creating tokens that never expire. Setting this field to `true` indicates that the user understands the increased security risks and has made an informed decision to proceed.
**Note:** The `userAwareTokenNeverExpires` field indicates that the user acknowledges they are creating a token that will never expire. It does not affect token behavior beyond indicating this acknowledgment.

[API Spec](https://developer.sailpoint.com/docs/api/patch-personal-access-token-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchPersonalAccessTokenV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The Personal Access Token id |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between &#x60;expirationDate&#x60; and &#x60;userAwareTokenNeverExpires&#x60;.  | 

### Return type

`Observable<GetPersonalAccessTokenResponse>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PersonalAccessTokensService } from '@sailpoint/angular-sdk/personal_access_tokens';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/personal_access_tokens';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PersonalAccessTokensService);

  patchPersonalAccessTokenV1(): void {
    const id: string = ; // The Personal Access Token id
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between &#x60;expirationDate&#x60; and &#x60;userAwareTokenNeverExpires&#x60;. 
    this.api.patchPersonalAccessTokenV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-bulk-personal-access-tokens-v1
Bulk update personal access tokens
This applies a single [JSON Patch](https://tools.ietf.org/html/rfc6902) document to multiple personal access tokens (PATs) in the current tenant in one request.
The same `patch` is applied to every token referenced in `ids`. Up to **25** tokens can be updated per request.
This is an administrative operation intended for org admins managing PATs across their tenant. The caller must have the `idn:all-personal-access-tokens:update` right. API OAuth client credentials are not permitted to call this endpoint.
Note: This operation is also accessible via `POST` to the same path; both methods behave identically. Unlike the single-token patch endpoint, the request body uses `Content-Type: application/json` (not `application/json-patch+json`).
**Allowed patch paths**
Only expiration-related paths may be modified in bulk:
* `/expirationDate` - Set or clear the token's expiration date. Any other path (for example `/name` or `/scope`) results in a `400` response.
* `/userAwareTokenNeverExpires` - Explicit acknowledgment that the token will never expire.
**expirationDate and userAwareTokenNeverExpires Relationship:**
When clearing `expirationDate` (either by removing it or replacing it with `null`), `userAwareTokenNeverExpires` must also be set to `true` in the same patch. This serves as an explicit acknowledgment that the caller is aware of the security implications of creating a token that will never expire. When `expirationDate` is set to a valid future date-time, `userAwareTokenNeverExpires` can be omitted.
**Note:** `userAwareTokenNeverExpires` is stored internally and is not returned in the response.

[API Spec](https://developer.sailpoint.com/docs/api/update-bulk-personal-access-tokens-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateBulkPersonalAccessTokensV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkUpdatePersonalAccessTokensRequest** | `BulkUpdatePersonalAccessTokensRequest` | The IDs of the personal access tokens to update, along with a single JSON Patch document to apply to each of them. | 

### Return type

`Observable<Array<GetPersonalAccessTokenResponse>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PersonalAccessTokensService } from '@sailpoint/angular-sdk/personal_access_tokens';
import { BulkUpdatePersonalAccessTokensRequest } from '@sailpoint/angular-sdk/personal_access_tokens';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PersonalAccessTokensService);

  updateBulkPersonalAccessTokensV1(): void {
    const bulkUpdatePersonalAccessTokensRequest: BulkUpdatePersonalAccessTokensRequest = ; // The IDs of the personal access tokens to update, along with a single JSON Patch document to apply to each of them.
    this.api.updateBulkPersonalAccessTokensV1({ bulkUpdatePersonalAccessTokensRequest: bulkUpdatePersonalAccessTokensRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

