# IdentityAttributes

# IdentityAttributesApi
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-identity-attribute-v1**](#create-identity-attribute-v1) | **POST** `/identity-attributes/v1` | Create identity attribute
[**delete-identity-attribute-v1**](#delete-identity-attribute-v1) | **DELETE** `/identity-attributes/v1/{name}` | Delete identity attribute
[**delete-identity-attributes-in-bulk-v1**](#delete-identity-attributes-in-bulk-v1) | **DELETE** `/identity-attributes/v1/bulk-delete` | Bulk delete identity attributes
[**get-identity-attribute-v1**](#get-identity-attribute-v1) | **GET** `/identity-attributes/v1/{name}` | Get identity attribute
[**list-identity-attributes-v1**](#list-identity-attributes-v1) | **GET** `/identity-attributes/v1` | List identity attributes
[**put-identity-attribute-v1**](#put-identity-attribute-v1) | **PUT** `/identity-attributes/v1/{name}` | Update identity attribute


## create-identity-attribute-v1
Create identity attribute
Use this API to create a new identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/create-identity-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityAttribute2** | `IdentityAttribute2` |  | 

### Return type

`IdentityAttribute2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IdentityAttributesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { IdentityAttribute2 } from '@sailpoint/api-client/dist/identity_attributes/api';

const configuration = new Configuration();
const apiInstance = new IdentityAttributesApi(configuration);
const identityAttribute2: IdentityAttribute2 = ; // 
const result = await apiInstance.createIdentityAttributeV1({ identityAttribute2: identityAttribute2 });
console.log(result);
```

[[Back to top]](#)

## delete-identity-attribute-v1
Delete identity attribute
This deletes an identity attribute with the given name.  The `system` and `standard` properties must be set to false before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The attribute\&#39;s technical name. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityAttributesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentityAttributesApi(configuration);
const name: string = displayName; // The attribute\&#39;s technical name.
const result = await apiInstance.deleteIdentityAttributeV1({ name: name });
console.log(result);
```

[[Back to top]](#)

## delete-identity-attributes-in-bulk-v1
Bulk delete identity attributes
Use this API to bulk delete identity attributes for a given set of names. Attributes that are currently mapped in an identity profile cannot be deleted.  The `system` and `standard` properties must be set to 'false' before you can delete an identity attribute.

[API Spec](https://developer.sailpoint.com/docs/api/delete-identity-attributes-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityAttributeNames** | `IdentityAttributeNames` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IdentityAttributesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { IdentityAttributeNames } from '@sailpoint/api-client/dist/identity_attributes/api';

const configuration = new Configuration();
const apiInstance = new IdentityAttributesApi(configuration);
const identityAttributeNames: IdentityAttributeNames = {
  "ids" : [ "name", "displayName" ]
}; // 
const result = await apiInstance.deleteIdentityAttributesInBulkV1({ identityAttributeNames: identityAttributeNames });
console.log(result);
```

[[Back to top]](#)

## get-identity-attribute-v1
Get identity attribute
This gets an identity attribute for a given technical name.

[API Spec](https://developer.sailpoint.com/docs/api/get-identity-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The attribute\&#39;s technical name. |  [default to undefined]

### Return type

`IdentityAttribute2`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityAttributesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentityAttributesApi(configuration);
const name: string = displayName; // The attribute\&#39;s technical name.
const result = await apiInstance.getIdentityAttributeV1({ name: name });
console.log(result);
```

[[Back to top]](#)

## list-identity-attributes-v1
List identity attributes
Use this API to get a collection of identity attributes.

[API Spec](https://developer.sailpoint.com/docs/api/list-identity-attributes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**includeSystem** | `boolean` | Include \&#39;system\&#39; attributes in the response. | [optional] [default to false]
**includeSilent** | `boolean` | Include \&#39;silent\&#39; attributes in the response. | [optional] [default to false]
**searchableOnly** | `boolean` | Include only \&#39;searchable\&#39; attributes in the response. | [optional] [default to false]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<IdentityAttribute2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IdentityAttributesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new IdentityAttributesApi(configuration);
const includeSystem: boolean = false; // Include \&#39;system\&#39; attributes in the response. (optional)
const includeSilent: boolean = false; // Include \&#39;silent\&#39; attributes in the response. (optional)
const searchableOnly: boolean = false; // Include only \&#39;searchable\&#39; attributes in the response. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listIdentityAttributesV1({  });
console.log(result);
```

[[Back to top]](#)

## put-identity-attribute-v1
Update identity attribute
This updates an existing identity attribute.  Making an attribute searchable requires that the `system`, `standard`, and `multi` properties be set to false.

[API Spec](https://developer.sailpoint.com/docs/api/put-identity-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**name** | `string` | The attribute\&#39;s technical name. |  [default to undefined]
**identityAttribute2** | `IdentityAttribute2` |  | 

### Return type

`IdentityAttribute2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { IdentityAttributesApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { IdentityAttribute2 } from '@sailpoint/api-client/dist/identity_attributes/api';

const configuration = new Configuration();
const apiInstance = new IdentityAttributesApi(configuration);
const name: string = displayName; // The attribute\&#39;s technical name.
const identityAttribute2: IdentityAttribute2 = ; // 
const result = await apiInstance.putIdentityAttributeV1({ name: name, identityAttribute2: identityAttribute2 });
console.log(result);
```

[[Back to top]](#)

