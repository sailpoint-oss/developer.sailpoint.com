---
id: v2025-personal-access-tokens
title: PersonalAccessTokens
pagination_label: PersonalAccessTokens
sidebar_label: PersonalAccessTokens
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PersonalAccessTokens', 'V2025PersonalAccessTokens'] 
slug: /tools/sdk/go/v2025/methods/personal-access-tokens
tags: ['SDK', 'Software Development Kit', 'PersonalAccessTokens', 'V2025PersonalAccessTokens']
---

# PersonalAccessTokensAPI
  Use this API to implement personal access token (PAT) functionality. 
With this functionality in place, users can use PATs as an alternative to passwords for authentication in Identity Security Cloud. 

PATs embed user information into the client ID and secret. 
This replaces the API clients&#39; need to store and provide a username and password to establish a connection, improving Identity Security Cloud organizations&#39; integration security. 

In Identity Security Cloud, users can do the following to create and manage their PATs: Select the dropdown menu under their names, select Preferences, and then select Personal Access Tokens. 
They must then provide a description about the token&#39;s purpose. 
They can then select &#39;Create Token&#39; at the bottom of the page to generate and view the Secret and Client ID. 

Refer to [Managing Personal Access Tokens](https://documentation.sailpoint.com/saas/help/common/api_keys.html?h&#x3D;token#generating-a-personal-access-token) for more information about PATs.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-personal-access-token**](#create-personal-access-token) | **Post** `/personal-access-tokens` | Create personal access token
[**delete-personal-access-token**](#delete-personal-access-token) | **Delete** `/personal-access-tokens/{id}` | Delete personal access token
[**list-personal-access-tokens**](#list-personal-access-tokens) | **Get** `/personal-access-tokens` | List personal access tokens
[**patch-personal-access-token**](#patch-personal-access-token) | **Patch** `/personal-access-tokens/{id}` | Patch personal access token


## create-personal-access-token
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/create-personal-access-token)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePersonalAccessTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createPersonalAccessTokenRequest** | [**CreatePersonalAccessTokenRequest**](../models/create-personal-access-token-request) | Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between &#x60;expirationDate&#x60; and &#x60;userAwareTokenNeverExpires&#x60;. | 

### Return type

[**CreatePersonalAccessTokenResponse**](../models/create-personal-access-token-response)

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
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createpersonalaccesstokenrequest := []byte(`{
          "scope" : [ "demo:personal-access-token-scope:first", "demo:personal-access-token-scope:second" ],
          "accessTokenValiditySeconds" : 36900,
          "name" : "NodeJS Integration",
          "userAwareTokenNeverExpires" : false,
          "expirationDate" : "2026-12-31T23:59:59.999Z"
        }`) // CreatePersonalAccessTokenRequest | Configuration for creating a personal access token, including name, scope, expiration settings, and user acknowledgment of never-expiring tokens. **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`.

    var createPersonalAccessTokenRequest v2025.CreatePersonalAccessTokenRequest
    if err := json.Unmarshal(createpersonalaccesstokenrequest, &createPersonalAccessTokenRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PersonalAccessTokensAPI.CreatePersonalAccessToken(context.Background()).CreatePersonalAccessTokenRequest(createPersonalAccessTokenRequest).Execute()
	  //resp, r, err := apiClient.V2025.PersonalAccessTokensAPI.CreatePersonalAccessToken(context.Background()).CreatePersonalAccessTokenRequest(createPersonalAccessTokenRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PersonalAccessTokensAPI.CreatePersonalAccessToken``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreatePersonalAccessToken`: CreatePersonalAccessTokenResponse
    fmt.Fprintf(os.Stdout, "Response from `PersonalAccessTokensAPI.CreatePersonalAccessToken`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-personal-access-token
Delete personal access token
This deletes a personal access token.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/delete-personal-access-token)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The personal access token id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePersonalAccessTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


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
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The personal access token id # string | The personal access token id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.V2025.PersonalAccessTokensAPI.DeletePersonalAccessToken(context.Background(), id).Execute()
	  //r, err := apiClient.V2025.PersonalAccessTokensAPI.DeletePersonalAccessToken(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PersonalAccessTokensAPI.DeletePersonalAccessToken``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## list-personal-access-tokens
List personal access tokens
This gets a collection of personal access tokens associated with the optional `owner-id`.  query parameter. If the `owner-id` query parameter is omitted, all personal access tokens  for a tenant will be retrieved, but the caller must have the 'idn:all-personal-access-tokens:read' right.

[API Spec](https://developer.sailpoint.com/docs/api/v2025/list-personal-access-tokens)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListPersonalAccessTokensRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ownerId** | **string** | The identity ID of the owner whose personal access tokens should be listed.  If \&quot;me\&quot;, the caller should have the following right: &#39;idn:my-personal-access-tokens:read&#39; If an actual owner ID or if the &#x60;owner-id&#x60; parameter is omitted in the request,  the caller should have the following right: &#39;idn:all-personal-access-tokens:read&#39;.  If the caller has the following right, then managed personal access tokens associated with &#x60;owner-id&#x60;  will be retrieved: &#39;idn:managed-personal-access-tokens:read&#39; | 
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | 

### Return type

[**[]GetPersonalAccessTokenResponse**](../models/get-personal-access-token-response)

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
    ownerId := `2c9180867b50d088017b554662fb281e` // string | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional) # string | The identity ID of the owner whose personal access tokens should be listed.  If \"me\", the caller should have the following right: 'idn:my-personal-access-tokens:read' If an actual owner ID or if the `owner-id` parameter is omitted in the request,  the caller should have the following right: 'idn:all-personal-access-tokens:read'.  If the caller has the following right, then managed personal access tokens associated with `owner-id`  will be retrieved: 'idn:managed-personal-access-tokens:read' (optional)
    filters := `lastUsed le 2023-02-05T10:59:27.214Z` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PersonalAccessTokensAPI.ListPersonalAccessTokens(context.Background()).Execute()
	  //resp, r, err := apiClient.V2025.PersonalAccessTokensAPI.ListPersonalAccessTokens(context.Background()).OwnerId(ownerId).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PersonalAccessTokensAPI.ListPersonalAccessTokens``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListPersonalAccessTokens`: []GetPersonalAccessTokenResponse
    fmt.Fprintf(os.Stdout, "Response from `PersonalAccessTokensAPI.ListPersonalAccessTokens`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-personal-access-token
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

[API Spec](https://developer.sailpoint.com/docs/api/v2025/patch-personal-access-token)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The Personal Access Token id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchPersonalAccessTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between &#x60;expirationDate&#x60; and &#x60;userAwareTokenNeverExpires&#x60;.  | 

### Return type

[**GetPersonalAccessTokenResponse**](../models/get-personal-access-token-response)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
  "encoding/json"
    v2025 "github.com/sailpoint-oss/golang-sdk/v2/api_v2025"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The Personal Access Token id # string | The Personal Access Token id
    jsonpatchoperation := []byte(`[{op=replace, path=/name, value=New name}, {op=replace, path=/scope, value=[sp:scopes:all]}, {op=replace, path=/expirationDate, value=2027-12-31T23:59:59.999Z}]`) // []JsonPatchOperation | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * scope * expirationDate * userAwareTokenNeverExpires  **Important:** See the endpoint description for validation rules regarding the relationship between `expirationDate` and `userAwareTokenNeverExpires`. 

    var jsonPatchOperation []v2025.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperation, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.V2025.PersonalAccessTokensAPI.PatchPersonalAccessToken(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.V2025.PersonalAccessTokensAPI.PatchPersonalAccessToken(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `PersonalAccessTokensAPI.PatchPersonalAccessToken``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchPersonalAccessToken`: GetPersonalAccessTokenResponse
    fmt.Fprintf(os.Stdout, "Response from `PersonalAccessTokensAPI.PatchPersonalAccessToken`: %v\n", resp)
}
```

[[Back to top]](#)

