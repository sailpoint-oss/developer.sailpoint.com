# MachineAccountSubtypes

# MachineAccountSubtypesService
  Use this API to get, update, and delete machine account subtypes. V2 paths are experimental
and require the &#x60;X-SailPoint-Experimental&#x60; header.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-source-subtype-override-v2**](#create-source-subtype-override-v2) | **POST** `/source-subtypes/v2/{id}/overrides` | Create a source-tier override
[**create-source-subtype-provisioning-policy-v2**](#create-source-subtype-provisioning-policy-v2) | **POST** `/source-subtypes/v2/{id}/provisioning-policy` | Create subtype provisioning policy
[**create-source-subtype-v1**](#create-source-subtype-v1) | **POST** `/source-subtypes/v1` | Create subtype
[**create-source-subtype-v2**](#create-source-subtype-v2) | **POST** `/source-subtypes/v2` | Create a tiered subtype
[**delete-machine-account-subtype-v1**](#delete-machine-account-subtype-v1) | **DELETE** `/source-subtypes/v1/{subtypeId}` | Delete subtype by ID
[**delete-machine-account-subtype-v2**](#delete-machine-account-subtype-v2) | **DELETE** `/source-subtypes/v2/{id}` | Delete tiered subtype by ID
[**delete-source-subtype-provisioning-policy-v2**](#delete-source-subtype-provisioning-policy-v2) | **DELETE** `/source-subtypes/v2/{id}/provisioning-policy` | Delete subtype provisioning policy
[**get-machine-account-subtype-approval-config-v1**](#get-machine-account-subtype-approval-config-v1) | **GET** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config
[**get-source-subtype-by-id-v1**](#get-source-subtype-by-id-v1) | **GET** `/source-subtypes/v1/{subtypeId}` | Get subtype by ID
[**get-source-subtype-by-id-v2**](#get-source-subtype-by-id-v2) | **GET** `/source-subtypes/v2/{id}` | Get tiered subtype by ID
[**get-source-subtype-provisioning-policy-v2**](#get-source-subtype-provisioning-policy-v2) | **GET** `/source-subtypes/v2/{id}/provisioning-policy` | Get subtype provisioning policy
[**list-source-subtype-targets-v2**](#list-source-subtype-targets-v2) | **GET** `/source-subtypes/v2/targets` | List subtype targets
[**list-source-subtypes-v1**](#list-source-subtypes-v1) | **GET** `/source-subtypes/v1` | Retrieve all subtypes
[**list-source-subtypes-v2**](#list-source-subtypes-v2) | **GET** `/source-subtypes/v2` | Retrieve all tiered subtypes
[**load-bulk-source-subtypes-v1**](#load-bulk-source-subtypes-v1) | **POST** `/source-subtypes/v1/bulk-retrieve` | Bulk Retrieve of Source Subtypes
[**patch-machine-account-subtype-v1**](#patch-machine-account-subtype-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}` | Patch subtype by ID
[**patch-machine-account-subtype-v2**](#patch-machine-account-subtype-v2) | **PATCH** `/source-subtypes/v2/{id}` | Patch tiered subtype by ID
[**patch-source-subtype-provisioning-policy-v2**](#patch-source-subtype-provisioning-policy-v2) | **PATCH** `/source-subtypes/v2/{id}/provisioning-policy` | Patch subtype provisioning policy
[**update-machine-account-subtype-approval-config-v1**](#update-machine-account-subtype-approval-config-v1) | **PATCH** `/source-subtypes/v1/{subtypeId}/machine-config` | Machine Subtype Approval Config


## create-source-subtype-override-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a source-tier override
Creates a SOURCE-tier snapshot of a CONNECTOR-tier subtype for one source. The snapshot copies
the parent display data, machine-account config, and authored provisioning policy. It does not
add the connector's default account-creation fields, and later connector-tier edits do not
propagate.

`subtypeId` must be a CONNECTOR-tier subtype UUID that is in the source effective set. The
created row is an ordinary SOURCE subtype (`targetType=SOURCE`, new `id`, `origin=null`) and
can be patched or deleted with the existing v2 subtype routes.

Requires `idn:source-subtypes:create`. A missing right, an unknown parent, or an unknown source
returns **404**. A parent that is not CONNECTOR, a blank `sourceId`, a parent that is not
effective on the source, a name collision, or a subtype cap returns **400**. A malformed `subtypeId` returns **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-override-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSourceSubtypeOverrideV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | CONNECTOR-tier subtype to snapshot onto the source. |  [default to undefined]
**sourceSubtypeOverrideRequest** | `SourceSubtypeOverrideRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SubtypeWithTarget>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { SourceSubtypeOverrideRequest } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  createSourceSubtypeOverrideV2(): void {
    const id: string = ; // CONNECTOR-tier subtype to snapshot onto the source.
    const sourceSubtypeOverrideRequest: SourceSubtypeOverrideRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createSourceSubtypeOverrideV2({ id: id, sourceSubtypeOverrideRequest: sourceSubtypeOverrideRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create subtype provisioning policy
Creates the machine account creation provisioning policy for a subtype. A subtype has at most
one policy; the request is rejected if one already exists.

When `useDefaultFields` is `true` and the body has no `fields`, a `CONNECTOR` subtype's policy
is created with the connector's default account-creation fields. `SOURCE` subtypes ignore
`useDefaultFields`.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. A missing subtype or a missing right returns **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-provisioning-policy-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSourceSubtypeProvisioningPolicyV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**provisioningPolicyDto** | `ProvisioningPolicyDto` |  | 
**useDefaultFields** | `boolean` | When &#x60;true&#x60; and the request body has no &#x60;fields&#x60;, a &#x60;CONNECTOR&#x60; subtype\&#39;s policy is created with the connector\&#39;s default account-creation fields. Ignored for &#x60;SOURCE&#x60; subtypes. | [optional] [default to true]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ProvisioningPolicyDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { ProvisioningPolicyDto } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  createSourceSubtypeProvisioningPolicyV2(): void {
    const id: string = ; // The ID of the subtype.
    const provisioningPolicyDto: ProvisioningPolicyDto = ; // 
    const useDefaultFields: boolean = ; // When &#x60;true&#x60; and the request body has no &#x60;fields&#x60;, a &#x60;CONNECTOR&#x60; subtype\&#39;s policy is created with the connector\&#39;s default account-creation fields. Ignored for &#x60;SOURCE&#x60; subtypes. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createSourceSubtypeProvisioningPolicyV2({ id: id, provisioningPolicyDto: provisioningPolicyDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-source-subtype-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create subtype
Create a new machine account subtype.

[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSourceSubtypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createSourceSubtypeV1Request** | `CreateSourceSubtypeV1Request` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtypeWithSource>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { CreateSourceSubtypeV1Request } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  createSourceSubtypeV1(): void {
    const createSourceSubtypeV1Request: CreateSourceSubtypeV1Request = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createSourceSubtypeV1({ createSourceSubtypeV1Request: createSourceSubtypeV1Request }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-source-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a tiered subtype
Creates a machine account subtype at the tier declared on the request body.

`targetId` is required at every tier. `targetType` defaults to `SOURCE` when omitted. Do not
supply `id` or `profile`; those fields are response-only. `systemManaged`, `created`,
`modified`, and `origin` are ignored on input. CONNECTOR `targetName` is optional and is filled
from the connector's display name.

SOURCE-tier create requires `idn:source-subtypes:create`. CONNECTOR-tier create requires
`idn:connector-subtypes:create`. A missing right is returned as **404**, not **403**.
`CONNECTOR_VARIANT` is not available and returns **400**.

Duplicate technical name or display name in the same tier scope returns **400**. Exceeding the
organization subtype limit returns **400**. The create also stores a `CREATE_MACHINE_ACCOUNT`
provisioning policy from the connector's default account-creation fields.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/create-source-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSourceSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceSubtypeV2** | `SourceSubtypeV2` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SubtypeWithTarget>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { SourceSubtypeV2 } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  createSourceSubtypeV2(): void {
    const sourceSubtypeV2: SourceSubtypeV2 = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createSourceSubtypeV2({ sourceSubtypeV2: sourceSubtypeV2 }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-account-subtype-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete subtype by ID
Delete a machine account subtype by subtype ID.

Note: If subtype has approval settings or entitlement for machine account creation enablement then it'll be also deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineAccountSubtypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  deleteMachineAccountSubtypeV1(): void {
    const subtypeId: string = ; // The ID of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineAccountSubtypeV1({ subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete tiered subtype by ID
Deletes a tiered subtype by id.

System-managed subtypes return **400**. A subtype that is still assigned to accounts returns
**400**. A connector-tier response includes how many accounts and sources still use it.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Unknown id and a denied tier are both returned as **404**. A
malformed UUID returns **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineAccountSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  deleteMachineAccountSubtypeV2(): void {
    const id: string = ; // The ID of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineAccountSubtypeV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete subtype provisioning policy
Deletes the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype.

SOURCE-tier delete requires `idn:source-subtypes:delete`. CONNECTOR-tier delete requires
`idn:connector-subtypes:delete`. Missing subtype and missing right both return **404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/delete-source-subtype-provisioning-policy-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteSourceSubtypeProvisioningPolicyV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  deleteSourceSubtypeProvisioningPolicyV2(): void {
    const id: string = ; // The ID of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteSourceSubtypeProvisioningPolicyV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-account-subtype-approval-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine Subtype Approval Config
This endpoint retrieves the approval configuration for machine account creation and deletion at the machine subtype level. By providing a specific subtypeId in the path, clients can fetch the approval rules and settings (such as required approvers and comments policy) that govern account creation and deletion for that particular machine subtype. The response includes a MachineAccountSubtypeConfigDto object detailing these configurations, enabling clients to understand or display the approval workflow required for creating and deleting machine accounts of the given subtype. Use this endpoint to get machine subtype level approval config for account creation and deletion.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-account-subtype-approval-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineAccountSubtypeApprovalConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**subtypeId** | `string` | machine subtype id. |  [default to undefined]

### Return type

`Observable<MachineAccountSubtypeConfigDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  getMachineAccountSubtypeApprovalConfigV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API.
    const subtypeId: string = ; // machine subtype id.
    this.api.getMachineAccountSubtypeApprovalConfigV1({ xSailPointExperimental: xSailPointExperimental, subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-source-subtype-by-id-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get subtype by ID
Get a machine account subtype by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSourceSubtypeByIdV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtypeWithSource>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  getSourceSubtypeByIdV1(): void {
    const subtypeId: string = ; // The ID of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSourceSubtypeByIdV1({ subtypeId: subtypeId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-source-subtype-by-id-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get tiered subtype by ID
Returns one machine account subtype by id, including whether its target can provision accounts.

Unknown id returns **404**. A caller without the required right also receives **404**. If
provisioning support cannot be determined, the API returns **503**. When the experimental
header is missing, or when tiered subtype configuration is not enabled, the endpoint returns
**404**.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-by-id-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSourceSubtypeByIdV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SubtypeWithTargetProvisioning>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  getSourceSubtypeByIdV2(): void {
    const id: string = ; // The ID of the subtype.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSourceSubtypeByIdV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get subtype provisioning policy
Returns the machine account creation provisioning policy for a subtype of any tier. Returns
**404** when the subtype has no provisioning policy.

For a `SOURCE` subtype, pass `sourceId` so a policy stored on that source can be found.

The caller needs `idn:source-subtypes:read`. A malformed id returns **400**. When the
experimental header is missing, or when tiered subtype configuration is not enabled, the
endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/get-source-subtype-provisioning-policy-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSourceSubtypeProvisioningPolicyV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**sourceId** | `string` | ID of the source the subtype belongs to. Supply it for &#x60;SOURCE&#x60; subtypes so that a policy stored with the source can be found. | [optional] [default to &#39;&#39;]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ProvisioningPolicyDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  getSourceSubtypeProvisioningPolicyV2(): void {
    const id: string = ; // The ID of the subtype.
    const sourceId: string = ; // ID of the source the subtype belongs to. Supply it for &#x60;SOURCE&#x60; subtypes so that a policy stored with the source can be found. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSourceSubtypeProvisioningPolicyV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-source-subtype-targets-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List subtype targets
Lists per-target subtype counts. Connector-tier rows are grouped by connector type.
Source-tier rows are returned 1:1 with each source-tier subtype.

`filters` must include `targetType eq "CONNECTOR"` or `targetType eq "SOURCE"`. Missing or
blank `targetType` returns **400**. `CONNECTOR_VARIANT` and unknown values return **400**.
Filter and sort fields are independent of the subtype list API. Default sort is `targetName`
ascending. `lastModified` is response-only and is not filterable or sortable.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtype-targets-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSourceSubtypeTargetsV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw* |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. | [optional] [default to &#39;targetName&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<SubtypeTargetSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  listSourceSubtypeTargetsV2(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **targetType**: *eq*  **targetName**: *eq, sw*
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **targetType, targetName, subtypeCount, sourceCount**  Default sort is targetName ascending. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listSourceSubtypeTargetsV2({ filters: filters }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-source-subtypes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve all subtypes
Get all machine account subtypes.

[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSourceSubtypesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<SourceSubtypeWithSource>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  listSourceSubtypesV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, technicalName** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    this.api.listSourceSubtypesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-source-subtypes-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve all tiered subtypes
Lists machine account subtypes across SOURCE and CONNECTOR tiers.

`targetId` is the scope key at every tier (source id for `SOURCE`, connector type for
`CONNECTOR`). Responses include a resolved `target` reference and do not include `sourceId`.
List responses do not include `target.supportsProvisioning`.

With `sourceId`, omitted `effectiveSet` defaults to `true` and returns the effective set for
that source (SOURCE overrides CONNECTOR by technical name). `effectiveSet=false` returns only
that source's raw SOURCE-tier rows. `effectiveSet=true` without `sourceId` returns **400**.
Combining `filters` with effective-set resolution returns **400**. Unknown `sourceId` returns
**404**. Limit, offset, and `count` apply on both paths. There is no default sort.

Optional `targetType` applies only on the effective-set path. `CONNECTOR` keeps inherited
connector winners. `SOURCE` keeps source-only winners and SOURCE overrides. Omitting it keeps
the full winner set. A blank, unknown, or `CONNECTOR_VARIANT` value, or any `targetType` when
`effectiveSet` is `false` or `sourceId` is omitted, returns **400**.

On the effective set, `origin` is `CONNECTOR` only when a SOURCE winner overrides a CONNECTOR
parent of the same technical name. Connector-only and source-only winners have `origin=null`.

`includeConfigs` defaults to `false`. When `true`, each `MACHINE` subtype that has a stored
machine-account-create config includes slim `config.machineAccountCreate.accountCreateEnabled`.
A `MACHINE` row with no create config, and every non-`MACHINE` row, omits `config`. The list
does not return the full machine-config document.

This API requires the Machine Identity Security product. When the experimental header is
missing, or when the tiered subtype configuration is not enabled for the tenant, the endpoint
returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/list-source-subtypes-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSourceSubtypesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. | [optional] [default to &#39;&#39;]
**sourceId** | `string` | Source scope. When supplied, omitted &#x60;effectiveSet&#x60; defaults to &#x60;true&#x60;. Unknown source returns **404**. Empty means the parameter was omitted. | [optional] [default to &#39;&#39;]
**effectiveSet** | `boolean` | When &#x60;true&#x60; with &#x60;sourceId&#x60;, return the effective subtype set for that source. When &#x60;false&#x60; with &#x60;sourceId&#x60;, return only that source\&#39;s raw SOURCE-tier rows. &#x60;true&#x60; without &#x60;sourceId&#x60; returns **400**. Combining with &#x60;filters&#x60; returns **400**. | [optional] [default to true]
**targetType** | `'SOURCE' | 'CONNECTOR'` | Winner-tier cut on the effective set only. &#x60;CONNECTOR&#x60; returns inherited connector winners. &#x60;SOURCE&#x60; returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when &#x60;effectiveSet&#x60; is &#x60;false&#x60; or &#x60;sourceId&#x60; is omitted. | [optional] [default to undefined]
**includeConfigs** | `boolean` | When &#x60;true&#x60;, each &#x60;MACHINE&#x60; subtype with a stored machine-account-create config includes slim &#x60;config.machineAccountCreate.accountCreateEnabled&#x60;. Default &#x60;false&#x60; omits &#x60;config&#x60;. | [optional] [default to false]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<SubtypeWithTargetAndConfig>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  listSourceSubtypesV2(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, sw*  **technicalName**: *eq, sw*  **source.id**: *eq, in*  **targetType**: *eq, in*  **targetId**: *eq, in*  **targetName**: *eq, sw*  **classification**: *eq, in*  **type**: *eq, in*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  Filters cannot be combined with the effective set. That combination returns 400. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, displayName, technicalName, source.id, targetType, targetId, targetName, classification, type, created, modified**  When omitted, order is unspecified. (optional)
    const sourceId: string = ; // Source scope. When supplied, omitted &#x60;effectiveSet&#x60; defaults to &#x60;true&#x60;. Unknown source returns **404**. Empty means the parameter was omitted. (optional)
    const effectiveSet: boolean = ; // When &#x60;true&#x60; with &#x60;sourceId&#x60;, return the effective subtype set for that source. When &#x60;false&#x60; with &#x60;sourceId&#x60;, return only that source\&#39;s raw SOURCE-tier rows. &#x60;true&#x60; without &#x60;sourceId&#x60; returns **400**. Combining with &#x60;filters&#x60; returns **400**. (optional)
    const targetType: string = ; // Winner-tier cut on the effective set only. &#x60;CONNECTOR&#x60; returns inherited connector winners. &#x60;SOURCE&#x60; returns source-only winners and SOURCE overrides. Omit it to keep the full winner set. Invalid when &#x60;effectiveSet&#x60; is &#x60;false&#x60; or &#x60;sourceId&#x60; is omitted. (optional)
    const includeConfigs: boolean = ; // When &#x60;true&#x60;, each &#x60;MACHINE&#x60; subtype with a stored machine-account-create config includes slim &#x60;config.machineAccountCreate.accountCreateEnabled&#x60;. Default &#x60;false&#x60; omits &#x60;config&#x60;. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listSourceSubtypesV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## load-bulk-source-subtypes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk Retrieve of Source Subtypes
This endpoint retrieves the subtypes for given subtypeIds.

[API Spec](https://developer.sailpoint.com/docs/api/load-bulk-source-subtypes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `LoadBulkSourceSubtypesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**requestBody** | `Array<string>` |  | 

### Return type

`Observable<Array<SourceSubtypeWithSource>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  loadBulkSourceSubtypesV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API.
    const requestBody: Array<string> = ; // 
    this.api.loadBulkSourceSubtypesV1({ xSailPointExperimental: xSailPointExperimental, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-machine-account-subtype-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch subtype by ID
Update fields of a machine account subtype by subtype ID.
Patchable fields only include: `displayName`, `description`.

[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchMachineAccountSubtypeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | The ID of the subtype. |  [default to undefined]
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SourceSubtypeWithSource>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  patchMachineAccountSubtypeV1(): void {
    const subtypeId: string = ; // The ID of the subtype.
    const requestBody: Array<object> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchMachineAccountSubtypeV1({ subtypeId: subtypeId, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-machine-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch tiered subtype by ID
Applies an RFC 6902 JSON Patch to a tiered subtype.

Patchable fields are `displayName` and `description` only. Tier and identity fields
(`technicalName`, `targetType`, `targetId`, `profile`, `classification`, `type`) are immutable;
change them by deleting and recreating the subtype.

SOURCE-tier update requires `idn:source-subtypes:update`. CONNECTOR-tier update requires
`idn:connector-subtypes:update`. Unknown id and a denied tier are both returned as **404**. A
malformed UUID returns **400**. System-managed rows and a duplicate display name in the same
tier scope return **400**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-machine-account-subtype-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchMachineAccountSubtypeV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<SubtypeWithTarget>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  patchMachineAccountSubtypeV2(): void {
    const id: string = ; // The ID of the subtype.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of subtype update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchMachineAccountSubtypeV2({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-source-subtype-provisioning-policy-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch subtype provisioning policy
Patches the stored `CREATE_MACHINE_ACCOUNT` provisioning policy for a subtype using RFC 6902
JSON Patch.

SOURCE-tier write requires `idn:source-subtypes:update`. CONNECTOR-tier write requires
`idn:connector-subtypes:update`. Missing subtype, missing policy, and missing right all return
**404**.

When the experimental header is missing, or when the tiered subtype configuration is not enabled
for the tenant, the endpoint returns **404**.


[API Spec](https://developer.sailpoint.com/docs/api/patch-source-subtype-provisioning-policy-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchSourceSubtypeProvisioningPolicyV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<ProvisioningPolicyDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  patchSourceSubtypeProvisioningPolicyV2(): void {
    const id: string = ; // The ID of the subtype.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchSourceSubtypeProvisioningPolicyV2({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-account-subtype-approval-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine Subtype Approval Config
Updates the approval configuration for machine account deletion at the specified machine subtype level. This endpoint allows clients to modify approval rules and settings (such as required approvers and comments policy) for account creation and deletion workflows associated with a given subtypeId. Use this to customize or enforce approval requirements for creating and deleting machine accounts of a particular subtype.

[API Spec](https://developer.sailpoint.com/docs/api/update-machine-account-subtype-approval-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineAccountSubtypeApprovalConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. |  [default to &#39;true&#39;]
**subtypeId** | `string` | machine account subtype ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the object. | 

### Return type

`Observable<MachineAccountSubtypeConfigDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineAccountSubtypesService } from '@sailpoint/angular-sdk/machine_account_subtypes';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/machine_account_subtypes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineAccountSubtypesService);

  updateMachineAccountSubtypeApprovalConfigV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API.
    const subtypeId: string = ; // machine account subtype ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // The JSONPatch payload used to update the object.
    this.api.updateMachineAccountSubtypeApprovalConfigV1({ xSailPointExperimental: xSailPointExperimental, subtypeId: subtypeId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

