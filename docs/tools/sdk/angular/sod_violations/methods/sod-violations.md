# SODViolations

# SODViolationsService
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-violation-v1**](#get-violation-v1) | **GET** `/violations/v1/{id}` | Get policy violation by ID
[**list-my-violations-v1**](#list-my-violations-v1) | **GET** `/my-violations/v1` | List My Policy Violations
[**list-violations-v1**](#list-violations-v1) | **GET** `/violations/v1` | List Policy Violations
[**move-violation-v1**](#move-violation-v1) | **POST** `/violations/v1/{id}/reassign` | Reassign policy violation
[**start-apply-control-v1**](#start-apply-control-v1) | **POST** `/violations/v1/{id}/controls` | Apply control to violation
[**start-predict-sod-violations-v1**](#start-predict-sod-violations-v1) | **POST** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**start-violation-check-v1**](#start-violation-check-v1) | **POST** `/sod-violations/v1/check` | Check sod violations


## get-violation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get policy violation by ID
Returns a single policy violation by ID for the current tenant. Access is allowed if the caller has the read scope (`idn:sod-violation:read`) or is an owner of the violation (direct or via governance group). Returns 403 Forbidden if the violation exists but the caller has neither the read scope nor ownership. Returns 404 Not Found if the violation does not exist for the tenant.
Embedded references (`owner`, `target`, `policy`, and references inside `appliedControls`) use `ReferenceResponse`: `id` and `type` are always present; `name` is included when display metadata resolves.


[API Spec](https://developer.sailpoint.com/docs/api/get-violation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetViolationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the policy violation to fetch |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Policyviolationresponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  getViolationV1(): void {
    const id: string = ; // The ID of the policy violation to fetch
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getViolationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-my-violations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List My Policy Violations
Returns a paged list of policy violations where the current user is the owner (directly assigned or via a governance group they belong to). No permission scope is required; caller identity is required.
Supports the same collection parameters as GET /violations (limit, offset, count, filters, sorters), including the same filter field whitelist and processing (normalization, pruning of not-yet-persisted name predicates). The owner filter is implicit (current user); **do not** use `ownerId` in filters for this endpoint.
Embedded references in each violation follow `ReferenceResponse` (`id`, `type`, and optional `name` when metadata resolves).


[API Spec](https://developer.sailpoint.com/docs/api/list-my-violations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListMyViolationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). | [optional] [default to undefined]

### Return type

`Observable<Array<Policyviolationresponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  listMyViolationsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If omitted, default ordering matches GET /violations (created descending, then id descending). (optional)
    this.api.listMyViolationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-violations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Policy Violations
Returns a paged list of policy violations for the current tenant. Requires the read scope (idn:sod-violation:read).
This endpoint uses the standard collection parameters defined in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters/).
This endpoint supports standard V3 collection parameters: `limit`, `offset`, `count`, `filters`, and `sorters`.
Embedded references in each violation (`owner`, `target`, `policy`, and references inside `appliedControls`) follow the `ReferenceResponse` schema: `id` and `type` are always present; `name` is included when display metadata resolves.
Filters and sorters are validated against a fixed whitelist of fields to ensure safe queries and to align with underlying database indexes.


[API Spec](https://developer.sailpoint.com/docs/api/list-violations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListViolationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. | [optional] [default to undefined]

### Return type

`Observable<Array<Policyviolationresponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  listViolationsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, in*  **policyId**: *eq*  **ownerId**: *eq*  **level**: *eq, in*  **policyName**: *eq, in, sw, co*  **ownerName**: *eq, in, sw, co*  **targetName**: *eq, in, sw, co*  **targetId**: *eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **level**  Prefix a field with - for descending order, for example -level. If no sorters are provided, results default to created descending, then id descending. (optional)
    this.api.listViolationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## move-violation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Reassign policy violation
Reassigns the specified policy violation to a new owner. Callers without the `idn:sod-violation:manage` scope may only reassign violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/move-violation-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `MoveViolationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the policy violation to fetch |  [default to undefined]
**violationreassigninput** | `Violationreassigninput` | Data needed to reassign a Policy Violation | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Policyviolationresponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';
import { Violationreassigninput } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  moveViolationV1(): void {
    const id: string = ; // The ID of the policy violation to fetch
    const violationreassigninput: Violationreassigninput = ; // Data needed to reassign a Policy Violation
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.moveViolationV1({ id: id, violationreassigninput: violationreassigninput }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-apply-control-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Apply control to violation
Applies a compensating control to the specified policy violation. Callers without the `idn:sod-violation:manage` scope may only apply a control to violations they own (directly, or via a governance group they belong to).

[API Spec](https://developer.sailpoint.com/docs/api/start-apply-control-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartApplyControlV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the policy violation to fetch |  [default to undefined]
**appliedcontrolcreate** | `Appliedcontrolcreate` | Data needed to apply a control to a Policy Violation | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Appliedcontrol>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';
import { Appliedcontrolcreate } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  startApplyControlV1(): void {
    const id: string = ; // The ID of the policy violation to fetch
    const appliedcontrolcreate: Appliedcontrolcreate = ; // Data needed to apply a control to a Policy Violation
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.startApplyControlV1({ id: id, appliedcontrolcreate: appliedcontrolcreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-predict-sod-violations-v1
Predict sod violations for identity.
This API is used to check if granting some additional accesses (entitlements, access profiles, or roles) would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/start-predict-sod-violations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartPredictSodViolationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityWithNewAccess** | `IdentityWithNewAccess` |  | 

### Return type

`Observable<ViolationPrediction>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';
import { IdentityWithNewAccess } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  startPredictSodViolationsV1(): void {
    const identityWithNewAccess: IdentityWithNewAccess = ; // 
    this.api.startPredictSodViolationsV1({ identityWithNewAccess: identityWithNewAccess }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## start-violation-check-v1
Check sod violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/start-violation-check-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `StartViolationCheckV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityWithNewAccess** | `IdentityWithNewAccess` |  | 

### Return type

`Observable<SodViolationCheck>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SODViolationsService } from '@sailpoint/angular-sdk/sod_violations';
import { IdentityWithNewAccess } from '@sailpoint/angular-sdk/sod_violations';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SODViolationsService);

  startViolationCheckV1(): void {
    const identityWithNewAccess: IdentityWithNewAccess = ; // 
    this.api.startViolationCheckV1({ identityWithNewAccess: identityWithNewAccess }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

