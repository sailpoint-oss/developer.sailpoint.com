# SIMIntegrations

# SIMIntegrationsService
  Use this API to administer IdentityNow&#39;s Service Integration Module, or SIM integration with ServiceNow, so that it converts IdentityNow provisioning actions into tickets in ServiceNow.

ServiceNow is a software platform that supports IT service management and automates common business processes for requesting and fulfilling service requests across a business enterprise.

You must have an IdentityNow ServiceNow ServiceDesk license to use this integration. Contact your Customer Success Manager for more information.

Service Desk integration for IdentityNow and in deprecation - not available for new implementation, as of July 21st, 2021. As per SailPoint&#39;s [support policy](https://community.sailpoint.com/t5/Connector-Directory/SailPoint-Support-Policy-for-Connectivity/ta-p/79422), all existing SailPoint IdentityNow customers using this legacy integration will be supported until July 2022.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sim-integration-v1**](#create-sim-integration-v1) | **POST** `/sim-integrations/v1` | Create new sim integration
[**delete-sim-integration-v1**](#delete-sim-integration-v1) | **DELETE** `/sim-integrations/v1/{id}` | Delete a sim integration
[**get-sim-integration-v1**](#get-sim-integration-v1) | **GET** `/sim-integrations/v1/{id}` | Get a sim integration details.
[**get-sim-integrations-v1**](#get-sim-integrations-v1) | **GET** `/sim-integrations/v1` | List the existing sim integrations.
[**patch-before-provisioning-rule-v1**](#patch-before-provisioning-rule-v1) | **PATCH** `/sim-integrations/v1/{id}/beforeProvisioningRule` | Patch a sim beforeprovisioningrule attribute.
[**patch-sim-attributes-v1**](#patch-sim-attributes-v1) | **PATCH** `/sim-integrations/v1/{id}` | Patch a sim attribute.
[**put-sim-integration-v1**](#put-sim-integration-v1) | **PUT** `/sim-integrations/v1/{id}` | Update an existing sim integration


## create-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create new sim integration
Create a new SIM Integrations.

[API Spec](https://developer.sailpoint.com/docs/api/create-sim-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSIMIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**simIntegrationDetails** | `SimIntegrationDetails` | DTO containing the details of the SIM integration | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';
import { SimIntegrationDetails } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  createSIMIntegrationV1(): void {
    const simIntegrationDetails: SimIntegrationDetails = ; // DTO containing the details of the SIM integration
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createSIMIntegrationV1({ simIntegrationDetails: simIntegrationDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a sim integration
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-sim-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteSIMIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the integration to delete. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  deleteSIMIntegrationV1(): void {
    const id: string = ; // The id of the integration to delete.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteSIMIntegrationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a sim integration details.
Get the details of a SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSIMIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the integration. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  getSIMIntegrationV1(): void {
    const id: string = ; // The id of the integration.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSIMIntegrationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sim-integrations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List the existing sim integrations.
List the existing SIM integrations.

[API Spec](https://developer.sailpoint.com/docs/api/get-sim-integrations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSIMIntegrationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<ServiceDeskIntegrationDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  getSIMIntegrationsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSIMIntegrationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-before-provisioning-rule-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a sim beforeprovisioningrule attribute.
Patch a SIM beforeProvisioningRule attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/patch-before-provisioning-rule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchBeforeProvisioningRuleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | SIM integration id |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JsonPatch object that describes the changes of SIM beforeProvisioningRule. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';
import { JsonPatch } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  patchBeforeProvisioningRuleV1(): void {
    const id: string = ; // SIM integration id
    const jsonPatch: JsonPatch = ; // The JsonPatch object that describes the changes of SIM beforeProvisioningRule.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchBeforeProvisioningRuleV1({ id: id, jsonPatch: jsonPatch }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-sim-attributes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a sim attribute.
Patch a SIM attribute given a JsonPatch object.

[API Spec](https://developer.sailpoint.com/docs/api/patch-sim-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchSIMAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | SIM integration id |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JsonPatch object that describes the changes of SIM | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';
import { JsonPatch } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  patchSIMAttributesV1(): void {
    const id: string = ; // SIM integration id
    const jsonPatch: JsonPatch = ; // The JsonPatch object that describes the changes of SIM
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchSIMAttributesV1({ id: id, jsonPatch: jsonPatch }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-sim-integration-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an existing sim integration
Update an existing SIM integration.

[API Spec](https://developer.sailpoint.com/docs/api/put-sim-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutSIMIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the integration. |  [default to undefined]
**simIntegrationDetails** | `SimIntegrationDetails` | The full DTO of the integration containing the updated model | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SIMIntegrationsService } from '@sailpoint/angular-sdk/sim_integrations';
import { SimIntegrationDetails } from '@sailpoint/angular-sdk/sim_integrations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SIMIntegrationsService);

  putSIMIntegrationV1(): void {
    const id: string = ; // The id of the integration.
    const simIntegrationDetails: SimIntegrationDetails = ; // The full DTO of the integration containing the updated model
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.putSIMIntegrationV1({ id: id, simIntegrationDetails: simIntegrationDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

