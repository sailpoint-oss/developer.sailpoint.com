# Entitlements

# EntitlementsApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-for-entitlement-v1**](#create-access-model-metadata-for-entitlement-v1) | **POST** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Add metadata to an entitlement.
[**delete-access-model-metadata-from-entitlement-v1**](#delete-access-model-metadata-from-entitlement-v1) | **DELETE** `/entitlements/v1/{id}/access-model-metadata/{attributeKey}/values/{attributeValue}` | Remove metadata from an entitlement.
[**get-entitlement-request-config-v1**](#get-entitlement-request-config-v1) | **GET** `/entitlements/v1/{id}/entitlement-request-config` | Get entitlement request config
[**get-entitlement-v1**](#get-entitlement-v1) | **GET** `/entitlements/v1/{id}` | Get an entitlement
[**import-entitlements-by-source-v1**](#import-entitlements-by-source-v1) | **POST** `/entitlements/v1/aggregate/sources/{id}` | Aggregate entitlements
[**list-entitlement-children-v1**](#list-entitlement-children-v1) | **GET** `/entitlements/v1/{id}/children` | List of entitlements children
[**list-entitlement-parents-v1**](#list-entitlement-parents-v1) | **GET** `/entitlements/v1/{id}/parents` | List of entitlements parents
[**list-entitlements-by-account-v1**](#list-entitlements-by-account-v1) | **GET** `/entitlements/v1/account/{accountId}/entitlements` | Get entitlements for an account
[**list-entitlements-v1**](#list-entitlements-v1) | **GET** `/entitlements/v1` | Gets a list of entitlements.
[**patch-entitlement-v1**](#patch-entitlement-v1) | **PATCH** `/entitlements/v1/{id}` | Patch an entitlement
[**put-entitlement-request-config-v1**](#put-entitlement-request-config-v1) | **PUT** `/entitlements/v1/{id}/entitlement-request-config` | Replace entitlement request config
[**reset-source-entitlements-v1**](#reset-source-entitlements-v1) | **POST** `/entitlements/v1/reset/sources/{id}` | Reset source entitlements
[**update-entitlements-in-bulk-v1**](#update-entitlements-in-bulk-v1) | **POST** `/entitlements/v1/bulk-update` | Bulk update an entitlement list
[**update-entitlements-metadata-by-filter-v1**](#update-entitlements-metadata-by-filter-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/filter` | Bulk-update metadata by filter
[**update-entitlements-metadata-by-ids-v1**](#update-entitlements-metadata-by-ids-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/ids` | Bulk-update metadata by ids
[**update-entitlements-metadata-by-query-v1**](#update-entitlements-metadata-by-query-v1) | **POST** `/entitlements/v1/access-model-metadata/bulk-update/query` | Bulk-update metadata by query


## create-access-model-metadata-for-entitlement-v1
Add metadata to an entitlement.
Add single Access Model Metadata to an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-for-entitlement-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The entitlement id. |  [default to undefined]
**attributeKey** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValue** | `string` | Technical name of the Attribute Value. |  [default to undefined]

### Return type

`Entitlement`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808c74ff913f0175097daa9d59cd; // The entitlement id.
const attributeKey: string = iscPrivacy; // Technical name of the Attribute.
const attributeValue: string = public; // Technical name of the Attribute Value.
const result = await apiInstance.createAccessModelMetadataForEntitlementV1({ id: id, attributeKey: attributeKey, attributeValue: attributeValue });
console.log(result);
```

[[Back to top]](#)

## delete-access-model-metadata-from-entitlement-v1
Remove metadata from an entitlement.
Remove single Access Model Metadata from an entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-from-entitlement-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The entitlement id. |  [default to undefined]
**attributeKey** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValue** | `string` | Technical name of the Attribute Value. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808c74ff913f0175097daa9d59cd; // The entitlement id.
const attributeKey: string = iscPrivacy; // Technical name of the Attribute.
const attributeValue: string = public; // Technical name of the Attribute Value.
const result = await apiInstance.deleteAccessModelMetadataFromEntitlementV1({ id: id, attributeKey: attributeKey, attributeValue: attributeValue });
console.log(result);
```

[[Back to top]](#)

## get-entitlement-request-config-v1
Get entitlement request config
This API returns the entitlement request config for a specified entitlement.
The `accessRequestConfig.formDefinitionId` field associates an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-request-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Entitlement Id |  [default to undefined]

### Return type

`EntitlementRequestConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808874ff91550175097daaec161c; // Entitlement Id
const result = await apiInstance.getEntitlementRequestConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-entitlement-v1
Get an entitlement
This API returns an entitlement by its ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-entitlement-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The entitlement ID |  [default to undefined]

### Return type

`EntitlementV2`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808874ff91550175097daaec161c; // The entitlement ID
const result = await apiInstance.getEntitlementV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## import-entitlements-by-source-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Aggregate entitlements
Starts an entitlement aggregation on the specified source. Though this endpoint has been deprecated, you can find its Beta equivalent [here](https://developer.sailpoint.com/docs/api/import-entitlements-v-1).

If the target source is a direct connection, then the request body must be empty. You will also need to make sure the Content-Type header is not set. If you set the Content-Type header without specifying a body, then you will receive a 500 error.

If the target source is a delimited file source, then the CSV file needs to be included in the request body. You will also need to set the Content-Type header to `multipart/form-data`.

[API Spec](https://developer.sailpoint.com/docs/api/import-entitlements-by-source-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Source Id |  [default to undefined]
**csvFile** | `File` | The CSV file containing the source entitlements to aggregate. | [optional] [default to undefined]

### Return type

`LoadEntitlementTask`

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Source Id
const csvFile: File = BINARY_DATA_HERE; // The CSV file containing the source entitlements to aggregate. (optional)
const result = await apiInstance.importEntitlementsBySourceV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-entitlement-children-v1
List of entitlements children
This API returns a list of all child entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-children-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Entitlement Id |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**searchAfter** | `string` | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* | [optional] [default to undefined]

### Return type

`Array<EntitlementV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808874ff91550175097daaec161c; // Entitlement Id
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const searchAfter: string = Account Payable,2c91808375d8e80a0175e1f88a575221; // Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. (optional)
const sorters: string = name,id; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
const filters: string = attribute eq "memberOf"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)
const result = await apiInstance.listEntitlementChildrenV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-entitlement-parents-v1
List of entitlements parents
This API returns a list of all parent entitlements of a given entitlement.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlement-parents-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Entitlement Id |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**searchAfter** | `string` | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* | [optional] [default to undefined]

### Return type

`Array<EntitlementV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808c74ff913f0175097daa9d59cd; // Entitlement Id
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const searchAfter: string = Account Payable,2c91808375d8e80a0175e1f88a575221; // Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. (optional)
const sorters: string = name,id; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
const filters: string = attribute eq "memberOf"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)
const result = await apiInstance.listEntitlementParentsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-entitlements-by-account-v1
Get entitlements for an account
This API returns a list of all entitlements associated with the given account ID. The account must exist; if not found, the API returns 404.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-by-account-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accountId** | `string` | The account ID to get entitlements for |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**searchAfter** | `string` | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | [optional] [default to undefined]

### Return type

`Array<EntitlementV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const accountId: string = ef38f94347e94562b5bb8424a56397d8; // The account ID to get entitlements for
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const searchAfter: string = Account Payable,2c91808375d8e80a0175e1f88a575221; // Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. (optional)
const sorters: string = name,id; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
const result = await apiInstance.listEntitlementsByAccountV1({ accountId: accountId });
console.log(result);
```

[[Back to top]](#)

## list-entitlements-v1
Gets a list of entitlements.
This API returns a list of entitlements. Any authenticated token can call this API.

[API Spec](https://developer.sailpoint.com/docs/api/list-entitlements-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentedForIdentity** | `string` | If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. | [optional] [default to undefined]
**forSegmentIds** | `string` | If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. | [optional] [default to undefined]
**includeUnsegmented** | `boolean` | Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented&#x3D;false** results in an error. | [optional] [default to true]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**searchAfter** | `string` | Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** | [optional] [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* | [optional] [default to undefined]

### Return type

`Array<EntitlementV2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const segmentedForIdentity: string = e554098913544630b5985e9042f5e44b; // If present and not empty, additionally filters Entitlements to those which are assigned to the Segment(s) which are visible to the Identity with the specified ID. (optional)
const forSegmentIds: string = 041727d4-7d95-4779-b891-93cf41e98249,a378c9fa-bae5-494c-804e-a1e30f69f649; // If present and not empty, additionally filters Access Profiles to those which are assigned to the Segment(s) with the specified IDs. (optional)
const includeUnsegmented: boolean = true; // Whether or not the response list should contain unsegmented Entitlements. If **for-segment-ids** and **segmented-for-identity** are both absent or empty, specifying **include-unsegmented&#x3D;false** results in an error. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const searchAfter: string = Account Payable,2c91808375d8e80a0175e1f88a575221; // Used to begin the search window at the values specified.  This parameter consists of the last values of the sorted fields in the current record set.  searchAfter length must match the number of sorters.  This is used to expand the Elasticsearch limit of 10K records by shifting the 10K window to begin at this value.  It is recommended that you always include the ID of the object in addition to any other fields on this parameter in order to ensure you don\&#39;t get duplicate results while paging.  For example, if you are sorting by name you will also want to include ID, for example searchAfter&#x3D;Account Payable,2c91808375d8e80a0175e1f88a575221&amp;sorters&#x3D;name,id.  If the last entitlement ID in the search result is 2c91808375d8e80a0175e1f88a575221 and the last name is \&quot;Account Payable\&quot;, then using that name and ID will start a new search after this entitlement. (optional)
const sorters: string = name,id; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, type, attribute, value, source.id, requestable** (optional)
const filters: string = attribute eq "memberOf"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **type**: *eq, in*  **attribute**: *eq, in*  **value**: *eq, in, sw*  **source.id**: *eq, in*  **requestable**: *eq*  **created**: *gt, lt, ge, le*  **modified**: *gt, lt, ge, le*  **owner.id**: *eq, in*  **tags**: *eq*  **privilegeLevel.direct**: *eq* (optional)
const result = await apiInstance.listEntitlementsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-entitlement-v1
Patch an entitlement
This API updates an existing entitlement using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

The following fields are patchable: **requestable**, **segments**, **privilegeOverride/level**, **owner**, **name**, **description**, **manuallyUpdatedFields**, and **accessModelMetadata**

When you're patching owner, only owner type and owner id must be provided. Owner name is optional, and it won't be modified. If the owner name is provided, it should correspond to the real name. The only owner type currently supported is IDENTITY.

When you're patching **accessModelMetadata**, each attribute's **key** must match the key of an existing access model metadata attribute, and each **value** must be one of the values configured for that key. Use [List access model metadata attributes](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1) to look up the available keys and values.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the entitlement to patch |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` |  | [optional]

### Return type

`EntitlementV2`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/entitlements/api';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808a7813090a017814121e121518; // ID of the entitlement to patch
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; //  (optional)
const result = await apiInstance.patchEntitlementV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## put-entitlement-request-config-v1
Replace entitlement request config
This API replaces the entitlement request config for a specified entitlement.
Set `accessRequestConfig.formDefinitionId` to associate an optional custom form with entitlement access requests.

[API Spec](https://developer.sailpoint.com/docs/api/put-entitlement-request-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Entitlement ID |  [default to undefined]
**entitlementRequestConfig** | `EntitlementRequestConfig` |  | 

### Return type

`EntitlementRequestConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EntitlementRequestConfig } from '@sailpoint/api-client/dist/entitlements/api';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808a7813090a017814121e121518; // Entitlement ID
const entitlementRequestConfig: EntitlementRequestConfig = {
  "accessRequestConfig" : {
    "denialCommentRequired" : false,
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ],
    "reauthorizationRequired" : false,
    "formDefinitionId" : "78258e80-e9e2-4e1a-a11f-ce0b7c62f25d",
    "requestCommentRequired" : true,
    "requireEndDate" : true,
    "maxPermittedAccessDuration" : {
      "value" : 5,
      "timeUnit" : "DAYS"
    }
  },
  "revocationRequestConfig" : {
    "approvalSchemes" : [ {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    }, {
      "approverId" : "e3eab852-8315-467f-9de7-70eda97f63c8",
      "approverType" : "GOVERNANCE_GROUP"
    } ]
  }
}; // 
const result = await apiInstance.putEntitlementRequestConfigV1({ id: id, entitlementRequestConfig: entitlementRequestConfig });
console.log(result);
```

[[Back to top]](#)

## reset-source-entitlements-v1
Reset source entitlements
Remove all entitlements from a specific source.
To reload the accounts along with the entitlements you removed, you must run an unoptimized aggregation.  To do so, use [Account Aggregation](https://developer.sailpoint.com/docs/api/import-accounts-v-1) with `disableOptimization` = `true`. 

[API Spec](https://developer.sailpoint.com/docs/api/reset-source-entitlements-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of source for the entitlement reset |  [default to undefined]

### Return type

`EntitlementSourceResetBaseReferenceDto`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const id: string = 2c91808a7813090a017814121919ecca; // ID of source for the entitlement reset
const result = await apiInstance.resetSourceEntitlementsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## update-entitlements-in-bulk-v1
Bulk update an entitlement list
This API applies an update to every entitlement of the list.


The number of entitlements to update is limited to 50 items maximum.


The JsonPatch update follows the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
examples of allowed operations :
`**{ "op": "replace", "path": "/requestable","value": boolean }**`
`**{ "op": "replace", "path": "/privilegeOverride/level","value": string }**`

A token with ORG_ADMIN or API authority is required to call this API.


[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementBulkUpdateRequest** | `EntitlementBulkUpdateRequest` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EntitlementBulkUpdateRequest } from '@sailpoint/api-client/dist/entitlements/api';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const entitlementBulkUpdateRequest: EntitlementBulkUpdateRequest = {
  "entitlementIds" : [ "2c91808a7624751a01762f19d665220d", "2c91808a7624751a01762f19d67c220e", "2c91808a7624751a01762f19d692220f" ],
  "jsonPatch" : [ {
    "op" : "replace",
    "path" : "/requestable",
    "value" : false
  }, {
    "op" : "replace",
    "path" : "/privilegeOverride/level",
    "value" : "HIGH"
  } ]
}; // 
const result = await apiInstance.updateEntitlementsInBulkV1({ entitlementBulkUpdateRequest: entitlementBulkUpdateRequest });
console.log(result);
```

[[Back to top]](#)

## update-entitlements-metadata-by-filter-v1
Bulk-update metadata by filter
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied filter expression.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByFilterV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-filter-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementmetadatabulkupdatebyfilterrequest** | `Entitlementmetadatabulkupdatebyfilterrequest` | Attribute metadata bulk update request body. | 

### Return type

`Entitlementmetadatabulkupdateresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Entitlementmetadatabulkupdatebyfilterrequest } from '@sailpoint/api-client/dist/entitlements/api';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const entitlementmetadatabulkupdatebyfilterrequest: Entitlementmetadatabulkupdatebyfilterrequest = {
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "filters" : "id eq 2c9180867817ac4d017817c491119a20",
  "replaceScope" : "ATTRIBUTE",
  "operation" : "REPLACE"
}; // Attribute metadata bulk update request body.
const result = await apiInstance.updateEntitlementsMetadataByFilterV1({ entitlementmetadatabulkupdatebyfilterrequest: entitlementmetadatabulkupdatebyfilterrequest });
console.log(result);
```

[[Back to top]](#)

## update-entitlements-metadata-by-ids-v1
Bulk-update metadata by ids
This API initiates a bulk update of Access Model Metadata for one or more entitlements by a list of entitlement IDs.

The update is processed asynchronously. The response returns the ID of the task performing the update.

The maximum entitlement count in a single request is 3000. Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByIdsV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-ids-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementmetadatabulkupdatebyidrequest** | `Entitlementmetadatabulkupdatebyidrequest` | Attribute metadata bulk update request body. | 

### Return type

`Entitlementmetadatabulkupdateresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Entitlementmetadatabulkupdatebyidrequest } from '@sailpoint/api-client/dist/entitlements/api';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const entitlementmetadatabulkupdatebyidrequest: Entitlementmetadatabulkupdatebyidrequest = {
  "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "ATTRIBUTE",
  "operation" : "REPLACE"
}; // Attribute metadata bulk update request body.
const result = await apiInstance.updateEntitlementsMetadataByIdsV1({ entitlementmetadatabulkupdatebyidrequest: entitlementmetadatabulkupdatebyidrequest });
console.log(result);
```

[[Back to top]](#)

## update-entitlements-metadata-by-query-v1
Bulk-update metadata by query
This API initiates a bulk update of Access Model Metadata for every entitlement matching the supplied search query.

The update is processed asynchronously. The response returns the ID of the task performing the update.

Adding or replacing custom metadata requires a suite license.

This API replaces the deprecated `updateAccessModelMetadataByQueryV1` operation.

[API Spec](https://developer.sailpoint.com/docs/api/update-entitlements-metadata-by-query-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementmetadatabulkupdatebyqueryrequest** | `Entitlementmetadatabulkupdatebyqueryrequest` | Attribute metadata bulk update request body. | 

### Return type

`Entitlementmetadatabulkupdateresponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { EntitlementsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { Entitlementmetadatabulkupdatebyqueryrequest } from '@sailpoint/api-client/dist/entitlements/api';

const configuration = new Configuration();
const apiInstance = new EntitlementsApi(configuration);
const entitlementmetadatabulkupdatebyqueryrequest: Entitlementmetadatabulkupdatebyqueryrequest = {
  "query" : {
    "indices" : [ "entitlements" ],
    "queryType" : "TEXT",
    "textQuery" : {
      "terms" : [ "test123" ],
      "fields" : [ "id" ],
      "matchAny" : false,
      "contains" : true
    },
    "includeNested" : false
  },
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "ATTRIBUTE",
  "operation" : "REPLACE"
}; // Attribute metadata bulk update request body.
const result = await apiInstance.updateEntitlementsMetadataByQueryV1({ entitlementmetadatabulkupdatebyqueryrequest: entitlementmetadatabulkupdatebyqueryrequest });
console.log(result);
```

[[Back to top]](#)

