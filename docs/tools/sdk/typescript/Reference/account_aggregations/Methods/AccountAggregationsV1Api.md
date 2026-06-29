---
id: v1-account-aggregations
title: AccountAggregations
pagination_label: AccountAggregations
sidebar_label: AccountAggregations
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'AccountAggregations', 'v1AccountAggregations']
slug: /tools/sdk/typescript/account_aggregations/methods/account-aggregations
tags: ['SDK', 'Software Development Kit', 'AccountAggregations', 'v1AccountAggregations']
---

# AccountAggregationsV1Api
  Use this API to implement account aggregation progress tracking functionality.
With this functionality in place, administrators can view in-progress account aggregations, their statuses, and their relevant details.

An account aggregation refers to the process Identity Security Cloud uses to gather and load account data from a source into Identity Security Cloud.

Whenever Identity Security Cloud is in the process of aggregating a source, it adds an entry to the Aggregation Activity Log, along with its relevant details.
To view aggregation activity, administrators can select the Connections drop-down menu, select Sources, and select the relevant source, select its Import Data tab, and select Account Aggregation.
In Account Aggregation, administrators can view the account aggregations&#39; statuses and details in the Account Activity Log.

Refer to [Loading Account Data](https://documentation.sailpoint.com/saas/help/accounts/loading_data.html) for more information about account aggregations.

If you are looking for the endpoint for account aggregations in a source, [click here](https://developer.sailpoint.com/docs/api/v2025/import-accounts)
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-account-aggregation-status-v1**](#get-account-aggregation-status-v1) | **GET** `/account-aggregations/v1/{id}/status` | In-progress account aggregation status


## get-account-aggregation-status-v1
In-progress account aggregation status
This API returns the status of an *in-progress* account aggregation, along with the total number of **NEW**, **CHANGED** and **DELETED** accounts found since the previous aggregation, and the number of those accounts that have been processed so far.

Accounts that have not changed since the previous aggregation are not included in **totalAccounts** and **processedAccounts** counts returned by this API. This is distinct from **Accounts Scanned** shown in the Aggregation UI, which indicates total accounts scanned regardless of whether they changed or not.

Since this endpoint reports on the status of an *in-progress* account aggregation, totalAccounts and processedAccounts may change between calls to this endpoint.

*Only available up to an hour after the aggregation completes. May respond with *404 Not Found* after that.*
required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-account-aggregation-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The account aggregation id |  [default to undefined]

### Return type

`AccountaggregationstatusV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { AccountAggregationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new AccountAggregationsV1Api(configuration);
const id: string = 2c91808477a6b0c60177a81146b8110b; // The account aggregation id
const result = await apiInstance.getAccountAggregationStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

