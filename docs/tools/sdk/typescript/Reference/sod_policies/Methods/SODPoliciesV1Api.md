---
id: v1-sod-policies
title: SODPolicies
pagination_label: SODPolicies
sidebar_label: SODPolicies
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'SODPolicies', 'v1SODPolicies']
slug: /tools/sdk/typescript/sod_policies/methods/sod-policies
tags: ['SDK', 'Software Development Kit', 'SODPolicies', 'v1SODPolicies']
---

# SODPoliciesV1Api
  Use this API to implement and manage &quot;separation of duties&quot; (SOD) policies. 
With SOD policy functionality in place, administrators can organize the access in their tenants to prevent individuals from gaining conflicting or excessive access. 

&quot;Separation of duties&quot; refers to the concept that people shouldn&#39;t have conflicting sets of access - all their access should be configured in a way that protects your organization&#39;s assets and data.  
For example, people who record monetary transactions shouldn&#39;t be able to issue payment for those transactions.
Any changes to major system configurations should be approved by someone other than the person requesting the change. 

Organizations can use &quot;separation of duties&quot; (SOD) policies to enforce and track their internal security rules throughout their tenants.
These SOD policies limit each user&#39;s involvement in important processes and protects the organization from individuals gaining excessive access. 

To create SOD policies in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Policies&#39;.
To create a policy, they must configure two lists of access items. Each access item can only be added to one of the two lists.
They can search for the entitlements they want to add to these access lists.

&gt;Note: You can have a maximum of 500 policies of any type (including general policies) in your organization. In each access-based SOD policy, you can have a maximum of 50 entitlements in each access list.  

Once a SOD policy is in place, if an identity has access items on both lists, a SOD violation will trigger. 
These violations are included in SOD violation reports that other users will see in emails at regular intervals if they&#39;re subscribed to the SOD policy.
The other users can then better help to enforce these SOD policies. 

To create a subscription to a SOD policy in Identity Security Cloud, administrators use &#39;Search&#39; and then access &#39;Layers&#39;.
They can create a subscription to the policy and schedule it to run at a regular interval. 

Refer to [Managing Policies](https://documentation.sailpoint.com/saas/help/sod/manage-policies.html) for more information about SOD policies. 

Refer to [Subscribe to a SOD Policy](https://documentation.sailpoint.com/saas/help/sod/policy-violations.html#subscribe-to-an-sod-policy) for more information about SOD policy subscriptions.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create-sod-policy-v1**](#create-sod-policy-v1) | **POST** `/sod-policies/v1` | Create sod policy
[**delete-sod-policy-schedule-v1**](#delete-sod-policy-schedule-v1) | **DELETE** `/sod-policies/v1/{id}/schedule` | Delete sod policy schedule
[**delete-sod-policy-v1**](#delete-sod-policy-v1) | **DELETE** `/sod-policies/v1/{id}` | Delete sod policy by id
[**get-custom-violation-report-v1**](#get-custom-violation-report-v1) | **GET** `/sod-violation-report/v1/{reportResultId}/download/{fileName}` | Download custom violation report
[**get-default-violation-report-v1**](#get-default-violation-report-v1) | **GET** `/sod-violation-report/v1/{reportResultId}/download` | Download violation report
[**get-sod-all-report-run-status-v1**](#get-sod-all-report-run-status-v1) | **GET** `/sod-violation-report/v1` | Get multi-report run task status
[**get-sod-policy-schedule-v1**](#get-sod-policy-schedule-v1) | **GET** `/sod-policies/v1/{id}/schedule` | Get sod policy schedule
[**get-sod-policy-v1**](#get-sod-policy-v1) | **GET** `/sod-policies/v1/{id}` | Get sod policy by id
[**get-sod-violation-report-run-status-v1**](#get-sod-violation-report-run-status-v1) | **GET** `/sod-policies/v1/sod-violation-report-status/{reportResultId}` | Get violation report run status
[**get-sod-violation-report-status-v1**](#get-sod-violation-report-status-v1) | **GET** `/sod-policies/v1/{id}/violation-report` | Get sod violation report status
[**list-sod-policies-v1**](#list-sod-policies-v1) | **GET** `/sod-policies/v1` | List sod policies
[**patch-sod-policy-v1**](#patch-sod-policy-v1) | **PATCH** `/sod-policies/v1/{id}` | Patch sod policy by id
[**put-policy-schedule-v1**](#put-policy-schedule-v1) | **PUT** `/sod-policies/v1/{id}/schedule` | Update sod policy schedule
[**put-sod-policy-v1**](#put-sod-policy-v1) | **PUT** `/sod-policies/v1/{id}` | Update sod policy by id
[**start-evaluate-sod-policy-v1**](#start-evaluate-sod-policy-v1) | **POST** `/sod-policies/v1/{id}/evaluate` | Evaluate one policy by id
[**start-sod-all-policies-for-org-v1**](#start-sod-all-policies-for-org-v1) | **POST** `/sod-violation-report/v1/run` | Runs all policies for org
[**start-sod-policy-v1**](#start-sod-policy-v1) | **POST** `/sod-policies/v1/{id}/violation-report/run` | Runs sod policy violation report


## create-sod-policy-v1
Create sod policy
This creates both General and Conflicting Access Based policy, with a limit of 50 entitlements for each (left & right) criteria for Conflicting Access Based SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/create-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**sodpolicyV1** | `SodpolicyV1` |  | 

### Return type

`SodpolicyV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const sodpolicyV1: SodpolicyV1 = {"name":"Conflicting-Policy-Name","description":"This policy ensures compliance of xyz","ownerRef":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"Owner Name"},"externalPolicyReference":"XYZ policy","compensatingControls":"Have a manager review the transaction decisions for their \"out of compliance\" employee","correctionAdvice":"Based on the role of the employee, managers should remove access that is not required for their job function.","state":"ENFORCED","tags":["string"],"creatorId":"0f11f2a4-7c94-4bf3-a2bd-742580fe3bde","modifierId":"0f11f2a4-7c94-4bf3-a2bd-742580fe3bde","violationOwnerAssignmentConfig":{"assignmentRule":"MANAGER","ownerRef":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"Violation Owner Name"}},"scheduled":true,"type":"CONFLICTING_ACCESS_BASED","conflictingAccessCriteria":{"leftCriteria":{"name":"money-in","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67"}]},"rightCriteria":{"name":"money-out","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a68"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a69"}]}}}; // 
const result = await apiInstance.createSodPolicyV1({ sodpolicyV1: sodpolicyV1 });
console.log(result);
```

[[Back to top]](#)

## delete-sod-policy-schedule-v1
Delete sod policy schedule
This deletes schedule for a specified SOD policy by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-sod-policy-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD policy the schedule must be deleted for. |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the SOD policy the schedule must be deleted for.
const result = await apiInstance.deleteSodPolicyScheduleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## delete-sod-policy-v1
Delete sod policy by id
This deletes a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD Policy to delete. |  [default to undefined]
**logical** | `boolean` | Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. | [optional] [default to true]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the SOD Policy to delete.
const logical: boolean = true; // Indicates whether this is a soft delete (logical true) or a hard delete.  Soft delete marks the policy as deleted and just save it with this status. It could be fully deleted or recovered further.  Hard delete vise versa permanently delete SOD request during this call. (optional)
const result = await apiInstance.deleteSodPolicyV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-custom-violation-report-v1
Download custom violation report
This allows to download a specified named violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-custom-violation-report-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reportResultId** | `string` | The ID of the report reference to download. |  [default to undefined]
**fileName** | `string` | Custom Name for the  file. |  [default to undefined]

### Return type

`File`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const reportResultId: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the report reference to download.
const fileName: string = custom-name; // Custom Name for the  file.
const result = await apiInstance.getCustomViolationReportV1({ reportResultId: reportResultId, fileName: fileName });
console.log(result);
```

[[Back to top]](#)

## get-default-violation-report-v1
Download violation report
This allows to download a violation report for a given report reference.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-default-violation-report-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reportResultId** | `string` | The ID of the report reference to download. |  [default to undefined]

### Return type

`File`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const reportResultId: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the report reference to download.
const result = await apiInstance.getDefaultViolationReportV1({ reportResultId: reportResultId });
console.log(result);
```

[[Back to top]](#)

## get-sod-all-report-run-status-v1
Get multi-report run task status
This endpoint gets the status for a violation report for all policy run.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-all-report-run-status-v1)

### Parameters

This endpoint does not need any parameter.

### Return type

`ReportresultreferenceV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const result = await apiInstance.getSodAllReportRunStatusV1({  });
console.log(result);
```

[[Back to top]](#)

## get-sod-policy-schedule-v1
Get sod policy schedule
This endpoint gets a specified SOD policy's schedule.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-policy-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD policy schedule to retrieve. |  [default to undefined]

### Return type

`SodpolicyscheduleV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the SOD policy schedule to retrieve.
const result = await apiInstance.getSodPolicyScheduleV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sod-policy-v1
Get sod policy by id
This gets specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD Policy to retrieve. |  [default to undefined]

### Return type

`SodpolicyV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the SOD Policy to retrieve.
const result = await apiInstance.getSodPolicyV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-sod-violation-report-run-status-v1
Get violation report run status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-violation-report-run-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reportResultId** | `string` | The ID of the report reference to retrieve. |  [default to undefined]

### Return type

`ReportresultreferenceV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const reportResultId: string = 2e8d8180-24bc-4d21-91c6-7affdb473b0d; // The ID of the report reference to retrieve.
const result = await apiInstance.getSodViolationReportRunStatusV1({ reportResultId: reportResultId });
console.log(result);
```

[[Back to top]](#)

## get-sod-violation-report-status-v1
Get sod violation report status
This gets the status for a violation report run task that has already been invoked.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-sod-violation-report-status-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the violation report to retrieve status for. |  [default to undefined]

### Return type

`ReportresultreferenceV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the violation report to retrieve status for.
const result = await apiInstance.getSodViolationReportStatusV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-sod-policies-v1
List sod policies
This gets list of all SOD policies.
Requires role of ORG_ADMIN

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-sod-policies-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** | [optional] [default to undefined]

### Return type

`Array<SodpolicyV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "bc693f07e7b645539626c25954c58554"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, in*  **state**: *eq, in* (optional)
const sorters: string = id,name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **id, name, created, modified, description** (optional)
const result = await apiInstance.listSodPoliciesV1({  });
console.log(result);
```

[[Back to top]](#)

## patch-sod-policy-v1
Patch sod policy by id
Allows updating SOD Policy fields other than ["id","created","creatorId","policyQuery","type"] using the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.
Requires role of ORG_ADMIN.
This endpoint can only patch CONFLICTING_ACCESS_BASED type policies. Do not use this endpoint to patch general policies - doing so will build an API exception. 

[API Spec](https://developer.sailpoint.com/docs/api/v1/patch-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD policy being modified. |  [default to undefined]
**jsonpatchoperationV1** | `Array<JsonpatchoperationV1>` | A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria  | 

### Return type

`SodpolicyV1`

### HTTP request headers

- **Content-Type**: application/json-patch+json
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = 2c918083-5d19-1a86-015d-28455b4a2329; // The ID of the SOD policy being modified.
const jsonpatchoperationV1: Array&lt;JsonpatchoperationV1&gt; = [{"op":"replace","path":"/description","value":"Modified description"},{"op":"replace","path":"/conflictingAccessCriteria/leftCriteria/name","value":"money-in-modified"},{"op":"replace","path":"/conflictingAccessCriteria/rightCriteria","value":{"name":"money-out-modified","criteriaList":[{"type":"ENTITLEMENT","id":"2c918087682f9a86016839c0509c1ab2"}]}}]; // A list of SOD Policy update operations according to the [JSON Patch](https://tools.ietf.org/html/rfc6902) standard.  The following fields are patchable: * name * description * ownerRef * externalPolicyReference * compensatingControls * correctionAdvice * state * tags * violationOwnerAssignmentConfig * scheduled * conflictingAccessCriteria 
const result = await apiInstance.patchSodPolicyV1({ id: id, jsonpatchoperationV1: jsonpatchoperationV1 });
console.log(result);
```

[[Back to top]](#)

## put-policy-schedule-v1
Update sod policy schedule
This updates schedule for a specified SOD policy.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-policy-schedule-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD policy to update its schedule. |  [default to undefined]
**sodpolicyscheduleV1** | `SodpolicyscheduleV1` |  | 

### Return type

`SodpolicyscheduleV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the SOD policy to update its schedule.
const sodpolicyscheduleV1: SodpolicyscheduleV1 = ; // 
const result = await apiInstance.putPolicyScheduleV1({ id: id, sodpolicyscheduleV1: sodpolicyscheduleV1 });
console.log(result);
```

[[Back to top]](#)

## put-sod-policy-v1
Update sod policy by id
This updates a specified SOD policy.
Requires role of ORG_ADMIN.

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the SOD policy to update. |  [default to undefined]
**sodpolicyV1** | `SodpolicyV1` |  | 

### Return type

`SodpolicyV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The ID of the SOD policy to update.
const sodpolicyV1: SodpolicyV1 = {"name":"Conflicting-Policy-Name","description":"Modified Description","externalPolicyReference":"XYZ policy","compensatingControls":"Have a manager review the transaction decisions for their \"out of compliance\" employee","correctionAdvice":"Based on the role of the employee, managers should remove access that is not required for their job function.","state":"ENFORCED","tags":["string"],"violationOwnerAssignmentConfig":{"assignmentRule":"MANAGER","ownerRef":{"type":"IDENTITY","id":"2c91808568c529c60168cca6f90c1313","name":"Violation Owner Name"}},"scheduled":true,"type":"CONFLICTING_ACCESS_BASED","conflictingAccessCriteria":{"leftCriteria":{"name":"money-in","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a66"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a67"}]},"rightCriteria":{"name":"money-out","criteriaList":[{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a68"},{"type":"ENTITLEMENT","id":"2c9180866166b5b0016167c32ef31a69"}]}}}; // 
const result = await apiInstance.putSodPolicyV1({ id: id, sodpolicyV1: sodpolicyV1 });
console.log(result);
```

[[Back to top]](#)

## start-evaluate-sod-policy-v1
Evaluate one policy by id
Runs the scheduled report for the policy retrieved by passed policy ID.  The report schedule is fetched from the policy retrieved by ID.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-evaluate-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The SOD policy ID to run. |  [default to undefined]

### Return type

`ReportresultreferenceV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The SOD policy ID to run.
const result = await apiInstance.startEvaluateSodPolicyV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## start-sod-all-policies-for-org-v1
Runs all policies for org
Runs multi-policy report for the org. If a policy reports more than 5000 violations, the report mentions that the violation limit was exceeded for that policy. If the request is empty, the report runs for all policies. Otherwise, the report runs for only the filtered policy list provided.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-sod-all-policies-for-org-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**multipolicyrequestV1** | `MultipolicyrequestV1` |  | [optional]

### Return type

`ReportresultreferenceV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const multipolicyrequestV1: MultipolicyrequestV1 = {"filteredPolicyList":["b868cd40-ffa4-4337-9c07-1a51846cfa94","63a07a7b-39a4-48aa-956d-50c827deba2a"]}; //  (optional)
const result = await apiInstance.startSodAllPoliciesForOrgV1({  });
console.log(result);
```

[[Back to top]](#)

## start-sod-policy-v1
Runs sod policy violation report
This invokes processing of violation report for given SOD policy. If the policy reports more than 5000 violations, the report returns with violation limit exceeded message.

[API Spec](https://developer.sailpoint.com/docs/api/v1/start-sod-policy-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The SOD policy ID to run. |  [default to undefined]

### Return type

`ReportresultreferenceV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { SODPoliciesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new SODPoliciesV1Api(configuration);
const id: string = ef38f943-47e9-4562-b5bb-8424a56397d8; // The SOD policy ID to run.
const result = await apiInstance.startSodPolicyV1({ id: id });
console.log(result);
```

[[Back to top]](#)

