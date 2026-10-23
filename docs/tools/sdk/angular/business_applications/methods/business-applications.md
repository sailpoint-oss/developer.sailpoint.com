# BusinessApplications

# BusinessApplicationsService
  A Business Application groups machine identities (for example AI agents or applications) under a common owner and sanctioned status. Business Applications can be defined out-of-the-box, discovered from a source, or created by an administrator. Signatures on a Business Application drive automatic correlation of machine identities to it; sanctioned status is independent metadata that machine identities inherit once linked. 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-business-application-v1**](#create-business-application-v1) | **POST** `/business-applications/v1` | Create Business Application
[**get-business-application-v1**](#get-business-application-v1) | **GET** `/business-applications/v1/{id}` | Get Business Application
[**list-business-applications-v1**](#list-business-applications-v1) | **GET** `/business-applications/v1` | List Business Applications
[**update-business-application-v1**](#update-business-application-v1) | **PATCH** `/business-applications/v1/{id}` | Update Business Application


## create-business-application-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create Business Application
Creates a custom Business Application. Requires the `idn:business-application:create` right, the Machine Identity Security product to be enabled, and the custom Business Application feature to be enabled for the tenant. The `name` must be unique within the tenant, and any provided `signatures` must not already be assigned to another Business Application.

[API Spec](https://developer.sailpoint.com/docs/api/create-business-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateBusinessApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**businessApplication** | `BusinessApplication` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<BusinessApplication>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BusinessApplicationsService } from '@sailpoint/angular-sdk/business_applications';
import { BusinessApplication } from '@sailpoint/angular-sdk/business_applications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BusinessApplicationsService);

  createBusinessApplicationV1(): void {
    const businessApplication: BusinessApplication = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createBusinessApplicationV1({ businessApplication: businessApplication }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-business-application-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get Business Application
Returns a single Business Application by ID for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled.

[API Spec](https://developer.sailpoint.com/docs/api/get-business-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetBusinessApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Business Application ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<BusinessApplication>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BusinessApplicationsService } from '@sailpoint/angular-sdk/business_applications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BusinessApplicationsService);

  getBusinessApplicationV1(): void {
    const id: string = ; // Business Application ID.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getBusinessApplicationV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-business-applications-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List Business Applications
Returns the list of Business Applications defined for the requesting tenant. Requires the `idn:business-application:read` right and the Machine Identity Security product to be enabled for the tenant.

[API Spec](https://developer.sailpoint.com/docs/api/list-business-applications-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListBusinessApplicationsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus** | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<BusinessApplication>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BusinessApplicationsService } from '@sailpoint/angular-sdk/business_applications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BusinessApplicationsService);

  listBusinessApplicationsV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq*  **name**: *eq, co*  **vendor**: *eq, co*  **signatures.type**: *eq, co*  **signatures.name**: *eq, co*  **source.name**: *eq, co*  **sanctionedStatus**: *eq* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, sanctionedStatus** (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listBusinessApplicationsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## update-business-application-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update Business Application
Updates a Business Application using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. Requires the `idn:business-application:update` right and the Machine Identity Security product to be enabled. Patchable fields: `name`, `description`, `owner`, `additionalOwners`, `sanctionedStatus`, and `signatures`. Modifying `signatures` additionally requires the custom Business Application feature to be enabled.

[API Spec](https://developer.sailpoint.com/docs/api/update-business-application-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `UpdateBusinessApplicationV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Business Application ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A JSON array of patch operations per RFC 6902. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<BusinessApplication>`

### HTTP request headers

- **Content-Type**: application/json-patch+json, application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BusinessApplicationsService } from '@sailpoint/angular-sdk/business_applications';
import { JsonPatchOperation } from '@sailpoint/angular-sdk/business_applications';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BusinessApplicationsService);

  updateBusinessApplicationV1(): void {
    const id: string = ; // Business Application ID.
    const jsonPatchOperation: Array<JsonPatchOperation> = ; // A JSON array of patch operations per RFC 6902.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.updateBusinessApplicationV1({ id: id, jsonPatchOperation: jsonPatchOperation }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

