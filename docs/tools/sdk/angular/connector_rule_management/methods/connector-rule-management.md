# ConnectorRuleManagement

# ConnectorRuleManagementService
  Use this API to implement connector rule management functionality. 
With this functionality in place, administrators can implement connector-executed rules in a programmatic, scalable way. 

In Identity Security Cloud (ISC), [rules](https://developer.sailpoint.com/docs/extensibility/rules) serve as a flexible configuration framework you can leverage to perform complex or advanced configurations. 
[Connector-executed rules](https://developer.sailpoint.com/docs/extensibility/rules/connector-rules) are rules that are executed in the ISC virtual appliance (VA), usually extensions of the [connector](https://documentation.sailpoint.com/connectors/isc/landingpages/help/landingpages/isc_landing.html) itself, the bridge between the data source and ISC. 

This API allows administrators to view existing connector-executed rules, make changes to them, delete them, and create new ones from the available types.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-connector-rule-v1**](#create-connector-rule-v1) | **POST** `/connector-rules/v1` | Create connector rule
[**delete-connector-rule-v1**](#delete-connector-rule-v1) | **DELETE** `/connector-rules/v1/{id}` | Delete connector rule
[**get-connector-rule-list-v1**](#get-connector-rule-list-v1) | **GET** `/connector-rules/v1` | List connector rules
[**get-connector-rule-v1**](#get-connector-rule-v1) | **GET** `/connector-rules/v1/{id}` | Get connector rule
[**put-connector-rule-v1**](#put-connector-rule-v1) | **PUT** `/connector-rules/v1/{id}` | Update connector rule
[**test-connector-rule-v1**](#test-connector-rule-v1) | **POST** `/connector-rules/v1/validate` | Validate connector rule


## create-connector-rule-v1
Create connector rule
Create a connector rule from the available types.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-rule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `CreateConnectorRuleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**connectorRuleCreateRequest** | `ConnectorRuleCreateRequest` | Connector rule to create. | 

### Return type

`Observable<ConnectorRuleResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorRuleManagementService } from '@sailpoint/angular-sdk/connector_rule_management';
import { ConnectorRuleCreateRequest } from '@sailpoint/angular-sdk/connector_rule_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorRuleManagementService);

  createConnectorRuleV1(): void {
    const connectorRuleCreateRequest: ConnectorRuleCreateRequest = ; // Connector rule to create.
    this.api.createConnectorRuleV1({ connectorRuleCreateRequest: connectorRuleCreateRequest }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## delete-connector-rule-v1
Delete connector rule
Delete the connector rule for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-connector-rule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `DeleteConnectorRuleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector rule to delete. |  [default to undefined]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorRuleManagementService } from '@sailpoint/angular-sdk/connector_rule_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorRuleManagementService);

  deleteConnectorRuleV1(): void {
    const id: string = ; // ID of the connector rule to delete.
    this.api.deleteConnectorRuleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-rule-list-v1
List connector rules
List existing connector rules.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-rule-list-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorRuleListV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Observable<Array<ConnectorRuleResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorRuleManagementService } from '@sailpoint/angular-sdk/connector_rule_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorRuleManagementService);

  getConnectorRuleListV1(): void {
    const limit: number = ; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    this.api.getConnectorRuleListV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-connector-rule-v1
Get connector rule
Get a connector rule by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-rule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetConnectorRuleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector rule to get. |  [default to undefined]

### Return type

`Observable<ConnectorRuleResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorRuleManagementService } from '@sailpoint/angular-sdk/connector_rule_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorRuleManagementService);

  getConnectorRuleV1(): void {
    const id: string = ; // ID of the connector rule to get.
    this.api.getConnectorRuleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## put-connector-rule-v1
Update connector rule
Update an existing connector rule with the one provided in the request body. These fields are immutable: `id`, `name`, `type`

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-rule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `PutConnectorRuleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector rule to update. |  [default to undefined]
**connectorRuleUpdateRequest** | `ConnectorRuleUpdateRequest` | Connector rule with updated data. | [optional]

### Return type

`Observable<ConnectorRuleResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorRuleManagementService } from '@sailpoint/angular-sdk/connector_rule_management';
import { ConnectorRuleUpdateRequest } from '@sailpoint/angular-sdk/connector_rule_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorRuleManagementService);

  putConnectorRuleV1(): void {
    const id: string = ; // ID of the connector rule to update.
    const connectorRuleUpdateRequest: ConnectorRuleUpdateRequest = ; // Connector rule with updated data. (optional)
    this.api.putConnectorRuleV1({ id: id }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## test-connector-rule-v1
Validate connector rule
Detect issues within the connector rule's code to fix and list them.

[API Spec](https://developer.sailpoint.com/docs/api/test-connector-rule-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `TestConnectorRuleV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceCode** | `SourceCode` | Code to validate. | 

### Return type

`Observable<ConnectorRuleValidationResponse>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { ConnectorRuleManagementService } from '@sailpoint/angular-sdk/connector_rule_management';
import { SourceCode } from '@sailpoint/angular-sdk/connector_rule_management';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(ConnectorRuleManagementService);

  testConnectorRuleV1(): void {
    const sourceCode: SourceCode = ; // Code to validate.
    this.api.testConnectorRuleV1({ sourceCode: sourceCode }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

