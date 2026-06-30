---
id: v1-sod-violations
title: SODViolations
pagination_label: SODViolations
sidebar_label: SODViolations
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SODViolations', 'v1SODViolations']
slug: /tools/sdk/typescript/sod_violations/methods/sod-violations
tags: ['SDK', 'Software Development Kit', 'SODViolations', 'v1SODViolations']
---

# SODViolationsV1Api
  Use this API to check for current &quot;separation of duties&quot; (SOD) policy violations as well as potential future SOD policy violations. 
With SOD violation functionality in place, administrators can get information about current SOD policy violations and predict whether an access change will trigger new violations, which helps to prevent them from occurring at all. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

Once a SOD policy is in place, if an identity has conflicting access items, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies.

Administrators can use the SOD violations APIs to check a set of identities for any current SOD violations, and they can use them to check whether adding an access item would potentially trigger a SOD violation. 
This second option is a good way to prevent SOD violations from triggering at all. 

Refer to [Handling Policy Violations](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html) for more information about SOD policy violations. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**start-predict-sod-violations-v1**](#start-predict-sod-violations-v1) | **POST** `/sod-violations/v1/predict` | Predict sod violations for identity.
[**start-violation-check-v1**](#start-violation-check-v1) | **POST** `/sod-violations/v1/check` | Check sod violations


## start-predict-sod-violations-v1
Predict sod violations for identity.
This API is used to check if granting some additional accesses would cause the subject to be in violation of any SOD policies. Returns the violations that would be caused.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-predict-sod-violations-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identitywithnewaccessV1** | `IdentitywithnewaccessV1` |  | 

### Return type

`ViolationpredictionV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODViolationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODViolationsV1Api(configuration);
const identitywithnewaccessV1: IdentitywithnewaccessV1 = {"identityId":"2c91808568c529c60168cca6f90c1313","accessRefs":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}; // 
const result = await apiInstance.startPredictSodViolationsV1({ identitywithnewaccessV1: identitywithnewaccessV1 });
console.log(result);
```

[[Back to top]](#)

## start-violation-check-v1
Check sod violations
This API initiates a SOD policy verification asynchronously.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-violation-check-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**identitywithnewaccessV1** | `IdentitywithnewaccessV1` |  | 

### Return type

`SodviolationcheckV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODViolationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODViolationsV1Api(configuration);
const identitywithnewaccessV1: IdentitywithnewaccessV1 = {"identityId":"2c91808568c529c60168cca6f90c1313","accessRefs":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c050861ab1"},{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}],"clientMetadata":{"additionalProp1":"string","additionalProp2":"string","additionalProp3":"string"}}; // 
const result = await apiInstance.startViolationCheckV1({ identitywithnewaccessV1: identitywithnewaccessV1 });
console.log(result);
```

[[Back to top]](#)

