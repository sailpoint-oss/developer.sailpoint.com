# ParameterStorage

# ParameterStorageService
  The Parameter Storage is SailPoint&#39;s centralized repository for authentication, authorization, and connection configurations, stored as typed Parameters.

The APIs can be used to input Parameters, which can then be referenced by other services, such as Workflow configurations. When these services are executed, the relevant values are fetched via an internal API (not documented here).

The usage of Parameters can be monitored via References managed by Parameter Storage. References provide an indirect mapping between a Parameter and its usage (e.g., within a Workflow), allowing for reports such as &quot;Parameter X is used in Workflow Y&quot; via APIs.

A Parameter is a named instance of typed configuration, where the state is stored as Fields. These Fields are either Public (cleartext, searchable) or Private (encrypted).

Parameter Types are grouped and fall into three Categories: Authentication, Authorization, and Connection.

Parameters are strongly typed; each Type&#39;s fields are named and exposed to the consumer. This means that if a service states that it expects a Credential Type, it will receive a Parameter with a Username and Password.

Fields are named, typed variables within a Parameter; the Fields on a Parameter depend on the Parameter&#39;s Type. Fields contain customer-provided data that will be referenced by another service, and their typing determines whether they&#39;re stored in cleartext or encrypted.

The Specification documents the supported Categories, Types, Fields, Field Names, and their relationships.

A Reference is an indirect pointer to a Parameter, where each usage of a Parameter has a corresponding Reference. This allows for usage tracking and safe deletion.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-parameter-v1**](#create-parameter-v1) | **POST** `/parameter-storage/v1/parameters` | Add a new parameter.
[**delete-parameter-v1**](#delete-parameter-v1) | **DELETE** `/parameter-storage/v1/parameters/{id}` | Delete a parameter.
[**get-attestation-document-v1**](#get-attestation-document-v1) | **GET** `/parameter-storage/v1/attestation` | Get an attestation document.
[**get-parameter-references-v1**](#get-parameter-references-v1) | **GET** `/parameter-storage/v1/parameters/{id}/references` | Get parameter references.
[**get-parameter-storage-specification-v1**](#get-parameter-storage-specification-v1) | **GET** `/parameter-storage/v1/specifications` | Get specifications for parameter types.
[**get-parameter-v1**](#get-parameter-v1) | **GET** `/parameter-storage/v1/parameters/{id}` | Get a specific parameter.
[**search-parameters-v1**](#search-parameters-v1) | **GET** `/parameter-storage/v1/parameters` | Query stored parameters.
[**update-parameter-v1**](#update-parameter-v1) | **PATCH** `/parameter-storage/v1/parameters/{id}` | Update a parameter.


## create-parameter-v1
Add a new parameter.
Add a new parameter.

[API Spec](https://developer.sailpoint.com/docs/api/create-parameter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateParameterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**parameterStorageNewParameter** | `ParameterStorageNewParameter` | The parameter to add to the store. | [optional]

### Return type

`Observable<ParameterStorageParameter>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';
import { ParameterStorageNewParameter } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  createParameterV1(): void {
    const parameterStorageNewParameter: ParameterStorageNewParameter = ; // The parameter to add to the store. (optional)
    this.api.createParameterV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-parameter-v1
Delete a parameter.
Delete a parameter. Will only delete parameters without existing references.

[API Spec](https://developer.sailpoint.com/docs/api/delete-parameter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteParameterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter to be deleted. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  deleteParameterV1(): void {
    const id: string = ; // The ID of the parameter to be deleted.
    this.api.deleteParameterV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-attestation-document-v1
Get an attestation document.
Get an attestation document containing a NIST P-384 service public key for an ECDHE handshake, enabling the end-to-end-encrypted transport of parameter private fields.

[API Spec](https://developer.sailpoint.com/docs/api/get-attestation-document-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAttestationDocumentV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Base64Url encoded NIST P-384 public key |  [default to undefined]

### Return type

`Observable<ParameterStorageAttestationDocument>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  getAttestationDocumentV1(): void {
    const key: string = ; // Base64Url encoded NIST P-384 public key
    this.api.getAttestationDocumentV1({ key: key }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-parameter-references-v1
Get parameter references.
Get the references for a given parameter.

[API Spec](https://developer.sailpoint.com/docs/api/get-parameter-references-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetParameterReferencesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter which you want to fetch the references for. |  [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Observable<Array<ParameterStorageReference>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  getParameterReferencesV1(): void {
    const id: string = ; // The ID of the parameter which you want to fetch the references for.
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, consumerId, parameterId, name, usageHint** (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getParameterReferencesV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-parameter-storage-specification-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get specifications for parameter types.
Get the specifications for all parameter types. All parameters must conform to this specification document.

[API Spec](https://developer.sailpoint.com/docs/api/get-parameter-storage-specification-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetParameterStorageSpecificationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**acceptLanguage** | `string` | The i18n internationalization code for the language that the spec is in. Defaults to english. | [optional] [default to &#39;en&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  getParameterStorageSpecificationV1(): void {
    const acceptLanguage: string = ; // The i18n internationalization code for the language that the spec is in. Defaults to english. (optional)
    this.api.getParameterStorageSpecificationV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-parameter-v1
Get a specific parameter.
Get a parameter by ID. This will only return the public fields for the parameter.

[API Spec](https://developer.sailpoint.com/docs/api/get-parameter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetParameterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter to be fetched |  [default to undefined]

### Return type

`Observable<ParameterStorageParameter>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  getParameterV1(): void {
    const id: string = ; // The ID of the parameter to be fetched
    this.api.getParameterV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## search-parameters-v1
Query stored parameters.
Query a stored parameter.

[API Spec](https://developer.sailpoint.com/docs/api/search-parameters-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SearchParametersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** | [optional] [default to undefined]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Observable<Array<ParameterStorageParameter>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  searchParametersV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, ne*  **name**: *eq, in, co*  **description**: *co*  **ownerId**: *eq*  **type**: *eq, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, ownerId, type, description, lastModifiedAt, lastModifiedBy, privateFieldsLastModifiedAt, privateFieldsLastModifiedAt** (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.searchParametersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-parameter-v1
Update a parameter.
Update a parameter. You cannot change a parameter's type once set. Only the name, owner, description, public fields, and private fields can be updated. Private field updates are made via JWE AES256 encrypted blobs.

[API Spec](https://developer.sailpoint.com/docs/api/update-parameter-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateParameterV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the parameter to be updated. |  [default to undefined]
**parameterStorageUpdateParameter** | `ParameterStorageUpdateParameter` | The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. | [optional]

### Return type

`Observable<ParameterStorageParameter>`

### HTTP request headers

- **Content-Type**: application/json, application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ParameterStorageService } from '@sailpoint/angular-sdk/parameter_storage';
import { ParameterStorageUpdateParameter } from '@sailpoint/angular-sdk/parameter_storage';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ParameterStorageService);

  updateParameterV1(): void {
    const id: string = ; // The ID of the parameter to be updated.
    const parameterStorageUpdateParameter: ParameterStorageUpdateParameter = ; // The updated parameter. Supports both full and RFC 6902 JSON Patch updates. For RFC 6902 JSON Patch updates, move and copy operations are not supported for privateField updates. (optional)
    this.api.updateParameterV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

