# ServiceDeskIntegration

# ServiceDeskIntegrationService
  Use this API to build an integration between Identity Security Cloud and a service desk ITSM (IT service management) solution. 
Once an administrator builds this integration between Identity Security Cloud and a service desk, users can use Identity Security Cloud to raise and track tickets that are synchronized between Identity Security Cloud and the service desk. 

In Identity Security Cloud, administrators can create a service desk integration (sometimes also called an SDIM, or Service Desk Integration Module) by going to Admin &gt; Connections &gt; Service Desk and selecting &#39;Create.&#39;

To create a Generic Service Desk integration, for example, administrators must provide the required information on the General Settings page, the Connectivity and Authentication information, Ticket Creation information, Status Mapping information, and Requester Source information on the Configure page. 
Refer to [Integrating SailPoint with Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html) for more information about the process of setting up a Generic Service Desk in Identity Security Cloud.

Administrators can create various service desk integrations, all with their own nuances. 
The following service desk integrations are available: 

- [Atlassian Cloud Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_cloud/help/integrating_jira_cloud_sd/introduction.html)

- [Atlassian Server Jira Service Management](https://documentation.sailpoint.com/connectors/atlassian/jira_server/help/integrating_jira_server_sd/introduction.html)

- [BMC Helix ITSM Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_ITSM_sd/help/integrating_bmc_helix_itsm_sd/intro.html)

- [BMC Helix Remedyforce Service Desk](https://documentation.sailpoint.com/connectors/bmc/helix_remedyforce_sd/help/integrating_bmc_helix_remedyforce_sd/intro.html)

- [Generic Service Desk](https://documentation.sailpoint.com/connectors/generic_sd/help/integrating_generic_service_desk/intro.html)

- [ServiceNow Service Desk](https://documentation.sailpoint.com/connectors/servicenow/sdim/help/integrating_servicenow_sdim/intro.html)

- [Zendesk Service Desk](https://documentation.sailpoint.com/connectors/zendesk/help/integrating_zendesk_sd/introduction.html)
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-service-desk-integration-v1**](#create-service-desk-integration-v1) | **POST** `/service-desk-integrations/v1` | Create new service desk integration
[**delete-service-desk-integration-v1**](#delete-service-desk-integration-v1) | **DELETE** `/service-desk-integrations/v1/{id}` | Delete a service desk integration
[**get-service-desk-integration-template-v1**](#get-service-desk-integration-template-v1) | **GET** `/service-desk-integrations/v1/templates/{scriptName}` | Service desk integration template by scriptname
[**get-service-desk-integration-types-v1**](#get-service-desk-integration-types-v1) | **GET** `/service-desk-integrations/v1/types` | List service desk integration types
[**get-service-desk-integration-v1**](#get-service-desk-integration-v1) | **GET** `/service-desk-integrations/v1/{id}` | Get a service desk integration
[**get-service-desk-integrations-v1**](#get-service-desk-integrations-v1) | **GET** `/service-desk-integrations/v1` | List existing service desk integrations
[**get-status-check-details-v1**](#get-status-check-details-v1) | **GET** `/service-desk-integrations/v1/status-check-configuration` | Get the time check configuration
[**patch-service-desk-integration-v1**](#patch-service-desk-integration-v1) | **PATCH** `/service-desk-integrations/v1/{id}` | Patch a service desk integration
[**put-service-desk-integration-v1**](#put-service-desk-integration-v1) | **PUT** `/service-desk-integrations/v1/{id}` | Update a service desk integration
[**update-status-check-details-v1**](#update-status-check-details-v1) | **PUT** `/service-desk-integrations/v1/status-check-configuration` | Update the time check configuration


## create-service-desk-integration-v1
Create new service desk integration
Create a new Service Desk integration.

[API Spec](https://developer.sailpoint.com/docs/api/create-service-desk-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateServiceDeskIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**serviceDeskIntegrationDto** | `ServiceDeskIntegrationDto` | The specifics of a new integration to create | 

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';
import { ServiceDeskIntegrationDto } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  createServiceDeskIntegrationV1(): void {
    const serviceDeskIntegrationDto: ServiceDeskIntegrationDto = ; // The specifics of a new integration to create
    this.api.createServiceDeskIntegrationV1({ serviceDeskIntegrationDto: serviceDeskIntegrationDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-service-desk-integration-v1
Delete a service desk integration
Delete an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-service-desk-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteServiceDeskIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of Service Desk integration to delete |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  deleteServiceDeskIntegrationV1(): void {
    const id: string = ; // ID of Service Desk integration to delete
    this.api.deleteServiceDeskIntegrationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-service-desk-integration-template-v1
Service desk integration template by scriptname
This API endpoint returns an existing Service Desk integration template by scriptName.

[API Spec](https://developer.sailpoint.com/docs/api/get-service-desk-integration-template-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetServiceDeskIntegrationTemplateV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scriptName** | `string` | The scriptName value of the Service Desk integration template to get |  [default to undefined]

### Return type

`Observable<ServiceDeskIntegrationTemplateDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  getServiceDeskIntegrationTemplateV1(): void {
    const scriptName: string = ; // The scriptName value of the Service Desk integration template to get
    this.api.getServiceDeskIntegrationTemplateV1({ scriptName: scriptName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-service-desk-integration-types-v1
List service desk integration types
This API endpoint returns the current list of supported Service Desk integration types.

[API Spec](https://developer.sailpoint.com/docs/api/get-service-desk-integration-types-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetServiceDeskIntegrationTypesV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<ServiceDeskIntegrationTemplateType>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  getServiceDeskIntegrationTypesV1(): void {
    this.api.getServiceDeskIntegrationTypesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-service-desk-integration-v1
Get a service desk integration
Get an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-service-desk-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetServiceDeskIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk integration to get |  [default to undefined]

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  getServiceDeskIntegrationV1(): void {
    const id: string = ; // ID of the Service Desk integration to get
    this.api.getServiceDeskIntegrationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-service-desk-integrations-v1
List existing service desk integrations
Get a list of Service Desk integration objects.

[API Spec](https://developer.sailpoint.com/docs/api/get-service-desk-integrations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetServiceDeskIntegrationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<ServiceDeskIntegrationDto>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  getServiceDeskIntegrationsV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq*  **type**: *eq, in*  **cluster**: *eq, in* (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getServiceDeskIntegrationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-status-check-details-v1
Get the time check configuration
Get the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/get-status-check-details-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetStatusCheckDetailsV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<QueuedCheckConfigDetails>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  getStatusCheckDetailsV1(): void {
    this.api.getStatusCheckDetailsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-service-desk-integration-v1
Patch a service desk integration
Update an existing Service Desk integration by ID with a PATCH request.

[API Spec](https://developer.sailpoint.com/docs/api/patch-service-desk-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchServiceDeskIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk integration to update |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed.  | 

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  patchServiceDeskIntegrationV1(): void {
    const id: string = ; // ID of the Service Desk integration to update
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A list of SDIM update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  Only &#x60;replace&#x60; operations are accepted by this endpoint.  A 403 Forbidden Error indicates that a PATCH operation was attempted that is not allowed. 
    this.api.patchServiceDeskIntegrationV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-service-desk-integration-v1
Update a service desk integration
Update an existing Service Desk integration by ID.

[API Spec](https://developer.sailpoint.com/docs/api/put-service-desk-integration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutServiceDeskIntegrationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the Service Desk integration to update |  [default to undefined]
**serviceDeskIntegrationDto** | `ServiceDeskIntegrationDto` | The specifics of the integration to update | 

### Return type

`Observable<ServiceDeskIntegrationDto>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';
import { ServiceDeskIntegrationDto } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  putServiceDeskIntegrationV1(): void {
    const id: string = ; // ID of the Service Desk integration to update
    const serviceDeskIntegrationDto: ServiceDeskIntegrationDto = ; // The specifics of the integration to update
    this.api.putServiceDeskIntegrationV1({ id: id, serviceDeskIntegrationDto: serviceDeskIntegrationDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-status-check-details-v1
Update the time check configuration
Update the time check configuration of queued SDIM tickets.

[API Spec](https://developer.sailpoint.com/docs/api/update-status-check-details-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateStatusCheckDetailsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**queuedCheckConfigDetails** | `QueuedCheckConfigDetails` | The modified time check configuration | 

### Return type

`Observable<QueuedCheckConfigDetails>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ServiceDeskIntegrationService } from '@sailpoint/angular-sdk/service_desk_integration';
import { QueuedCheckConfigDetails } from '@sailpoint/angular-sdk/service_desk_integration';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ServiceDeskIntegrationService);

  updateStatusCheckDetailsV1(): void {
    const queuedCheckConfigDetails: QueuedCheckConfigDetails = ; // The modified time check configuration
    this.api.updateStatusCheckDetailsV1({ queuedCheckConfigDetails: queuedCheckConfigDetails }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

