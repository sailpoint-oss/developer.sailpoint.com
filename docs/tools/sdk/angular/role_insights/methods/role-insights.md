# RoleInsights

# RoleInsightsService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-role-insight-requests-v1**](#create-role-insight-requests-v1) | **POST** `/role-insights/v1/requests` | Generate insights for roles
[**download-role-insights-entitlements-changes-v1**](#download-role-insights-entitlements-changes-v1) | **GET** `/role-insights/v1/{insightId}/entitlement-changes/download` | Download entitlement insights for a role
[**get-entitlement-changes-identities-v1**](#get-entitlement-changes-identities-v1) | **GET** `/role-insights/v1/{insightId}/entitlement-changes/{entitlementId}/identities` | Get identities for a suggested entitlement (for a role)
[**get-role-insight-v1**](#get-role-insight-v1) | **GET** `/role-insights/v1/{insightId}` | Get a single role insight
[**get-role-insights-current-entitlements-v1**](#get-role-insights-current-entitlements-v1) | **GET** `/role-insights/v1/{insightId}/current-entitlements` | Get current entitlement for a role
[**get-role-insights-entitlements-changes-v1**](#get-role-insights-entitlements-changes-v1) | **GET** `/role-insights/v1/{insightId}/entitlement-changes` | Get entitlement insights for a role
[**get-role-insights-requests-v1**](#get-role-insights-requests-v1) | **GET** `/role-insights/v1/requests/{id}` | Returns metadata from prior request.
[**get-role-insights-summary-v1**](#get-role-insights-summary-v1) | **GET** `/role-insights/v1/summary` | Get role insights summary information
[**get-role-insights-v1**](#get-role-insights-v1) | **GET** `/role-insights/v1` | Get role insights


## create-role-insight-requests-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Generate insights for roles
Submits a create role insights request to the role insights application. At this time there are no parameters. All business roles will be processed for the customer.

[API Spec](https://developer.sailpoint.com/docs/api/create-role-insight-requests-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateRoleInsightRequestsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleInsightsResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  createRoleInsightRequestsV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createRoleInsightRequestsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## download-role-insights-entitlements-changes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Download entitlement insights for a role
This endpoint returns the entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/download-role-insights-entitlements-changes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DownloadRoleInsightsEntitlementsChangesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/csv, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  downloadRoleInsightsEntitlementsChangesV1(): void {
    const insightId: string = ; // The role insight id
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess**  The default sort is **identitiesWithAccess** in descending order. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.downloadRoleInsightsEntitlementsChangesV1({ insightId: insightId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-entitlement-changes-identities-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get identities for a suggested entitlement (for a role)
Role insights suggests entitlements to be added for a role. This endpoint returns a list of identities in the role, with or without the entitlements, for a suggested entitlement so that the user can see which identities would be affected if the suggested entitlement were to be added to the role.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-changes-identities-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetEntitlementChangesIdentitiesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**entitlementId** | `string` | The entitlement id |  [default to undefined]
**hasEntitlement** | `boolean` | Identity has this entitlement or not | [optional] [default to false]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleInsightsIdentities>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getEntitlementChangesIdentitiesV1(): void {
    const insightId: string = ; // The role insight id
    const entitlementId: string = ; // The entitlement id
    const hasEntitlement: boolean = ; // Identity has this entitlement or not (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getEntitlementChangesIdentitiesV1({ insightId: insightId, entitlementId: entitlementId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-insight-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a single role insight
This endpoint gets role insights information for a role.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-insight-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleInsightV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleInsight>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getRoleInsightV1(): void {
    const insightId: string = ; // The role insight id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleInsightV1({ insightId: insightId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-insights-current-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get current entitlement for a role
This endpoint gets the entitlements for a role. The term "current" is to distinguish from the entitlement(s) an insight might recommend adding.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-insights-current-entitlements-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleInsightsCurrentEntitlementsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleInsightsEntitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getRoleInsightsCurrentEntitlementsV1(): void {
    const insightId: string = ; // The role insight id
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleInsightsCurrentEntitlementsV1({ insightId: insightId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-insights-entitlements-changes-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get entitlement insights for a role
This endpoint returns entitlement insights for a role.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-insights-entitlements-changes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleInsightsEntitlementsChangesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**insightId** | `string` | The role insight id |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleInsightsEntitlementChanges>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getRoleInsightsEntitlementsChangesV1(): void {
    const insightId: string = ; // The role insight id
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitiesWithAccess, name** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **description**: *sw* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleInsightsEntitlementsChangesV1({ insightId: insightId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-insights-requests-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Returns metadata from prior request.
This endpoint returns details of a prior role insights request. 

[API Spec](https://developer.sailpoint.com/docs/api/get-role-insights-requests-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleInsightsRequestsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The role insights request id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleInsightsResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getRoleInsightsRequestsV1(): void {
    const id: string = ; // The role insights request id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleInsightsRequestsV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-insights-summary-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get role insights summary information
This method returns high level summary information for role insights for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-insights-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleInsightsSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleInsightsSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getRoleInsightsSummaryV1(): void {
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleInsightsSummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-insights-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get role insights
This method returns detailed role insights for each role.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-insights-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleInsightsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleInsight>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { RoleInsightsService } from '@sailpoint/angular-sdk/role_insights';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(RoleInsightsService);

  getRoleInsightsV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **numberOfUpdates, identitiesWithAccess, totalNumberOfIdentities** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw*  **ownerName**: *sw*  **description**: *sw* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleInsightsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

