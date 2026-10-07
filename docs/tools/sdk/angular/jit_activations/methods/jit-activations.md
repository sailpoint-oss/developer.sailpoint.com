# JITActivations

# JITActivationsService
  Use this API to start and manage Just-In-Time (JIT) Privileged activation workflows for entitlement connections,
and to search activation history.

OAuth scopes: **idn:jit-activation-workflow:*** (activate, extend, deactivate, manage) for workflow APIs.
**idn:jit-activation-history:read** (admin history view) and **idn:jit-activation-history-self:read** (self history view).
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-jit-activation-history-for-current-identity-v1**](#list-jit-activation-history-for-current-identity-v1) | **GET** `/jit-activation-history/v1/current-identity` | List JIT activation history (self)
[**list-jit-activation-history-v1**](#list-jit-activation-history-v1) | **GET** `/jit-activation-history/v1` | List JIT activation history (admin)
[**start-activate-workflow-v1**](#start-activate-workflow-v1) | **POST** `/jit-activations/v1/activate` | Start JIT activation workflow
[**start-deactivate-workflow-v1**](#start-deactivate-workflow-v1) | **POST** `/jit-activations/v1/deactivate` | Deactivate JIT activation workflow
[**start-extend-workflow-v1**](#start-extend-workflow-v1) | **POST** `/jit-activations/v1/extend` | Extend JIT activation workflow


## list-jit-activation-history-for-current-identity-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List JIT activation history (self)
Returns JIT activation history records for the authenticated identity only.

This is the self-service view - results are automatically scoped to the calling identity.
Requires `idn:jit-activation-history-self:read`.

Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.


[API Spec](https://developer.sailpoint.com/docs/api/list-jit-activation-history-for-current-identity-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListJitActivationHistoryForCurrentIdentityV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). | [optional] [default to undefined]
**searchAfter** | `string` | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter&#x3D;2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&amp;sorters&#x3D;activationInitiated,id | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<Jitactivationhistorydocument>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITActivationsService } from '@sailpoint/angular-sdk/jit_activations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITActivationsService);

  listJitActivationHistoryForCurrentIdentityV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional)
    const searchAfter: string = ; // Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter&#x3D;2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&amp;sorters&#x3D;activationInitiated,id (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listJitActivationHistoryForCurrentIdentityV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-jit-activation-history-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List JIT activation history (admin)
Returns JIT activation history records for the tenant.

This is the admin/operator view - it returns activations across all identities in the tenant.
Requires `idn:jit-activation-history:read`.

Returns HTTP 403 when the `PSPM_858_JIT_ACCESS_ACTIVATION_HISTORY_SEARCH` feature flag is disabled.


[API Spec](https://developer.sailpoint.com/docs/api/list-jit-activation-history-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListJitActivationHistoryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). | [optional] [default to undefined]
**searchAfter** | `string` | Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter&#x3D;2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&amp;sorters&#x3D;activationInitiated,id | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<Jitactivationhistorydocument>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITActivationsService } from '@sailpoint/angular-sdk/jit_activations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITActivationsService);

  listJitActivationHistoryV1(): void {
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **activationInitiated, provisionCompleted, status**  Default sort is **-activationInitiated** (newest first). (optional)
    const searchAfter: string = ; // Used to begin the search window at the values specified. This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters. Used to paginate beyond the offset limit of 10,000.  It is recommended to always include the ID of the object in addition to any other sort fields to ensure no duplicate results while paging.  For example, if sorting by activationInitiated you will also want to include ID: searchAfter&#x3D;2026-07-08T14:33:52.029Z,367fb802-1026-1835-a619-11a56e4c5be3&amp;sorters&#x3D;activationInitiated,id (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identityId**: *eq, in*  **entitlementId**: *eq, in*  **sourceId**: *eq*  **connectionId**: *eq*  **status**: *eq, in*  **activationInitiated**: *gt, lt, ge, le*  **policyFrictionOutcome**: *eq, in* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listJitActivationHistoryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-activate-workflow-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Start JIT activation workflow
Starts a JIT Privileged (JIT P) activation workflow for the given entitlement connection and duration.
The service performs quick validation; the workflow performs additional validation.

The response is returned with HTTP 202 Accepted while the workflow initializes.


[API Spec](https://developer.sailpoint.com/docs/api/start-activate-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartActivateWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitActivationActivateRequest** | `JitActivationActivateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<JitActivationActivateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITActivationsService } from '@sailpoint/angular-sdk/jit_activations';
import { JitActivationActivateRequest } from '@sailpoint/angular-sdk/jit_activations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITActivationsService);

  startActivateWorkflowV1(): void {
    const jitActivationActivateRequest: JitActivationActivateRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startActivateWorkflowV1({ jitActivationActivateRequest: jitActivationActivateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-deactivate-workflow-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Deactivate JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to deactivate.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-deactivate-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartDeactivateWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitActivationDeactivateRequest** | `JitActivationDeactivateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<JitActivationDeactivateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITActivationsService } from '@sailpoint/angular-sdk/jit_activations';
import { JitActivationDeactivateRequest } from '@sailpoint/angular-sdk/jit_activations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITActivationsService);

  startDeactivateWorkflowV1(): void {
    const jitActivationDeactivateRequest: JitActivationDeactivateRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startDeactivateWorkflowV1({ jitActivationDeactivateRequest: jitActivationDeactivateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-extend-workflow-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Extend JIT activation workflow
Sends a signal to a running JIT Privileged (JIT P) activation workflow to extend the activation period
by the requested number of minutes.

This request cannot be applied to a workflow that does not exist or whose execution has already completed.
The client receives an error response in those cases.

The response is returned with HTTP 202 Accepted after the signal is sent.


[API Spec](https://developer.sailpoint.com/docs/api/start-extend-workflow-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartExtendWorkflowV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jitActivationExtendRequest** | `JitActivationExtendRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<JitActivationExtendResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { JITActivationsService } from '@sailpoint/angular-sdk/jit_activations';
import { JitActivationExtendRequest } from '@sailpoint/angular-sdk/jit_activations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(JITActivationsService);

  startExtendWorkflowV1(): void {
    const jitActivationExtendRequest: JitActivationExtendRequest = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startExtendWorkflowV1({ jitActivationExtendRequest: jitActivationExtendRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

