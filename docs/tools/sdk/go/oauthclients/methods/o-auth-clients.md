# OAuthClients

# OAuthClientsAPI
  Use this API to implement OAuth client functionality.   
With this functionality in place, users with the appropriate security scopes can create and configure OAuth clients to use as a way to obtain authorization to use the Identity Security Cloud REST API.
Refer to [Authentication](https://developer.sailpoint.com/docs/api/authentication/) for more information about OAuth and how it works with the Identity Security Cloud REST API.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-oauth-client-v1**](#create-oauth-client-v1) | **Post** `/oauth-clients/v1` | Create oauth client
[**delete-oauth-client-v1**](#delete-oauth-client-v1) | **Delete** `/oauth-clients/v1/{id}` | Delete oauth client
[**get-oauth-client-v1**](#get-oauth-client-v1) | **Get** `/oauth-clients/v1/{id}` | Get oauth client
[**list-oauth-clients-v1**](#list-oauth-clients-v1) | **Get** `/oauth-clients/v1` | List oauth clients
[**patch-oauth-client-v1**](#patch-oauth-client-v1) | **Patch** `/oauth-clients/v1/{id}` | Patch oauth client


## create-oauth-client-v1
Create oauth client
This creates an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/create-oauth-client-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateOauthClientV1Request struct via the builder pattern


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
  "encoding/json"
    oauth_clients "github.com/sailpoint-oss/golang-sdk/v3/oauth_clients"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    createoauthclientrequestJson := []byte(`{
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
        }`) // CreateOAuthClientRequest | 

    var createOAuthClientRequest oauth_clients.CreateOAuthClientRequest
    if err := json.Unmarshal(createoauthclientrequestJson, &createOAuthClientRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OAuthClientsAPI.CreateOauthClientV1(context.Background()).CreateOAuthClientRequest(createOAuthClientRequest).Execute()
	  //resp, r, err := apiClient.OAuthClientsAPI.CreateOauthClientV1(context.Background()).CreateOAuthClientRequest(createOAuthClientRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.CreateOauthClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateOauthClientV1`: CreateOAuthClientResponse
    fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.CreateOauthClientV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-oauth-client-v1
Delete oauth client
This deletes an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/delete-oauth-client-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The OAuth client id | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteOauthClientV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The OAuth client id # string | The OAuth client id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.OAuthClientsAPI.DeleteOauthClientV1(context.Background(), id).Execute()
	  //r, err := apiClient.OAuthClientsAPI.DeleteOauthClientV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.DeleteOauthClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-oauth-client-v1
Get oauth client
This gets details of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/get-oauth-client-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The OAuth client id | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOauthClientV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The OAuth client id # string | The OAuth client id

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OAuthClientsAPI.GetOauthClientV1(context.Background(), id).Execute()
	  //resp, r, err := apiClient.OAuthClientsAPI.GetOauthClientV1(context.Background(), id).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.GetOauthClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOauthClientV1`: GetOAuthClientResponse
    fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.GetOauthClientV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-oauth-clients-v1
List oauth clients
This gets a list of OAuth clients.

[API Spec](https://developer.sailpoint.com/docs/api/list-oauth-clients-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListOauthClientsV1Request struct via the builder pattern


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
  
    
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    filters := `lastUsed le 2023-02-05T10:59:27.214Z` // string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional) # string | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **lastUsed**: *le, isnull* (optional)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OAuthClientsAPI.ListOauthClientsV1(context.Background()).Execute()
	  //resp, r, err := apiClient.OAuthClientsAPI.ListOauthClientsV1(context.Background()).Filters(filters).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.ListOauthClientsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListOauthClientsV1`: []GetOAuthClientResponse
    fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.ListOauthClientsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## patch-oauth-client-v1
Patch oauth client
This performs a targeted update to the field(s) of an OAuth client.

[API Spec](https://developer.sailpoint.com/docs/api/patch-oauth-client-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** | The OAuth client id | 

### Other Parameters

Other parameters are passed through a pointer to a apiPatchOauthClientV1Request struct via the builder pattern


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
  "encoding/json"
    oauth_clients "github.com/sailpoint-oss/golang-sdk/v3/oauth_clients"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    id := `ef38f94347e94562b5bb8424a56397d8` // string | The OAuth client id # string | The OAuth client id
    jsonpatchoperationJson := []byte(`[{"op":"replace","path":"/strongAuthSupported","value":true},{"op":"replace","path":"/businessName","value":"acme-solar"}]`) // []JsonPatchOperation | A list of OAuth client update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * tenant * businessName * homepageUrl * name * description * accessTokenValiditySeconds * refreshTokenValiditySeconds * redirectUris * grantTypes * accessType * enabled * strongAuthSupported * claimsSupported 

    var jsonPatchOperation []oauth_clients.JsonPatchOperation
    if err := json.Unmarshal(jsonpatchoperationJson, &jsonPatchOperation); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.OAuthClientsAPI.PatchOauthClientV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
	  //resp, r, err := apiClient.OAuthClientsAPI.PatchOauthClientV1(context.Background(), id).JsonPatchOperation(jsonPatchOperation).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `OAuthClientsAPI.PatchOauthClientV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PatchOauthClientV1`: GetOAuthClientResponse
    fmt.Fprintf(os.Stdout, "Response from `OAuthClientsAPI.PatchOauthClientV1`: %v\n", resp)
}
```

[[Back to top]](#)

