# IdentityAttributes

# IdentityAttributesService
   
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute-v1**](#create-identity-attribute-v1) | **POST** `/identity-attributes/v1` | Create identity attribute
[**delete-identity-attribute-v1**](#delete-identity-attribute-v1) | **DELETE** `/identity-attributes/v1/{name}` | Delete identity attribute
[**delete-identity-attributes-in-bulk-v1**](#delete-identity-attributes-in-bulk-v1) | **DELETE** `/identity-attributes/v1/bulk-delete` | Bulk delete identity attributes
[**get-identity-attribute-v1**](#get-identity-attribute-v1) | **GET** `/identity-attributes/v1/{name}` | Get identity attribute
[**list-identity-attributes-v1**](#list-identity-attributes-v1) | **GET** `/identity-attributes/v1` | List identity attributes
[**put-identity-attribute-v1**](#put-identity-attribute-v1) | **PUT** `/identity-attributes/v1/{name}` | Update identity attribute


## create-identity-attribute-v1
Create identity attribute
Use this API to create a new identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateIdentityAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityAttribute2** | `IdentityAttribute2` |  | 

### Return type

`Observable<IdentityAttribute2>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityAttributesService } from '@sailpoint/angular-sdk/identity_attributes';
import { IdentityAttribute2 } from '@sailpoint/angular-sdk/identity_attributes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityAttributesService);

  createIdentityAttributeV1(): void {
    const identityAttribute2: IdentityAttribute2 = ; // 
    this.api.createIdentityAttributeV1({ identityAttribute2: identityAttribute2 }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-identity-attribute-v1
Delete identity attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteIdentityAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The attribute\&#39;s technical name. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityAttributesService } from '@sailpoint/angular-sdk/identity_attributes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityAttributesService);

  deleteIdentityAttributeV1(): void {
    const name: string = ; // The attribute\&#39;s technical name.
    this.api.deleteIdentityAttributeV1({ name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-identity-attributes-in-bulk-v1
Bulk delete identity attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-attributes-in-bulk-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteIdentityAttributesInBulkV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityAttributeNames** | `IdentityAttributeNames` |  | 

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityAttributesService } from '@sailpoint/angular-sdk/identity_attributes';
import { IdentityAttributeNames } from '@sailpoint/angular-sdk/identity_attributes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityAttributesService);

  deleteIdentityAttributesInBulkV1(): void {
    const identityAttributeNames: IdentityAttributeNames = ; // 
    this.api.deleteIdentityAttributesInBulkV1({ identityAttributeNames: identityAttributeNames }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-identity-attribute-v1
Get identity attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetIdentityAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The attribute\&#39;s technical name. |  [default to undefined]

### Return type

`Observable<IdentityAttribute2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityAttributesService } from '@sailpoint/angular-sdk/identity_attributes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityAttributesService);

  getIdentityAttributeV1(): void {
    const name: string = ; // The attribute\&#39;s technical name.
    this.api.getIdentityAttributeV1({ name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-identity-attributes-v1
List identity attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-attributes-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListIdentityAttributesV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**includeSystem** | `boolean` | Include \&#39;system\&#39; attributes in the response. | [optional] [default to false]
**includeSilent** | `boolean` | Include \&#39;silent\&#39; attributes in the response. | [optional] [default to false]
**searchableOnly** | `boolean` | Include only \&#39;searchable\&#39; attributes in the response. | [optional] [default to false]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<IdentityAttribute2>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityAttributesService } from '@sailpoint/angular-sdk/identity_attributes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityAttributesService);

  listIdentityAttributesV1(): void {
    const includeSystem: boolean = ; // Include \&#39;system\&#39; attributes in the response. (optional)
    const includeSilent: boolean = ; // Include \&#39;silent\&#39; attributes in the response. (optional)
    const searchableOnly: boolean = ; // Include only \&#39;searchable\&#39; attributes in the response. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listIdentityAttributesV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-identity-attribute-v1
Update identity attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

[API Spec](https://developer.sailpoint.com/docs/api/put-identity-attribute-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutIdentityAttributeV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The attribute\&#39;s technical name. |  [default to undefined]
**identityAttribute2** | `IdentityAttribute2` |  | 

### Return type

`Observable<IdentityAttribute2>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { IdentityAttributesService } from '@sailpoint/angular-sdk/identity_attributes';
import { IdentityAttribute2 } from '@sailpoint/angular-sdk/identity_attributes';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(IdentityAttributesService);

  putIdentityAttributeV1(): void {
    const name: string = ; // The attribute\&#39;s technical name.
    const identityAttribute2: IdentityAttribute2 = ; // 
    this.api.putIdentityAttributeV1({ name: name, identityAttribute2: identityAttribute2 }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

