# EntitlementConnections

# EntitlementConnectionsApi
  Use this API to search and manage entitlement connections.
Entitlement connections represent the relationship between an identity account and an entitlement on a source, including its access type and JIT lifecycle state.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list-entitlement-connections-for-current-identity-v1**](#list-entitlement-connections-for-current-identity-v1) | **GET** `/entitlement-connections/v1/current-identity` | List my entitlement connections
[**list-entitlement-connections-v1**](#list-entitlement-connections-v1) | **GET** `/entitlement-connections/v1` | List entitlement connections
[**patch-entitlement-connection-by-id-v1**](#patch-entitlement-connection-by-id-v1) | **PATCH** `/entitlement-connections/v1/{connectionId}` | Update entitlement connection


## list-entitlement-connections-for-current-identity-v1
List my entitlement connections
Returns entitlement connections constrained to the authenticated identity.
This endpoint proxies to Search and supports standard collection query parameters.


[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-connections-for-current-identity-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**searchAfter** | `string` | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  | [optional] [default to undefined]

### Return type

`Array<EntitlementConnectionSearchHit>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementConnectionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementConnectionsApi(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const searchAfter: string = Account Payable,2c91808375d8e80a0175e1f88a575221; // Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. (optional)
const filters: string = state.value co "Available"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  The authenticated identity scope is always applied by the service.  (optional)
const sorters: string = id; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  (optional)
const result = await apiInstance.listEntitlementConnectionsForCurrentIdentityV1({  });
console.log(result);
```

[[Back to top]](#)

## list-entitlement-connections-v1
List entitlement connections
Returns entitlement connections for the tenant.

This endpoint proxies to Search and supports standard collection query parameters.
The `filters` and `sorters` values support the Entitlement Connections search fields documented by ECS.


[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-connections-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**searchAfter** | `string` | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with &#x60;-&#x60; for descending order.  | [optional] [default to undefined]

### Return type

`Array<EntitlementConnectionSearchHit>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementConnectionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementConnectionsApi(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const searchAfter: string = Account Payable,2c91808375d8e80a0175e1f88a575221; // Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. (optional)
const filters: string = type eq "JIT"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identity.id**: *eq, in*  **identity.name**: *eq, in, co*  **source.id**: *eq, in*  **source.name**: *eq, in, co*  **account.id**: *eq, in*  **account.name**: *eq, in, co*  **entitlement.id**: *eq, in*  **entitlement.attribute**: *eq, in, co*  **entitlement.value**: *eq, in, co*  **entitlement.privilegeLevel.effective**: *eq, in, co*  **type**: *eq, in*  **state.value**: *eq, in, co*  **standalone**: *eq, in*  **jit.activation**: *gt, lt, ge, le*  **jit.provision**: *gt, lt, ge, le*  **jit.deactivation**: *gt, lt, ge, le*  **jit.deprovision**: *gt, lt, ge, le*  **jit.expiration**: *gt, lt, ge, le*  (optional)
const sorters: string = -type,id; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, identity.id, identity.name, source.id, source.name, account.id, account.name, entitlement.id, entitlement.displayName, entitlement.attribute, entitlement.privilegeLevel.effective, type, state.value, standalone, jit.activation, jit.provision, jit.deactivation, jit.deprovision, jit.expiration**  Prefix a field with &#x60;-&#x60; for descending order.  (optional)
const result = await apiInstance.listEntitlementConnectionsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-entitlement-connection-by-id-v1
Update entitlement connection
Applies JSON Patch operations to an entitlement connection selected by `connectionId`.


[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-connection-by-id-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**connectionId** | `string` | Connection ID (UUID with or without hyphens). |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | 

### Return type

`EntitlementConnection`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { EntitlementConnectionsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/entitlement_connections/api';

const configuration = new Configuration();
const apiInstance = new EntitlementConnectionsApi(configuration);
const connectionId: string = 6c692d9972f8400ca4560a68f62c4c5f; // Connection ID (UUID with or without hyphens).
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // 
const result = await apiInstance.patchEntitlementConnectionByIdV1({ connectionId: connectionId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

