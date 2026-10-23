# MachineIdentities

# MachineIdentitiesService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-identity-v1**](#create-machine-identity-v1) | **POST** `/machine-identities/v1` | Create machine identity
[**create-machine-identity-v2**](#create-machine-identity-v2) | **POST** `/machine-identities/v2` | Create machine identity
[**delete-machine-identity-v1**](#delete-machine-identity-v1) | **DELETE** `/machine-identities/v1/{id}` | Delete machine identity
[**delete-machine-identity-v2**](#delete-machine-identity-v2) | **DELETE** `/machine-identities/v2/{id}` | Delete machine identity
[**delete-ownership-correlation-config-v1**](#delete-ownership-correlation-config-v1) | **DELETE** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Delete ownership correlation config
[**get-machine-identity-v1**](#get-machine-identity-v1) | **GET** `/machine-identities/v1/{id}` | Get machine identity details
[**get-machine-identity-v2**](#get-machine-identity-v2) | **GET** `/machine-identities/v2/{id}` | Get machine identity details
[**get-ownership-correlation-config-v1**](#get-ownership-correlation-config-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Get ownership correlation config
[**get-unsanctioned-anomaly-summary-v1**](#get-unsanctioned-anomaly-summary-v1) | **GET** `/machine-identities/v1/anomaly-summaries/unsanctioned` | Get unsanctioned application anomaly summary
[**list-machine-identities-v1**](#list-machine-identities-v1) | **GET** `/machine-identities/v1` | List machine identities
[**list-machine-identities-v2**](#list-machine-identities-v2) | **GET** `/machine-identities/v2` | List machine identities
[**list-machine-identity-anomalies-v1**](#list-machine-identity-anomalies-v1) | **GET** `/machine-identities/v1/{id}/anomalies` | List machine identity anomalies
[**list-machine-identity-user-entitlements-v1**](#list-machine-identity-user-entitlements-v1) | **GET** `/machine-identity-user-entitlements/v1` | List machine identity\&#39;s user entitlements
[**list-ownership-correlation-configs-v1**](#list-ownership-correlation-configs-v1) | **GET** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs` | List ownership correlation configs
[**patch-ownership-correlation-config-v1**](#patch-ownership-correlation-config-v1) | **PATCH** `/sources/v1/{sourceId}/resources/{resourceId}/correlation-configs/{configId}` | Patch ownership correlation config
[**start-machine-identity-aggregation-v1**](#start-machine-identity-aggregation-v1) | **POST** `/sources/v1/{sourceId}/aggregate-agents` | Start machine identity aggregation
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
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

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
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **cisIdentityId**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **source.name**: *eq, in, sw*  **source.id**: *eq, in*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
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
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return &#x60;400&#x60;.  &#x60;sessionCount&#x60;, &#x60;suspiciousSessionCount&#x60;, &#x60;entroId&#x60;, and &#x60;insights&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;entroId&#x60; is an exact, case-sensitive match. &#x60;insights&#x60; matches one whole array element and does not match a substring. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; treat null as not enriched; &#x60;0&#x60; is a real count. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  &#x60;entroId&#x60; and &#x60;insights&#x60; are not sortable. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. Null counts sort as not enriched, distinct from &#x60;0&#x60;. | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
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
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **displayName**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **attributes**: *eq*  **manuallyEdited**: *eq*  **subtype**: *eq, in*  **owners.primaryIdentity.id**: *eq, in, sw*  **owners.primaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryIdentity.id**: *eq, in, sw*  **owners.secondaryIdentity.name**: *eq, in, isnull, pr*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, isnull, pr*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **risk.severity**: *eq, in*  **businessApplicationRefs.id**: *eq*  **effectiveSanctionedStatus**: *eq*  **sessionCount**: *eq, gt, ge, lt, le, isnull*  **suspiciousSessionCount**: *eq, gt, ge, lt, le, isnull*  **entroId**: *eq*  **insights**: *eq*  Business Application filters require Business Applications to be enabled for the tenant. Filter values are case-sensitive. When Business Applications is not enabled, these filters are not allowed and return &#x60;400&#x60;.  &#x60;sessionCount&#x60;, &#x60;suspiciousSessionCount&#x60;, &#x60;entroId&#x60;, and &#x60;insights&#x60; require Entro enrichment to be enabled for the tenant. When it is not, those filters return &#x60;400&#x60;. &#x60;entroId&#x60; is an exact, case-sensitive match. &#x60;insights&#x60; matches one whole array element and does not match a substring. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; treat null as not enriched; &#x60;0&#x60; is a real count. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **nativeIdentity, name, owners.primaryIdentity.name, source.name, created, modified, sessionCount, suspiciousSessionCount**  &#x60;entroId&#x60; and &#x60;insights&#x60; are not sortable. &#x60;sessionCount&#x60; and &#x60;suspiciousSessionCount&#x60; require Entro enrichment to be enabled; otherwise those sorters return &#x60;400&#x60;. Null counts sort as not enriched, distinct from &#x60;0&#x60;. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listMachineIdentitiesV2({  }).subscribe({
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
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

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
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **detectedAt**  The default sort is **-detectedAt** (most recent first). (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listMachineIdentityAnomaliesV1({ id: id }).subscribe({
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
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

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
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **machineIdentityId**: *eq, in*  **machineIdentityName**: *eq, in, sw*  **entitlement.id**: *eq, in*  **entitlement.name**: *eq, in, sw*  **source.id**: *eq, in*  **source.name**: *eq, in, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **machineIdentityName, entitlement.name, source.name** (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
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
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
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
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
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

