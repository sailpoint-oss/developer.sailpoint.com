# MachineAccountMappings

# MachineAccountMappingsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-machine-account-mappings-v1**](#create-machine-account-mappings-v1) | **POST** `/sources/v1/{sourceId}/machine-account-mappings` | Create machine account mappings
[**delete-machine-account-mappings-v1**](#delete-machine-account-mappings-v1) | **DELETE** `/sources/v1/{sourceId}/machine-account-mappings` | Delete source\&#39;s machine account mappings
[**list-machine-account-mappings-v1**](#list-machine-account-mappings-v1) | **GET** `/sources/v1/{sourceId}/machine-account-mappings` | Machine account mapping for source
[**set-machine-account-mappings-v1**](#set-machine-account-mappings-v1) | **PUT** `/sources/v1/{sourceId}/machine-account-mappings` | Update source\&#39;s machine account mappings


## create-machine-account-mappings-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create machine account mappings
Creates Machine Account Mappings for both identities and accounts for a source.
A token with API, ORG_ADMIN, ROLE_ADMIN, ROLE_SUBADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/create-machine-account-mappings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**attributeMappings** | `AttributeMappings` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<AttributeMappings>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AttributeMappings } from '@sailpoint/api-client/dist/machine_account_mappings/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const attributeMappings: AttributeMappings = {
  "transformDefinition" : {
    "attributes" : {
      "input" : {
        "attributes" : {
          "name" : "8d3e0094e99445de98eef6c75e25jc04",
          "attributeName" : "givenName",
          "sourceName" : "delimited-src"
        },
        "type" : "accountAttribute"
      }
    },
    "id" : "ToUpper",
    "type" : "reference"
  },
  "target" : {
    "sourceId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeName" : "businessApplication",
    "type" : "IDENTITY"
  }
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createMachineAccountMappingsV1({ sourceId: sourceId, attributeMappings: attributeMappings });
console.log(result);
```

[[Back to top]](#)

## delete-machine-account-mappings-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete source\'s machine account mappings
Use this API to remove machine account attribute mappings for a Source. 
A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/delete-machine-account-mappings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | source ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // source ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteMachineAccountMappingsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## list-machine-account-mappings-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Machine account mapping for source
Retrieves Machine account mappings for a specified source using Source ID.

[API Spec](https://developer.sailpoint.com/docs/api/list-machine-account-mappings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<AttributeMappings>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listMachineAccountMappingsV1({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## set-machine-account-mappings-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update source\'s machine account mappings
Use this API to update Machine Account Attribute Mapping for a Source. A token with ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/set-machine-account-mappings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | Source ID. |  [default to undefined]
**attributeMappings** | `AttributeMappings` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<AttributeMappings>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { MachineAccountMappingsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AttributeMappings } from '@sailpoint/api-client/dist/machine_account_mappings/api';

const configuration = new Configuration();
const apiInstance = new MachineAccountMappingsApi(configuration);
const sourceId: string = ef38f94347e94562b5bb8424a56397d8; // Source ID.
const attributeMappings: AttributeMappings = {
  "transformDefinition" : {
    "attributes" : {
      "input" : {
        "attributes" : {
          "name" : "8d3e0094e99445de98eef6c75e25jc04",
          "attributeName" : "givenName",
          "sourceName" : "delimited-src"
        },
        "type" : "accountAttribute"
      }
    },
    "id" : "ToUpper",
    "type" : "reference"
  },
  "target" : {
    "sourceId" : "2c9180835d2e5168015d32f890ca1581",
    "attributeName" : "businessApplication",
    "type" : "IDENTITY"
  }
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.setMachineAccountMappingsV1({ sourceId: sourceId, attributeMappings: attributeMappings });
console.log(result);
```

[[Back to top]](#)

