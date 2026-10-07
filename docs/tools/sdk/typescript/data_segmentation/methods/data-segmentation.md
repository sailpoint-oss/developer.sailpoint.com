# DataSegmentation

# DataSegmentationApi
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-data-segment-v1**](#create-data-segment-v1) | **POST** `/data-segments/v1` | Create segment
[**delete-data-segment-v1**](#delete-data-segment-v1) | **DELETE** `/data-segments/v1/{segmentId}` | Delete segment by id
[**get-data-segment-identity-membership-v1**](#get-data-segment-identity-membership-v1) | **GET** `/data-segments/v1/membership/{identityId}` | Get segmentmembership by identity id
[**get-data-segment-v1**](#get-data-segment-v1) | **GET** `/data-segments/v1/{segmentId}` | Get segment by id
[**get-data-segmentation-enabled-for-user-v1**](#get-data-segmentation-enabled-for-user-v1) | **GET** `/data-segments/v1/user-enabled/{identityId}` | Is segmentation enabled by identity
[**list-data-segments-v1**](#list-data-segments-v1) | **GET** `/data-segments/v1` | Get segments
[**patch-data-segment-v1**](#patch-data-segment-v1) | **PATCH** `/data-segments/v1/{segmentId}` | Update segment
[**publish-data-segment-v1**](#publish-data-segment-v1) | **POST** `/data-segments/v1/{segmentId}` | Publish segment by id


## create-data-segment-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Create segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/create-data-segment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**dataSegment** | `DataSegment` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`DataSegment`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { DataSegment } from '@sailpoint/api-client/dist/data_segmentation/api';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const dataSegment: DataSegment = {
  "memberFilter" : {
    "expression" : {
      "children" : [ ],
      "attribute" : "location",
      "value" : {
        "type" : "STRING",
        "value" : "Austin"
      },
      "operator" : "EQUALS"
    }
  },
  "memberSelection" : [ {
    "type" : "IDENTITY",
    "id" : "29cb6c061da843ea8be4b3125f248f2a"
  }, {
    "type" : "IDENTITY",
    "id" : "f7b1b8a35fed4fd4ad2982014e137e19"
  } ],
  "created" : "2020-01-01T00:00:00Z",
  "name" : "segment-xyz",
  "modified" : "2020-01-01T00:00:00Z",
  "description" : "This segment represents xyz",
  "id" : "0f11f2a4-7c94-4bf3-a2bd-742580fe3bde",
  "scopes" : [ {
    "scope" : "ENTITLEMENT",
    "visibility" : "SELECTION",
    "scopeFilter" : null,
    "scopeSelection" : [ {
      "type" : "ENTITLEMENT",
      "id" : "34d73f611449463ea4fdcf02cda0c397"
    } ]
  } ],
  "membership" : "ALL",
  "published" : true,
  "enabled" : true
}; // 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.createDataSegmentV1({ dataSegment: dataSegment });
console.log(result);
```

[[Back to top]](#)

## delete-data-segment-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Delete segment by id
This API deletes the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/delete-data-segment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segment ID to delete. |  [default to undefined]
**published** | `boolean` | This determines which version of the segment to delete | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const segmentId: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The segment ID to delete.
const published: boolean = false; // This determines which version of the segment to delete (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.deleteDataSegmentV1({ segmentId: segmentId });
console.log(result);
```

[[Back to top]](#)

## get-data-segment-identity-membership-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get segmentmembership by identity id
This API returns the segment membership specified by the given identity ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-data-segment-identity-membership-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | The identity ID to retrieve the segments they are in. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<SegmentMembership>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const identityId: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The identity ID to retrieve the segments they are in.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getDataSegmentIdentityMembershipV1({ identityId: identityId });
console.log(result);
```

[[Back to top]](#)

## get-data-segment-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get segment by id
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/get-data-segment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segment ID to retrieve. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`DataSegment`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const segmentId: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The segment ID to retrieve.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getDataSegmentV1({ segmentId: segmentId });
console.log(result);
```

[[Back to top]](#)

## get-data-segmentation-enabled-for-user-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Is segmentation enabled by identity
This API returns whether or not segmentation is enabled for the identity.

[API Spec](https://developer.sailpoint.com/docs/api/get-data-segmentation-enabled-for-user-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | The identity ID to retrieve if segmentation is enabled for the identity. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`boolean`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const identityId: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The identity ID to retrieve if segmentation is enabled for the identity.
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getDataSegmentationEnabledForUserV1({ identityId: identityId });
console.log(result);
```

[[Back to top]](#)

## list-data-segments-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Get segments
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/list-data-segments-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**enabled** | `boolean` | This boolean indicates whether the segment is currently active. Inactive segments have no effect. | [optional] [default to true]
**unique** | `boolean` | This returns only one record if set to true and that would be the published record if exists. | [optional] [default to false]
**published** | `boolean` | This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published | [optional] [default to true]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* | [optional] [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<DataSegment>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const enabled: boolean = true; // This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional)
const unique: boolean = false; // This returns only one record if set to true and that would be the published record if exists. (optional)
const published: boolean = true; // This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = name eq ""; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.listDataSegmentsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-data-segment-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Update segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.

[API Spec](https://developer.sailpoint.com/docs/api/patch-data-segment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segment ID to modify. |  [default to undefined]
**requestBody** | `Array<object>` | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`DataSegment`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const segmentId: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The segment ID to modify.
const requestBody: Array<object> = [{"op":"replace","path":"/memberFilter","value":{"expression":{"operator":"AND","children":[{"operator":"EQUALS","attribute":"location","value":{"type":"STRING","value":"Philadelphia"}},{"operator":"EQUALS","attribute":"department","value":{"type":"STRING","value":"HR"}}]}}}]; // A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.patchDataSegmentV1({ segmentId: segmentId, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

## publish-data-segment-v1
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Publish segment by id
This will publish the segment so that it starts applying the segmentation to the desired users if enabled

[API Spec](https://developer.sailpoint.com/docs/api/publish-data-segment-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segmentId. |  [default to undefined]
**requestBody** | `Array<string>` | A list of segment ids that you wish to publish | 
**publishAll** | `boolean` | This flag decides whether you want to publish all unpublished or a list of specific segment ids | [optional] [default to true]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { DataSegmentationApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new DataSegmentationApi(configuration);
const segmentId: string = segmentId_example; // The segmentId.
const requestBody: Array<string> = ; // A list of segment ids that you wish to publish
const publishAll: boolean = true; // This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.publishDataSegmentV1({ segmentId: segmentId, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

