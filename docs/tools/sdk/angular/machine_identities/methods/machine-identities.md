# MachineIdentities

# MachineIdentitiesService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity-v1**](#create-machine-identity-v1) | **POST** `/machine-identities/v1` | Create machine identity
[**create-machine-identity-v2**](#create-machine-identity-v2) | **POST** `/machine-identities/v2` | Create machine identity
[**delete-machine-identities-in-bulk-v2**](#delete-machine-identities-in-bulk-v2) | **POST** `/machine-identities/v2/bulk-delete` | Bulk delete machine identities
[**delete-machine-identity-async-v1**](#delete-machine-identity-async-v1) | **DELETE** `/machine-identities/v1/{id}/delete-async` | Delete AI agent asynchronously
[**delete-machine-identity-async-v2**](#delete-machine-identity-async-v2) | **DELETE** `/machine-identities/v2/{id}/delete-async` | Delete AI agent asynchronously
[**delete-machine-identity-v1**](#delete-machine-identity-v1) | **DELETE** `/machine-identities/v1/{id}` | Delete machine identity
[**delete-machine-identity-v2**](#delete-machine-identity-v2) | **DELETE** `/machine-identities/v2/{id}` | Delete machine identity
[**delete-ownership-correlation-config-v1**](#delete-ownership-correlation-config-v1) | **DELETE** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**get-machine-identity-agent-counts-v1**](#get-machine-identity-agent-counts-v1) | **GET** `/machine-identities/v1/agent-counts` | Get AI agent counts
[**get-machine-identity-agent-counts-v2**](#get-machine-identity-agent-counts-v2) | **GET** `/machine-identities/v2/agent-counts` | Get AI agent counts
[**get-machine-identity-all-counts-v1**](#get-machine-identity-all-counts-v1) | **GET** `/machine-identities/v1/all-counts` | Get owner machine identity counts
[**get-machine-identity-application-counts-v1**](#get-machine-identity-application-counts-v1) | **GET** `/machine-identities/v1/application-counts` | Get application counts
[**get-machine-identity-application-counts-v2**](#get-machine-identity-application-counts-v2) | **GET** `/machine-identities/v2/application-counts` | Get application counts
[**get-machine-identity-daily-counts-v1**](#get-machine-identity-daily-counts-v1) | **GET** `/machine-identities/v1/counts/daily` | Get daily non-human entity counts
[**get-machine-identity-v1**](#get-machine-identity-v1) | **GET** `/machine-identities/v1/{id}` | Get machine identity details
[**get-machine-identity-v2**](#get-machine-identity-v2) | **GET** `/machine-identities/v2/{id}` | Get machine identity details
[**get-ownership-correlation-config-v1**](#get-ownership-correlation-config-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**get-unsanctioned-anomaly-summary-v1**](#get-unsanctioned-anomaly-summary-v1) | **GET** `/machine-identities/v1/anomaly-summaries/unsanctioned` | Get unsanctioned application anomaly summary
[**list-machine-identities-v1**](#list-machine-identities-v1) | **GET** `/machine-identities/v1` | List machine identities
[**list-machine-identities-v2**](#list-machine-identities-v2) | **GET** `/machine-identities/v2` | List machine identities
[**list-machine-identity-accounts-v2**](#list-machine-identity-accounts-v2) | **GET** `/machine-identities/v2/{id}/accounts` | List linked machine accounts
[**list-machine-identity-anomalies-v1**](#list-machine-identity-anomalies-v1) | **GET** `/machine-identities/v1/{id}/anomalies` | List machine identity anomalies
[**list-machine-identity-capabilities-v2**](#list-machine-identity-capabilities-v2) | **GET** `/machine-identities/v2/{id}/capabilities` | List machine identity capabilities
[**list-machine-identity-entitlements-v2**](#list-machine-identity-entitlements-v2) | **GET** `/machine-identities/v2/{id}/entitlements` | List machine identity entitlements
[**list-machine-identity-hostnames-v2**](#list-machine-identity-hostnames-v2) | **GET** `/machine-identities/v2/hostnames` | List AI agent hostnames
[**list-machine-identity-user-entitlements-v1**](#list-machine-identity-user-entitlements-v1) | **GET** `/machine-identity-user-entitlements/v1` | List machine identity\&#39;s user entitlements
[**list-ownership-correlation-configs-v1**](#list-ownership-correlation-configs-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**patch-ownership-correlation-config-v1**](#patch-ownership-correlation-config-v1) | **PATCH** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**start-machine-identity-aggregation-v1**](#start-machine-identity-aggregation-v1) | **POST** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
[**update-machine-identities-in-bulk-v2**](#update-machine-identities-in-bulk-v2) | **POST** `/machine-identities/v2/bulk-update` | Bulk update machine identities
[**update-machine-identity-v1**](#update-machine-identity-v1) | **PATCH** `/machine-identities/v1/{id}` | Update machine identity details
[**update-machine-identity-v2**](#update-machine-identity-v2) | **PATCH** `/machine-identities/v2/{id}` | Partial update of machine identity


## create-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create machine identity
Use this API to create a machine identity.
The maximum supported length for the description field is 2000 characters.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateMachineIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineIdentityRequest** | `MachineIdentityRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { MachineIdentityRequest } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  createMachineIdentityV1(): void {
    const machineIdentityRequest: MachineIdentityRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createMachineIdentityV1({ machineIdentityRequest: machineIdentityRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-machine-identity-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create machine identity
Use this API to create a machine identity. Additional owners may be either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. The maximum supported length for the description field is 2000 characters.

When Business Applications is enabled for the tenant, callers may optionally include a single `businessApplicationRefs` entry (`type`=`BUSINESS_APPLICATION`, `id`=BA UUID). The assignment is stored as a `MANUAL` correlation. `correlationType` may be omitted or `MANUAL`; `AUTOMATIC` is rejected (`400`). Unknown BA id returns `404`. More than one ref returns `400`. When Business Applications is not enabled, supplying `businessApplicationRefs` returns `400`. `sanctionedStatus` and `effectiveSanctionedStatus` are read-only and ignored on input.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-identity-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateMachineIdentityV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineidentityv2** | `MachineidentityV2` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineidentityV2>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { MachineidentityV2 } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  createMachineIdentityV2(): void {
    const machineidentityv2: MachineidentityV2 = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createMachineIdentityV2({ machineidentityv2: machineidentityv2 }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-identities-in-bulk-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk delete machine identities
This API deletes up to 100 machine identities and returns a result for each requested ID.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was deleted.

A caller who owns a machine identity can delete it. Other callers need the **idn:mis-identity:delete** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identities-in-bulk-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineIdentitiesInBulkV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineIdentityBulkRequest** | `MachineIdentityBulkRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineIdentityBulkResult>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { MachineIdentityBulkRequest } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  deleteMachineIdentitiesInBulkV2(): void {
    const machineIdentityBulkRequest: MachineIdentityBulkRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineIdentitiesInBulkV2({ machineIdentityBulkRequest: machineIdentityBulkRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-identity-async-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete AI agent asynchronously
This API deletes an AI agent machine identity. It applies only to AI agents. Application machine identities return
`400`; delete them with the delete machine identity API instead.

When the AI agent was aggregated from a source and still exists on that source, the API starts a deletion task on
the source and returns the task status. When the AI agent was created manually or no longer exists on the source,
the API deletes it immediately and returns `200` with an empty body.

The API returns `400` when the AI agent is still assigned to machine accounts, or when its source does not support
deleting it. It returns `404` when the machine identity or its source is not found.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineIdentityAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<TaskStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  deleteMachineIdentityAsyncV1(): void {
    const id: string = ; // Machine Identity ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineIdentityAsyncV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-identity-async-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete AI agent asynchronously
This API deletes an AI agent machine identity. It applies only to AI agents. Application machine identities return
`400`; delete them with the delete machine identity API instead.

When the AI agent was aggregated from a source and still exists on that source, the API starts a deletion task on
the source and returns the task status. When the AI agent was created manually or no longer exists on the source,
the API deletes it immediately and returns `200` with an empty body.

The API returns `400` when the AI agent is still assigned to machine accounts, or when its source does not support
deleting it. It returns `404` when the machine identity or its source is not found.


[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-async-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineIdentityAsyncV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<TaskStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  deleteMachineIdentityAsyncV2(): void {
    const id: string = ; // Machine Identity ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineIdentityAsyncV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete machine identity
The API returns successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  deleteMachineIdentityV1(): void {
    const id: string = ; // Machine Identity ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineIdentityV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-machine-identity-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete machine identity
The API returns a successful response if the requested machine identity was deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-identity-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMachineIdentityV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  deleteMachineIdentityV2(): void {
    const id: string = ; // Machine Identity ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteMachineIdentityV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-ownership-correlation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete ownership correlation config
Deletes the ownership correlation config with the specified ID for the given source resource.

[API Spec](https://developer.sailpoint.com/docs/api/delete-ownership-correlation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteOwnershipCorrelationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**configId** | `string` | The correlation config ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  deleteOwnershipCorrelationConfigV1(): void {
    const sourceId: string = ; // The Source ID.
    const resourceId: string = ; // The source resource ID (for example, account or aws:iam-role).
    const configId: string = ; // The correlation config ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteOwnershipCorrelationConfigV1({ sourceId: sourceId, resourceId: resourceId, configId: configId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-agent-counts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get AI agent counts
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts AI
agents that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityAgentCountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityAgentCounts>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityAgentCountsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityAgentCountsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-agent-counts-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get AI agent counts
This API returns tenant-wide summary counts for AI agent machine identities: the total, unsanctioned agents,
agents discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-agent-counts-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityAgentCountsV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityAgentCounts>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityAgentCountsV2(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityAgentCountsV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-all-counts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get owner machine identity counts
This API returns the number of application machine identities, AI agent machine identities, and machine accounts
owned by one identity, plus their total. Identify the owner with an `ownerId` filter. Use `ownerId eq "me"` for
the caller's own counts. Requests without an `ownerId` filter return `400`.

A caller who owns the machine identities and machine accounts can view their own counts. Other callers need the
**idn:mis-identity:read** or **idn:mis-account:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-all-counts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityAllCountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  &#x60;ownerId&#x60; is required. Use the identity ID of the owner, or &#x60;me&#x60; for the caller. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityAllCounts>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityAllCountsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **ownerId**: *eq*  &#x60;ownerId&#x60; is required. Use the identity ID of the owner, or &#x60;me&#x60; for the caller.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityAllCountsV1({ filters: filters }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-application-counts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get application counts
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. This version never counts
applications that have no risk severity, so `riskSeverity.unknown` is always `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityApplicationCountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityApplicationCounts>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityApplicationCountsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityApplicationCountsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-application-counts-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get application counts
This API returns tenant-wide summary counts for application machine identities: the total, unsanctioned
applications, applications discovered in the last 30 days, risk severity counts, and ownership coverage.

When agentic risk scoring is not enabled for the tenant, `riskSeverity` is `null`. When unclassified risk severity
counting is not enabled for the tenant, `riskSeverity.unknown` is `null`.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-application-counts-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityApplicationCountsV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityApplicationCounts>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityApplicationCountsV2(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityApplicationCountsV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-daily-counts-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get daily non-human entity counts
This API returns daily counts of machine identities, machine accounts, capabilities, and credentials for the tenant.
The window ends on the day before the current UTC date and covers the number of days set by `days`. The response
contains one entry per day. Days with no recorded counts have an empty `metrics` array.


[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-daily-counts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityDailyCountsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**days** | `number` | Number of days in the window. Values outside 1 to 90 return &#x60;400&#x60;. | [optional] [default to 30]
**entityType** | `'machine_identity' | 'machine_account' | 'capability' | 'credential'` | Return counts for this entity type only. Other values return &#x60;400&#x60;. | [optional] [default to undefined]
**subType** | `string` | Return counts for this subtype only. The value must exactly match a recorded subtype. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityDailyCounts>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityDailyCountsV1(): void {
    const days: number = ; // Number of days in the window. Values outside 1 to 90 return &#x60;400&#x60;. (optional)
    const entityType: string = ; // Return counts for this entity type only. Other values return &#x60;400&#x60;. (optional)
    const subType: string = ; // Return counts for this subtype only. The value must exactly match a recorded subtype. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityDailyCountsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityV1(): void {
    const id: string = ; // Machine Identity ID
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-machine-identity-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get machine identity details
This API returns a single machine identity using the Machine Identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-machine-identity-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMachineIdentityV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineidentityV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getMachineIdentityV2(): void {
    const id: string = ; // Machine Identity ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getMachineIdentityV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-ownership-correlation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get ownership correlation config
This end-point retrieves a single ownership correlation config by ID for the specified source resource.

[API Spec](https://developer.sailpoint.com/docs/api/get-ownership-correlation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetOwnershipCorrelationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**configId** | `string` | The correlation config ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CorrelationConfig>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getOwnershipCorrelationConfigV1(): void {
    const sourceId: string = ; // The Source ID.
    const resourceId: string = ; // The source resource ID (for example, account or aws:iam-role).
    const configId: string = ; // The correlation config ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getOwnershipCorrelationConfigV1({ sourceId: sourceId, resourceId: resourceId, configId: configId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-unsanctioned-anomaly-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get unsanctioned application anomaly summary
Returns aggregate counts (distinct agents, distinct owners, and total events) for anomalies of type **unsanctioned_app** across the tenant. Powers the Unsanctioned Agents card on the Agent Registry page.

[API Spec](https://developer.sailpoint.com/docs/api/get-unsanctioned-anomaly-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetUnsanctionedAnomalySummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<UnsanctionedApplicationAnomalySummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  getUnsanctionedAnomalySummaryV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getUnsanctionedAnomalySummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<MachineIdentityResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentitiesV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    this.api.listMachineIdentitiesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identities-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identities
This API returns a list of machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identities-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentitiesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return &#x60;400&#x60;.  &#x60;sessionCount&#x60;, &#x60;suspiciousSessionCount&#x60;, &#x60;entroId&#x60;, and &#x60;insights&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;entroId&#x60; is an exact, case-sensitive match. &#x60;insights&#x60; matches one whole array element and does not match a substring. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; treat null as not enriched; &#x60;0&#x60; is a real count. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  &#x60;entroId&#x60; and &#x60;insights&#x60; are not sortable. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. Null counts sort as not enriched, distinct from &#x60;0&#x60;. | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineidentityV2>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentitiesV2(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return &#x60;400&#x60;.  &#x60;sessionCount&#x60;, &#x60;suspiciousSessionCount&#x60;, &#x60;entroId&#x60;, and &#x60;insights&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;entroId&#x60; is an exact, case-sensitive match. &#x60;insights&#x60; matches one whole array element and does not match a substring. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; treat null as not enriched; &#x60;0&#x60; is a real count. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  &#x60;entroId&#x60; and &#x60;insights&#x60; are not sortable. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. Null counts sort as not enriched, distinct from &#x60;0&#x60;. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentitiesV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-accounts-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List linked machine accounts
This API returns the machine accounts that are linked to a machine identity. It supports the same filters and
sorters as the list machine accounts API, applied to the linked accounts only.

A caller who owns the machine identity can view its linked accounts. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-accounts-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityAccountsV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;compliance&#x60; and &#x60;complianceViolationsCount&#x60; are not filter fields. With unknown-severity enabled, a null stored severity matches &#x60;risk.severity eq \&quot;UNKNOWN\&quot;&#x60;. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. &#x60;compliance&#x60; is not sortable. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineAccount>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentityAccountsV2(): void {
    const id: string = ; // Machine Identity ID.
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **uuid**: *eq, in*  **description**: *eq, in, sw*  **machineIdentity.id**: *eq, in*  **machineIdentity.name**: *eq, in, sw*  **subtype.technicalName**: *eq, in, sw*  **subtype.displayName**: *eq, in, sw*  **accessType**: *eq, in, sw*  **environment**: *eq, in, sw*  **ownerIdentity**: *eq, in*  **ownerIdentity.id**: *eq, in*  **ownerIdentity.name**: *eq, in, sw*  **manuallyCorrelated**: *eq*  **enabled**: *eq*  **locked**: *eq*  **hasEntitlements**: *eq*  **attributes**: *eq*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **created**: *eq, gt, lt, ge, le*  **modified**: *eq, gt, lt, ge, le*  **risk.severity**: *eq, in*  **permissionLevel**: *eq, in*  **lastUsedAt**: *gt, lt, ge, le*  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;compliance&#x60; and &#x60;complianceViolationsCount&#x60; are not filter fields. With unknown-severity enabled, a null stored severity matches &#x60;risk.severity eq \&quot;UNKNOWN\&quot;&#x60;. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, nativeIdentity, ownerIdentity, uuid, description, machineIdentity.id, machineIdentity.name, subtype.technicalName, subtype.displayName, accessType, environment, manuallyCorrelated, enabled, locked, hasEntitlements, ownerIdentity.id, ownerIdentity.name, attributes, source.id, source.name, created, modified, risk.severity, permissionLevel, lastUsedAt**  &#x60;risk.severity&#x60;, &#x60;permissionLevel&#x60;, and &#x60;lastUsedAt&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. &#x60;risk.severity&#x60; sorts by rank (UNKNOWN, LOW, MEDIUM, HIGH, CRITICAL), not alphabetically. Null Entro values sort last. &#x60;compliance&#x60; is not sortable. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentityAccountsV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-anomalies-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity anomalies
Returns a paginated list of anomalies detected for the specified machine identity (agent).

Set **count=true** to populate the *X-Total-Count* response header with the total number of anomalies for the agent. Combine **limit=0** with **count=true** to retrieve only the count with an empty result body.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-anomalies-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityAnomaliesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine identity (agent) ID. |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<Anomaly>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentityAnomaliesV1(): void {
    const id: string = ; // Machine identity (agent) ID.
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    this.api.listMachineIdentityAnomaliesV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-capabilities-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity capabilities
This API returns all capabilities, such as MCP servers and tools, that are linked to a machine identity. The list
is not paginated.

A caller who owns the machine identity can view its linked capabilities. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-capabilities-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityCapabilitiesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<Machineidentitycapability>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentityCapabilitiesV2(): void {
    const id: string = ; // Machine Identity ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentityCapabilitiesV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-entitlements-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity entitlements
This API returns the entitlements held by the machine accounts that are linked to a machine identity.

A caller who owns the machine identity can view its entitlements. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-entitlements-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityEntitlementsV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  &#x60;sw&#x60; and &#x60;co&#x60; both match the value anywhere in the entitlement name. Combine filters with &#x60;and&#x60; and &#x60;or&#x60;. &#x60;not&#x60; is not supported and returns &#x60;400&#x60;. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<Machineidentityentitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentityEntitlementsV2(): void {
    const id: string = ; // Machine Identity ID.
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementName**: *eq, in, sw, co*  &#x60;sw&#x60; and &#x60;co&#x60; both match the value anywhere in the entitlement name. Combine filters with &#x60;and&#x60; and &#x60;or&#x60;. &#x60;not&#x60; is not supported and returns &#x60;400&#x60;. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **entitlementName** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentityEntitlementsV2({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-hostnames-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List AI agent hostnames
This API returns the distinct hostnames of AI agent machine identities, in ascending order. Hostnames are returned
in lowercase with accents removed.

The API pages with a cursor instead of an offset. To get the next page, pass the last hostname of the current page
as `cursor`. A page with fewer hostnames than `limit` is the last page.

A caller who owns AI agents can list the hostnames of those agents. Other callers need the
**idn:mis-identity:read** right.


[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-hostnames-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityHostnamesV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**prefix** | `string` | Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. | [optional] [default to undefined]
**limit** | `number` | Maximum number of hostnames to return. Values of &#x60;0&#x60; or more than &#x60;250&#x60; return &#x60;400&#x60;. | [optional] [default to 50]
**cursor** | `string` | Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns &#x60;400&#x60;. | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<string>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentityHostnamesV2(): void {
    const prefix: string = ; // Return only hostnames that start with this value. Matching ignores case and accents. A blank value is ignored. (optional)
    const limit: number = ; // Maximum number of hostnames to return. Values of &#x60;0&#x60; or more than &#x60;250&#x60; return &#x60;400&#x60;. (optional)
    const cursor: string = ; // Return only hostnames that sort after this value. Pass the last hostname of the previous page. Omit it for the first page. A blank value returns &#x60;400&#x60;. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentityHostnamesV2({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-machine-identity-user-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List machine identity\'s user entitlements
This API returns a list of user entitlements associated with machine identities.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-identity-user-entitlements-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMachineIdentityUserEntitlementsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<MachineIdentityUserEntitlementResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listMachineIdentityUserEntitlementsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    this.api.listMachineIdentityUserEntitlementsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-ownership-correlation-configs-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List ownership correlation configs
Returns the OWNER_PRIMARY and OWNER_SECONDARY correlation configs for the specified source resource, creating default rows if they are missing. Use the optional type query parameter to return a single matching config.

[API Spec](https://developer.sailpoint.com/docs/api/list-ownership-correlation-configs-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListOwnershipCorrelationConfigsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**type** | `'OWNER_PRIMARY' | 'OWNER_SECONDARY'` | When set, filters to the given config type. | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<CorrelationConfig>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  listOwnershipCorrelationConfigsV1(): void {
    const sourceId: string = ; // The Source ID.
    const resourceId: string = ; // The source resource ID (for example, account or aws:iam-role).
    const type: string = ; // When set, filters to the given config type. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listOwnershipCorrelationConfigsV1({ sourceId: sourceId, resourceId: resourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-ownership-correlation-config-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch ownership correlation config
Selectively updates an ownership correlation config using an RFC 6902 JSONPatch payload. Only replace on /attributes (full object) and replace on /rules (full array; merge by stable rule id, remove rules omitted from the array) are allowed.

[API Spec](https://developer.sailpoint.com/docs/api/patch-ownership-correlation-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchOwnershipCorrelationConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | The Source ID. |  [default to undefined]
**resourceId** | `string` | The source resource ID (for example, account or aws:iam-role). |  [default to undefined]
**configId** | `string` | The correlation config ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The JSONPatch payload used to update the correlation config. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<CorrelationConfig>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  patchOwnershipCorrelationConfigV1(): void {
    const sourceId: string = ; // The Source ID.
    const resourceId: string = ; // The source resource ID (for example, account or aws:iam-role).
    const configId: string = ; // The correlation config ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // The JSONPatch payload used to update the correlation config.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchOwnershipCorrelationConfigV1({ sourceId: sourceId, resourceId: resourceId, configId: configId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-machine-identity-aggregation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Start machine identity aggregation
Starts a machine identity (AI Agents) aggregation on the specified source.

[API Spec](https://developer.sailpoint.com/docs/api/start-machine-identity-aggregation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartMachineIdentityAggregationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**machineIdentityAggregationRequest** | `MachineIdentityAggregationRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityAggregationResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { MachineIdentityAggregationRequest } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  startMachineIdentityAggregationV1(): void {
    const sourceId: string = ; // Source ID.
    const machineIdentityAggregationRequest: MachineIdentityAggregationRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startMachineIdentityAggregationV1({ sourceId: sourceId, machineIdentityAggregationRequest: machineIdentityAggregationRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-identities-in-bulk-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk update machine identities
This API applies the same JSON Patch operations to up to 100 machine identities and returns a result for each
requested ID. Only `/description`, `/userEntitlements`, `/owners`, `/owners/primary`, and `/owners/secondary` can
be patched. Patching any other path returns `400`. When access requests for non-human identities are not enabled
for the tenant, a patch that changes `/userEntitlements` returns `403`.

The response is always `207` when the request is valid. Check the `status` of each result to see whether that
machine identity was updated.

A caller who owns a machine identity can update it. Other callers need the **idn:mis-identity:update** right.
For callers without that right, IDs of machine identities they do not own return a `404` result.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identities-in-bulk-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineIdentitiesInBulkV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**machineIdentityBulkUpdateRequest** | `MachineIdentityBulkUpdateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<MachineIdentityBulkResult>>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { MachineIdentityBulkUpdateRequest } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  updateMachineIdentitiesInBulkV2(): void {
    const machineIdentityBulkUpdateRequest: MachineIdentityBulkUpdateRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineIdentitiesInBulkV2({ machineIdentityBulkUpdateRequest: machineIdentityBulkUpdateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update machine identity details
Use this API to update machine identity details.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**requestBody** | `Array<object>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineIdentityResponse>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  updateMachineIdentityV1(): void {
    const id: string = ; // Machine Identity ID.
    const requestBody: Array<object> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineIdentityV1({ id: id, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-machine-identity-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Partial update of machine identity
Use this API to selectively update machine identity details using a JSONPatch payload.

Patchable fields include **name**, **description**, **nativeIdentity**, **subtype**, **environment**, **attributes**, **owners**, **userEntitlements**, **manuallyEdited**, and **businessApplicationRefs** (when Business Applications is enabled for the tenant).


When Business Applications is enabled for the tenant, `/businessApplicationRefs` may be replaced with at most one MANUAL Business Application
reference, or cleared with an empty array. Patching `/businessApplicationRefs` when Business Applications is not enabled returns `400`.
Existing `AUTOMATIC` correlations cannot be overridden (`400` / `ILLEGAL_UPDATE_ATTEMPT`). Unknown BA id returns `404`.


`entroId`, `insights`, `sessionCount`, and `suspiciousSessionCount` are read-only. A patch that targets them is rejected
with `400`; aggregation is the only writer. `entroRiskBand`, `agentSource`, and `integrationType` are not response fields.


[API Spec](https://developer.sailpoint.com/docs/api/update-machine-identity-v-2)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMachineIdentityV2RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Machine Identity ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<MachineidentityV2>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MachineIdentitiesService } from '@sailpoint/angular-sdk/machine_identities';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/machine_identities';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MachineIdentitiesService);

  updateMachineIdentityV2(): void {
    const id: string = ; // Machine Identity ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateMachineIdentityV2({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

