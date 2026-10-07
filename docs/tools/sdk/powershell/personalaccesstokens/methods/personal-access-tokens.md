# PersonalAccessTokens

# PersonalAccessTokens
  Use this API to implement personal access token (PAT) functionality. 
With this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud. 

PATs embed user information into the client ID and secret. 
This replaces the API clients&#39; need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations&#39; integration security. 

In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens. 
They must then provide a description about the token&#39;s purpose. 
They can then select &#39;Create Token&#39; at the bottom of the page to generate and view the Secret and Client ID. 

Refer to [Managing Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/api_keys.html?h&#x3D;token#generating-a-personal-access-token) for more information about PATs.
 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-PersonalAccessTokenV1**](#create-personal-access-token-v1) | **POST** `/personal-access-tokens/v1` | Create personal access token
[**Remove-PersonalAccessTokenV1**](#delete-personal-access-token-v1) | **DELETE** `/personal-access-tokens/v1/{id}` | Delete personal access token
[**Get-PersonalAccessTokensV1**](#list-personal-access-tokens-v1) | **GET** `/personal-access-tokens/v1` | List personal access tokens
[**Update-PersonalAccessTokenV1**](#patch-personal-access-token-v1) | **PATCH** `/personal-access-tokens/v1/{id}` | Patch personal access token
[**Update-BulkPersonalAccessTokensV1**](#update-bulk-personal-access-tokens-v1) | **PATCH** `/personal-access-tokens/v1/bulk-update` | Bulk update personal access tokens


## create-personal-access-token-v1
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
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | CreatePersonalAccessTokenRequest | [**CreatePersonalAccessTokenRequest**](../models/create-personal-access-token-request) | True  | Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`.

### Return type
[**CreatePersonalAccessTokenResponse**](../models/create-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Created. Note - this is the only time Personal Access Tokens&#39; secret attribute will be displayed. | CreatePersonalAccessTokenResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$CreatePersonalAccessTokenRequest = @"{
  "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
  "accessTokenValiditySeconds" : 36900,
  "name" : "NodeJS Integration",
  "userAwareTokenNeverExpires" : false,
  "expirationDate" : "2026-12-31T23:59:59.999Z"
}"@

# Create personal access token

try {
    $Result = ConvertFrom-JsonToCreatePersonalAccessTokenRequest -Json $CreatePersonalAccessTokenRequest
    New-PersonalAccessTokenV1 -CreatePersonalAccessTokenRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-PersonalAccessTokenV1 -CreatePersonalAccessTokenRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-PersonalAccessTokenV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-personal-access-token-v1
This deletes a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/delete-personal-access-token-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The personal access token id

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The personal access token id

# Delete personal access token

try {
    Remove-PersonalAccessTokenV1 -Id $Id 
    
    # Below is a request that includes all optional parameters
    # Remove-PersonalAccessTokenV1 -Id $Id  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-PersonalAccessTokenV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-personal-access-tokens-v1
This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the 'idn:all-personal-access-tokens:read' right.

[API Spec](https://developer.sailpoint.com/docs/api/list-personal-access-tokens-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | OwnerId | **String** |   (optional) | The identity ID of the owner whose personal access tokens should be listed.  If ""me"", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read'
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull*

### Return type
[**GetPersonalAccessTokenResponse[]**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of personal access tokens. | GetPersonalAccessTokenResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$OwnerId = "2c9180867b50d088017b554662fb281e" # String | The identity ID of the owner whose personal access tokens should be listed.  If ""me"", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional)
$Filters = 'lastUsed le 2023-02-05T10:59:27.214Z' # String | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

# List personal access tokens

try {
    Get-PersonalAccessTokensV1 
    
    # Below is a request that includes all optional parameters
    # Get-PersonalAccessTokensV1 -OwnerId $OwnerId -Filters $Filters  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-PersonalAccessTokensV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## patch-personal-access-token-v1
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
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | Id | **String** | True  | The Personal Access Token id
 Body  | JsonPatchOperation | [**[]JsonPatchOperation**](../models/json-patch-operation) | True  | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`. 

### Return type
[**GetPersonalAccessTokenResponse**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Indicates the PATCH operation succeeded, and returns the PAT&#39;s new representation. | GetPersonalAccessTokenResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example
```powershell
$Id = "ef38f94347e94562b5bb8424a56397d8" # String | The Personal Access Token id
 $JsonPatchOperation = @"{
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}"@ # JsonPatchOperation[] | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`. 
 

# Patch personal access token

try {
    $Result = ConvertFrom-JsonToJsonPatchOperation -Json $JsonPatchOperation
    Update-PersonalAccessTokenV1 -Id $Id -JsonPatchOperation $Result 
    
    # Below is a request that includes all optional parameters
    # Update-PersonalAccessTokenV1 -Id $Id -JsonPatchOperation $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-PersonalAccessTokenV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-bulk-personal-access-tokens-v1
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
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | BulkUpdatePersonalAccessTokensRequest | [**BulkUpdatePersonalAccessTokensRequest**](../models/bulk-update-personal-access-tokens-request) | True  | The IDs of the personal access tokens to update, along with a single JSON Patch document to apply to each of them.

### Return type
[**GetPersonalAccessTokenResponse[]**](../models/get-personal-access-token-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | The bulk update succeeded. Returns the updated representation of each personal access token, sorted by &#x60;id&#x60;. | GetPersonalAccessTokenResponse[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListPersonalAccessTokensV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListPersonalAccessTokensV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$BulkUpdatePersonalAccessTokensRequest = @"{
  "patch" : [ {
    "op" : "replace",
    "path" : "/expirationDate",
    "value" : "2026-08-01T00:00:00.000Z"
  } ],
  "ids" : [ "695dab70d33d466b81d958dc9fb392db", "abc123def456abc123def456abc12345" ]
}"@

# Bulk update personal access tokens

try {
    $Result = ConvertFrom-JsonToBulkUpdatePersonalAccessTokensRequest -Json $BulkUpdatePersonalAccessTokensRequest
    Update-BulkPersonalAccessTokensV1 -BulkUpdatePersonalAccessTokensRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-BulkPersonalAccessTokensV1 -BulkUpdatePersonalAccessTokensRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-BulkPersonalAccessTokensV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
