# UIPlugins

# UIPluginsService
  UI Plugins let you extend the Identity Security Cloud (ISC) user interface with your own custom web applications. Rather than building a separate app that lives outside the platform, a UI plugin is a micro-frontend that ISC loads directly into designated **slots** in its UI — so your custom experience runs inside ISC, using the tenant&#39;s session and honoring its security model. UI Plugins are a licensed feature. 
The best way to interact with the UI Plugins API is to use the [SailPoint CLI](https://developer.sailpoint.com/docs/tools/cli). Alternatively, you can use the REST APIs for tenant UI plugin instance lifecycle (CRUD, alias validate/resolve, local-dev linking), asset bundle upload, and the static UI plugin slot registry. 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

The service takes one object that holds every parameter. Its type is `CreateUiPluginAssetBundleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**file** | `Array<Blob>` | Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. &#x60;assets/app.js&#x60;). |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<UIPluginAssetBundle>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  createUiPluginAssetBundleV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const file: Array<Blob> = ; // Repeatable form field. Send one part per file; use the part filename for the bundle-relative path (e.g. &#x60;assets/app.js&#x60;).
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createUiPluginAssetBundleV1({ pluginInstanceId: pluginInstanceId, file: file }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-ui-plugin-link-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a plugin dev link
Registers the caller's identity against a local HTTPS origin `https://localhost:{port}` in the instance's `devOverrides` map. Used by the `sail ui-plugins link` CLI flow.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. That identity id is the key in `devOverrides`, so the caller can only set their own local-dev URL. A plugin instance in another tenant is 404.

Response body contains the updated `devOverrides` map (`identityId` to `https://localhost:{port}`) and `devDocumentHeaders`, the ephemeral `Content-Security-Policy` and `Permissions-Policy` header values a local dev server can use for CSP parity with the deployed plugin.

[API Spec](https://developer.sailpoint.com/docs/api/create-ui-plugin-link-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateUiPluginLinkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**linkUIPluginRequest** | `LinkUIPluginRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<LinkUIPluginResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';
import { LinkUIPluginRequest } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  createUiPluginLinkV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const linkUIPluginRequest: LinkUIPluginRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createUiPluginLinkV1({ pluginInstanceId: pluginInstanceId, linkUIPluginRequest: linkUIPluginRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-ui-plugin-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
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

The service takes one object that holds every parameter. Its type is `CreateUiPluginV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createUIPluginRequest** | `CreateUIPluginRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CreateUIPluginResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';
import { CreateUIPluginRequest } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  createUiPluginV1(): void {
    const createUIPluginRequest: CreateUIPluginRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createUiPluginV1({ createUIPluginRequest: createUIPluginRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-ui-plugin-link-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a plugin dev link
Removes only the current caller's `identityId` entry from `devOverrides`. Other developers' overrides are preserved.

Requires product license `idn:ui-plugins-author` (404 if missing). Returns 400 `User context is invalid` when the caller has no tenant id or identity id. A plugin instance in another tenant is 404.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-link-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteUiPluginLinkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  deleteUiPluginLinkV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteUiPluginLinkV1({ pluginInstanceId: pluginInstanceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-ui-plugin-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a plugin instance
Deletes the plugin instance and associated resources (asset bundles tombstoned for deferred cleanup).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is deleted only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_DELETED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ui-plugin-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteUiPluginV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  deleteUiPluginV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteUiPluginV1({ pluginInstanceId: pluginInstanceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-ui-plugin-by-alias-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get plugin by alias
Resolves a tenant-scoped alias to its `UiPlugin`. Returns 404 if no match; 409 if the alias is ambiguous (more than one match; should not occur after uniqueness enforcement).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is resolved only within that tenant; no match is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-by-alias-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetUiPluginByAliasV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**alias** | `string` | Alias to resolve within the caller\&#39;s tenant |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<UIPlugin>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  getUiPluginByAliasV1(): void {
    const alias: string = ; // Alias to resolve within the caller\&#39;s tenant
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getUiPluginByAliasV1({ alias: alias }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-ui-plugin-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a plugin instance
Returns a plugin instance by ID for the caller's tenant.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is loaded only when it belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/get-ui-plugin-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetUiPluginV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<UIPlugin>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  getUiPluginV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getUiPluginV1({ pluginInstanceId: pluginInstanceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-ui-plugin-asset-bundles-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List plugin asset bundles
Returns asset bundles for the given plugin instance (newest-first).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Bundles are listed only when the plugin instance belongs to that tenant; a mismatch is 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-asset-bundles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListUiPluginAssetBundlesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<UIPluginAssetBundle>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  listUiPluginAssetBundlesV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listUiPluginAssetBundlesV1({ pluginInstanceId: pluginInstanceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-ui-plugin-slots-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List UI plugin slots
Returns the static slot registry (extension points the platform exposes). `name` / `description` are localized via AtlasJS TranslateService.

Filtering uses API Standard Collection Parameters. `state` supports `eq` with values `active`, `deprecated`, or `removed`. Example: `filters=state eq "active"`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present).

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugin-slots-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListUiPluginSlotsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* | [optional] [default to undefined]
**allLangs** | `boolean` | When &#x60;true&#x60;, &#x60;name&#x60; and &#x60;description&#x60; are returned as full locale maps instead of a single translated string. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<UIPluginSlot>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  listUiPluginSlotsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **state**: *eq* (optional)
    const allLangs: boolean = ; // When &#x60;true&#x60;, &#x60;name&#x60; and &#x60;description&#x60; are returned as full locale maps instead of a single translated string. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listUiPluginSlotsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-ui-plugins-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List plugin instances
Returns plugin instances for the caller's tenant with optional V3-style pagination. When `count=true`, the response includes header `x-total-count`.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. Results include only that tenant's plugin instances.

[API Spec](https://developer.sailpoint.com/docs/api/list-ui-plugins-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListUiPluginsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<UIPlugin>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  listUiPluginsV1(): void {
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listUiPluginsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-ui-plugin-alias-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Test plugin alias availability
Checks whether the given alias is available within the caller's tenant. Alias is normalized (trim + lowercase) server-side.

Success returns an empty body (HTTP 200). Conflict when the alias is taken. UUID-shaped aliases are rejected as invalid.

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The alias is evaluated only within that tenant.

[API Spec](https://developer.sailpoint.com/docs/api/test-ui-plugin-alias-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestUiPluginAliasV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**alias** | `string` | Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes) |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  testUiPluginAliasV1(): void {
    const alias: string = ; // Alias to validate (3-63 chars; letters, numbers, dashes; no leading/trailing/consecutive dashes)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.testUiPluginAliasV1({ alias: alias }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-ui-plugin-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Partially update a plugin instance
Patch any subset of mutable fields. When `slots` is provided, replaces the entire slots list and re-validates registry / maxPlugins rules. When `apiScopes` is provided, replaces the entire scopes list. When `iframeSandbox` is provided, replaces the entire sandbox grant list; unlike CSP / Permissions-Policy changes, it does not rotate the active asset bundle. `state` may be set to `ENABLED` or `DISABLED` (DISABLED omits the instance from active-slots delivery).

Requires product license `idn:ui-plugins` or `idn:ui-plugins-author` (404 if neither is present). Returns 400 `User context is invalid` when the caller has no tenant id. The instance is updated only when it belongs to that tenant; a mismatch is 404. Emits Kafka audit event `UI_PLUGIN_INSTANCE_UPDATED` on success.

[API Spec](https://developer.sailpoint.com/docs/api/update-ui-plugin-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateUiPluginV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**pluginInstanceId** | `string` | UUID of the plugin instance |  [default to undefined]
**updateUIPluginRequest** | `UpdateUIPluginRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<UIPlugin>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { UIPluginsService } from '@sailpoint/angular-sdk/ui_plugins';
import { UpdateUIPluginRequest } from '@sailpoint/angular-sdk/ui_plugins';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(UIPluginsService);

  updateUiPluginV1(): void {
    const pluginInstanceId: string = ; // UUID of the plugin instance
    const updateUIPluginRequest: UpdateUIPluginRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateUiPluginV1({ pluginInstanceId: pluginInstanceId, updateUIPluginRequest: updateUIPluginRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

