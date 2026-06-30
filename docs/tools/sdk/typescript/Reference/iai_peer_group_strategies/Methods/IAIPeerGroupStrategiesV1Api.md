---
id: v1-iai-peer-group-strategies
title: IAIPeerGroupStrategies
pagination_label: IAIPeerGroupStrategies
sidebar_label: IAIPeerGroupStrategies
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'IAIPeerGroupStrategies', 'v1IAIPeerGroupStrategies']
slug: /tools/sdk/typescript/iai_peer_group_strategies/methods/iai-peer-group-strategies
tags: ['SDK', 'Software Development Kit', 'IAIPeerGroupStrategies', 'v1IAIPeerGroupStrategies']
---

# IAIPeerGroupStrategiesV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-peer-group-outliers-v1**](#get-peer-group-outliers-v1) | **GET** `/peer-group-strategies/v1/{strategy}/identity-outliers` | Identity outliers list


## get-peer-group-outliers-v1
:::caution deprecated
This endpoint has been deprecated and may be replaced or removed in future versions of the API.
:::
:::warning experimental
This API is currently in an experimental state. The API is subject to change based on feedback and further testing. You must include the X-SailPoint-Experimental header and set it to `true` to use this endpoint.
:::
Identity outliers list
-- Deprecated : See 'IAI Outliers' This API will be used by Identity Governance systems to identify identities that are not included in an organization's peer groups. By default, 250 identities are returned. You can specify between 1 and 1000 number of identities that can be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-peer-group-outliers-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**strategy** | `'entitlement'` | The strategy used to create peer groups. Currently, \&#39;entitlement\&#39; is supported. |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**xSailPointExperimental** | `string` | Use this header to enable this experimental API. | [optional] [default to &#39;true&#39;]

### Return type

`Array<PeergroupmemberV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { IAIPeerGroupStrategiesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new IAIPeerGroupStrategiesV1Api(configuration);
const strategy: string = entitlement; // The strategy used to create peer groups. Currently, \&#39;entitlement\&#39; is supported.
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const xSailPointExperimental: string = true; // Use this header to enable this experimental API. (optional)
const result = await apiInstance.getPeerGroupOutliersV1({ strategy: strategy });
console.log(result);
```

[[Back to top]](#)

