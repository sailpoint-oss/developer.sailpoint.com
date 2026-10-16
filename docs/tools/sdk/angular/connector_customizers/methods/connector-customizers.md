# ConnectorCustomizers

# ConnectorCustomizersService
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-customizer-v1**](#create-connector-customizer-v1) | **POST** `/connector-customizers/v1` | Create connector customizer
[**create-connector-customizer-version-v1**](#create-connector-customizer-version-v1) | **POST** `/connector-customizers/v1/{id}/versions` | Creates a connector customizer version
[**delete-connector-customizer-v1**](#delete-connector-customizer-v1) | **DELETE** `/connector-customizers/v1/{id}` | Delete connector customizer
[**get-connector-customizer-v1**](#get-connector-customizer-v1) | **GET** `/connector-customizers/v1/{id}` | Get connector customizer
[**list-connector-customizers-v1**](#list-connector-customizers-v1) | **GET** `/connector-customizers/v1` | List all connector customizers
[**put-connector-customizer-v1**](#put-connector-customizer-v1) | **PUT** `/connector-customizers/v1/{id}` | Update connector customizer


## create-connector-customizer-v1
Create connector customizer
Create a connector customizer.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-customizer-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateConnectorCustomizerV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**connectorCustomizerCreateRequest** | `ConnectorCustomizerCreateRequest` | Connector customizer to create. | 

### Return type

`Observable<ConnectorCustomizerCreateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorCustomizersService } from '@sailpoint/angular-sdk/connector_customizers';
import { ConnectorCustomizerCreateRequest } from '@sailpoint/angular-sdk/connector_customizers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorCustomizersService);

  createConnectorCustomizerV1(): void {
    const connectorCustomizerCreateRequest: ConnectorCustomizerCreateRequest = ; // Connector customizer to create.
    this.api.createConnectorCustomizerV1({ connectorCustomizerCreateRequest: connectorCustomizerCreateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## create-connector-customizer-version-v1
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-customizer-version-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateConnectorCustomizerVersionV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the connector customizer. |  [default to undefined]

### Return type

`Observable<ConnectorCustomizerVersionCreateResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorCustomizersService } from '@sailpoint/angular-sdk/connector_customizers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorCustomizersService);

  createConnectorCustomizerVersionV1(): void {
    const id: string = ; // The id of the connector customizer.
    this.api.createConnectorCustomizerVersionV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-connector-customizer-v1
Delete connector customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-connector-customizer-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteConnectorCustomizerV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorCustomizersService } from '@sailpoint/angular-sdk/connector_customizers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorCustomizersService);

  deleteConnectorCustomizerV1(): void {
    const id: string = ; // ID of the connector customizer to delete.
    this.api.deleteConnectorCustomizerV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-customizer-v1
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-customizer-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorCustomizerV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to get. |  [default to undefined]

### Return type

`Observable<ConnectorCustomizersResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorCustomizersService } from '@sailpoint/angular-sdk/connector_customizers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorCustomizersService);

  getConnectorCustomizerV1(): void {
    const id: string = ; // ID of the connector customizer to get.
    this.api.getConnectorCustomizerV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-connector-customizers-v1
List all connector customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/list-connector-customizers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListConnectorCustomizersV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Observable<Array<ConnectorCustomizersResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorCustomizersService } from '@sailpoint/angular-sdk/connector_customizers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorCustomizersService);

  listConnectorCustomizersV1(): void {
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.listConnectorCustomizersV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-connector-customizer-v1
Update connector customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-customizer-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutConnectorCustomizerV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to update. |  [default to undefined]
**connectorCustomizerUpdateRequest** | `ConnectorCustomizerUpdateRequest` | Connector rule with updated data. | [optional]

### Return type

`Observable<ConnectorCustomizerUpdateResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorCustomizersService } from '@sailpoint/angular-sdk/connector_customizers';
import { ConnectorCustomizerUpdateRequest } from '@sailpoint/angular-sdk/connector_customizers';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorCustomizersService);

  putConnectorCustomizerV1(): void {
    const id: string = ; // ID of the connector customizer to update.
    const connectorCustomizerUpdateRequest: ConnectorCustomizerUpdateRequest = ; // Connector rule with updated data. (optional)
    this.api.putConnectorCustomizerV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

