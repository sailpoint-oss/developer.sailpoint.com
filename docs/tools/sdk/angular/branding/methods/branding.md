# Branding

# BrandingService
  Use this API to implement and customize branding functionality. 
With this functionality in place, administrators can get and manage existing branding items, and they can also create new branding items and configure them for use throughout Identity Security Cloud. 
The Branding APIs provide administrators with a way to customize branding items. 
This customization includes details like their colors, logos, and other information. 
Refer to [Certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) for more information about certifications.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-branding-item-v1**](#create-branding-item-v1) | **POST** `/brandings/v1` | Create a branding item
[**delete-branding-v1**](#delete-branding-v1) | **DELETE** `/brandings/v1/{name}` | Delete a branding item
[**get-branding-list-v1**](#get-branding-list-v1) | **GET** `/brandings/v1` | List of branding items
[**get-branding-v1**](#get-branding-v1) | **GET** `/brandings/v1/{name}` | Get a branding item
[**set-branding-item-v1**](#set-branding-item-v1) | **PUT** `/brandings/v1/{name}` | Update a branding item


## create-branding-item-v1
Create a branding item
This API endpoint creates a branding item.

[API Spec](https://developer.sailpoint.com/docs/api/create-branding-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateBrandingItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | name of branding item |  [default to undefined]
**productName** | `string` | product name |  [default to undefined]
**actionButtonColor** | `string` | hex value of color for action button | [optional] [default to undefined]
**activeLinkColor** | `string` | hex value of color for link | [optional] [default to undefined]
**navigationColor** | `string` | hex value of color for navigation bar | [optional] [default to undefined]
**emailFromAddress** | `string` | email from address | [optional] [default to undefined]
**loginInformationalMessage** | `string` | login information message | [optional] [default to undefined]
**fileStandard** | `Blob` | png file with logo | [optional] [default to undefined]

### Return type

`Observable<BrandingItem>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BrandingService } from '@sailpoint/angular-sdk/branding';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BrandingService);

  createBrandingItemV1(): void {
    const name: string = ; // name of branding item
    const productName: string = ; // product name
    const actionButtonColor: string = ; // hex value of color for action button (optional)
    const activeLinkColor: string = ; // hex value of color for link (optional)
    const navigationColor: string = ; // hex value of color for navigation bar (optional)
    const emailFromAddress: string = ; // email from address (optional)
    const loginInformationalMessage: string = ; // login information message (optional)
    const fileStandard: Blob = ; // png file with logo (optional)
    this.api.createBrandingItemV1({ name: name, productName: productName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-branding-v1
Delete a branding item
This API endpoint delete information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/delete-branding-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteBrandingV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The name of the branding item to be deleted |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BrandingService } from '@sailpoint/angular-sdk/branding';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BrandingService);

  deleteBrandingV1(): void {
    const name: string = ; // The name of the branding item to be deleted
    this.api.deleteBrandingV1({ name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-branding-list-v1
List of branding items
This API endpoint returns a list of branding items.

[API Spec](https://developer.sailpoint.com/docs/api/get-branding-list-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetBrandingListV1RequestParams`.

This endpoint does not need any parameter.

### Return type

`Observable<Array<BrandingItem>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BrandingService } from '@sailpoint/angular-sdk/branding';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BrandingService);

  getBrandingListV1(): void {
    this.api.getBrandingListV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-branding-v1
Get a branding item
This API endpoint retrieves information for an existing branding item by name.    

[API Spec](https://developer.sailpoint.com/docs/api/get-branding-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetBrandingV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The name of the branding item to be retrieved |  [default to undefined]

### Return type

`Observable<BrandingItem>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BrandingService } from '@sailpoint/angular-sdk/branding';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BrandingService);

  getBrandingV1(): void {
    const name: string = ; // The name of the branding item to be retrieved
    this.api.getBrandingV1({ name: name }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## set-branding-item-v1
Update a branding item
This API endpoint updates information for an existing branding item.

[API Spec](https://developer.sailpoint.com/docs/api/set-branding-item-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `SetBrandingItemV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The name of the branding item to be retrieved |  [default to undefined]
**name2** | `string` | name of branding item |  [default to undefined]
**productName** | `string` | product name |  [default to undefined]
**actionButtonColor** | `string` | hex value of color for action button | [optional] [default to undefined]
**activeLinkColor** | `string` | hex value of color for link | [optional] [default to undefined]
**navigationColor** | `string` | hex value of color for navigation bar | [optional] [default to undefined]
**emailFromAddress** | `string` | email from address | [optional] [default to undefined]
**loginInformationalMessage** | `string` | login information message | [optional] [default to undefined]
**fileStandard** | `Blob` | png file with logo | [optional] [default to undefined]

### Return type

`Observable<BrandingItem>`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { BrandingService } from '@sailpoint/angular-sdk/branding';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(BrandingService);

  setBrandingItemV1(): void {
    const name: string = ; // The name of the branding item to be retrieved
    const name2: string = ; // name of branding item
    const productName: string = ; // product name
    const actionButtonColor: string = ; // hex value of color for action button (optional)
    const activeLinkColor: string = ; // hex value of color for link (optional)
    const navigationColor: string = ; // hex value of color for navigation bar (optional)
    const emailFromAddress: string = ; // email from address (optional)
    const loginInformationalMessage: string = ; // login information message (optional)
    const fileStandard: Blob = ; // png file with logo (optional)
    this.api.setBrandingItemV1({ name: name, name2: name2, productName: productName }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

