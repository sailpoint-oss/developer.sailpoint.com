# ConfigurationHub

# ConfigurationHubService
  Use this API to implement and customize configuration settings management. With this functionality, you can access the Configuration Hub actions and build your own automated pipeline for Identity Security Cloud configuration change delivery and deployment.

Common usages for Configuration Hub includes:

- Upload configuration file - Configuration files can be managed and deployed using Configuration Hub by uploading a JSON file which contains configuration data.
- Manage object mapping - Create rules to map and substitute attributes when migrating configurations.
- Manage backups for configuration settings
- Manage configuration drafts
- Upload configurations and manage object mappings between tenants.

Refer to [Using the SailPoint Configuration Hub](https://documentation.sailpoint.com/saas/help/confighub/config_hub.html) for more information about Configuration Hub.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-deploy-v1**](#create-deploy-v1) | **POST** `/configuration-hub/v1/deploys` | Create a deploy
[**create-object-mapping-v1**](#create-object-mapping-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Creates an object mapping
[**create-object-mappings-v1**](#create-object-mappings-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-create` | Bulk creates object mappings
[**create-scheduled-action-v1**](#create-scheduled-action-v1) | **POST** `/configuration-hub/v1/scheduled-actions` | Create scheduled action
[**create-uploaded-configuration-v1**](#create-uploaded-configuration-v1) | **POST** `/configuration-hub/v1/backups/uploads` | Upload a configuration
[**delete-backup-v1**](#delete-backup-v1) | **DELETE** `/configuration-hub/v1/backups/{id}` | Delete a backup
[**delete-draft-v1**](#delete-draft-v1) | **DELETE** `/configuration-hub/v1/drafts/{id}` | Delete a draft
[**delete-object-mapping-v1**](#delete-object-mapping-v1) | **DELETE** `/configuration-hub/v1/object-mappings/{sourceOrg}/{objectMappingId}` | Deletes an object mapping
[**delete-scheduled-action-v1**](#delete-scheduled-action-v1) | **DELETE** `/configuration-hub/v1/scheduled-actions/{id}` | Delete scheduled action
[**delete-uploaded-configuration-v1**](#delete-uploaded-configuration-v1) | **DELETE** `/configuration-hub/v1/backups/uploads/{id}` | Delete an uploaded configuration
[**get-deploy-v1**](#get-deploy-v1) | **GET** `/configuration-hub/v1/deploys/{id}` | Get a deploy
[**get-object-mappings-v1**](#get-object-mappings-v1) | **GET** `/configuration-hub/v1/object-mappings/{sourceOrg}` | Gets list of object mappings
[**get-uploaded-configuration-v1**](#get-uploaded-configuration-v1) | **GET** `/configuration-hub/v1/backups/uploads/{id}` | Get an uploaded configuration
[**list-backups-v1**](#list-backups-v1) | **GET** `/configuration-hub/v1/backups` | List backups
[**list-deploys-v1**](#list-deploys-v1) | **GET** `/configuration-hub/v1/deploys` | List deploys
[**list-drafts-v1**](#list-drafts-v1) | **GET** `/configuration-hub/v1/drafts` | List drafts
[**list-scheduled-actions-v1**](#list-scheduled-actions-v1) | **GET** `/configuration-hub/v1/scheduled-actions` | List scheduled actions
[**list-uploaded-configurations-v1**](#list-uploaded-configurations-v1) | **GET** `/configuration-hub/v1/backups/uploads` | List uploaded configurations
[**update-object-mappings-v1**](#update-object-mappings-v1) | **POST** `/configuration-hub/v1/object-mappings/{sourceOrg}/bulk-patch` | Bulk updates object mappings
[**update-scheduled-action-v1**](#update-scheduled-action-v1) | **PATCH** `/configuration-hub/v1/scheduled-actions/{id}` | Update scheduled action


## create-deploy-v1
Create a deploy
This API performs a deploy based on an existing daft.

[API Spec](https://developer.sailpoint.com/docs/api/create-deploy-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateDeployV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**deployRequest** | `DeployRequest` | The deploy request body. | 

### Return type

`Observable<DeployResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';
import { DeployRequest } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  createDeployV1(): void {
    const deployRequest: DeployRequest = ; // The deploy request body.
    this.api.createDeployV1({ deployRequest: deployRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-object-mapping-v1
Creates an object mapping
This creates an object mapping between current org and source org.
Source org should be "default" when creating an object mapping that is not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/create-object-mapping-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateObjectMappingV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectMappingRequest** | `ObjectMappingRequest` | The object mapping request body. | 

### Return type

`Observable<ObjectMappingResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';
import { ObjectMappingRequest } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  createObjectMappingV1(): void {
    const sourceOrg: string = ; // The name of the source org.
    const objectMappingRequest: ObjectMappingRequest = ; // The object mapping request body.
    this.api.createObjectMappingV1({ sourceOrg: sourceOrg, objectMappingRequest: objectMappingRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-object-mappings-v1
Bulk creates object mappings
This creates a set of object mappings (Max 25) between current org and source org.
Source org should be "default" when creating object mappings that are not to be associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/create-object-mappings-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateObjectMappingsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectMappingBulkCreateRequest** | `ObjectMappingBulkCreateRequest` | The bulk create object mapping request body. | 

### Return type

`Observable<ObjectMappingBulkCreateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';
import { ObjectMappingBulkCreateRequest } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  createObjectMappingsV1(): void {
    const sourceOrg: string = ; // The name of the source org.
    const objectMappingBulkCreateRequest: ObjectMappingBulkCreateRequest = ; // The bulk create object mapping request body.
    this.api.createObjectMappingsV1({ sourceOrg: sourceOrg, objectMappingBulkCreateRequest: objectMappingBulkCreateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-scheduled-action-v1
Create scheduled action
This API creates a new scheduled action for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/create-scheduled-action-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateScheduledActionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**scheduledActionPayload** | `ScheduledActionPayload` | The scheduled action creation request body. | 

### Return type

`Observable<ScheduledActionResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';
import { ScheduledActionPayload } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  createScheduledActionV1(): void {
    const scheduledActionPayload: ScheduledActionPayload = ; // The scheduled action creation request body.
    this.api.createScheduledActionV1({ scheduledActionPayload: scheduledActionPayload }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-uploaded-configuration-v1
Upload a configuration
This API uploads a JSON configuration file into a tenant.

Configuration files can be managed and deployed via Configuration Hub by uploading a json file which contains configuration data. The JSON file should be the same as the one used by our import endpoints. The object types supported by upload configuration file functionality are the same as the ones supported by our regular backup functionality.

Refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects) for more information about supported objects.

[API Spec](https://developer.sailpoint.com/docs/api/create-uploaded-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateUploadedConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**data** | `Blob` | JSON file containing the objects to be imported. |  [default to undefined]
**name** | `string` | Name that will be assigned to the uploaded configuration file. |  [default to undefined]

### Return type

`Observable<BackupResponse>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  createUploadedConfigurationV1(): void {
    const data: Blob = ; // JSON file containing the objects to be imported.
    const name: string = ; // Name that will be assigned to the uploaded configuration file.
    this.api.createUploadedConfigurationV1({ data: data, name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-backup-v1
Delete a backup
This API deletes an existing backup for the current tenant.

On success, this endpoint will return an empty response.

The backup id can be obtained from the response after a backup was successfully created, or from the list backups endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/delete-backup-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteBackupV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the backup to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  deleteBackupV1(): void {
    const id: string = ; // The id of the backup to delete.
    this.api.deleteBackupV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-draft-v1
Delete a draft
This API deletes an existing draft for the current tenant.

On success, this endpoint will return an empty response.

The draft id can be obtained from the response after a draft was successfully created, or from the list drafts endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/delete-draft-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteDraftV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the draft to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  deleteDraftV1(): void {
    const id: string = ; // The id of the draft to delete.
    this.api.deleteDraftV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-object-mapping-v1
Deletes an object mapping
This deletes an existing object mapping.
Source org should be "default" when deleting an object mapping that is not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/delete-object-mapping-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteObjectMappingV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectMappingId** | `string` | The id of the object mapping to be deleted. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  deleteObjectMappingV1(): void {
    const sourceOrg: string = ; // The name of the source org.
    const objectMappingId: string = ; // The id of the object mapping to be deleted.
    this.api.deleteObjectMappingV1({ sourceOrg: sourceOrg, objectMappingId: objectMappingId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-scheduled-action-v1
Delete scheduled action
This API deletes an existing scheduled action.

[API Spec](https://developer.sailpoint.com/docs/api/delete-scheduled-action-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteScheduledActionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the scheduled action. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  deleteScheduledActionV1(): void {
    const id: string = ; // The ID of the scheduled action.
    this.api.deleteScheduledActionV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-uploaded-configuration-v1
Delete an uploaded configuration
This API deletes an uploaded configuration based on Id.

On success, this endpoint will return an empty response.

The uploaded configuration id can be obtained from the response after a successful upload, or the list uploaded configurations endpoint.

[API Spec](https://developer.sailpoint.com/docs/api/delete-uploaded-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteUploadedConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the uploaded configuration. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  deleteUploadedConfigurationV1(): void {
    const id: string = ; // The id of the uploaded configuration.
    this.api.deleteUploadedConfigurationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-deploy-v1
Get a deploy
This API gets an existing deploy for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-deploy-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetDeployV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the deploy. |  [default to undefined]

### Return type

`Observable<DeployResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  getDeployV1(): void {
    const id: string = ; // The id of the deploy.
    this.api.getDeployV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-object-mappings-v1
Gets list of object mappings
This gets a list of existing object mappings between current org and source org.
Source org should be "default" when getting object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:read

[API Spec](https://developer.sailpoint.com/docs/api/get-object-mappings-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetObjectMappingsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]

### Return type

`Observable<Array<ObjectMappingResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  getObjectMappingsV1(): void {
    const sourceOrg: string = ; // The name of the source org.
    this.api.getObjectMappingsV1({ sourceOrg: sourceOrg }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-uploaded-configuration-v1
Get an uploaded configuration
This API gets an existing uploaded configuration for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/get-uploaded-configuration-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetUploadedConfigurationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the uploaded configuration. |  [default to undefined]

### Return type

`Observable<BackupResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  getUploadedConfigurationV1(): void {
    const id: string = ; // The id of the uploaded configuration.
    this.api.getUploadedConfigurationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-backups-v1
List backups
This API gets a list of existing backups for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-backups-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListBackupsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<BackupResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  listBackupsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)
    this.api.listBackupsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-deploys-v1
List deploys
This API gets a list of deploys for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-deploys-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListDeploysV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<ListDeploysV1200Response>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  listDeploysV1(): void {
    this.api.listDeploysV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-drafts-v1
List drafts
This API gets a list of existing drafts for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-drafts-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListDraftsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<DraftResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  listDraftsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq*  **approvalStatus**: *eq* (optional)
    this.api.listDraftsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-scheduled-actions-v1
List scheduled actions
This API gets a list of existing scheduled actions for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-scheduled-actions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListScheduledActionsV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<ScheduledActionResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  listScheduledActionsV1(): void {
    this.api.listScheduledActionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-uploaded-configurations-v1
List uploaded configurations
This API gets a list of existing uploaded configurations for the current tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-uploaded-configurations-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListUploadedConfigurationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<BackupResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  listUploadedConfigurationsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq* (optional)
    this.api.listUploadedConfigurationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-object-mappings-v1
Bulk updates object mappings
This updates a set of object mappings, only enabled and targetValue fields can be updated.
Source org should be "default" when updating object mappings that are not associated to any particular org.
The request will need the following security scope:
- sp:config-object-mapping:manage

[API Spec](https://developer.sailpoint.com/docs/api/update-object-mappings-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateObjectMappingsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceOrg** | `string` | The name of the source org. |  [default to undefined]
**objectMappingBulkPatchRequest** | `ObjectMappingBulkPatchRequest` | The object mapping request body. | 

### Return type

`Observable<ObjectMappingBulkPatchResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';
import { ObjectMappingBulkPatchRequest } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  updateObjectMappingsV1(): void {
    const sourceOrg: string = ; // The name of the source org.
    const objectMappingBulkPatchRequest: ObjectMappingBulkPatchRequest = ; // The object mapping request body.
    this.api.updateObjectMappingsV1({ sourceOrg: sourceOrg, objectMappingBulkPatchRequest: objectMappingBulkPatchRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-scheduled-action-v1
Update scheduled action
This API updates an existing scheduled action using JSON Patch format.

[API Spec](https://developer.sailpoint.com/docs/api/update-scheduled-action-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateScheduledActionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the scheduled action. |  [default to undefined]
**jsonPatch** | `JsonPatch` | The JSON Patch document containing the changes to apply to the scheduled action. | 

### Return type

`Observable<ScheduledActionResponse>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConfigurationHubService } from '@sailpoint/angular-sdk/configuration_hub';
import { JsonPatch } from '@sailpoint/angular-sdk/configuration_hub';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConfigurationHubService);

  updateScheduledActionV1(): void {
    const id: string = ; // The ID of the scheduled action.
    const jsonPatch: JsonPatch = ; // The JSON Patch document containing the changes to apply to the scheduled action.
    this.api.updateScheduledActionV1({ id: id, jsonPatch: jsonPatch }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

