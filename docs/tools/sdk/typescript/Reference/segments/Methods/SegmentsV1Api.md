---
id: v1-segments
title: Segments
pagination_label: Segments
sidebar_label: Segments
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Segments', 'v1Segments']
slug: /tools/sdk/typescript/segments/methods/segments
tags: ['SDK', 'Software Development Kit', 'Segments', 'v1Segments']
---

# SegmentsV1Api
  Use this API to implement and customize access request segment functionality. 
With this functionality in place, administrators can create and manage access request segments. 
Segments provide organizations with a way to make the access their users have even more granular - this can simply the access request process for the organization&#39;s users and improves security by reducing the risk of overprovisoning access. 

Segments represent sets of identities, all grouped by specified identity attributes, who are only able to see and access the access items associated with their segments.
For example, administrators could group all their organization&#39;s London office employees into one segment, &quot;London Office Employees,&quot; by their shared location. 
The administrators could then define the access items the London employees would need, and the identities in the &quot;London Office Employees&quot; would then only be able to see and access those items.

In Identity Security Cloud, administrators can use the &#39;Access&#39; drop-down menu and select &#39;Segments&#39; to reach the &#39;Access Requests Segments&#39; page. 
This page lists all the existing access request segments, along with their statuses, enabled or disabled. 
Administrators can use this page to create, edit, enable, disable, and delete segments. 
To create a segment, an administrator must provide a name, define the identities grouped in the segment, and define the items the identities in the segment can access.
These items can be access profiles, roles, or entitlements. 

When administrators use the API to create and manage segments, they use a JSON expression in the &#x60;visibilityCriteria&#x60; object to define the segment&#39;s identities and access items. 

Refer to [Managing Access Request Segments](https://documentation.sailpoint.com/saas/help/requests/segments.html) for more information about segments in Identity Security Cloud.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-segment-v1**](#create-segment-v1) | **POST** `/segments/v1` | Create segment
[**delete-segment-v1**](#delete-segment-v1) | **DELETE** `/segments/v1/{id}` | Delete segment by id
[**get-segment-v1**](#get-segment-v1) | **GET** `/segments/v1/{id}` | Get segment by id
[**list-segments-v1**](#list-segments-v1) | **GET** `/segments/v1` | List segments
[**patch-segment-v1**](#patch-segment-v1) | **PATCH** `/segments/v1/{id}` | Update segment


## create-segment-v1
Create segment
This API creates a segment. 
>**Note:** Segment definitions may take time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-segment-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**segmentV1** | `SegmentV1` |  | 

### Return type

`SegmentV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SegmentsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SegmentsV1Api(configuration);
const segmentV1: SegmentV1 = ; // 
const result = await apiInstance.createSegmentV1({ segmentV1: segmentV1 });
console.log(result);
```

[[Back to top]](#)

## delete-segment-v1
Delete segment by id
This API deletes the segment specified by the given ID.
>**Note:** that segment deletion may take some time to become effective.    

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-segment-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The segment ID to delete. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SegmentsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SegmentsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The segment ID to delete.
const result = await apiInstance.deleteSegmentV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-segment-v1
Get segment by id
This API returns the segment specified by the given ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-segment-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The segment ID to retrieve. |  [default to undefined]

### Return type

`SegmentV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SegmentsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SegmentsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The segment ID to retrieve.
const result = await apiInstance.getSegmentV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-segments-v1
List segments
This API returns a list of all segments. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-segments-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<SegmentV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SegmentsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SegmentsV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.listSegmentsV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-segment-v1
Update segment
Use this API to update segment fields by using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
>**Note:** Changes to a segment may take some time to propagate to all identities.

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-segment-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The segment ID to modify. |  [default to undefined]
**requestBody** | `Array<object>` | A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active  | 

### Return type

`SegmentV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SegmentsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SegmentsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The segment ID to modify.
const requestBody: Array&lt;object&gt; = [{"op":"replace","path":"/visibilityCriteria","value":{"expression":{"operator":"AND","children":[{"operator":"EQUALS","attribute":"location","value":{"type":"STRING","value":"Philadelphia"}},{"operator":"EQUALS","attribute":"department","value":{"type":"STRING","value":"HR"}}]}}}]; // A list of segment update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * owner * visibilityCriteria * active 
const result = await apiInstance.patchSegmentV1({ id: id, requestBody: requestBody });
console.log(result);
```

[[Back to top]](#)

