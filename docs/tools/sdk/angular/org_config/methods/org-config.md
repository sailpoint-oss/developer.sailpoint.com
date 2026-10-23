# OrgConfig

# OrgConfigService
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-org-config-v1**](#get-org-config-v1) | **GET** `/org-config/v1` | Get org config settings
[**get-valid-time-zones-v1**](#get-valid-time-zones-v1) | **GET** `/org-config/v1/valid-time-zones` | Get valid time zones
[**patch-org-config-v1**](#patch-org-config-v1) | **PATCH** `/org-config/v1` | Patch org config


## get-org-config-v1
Get org config settings
Get the current organization's configuration settings, only external accessible properties.

[API Spec](https://developer.sailpoint.com/docs/api/get-org-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetOrgConfigV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<OrgConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OrgConfigService } from '@sailpoint/angular-sdk/org_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OrgConfigService);

  getOrgConfigV1(): void {
    this.api.getOrgConfigV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-valid-time-zones-v1
Get valid time zones
List the valid time zones that can be set in organization configurations.

[API Spec](https://developer.sailpoint.com/docs/api/get-valid-time-zones-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetValidTimeZonesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<string>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OrgConfigService } from '@sailpoint/angular-sdk/org_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OrgConfigService);

  getValidTimeZonesV1(): void {
    const limit: number = ; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getValidTimeZonesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-org-config-v1
Patch org config
Patch the current organization's configuration, using http://jsonpatch.com/ syntax. This is commonly used to changing an organization's time zone.

[API Spec](https://developer.sailpoint.com/docs/api/patch-org-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchOrgConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`Observable<OrgConfig>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { OrgConfigService } from '@sailpoint/angular-sdk/org_config';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/org_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(OrgConfigService);

  patchOrgConfigV1(): void {
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    this.api.patchOrgConfigV1({ jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

