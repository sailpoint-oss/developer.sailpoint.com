# AccessModelMetadata

# AccessModelMetadataApi
  Use this API to create and manage metadata attributes for your Access Model.
Access Model Metadata allows you to add contextual information to your ISC Access Model items using pre-defined metadata for risk, regulations, privacy levels, etc., or by creating your own metadata attributes to reflect the unique needs of your organization. This release of the API includes support for entitlement, role, and access profile metadata.

Common usages for Access Model metadata include:

- Organizing and categorizing access items to make it easier for your users to search for and find the access rights they want to request, certify, or manage.

- Providing richer information about access that is being acted on to allow stakeholders to make better decisions when approving, certifying, or managing access rights.

- Identifying access that may requires additional approval requirements or be subject to more frequent review.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-access-model-metadata-attribute-v1**](#create-access-model-metadata-attribute-v1) | **POST** `/access-model-metadata/v1/attributes` | Create access model metadata attribute
[**create-access-model-metadata-attribute-value-v1**](#create-access-model-metadata-attribute-value-v1) | **POST** `/access-model-metadata/v1/attributes/{key}/values` | Create access model metadata value
[**delete-access-model-metadata-attribute-v1**](#delete-access-model-metadata-attribute-v1) | **DELETE** `/access-model-metadata/v1/attributes/{key}` | Delete access model metadata attribute
[**delete-access-model-metadata-attribute-value-v1**](#delete-access-model-metadata-attribute-value-v1) | **DELETE** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Delete access model metadata value
[**get-access-model-metadata-attribute-v1**](#get-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes/{key}` | Get access model metadata attribute
[**get-access-model-metadata-attribute-value-v1**](#get-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Get access model metadata value
[**list-access-model-metadata-attribute-v1**](#list-access-model-metadata-attribute-v1) | **GET** `/access-model-metadata/v1/attributes` | List access model metadata attributes
[**list-access-model-metadata-attribute-value-v1**](#list-access-model-metadata-attribute-value-v1) | **GET** `/access-model-metadata/v1/attributes/{key}/values` | List access model metadata values
[**update-access-model-metadata-attribute-v1**](#update-access-model-metadata-attribute-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}` | Update access model metadata attribute
[**update-access-model-metadata-attribute-value-v1**](#update-access-model-metadata-attribute-value-v1) | **PATCH** `/access-model-metadata/v1/attributes/{key}/values/{value}` | Update access model metadata value
[**update-access-model-metadata-by-filter-v1**](#update-access-model-metadata-by-filter-v1) | **POST** `/access-model-metadata/v1/bulk-update/filter` | Metadata Attribute update by filter
[**update-access-model-metadata-by-ids-v1**](#update-access-model-metadata-by-ids-v1) | **POST** `/access-model-metadata/v1/bulk-update/ids` | Metadata Attribute update by ids
[**update-access-model-metadata-by-query-v1**](#update-access-model-metadata-by-query-v1) | **POST** `/access-model-metadata/v1/bulk-update/query` | Metadata Attribute update by query


## create-access-model-metadata-attribute-v1
Create access model metadata attribute
Create a new Access Model Metadata Attribute.

The **isAdhoc** field can be set on creation to indicate whether the Attribute supports ad-hoc
(dynamically created) values in addition to static values; if omitted, it defaults to *false*.

Any **values** provided at creation time must each have a *type* of *static* (or omit/leave *type*
blank); *adhoc* is not an allowed value on this public API and results in a *400* error. Ad-hoc
values are created dynamically through an internal service-to-service flow, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**attributeDTO** | `AttributeDTO` | Attribute to create | 

### Return type

`AttributeDTO`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AttributeDTO } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const attributeDTO: AttributeDTO = {
  "multiselect" : false,
  "isAdhoc" : false,
  "values" : [ {
    "name" : "Public",
    "type" : "static",
    "value" : "public",
    "status" : "active"
  }, {
    "name" : "Public",
    "type" : "static",
    "value" : "public",
    "status" : "active"
  } ],
  "name" : "Privacy",
  "description" : "Specifies the level of privacy associated with an access item.",
  "type" : "governance",
  "objectTypes" : [ "entitlement" ],
  "key" : "iscPrivacy",
  "status" : "active"
}; // Attribute to create
const result = await apiInstance.createAccessModelMetadataAttributeV1({ attributeDTO: attributeDTO });
console.log(result);
```

[[Back to top]](#)

## create-access-model-metadata-attribute-value-v1
Create access model metadata value
Create a new value for an existing Access Model Metadata Attribute.

The **type** field must be omitted, blank, or *static* (case-insensitive); *adhoc* is not an
allowed value on this public API and results in a *400* error. Ad-hoc values are created
dynamically through an internal service-to-service flow when the parent Attribute has *isAdhoc*
set to *true*, not through this API.


[API Spec](https://developer.sailpoint.com/docs/api/create-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**attributeValueDTO** | `AttributeValueDTO` | Attribute value to create | 

### Return type

`AttributeValueDTO`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AttributeValueDTO } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const attributeValueDTO: AttributeValueDTO = {
  "name" : "Public",
  "type" : "static",
  "value" : "public",
  "status" : "active"
}; // Attribute value to create
const result = await apiInstance.createAccessModelMetadataAttributeValueV1({ key: key, attributeValueDTO: attributeValueDTO });
console.log(result);
```

[[Back to top]](#)

## delete-access-model-metadata-attribute-v1
Delete access model metadata attribute
Delete an existing Access Model Metadata Attribute and all of its values.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]

### Return type

`TrackerKeyDTO`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const result = await apiInstance.deleteAccessModelMetadataAttributeV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## delete-access-model-metadata-attribute-value-v1
Delete access model metadata value
Delete an existing Access Model Metadata Attribute Value.


[API Spec](https://developer.sailpoint.com/docs/api/delete-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]

### Return type

`TrackerValueDTO`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const value: string = public; // Technical name of the Attribute value.
const result = await apiInstance.deleteAccessModelMetadataAttributeValueV1({ key: key, value: value });
console.log(result);
```

[[Back to top]](#)

## get-access-model-metadata-attribute-v1
Get access model metadata attribute
Get single Access Model Metadata Attribute

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]

### Return type

`AttributeDTO`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const result = await apiInstance.getAccessModelMetadataAttributeV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## get-access-model-metadata-attribute-value-v1
Get access model metadata value
Get single Access Model Metadata Attribute Value

[API Spec](https://developer.sailpoint.com/docs/api/get-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]

### Return type

`AttributeValueDTO`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const value: string = public; // Technical name of the Attribute value.
const result = await apiInstance.getAccessModelMetadataAttributeValueV1({ key: key, value: value });
console.log(result);
```

[[Back to top]](#)

## list-access-model-metadata-attribute-v1
List access model metadata attributes
Get a list of Access Model Metadata Attributes. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<AttributeDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const filters: string = name eq "Privacy"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **key**: *eq, co*  **name**: *eq, co*  **type**: *eq*  **status**: *eq*  **objectTypes**: *eq*  Supported composite operators are *and, or* (optional)
const sorters: string = name,-key; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **key, name, type, status** (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listAccessModelMetadataAttributeV1({  });
console.log(result);
```

[[Back to top]](#)

## list-access-model-metadata-attribute-value-v1
List access model metadata values
Get a list of Access Model Metadata Attribute Values. Supports pagination through limit and offset parameters.

[API Spec](https://developer.sailpoint.com/docs/api/list-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<AttributeValueDTO>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const filters: string = name eq "Public"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **value**: *eq, co*  **name**: *eq, co*  **status**: *eq*  **type**: *eq*  Supported composite operators are *and, or* (optional)
const sorters: string = name,-value; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **value, name, status, type** (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listAccessModelMetadataAttributeValueV1({ key: key });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-attribute-v1
Update access model metadata attribute
Update an existing Access Model Metadata Attribute.  
The following fields are patchable: **name**, **description**, **multiselect**, **isAdhoc**, **values**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch array to apply | 

### Return type

`AttributeDTO`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // JSON Patch array to apply
const result = await apiInstance.updateAccessModelMetadataAttributeV1({ key: key, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-attribute-value-v1
Update access model metadata value
Update an existing Access Model Metadata Attribute Value.    
The following fields are patchable: **name**


[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-attribute-value-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**key** | `string` | Technical name of the Attribute. |  [default to undefined]
**value** | `string` | Technical name of the Attribute value. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | JSON Patch array to apply | 

### Return type

`AttributeValueDTO`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const key: string = iscPrivacy; // Technical name of the Attribute.
const value: string = public; // Technical name of the Attribute value.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // JSON Patch array to apply
const result = await apiInstance.updateAccessModelMetadataAttributeValueV1({ key: key, value: value, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-by-filter-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by filter
Bulk update Access Model Metadata Attribute Values using a filter

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-filter-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementAttributeBulkUpdateFilterRequest** | `EntitlementAttributeBulkUpdateFilterRequest` | Attribute metadata bulk update request body. | 

### Return type

`AccessModelMetadataBulkUpdateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EntitlementAttributeBulkUpdateFilterRequest } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const entitlementAttributeBulkUpdateFilterRequest: EntitlementAttributeBulkUpdateFilterRequest = {
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "filters" : "id eq 2c9180867817ac4d017817c491119a20",
  "replaceScope" : "attribute",
  "operation" : "add"
}; // Attribute metadata bulk update request body.
const result = await apiInstance.updateAccessModelMetadataByFilterV1({ entitlementAttributeBulkUpdateFilterRequest: entitlementAttributeBulkUpdateFilterRequest });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-by-ids-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by ids
Bulk update Access Model Metadata Attribute Values using ids.

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-ids-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementAttributeBulkUpdateIdsRequest** | `EntitlementAttributeBulkUpdateIdsRequest` | Attribute metadata bulk update request body. | 

### Return type

`AccessModelMetadataBulkUpdateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EntitlementAttributeBulkUpdateIdsRequest } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const entitlementAttributeBulkUpdateIdsRequest: EntitlementAttributeBulkUpdateIdsRequest = {
  "entitlements" : [ "2c9180867817ac4d017817c491119a20", "2c9180867817ac4d017817c491119a21" ],
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "attribute",
  "operation" : "add"
}; // Attribute metadata bulk update request body.
const result = await apiInstance.updateAccessModelMetadataByIdsV1({ entitlementAttributeBulkUpdateIdsRequest: entitlementAttributeBulkUpdateIdsRequest });
console.log(result);
```

[[Back to top]](#)

## update-access-model-metadata-by-query-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
Metadata Attribute update by query
Bulk update Access Model Metadata Attribute Values using a query

[API Spec](https://developer.sailpoint.com/docs/api/update-access-model-metadata-by-query-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementAttributeBulkUpdateQueryRequest** | `EntitlementAttributeBulkUpdateQueryRequest` | Attribute metadata bulk update request body. | 

### Return type

`AccessModelMetadataBulkUpdateResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { AccessModelMetadataApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EntitlementAttributeBulkUpdateQueryRequest } from '@sailpoint/api-client/dist/access_model_metadata/api';

const configuration = new Configuration();
const apiInstance = new AccessModelMetadataApi(configuration);
const entitlementAttributeBulkUpdateQueryRequest: EntitlementAttributeBulkUpdateQueryRequest = {
  "query" : {
    "queryDsl" : {
      "match" : {
        "name" : "john.doe"
      }
    },
    "aggregationType" : "DSL",
    "aggregationsVersion" : "",
    "query" : {
      "query" : "name:a*",
      "timeZone" : "America/Chicago",
      "fields" : "[\"firstName,lastName,email\"]",
      "innerHit" : {
        "query" : "source.name:\\\"Active Directory\\\"",
        "type" : "access"
      }
    },
    "aggregationsDsl" : { },
    "sort" : [ "displayName", "+id" ],
    "filters" : { },
    "queryVersion" : "",
    "queryType" : "SAILPOINT",
    "includeNested" : true,
    "queryResultFilter" : {
      "excludes" : [ "stacktrace" ],
      "includes" : [ "name", "displayName" ]
    },
    "indices" : [ "identities" ],
    "typeAheadQuery" : {
      "field" : "source.name",
      "size" : 100,
      "query" : "Work",
      "sortByValue" : true,
      "nestedType" : "access",
      "sort" : "asc",
      "maxExpansions" : 10
    },
    "textQuery" : {
      "contains" : true,
      "terms" : [ "The quick brown fox", "3141592", "7" ],
      "matchAny" : false,
      "fields" : [ "displayName", "employeeNumber", "roleCount" ]
    },
    "searchAfter" : [ "John Doe", "2c91808375d8e80a0175e1f88a575221" ],
    "aggregations" : {
      "filter" : {
        "field" : "access.type",
        "name" : "Entitlements",
        "type" : "TERM",
        "value" : "ENTITLEMENT"
      },
      "bucket" : {
        "field" : "attributes.city",
        "size" : 100,
        "minDocCount" : 2,
        "name" : "Identity Locations",
        "type" : "TERMS"
      },
      "metric" : {
        "field" : "@access.name",
        "name" : "Access Name Count",
        "type" : "COUNT"
      },
      "subAggregation" : {
        "filter" : {
          "field" : "access.type",
          "name" : "Entitlements",
          "type" : "TERM",
          "value" : "ENTITLEMENT"
        },
        "bucket" : {
          "field" : "attributes.city",
          "size" : 100,
          "minDocCount" : 2,
          "name" : "Identity Locations",
          "type" : "TERMS"
        },
        "metric" : {
          "field" : "@access.name",
          "name" : "Access Name Count",
          "type" : "COUNT"
        },
        "subAggregation" : {
          "filter" : {
            "field" : "access.type",
            "name" : "Entitlements",
            "type" : "TERM",
            "value" : "ENTITLEMENT"
          },
          "bucket" : {
            "field" : "attributes.city",
            "size" : 100,
            "minDocCount" : 2,
            "name" : "Identity Locations",
            "type" : "TERMS"
          },
          "metric" : {
            "field" : "@access.name",
            "name" : "Access Name Count",
            "type" : "COUNT"
          },
          "nested" : {
            "name" : "id",
            "type" : "access"
          }
        },
        "nested" : {
          "name" : "id",
          "type" : "access"
        }
      },
      "nested" : {
        "name" : "id",
        "type" : "access"
      }
    }
  },
  "values" : [ {
    "attribute" : "iscFederalClassifications",
    "values" : [ "topSecret" ]
  } ],
  "replaceScope" : "attribute",
  "operation" : "add"
}; // Attribute metadata bulk update request body.
const result = await apiInstance.updateAccessModelMetadataByQueryV1({ entitlementAttributeBulkUpdateQueryRequest: entitlementAttributeBulkUpdateQueryRequest });
console.log(result);
```

[[Back to top]](#)

