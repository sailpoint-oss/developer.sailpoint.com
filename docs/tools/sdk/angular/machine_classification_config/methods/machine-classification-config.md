# MachineClassificationConfig

# MachineClassificationConfigService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete-machine-classification-config-v1**](#delete-machine-classification-config-v1) | **DELETE** `/sources/v1/{sourceId}/machine-classification-config` | Delete source\&#39;s classification config
[**get-machine-classification-config-v1**](#get-machine-classification-config-v1) | **GET** `/sources/v1/{sourceId}/machine-classification-config` | Machine classification config for source
[**set-machine-classification-config-v1**](#set-machine-classification-config-v1) | **PUT** `/sources/v1/{sourceId}/machine-classification-config` | Update source\&#39;s classification config


## delete-machine-classification-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete source\'s classification config
Use this API to remove Classification Config for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-classification-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineClassificationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineClassificationConfigService } from '@sailpoint/angular-sdk/machine_classification_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineClassificationConfigService);

  deleteMachineClassificationConfigV1(): void {
    const sourceId: string = ; // Source ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineClassificationConfigV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-classification-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine classification config for source
This API returns a Machine Classification Config for a Source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-classification-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineClassificationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineClassificationConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineClassificationConfigService } from '@sailpoint/angular-sdk/machine_classification_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineClassificationConfigService);

  getMachineClassificationConfigV1(): void {
    const sourceId: string = ; // Source ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineClassificationConfigV1({ sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-machine-classification-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source\'s classification config
Use this API to update Classification Config for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-classification-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetMachineClassificationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**machineClassificationConfig** | `MachineClassificationConfig` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineClassificationConfig>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineClassificationConfigService } from '@sailpoint/angular-sdk/machine_classification_config';
import { MachineClassificationConfig } from '@sailpoint/angular-sdk/machine_classification_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineClassificationConfigService);

  setMachineClassificationConfigV1(): void {
    const sourceId: string = ; // Source ID.
    const machineClassificationConfig: MachineClassificationConfig = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.setMachineClassificationConfigV1({ sourceId: sourceId, machineClassificationConfig: machineClassificationConfig }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

