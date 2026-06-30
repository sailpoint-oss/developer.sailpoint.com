---
id: v1-certification-summaries
title: CertificationSummaries
pagination_label: CertificationSummaries
sidebar_label: CertificationSummaries
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'CertificationSummaries', 'v1CertificationSummaries']
slug: /tools/sdk/typescript/certification_summaries/methods/certification-summaries
tags: ['SDK', 'Software Development Kit', 'CertificationSummaries', 'v1CertificationSummaries']
---

# CertificationSummariesV1Api
  Use this API to implement certification summary functionality. 
With this functionality in place, administrators and designated certification reviewers can review summaries of identity certification campaigns and draw conclusions about the campaigns&#39; scope, security, and effectiveness. 
Implementing certification summary functionality improves organizations&#39; ability to review their [certifications](https://documentation.sailpoint.com/saas/user-help/certs/reviewing/index.html) and helps them satisfy audit and regulatory requirements by enabling them to trace access changes and the decisions made in their review processes. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These certifications serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign. 

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Certification summaries provide information about identity certification campaigns such as the identities involved, the number of decisions made, and the access changed. 
For example, an administrator or designated certification reviewer can examine the Manager Certification campaign to get an overview of how many entitlement decisions are made in that campaign as opposed to role decisions, which identities would be affected by changes to the campaign, and how those identities&#39; access would be affected.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-identity-access-summaries-v1**](#get-identity-access-summaries-v1) | **GET** `/certifications/v1/{id}/access-summaries/{type}` | Access summaries
[**get-identity-decision-summary-v1**](#get-identity-decision-summary-v1) | **GET** `/certifications/v1/{id}/decision-summary` | Summary of certification decisions
[**get-identity-summaries-v1**](#get-identity-summaries-v1) | **GET** `/certifications/v1/{id}/identity-summaries` | Identity summaries for campaign certification
[**get-identity-summary-v1**](#get-identity-summary-v1) | **GET** `/certifications/v1/{id}/identity-summaries/{identitySummaryId}` | Summary for identity


## get-identity-access-summaries-v1
Access summaries
This API returns a list of access summaries for the specified identity campaign certification and type. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-access-summaries-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**type** | `'ROLE' | 'ACCESS_PROFILE' | 'ENTITLEMENT'` | The type of access review item to retrieve summaries for |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name** | [optional] [default to undefined]

### Return type

`Array<AccesssummaryV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationSummariesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationSummariesV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const type: string = ACCESS_PROFILE; // The type of access review item to retrieve summaries for
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = access.id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **completed**: *eq, ne*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional)
const sorters: string = access.name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **access.name** (optional)
const result = await apiInstance.getIdentityAccessSummariesV1({ id: id, type: type });
console.log(result);
```

[[Back to top]](#)

## get-identity-decision-summary-v1
Summary of certification decisions
This API returns a summary of the decisions made on an identity campaign certification. The decisions are summarized by type. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-decision-summary-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The certification ID |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identitySummary.id**: *eq, in* | [optional] [default to undefined]

### Return type

`IdentitycertdecisionsummaryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationSummariesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationSummariesV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The certification ID
const filters: string = identitySummary.id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **identitySummary.id**: *eq, in* (optional)
const result = await apiInstance.getIdentityDecisionSummaryV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-identity-summaries-v1
Identity summaries for campaign certification
This API returns a list of the identity summaries for a specific identity campaign certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-summaries-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **completed**: *eq, ne*  **name**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** | [optional] [default to undefined]

### Return type

`Array<CertificationidentitysummaryV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationSummariesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationSummariesV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **completed**: *eq, ne*  **name**: *eq, sw* (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name** (optional)
const result = await apiInstance.getIdentitySummariesV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-identity-summary-v1
Summary for identity
This API returns the summary for an identity on a specified identity campaign certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-summary-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**identitySummaryId** | `string` | The identity summary ID |  [default to undefined]

### Return type

`CertificationidentitysummaryV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationSummariesV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationSummariesV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const identitySummaryId: string = 2c91808772a504f50172a9540e501ba8; // The identity summary ID
const result = await apiInstance.getIdentitySummaryV1({ id: id, identitySummaryId: identitySummaryId });
console.log(result);
```

[[Back to top]](#)

