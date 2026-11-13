# SPConfig

# SPConfigService
  Import and export configuration for some objects between tenants. 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**export-sp-config-v1**](#export-sp-config-v1) | **POST** `/sp-config/v1/export` | Initiates configuration objects export job
[**get-sp-config-export-status-v1**](#get-sp-config-export-status-v1) | **GET** `/sp-config/v1/export/{id}` | Get export job status
[**get-sp-config-export-v1**](#get-sp-config-export-v1) | **GET** `/sp-config/v1/export/{id}/download` | Download export job result.
[**get-sp-config-import-status-v1**](#get-sp-config-import-status-v1) | **GET** `/sp-config/v1/import/{id}` | Get import job status
[**get-sp-config-import-v1**](#get-sp-config-import-v1) | **GET** `/sp-config/v1/import/{id}/download` | Download import job result
[**import-sp-config-v1**](#import-sp-config-v1) | **POST** `/sp-config/v1/import` | Initiates configuration objects import job
[**list-sp-config-objects-v1**](#list-sp-config-objects-v1) | **GET** `/sp-config/v1/config-objects` | List config objects


## export-sp-config-v1
Initiates configuration objects export job
This post will export objects from the tenant to a JSON configuration file.
For more information about the object types that currently support export functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).

[API Spec](https://developer.sailpoint.com/docs/api/export-sp-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportSpConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**exportPayload** | `ExportPayload` | Export options control what will be included in the export. | 

### Return type

`Observable<SpConfigExportJob>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';
import { ExportPayload } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  exportSpConfigV1(): void {
    const exportPayload: ExportPayload = ; // Export options control what will be included in the export.
    this.api.exportSpConfigV1({ exportPayload: exportPayload }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sp-config-export-status-v1
Get export job status
This gets the status of the export job identified by the `id` parameter.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/get-sp-config-export-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSpConfigExportStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the export job whose status will be returned. |  [default to undefined]

### Return type

`Observable<SpConfigExportJobStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  getSpConfigExportStatusV1(): void {
    const id: string = ; // The ID of the export job whose status will be returned.
    this.api.getSpConfigExportStatusV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sp-config-export-v1
Download export job result.
This endpoint gets the export file resulting from the export job with the requested `id` and downloads it to a file.
The request will need one of the following security scopes:
- sp:config:read - sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/get-sp-config-export-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSpConfigExportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the export job whose results will be downloaded. |  [default to undefined]

### Return type

`Observable<SpConfigExportResults>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  getSpConfigExportV1(): void {
    const id: string = ; // The ID of the export job whose results will be downloaded.
    this.api.getSpConfigExportV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sp-config-import-status-v1
Get import job status
'This gets the status of the import job identified by the `id` parameter.

 For more information about the object types that currently support import functionality,
 refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).'


[API Spec](https://developer.sailpoint.com/docs/api/get-sp-config-import-status-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSpConfigImportStatusV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the import job whose status will be returned. |  [default to undefined]

### Return type

`Observable<SpConfigImportJobStatus>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  getSpConfigImportStatusV1(): void {
    const id: string = ; // The ID of the import job whose status will be returned.
    this.api.getSpConfigImportStatusV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-sp-config-import-v1
Download import job result
This gets import file resulting from the import job with the requested id and downloads it to a file. The downloaded file will contain the results of the import operation, including any error, warning or informational messages associated with the import.
The request will need the following security scope:
- sp:config:manage

[API Spec](https://developer.sailpoint.com/docs/api/get-sp-config-import-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetSpConfigImportV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the import job whose results will be downloaded. |  [default to undefined]

### Return type

`Observable<SpConfigImportResults>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  getSpConfigImportV1(): void {
    const id: string = ; // The ID of the import job whose results will be downloaded.
    this.api.getSpConfigImportV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## import-sp-config-v1
Initiates configuration objects import job
This post will import objects from a JSON configuration file into a tenant.
By default, every import will first export all existing objects supported by sp-config as a backup before the import is attempted.
The backup is provided so that the state of the configuration prior to the import is available for inspection or restore if needed.
The backup can be skipped by setting "excludeBackup" to true in the import options.
If a backup is performed, the id of the backup will be provided in the ImportResult as the "exportJobId". This can be downloaded 
using the `/sp-config/export/{exportJobId}/download` endpoint.

You cannot currently import from the Non-Employee Lifecycle Management (NELM) source. You cannot use this endpoint to back up or store NELM data. 

For more information about the object types that currently support import functionality, refer to [SaaS Configuration](https://developer.sailpoint.com/docs/extensibility/configuration-management/saas-configuration#supported-objects).


[API Spec](https://developer.sailpoint.com/docs/api/import-sp-config-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ImportSpConfigV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**data** | `Blob` | JSON file containing the objects to be imported. |  [default to undefined]
**preview** | `boolean` | This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  | [optional] [default to false]
**options** | `ImportOptions` |  | [optional] [default to undefined]

### Return type

`Observable<SpConfigJob>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';
import { ImportOptions } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  importSpConfigV1(): void {
    const data: Blob = ; // JSON file containing the objects to be imported.
    const preview: boolean = ; // This option is intended to give the user information about how an import operation would proceed, without having any effect on the target tenant. If this parameter is \&quot;true\&quot;, no objects will be imported. Instead, the import process will pre-process the import file and attempt to resolve references within imported objects. The import result file will contain messages pertaining to how specific references were resolved, any errors associated with the preprocessing, and messages indicating which objects would be imported.  (optional)
    const options: ImportOptions = ; //  (optional)
    this.api.importSpConfigV1({ data: data }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-sp-config-objects-v1
List config objects
Get a list of object configurations that the tenant export/import service knows.

[API Spec](https://developer.sailpoint.com/docs/api/list-sp-config-objects-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListSpConfigObjectsV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<SpConfigObject>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { SPConfigService } from '@sailpoint/angular-sdk/sp_config';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(SPConfigService);

  listSpConfigObjectsV1(): void {
    this.api.listSpConfigObjectsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

