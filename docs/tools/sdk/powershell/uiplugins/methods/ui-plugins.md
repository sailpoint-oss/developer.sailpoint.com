# UIPlugins

# UIPlugins
  UI Plugins let you extend the Identity Security Cloud (ISC) user interface with your own custom web applications. Rather than building a separate app that lives outside the platform, a UI plugin is a micro-frontend that ISC loads directly into designated **slots** in its UI — so your custom experience runs inside ISC, using the tenant&#39;s session and honoring its security model. UI Plugins are a licensed feature. 
The best way to interact with the UI Plugins API is to use the [SailPoint CLI](https://developer.sailpoint.com/docs/tools/cli). Alternatively, you can use the REST APIs for tenant UI plugin instance lifecycle (CRUD, alias validate/resolve, local-dev linking), asset bundle upload, and the static UI plugin slot registry. 
  

All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**New-UiPluginAssetBundleV1**](#create-ui-plugin-asset-bundle-v1) | **POST** `/ui-plugins/v1/{pluginInstanceId}/asset-bundles` | Create a plugin asset bundle
[**New-UiPluginLinkV1**](#create-ui-plugin-link-v1) | **POST** `/ui-plugins/v1/{pluginInstanceId}/link` | Create a plugin dev link
[**New-UiPluginV1**](#create-ui-plugin-v1) | **POST** `/ui-plugins/v1` | Create a plugin instance
[**Remove-UiPluginLinkV1**](#delete-ui-plugin-link-v1) | **DELETE** `/ui-plugins/v1/{pluginInstanceId}/link` | Delete a plugin dev link
[**Remove-UiPluginV1**](#delete-ui-plugin-v1) | **DELETE** `/ui-plugins/v1/{pluginInstanceId}` | Delete a plugin instance
[**Get-UiPluginByAliasV1**](#get-ui-plugin-by-alias-v1) | **GET** `/ui-plugins/v1/resolve-alias` | Get plugin by alias
[**Get-UiPluginV1**](#get-ui-plugin-v1) | **GET** `/ui-plugins/v1/{pluginInstanceId}` | Get a plugin instance
[**Get-UiPluginAssetBundlesV1**](#list-ui-plugin-asset-bundles-v1) | **GET** `/ui-plugins/v1/{pluginInstanceId}/asset-bundles` | List plugin asset bundles
[**Get-UiPluginSlotsV1**](#list-ui-plugin-slots-v1) | **GET** `/ui-plugin-slots/v1` | List UI plugin slots
[**Get-UiPluginsV1**](#list-ui-plugins-v1) | **GET** `/ui-plugins/v1` | List plugin instances
[**Test-UiPluginAliasV1**](#test-ui-plugin-alias-v1) | **GET** `/ui-plugins/v1/validate-alias` | Test plugin alias availability
[**Update-UiPluginV1**](#update-ui-plugin-v1) | **PATCH** `/ui-plugins/v1/{pluginInstanceId}` | Partially update a plugin instance


## create-ui-plugin-asset-bundle-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Accepts `multipart/form-data` with one or more parts named **`file`**. The bundle-relative path for each object is taken from the part's multipart **filename** (`originalname`). Paths are normalized (no `..`, no absolute paths) and stored under `{pluginInstanceId}/{assetBundleId}/...` in S3. Folder structure is preserved, not flattened.

Requirements:
- Bundle must include root `index.html`
- Configurable limits on file count, per-file bytes, and total bundle bytes
- Product license `idn:ui-plugins-author` required (404 if missing)
- Caller tenant id is present (400 `User context is invalid` otherwise).
  The plugin instance must belong to that tenant (404 otherwise).


Creates a new immutable bundle record; previous active bundles are tombstoned via `cleanupAfter`. Emits the `UI_PLUGIN_ASSET_BUNDLE_CREATED` audit event.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-asset-bundle-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
   | File | **[]System.IO.FileInfo** | True  | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`).

### Return type
[**UIPluginAssetBundle**](../models/ui-plugin-asset-bundle)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Asset bundle created | UIPluginAssetBundle
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$File =  # System.IO.FileInfo[] | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`).

$File = @"/path/to/file.txt"@ # System.IO.FileInfo[] | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`). 

# Create a plugin asset bundle

try {
    New-UiPluginAssetBundleV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -File $File 
    
    # Below is a request that includes all optional parameters
    # New-UiPluginAssetBundleV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -File $File  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-UiPluginAssetBundleV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-ui-plugin-link-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Registers the caller's identity against a local HTTPS origin `https://localhost:{port}` in the instance's `devOverrides` map. Used by the `sail ui-plugins link` CLI flow.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. That identity id is the key in `devOverrides`, so the caller can only set their own local-dev URL. A plugin instance in another tenant is 404.

Response body contains the updated `devOverrides` map (`identityId` to `https://localhost:{port}`) and `devDocumentHeaders`, the ephemeral `Content-Security-Policy` and `Permissions-Policy` header values a local dev server can use for CSP parity with the deployed plugin.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-link-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | LinkUIPluginRequest | [**LinkUIPluginRequest**](../models/link-ui-plugin-request) | True  | 

### Return type
[**LinkUIPluginResponse**](../models/link-ui-plugin-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Linked; returns updated devOverrides map and devDocumentHeaders | LinkUIPluginResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$LinkUIPluginRequest = @"{
  "port" : 4200
}"@

# Create a plugin dev link

try {
    $Result = ConvertFrom-JsonToLinkUIPluginRequest -Json $LinkUIPluginRequest
    New-UiPluginLinkV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -LinkUIPluginRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-UiPluginLinkV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -LinkUIPluginRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-UiPluginLinkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## create-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
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

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | CreateUIPluginRequest | [**CreateUIPluginRequest**](../models/create-ui-plugin-request) | True  | 

### Return type
[**CreateUIPluginResponse**](../models/create-ui-plugin-response)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
201 | Plugin instance created; includes devDocumentHeaders | CreateUIPluginResponse
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Alias already in use for this tenant | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$CreateUIPluginRequest = @"{
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
}"@

# Create a plugin instance

try {
    $Result = ConvertFrom-JsonToCreateUIPluginRequest -Json $CreateUIPluginRequest
    New-UiPluginV1 -XSailPointExperimental $XSailPointExperimental -CreateUIPluginRequest $Result 
    
    # Below is a request that includes all optional parameters
    # New-UiPluginV1 -XSailPointExperimental $XSailPointExperimental -CreateUIPluginRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling New-UiPluginV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-ui-plugin-link-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Removes only the current caller's `identityId` entry from `devOverrides`. Other developers' overrides are preserved.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. A plugin instance in another tenant is 404.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-link-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete a plugin dev link

try {
    Remove-UiPluginLinkV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-UiPluginLinkV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-UiPluginLinkV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## delete-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deletes the plugin instance and associated resources (asset bundles tombstoned for deferred cleanup).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is deleted only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_DELETED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
204 | No content - indicates the request was successful but there is no content to be returned in the response. | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Delete a plugin instance

try {
    Remove-UiPluginV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Remove-UiPluginV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Remove-UiPluginV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-ui-plugin-by-alias-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Resolves a tenant-scoped alias to its `UiPlugin`. Returns 404 if no match; 409 if the alias is ambiguous (more than one match; should not occur after uniqueness enforcement).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is resolved only within that tenant; no match is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-by-alias-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Alias | **String** | True  | Alias to resolve within the caller's tenant
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**UIPlugin**](../models/ui-plugin)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Resolved plugin instance | UIPlugin
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Alias resolves to more than one plugin instance | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Alias = "my-custom-plugin" # String | Alias to resolve within the caller's tenant
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get plugin by alias

try {
    Get-UiPluginByAliasV1 -Alias $Alias -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-UiPluginByAliasV1 -Alias $Alias -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UiPluginByAliasV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## get-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns a plugin instance by ID for the caller's tenant.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is loaded only when it belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
[**UIPlugin**](../models/ui-plugin)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Plugin instance | UIPlugin
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Get a plugin instance

try {
    Get-UiPluginV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-UiPluginV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UiPluginV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-ui-plugin-asset-bundles-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns asset bundles for the given plugin instance (newest-first).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Bundles are listed only when the plugin instance belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-asset-bundles-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**UIPluginAssetBundle[]**](../models/ui-plugin-asset-bundle)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Asset bundles for the requested page (or full list) | UIPluginAssetBundle[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List plugin asset bundles

try {
    Get-UiPluginAssetBundlesV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-UiPluginAssetBundlesV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UiPluginAssetBundlesV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-ui-plugin-slots-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns the static slot registry (extension points the platform exposes). `name` / `description` are localized via AtlasJS TranslateService.

Filtering uses API Standard Collection Parameters. `state` supports `eq` with values `active`, `deprecated`, or `removed`. Example: `filters=state eq "active"`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present).

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-slots-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Filters | **String** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq*
  Query | AllLangs | **Boolean** |   (optional) (default to $false) | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string.

### Return type
[**UIPluginSlot[]**](../models/ui-plugin-slot)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Slot registry entries | UIPluginSlot[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Filters = 'state eq "active"' # String | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* (optional)
$AllLangs = $false # Boolean | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string. (optional) (default to $false)

# List UI plugin slots

try {
    Get-UiPluginSlotsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-UiPluginSlotsV1 -XSailPointExperimental $XSailPointExperimental -Filters $Filters -AllLangs $AllLangs  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UiPluginSlotsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## list-ui-plugins-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns plugin instances for the caller's tenant with optional V3-style pagination. When `count=true`, the response includes header `x-total-count`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Results include only that tenant's plugin instances.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugins-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
  Query | Limit | **Int32** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Offset | **Int32** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | Count | **Boolean** |   (optional) (default to $false) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.

### Return type
[**UIPlugin[]**](../models/ui-plugin)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | List of plugin instances (may be empty) | UIPlugin[]
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$Limit = 250 # Int32 | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
$Offset = 0 # Int32 | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
$Count = $true # Boolean | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to $false)

# List plugin instances

try {
    Get-UiPluginsV1 -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Get-UiPluginsV1 -XSailPointExperimental $XSailPointExperimental -Limit $Limit -Offset $Offset -Count $Count  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Get-UiPluginsV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## test-ui-plugin-alias-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Checks whether the given alias is available within the caller's tenant. Alias is normalized (trim + lowercase) server-side.

Success returns an empty body (HTTP 200). Conflict when the alias is taken. UUID-shaped aliases are rejected as invalid.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is evaluated only within that tenant.

[API Spec](https://developer.sailpoint.com/docs/api/test-ui-plugin-alias-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | Alias | **String** | True  | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes)
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Alias is available | 
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Alias already in use (message references conflicting plugin instance id) | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: Not defined
- **Accept**: application/json

### Example
```powershell
$Alias = "my-custom-plugin" # String | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes)
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")

# Test plugin alias availability

try {
    Test-UiPluginAliasV1 -Alias $Alias -XSailPointExperimental $XSailPointExperimental 
    
    # Below is a request that includes all optional parameters
    # Test-UiPluginAliasV1 -Alias $Alias -XSailPointExperimental $XSailPointExperimental  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Test-UiPluginAliasV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 

## update-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch any subset of mutable fields. When `slots` is provided, replaces the entire slots list and re-validates registry / maxPlugins rules. When `apiScopes` is provided, replaces the entire scopes list. When `iframeSandbox` is provided, replaces the entire sandbox grant list; unlike CSP / Permissions-Policy changes, it does not rotate the active asset bundle. `state` may be set to `ENABLED` or `DISABLED` (DISABLED omits the instance from active-slots delivery).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is updated only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_UPDATED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/update-ui-plugin-v-1)

### Parameters 
Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | PluginInstanceId | **String** | True  | UUID of the plugin instance
   | XSailPointExperimental | **String** | True  (default to "true") | Use this header to enable this experimental API.
 Body  | UpdateUIPluginRequest | [**UpdateUIPluginRequest**](../models/update-ui-plugin-request) | True  | 

### Return type
[**UIPlugin**](../models/ui-plugin)

### Responses
Code | Description  | Data Type
------------- | ------------- | -------------
200 | Updated plugin instance | UIPlugin
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto
409 | Alias already in use for this tenant | ErrorResponseDto
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto

### HTTP request headers
- **Content-Type**: application/json
- **Accept**: application/json

### Example
```powershell
$PluginInstanceId = "2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c" # String | UUID of the plugin instance
$XSailPointExperimental = "true" # String | Use this header to enable this experimental API. (default to "true")
$UpdateUIPluginRequest = @"{
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
}"@

# Partially update a plugin instance

try {
    $Result = ConvertFrom-JsonToUpdateUIPluginRequest -Json $UpdateUIPluginRequest
    Update-UiPluginV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -UpdateUIPluginRequest $Result 
    
    # Below is a request that includes all optional parameters
    # Update-UiPluginV1 -PluginInstanceId $PluginInstanceId -XSailPointExperimental $XSailPointExperimental -UpdateUIPluginRequest $Result  
} catch {
    Write-Host $_.Exception.Response.StatusCode.value__ "Exception occurred when calling Update-UiPluginV1"
    Write-Host $_.ErrorDetails
}
```
[[Back to top]](#) 
