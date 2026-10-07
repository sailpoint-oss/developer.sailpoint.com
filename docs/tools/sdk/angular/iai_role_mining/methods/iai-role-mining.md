# IAIRoleMining

# IAIRoleMiningService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-potential-role-provision-request-v1**](#create-potential-role-provision-request-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/provision` | Create request to provision a potential role into an actual role.
[**create-role-mining-sessions-v1**](#create-role-mining-sessions-v1) | **POST** `/role-mining-sessions/v1` | Create a role mining session
[**download-role-mining-potential-role-zip-v1**](#download-role-mining-potential-role-zip-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}/download` | Export (download) details for a potential role in a role mining session
[**export-role-mining-potential-role-async-v1**](#export-role-mining-potential-role-async-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async` | Asynchronously export details for a potential role in a role mining session and upload to S3
[**export-role-mining-potential-role-status-v1**](#export-role-mining-potential-role-status-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export-async/{exportId}` | Retrieve status of a potential role export job
[**export-role-mining-potential-role-v1**](#export-role-mining-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/export` | Export (download) details for a potential role in a role mining session
[**get-all-potential-role-summaries-v1**](#get-all-potential-role-summaries-v1) | **GET** `/role-mining-potential-roles/v1` | Retrieves all potential role summaries
[**get-entitlement-distribution-potential-role-v1**](#get-entitlement-distribution-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularity-distribution` | Retrieves entitlement popularity distribution for a potential role in a role mining session
[**get-entitlements-potential-role-v1**](#get-entitlements-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/entitlement-popularities` | Retrieves entitlements for a potential role in a role mining session
[**get-excluded-entitlements-potential-role-v1**](#get-excluded-entitlements-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/excluded-entitlements` | Retrieves excluded entitlements for a potential role in a role mining session
[**get-identities-potential-role-v1**](#get-identities-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/identities` | Retrieves identities for a potential role in a role mining session
[**get-potential-role-applications-v1**](#get-potential-role-applications-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/applications` | Retrieves the applications of a potential role for a role mining session
[**get-potential-role-entitlements-v1**](#get-potential-role-entitlements-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}/entitlements` | Retrieves the entitlements of a potential role for a role mining session
[**get-potential-role-source-identity-usage-v1**](#get-potential-role-source-identity-usage-v1) | **GET** `/role-mining-potential-roles/v1/{potentialRoleId}/sources/{sourceId}/identityUsage` | Retrieves potential role source usage
[**get-potential-role-summaries-v1**](#get-potential-role-summaries-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries` | Retrieves all potential role summaries
[**get-potential-role-v1**](#get-potential-role-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-potential-role-v1**](#get-role-mining-potential-role-v1) | **GET** `/role-mining-potential-roles/v1/{potentialRoleId}` | Retrieves a specific potential role
[**get-role-mining-session-status-v1**](#get-role-mining-session-status-v1) | **GET** `/role-mining-sessions/v1/{sessionId}/status` | Get role mining session status state
[**get-role-mining-session-v1**](#get-role-mining-session-v1) | **GET** `/role-mining-sessions/v1/{sessionId}` | Get a role mining session
[**get-role-mining-sessions-v1**](#get-role-mining-sessions-v1) | **GET** `/role-mining-sessions/v1` | Retrieves all role mining sessions
[**get-saved-potential-roles-v1**](#get-saved-potential-roles-v1) | **GET** `/role-mining-potential-roles/v1/saved` | Retrieves all saved potential roles
[**patch-potential-role-session-v1**](#patch-potential-role-session-v1) | **PATCH** `/role-mining-sessions/v1/{sessionId}/potential-role-summaries/{potentialRoleId}` | Update a potential role session
[**patch-potential-role-v1**](#patch-potential-role-v1) | **PATCH** `/role-mining-potential-roles/v1/{potentialRoleId}` | Update a potential role
[**patch-role-mining-session-v1**](#patch-role-mining-session-v1) | **PATCH** `/role-mining-sessions/v1/{sessionId}` | Patch a role mining session
[**update-entitlements-potential-role-v1**](#update-entitlements-potential-role-v1) | **POST** `/role-mining-sessions/v1/{sessionId}/potential-roles/{potentialRoleId}/edit-entitlements` | Edit entitlements for a potential role to exclude some entitlements


## create-potential-role-provision-request-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create request to provision a potential role into an actual role.
This method starts a job to provision a potential role

[API Spec](https://developer.sailpoint.com/docs/api/create-potential-role-provision-request-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreatePotentialRoleProvisionRequestV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**minEntitlementPopularity** | `number` | Minimum popularity required for an entitlement to be included in the provisioned role. | [optional] [default to 0]
**includeCommonAccess** | `boolean` | Boolean determining whether common access entitlements will be included in the provisioned role. | [optional] [default to true]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**roleMiningPotentialRoleProvisionRequest** | `RoleMiningPotentialRoleProvisionRequest` | Required information to create a new role | [optional]

### Return type

`Observable<RoleMiningPotentialRoleSummary>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { RoleMiningPotentialRoleProvisionRequest } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  createPotentialRoleProvisionRequestV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const minEntitlementPopularity: number = ; // Minimum popularity required for an entitlement to be included in the provisioned role. (optional)
    const includeCommonAccess: boolean = ; // Boolean determining whether common access entitlements will be included in the provisioned role. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const roleMiningPotentialRoleProvisionRequest: RoleMiningPotentialRoleProvisionRequest = ; // Required information to create a new role (optional)
    this.api.createPotentialRoleProvisionRequestV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-role-mining-sessions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a role mining session
This submits a create role mining session request to the role mining application.

[API Spec](https://developer.sailpoint.com/docs/api/create-role-mining-sessions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateRoleMiningSessionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**roleMiningSessionDto** | `RoleMiningSessionDto` | Role mining session parameters | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningSessionResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { RoleMiningSessionDto } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  createRoleMiningSessionsV1(): void {
    const roleMiningSessionDto: RoleMiningSessionDto = ; // Role mining session parameters
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createRoleMiningSessionsV1({ roleMiningSessionDto: roleMiningSessionDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## download-role-mining-potential-role-zip-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Export (download) details for a potential role in a role mining session
This endpoint downloads a completed export of information for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/download-role-mining-potential-role-zip-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DownloadRoleMiningPotentialRoleZipV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**exportId** | `string` | The id of a previously run export job for this potential role |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Blob>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  downloadRoleMiningPotentialRoleZipV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const exportId: string = ; // The id of a previously run export job for this potential role
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.downloadRoleMiningPotentialRoleZipV1({ sessionId: sessionId, potentialRoleId: potentialRoleId, exportId: exportId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## export-role-mining-potential-role-async-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Asynchronously export details for a potential role in a role mining session and upload to S3
This endpoint uploads all the information for a potential role in a role mining session to S3 as a downloadable zip archive.  Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/export-role-mining-potential-role-async-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportRoleMiningPotentialRoleAsyncV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]
**roleMiningPotentialRoleExportRequest** | `RoleMiningPotentialRoleExportRequest` |  | [optional]

### Return type

`Observable<RoleMiningPotentialRoleExportResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { RoleMiningPotentialRoleExportRequest } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  exportRoleMiningPotentialRoleAsyncV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    const roleMiningPotentialRoleExportRequest: RoleMiningPotentialRoleExportRequest = ; //  (optional)
    this.api.exportRoleMiningPotentialRoleAsyncV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## export-role-mining-potential-role-status-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieve status of a potential role export job
This endpoint retrieves information about the current status of a potential role export.

[API Spec](https://developer.sailpoint.com/docs/api/export-role-mining-potential-role-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportRoleMiningPotentialRoleStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**exportId** | `string` | The id of a previously run export job for this potential role |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningPotentialRoleExportResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  exportRoleMiningPotentialRoleStatusV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const exportId: string = ; // The id of a previously run export job for this potential role
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.exportRoleMiningPotentialRoleStatusV1({ sessionId: sessionId, potentialRoleId: potentialRoleId, exportId: exportId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## export-role-mining-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Export (download) details for a potential role in a role mining session
This endpoint downloads all the information for a potential role in a role mining session. Includes identities and entitlements in the potential role.

[API Spec](https://developer.sailpoint.com/docs/api/export-role-mining-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportRoleMiningPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Blob>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  exportRoleMiningPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.exportRoleMiningPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-all-potential-role-summaries-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves all potential role summaries
Returns all potential role summaries that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/get-all-potential-role-summaries-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAllPotentialRoleSummariesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningPotentialRoleSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getAllPotentialRoleSummariesV1(): void {
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate, identityCount, entitlementCount, freshness, quality** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co, ge, gt, le, lt*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq, ge, gt, le, lt*  **scopingMethod**: *eq*  **sessionState**: *eq*  **identityAttribute**: *co* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getAllPotentialRoleSummariesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-entitlement-distribution-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves entitlement popularity distribution for a potential role in a role mining session
This method returns entitlement popularity distribution for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-distribution-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetEntitlementDistributionPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**includeCommonAccess** | `boolean` | Boolean determining whether common access entitlements will be included or not | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<{ [key: string]: number; }>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getEntitlementDistributionPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const includeCommonAccess: boolean = ; // Boolean determining whether common access entitlements will be included or not (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getEntitlementDistributionPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-entitlements-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves entitlements for a potential role in a role mining session
This method returns entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlements-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetEntitlementsPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**includeCommonAccess** | `boolean` | Boolean determining whether common access entitlements will be included or not | [optional] [default to true]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningEntitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getEntitlementsPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const includeCommonAccess: boolean = ; // Boolean determining whether common access entitlements will be included or not (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity, entitlementName, applicationName**  The default sort is **popularity** in descending order.  (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getEntitlementsPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-excluded-entitlements-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves excluded entitlements for a potential role in a role mining session
This method returns excluded entitlements for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-excluded-entitlements-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetExcludedEntitlementsPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningEntitlement>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getExcludedEntitlementsPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **popularity** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw*  **entitlementRef.name**: *sw* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getExcludedEntitlementsPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identities-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves identities for a potential role in a role mining session
This method returns identities for a potential role in a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-identities-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentitiesPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningIdentity>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getIdentitiesPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *sw* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getIdentitiesPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-potential-role-applications-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves the applications of a potential role for a role mining session
This method returns the applications of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-potential-role-applications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPotentialRoleApplicationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningPotentialRoleApplication>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getPotentialRoleApplicationsV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **applicationName**: *sw* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPotentialRoleApplicationsV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-potential-role-entitlements-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves the entitlements of a potential role for a role mining session
This method returns the entitlements of a potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-potential-role-entitlements-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPotentialRoleEntitlementsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningPotentialRoleEntitlements>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getPotentialRoleEntitlementsV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **entitlementRef.name**: *sw* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPotentialRoleEntitlementsV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-potential-role-source-identity-usage-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves potential role source usage
This method returns source usageCount (as number of days in the last 90 days) for each identity in a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/get-potential-role-source-identity-usage-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPotentialRoleSourceIdentityUsageV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**potentialRoleId** | `string` | A potential role id |  [default to undefined]
**sourceId** | `string` | A source id |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningPotentialRoleSourceUsage>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getPotentialRoleSourceIdentityUsageV1(): void {
    const potentialRoleId: string = ; // A potential role id
    const sourceId: string = ; // A source id
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **displayName, email, usageCount** (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPotentialRoleSourceIdentityUsageV1({ potentialRoleId: potentialRoleId, sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-potential-role-summaries-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves all potential role summaries
This method returns the potential role summaries for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-potential-role-summaries-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPotentialRoleSummariesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningPotentialRoleSummary>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getPotentialRoleSummariesV1(): void {
    const sessionId: string = ; // The role mining session id
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdDate** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **createdById**: *eq, sw, co*  **createdByName**: *eq, sw, co*  **description**: *sw, co*  **endDate**: *le, lt*  **freshness**: *eq, ge, gt, le, lt*  **name**: *eq, sw, co*  **quality**: *eq, ge, gt, le, lt*  **startDate**: *ge, gt*  **saved**: *eq*  **type**: *eq* (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPotentialRoleSummariesV1({ sessionId: sessionId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves a specific potential role
This method returns a specific potential role for a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningPotentialRole>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-mining-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves a specific potential role
This method returns a specific potential role.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-mining-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleMiningPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**potentialRoleId** | `string` | A potential role id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningPotentialRole>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getRoleMiningPotentialRoleV1(): void {
    const potentialRoleId: string = ; // A potential role id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleMiningPotentialRoleV1({ potentialRoleId: potentialRoleId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-mining-session-status-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get role mining session status state
This method returns a role mining session status for a customer.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-mining-session-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleMiningSessionStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningSessionStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getRoleMiningSessionStatusV1(): void {
    const sessionId: string = ; // The role mining session id
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleMiningSessionStatusV1({ sessionId: sessionId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-mining-session-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a role mining session
The method retrieves a role mining session.

[API Spec](https://developer.sailpoint.com/docs/api/get-role-mining-session-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleMiningSessionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id to be retrieved. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningSessionResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getRoleMiningSessionV1(): void {
    const sessionId: string = ; // The role mining session id to be retrieved.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleMiningSessionV1({ sessionId: sessionId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-role-mining-sessions-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves all role mining sessions
Returns all role mining sessions that match the query parameters

[API Spec](https://developer.sailpoint.com/docs/api/get-role-mining-sessions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetRoleMiningSessionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningSessionDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getRoleMiningSessionsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **saved**: *eq*  **name**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **createdBy, createdDate** (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getRoleMiningSessionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-saved-potential-roles-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Retrieves all saved potential roles
This method returns all saved potential roles (draft roles).

[API Spec](https://developer.sailpoint.com/docs/api/get-saved-potential-roles-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSavedPotentialRolesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<RoleMiningSessionDraftRoleDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  getSavedPotentialRolesV1(): void {
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters/) Sorting is supported for the following fields: **modified** (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getSavedPotentialRolesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-potential-role-session-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a potential role session
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/patch-potential-role-session-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchPotentialRoleSessionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | The potential role summary id |  [default to undefined]
**jsonPatchOperationRoleMining** | `Array<JsonPatchOperationRoleMining>` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { JsonPatchOperationRoleMining } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  patchPotentialRoleSessionV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // The potential role summary id
    const jsonPatchOperationRoleMining: Array<JsonPatchOperationRoleMining> = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchPotentialRoleSessionV1({ sessionId: sessionId, potentialRoleId: potentialRoleId, jsonPatchOperationRoleMining: jsonPatchOperationRoleMining }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a potential role
The method updates an existing potential role using.

The following fields can be modified:

* `description`

* `name`

* `saved`


>**NOTE: All other fields cannot be modified.**


[API Spec](https://developer.sailpoint.com/docs/api/patch-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | The potential role summary id |  [default to undefined]
**jsonPatchOperationRoleMining** | `Array<JsonPatchOperationRoleMining>` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { JsonPatchOperationRoleMining } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  patchPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // The potential role summary id
    const jsonPatchOperationRoleMining: Array<JsonPatchOperationRoleMining> = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId, jsonPatchOperationRoleMining: jsonPatchOperationRoleMining }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-role-mining-session-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Patch a role mining session
The  method updates an existing role mining session using PATCH. Supports op in \{"replace"\} and changes to pruneThreshold and/or minNumIdentitiesInPotentialRole. The potential roles in this role mining session is then re-calculated.

[API Spec](https://developer.sailpoint.com/docs/api/patch-role-mining-session-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchRoleMiningSessionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id to be patched |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  patchRoleMiningSessionV1(): void {
    const sessionId: string = ; // The role mining session id to be patched
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // Replace pruneThreshold and/or minNumIdentitiesInPotentialRole in role mining session. Update saved status or saved name for a role mining session.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchRoleMiningSessionV1({ sessionId: sessionId, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-entitlements-potential-role-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Edit entitlements for a potential role to exclude some entitlements
This endpoint adds or removes entitlements from an exclusion list for a potential role.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-potential-role-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateEntitlementsPotentialRoleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sessionId** | `string` | The role mining session id |  [default to undefined]
**potentialRoleId** | `string` | A potential role id in a role mining session |  [default to undefined]
**roleMiningPotentialRoleEditEntitlements** | `RoleMiningPotentialRoleEditEntitlements` | Role mining session parameters | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<RoleMiningPotentialRole>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IAIRoleMiningService } from '@sailpoint/angular-sdk/iai_role_mining';
import { RoleMiningPotentialRoleEditEntitlements } from '@sailpoint/angular-sdk/iai_role_mining';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IAIRoleMiningService);

  updateEntitlementsPotentialRoleV1(): void {
    const sessionId: string = ; // The role mining session id
    const potentialRoleId: string = ; // A potential role id in a role mining session
    const roleMiningPotentialRoleEditEntitlements: RoleMiningPotentialRoleEditEntitlements = ; // Role mining session parameters
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateEntitlementsPotentialRoleV1({ sessionId: sessionId, potentialRoleId: potentialRoleId, roleMiningPotentialRoleEditEntitlements: roleMiningPotentialRoleEditEntitlements }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

