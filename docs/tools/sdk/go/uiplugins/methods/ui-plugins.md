# UIPlugins

# UIPluginsAPI
  UI Plugins let you extend the Identity Security Cloud (ISC) user interface with your own custom web applications. Rather than building a separate app that lives outside the platform, a UI plugin is a micro-frontend that ISC loads directly into designated **slots** in its UI — so your custom experience runs inside ISC, using the tenant&#39;s session and honoring its security model. UI Plugins are a licensed feature. 
The best way to interact with the UI Plugins API is to use the [SailPoint CLI](https://developer.sailpoint.com/docs/tools/cli). Alternatively, you can use the REST APIs for tenant UI plugin instance lifecycle (CRUD, alias validate/resolve, local-dev linking), asset bundle upload, and the static UI plugin slot registry. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-ui-plugin-asset-bundle-v1**](#create-ui-plugin-asset-bundle-v1) | **Post** `/ui-plugins/v1/{pluginInstanceId}/asset-bundles` | Create a plugin asset bundle
[**create-ui-plugin-link-v1**](#create-ui-plugin-link-v1) | **Post** `/ui-plugins/v1/{pluginInstanceId}/link` | Create a plugin dev link
[**create-ui-plugin-v1**](#create-ui-plugin-v1) | **Post** `/ui-plugins/v1` | Create a plugin instance
[**delete-ui-plugin-link-v1**](#delete-ui-plugin-link-v1) | **Delete** `/ui-plugins/v1/{pluginInstanceId}/link` | Delete a plugin dev link
[**delete-ui-plugin-v1**](#delete-ui-plugin-v1) | **Delete** `/ui-plugins/v1/{pluginInstanceId}` | Delete a plugin instance
[**get-ui-plugin-by-alias-v1**](#get-ui-plugin-by-alias-v1) | **Get** `/ui-plugins/v1/resolve-alias` | Get plugin by alias
[**get-ui-plugin-v1**](#get-ui-plugin-v1) | **Get** `/ui-plugins/v1/{pluginInstanceId}` | Get a plugin instance
[**list-ui-plugin-asset-bundles-v1**](#list-ui-plugin-asset-bundles-v1) | **Get** `/ui-plugins/v1/{pluginInstanceId}/asset-bundles` | List plugin asset bundles
[**list-ui-plugin-slots-v1**](#list-ui-plugin-slots-v1) | **Get** `/ui-plugin-slots/v1` | List UI plugin slots
[**list-ui-plugins-v1**](#list-ui-plugins-v1) | **Get** `/ui-plugins/v1` | List plugin instances
[**test-ui-plugin-alias-v1**](#test-ui-plugin-alias-v1) | **Get** `/ui-plugins/v1/validate-alias` | Test plugin alias availability
[**update-ui-plugin-v1**](#update-ui-plugin-v1) | **Patch** `/ui-plugins/v1/{pluginInstanceId}` | Partially update a plugin instance


## create-ui-plugin-asset-bundle-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a plugin asset bundle
Accepts `multipart/form-data` with one or more parts named **`file`**. The bundle-relative path for each object is taken from the part's multipart **filename** (`originalname`). Paths are normalized (no `..`, no absolute paths) and stored under `{pluginInstanceId}/{assetBundleId}/...` in S3. Folder structure is preserved, not flattened.

Requirements:
- Bundle must include root `index.html`
- Configurable limits on file count, per-file bytes, and total bundle bytes
- Product license `idn:ui-plugins-author` required (404 if missing)
- Caller tenant id is present (400 `User context is invalid` otherwise).
  The plugin instance must belong to that tenant (404 otherwise).


Creates a new immutable bundle record; previous active bundles are tombstoned via `cleanupAfter`. Emits the `UI_PLUGIN_ASSET_BUNDLE_CREATED` audit event.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-asset-bundle-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateUiPluginAssetBundleV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **file** | **[]*os.File** | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. &#x60;assets/app.js&#x60;). | 

### Return type

[**UIPluginAssetBundle**](../models/ui-plugin-asset-bundle)

### HTTP request headers

- **Content-Type**: multipart/form-data
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
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    file := []byte(`/path/to/file.txt`) // []*os.File | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`).

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.CreateUiPluginAssetBundleV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).File(file).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.CreateUiPluginAssetBundleV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).File(file).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.CreateUiPluginAssetBundleV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateUiPluginAssetBundleV1`: UIPluginAssetBundle
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.CreateUiPluginAssetBundleV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-ui-plugin-link-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a plugin dev link
Registers the caller's identity against a local HTTPS origin `https://localhost:{port}` in the instance's `devOverrides` map. Used by the `sail ui-plugins link` CLI flow.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. That identity id is the key in `devOverrides`, so the caller can only set their own local-dev URL. A plugin instance in another tenant is 404.

Response body contains the updated `devOverrides` map (`identityId` to `https://localhost:{port}`) and `devDocumentHeaders`, the ephemeral `Content-Security-Policy` and `Permissions-Policy` header values a local dev server can use for CSP parity with the deployed plugin.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-link-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiCreateUiPluginLinkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **linkUIPluginRequest** | [**LinkUIPluginRequest**](../models/link-ui-plugin-request) |  | 

### Return type

[**LinkUIPluginResponse**](../models/link-ui-plugin-response)

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
    ui_plugins "github.com/sailpoint-oss/golang-sdk/v3/ui_plugins"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    linkuipluginrequestJson := []byte(`{
          "port" : 4200
        }`) // LinkUIPluginRequest | 

    var linkUIPluginRequest ui_plugins.LinkUIPluginRequest
    if err := json.Unmarshal(linkuipluginrequestJson, &linkUIPluginRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.CreateUiPluginLinkV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).LinkUIPluginRequest(linkUIPluginRequest).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.CreateUiPluginLinkV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).LinkUIPluginRequest(linkUIPluginRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.CreateUiPluginLinkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateUiPluginLinkV1`: LinkUIPluginResponse
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.CreateUiPluginLinkV1`: %v\n", resp)
}
```

[[Back to top]](#)

## create-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Create a plugin instance
Registers a new tenant-scoped plugin installation.

Enforces:
- Max **20** plugin instances per tenant
- Slot registry rules (`slotId` must exist; per-slot `maxPlugins`; no duplicate slotIds)
- Alias uniqueness within the tenant (normalized lowercase)
- CSP / Permissions-Policy / iframe-allow / iframe-sandbox allowlists
- Product license `idn:ui-plugins-author` (404 if missing)
- Caller tenant id is present (400 `User context is invalid` otherwise).
  The instance is created in that tenant.


Emits Kafka audit event `UI_PLUGIN_INSTANCE_CREATED` on success.

Response body is the created plugin instance plus `devDocumentHeaders`, the ephemeral `Content-Security-Policy` and `Permissions-Policy` header values a local dev server can use for CSP parity with the deployed plugin. They are returned only on create (and link), not when reading the instance.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreateUiPluginV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **createUIPluginRequest** | [**CreateUIPluginRequest**](../models/create-ui-plugin-request) |  | 

### Return type

[**CreateUIPluginResponse**](../models/create-ui-plugin-response)

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
    ui_plugins "github.com/sailpoint-oss/golang-sdk/v3/ui_plugins"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    createuipluginrequestJson := []byte(`{
          "apiScopes" : [ "idn:account:read" ],
          "iframeSandbox" : "",
          "slots" : [ {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          } ],
          "iframeAllow" : {
            "default-src" : [ "'self'" ]
          },
          "name" : {
            "en" : "Example text",
            "fr" : "Texte d'exemple"
          },
          "alias" : "my-custom-plugin",
          "description" : {
            "en" : "Example text",
            "fr" : "Texte d'exemple"
          },
          "permissionPolicy" : {
            "default-src" : [ "'self'" ]
          },
          "contentSecurityPolicies" : {
            "default-src" : [ "'self'" ]
          }
        }`) // CreateUIPluginRequest | 

    var createUIPluginRequest ui_plugins.CreateUIPluginRequest
    if err := json.Unmarshal(createuipluginrequestJson, &createUIPluginRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.CreateUiPluginV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateUIPluginRequest(createUIPluginRequest).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.CreateUiPluginV1(context.Background()).XSailPointExperimental(xSailPointExperimental).CreateUIPluginRequest(createUIPluginRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.CreateUiPluginV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CreateUiPluginV1`: CreateUIPluginResponse
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.CreateUiPluginV1`: %v\n", resp)
}
```

[[Back to top]](#)

## delete-ui-plugin-link-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete a plugin dev link
Removes only the current caller's `identityId` entry from `devOverrides`. Other developers' overrides are preserved.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. A plugin instance in another tenant is 404.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-link-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUiPluginLinkV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.UIPluginsAPI.DeleteUiPluginLinkV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.UIPluginsAPI.DeleteUiPluginLinkV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.DeleteUiPluginLinkV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## delete-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Delete a plugin instance
Deletes the plugin instance and associated resources (asset bundles tombstoned for deferred cleanup).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is deleted only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_DELETED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteUiPluginV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.UIPluginsAPI.DeleteUiPluginV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.UIPluginsAPI.DeleteUiPluginV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.DeleteUiPluginV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## get-ui-plugin-by-alias-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get plugin by alias
Resolves a tenant-scoped alias to its `UiPlugin`. Returns 404 if no match; 409 if the alias is ambiguous (more than one match; should not occur after uniqueness enforcement).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is resolved only within that tenant; no match is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-by-alias-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetUiPluginByAliasV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **string** | Alias to resolve within the caller&#39;s tenant | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**UIPlugin**](../models/ui-plugin)

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
    alias := `my-custom-plugin` // string | Alias to resolve within the caller's tenant # string | Alias to resolve within the caller's tenant
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.GetUiPluginByAliasV1(context.Background()).Alias(alias).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.GetUiPluginByAliasV1(context.Background()).Alias(alias).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.GetUiPluginByAliasV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUiPluginByAliasV1`: UIPlugin
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.GetUiPluginByAliasV1`: %v\n", resp)
}
```

[[Back to top]](#)

## get-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Get a plugin instance
Returns a plugin instance by ID for the caller's tenant.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is loaded only when it belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetUiPluginV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

### Return type

[**UIPlugin**](../models/ui-plugin)

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
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.GetUiPluginV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.GetUiPluginV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.GetUiPluginV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetUiPluginV1`: UIPlugin
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.GetUiPluginV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-ui-plugin-asset-bundles-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List plugin asset bundles
Returns asset bundles for the given plugin instance (newest-first).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Bundles are listed only when the plugin instance belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-asset-bundles-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiListUiPluginAssetBundlesV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]UIPluginAssetBundle**](../models/ui-plugin-asset-bundle)

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
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.ListUiPluginAssetBundlesV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.ListUiPluginAssetBundlesV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.ListUiPluginAssetBundlesV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUiPluginAssetBundlesV1`: []UIPluginAssetBundle
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.ListUiPluginAssetBundlesV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-ui-plugin-slots-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List UI plugin slots
Returns the static slot registry (extension points the platform exposes). `name` / `description` are localized via AtlasJS TranslateService.

Filtering uses API Standard Collection Parameters. `state` supports `eq` with values `active`, `deprecated`, or `removed`. Example: `filters=state eq "active"`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present).

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-slots-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUiPluginSlotsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **filters** | **string** | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* | 
 **allLangs** | **bool** | When &#x60;true&#x60;, &#x60;name&#x60; and &#x60;description&#x60; are returned as full locale maps instead of a single translated string. | [default to false]

### Return type

[**[]UIPluginSlot**](../models/ui-plugin-slot)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    filters := `state eq "active"` // string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* (optional) # string | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* (optional)
    allLangs := false // bool | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string. (optional) (default to false) # bool | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.ListUiPluginSlotsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.ListUiPluginSlotsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Filters(filters).AllLangs(allLangs).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.ListUiPluginSlotsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUiPluginSlotsV1`: []UIPluginSlot
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.ListUiPluginSlotsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## list-ui-plugins-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
List plugin instances
Returns plugin instances for the caller's tenant with optional V3-style pagination. When `count=true`, the response includes header `x-total-count`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Results include only that tenant's plugin instances.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugins-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiListUiPluginsV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **limit** | **int32** | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 250]
 **offset** | **int32** | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to 0]
 **count** | **bool** | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [default to false]

### Return type

[**[]UIPlugin**](../models/ui-plugin)

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
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    limit := 250 // int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset := 0 // int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count := true // bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to false)

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.ListUiPluginsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.ListUiPluginsV1(context.Background()).XSailPointExperimental(xSailPointExperimental).Limit(limit).Offset(offset).Count(count).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.ListUiPluginsV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ListUiPluginsV1`: []UIPlugin
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.ListUiPluginsV1`: %v\n", resp)
}
```

[[Back to top]](#)

## test-ui-plugin-alias-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Test plugin alias availability
Checks whether the given alias is available within the caller's tenant. Alias is normalized (trim + lowercase) server-side.

Success returns an empty body (HTTP 200). Conflict when the alias is taken. UUID-shaped aliases are rejected as invalid.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is evaluated only within that tenant.

[API Spec](https://developer.sailpoint.com/docs/api/test-ui-plugin-alias-v-1)

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiTestUiPluginAliasV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **alias** | **string** | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes) | 
 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]

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
    alias := `my-custom-plugin` // string | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes) # string | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes)
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")

    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    r, err := apiClient.UIPluginsAPI.TestUiPluginAliasV1(context.Background()).Alias(alias).XSailPointExperimental(xSailPointExperimental).Execute()
	  //r, err := apiClient.UIPluginsAPI.TestUiPluginAliasV1(context.Background()).Alias(alias).XSailPointExperimental(xSailPointExperimental).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.TestUiPluginAliasV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    
}
```

[[Back to top]](#)

## update-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```go
   configuration = Configuration()
   configuration.Experimental = true
 ```
:::
Partially update a plugin instance
Patch any subset of mutable fields. When `slots` is provided, replaces the entire slots list and re-validates registry / maxPlugins rules. When `apiScopes` is provided, replaces the entire scopes list. When `iframeSandbox` is provided, replaces the entire sandbox grant list; unlike CSP / Permissions-Policy changes, it does not rotate the active asset bundle. `state` may be set to `ENABLED` or `DISABLED` (DISABLED omits the instance from active-slots delivery).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is updated only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_UPDATED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/update-ui-plugin-v-1)

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**pluginInstanceId** | **string** | UUID of the plugin instance | 

### Other Parameters

Other parameters are passed through a pointer to a apiUpdateUiPluginV1Request struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **xSailPointExperimental** | **string** | Use this header to enable this experimental API. | [default to &quot;true&quot;]
 **updateUIPluginRequest** | [**UpdateUIPluginRequest**](../models/update-ui-plugin-request) |  | 

### Return type

[**UIPlugin**](../models/ui-plugin)

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
    ui_plugins "github.com/sailpoint-oss/golang-sdk/v3/ui_plugins"
	sailpoint "github.com/sailpoint-oss/golang-sdk/v3"
)

func main() {
    pluginInstanceId := `2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c` // string | UUID of the plugin instance # string | UUID of the plugin instance
    xSailPointExperimental := `true` // string | Use this header to enable this experimental API. (default to "true") # string | Use this header to enable this experimental API. (default to "true")
    updateuipluginrequestJson := []byte(`{
          "apiScopes" : [ "idn:account:read" ],
          "iframeSandbox" : "",
          "slots" : [ {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          }, {
            "slotId" : "full-page",
            "restrictToUsers" : [ "2c9180867b5f4b3e8a1c2d3e4f5a6b7c" ],
            "requiredCapabilities" : [ "ORG_ADMIN" ]
          } ],
          "iframeAllow" : {
            "default-src" : [ "'self'" ]
          },
          "name" : {
            "en" : "Example text",
            "fr" : "Texte d'exemple"
          },
          "alias" : "my-custom-plugin",
          "description" : {
            "en" : "Example text",
            "fr" : "Texte d'exemple"
          },
          "permissionPolicy" : {
            "default-src" : [ "'self'" ]
          },
          "state" : "ENABLED",
          "contentSecurityPolicies" : {
            "default-src" : [ "'self'" ]
          }
        }`) // UpdateUIPluginRequest | 

    var updateUIPluginRequest ui_plugins.UpdateUIPluginRequest
    if err := json.Unmarshal(updateuipluginrequestJson, &updateUIPluginRequest); err != nil {
      fmt.Println("Error:", err)
      return
    }
    

    configuration := sailpoint.NewDefaultConfiguration()
    apiClient := sailpoint.NewAPIClient(configuration)
    resp, r, err := apiClient.UIPluginsAPI.UpdateUiPluginV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).UpdateUIPluginRequest(updateUIPluginRequest).Execute()
	  //resp, r, err := apiClient.UIPluginsAPI.UpdateUiPluginV1(context.Background(), pluginInstanceId).XSailPointExperimental(xSailPointExperimental).UpdateUIPluginRequest(updateUIPluginRequest).Execute()
    if err != nil {
	    fmt.Fprintf(os.Stderr, "Error when calling `UIPluginsAPI.UpdateUiPluginV1``: %v\n", err)
	    fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `UpdateUiPluginV1`: UIPlugin
    fmt.Fprintf(os.Stdout, "Response from `UIPluginsAPI.UpdateUiPluginV1`: %v\n", resp)
}
```

[[Back to top]](#)

