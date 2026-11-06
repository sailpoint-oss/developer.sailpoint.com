# UI_Plugins

# sailpoint.ui_plugins.UIPluginsApi
  UI Plugins let you extend the Identity Security Cloud (ISC) user interface with your own custom web applications. Rather than building a separate app that lives outside the platform, a UI plugin is a micro-frontend that ISC loads directly into designated **slots** in its UI — so your custom experience runs inside ISC, using the tenant&#39;s session and honoring its security model. UI Plugins are a licensed feature. 
The best way to interact with the UI Plugins API is to use the [SailPoint CLI](https://developer.sailpoint.com/docs/tools/cli). Alternatively, you can use the REST APIs for tenant UI plugin instance lifecycle (CRUD, alias validate/resolve, local-dev linking), asset bundle upload, and the static UI plugin slot registry. 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-ui-plugin-asset-bundle-v1**](#create-ui-plugin-asset-bundle-v1) | **POST** `/ui-plugins/v1/{pluginInstanceId}/asset-bundles` | Create a plugin asset bundle
[**create-ui-plugin-link-v1**](#create-ui-plugin-link-v1) | **POST** `/ui-plugins/v1/{pluginInstanceId}/link` | Create a plugin dev link
[**create-ui-plugin-v1**](#create-ui-plugin-v1) | **POST** `/ui-plugins/v1` | Create a plugin instance
[**delete-ui-plugin-link-v1**](#delete-ui-plugin-link-v1) | **DELETE** `/ui-plugins/v1/{pluginInstanceId}/link` | Delete a plugin dev link
[**delete-ui-plugin-v1**](#delete-ui-plugin-v1) | **DELETE** `/ui-plugins/v1/{pluginInstanceId}` | Delete a plugin instance
[**get-ui-plugin-by-alias-v1**](#get-ui-plugin-by-alias-v1) | **GET** `/ui-plugins/v1/resolve-alias` | Get plugin by alias
[**get-ui-plugin-v1**](#get-ui-plugin-v1) | **GET** `/ui-plugins/v1/{pluginInstanceId}` | Get a plugin instance
[**list-ui-plugin-asset-bundles-v1**](#list-ui-plugin-asset-bundles-v1) | **GET** `/ui-plugins/v1/{pluginInstanceId}/asset-bundles` | List plugin asset bundles
[**list-ui-plugin-slots-v1**](#list-ui-plugin-slots-v1) | **GET** `/ui-plugin-slots/v1` | List UI plugin slots
[**list-ui-plugins-v1**](#list-ui-plugins-v1) | **GET** `/ui-plugins/v1` | List plugin instances
[**test-ui-plugin-alias-v1**](#test-ui-plugin-alias-v1) | **GET** `/ui-plugins/v1/validate-alias` | Test plugin alias availability
[**update-ui-plugin-v1**](#update-ui-plugin-v1) | **PATCH** `/ui-plugins/v1/{pluginInstanceId}` | Partially update a plugin instance


## create-ui-plugin-asset-bundle-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
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

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
   | file | **[]bytearray** | True  | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`).
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**UIPluginAssetBundle**](../models/ui-plugin-asset-bundle)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Asset bundle created | UIPluginAssetBundle |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin_asset_bundle import UIPluginAssetBundle
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    file = '''None''' # List[bytearray] | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. `assets/app.js`).
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a plugin asset bundle
        
        results = UIPluginsApi(api_client).create_ui_plugin_asset_bundle_v1(plugin_instance_id=plugin_instance_id, file=file)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).create_ui_plugin_asset_bundle_v1(plugin_instance_id, file, x_sail_point_experimental)
        print("The response of UIPluginsApi->create_ui_plugin_asset_bundle_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->create_ui_plugin_asset_bundle_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-ui-plugin-link-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Create a plugin dev link
Registers the caller's identity against a local HTTPS origin `https://localhost:{port}` in the instance's `devOverrides` map. Used by the `sail ui-plugins link` CLI flow.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. That identity id is the key in `devOverrides`, so the caller can only set their own local-dev URL. A plugin instance in another tenant is 404.

Response body contains the updated `devOverrides` map (`identityId` to `https://localhost:{port}`) and `devDocumentHeaders`, the ephemeral `Content-Security-Policy` and `Permissions-Policy` header values a local dev server can use for CSP parity with the deployed plugin.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-link-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
 Body  | link_ui_plugin_request | [**LinkUIPluginRequest**](../models/link-ui-plugin-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**LinkUIPluginResponse**](../models/link-ui-plugin-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Linked; returns updated devOverrides map and devDocumentHeaders | LinkUIPluginResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.link_ui_plugin_request import LinkUIPluginRequest
from sailpoint.ui_plugins.models.link_ui_plugin_response import LinkUIPluginResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    link_ui_plugin_request = '''{
          "port" : 4200
        }''' # LinkUIPluginRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a plugin dev link
        new_link_ui_plugin_request = LinkUiPluginRequest.from_json(link_ui_plugin_request)
        results = UIPluginsApi(api_client).create_ui_plugin_link_v1(plugin_instance_id=plugin_instance_id, link_ui_plugin_request=new_link_ui_plugin_request)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).create_ui_plugin_link_v1(plugin_instance_id, new_link_ui_plugin_request, x_sail_point_experimental)
        print("The response of UIPluginsApi->create_ui_plugin_link_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->create_ui_plugin_link_v1: %s\n" % e)
```



[[Back to top]](#) 

## create-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
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

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
 Body  | create_ui_plugin_request | [**CreateUIPluginRequest**](../models/create-ui-plugin-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**CreateUIPluginResponse**](../models/create-ui-plugin-response)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
201 | Plugin instance created; includes devDocumentHeaders | CreateUIPluginResponse |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Alias already in use for this tenant | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.create_ui_plugin_request import CreateUIPluginRequest
from sailpoint.ui_plugins.models.create_ui_plugin_response import CreateUIPluginResponse
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    create_ui_plugin_request = '''{
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
        }''' # CreateUIPluginRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Create a plugin instance
        new_create_ui_plugin_request = CreateUiPluginRequest.from_json(create_ui_plugin_request)
        results = UIPluginsApi(api_client).create_ui_plugin_v1(create_ui_plugin_request=new_create_ui_plugin_request)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).create_ui_plugin_v1(new_create_ui_plugin_request, x_sail_point_experimental)
        print("The response of UIPluginsApi->create_ui_plugin_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->create_ui_plugin_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-ui-plugin-link-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete a plugin dev link
Removes only the current caller's `identityId` entry from `devOverrides`. Other developers' overrides are preserved.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. A plugin instance in another tenant is 404.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-link-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete a plugin dev link
        
        UIPluginsApi(api_client).delete_ui_plugin_link_v1(plugin_instance_id=plugin_instance_id)
        # Below is a request that includes all optional parameters
        # UIPluginsApi(api_client).delete_ui_plugin_link_v1(plugin_instance_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling UIPluginsApi->delete_ui_plugin_link_v1: %s\n" % e)
```



[[Back to top]](#) 

## delete-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Delete a plugin instance
Deletes the plugin instance and associated resources (asset bundles tombstoned for deferred cleanup).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is deleted only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_DELETED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
204 | No content - indicates the request was successful but there is no content to be returned in the response. |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Delete a plugin instance
        
        UIPluginsApi(api_client).delete_ui_plugin_v1(plugin_instance_id=plugin_instance_id)
        # Below is a request that includes all optional parameters
        # UIPluginsApi(api_client).delete_ui_plugin_v1(plugin_instance_id, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling UIPluginsApi->delete_ui_plugin_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-ui-plugin-by-alias-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get plugin by alias
Resolves a tenant-scoped alias to its `UiPlugin`. Returns 404 if no match; 409 if the alias is ambiguous (more than one match; should not occur after uniqueness enforcement).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is resolved only within that tenant; no match is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-by-alias-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | alias | **str** | True  | Alias to resolve within the caller's tenant
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**UIPlugin**](../models/ui-plugin)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Resolved plugin instance | UIPlugin |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Alias resolves to more than one plugin instance | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin import UIPlugin
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    alias = 'my-custom-plugin' # str | Alias to resolve within the caller's tenant # str | Alias to resolve within the caller's tenant
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get plugin by alias
        
        results = UIPluginsApi(api_client).get_ui_plugin_by_alias_v1(alias=alias)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).get_ui_plugin_by_alias_v1(alias, x_sail_point_experimental)
        print("The response of UIPluginsApi->get_ui_plugin_by_alias_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->get_ui_plugin_by_alias_v1: %s\n" % e)
```



[[Back to top]](#) 

## get-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Get a plugin instance
Returns a plugin instance by ID for the caller's tenant.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is loaded only when it belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**UIPlugin**](../models/ui-plugin)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Plugin instance | UIPlugin |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin import UIPlugin
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Get a plugin instance
        
        results = UIPluginsApi(api_client).get_ui_plugin_v1(plugin_instance_id=plugin_instance_id)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).get_ui_plugin_v1(plugin_instance_id, x_sail_point_experimental)
        print("The response of UIPluginsApi->get_ui_plugin_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->get_ui_plugin_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-ui-plugin-asset-bundles-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List plugin asset bundles
Returns asset bundles for the given plugin instance (newest-first).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Bundles are listed only when the plugin instance belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-asset-bundles-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[UIPluginAssetBundle]**](../models/ui-plugin-asset-bundle)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Asset bundles for the requested page (or full list) | List[UIPluginAssetBundle] |  * x-total-count - Total number of matching items (present when `count=true`)  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin_asset_bundle import UIPluginAssetBundle
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List plugin asset bundles
        
        results = UIPluginsApi(api_client).list_ui_plugin_asset_bundles_v1(plugin_instance_id=plugin_instance_id)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).list_ui_plugin_asset_bundles_v1(plugin_instance_id, limit, offset, count, x_sail_point_experimental)
        print("The response of UIPluginsApi->list_ui_plugin_asset_bundles_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->list_ui_plugin_asset_bundles_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-ui-plugin-slots-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List UI plugin slots
Returns the static slot registry (extension points the platform exposes). `name` / `description` are localized via AtlasJS TranslateService.

Filtering uses API Standard Collection Parameters. `state` supports `eq` with values `active`, `deprecated`, or `removed`. Example: `filters=state eq "active"`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present).

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-slots-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | filters | **str** |   (optional) | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq*
  Query | all_langs | **bool** |   (optional) (default to False) | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[UIPluginSlot]**](../models/ui-plugin-slot)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Slot registry entries | List[UIPluginSlot] |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin_slot import UIPluginSlot
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    filters = 'state eq \"active\"' # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* (optional) # str | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* (optional)
    all_langs = False # bool | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string. (optional) (default to False) # bool | When `true`, `name` and `description` are returned as full locale maps instead of a single translated string. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List UI plugin slots
        
        results = UIPluginsApi(api_client).list_ui_plugin_slots_v1()
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).list_ui_plugin_slots_v1(filters, all_langs, x_sail_point_experimental)
        print("The response of UIPluginsApi->list_ui_plugin_slots_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->list_ui_plugin_slots_v1: %s\n" % e)
```



[[Back to top]](#) 

## list-ui-plugins-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
List plugin instances
Returns plugin instances for the caller's tenant with optional V3-style pagination. When `count=true`, the response includes header `x-total-count`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Results include only that tenant's plugin instances.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugins-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | limit | **int** |   (optional) (default to 250) | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | offset | **int** |   (optional) (default to 0) | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
  Query | count | **bool** |   (optional) (default to False) | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information.
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**List[UIPlugin]**](../models/ui-plugin)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | List of plugin instances (may be empty) | List[UIPlugin] |  * x-total-count - Total number of matching items (present when `count=true`)  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin import UIPlugin
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    limit = 250 # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250) # int | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 250)
    offset = 0 # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0) # int | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to 0)
    count = False # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False) # bool | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count=true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional) (default to False)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # List plugin instances
        
        results = UIPluginsApi(api_client).list_ui_plugins_v1()
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).list_ui_plugins_v1(limit, offset, count, x_sail_point_experimental)
        print("The response of UIPluginsApi->list_ui_plugins_v1:\n")
        for item in results:
            print(item.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->list_ui_plugins_v1: %s\n" % e)
```



[[Back to top]](#) 

## test-ui-plugin-alias-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Test plugin alias availability
Checks whether the given alias is available within the caller's tenant. Alias is normalized (trim + lowercase) server-side.

Success returns an empty body (HTTP 200). Conflict when the alias is taken. UUID-shaped aliases are rejected as invalid.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is evaluated only within that tenant.

[API Spec](https://developer.sailpoint.com/docs/api/test-ui-plugin-alias-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
  Query | alias | **str** | True  | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes)
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
 (empty response body)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Alias is available |  |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Alias already in use (message references conflicting plugin instance id) | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: Not defined
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    alias = 'my-custom-plugin' # str | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes) # str | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes)
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Test plugin alias availability
        
        UIPluginsApi(api_client).test_ui_plugin_alias_v1(alias=alias)
        # Below is a request that includes all optional parameters
        # UIPluginsApi(api_client).test_ui_plugin_alias_v1(alias, x_sail_point_experimental)
    except Exception as e:
        print("Exception when calling UIPluginsApi->test_ui_plugin_alias_v1: %s\n" % e)
```



[[Back to top]](#) 

## update-ui-plugin-v1
:::warning experimental 
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
:::tip setting x-sailpoint-experimental header
 on the configuration object you can set the `x-sailpoint-experimental` header to `true' to enable all experimantl endpoints within the SDK.
 Example:
 ```python
   configuration = Configuration()
   configuration.experimental = True
 ```
:::
Partially update a plugin instance
Patch any subset of mutable fields. When `slots` is provided, replaces the entire slots list and re-validates registry / maxPlugins rules. When `apiScopes` is provided, replaces the entire scopes list. When `iframeSandbox` is provided, replaces the entire sandbox grant list; unlike CSP / Permissions-Policy changes, it does not rotate the active asset bundle. `state` may be set to `ENABLED` or `DISABLED` (DISABLED omits the instance from active-slots delivery).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is updated only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_UPDATED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/update-ui-plugin-v-1)

### Parameters 

Param Type | Name | Data Type | Required  | Description
------------- | ------------- | ------------- | ------------- | ------------- 
Path   | plugin_instance_id | **str** | True  | UUID of the plugin instance
 Body  | update_ui_plugin_request | [**UpdateUIPluginRequest**](../models/update-ui-plugin-request) | True  | 
   | x_sail_point_experimental | **str** |   (optional) (default to 'true') | Use this header to enable this experimental API.

### Return type
[**UIPlugin**](../models/ui-plugin)

### Responses
Code | Description  | Data Type | Response headers |
------------- | ------------- | ------------- |------------------|
200 | Updated plugin instance | UIPlugin |  -  |
400 | Client Error - Returned if the request body is invalid. | ErrorResponseDto |  -  |
401 | Unauthorized - Returned if there is no authorization header, or if the JWT token is expired. | ListUiPluginsV1401Response |  -  |
403 | Forbidden - Returned if the user you are running as, doesn&#39;t have access to this end-point. | ErrorResponseDto |  -  |
404 | Not Found - returned if the request URL refers to a resource or object that does not exist | ErrorResponseDto |  -  |
409 | Alias already in use for this tenant | ErrorResponseDto |  -  |
429 | Too Many Requests - Returned in response to too many requests in a given period of time - rate limited. The Retry-After header in the response includes how long to wait before trying again. | ListUiPluginsV1429Response |  -  |
500 | Internal Server Error - Returned if there is an unexpected error. | ErrorResponseDto |  -  |

### HTTP request headers
 - **Content-Type**: application/json
 - **Accept**: application/json

### Example

```python
from sailpoint.ui_plugins.api.ui_plugins_api import UIPluginsApi
from sailpoint.ui_plugins.api_client import ApiClient
from sailpoint.ui_plugins.models.ui_plugin import UIPlugin
from sailpoint.ui_plugins.models.update_ui_plugin_request import UpdateUIPluginRequest
from sailpoint.configuration import Configuration
configuration = Configuration()

configuration.experimental = True

with ApiClient(configuration) as api_client:
    plugin_instance_id = '2c918086-7b5f-4b3e-8a1c-2d3e4f5a6b7c' # str | UUID of the plugin instance # str | UUID of the plugin instance
    update_ui_plugin_request = '''{
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
        }''' # UpdateUIPluginRequest | 
    x_sail_point_experimental = 'true' # str | Use this header to enable this experimental API. (optional) (default to 'true') # str | Use this header to enable this experimental API. (optional) (default to 'true')

    try:
        # Partially update a plugin instance
        new_update_ui_plugin_request = UpdateUiPluginRequest.from_json(update_ui_plugin_request)
        results = UIPluginsApi(api_client).update_ui_plugin_v1(plugin_instance_id=plugin_instance_id, update_ui_plugin_request=new_update_ui_plugin_request)
        # Below is a request that includes all optional parameters
        # results = UIPluginsApi(api_client).update_ui_plugin_v1(plugin_instance_id, new_update_ui_plugin_request, x_sail_point_experimental)
        print("The response of UIPluginsApi->update_ui_plugin_v1:\n")
        print(results.model_dump_json(by_alias=True, indent=4))
    except Exception as e:
        print("Exception when calling UIPluginsApi->update_ui_plugin_v1: %s\n" % e)
```



[[Back to top]](#) 



