# TenantContext

# TenantContextApi
  The purpose of this API is to manage key-value pairs specific to a tenant&#39;s context, enabling dynamic configuration and personalized settings per tenant.
Context key-value pairs will consist of common terms and acronyms used within your organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-tenant-context-v1**](#get-tenant-context-v1) | **GET** `/tenant-context/v1` | Retrieve tenant context
[**patch-tenant-context-v1**](#patch-tenant-context-v1) | **PATCH** `/tenant-context/v1` | Update tenant context


## get-tenant-context-v1
Retrieve tenant context
Returns all key-value pairs representing the current state of the tenant's context.
Each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/get-tenant-context-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`Array<GetTenantContextV1200ResponseInner>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { TenantContextApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new TenantContextApi(configuration);
const result = await apiInstance.getTenantContextV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-tenant-context-v1
Update tenant context
Allows the user to make incremental updates to tenant context records using [JSON Patch](https://tools.ietf.org/html/rfc6902) syntax.

This endpoint is specifically designed to modify the `/Key/*` field, supporting operations such as `add`, `remove`, or `replace` to manage key-value pairs. 

Note that each tenant is limited to a maximum of 100 key-value pairs.


[API Spec](https://developer.sailpoint.com/docs/api/patch-tenant-context-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**jsonPatchOperation** | `JsonPatchOperation` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { TenantContextApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/tenant_context/api';

const configuration = new Configuration();
const apiInstance = new TenantContextApi(configuration);
const jsonPatchOperation: JsonPatchOperation = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // 
const result = await apiInstance.patchTenantContextV1({ jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

