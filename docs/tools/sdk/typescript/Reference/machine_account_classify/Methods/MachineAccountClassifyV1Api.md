---
id: v1-machine-account-classify
title: MachineAccountClassify
pagination_label: MachineAccountClassify
sidebar_label: MachineAccountClassify
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'MachineAccountClassify', 'v1MachineAccountClassify']
slug: /tools/sdk/typescript/machine_account_classify/methods/machine-account-classify
tags: ['SDK', 'Software Development Kit', 'MachineAccountClassify', 'v1MachineAccountClassify']
---

# MachineAccountClassifyV1Api
   
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send-classify-machine-account-v1**](#send-classify-machine-account-v1) | **POST** `/accounts/v1/{id}/classify` | Classify single machine account


## send-classify-machine-account-v1
Classify single machine account
Use this API to classify a single machine account.
A token with API, ORG_ADMIN, SOURCE_ADMIN, or SOURCE_SUBADMIN authority is required to call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/send-classify-machine-account-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Account ID. |  [default to undefined]
**classificationMode** | `'default' | 'ignoreManual' | 'forceMachine' | 'forceHuman'` | Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. | [optional] [default to &#39;default&#39;]

### Return type

`SendClassifyMachineAccountV1200ResponseV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { MachineAccountClassifyV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new MachineAccountClassifyV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // Account ID.
const classificationMode: string = forceMachine; // Specifies how the accounts should be classified.        default - uses criteria to classify account as machine or human, excludes accounts that were manually classified.       ignoreManual - like default, but includes accounts that were manually classified.       forceMachine - forces account to be classified as machine.       forceHuman - forces account to be classified as human. (optional)
const result = await apiInstance.sendClassifyMachineAccountV1({ id: id });
console.log(result);
```

[[Back to top]](#)

