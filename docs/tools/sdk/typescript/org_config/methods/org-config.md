# OrgConfig

# OrgConfigApi
  Use this API to implement organization configuration functionality. 
Administrators can use this functionality to manage organization settings, such as time zones. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-org-config-v1**](#get-org-config-v1) | **GET** `/org-config/v1` | Get org config settings
[**get-valid-time-zones-v1**](#get-valid-time-zones-v1) | **GET** `/org-config/v1/valid-time-zones` | Get valid time zones
[**patch-org-config-v1**](#patch-org-config-v1) | **PATCH** `/org-config/v1` | Patch org config


## get-org-config-v1
Get org config settings
Get the current organization's configuration settings, only external accessible properties.

[API Spec](https://developer.sailpoint.com/docs/api/get-org-config-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`OrgConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { OrgConfigApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new OrgConfigApi(configuration);
const result = await apiInstance.getOrgConfigV1({  });
console.log(result);
```

[[Back to top]](#)

## get-valid-time-zones-v1
Get valid time zones
List the valid time zones that can be set in organization configurations.

[API Spec](https://developer.sailpoint.com/docs/api/get-valid-time-zones-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 50]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<string>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { OrgConfigApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new OrgConfigApi(configuration);
const limit: number = 50; // Note that for this API the maximum value for limit is 50. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getValidTimeZonesV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-org-config-v1
Patch org config
Patch the current organization's configuration, using http://jsonpatch.com/ syntax. This is commonly used to changing an organization's time zone.

[API Spec](https://developer.sailpoint.com/docs/api/patch-org-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 

### Return type

`OrgConfig`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { OrgConfigApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/org_config/api';

const configuration = new Configuration();
const apiInstance = new OrgConfigApi(configuration);
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // A list of schema attribute update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const result = await apiInstance.patchOrgConfigV1({ jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

