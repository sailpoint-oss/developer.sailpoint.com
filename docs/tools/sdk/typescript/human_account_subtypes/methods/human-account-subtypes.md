# HumanAccountSubtypes

# HumanAccountSubtypesApi
  Use these APIs to get, create, update, and delete human account subtypes for sources, and to get and update
the account-create configuration of a human account subtype. These APIs are experimental and require the
&#x60;X-SailPoint-Experimental&#x60; header.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-human-account-subtype-v2**](#create-human-account-subtype-v2) | **POST** `/accounts/v2/sources/{sourceId}/subtypes` | Create a human account subtype
[**delete-human-account-subtype-v2**](#delete-human-account-subtype-v2) | **DELETE** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Delete a human account subtype
[**get-human-account-subtype-config-v2**](#get-human-account-subtype-config-v2) | **GET** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Get human subtype config
[**get-human-account-subtype-v2**](#get-human-account-subtype-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Get a human account subtype
[**list-human-account-subtypes-v2**](#list-human-account-subtypes-v2) | **GET** `/accounts/v2/sources/{sourceId}/subtypes` | List human account subtypes
[**update-human-account-subtype-config-v2**](#update-human-account-subtype-config-v2) | **PATCH** `/accounts/v2/source-subtypes/{subtypeId}/human-config` | Update human subtype config
[**update-human-account-subtype-v2**](#update-human-account-subtype-v2) | **PATCH** `/accounts/v2/sources/{sourceId}/subtypes/{subtypeId}` | Update a human account subtype


## create-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create a human account subtype
Create a human account subtype for a source.

[API Spec](https://developer.sailpoint.com/docs/api/create-human-account-subtype-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**humanAccountSubtypeCreateRequest** | `HumanAccountSubtypeCreateRequest` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`HumanAccountSubtype`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { HumanAccountSubtypeCreateRequest } from '@sailpoint/api-client/dist/human_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of the source.
const humanAccountSubtypeCreateRequest: HumanAccountSubtypeCreateRequest = {
  "default" : false,
  "displayName" : "Contractor",
  "description" : "Contractors with a limited account lifecycle",
  "technicalName" : "contractor"
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createHumanAccountSubtypeV2({ sourceId: sourceId, humanAccountSubtypeCreateRequest: humanAccountSubtypeCreateRequest });
console.log(result);
```

[[Back to top]](#)

## delete-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete a human account subtype
Delete a human account subtype of a source, together with its account-create configuration.

[API Spec](https://developer.sailpoint.com/docs/api/delete-human-account-subtype-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of the source.
const subtypeId: string = 38453251-6be2-5f8f-df93-5ce19e295838; // ID of the human account subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteHumanAccountSubtypeV2({ sourceId: sourceId, subtypeId: subtypeId });
console.log(result);
```

[[Back to top]](#)

## get-human-account-subtype-config-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get human subtype config
Get the account-create configuration of a human account subtype by subtype ID. A subtype with no stored configuration returns the default values.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-config-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`HumanAccountSubtypeConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const subtypeId: string = 38453251-6be2-5f8f-df93-5ce19e295838; // ID of the human account subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getHumanAccountSubtypeConfigV2({ subtypeId: subtypeId });
console.log(result);
```

[[Back to top]](#)

## get-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get a human account subtype
Get a human account subtype of a source by subtype ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-human-account-subtype-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`HumanAccountSubtype`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of the source.
const subtypeId: string = 38453251-6be2-5f8f-df93-5ce19e295838; // ID of the human account subtype.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getHumanAccountSubtypeV2({ sourceId: sourceId, subtypeId: subtypeId });
console.log(result);
```

[[Back to top]](#)

## list-human-account-subtypes-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List human account subtypes
Get the human account subtypes of a source.

[API Spec](https://developer.sailpoint.com/docs/api/list-human-account-subtypes-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**sorters** | `string` | Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** | [optional] [default to &#39;&#39;]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<HumanAccountSubtype>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of the source.
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const sorters: string = sourceId; // Sort results using the standard syntax described in [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **sourceId** (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listHumanAccountSubtypesV2({ sourceId: sourceId });
console.log(result);
```

[[Back to top]](#)

## update-human-account-subtype-config-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update human subtype config
Update the account-create configuration of a human account subtype. Only operations under `/humanAccountCreate` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-config-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch operations under &#x60;/humanAccountCreate&#x60;, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902). | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`HumanAccountSubtypeConfig`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/human_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const subtypeId: string = 38453251-6be2-5f8f-df93-5ce19e295838; // ID of the human account subtype.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // JSON Patch operations under &#x60;/humanAccountCreate&#x60;, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateHumanAccountSubtypeConfigV2({ subtypeId: subtypeId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-human-account-subtype-v2
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update a human account subtype
Update the display name or description of a human account subtype. Only replace operations on `/displayName` and `/description` are supported.

[API Spec](https://developer.sailpoint.com/docs/api/update-human-account-subtype-v-2)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sourceId** | `string` | ID of the source. |  [default to undefined]
**subtypeId** | `string` | ID of the human account subtype. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902). | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`HumanAccountSubtype`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { HumanAccountSubtypesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/human_account_subtypes/api';

const configuration = new Configuration();
const apiInstance = new HumanAccountSubtypesApi(configuration);
const sourceId: string = 6d0458373bec4b4b80460992b76016da; // ID of the source.
const subtypeId: string = 38453251-6be2-5f8f-df93-5ce19e295838; // ID of the human account subtype.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // JSON Patch operations to apply to the subtype, as defined by [RFC 6902](https://tools.ietf.org/html/rfc6902).
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateHumanAccountSubtypeV2({ sourceId: sourceId, subtypeId: subtypeId, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

