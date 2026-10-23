# DataSegmentation

# DataSegmentationService
  This service is responsible for creating segments that will determine how access is delegated to identities
withing the organization.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

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

The service takes one object that holds every parameter. Its type is `CreateDataSegmentV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**dataSegment** | `DataSegment` |  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<DataSegment>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';
import { DataSegment } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  createDataSegmentV1(): void {
    const dataSegment: DataSegment = ; // 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.createDataSegmentV1({ dataSegment: dataSegment }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `DeleteDataSegmentV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segment ID to delete. |  [default to undefined]
**published** | `boolean` | This determines which version of the segment to delete | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  deleteDataSegmentV1(): void {
    const segmentId: string = ; // The segment ID to delete.
    const published: boolean = ; // This determines which version of the segment to delete (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.deleteDataSegmentV1({ segmentId: segmentId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `GetDataSegmentIdentityMembershipV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | The identity ID to retrieve the segments they are in. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<Array<SegmentMembership>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  getDataSegmentIdentityMembershipV1(): void {
    const identityId: string = ; // The identity ID to retrieve the segments they are in.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getDataSegmentIdentityMembershipV1({ identityId: identityId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `GetDataSegmentV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segment ID to retrieve. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<DataSegment>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  getDataSegmentV1(): void {
    const segmentId: string = ; // The segment ID to retrieve.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getDataSegmentV1({ segmentId: segmentId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `GetDataSegmentationEnabledForUserV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identityId** | `string` | The identity ID to retrieve if segmentation is enabled for the identity. |  [default to undefined]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<boolean>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  getDataSegmentationEnabledForUserV1(): void {
    const identityId: string = ; // The identity ID to retrieve if segmentation is enabled for the identity.
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.getDataSegmentationEnabledForUserV1({ identityId: identityId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `ListDataSegmentsV1RequestParams`.


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

`Observable<Array<DataSegment>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  listDataSegmentsV1(): void {
    const enabled: boolean = ; // This boolean indicates whether the segment is currently active. Inactive segments have no effect. (optional)
    const unique: boolean = ; // This returns only one record if set to true and that would be the published record if exists. (optional)
    const published: boolean = ; // This boolean indicates whether the segment is being applied to the accounts. If unpublished its being actively modified until published (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, sw*  **name**: *eq, in, sw* (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.listDataSegmentsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `PatchDataSegmentV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segment ID to modify. |  [default to undefined]
**requestBody** | `Array<object>` | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled  | 
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<DataSegment>`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  patchDataSegmentV1(): void {
    const segmentId: string = ; // The segment ID to modify.
    const requestBody: Array<object> = ; // A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * membership * memberFilter * memberSelection * scopes * enabled 
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.patchDataSegmentV1({ segmentId: segmentId, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
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

The service takes one object that holds every parameter. Its type is `PublishDataSegmentV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentId** | `string` | The segmentId. |  [default to undefined]
**requestBody** | `Array<string>` | A list of segment ids that you wish to publish | 
**publishAll** | `boolean` | This flag decides whether you want to publish all unpublished or a list of specific segment ids | [optional] [default to true]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Observable<void>` (empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { DataSegmentationService } from '@sailpoint/angular-sdk/data_segmentation';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(DataSegmentationService);

  publishDataSegmentV1(): void {
    const segmentId: string = ; // The segmentId.
    const requestBody: Array<string> = ; // A list of segment ids that you wish to publish
    const publishAll: boolean = ; // This flag decides whether you want to publish all unpublished or a list of specific segment ids (optional)
    const xSailPointExperimental: string = ; // Use this header to enable this experimental API. (optional)
    this.api.publishDataSegmentV1({ segmentId: segmentId, requestBody: requestBody }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

