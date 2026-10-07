# CustomForms

# CustomFormsService
  Use this API to build and manage custom forms.
With this functionality in place, administrators can create and view form definitions and form instances.

Forms are composed of sections and fields. Sections split the form into logical groups of fields and fields are the data collection points within the form. Configure conditions to modify elements of the form as the responder provides input. Create form inputs to pass information from a calling feature, like a workflow, to your form.

Forms can be used within workflows as an action or as a trigger. The Form Action allows you to assign a form as a step in a running workflow, suspending the workflow until the form is submitted or times out, and the workflow resumes. The Form Submitted Trigger initiates a workflow when a form is submitted. The trigger can be configured to initiate on submission of a full form, a form element with any value, or a form element with a particular value.

Refer to [Forms](https://documentation.sailpoint.com/saas/help/forms/index.html) for more information about using forms in Identity Security Cloud.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-form-definition-dynamic-schema-v1**](#create-form-definition-dynamic-schema-v1) | **POST** `/form-definitions/v1/forms-action-dynamic-schema` | Generate json schema dynamically.
[**create-form-definition-file-request-v1**](#create-form-definition-file-request-v1) | **POST** `/form-definitions/v1/{formDefinitionID}/upload` | Upload new form definition file.
[**create-form-definition-v1**](#create-form-definition-v1) | **POST** `/form-definitions/v1` | Creates a form definition.
[**create-form-instance-v1**](#create-form-instance-v1) | **POST** `/form-instances/v1` | Creates a form instance.
[**delete-form-definition-v1**](#delete-form-definition-v1) | **DELETE** `/form-definitions/v1/{formDefinitionID}` | Deletes a form definition.
[**export-form-definitions-by-tenant-v1**](#export-form-definitions-by-tenant-v1) | **GET** `/form-definitions/v1/export` | List form definitions by tenant.
[**get-file-from-s3-v1**](#get-file-from-s3-v1) | **GET** `/form-definitions/v1/{formDefinitionID}/file/{fileID}` | Download definition file by fileid.
[**get-form-definition-by-key-v1**](#get-form-definition-by-key-v1) | **GET** `/form-definitions/v1/{formDefinitionID}` | Return a form definition.
[**get-form-instance-by-key-v1**](#get-form-instance-by-key-v1) | **GET** `/form-instances/v1/{formInstanceID}` | Returns a form instance.
[**get-form-instance-file-v1**](#get-form-instance-file-v1) | **GET** `/form-instances/v1/{formInstanceID}/file/{fileID}` | Download instance file by fileid.
[**import-form-definitions-v1**](#import-form-definitions-v1) | **POST** `/form-definitions/v1/import` | Import form definitions from export.
[**patch-form-definition-v1**](#patch-form-definition-v1) | **PATCH** `/form-definitions/v1/{formDefinitionID}` | Patch a form definition.
[**patch-form-instance-v1**](#patch-form-instance-v1) | **PATCH** `/form-instances/v1/{formInstanceID}` | Patch a form instance.
[**search-form-definitions-by-tenant-v1**](#search-form-definitions-by-tenant-v1) | **GET** `/form-definitions/v1` | Export form definitions by tenant.
[**search-form-element-data-by-element-idv1**](#search-form-element-data-by-element-idv1) | **GET** `/form-instances/v1/{formInstanceID}/data-source/{formElementID}` | Retrieves dynamic data by element.
[**search-form-instances-by-tenant-v1**](#search-form-instances-by-tenant-v1) | **GET** `/form-instances/v1` | List form instances by tenant.
[**search-pre-defined-select-options-v1**](#search-pre-defined-select-options-v1) | **GET** `/form-definitions/v1/predefined-select-options` | List predefined select options.
[**show-preview-data-source-v1**](#show-preview-data-source-v1) | **POST** `/form-definitions/v1/{formDefinitionID}/data-source` | Preview form definition data source.


## create-form-definition-dynamic-schema-v1
Generate json schema dynamically.


[API Spec](https://developer.sailpoint.com/docs/api/create-form-definition-dynamic-schema-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateFormDefinitionDynamicSchemaV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | `FormDefinitionDynamicSchemaRequest` | Body is the request payload to create a form definition dynamic schema | [optional]

### Return type

`Observable<FormDefinitionDynamicSchemaResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';
import { FormDefinitionDynamicSchemaRequest } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  createFormDefinitionDynamicSchemaV1(): void {
    const body: FormDefinitionDynamicSchemaRequest = ; // Body is the request payload to create a form definition dynamic schema (optional)
    this.api.createFormDefinitionDynamicSchemaV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-form-definition-file-request-v1
Upload new form definition file.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/create-form-definition-file-request-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateFormDefinitionFileRequestV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formDefinitionID** | `string` | FormDefinitionID  String specifying FormDefinitionID |  [default to undefined]
**file** | `Blob` | File specifying the multipart |  [default to undefined]

### Return type

`Observable<FormDefinitionFileUploadResponse>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  createFormDefinitionFileRequestV1(): void {
    const formDefinitionID: string = ; // FormDefinitionID  String specifying FormDefinitionID
    const file: Blob = ; // File specifying the multipart
    this.api.createFormDefinitionFileRequestV1({ formDefinitionID: formDefinitionID, file: file }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-form-definition-v1
Creates a form definition.


[API Spec](https://developer.sailpoint.com/docs/api/create-form-definition-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateFormDefinitionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | `CreateFormDefinitionRequest` | Body is the request payload to create form definition request | [optional]

### Return type

`Observable<FormDefinitionResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';
import { CreateFormDefinitionRequest } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  createFormDefinitionV1(): void {
    const body: CreateFormDefinitionRequest = ; // Body is the request payload to create form definition request (optional)
    this.api.createFormDefinitionV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-form-instance-v1
Creates a form instance.


[API Spec](https://developer.sailpoint.com/docs/api/create-form-instance-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateFormInstanceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | `CreateFormInstanceRequest` | Body is the request payload to create a form instance | [optional]

### Return type

`Observable<FormInstanceResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';
import { CreateFormInstanceRequest } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  createFormInstanceV1(): void {
    const body: CreateFormInstanceRequest = ; // Body is the request payload to create a form instance (optional)
    this.api.createFormInstanceV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-form-definition-v1
Deletes a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-form-definition-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteFormDefinitionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formDefinitionID** | `string` | Form definition ID |  [default to undefined]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  deleteFormDefinitionV1(): void {
    const formDefinitionID: string = ; // Form definition ID
    this.api.deleteFormDefinitionV1({ formDefinitionID: formDefinitionID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## export-form-definitions-by-tenant-v1
List form definitions by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/export-form-definitions-by-tenant-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ExportFormDefinitionsByTenantV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [optional] [default to &#39;name&#39;]

### Return type

`Observable<Array<ExportFormDefinitionsByTenantV1200ResponseInner>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  exportFormDefinitionsByTenantV1(): void {
    const offset: number = ; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
    const limit: number = ; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional)
    this.api.exportFormDefinitionsByTenantV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-file-from-s3-v1
Download definition file by fileid.


[API Spec](https://developer.sailpoint.com/docs/api/get-file-from-s3-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetFileFromS3V1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formDefinitionID** | `string` | FormDefinitionID  Form definition ID |  [default to undefined]
**fileID** | `string` | FileID  String specifying the hashed name of the uploaded file we are retrieving. |  [default to undefined]

### Return type

`Observable<Blob>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, image/jpeg, image/png, application/octet-stream

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  getFileFromS3V1(): void {
    const formDefinitionID: string = ; // FormDefinitionID  Form definition ID
    const fileID: string = ; // FileID  String specifying the hashed name of the uploaded file we are retrieving.
    this.api.getFileFromS3V1({ formDefinitionID: formDefinitionID, fileID: fileID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-form-definition-by-key-v1
Return a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-form-definition-by-key-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetFormDefinitionByKeyV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formDefinitionID** | `string` | Form definition ID |  [default to undefined]

### Return type

`Observable<FormDefinitionResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  getFormDefinitionByKeyV1(): void {
    const formDefinitionID: string = ; // Form definition ID
    this.api.getFormDefinitionByKeyV1({ formDefinitionID: formDefinitionID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-form-instance-by-key-v1
Returns a form instance.
Parameter `{formInstanceID}` should match a form instance ID.

Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.

[API Spec](https://developer.sailpoint.com/docs/api/get-form-instance-by-key-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetFormInstanceByKeyV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formInstanceID** | `string` | Form instance ID |  [default to undefined]

### Return type

`Observable<FormInstanceResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  getFormInstanceByKeyV1(): void {
    const formInstanceID: string = ; // Form instance ID
    this.api.getFormInstanceByKeyV1({ formInstanceID: formInstanceID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-form-instance-file-v1
Download instance file by fileid.


[API Spec](https://developer.sailpoint.com/docs/api/get-form-instance-file-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetFormInstanceFileV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formInstanceID** | `string` | FormInstanceID  Form instance ID |  [default to undefined]
**fileID** | `string` | FileID  String specifying the hashed name of the uploaded file we are retrieving. |  [default to undefined]

### Return type

`Observable<Blob>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, image/jpeg, image/png, application/octet-stream

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  getFormInstanceFileV1(): void {
    const formInstanceID: string = ; // FormInstanceID  Form instance ID
    const fileID: string = ; // FileID  String specifying the hashed name of the uploaded file we are retrieving.
    this.api.getFormInstanceFileV1({ formInstanceID: formInstanceID, fileID: fileID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## import-form-definitions-v1
Import form definitions from export.


[API Spec](https://developer.sailpoint.com/docs/api/import-form-definitions-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ImportFormDefinitionsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**body** | `Array<ImportFormDefinitionsV1RequestInner>` | Body is the request payload to import form definitions | [optional]

### Return type

`Observable<ImportFormDefinitionsV1202Response>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';
import { ImportFormDefinitionsV1RequestInner } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  importFormDefinitionsV1(): void {
    const body: Array<ImportFormDefinitionsV1RequestInner> = ; // Body is the request payload to import form definitions (optional)
    this.api.importFormDefinitionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-form-definition-v1
Patch a form definition.
Parameter `{formDefinitionID}` should match a form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/patch-form-definition-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchFormDefinitionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formDefinitionID** | `string` | Form definition ID |  [default to undefined]
**body** | `Array<{ [key: string]: object; }>` | Body is the request payload to patch a form definition, check: https://jsonpatch.com | [optional]

### Return type

`Observable<FormDefinitionResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  patchFormDefinitionV1(): void {
    const formDefinitionID: string = ; // Form definition ID
    const body: Array<{ [key: string]: object; }> = ; // Body is the request payload to patch a form definition, check: https://jsonpatch.com (optional)
    this.api.patchFormDefinitionV1({ formDefinitionID: formDefinitionID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## patch-form-instance-v1
Patch a form instance.
Parameter `{formInstanceID}` should match a form instance ID.

Only the assigned recipient (`recipients[].id` when `type` is `IDENTITY`) may call this.

[API Spec](https://developer.sailpoint.com/docs/api/patch-form-instance-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PatchFormInstanceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formInstanceID** | `string` | Form instance ID |  [default to undefined]
**body** | `Array<{ [key: string]: object; }>` | Body is the request payload to patch a form instance, check: https://jsonpatch.com | [optional]

### Return type

`Observable<FormInstanceResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  patchFormInstanceV1(): void {
    const formInstanceID: string = ; // Form instance ID
    const body: Array<{ [key: string]: object; }> = ; // Body is the request payload to patch a form instance, check: https://jsonpatch.com (optional)
    this.api.patchFormInstanceV1({ formInstanceID: formInstanceID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-form-definitions-by-tenant-v1
Export form definitions by tenant.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/search-form-definitions-by-tenant-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchFormDefinitionsByTenantV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** | [optional] [default to &#39;name&#39;]

### Return type

`Observable<ListFormDefinitionsByTenantResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  searchFormDefinitionsByTenantV1(): void {
    const offset: number = ; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
    const limit: number = ; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **name**: *eq, gt, sw, in*  **description**: *eq, gt, sw, in*  **created**: *eq, gt, sw, in*  **modified**: *eq, gt, sw, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, description, created, modified** (optional)
    this.api.searchFormDefinitionsByTenantV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-form-element-data-by-element-idv1
Retrieves dynamic data by element.
Parameter `{formInstanceID}` should match a form instance ID.
Parameter `{formElementID}` should match a form element ID at the data source configuration.

[API Spec](https://developer.sailpoint.com/docs/api/search-form-element-data-by-element-idv1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchFormElementDataByElementIDV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formInstanceID** | `string` | Form instance ID |  [default to undefined]
**formElementID** | `string` | Form element ID |  [default to undefined]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | [optional] [default to undefined]
**query** | `string` | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | [optional] [default to undefined]

### Return type

`Observable<ListFormElementDataByElementIDResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  searchFormElementDataByElementIDV1(): void {
    const formInstanceID: string = ; // Form instance ID
    const formElementID: string = ; // Form element ID
    const limit: number = ; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; (optional)
    const query: string = ; // String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. (optional)
    this.api.searchFormElementDataByElementIDV1({ formInstanceID: formInstanceID, formElementID: formElementID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-form-instances-by-tenant-v1
List form instances by tenant.
Returns a list of form instances for the tenant. Optionally filter by form definition ID.

[API Spec](https://developer.sailpoint.com/docs/api/search-form-instances-by-tenant-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchFormInstancesByTenantV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq* | [optional] [default to undefined]

### Return type

`Observable<Array<ListFormInstancesByTenantResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  searchFormInstancesByTenantV1(): void {
    const offset: number = ; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
    const limit: number = ; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **formDefinitionId**: *eq* (optional)
    this.api.searchFormInstancesByTenantV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-pre-defined-select-options-v1
List predefined select options.
No parameters required.

[API Spec](https://developer.sailpoint.com/docs/api/search-pre-defined-select-options-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchPreDefinedSelectOptionsV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<ListPredefinedSelectOptionsResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  searchPreDefinedSelectOptionsV1(): void {
    this.api.searchPreDefinedSelectOptionsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## show-preview-data-source-v1
Preview form definition data source.


[API Spec](https://developer.sailpoint.com/docs/api/show-preview-data-source-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ShowPreviewDataSourceV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**formDefinitionID** | `string` | Form definition ID |  [default to undefined]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 10]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; | [optional] [default to undefined]
**query** | `string` | String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. | [optional] [default to undefined]
**formElementPreviewRequest** | `FormElementPreviewRequest` | Body is the request payload to create a form definition dynamic schema | [optional]

### Return type

`Observable<PreviewDataSourceResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { CustomFormsService } from '@sailpoint/angular-sdk/custom_forms';
import { FormElementPreviewRequest } from '@sailpoint/angular-sdk/custom_forms';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(CustomFormsService);

  showPreviewDataSourceV1(): void {
    const formDefinitionID: string = ; // Form definition ID
    const limit: number = ; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, ne, in*  Supported composite operators: *not*  Only a single *not* may be used, and it can only be used with the &#x60;in&#x60; operator. The &#x60;not&#x60; composite operator must be used in front of the field. For example, the following is valid: &#x60;not value in (\&quot;ID01\&quot;)&#x60; (optional)
    const query: string = ; // String that is passed to the underlying API to filter other (non-ID) fields.  For example, for access  profile data sources, this string will be passed to the access profile api and used with a \&quot;starts with\&quot; filter against  several fields. (optional)
    const formElementPreviewRequest: FormElementPreviewRequest = ; // Body is the request payload to create a form definition dynamic schema (optional)
    this.api.showPreviewDataSourceV1({ formDefinitionID: formDefinitionID }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

