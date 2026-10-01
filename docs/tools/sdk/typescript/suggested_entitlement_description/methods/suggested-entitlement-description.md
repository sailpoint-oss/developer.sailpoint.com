# SuggestedEntitlementDescription

# SuggestedEntitlementDescriptionApi
  Use this API to implement Suggested Entitlement Description (SED) functionality. 
SED functionality leverages the power of LLM to generate suggested entitlement descriptions. 
Refer to [GenAI Entitlement Descriptions](https://documentation.sailpoint.com/saas/help/access/entitlements.html#genai-entitlement-descriptions) to learn more about SED in Identity Security Cloud (ISC). 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-bulk-entitlement-recommendations-v1**](#approve-bulk-entitlement-recommendations-v1) | **POST** `/entitlement-recommendations/v1/bulk-approve` | Bulk approve entitlement recommendations
[**create-auto-write-settings-v1**](#create-auto-write-settings-v1) | **POST** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Create auto-write settings for SED
[**get-auto-write-settings-v1**](#get-auto-write-settings-v1) | **GET** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Get auto-write settings for SED
[**get-sed-batch-stats-v1**](#get-sed-batch-stats-v1) | **GET** `/suggested-entitlement-description-batches/v1/{batchId}/stats` | Submit sed batch stats request
[**get-sed-batches-v1**](#get-sed-batches-v1) | **GET** `/suggested-entitlement-description-batches/v1` | List Sed Batch Record
[**list-pending-entitlement-recommendation-approvals-v1**](#list-pending-entitlement-recommendation-approvals-v1) | **GET** `/entitlement-recommendations/v1/pending-approvals` | List pending entitlement recommendation approvals
[**list-privileged-entitlement-recommendations-v1**](#list-privileged-entitlement-recommendations-v1) | **GET** `/privileged-recommendations/v1` | List privileged entitlement recommendations
[**list-seds-v1**](#list-seds-v1) | **GET** `/suggested-entitlement-descriptions/v1` | List suggested entitlement descriptions
[**patch-entitlement-recommendation-v1**](#patch-entitlement-recommendation-v1) | **PATCH** `/entitlement-recommendations/v1/{id}` | Update an entitlement recommendation
[**patch-sed-v1**](#patch-sed-v1) | **PATCH** `/suggested-entitlement-descriptions/v1` | Patch suggested entitlement description
[**submit-entitlement-recommendations-assignment-v1**](#submit-entitlement-recommendations-assignment-v1) | **POST** `/entitlement-recommendations/v1/assign` | Assign entitlement recommendations for review
[**submit-sed-approval-v1**](#submit-sed-approval-v1) | **POST** `/suggested-entitlement-description-approvals/v1` | Submit bulk approval request
[**submit-sed-assignment-v1**](#submit-sed-assignment-v1) | **POST** `/suggested-entitlement-description-assignments/v1` | Submit sed assignment request
[**submit-sed-batch-request-v1**](#submit-sed-batch-request-v1) | **POST** `/suggested-entitlement-description-batches/v1` | Submit sed batch request
[**update-auto-write-settings-v1**](#update-auto-write-settings-v1) | **PATCH** `/suggested-entitlement-descriptions/v1/auto-write-settings` | Update auto-write settings for SED


## approve-bulk-entitlement-recommendations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Bulk approve entitlement recommendations
Approve multiple entitlement recommendations in a single request. Each item in the request must include the recommendation ID and, depending on the record type, either an approved description (SED items) or an approved privilege level (privilege items). Returns a per-item result indicating success or failure.

[API Spec](https://developer.sailpoint.com/docs/api/approve-bulk-entitlement-recommendations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkApproveEntitlementRecommendationRequest** | `BulkApproveEntitlementRecommendationRequest` | The list of recommendation items to approve. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<BulkApproveEntitlementRecommendationResult>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BulkApproveEntitlementRecommendationRequest } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const bulkApproveEntitlementRecommendationRequest: BulkApproveEntitlementRecommendationRequest = {
  "items" : [ {
    "id" : "79db50d4-723c-4aa0-a824-83c2205d82d1",
    "recordType" : "SED",
    "description" : "Provides access and permissions related to the Delinea Secret Server Cloud system."
  }, {
    "id" : "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
    "recordType" : "privilege",
    "privilegeLevel" : "high"
  } ]
}; // The list of recommendation items to approve.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.approveBulkEntitlementRecommendationsV1({ bulkApproveEntitlementRecommendationRequest: bulkApproveEntitlementRecommendationRequest });
console.log(result);
```

[[Back to top]](#)

## create-auto-write-settings-v1
Create auto-write settings for SED
Create the initial auto-write settings for a tenant. Returns 409 Conflict if settings already exist. Use PATCH to update existing settings.

[API Spec](https://developer.sailpoint.com/docs/api/create-auto-write-settings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**autoWriteSetting** | `AutoWriteSetting` | Auto-write settings to create | 

### Return type

`AutoWriteSettingResponse`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AutoWriteSetting } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const autoWriteSetting: AutoWriteSetting = {
  "excludedSourceIds" : [ "2c91808a7813090a017814552e526350" ],
  "includedSourceIds" : [ "2c91808a7813090a017814552e526349", "2c91808a7813090a017814552e52634a" ],
  "enabled" : true
}; // Auto-write settings to create
const result = await apiInstance.createAutoWriteSettingsV1({ autoWriteSetting: autoWriteSetting });
console.log(result);
```

[[Back to top]](#)

## get-auto-write-settings-v1
Get auto-write settings for SED
Get the current auto-write configuration for the tenant, including the enabled state and source include/exclude lists.

[API Spec](https://developer.sailpoint.com/docs/api/get-auto-write-settings-v-1)

### Parameters

This endpoint does not need any parameter.

### Return type

`AutoWriteSettingResponse`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const result = await apiInstance.getAutoWriteSettingsV1({  });
console.log(result);
```

[[Back to top]](#)

## get-sed-batch-stats-v1
Submit sed batch stats request
'Submit Sed Batch Stats Request.

 Submits batchId in the path param `(e.g. {batchId}/stats)`. API responses with stats
 of the batchId.'


[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batch-stats-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**batchId** | `string` | Batch Id |  [default to undefined]

### Return type

`SedBatchStats`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const batchId: string = 8c190e67-87aa-4ed9-a90b-d9d5344523fb; // Batch Id
const result = await apiInstance.getSedBatchStatsV1({ batchId: batchId });
console.log(result);
```

[[Back to top]](#)

## get-sed-batches-v1
List Sed Batch Record
List Sed Batches.
API responses with Sed Batch Records

[API Spec](https://developer.sailpoint.com/docs/api/get-sed-batches-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. | [optional] [default to 0]
**limit** | `number` | Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. | [optional] [default to 250]
**count** | `boolean` | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send &#x60;count&#x3D;true&#x60; if that value will not be used. | [optional] [default to false]
**countOnly** | `boolean` | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. | [optional] [default to false]
**status** | `string` | Batch Status | [optional] [default to undefined]

### Return type

`Array<SedBatchRecord>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const offset: number = 0; // Offset  Integer specifying the offset of the first result from the beginning of the collection. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). The offset value is record-based, not page-based, and the index starts at 0. (optional)
const limit: number = 250; // Limit  Integer specifying the maximum number of records to return in a single API call. The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). If it is not specified, a default limit is used. (optional)
const count: boolean = true; // If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored.  The standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#paginating-results). Since requesting a total count can have a performance impact, it is recommended not to send &#x60;count&#x3D;true&#x60; if that value will not be used. (optional)
const countOnly: boolean = true; // If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional)
const status: string = completed, failed, submitted, materialized, failed; // Batch Status (optional)
const result = await apiInstance.getSedBatchesV1({  });
console.log(result);
```

[[Back to top]](#)

## list-pending-entitlement-recommendation-approvals-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List pending entitlement recommendation approvals
Returns a list of entitlement recommendations (SED and/or privilege) that are currently awaiting review or approval. Each record includes the recommendation type, entitlement details, and any AI-generated suggestions.

[API Spec](https://developer.sailpoint.com/docs/api/list-pending-entitlement-recommendation-approvals-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<EntitlementRecommendationRecord>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listPendingEntitlementRecommendationApprovalsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-privileged-entitlement-recommendations-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
List privileged entitlement recommendations
Returns a list of privileged entitlement recommendation groups. Each group aggregates individual entitlement instances that share the same entitlement name and connector type, along with a recommendation score and instance count.

[API Spec](https://developer.sailpoint.com/docs/api/list-privileged-entitlement-recommendations-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<PrivilegedRecommendationGroup>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listPrivilegedEntitlementRecommendationsV1({  });
console.log(result);
```

[[Back to top]](#)

## list-seds-v1
List suggested entitlement descriptions
List of Suggested Entitlement Descriptions (SED)

SED field descriptions:

**batchId**: the ID of the batch of entitlements that are submitted for description generation

**displayName**: the display name of the entitlement that we are generating a description for

**sourceName**: the name of the source associated with the entitlement that we are generating the description for

**sourceId**: the ID of the source associated with the entitlement that we are generating the description for

**status**: the status of the suggested entitlement description, valid status options: "requested", "suggested", "not_suggested", "failed", "assigned", "approved", "denied"

**fullText**: will filter suggested entitlement description records by text found in any of the following fields: entitlement name, entitlement display name, suggested description, source name

[API Spec](https://developer.sailpoint.com/docs/api/list-seds-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** | [optional] [default to undefined]
**countOnly** | `boolean` | If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. | [optional] [default to false]
**requestedByAnyone** | `boolean` | By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested | [optional] [default to false]
**showPendingStatusOnly** | `boolean` | Will limit records to items that are in \&quot;suggested\&quot; or \&quot;approved\&quot; status | [optional] [default to false]

### Return type

`Array<Sed>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = displayName co "Read and Write"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **batchId**: *eq, ne*  **displayName**: *eq, ne, co*  **sourceName**: *eq, ne, co*  **sourceId**: *eq, ne*  **status**: *eq, ne*  **fullText**: *co* (optional)
const sorters: string = sorters=displayName; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **displayName, sourceName, status** (optional)
const countOnly: boolean = count-only=true; // If &#x60;true&#x60; it will populate the &#x60;X-Total-Count&#x60; response header with the number of results that would be returned if &#x60;limit&#x60; and &#x60;offset&#x60; were ignored. This parameter differs from the count parameter in that this one skips executing the actual query and always return an empty array. (optional)
const requestedByAnyone: boolean = requested-by-anyone=true; // By default, the ListSeds API will only return items that you have requested to be generated.   This option will allow you to see all items that have been requested (optional)
const showPendingStatusOnly: boolean = show-pending-status-only=true; // Will limit records to items that are in \&quot;suggested\&quot; or \&quot;approved\&quot; status (optional)
const result = await apiInstance.listSedsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-entitlement-recommendation-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update an entitlement recommendation
Partially update a single entitlement recommendation record by its ID. Use this endpoint to update the status, description, or privilege level of a specific SED or privilege recommendation.

[API Spec](https://developer.sailpoint.com/docs/api/patch-entitlement-recommendation-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The unique identifier of the entitlement recommendation to update. |  [default to undefined]
**jsonPatchOperation** | `Array<JsonPatchOperation>` | The patch operations to apply to the entitlement recommendation record. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`EntitlementRecommendationRecord`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { JsonPatchOperation } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const id: string = 79db50d4-723c-4aa0-a824-83c2205d82d1; // The unique identifier of the entitlement recommendation to update.
const jsonPatchOperation: Array<JsonPatchOperation> = {
  "op" : "replace",
  "path" : "/description",
  "value" : "New description"
}; // The patch operations to apply to the entitlement recommendation record.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchEntitlementRecommendationV1({ id: id, jsonPatchOperation: jsonPatchOperation });
console.log(result);
```

[[Back to top]](#)

## patch-sed-v1
Patch suggested entitlement description
Patch Suggested Entitlement Description

[API Spec](https://developer.sailpoint.com/docs/api/patch-sed-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | id is sed id |  [default to undefined]
**sedPatch** | `Array<SedPatch>` | Sed Patch Request | 

### Return type

`Sed`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SedPatch } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const id: string = ebab396f-0af1-4050-89b7-dafc63ec70e7; // id is sed id
const sedPatch: Array<SedPatch> = {
  "op" : "replace",
  "path" : "status",
  "value" : "approved"
}; // Sed Patch Request
const result = await apiInstance.patchSedV1({ id: id, sedPatch: sedPatch });
console.log(result);
```

[[Back to top]](#)

## submit-entitlement-recommendations-assignment-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Assign entitlement recommendations for review
Assign a set of entitlement recommendation records to a reviewer. The assignee can be a specific identity, a governance group, or a role-based assignee such as source owner or entitlement owner. Returns a batch ID that can be used to track the assignment.

[API Spec](https://developer.sailpoint.com/docs/api/submit-entitlement-recommendations-assignment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**entitlementRecommendationAssignRequest** | `EntitlementRecommendationAssignRequest` | The recommendation IDs and the target assignee. | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`EntitlementRecommendationAssignResult`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { EntitlementRecommendationAssignRequest } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const entitlementRecommendationAssignRequest: EntitlementRecommendationAssignRequest = {
  "assignee" : {
    "type" : "IDENTITY",
    "value" : "2c91808a7f3b2e8a017f3c3e5f6d0099"
  },
  "items" : [ "79db50d4-723c-4aa0-a824-83c2205d82d1", "a1b2c3d4-e5f6-7890-abcd-ef1234567890" ]
}; // The recommendation IDs and the target assignee.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.submitEntitlementRecommendationsAssignmentV1({ entitlementRecommendationAssignRequest: entitlementRecommendationAssignRequest });
console.log(result);
```

[[Back to top]](#)

## submit-sed-approval-v1
Submit bulk approval request
Submit Bulk Approval Request for SED.
Request body takes list of SED Ids. API responses with list of SED Approval Status

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-approval-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sedApproval** | `Array<SedApproval>` | Sed Approval | 

### Return type

`Array<SedApprovalStatus>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SedApproval } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const sedApproval: Array<SedApproval> = {
  "items" : "016629d1-1d25-463f-97f3-c6686846650"
}; // Sed Approval
const result = await apiInstance.submitSedApprovalV1({ sedApproval: sedApproval });
console.log(result);
```

[[Back to top]](#)

## submit-sed-assignment-v1
Submit sed assignment request
Submit Assignment Request.
Request body has an assignee, and list of SED Ids that are assigned to that assignee API responses with batchId that groups all approval requests together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-assignment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sedAssignment** | `SedAssignment` | Sed Assignment Request | 

### Return type

`SedAssignmentResponse`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SedAssignment } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const sedAssignment: SedAssignment = {
  "assignee" : {
    "type" : "SOURCE_OWNER",
    "value" : "016629d1-1d25-463f-97f3-c6686846650"
  },
  "items" : [ "016629d1-1d25-463f-97f3-0c6686846650", "016629d1-1d25-463f-97f3-0c6686846650" ]
}; // Sed Assignment Request
const result = await apiInstance.submitSedAssignmentV1({ sedAssignment: sedAssignment });
console.log(result);
```

[[Back to top]](#)

## submit-sed-batch-request-v1
Submit sed batch request
Submit Sed Batch Request.
Request body has one of the following: - a list of entitlement Ids - a list of SED Ids that user wants to have description generated by LLM.  API responses with batchId that groups Ids together

[API Spec](https://developer.sailpoint.com/docs/api/submit-sed-batch-request-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sedBatchRequest** | `SedBatchRequest` | Sed Batch Request | [optional]

### Return type

`SedBatchResponse`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { SedBatchRequest } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const sedBatchRequest: SedBatchRequest = {
  "entitlements" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
  "seds" : [ "016629d1-1d25-463f-97f3-c6686846650", "016629d1-1d25-463f-97f3-c6686846650" ],
  "searchCriteria" : {
    "key" : {
      "indices" : [ "entitlements" ],
      "query" : {
        "query" : "status:active"
      },
      "textQuery" : {
        "terms" : [ "admin", "user" ],
        "matchAny" : true,
        "fields" : [ "role", "name" ]
      },
      "searchAfter" : [ "12345", "67890" ],
      "filters" : {
        "status" : {
          "type" : "TERMS",
          "terms" : [ "active", "inactive" ]
        }
      },
      "sort" : [ "name:asc", "createdAt:desc" ],
      "queryType" : "TEXT",
      "includeNested" : true
    }
  }
}; // Sed Batch Request (optional)
const result = await apiInstance.submitSedBatchRequestV1({  });
console.log(result);
```

[[Back to top]](#)

## update-auto-write-settings-v1
Update auto-write settings for SED
Partially update the auto-write settings for a tenant using JSON Patch operations. Only the "replace" operation is supported. Returns 404 if no settings exist yet - use POST to create them first.

[API Spec](https://developer.sailpoint.com/docs/api/update-auto-write-settings-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**autoWriteSettingPatch** | `Array<AutoWriteSettingPatch>` | Patch operations for auto-write settings | 

### Return type

`AutoWriteSettingResponse`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SuggestedEntitlementDescriptionApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { AutoWriteSettingPatch } from '@sailpoint/api-client/dist/suggested_entitlement_description/api';

const configuration = new Configuration();
const apiInstance = new SuggestedEntitlementDescriptionApi(configuration);
const autoWriteSettingPatch: Array<AutoWriteSettingPatch> = {
  "op" : "replace",
  "path" : "/enabled",
  "value" : true
}; // Patch operations for auto-write settings
const result = await apiInstance.updateAutoWriteSettingsV1({ autoWriteSettingPatch: autoWriteSettingPatch });
console.log(result);
```

[[Back to top]](#)

