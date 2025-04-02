---
id: o-auth-clients
title: OAuthClients
pagination_label: OAuthClients
sidebar_label: OAuthClients
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'OAuthClients', 'OAuthClients'] 
slug: /tools/sdk/go//methods/o-auth-clients
tags: ['SDK', 'Software Development Kit', 'OAuthClients', 'OAuthClients']
---

# OAuthClientsAPI
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
All URIs are relative to *https://sailpoint.api.identitynow.com/v2025*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-oauth-client**](#create-oauth-client) | **Post** `/oauth-clients` | Create OAuth Client
[**delete-oauth-client**](#delete-oauth-client) | **Delete** `/oauth-clients/{id}` | Delete OAuth Client
[**get-oauth-client**](#get-oauth-client) | **Get** `/oauth-clients/{id}` | Get OAuth Client
[**list-oauth-clients**](#list-oauth-clients) | **Get** `/oauth-clients` | List OAuth Clients
[**patch-oauth-client**](#patch-oauth-client) | **Patch** `/oauth-clients/{id}` | Patch OAuth Client


## create-oauth-client
Create OAuth Client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api//create-oauth-client)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateOauthClientRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createOAuthClientRequest** | [**CreateOAuthClientRequest**](../models/create-o-auth-client-request) |  | 

### Return type

[**CreateOAuthClientResponse**](../models/create-o-auth-client-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    createOAuthClientRequest := fmt.Sprintf(`{
          "internal" : false,
          "businessName" : "Acme-Solar",
          "description" : "An API client used for the authorization_code, refresh_token, and client_credentials flows",
          "refreshTokenValiditySeconds" : 86400,
          "type" : "CONFIDENTIAL",
          "redirectUris" : [ "http://localhost:12345" ],
          "enabled" : true,
          "accessType" : "OFFLINE",
          "grantTypes" : [ "AUTHORIZATION_CODE", "CLIENT_CREDENTIALS", "REFRESH_TOKEN" ],
          "strongAuthSupported" : false,
          "homepageUrl" : "http://localhost:12345",
          "accessTokenValiditySeconds" : 750,
          "scope" : [ "demo:api-client-scope:first", "demo:api-client-scope:second" ],
          "name" : "Demo API Client",
          "claimsSupported" : false
        }`) # CreateOAuthClientRequest | 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..OAuthClientsAPI.CreateOauthClient(context.Background()).CreateOAuthClientRequest(createOAuthClientRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.CreateOauthClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreateOauthClient`: CreateOAuthClientResponse
	fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.CreateOauthClient`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-oauth-client
Delete OAuth Client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api//delete-oauth-client)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The OAuth client id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOauthClientRequest struct via the builder pattern


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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The OAuth client id # string | The OAuth client id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	r, err := apiClient..OAuthClientsAPI.DeleteOauthClient(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.DeleteOauthClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

[[Back to top]](#)

## get-oauth-client
Get OAuth Client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api//get-oauth-client)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The OAuth client id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOauthClientRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**GetOAuthClientResponse**](../models/get-o-auth-client-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The OAuth client id # string | The OAuth client id

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..OAuthClientsAPI.GetOauthClient(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.GetOauthClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `GetOauthClient`: GetOAuthClientResponse
	fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.GetOauthClient`: %v\n", resp)
}
```

[[Back to top]](#)

## list-oauth-clients
List OAuth Clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api//list-oauth-clients)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListOauthClientsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **string** | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* | 

### Return type

[**[]GetOAuthClientResponse**](../models/get-o-auth-client-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    filters := lastUsed le 2023-02-05T10:59:27.214Z # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..OAuthClientsAPI.ListOauthClients(context.Background()).Filters(filters).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.ListOauthClients``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ListOauthClients`: []GetOAuthClientResponse
	fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.ListOauthClients`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-oauth-client
Patch OAuth Client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api//patch-oauth-client)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The OAuth client id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchOauthClientRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **jsonPatchOperation** | [**[]JsonPatchOperation**](../models/json-patch-operation) | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported  | 

### Return type

[**GetOAuthClientResponse**](../models/get-o-auth-client-response)

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
   ""
	openapiclient "github.com/sailpoint-oss/golang-sdk/v2"
)

func main() {
    id := ef38f94347e94562b5bb8424a56397d8 # string | The OAuth client id # string | The OAuth client id
    jsonPatchOperation := fmt.Sprintf(`[{op=replace, path=/strongAuthSupported, value=true}, {op=replace, path=/businessName, value=acme-solar}]`) # []JsonPatchOperation | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

	configuration := NewDefaultConfiguration()
	apiClient := NewAPIClient(configuration)
	resp, r, err := apiClient..OAuthClientsAPI.PatchOauthClient(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.PatchOauthClient``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `PatchOauthClient`: GetOAuthClientResponse
	fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.PatchOauthClient`: %v\n", resp)
}
```

[[Back to top]](#)

