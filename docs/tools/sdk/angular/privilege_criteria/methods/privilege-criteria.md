# PrivilegeCriteria

# PrivilegeCriteriaService
  Use this API to create, retrieve, update, and delete privilege criteria.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-custom-privilege-criteria-v1**](#create-custom-privilege-criteria-v1) | **POST** `/criteria/v1/privilege` | Create custom privilege criteria
[**delete-custom-privilege-criteria-v1**](#delete-custom-privilege-criteria-v1) | **DELETE** `/criteria/v1/privilege/{criteriaId}` | Delete privilege criteria
[**get-privilege-criteria-v1**](#get-privilege-criteria-v1) | **GET** `/criteria/v1/privilege/{criteriaId}` | Get privilege criteria
[**list-privilege-criteria-v1**](#list-privilege-criteria-v1) | **GET** `/criteria/v1/privilege` | List privilege criteria
[**put-custom-privilege-criteria-value-v1**](#put-custom-privilege-criteria-value-v1) | **PUT** `/criteria/v1/privilege/{criteriaId}` | Update privilege criteria


## create-custom-privilege-criteria-v1
Create custom privilege criteria
Use this API to create a custom privilege criteria

[API Spec](https://developer.sailpoint.com/docs/api/create-custom-privilege-criteria-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateCustomPrivilegeCriteriaV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**createPrivilegeCriteriaRequest** | `CreatePrivilegeCriteriaRequest` | Create custom privilege criteria request body. | 

### Return type

`Observable<PrivilegeCriteriaDTO>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaService } from '@sailpoint/angular-sdk/privilege_criteria';
import { CreatePrivilegeCriteriaRequest } from '@sailpoint/angular-sdk/privilege_criteria';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaService);

  createCustomPrivilegeCriteriaV1(): void {
    const createPrivilegeCriteriaRequest: CreatePrivilegeCriteriaRequest = ; // Create custom privilege criteria request body.
    this.api.createCustomPrivilegeCriteriaV1({ createPrivilegeCriteriaRequest: createPrivilegeCriteriaRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-custom-privilege-criteria-v1
Delete privilege criteria
Use this API to delete a specific custom privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/delete-custom-privilege-criteria-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteCustomPrivilegeCriteriaV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the custom privilege criteria to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaService } from '@sailpoint/angular-sdk/privilege_criteria';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaService);

  deleteCustomPrivilegeCriteriaV1(): void {
    const criteriaId: string = ; // The Id of the custom privilege criteria to delete.
    this.api.deleteCustomPrivilegeCriteriaV1({ criteriaId: criteriaId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-privilege-criteria-v1
Get privilege criteria
Use this API to get a specific privilege criteria.

[API Spec](https://developer.sailpoint.com/docs/api/get-privilege-criteria-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetPrivilegeCriteriaV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the privilege criteria record to return. |  [default to undefined]

### Return type

`Observable<PrivilegeCriteriaDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaService } from '@sailpoint/angular-sdk/privilege_criteria';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaService);

  getPrivilegeCriteriaV1(): void {
    const criteriaId: string = ; // The Id of the privilege criteria record to return.
    this.api.getPrivilegeCriteriaV1({ criteriaId: criteriaId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-privilege-criteria-v1
List privilege criteria
Use this API to list all privilege criteria matching a filter

[API Spec](https://developer.sailpoint.com/docs/api/list-privilege-criteria-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListPrivilegeCriteriaV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60; |  [default to undefined]

### Return type

`Observable<Array<PrivilegeCriteriaDTO>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaService } from '@sailpoint/angular-sdk/privilege_criteria';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaService);

  listPrivilegeCriteriaV1(): void {
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **type**: *eq*  **sourceId**: *eq*  **privilegeLevel**: *eq*  **Supported composite operators**: *and*  All filter values are case-sensitive for this API.  For example, the following is valid: &#x60;?filters&#x3D;type eq \&quot;CUSTOM\&quot; and sourceId eq \&quot;2c91809175e6c63f0175fb5570220569\&quot;&#x60;
    this.api.listPrivilegeCriteriaV1({ filters: filters }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-custom-privilege-criteria-value-v1
Update privilege criteria
Use this API to update a specific custom privilege criteria by overwriting the information with new information.

[API Spec](https://developer.sailpoint.com/docs/api/put-custom-privilege-criteria-value-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutCustomPrivilegeCriteriaValueV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**criteriaId** | `string` | The Id of the privilege criteria record to return. |  [default to undefined]
**privilegeCriteriaDTO** | `PrivilegeCriteriaDTO` | The new version of the custom privilege criteria. This overwrites the existing privilege criteria. | 

### Return type

`Observable<PrivilegeCriteriaDTO>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { PrivilegeCriteriaService } from '@sailpoint/angular-sdk/privilege_criteria';
import { PrivilegeCriteriaDTO } from '@sailpoint/angular-sdk/privilege_criteria';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(PrivilegeCriteriaService);

  putCustomPrivilegeCriteriaValueV1(): void {
    const criteriaId: string = ; // The Id of the privilege criteria record to return.
    const privilegeCriteriaDTO: PrivilegeCriteriaDTO = ; // The new version of the custom privilege criteria. This overwrites the existing privilege criteria.
    this.api.putCustomPrivilegeCriteriaValueV1({ criteriaId: criteriaId, privilegeCriteriaDTO: privilegeCriteriaDTO }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

