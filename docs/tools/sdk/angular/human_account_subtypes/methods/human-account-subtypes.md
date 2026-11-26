# HumanAccountSubtypes

# HumanAccountSubtypesService
  Use these APIs to get, create, update, and delete human account subtypes for sources, and to get and update
the account-create configuration of a human account subtype. These APIs are experimental and require the
&#x60;X-SailPoint-Experimental&#x60; header.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-human-account-subtype-v2**](#create-human-account-subtype-v2) | **POST** `/accounts/v2/sources/{sourceId}/subtypes` | Create a human account subtype
[**delete-human-account-subtype-v2**](#delete-human-account-subtype-v2) | **DELETE** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Delete a human account subtype
[**get-human-account-subtype-config-v2**](#get-human-account-subtype-config-v2) | **GET** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Get human subtype config
[**get-human-account-subtype-v2**](#get-human-account-subtype-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Get a human account subtype
[**list-human-account-subtypes-v2**](#list-human-account-subtypes-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes` | List human account subtypes
[**update-human-account-subtype-config-v2**](#update-human-account-subtype-config-v2) | **PATCH** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Update human subtype config
[**update-human-account-subtype-v2**](#update-human-account-subtype-v2) | **PATCH** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Update a human account subtype


## create-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a human account subtype
Create a human account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-human-account-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateHumanAccountSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**humanAccountSubtypeCreateRequest** | `HumanAccountSubtypeCreateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<HumanAccountSubtype>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';
import { HumanAccountSubtypeCreateRequest } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  createHumanAccountSubtypeV2(): void {
    const sourceId: string = ; // ID of the source.
    const humanAccountSubtypeCreateRequest: HumanAccountSubtypeCreateRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createHumanAccountSubtypeV2({ sourceId: sourceId, humanAccountSubtypeCreateRequest: humanAccountSubtypeCreateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a human account subtype
Delete a human account subtype of a source, together with its account-create configuration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-human-account-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteHumanAccountSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  deleteHumanAccountSubtypeV2(): void {
    const sourceId: string = ; // ID of the source.
    const subtypeId: string = ; // ID of the human account subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteHumanAccountSubtypeV2({ sourceId: sourceId, subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-human-account-subtype-config-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get human subtype config
Get the account-create configuration of a human account subtype by subtype ID. A subtype with no stored configuration returns the default values.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-config-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetHumanAccountSubtypeConfigV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<HumanAccountSubtypeConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  getHumanAccountSubtypeConfigV2(): void {
    const subtypeId: string = ; // ID of the human account subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getHumanAccountSubtypeConfigV2({ subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a human account subtype
Get a human account subtype of a source by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetHumanAccountSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<HumanAccountSubtype>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  getHumanAccountSubtypeV2(): void {
    const sourceId: string = ; // ID of the source.
    const subtypeId: string = ; // ID of the human account subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getHumanAccountSubtypeV2({ sourceId: sourceId, subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-human-account-subtypes-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List human account subtypes
Get the human account subtypes of a source.

[API Spec](https://developer.sailpoint.com/docs/api/list-human-account-subtypes-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListHumanAccountSubtypesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** | [optional] [default to &#39;&#39;]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<HumanAccountSubtype>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  listHumanAccountSubtypesV2(): void {
    const sourceId: string = ; // ID of the source.
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listHumanAccountSubtypesV2({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-human-account-subtype-config-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update human subtype config
Update the account-create configuration of a human account subtype. Only operations under `/humanAccountCreate` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-config-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateHumanAccountSubtypeConfigV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch operations under &#x60;/humanAccountCreate&#x60;, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902). | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<HumanAccountSubtypeConfig>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  updateHumanAccountSubtypeConfigV2(): void {
    const subtypeId: string = ; // ID of the human account subtype.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // JSON Patch operations under &#x60;/humanAccountCreate&#x60;, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateHumanAccountSubtypeConfigV2({ subtypeId: subtypeId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a human account subtype
Update the display name or description of a human account subtype. Only replace operations on `/displayName` and `/description` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateHumanAccountSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902). | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<HumanAccountSubtype>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { HumanAccountSubtypesService } from '@sailpoint/angular-sdk/human_account_subtypes';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/human_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(HumanAccountSubtypesService);

  updateHumanAccountSubtypeV2(): void {
    const sourceId: string = ; // ID of the source.
    const subtypeId: string = ; // ID of the human account subtype.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateHumanAccountSubtypeV2({ sourceId: sourceId, subtypeId: subtypeId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

