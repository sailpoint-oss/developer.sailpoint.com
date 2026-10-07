# MultiHostIntegration

# MultiHostIntegrationService
  Use this API to build a Multi-Host Integration.
Multi-Host Integration will help customers to configure and manage similar type of target system in Identity Security Cloud.
In Identity Security Cloud, administrators can create a Multi-Host Integration by going to Admin &gt; Connections &gt; Multi-Host Sources and selecting &#39;Create.&#39;
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-multi-host-integration-v1**](#create-multi-host-integration-v1) | **POST** `/multihosts/v1` | Create multi-host integration
[**create-sources-within-multi-host-v1**](#create-sources-within-multi-host-v1) | **POST** `/multihosts/v1/{multihostId}` | Create sources within multi-host integration
[**delete-multi-host-sources-v1**](#delete-multi-host-sources-v1) | **POST** `/multihosts/v1/{multiHostId}/sources/bulk-delete` | Delete sources within multi-host integration
[**delete-multi-host-v1**](#delete-multi-host-v1) | **DELETE** `/multihosts/v1/{multihostId}` | Delete multi-host integration
[**get-acct-aggregation-groups-v1**](#get-acct-aggregation-groups-v1) | **GET** `/multihosts/v1/{multihostId}/acctAggregationGroups` | List account-aggregation-groups by multi-host id
[**get-entitlement-aggregation-groups-v1**](#get-entitlement-aggregation-groups-v1) | **GET** `/multihosts/v1/{multiHostId}/entitlementAggregationGroups` | List entitlement-aggregation-groups by integration id
[**get-multi-host-integrations-list-v1**](#get-multi-host-integrations-list-v1) | **GET** `/multihosts/v1` | List all existing multi-host integrations
[**get-multi-host-integrations-v1**](#get-multi-host-integrations-v1) | **GET** `/multihosts/v1/{multihostId}` | Get multi-host integration by id
[**get-multi-host-source-creation-errors-v1**](#get-multi-host-source-creation-errors-v1) | **GET** `/multihosts/v1/{multiHostId}/sources/errors` | List multi-host source creation errors
[**get-multihost-integration-types-v1**](#get-multihost-integration-types-v1) | **GET** `/multihosts/v1/types` | List multi-host integration types
[**get-sources-within-multi-host-v1**](#get-sources-within-multi-host-v1) | **GET** `/multihosts/v1/{multihostId}/sources` | List sources within multi-host integration
[**test-connection-multi-host-sources-v1**](#test-connection-multi-host-sources-v1) | **POST** `/multihosts/v1/{multihostId}/sources/testConnection` | Test configuration for multi-host integration
[**test-source-connection-multihost-v1**](#test-source-connection-multihost-v1) | **GET** `/multihosts/v1/{multihostId}/sources/{sourceId}/testConnection` | Test configuration for multi-host integration\&#39;s single source
[**update-multi-host-sources-v1**](#update-multi-host-sources-v1) | **PATCH** `/multihosts/v1/{multihostId}` | Update multi-host integration


## create-multi-host-integration-v1
Create multi-host integration
This API is used to create Multi-Host Integration. Multi-host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/create-multi-host-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateMultiHostIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostIntegrationsCreate** | `MultiHostIntegrationsCreate` | The specifics of the Multi-Host Integration to create | 

### Return type

`Observable<MultiHostIntegrations>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';
import { MultiHostIntegrationsCreate } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  createMultiHostIntegrationV1(): void {
    const multiHostIntegrationsCreate: MultiHostIntegrationsCreate = ; // The specifics of the Multi-Host Integration to create
    this.api.createMultiHostIntegrationV1({ multiHostIntegrationsCreate: multiHostIntegrationsCreate }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-sources-within-multi-host-v1
Create sources within multi-host integration
This API is used to create sources within Multi-Host Integration. Multi-Host Integration holds similar types of sources.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/create-sources-within-multi-host-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateSourcesWithinMultiHostV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration. |  [default to undefined]
**multiHostIntegrationsCreateSources** | `Array<MultiHostIntegrationsCreateSources>` | The specifics of the sources to create within Multi-Host Integration. | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';
import { MultiHostIntegrationsCreateSources } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  createSourcesWithinMultiHostV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration.
    const multiHostIntegrationsCreateSources: Array<MultiHostIntegrationsCreateSources> = ; // The specifics of the sources to create within Multi-Host Integration.
    this.api.createSourcesWithinMultiHostV1({ multihostId: multihostId, multiHostIntegrationsCreateSources: multiHostIntegrationsCreateSources }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-multi-host-sources-v1
Delete sources within multi-host integration
This endpoint performs bulk sources delete within Multi-Host Integration via a list of supplied IDs.

The following rights are required to access this endpoint: idn:multihosts:delete, idn:sources:delete

[API Spec](https://developer.sailpoint.com/docs/api/delete-multi-host-sources-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMultiHostSourcesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]
**requestBody** | `Array<string>` | The delete bulk sources within multi-host integration request body | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  deleteMultiHostSourcesV1(): void {
    const multiHostId: string = ; // ID of the Multi-Host Integration
    const requestBody: Array<string> = ; // The delete bulk sources within multi-host integration request body
    this.api.deleteMultiHostSourcesV1({ multiHostId: multiHostId, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-multi-host-v1
Delete multi-host integration
Delete an existing Multi-Host Integration by ID.  

A token with Org Admin or Multi Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/delete-multi-host-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteMultiHostV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of Multi-Host Integration to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  deleteMultiHostV1(): void {
    const multihostId: string = ; // ID of Multi-Host Integration to delete.
    this.api.deleteMultiHostV1({ multihostId: multihostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-acct-aggregation-groups-v1
List account-aggregation-groups by multi-host id
This API will return array of account aggregation groups within provided Multi-Host Integration ID.
A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-acct-aggregation-groups-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAcctAggregationGroupsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration to update |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Observable<Array<MultiHostIntegrationsAggScheduleUpdate>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getAcctAggregationGroupsV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration to update
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getAcctAggregationGroupsV1({ multihostId: multihostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-entitlement-aggregation-groups-v1
List entitlement-aggregation-groups by integration id
This API will return array of aggregation groups within provided Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-aggregation-groups-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetEntitlementAggregationGroupsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostId** | `string` | ID of the Multi-Host Integration to update |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Observable<Array<MultiHostIntegrationsAggScheduleUpdate>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getEntitlementAggregationGroupsV1(): void {
    const multiHostId: string = ; // ID of the Multi-Host Integration to update
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getEntitlementAggregationGroupsV1({ multiHostId: multiHostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-multi-host-integrations-list-v1
List all existing multi-host integrations
Get a list of Multi-Host Integrations.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-multi-host-integrations-list-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMultiHostIntegrationsListV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**forSubadmin** | `string` | If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. | [optional] [default to undefined]

### Return type

`Observable<Array<MultiHostIntegrations>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getMultiHostIntegrationsListV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *in*  **forSubAdminId**: *in* (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const forSubadmin: string = ; // If provided, filters the returned list according to what is visible to the indicated ROLE_SUBADMIN Identity or SOURCE_SUBADMIN identity.  The value of the parameter is either an Identity ID, or the special value **me**, which is shorthand for the calling Identity\&#39;s ID.  A 400 Bad Request error is returned if the **for-subadmin** parameter is specified for an Identity that is not a subadmin. (optional)
    this.api.getMultiHostIntegrationsListV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-multi-host-integrations-v1
Get multi-host integration by id
Get an existing Multi-Host Integration. 

A token with Org Admin or Multi-Host Integration Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-multi-host-integrations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMultiHostIntegrationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration. |  [default to undefined]

### Return type

`Observable<MultiHostIntegrations>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getMultiHostIntegrationsV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration.
    this.api.getMultiHostIntegrationsV1({ multihostId: multihostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-multi-host-source-creation-errors-v1
List multi-host source creation errors
Get a list of sources creation errors within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-multi-host-source-creation-errors-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMultiHostSourceCreationErrorsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multiHostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]

### Return type

`Observable<Array<SourceCreationErrors>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getMultiHostSourceCreationErrorsV1(): void {
    const multiHostId: string = ; // ID of the Multi-Host Integration
    this.api.getMultiHostSourceCreationErrorsV1({ multiHostId: multiHostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-multihost-integration-types-v1
List multi-host integration types
This API endpoint returns the current list of supported Multi-Host Integration types.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-multihost-integration-types-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetMultihostIntegrationTypesV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<MultiHostIntegrationTemplateType>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getMultihostIntegrationTypesV1(): void {
    this.api.getMultihostIntegrationTypesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sources-within-multi-host-v1
List sources within multi-host integration
Get a list of sources within Multi-Host Integration ID.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/get-sources-within-multi-host-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSourcesWithinMultiHostV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration to update |  [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<MultiHostSources>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  getSourcesWithinMultiHostV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration to update
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *in* (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getSourcesWithinMultiHostV1({ multihostId: multihostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-connection-multi-host-sources-v1
Test configuration for multi-host integration
This endpoint performs a more detailed validation of the Multi-Host Integration's configuration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/test-connection-multi-host-sources-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestConnectionMultiHostSourcesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  testConnectionMultiHostSourcesV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration
    this.api.testConnectionMultiHostSourcesV1({ multihostId: multihostId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-source-connection-multihost-v1
Test configuration for multi-host integration\'s single source
This endpoint performs a more detailed validation of the source's configuration.  

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/test-source-connection-multihost-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestSourceConnectionMultihostV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration |  [default to undefined]
**sourceId** | `string` | ID of the source within the Multi-Host Integration |  [default to undefined]

### Return type

`Observable<TestSourceConnectionMultihostV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  testSourceConnectionMultihostV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration
    const sourceId: string = ; // ID of the source within the Multi-Host Integration
    this.api.testSourceConnectionMultihostV1({ multihostId: multihostId, sourceId: sourceId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-multi-host-sources-v1
Update multi-host integration
Update existing sources within Multi-Host Integration.

A token with Org Admin or Multi-Host Admin authority is required to access this endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/update-multi-host-sources-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateMultiHostSourcesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multihostId** | `string` | ID of the Multi-Host Integration to update. |  [default to undefined]
**updateMultiHostSourcesV1RequestInner** | `Array<UpdateMultiHostSourcesV1RequestInner>` | This endpoint allows you to update a Multi-Host Integration.  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { MultiHostIntegrationService } from '@sailpoint/angular-sdk/multi_host_integration';
import { UpdateMultiHostSourcesV1RequestInner } from '@sailpoint/angular-sdk/multi_host_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(MultiHostIntegrationService);

  updateMultiHostSourcesV1(): void {
    const multihostId: string = ; // ID of the Multi-Host Integration to update.
    const updateMultiHostSourcesV1RequestInner: Array<UpdateMultiHostSourcesV1RequestInner> = ; // This endpoint allows you to update a Multi-Host Integration. 
    this.api.updateMultiHostSourcesV1({ multihostId: multihostId, updateMultiHostSourcesV1RequestInner: updateMultiHostSourcesV1RequestInner }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

