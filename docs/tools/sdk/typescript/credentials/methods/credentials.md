# Credentials

# CredentialsApi
  Use this API to list, view, and update credentials. A credential is a secret, such as an API key or access key, that a machine identity uses to authenticate, discovered from a connected source. You can update a credential&#39;s owners, description, and environment; the values discovered from the source are read-only.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-credential-v1**](#get-credential-v1) | **GET** `/credentials/v1/{id}` | Get credential
[**list-credentials-v1**](#list-credentials-v1) | **GET** `/credentials/v1` | List credentials
[**update-credential-v1**](#update-credential-v1) | **PATCH** `/credentials/v1/{id}` | Partial update of credential


## get-credential-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get credential
This API returns a single credential by its ID.


The ID must be a UUID; any other value returns `400`. When no credential exists for the ID, this API returns `404`.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the credentials API is
not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/get-credential-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Credential ID. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Credential`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CredentialsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);
const id: string = 3f8a2c1d-5b6e-4d7f-8a9b-0c1d2e3f4a5b; // Credential ID.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getCredentialV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-credentials-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List credentials
This API returns a list of credentials.


Source sub-admins only see credentials on the sources they manage.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the credentials API is
not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/list-credentials-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **type**: *eq, in*  **status**: *eq, in*  **resource.id**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  **expiresAt**: *gt, ge, lt, le* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, resource.id, source.name, owners.primary.id, owners.primary.name, owners.primaryIdentity.id, owners.primaryIdentity.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** | [optional] [default to undefined]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to false]
**limit** | `number` | Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<Credential>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CredentialsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);
const filters: string = type eq "ACCESS_KEY"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in, sw*  **nativeIdentity**: *eq, in, sw*  **type**: *eq, in*  **status**: *eq, in*  **resource.id**: *eq, in*  **source.id**: *eq, in*  **source.name**: *eq, in, sw*  **owners.primary.id**: *eq, in*  **owners.primary.name**: *eq, in, sw*  **owners.primaryIdentity.id**: *eq, in*  **owners.primaryIdentity.name**: *eq, in, sw*  **owners.secondaryIdentity.id**: *eq, in*  **owners.secondaryIdentity.name**: *eq, in, sw*  **owners.secondaryGovernanceGroup.id**: *eq, in*  **owners.secondaryGovernanceGroup.name**: *eq, in, sw*  **owners.governanceGroup.id**: *eq, in*  **owners.governanceGroup.name**: *eq, in, sw*  **created**: *gt, ge, lt, le*  **modified**: *gt, ge, lt, le*  **expiresAt**: *gt, ge, lt, le* (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified, name, nativeIdentity, resource.id, source.name, owners.primary.id, owners.primary.name, owners.primaryIdentity.id, owners.primaryIdentity.name, owners.secondaryIdentity.id, owners.secondaryIdentity.name, owners.secondaryGovernanceGroup.id, owners.secondaryGovernanceGroup.name, owners.governanceGroup.id, owners.governanceGroup.name** (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [API Standard Collection Parameters](https://developer.sailpoint.com/docs/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listCredentialsV1({  });
console.log(result);
```

[[Back to top]](#)

## update-credential-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Partial update of credential
Use this API to update a credential using a JSON Patch payload.


Patchable fields are **description**, **environment**, and **owners**. A patch that targets any other field,
including the values discovered from the source, returns `400`.


`owners.primary` is a single IDENTITY reference. `owners.secondary` holds either up to ten IDENTITY references or
exactly one GOVERNANCE_GROUP reference, not both; any other combination returns `400`.


The ID must be a UUID; any other value returns `400`. When no credential exists for the ID, this API returns `404`.


When Machine Identity Security is not enabled for the tenant, this API returns `404`. When the credentials API is
not enabled for the tenant, this API returns `403`.


[API Spec](https://developer.sailpoint.com/docs/api/update-credential-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Credential ID. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Credential`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { CredentialsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/credentials/api';

const configuration = new Configuration();
const apiInstance = new CredentialsApi(configuration);
const id: string = 3f8a2c1d-5b6e-4d7f-8a9b-0c1d2e3f4a5b; // Credential ID.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // A JSON of updated values [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.updateCredentialV1({ id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

