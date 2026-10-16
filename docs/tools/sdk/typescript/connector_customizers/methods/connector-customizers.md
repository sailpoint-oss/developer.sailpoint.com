# ConnectorCustomizers

# ConnectorCustomizersApi
  Saas Connectivity Customizers are cloud-based connector customizers. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors.

Use these APIs to implement connector customizers functionality.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

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


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**connectorCustomizerCreateRequest** | `ConnectorCustomizerCreateRequest` | Connector customizer to create. | 

### Return type

`ConnectorCustomizerCreateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ConnectorCustomizerCreateRequest } from '@sailpoint/api-client/dist/connector_customizers/api';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersApi(configuration);
const connectorCustomizerCreateRequest: ConnectorCustomizerCreateRequest = {
  "name" : "My Custom Connector"
}; // Connector customizer to create.
const result = await apiInstance.createConnectorCustomizerV1({ connectorCustomizerCreateRequest: connectorCustomizerCreateRequest });
console.log(result);
```

[[Back to top]](#)

## create-connector-customizer-version-v1
Creates a connector customizer version
Creates a new version for the customizer.

[API Spec](https://developer.sailpoint.com/docs/api/create-connector-customizer-version-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the connector customizer. |  [default to undefined]

### Return type

`ConnectorCustomizerVersionCreateResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersApi(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // The id of the connector customizer.
const result = await apiInstance.createConnectorCustomizerVersionV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-connector-customizer-v1
Delete connector customizer
Delete the connector customizer for the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-connector-customizer-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersApi(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // ID of the connector customizer to delete.
const result = await apiInstance.deleteConnectorCustomizerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-connector-customizer-v1
Get connector customizer
Gets connector customizer by ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-connector-customizer-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to get. |  [default to undefined]

### Return type

`ConnectorCustomizersResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersApi(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // ID of the connector customizer to get.
const result = await apiInstance.getConnectorCustomizerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-connector-customizers-v1
List all connector customizers
List all connector customizers.

[API Spec](https://developer.sailpoint.com/docs/api/list-connector-customizers-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]

### Return type

`Array<ConnectorCustomizersResponse>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersApi(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listConnectorCustomizersV1({  });
console.log(result);
```

[[Back to top]](#)

## put-connector-customizer-v1
Update connector customizer
Update an existing connector customizer with the one provided in the request body. These fields are immutable: `id`, `name`, `type`.

[API Spec](https://developer.sailpoint.com/docs/api/put-connector-customizer-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the connector customizer to update. |  [default to undefined]
**connectorCustomizerUpdateRequest** | `ConnectorCustomizerUpdateRequest` | Connector rule with updated data. | [optional]

### Return type

`ConnectorCustomizerUpdateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ConnectorCustomizersApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ConnectorCustomizerUpdateRequest } from '@sailpoint/api-client/dist/connector_customizers/api';

const configuration = new Configuration();
const apiInstance = new ConnectorCustomizersApi(configuration);
const id: string = b07dc46a-1498-4de8-bfbb-259a68e70c8a; // ID of the connector customizer to update.
const connectorCustomizerUpdateRequest: ConnectorCustomizerUpdateRequest = {
  "name" : "My Custom Connector"
}; // Connector rule with updated data. (optional)
const result = await apiInstance.putConnectorCustomizerV1({ id: id });
console.log(result);
```

[[Back to top]](#)

