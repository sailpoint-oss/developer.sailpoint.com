---
id: v1-account-usages
title: AccountUsages
pagination_label: AccountUsages
sidebar_label: AccountUsages
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountUsages', 'v1AccountUsages']
slug: /tools/sdk/typescript/account_usages/methods/account-usages
tags: ['SDK', 'Software Development Kit', 'AccountUsages', 'v1AccountUsages']
---

# AccountUsagesV1Api
  Use this API to implement account usage insight functionality.
With this functionality in place, administrators can gather information and insights about how their tenants&#39; source accounts are being used.
This allows organizations to get the information they need to start optimizing and securing source account usage.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-usages-by-account-id-v1**](#get-usages-by-account-id-v1) | **GET** `/account-usages/v1/{accountId}/summaries` | Returns account usage insights


## get-usages-by-account-id-v1
Returns account usage insights
This API returns a summary of account usage insights for past 12 months.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-usages-by-account-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accountId** | `string` | ID of IDN account |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** | [optional] [default to undefined]

### Return type

`Array<AccountusageV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountUsagesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountUsagesV1Api(configuration);
const accountId: string = ef38f94347e94562b5bb8424a56397d8; // ID of IDN account
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const sorters: string = -date; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **date** (optional)
const result = await apiInstance.getUsagesByAccountIdV1({ accountId: accountId });
console.log(result);
```

[[Back to top]](#)

