---
id: v1-certifications
title: Certifications
pagination_label: Certifications
sidebar_label: Certifications
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Certifications', 'v1Certifications']
slug: /tools/sdk/typescript/certifications/methods/certifications
tags: ['SDK', 'Software Development Kit', 'Certifications', 'v1Certifications']
---

# CertificationsV1Api
  Use this API to implement certification functionality. 
With this functionality in place, administrators and designated certification reviewers can review users&#39; access certifications and decide whether to approve access, revoke it, or reassign the review to another reviewer. 
Implementing certifications improves organizations&#39; data security by reducing inappropriate access through a distributed review process and helping them satisfy audit and regulatory requirements. 

A certification refers to Identity Security Cloud&#39;s mechanism for reviewing a user&#39;s access to entitlements (sets of permissions) and approving or removing that access. 
These serve as a way of showing that a user&#39;s access has been reviewed and approved. 
Multiple certifications by different reviewers are often required to approve a user&#39;s access. 
A set of multiple certifications is called a certification campaign.

For example, an organization may use a Manager Certification as a way of showing that a user&#39;s access has been reviewed and approved by their manager, or if the certification is part of a campaign, that the user&#39;s access has been reviewed and approved by multiple managers. 
Once this certification has been completed, Identity Security Cloud  would provision all the access the user needs, nothing more. 

Organization administrators or certification administrators can designate other Identity Security Cloud users as certification reviewers. 
Those reviewers can select the &#39;Certifications&#39; tab to view any of the certifications they either need to review or have already reviewed under the &#39;Active&#39; and &#39;Completed&#39; tabs, respectively. 

When a certification campaign is in progress, certification reviewers will see certifications listed under &#39;Active,&#39; where they can review the involved identities. 
Under the &#39;Decision&#39; column on the right, next to each access item, reviewers can select the checkmark to approve access, select the &#39;X&#39; to revoke access, or they can toggle the &#39;More Options&#39; menu to reassign the certification to another reviewer and provide a reason for reassignment in the form of a comment. 

Once a reviewer has made decisions on all the certification&#39;s involved access items, he or she must select &#39;Sign Off&#39; to complete the review process.
Doing so converts the certification into read-only status, preventing any further changes to the review decisions and deleting the work item (task) from the reviewer&#39;s list of work items. 

Once all the reviewers have signed off, the certification campaign either completes or, if any reviewers decided to revoke access for any of the involved identities, it moves into a remediation phase. In the remediation phase, identities&#39; entitlements are altered to remove any entitlements marked for revocation.
In this situation, the certification campaign completes once all the remediation requests are completed.
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get-certification-task-v1**](#get-certification-task-v1) | **GET** `/certification-tasks/v1/{id}` | Certification task by id
[**get-identity-certification-item-permissions-v1**](#get-identity-certification-item-permissions-v1) | **GET** `/certifications/v1/{certificationId}/access-review-items/{itemId}/permissions` | Permissions for entitlement certification item
[**get-identity-certification-v1**](#get-identity-certification-v1) | **GET** `/certifications/v1/{id}` | Identity certification by id
[**get-pending-certification-tasks-v1**](#get-pending-certification-tasks-v1) | **GET** `/certification-tasks/v1` | List of pending certification tasks
[**list-certification-reviewers-v1**](#list-certification-reviewers-v1) | **GET** `/certifications/v1/{id}/reviewers` | List of reviewers for certification
[**list-identity-access-review-items-v1**](#list-identity-access-review-items-v1) | **GET** `/certifications/v1/{id}/access-review-items` | List of access review items
[**list-identity-certifications-v1**](#list-identity-certifications-v1) | **GET** `/certifications/v1` | List identity campaign certifications
[**make-identity-decision-v1**](#make-identity-decision-v1) | **POST** `/certifications/v1/{id}/decide` | Decide on a certification item
[**reassign-identity-certifications-v1**](#reassign-identity-certifications-v1) | **POST** `/certifications/v1/{id}/reassign` | Reassign identities or items
[**sign-off-identity-certification-v1**](#sign-off-identity-certification-v1) | **POST** `/certifications/v1/{id}/sign-off` | Finalize identity certification decisions
[**submit-reassign-certs-async-v1**](#submit-reassign-certs-async-v1) | **POST** `/certifications/v1/{id}/reassign-async` | Reassign certifications asynchronously


## get-certification-task-v1
Certification task by id
This API returns the certification task for the specified ID. Reviewers for the specified certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-certification-task-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The task ID |  [default to undefined]

### Return type

`CertificationtaskV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = 63b32151-26c0-42f4-9299-8898dc1c9daa; // The task ID
const result = await apiInstance.getCertificationTaskV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-identity-certification-item-permissions-v1
Permissions for entitlement certification item
This API returns the permissions associated with an entitlement certification item based on the certification item's ID. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-certification-item-permissions-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**certificationId** | `string` | The certification ID |  [default to undefined]
**itemId** | `string` | The certification item ID |  [default to undefined]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: 1?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]

### Return type

`Array<PermissiondtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const certificationId: string = ef38f94347e94562b5bb8424a56397d8; // The certification ID
const itemId: string = 2c91808671bcbab40171bd945d961227; // The certification item ID
const filters: string = target eq "SYS.OBJAUTH2"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **target**: *eq, sw*  **rights**: *ca*  Supported composite operators: *and, or*  All field values (second filter operands) are case-insensitive for this API.  Only a single *and* or *or* composite filter operator may be used. It must also be used between a target filter and a rights filter, not between 2 filters for the same field.  For example, the following is valid: &#x60;?filters&#x3D;rights+ca+(%22CREATE%22)+and+target+eq+%22SYS.OBJAUTH2%22&#x60;  The following is invalid: 1?filters&#x3D;rights+ca+(%22CREATE%22)+and+rights+ca+(%SELECT%22)1 (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getIdentityCertificationItemPermissionsV1({ certificationId: certificationId, itemId: itemId });
console.log(result);
```

[[Back to top]](#)

## get-identity-certification-v1
Identity certification by id
This API returns a single identity campaign certification by its ID. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-identity-certification-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The certification id |  [default to undefined]

### Return type

`IdentitycertificationdtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The certification id
const result = await apiInstance.getIdentityCertificationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-pending-certification-tasks-v1
List of pending certification tasks
This API returns a list of pending (`QUEUED` or `IN_PROGRESS`) certification tasks. Any authenticated token can call this API, but only certification tasks you are authorized to review will be returned.

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-pending-certification-tasks-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reviewerIdentity** | `string` | The ID of reviewer identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* | [optional] [default to undefined]

### Return type

`Array<CertificationtaskV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const reviewerIdentity: string = Ada.1de82e55078344; // The ID of reviewer identity. *me* indicates the current user. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = type eq "ADMIN_REASSIGN"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **targetId**: *eq, in*  **type**: *eq, in* (optional)
const result = await apiInstance.getPendingCertificationTasksV1({  });
console.log(result);
```

[[Back to top]](#)

## list-certification-reviewers-v1
List of reviewers for certification
This API returns a list of reviewers for the certification. Reviewers for this certification can also call this API.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-certification-reviewers-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The certification ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** | [optional] [default to undefined]

### Return type

`Array<IdentityreferencewithnameandemailV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The certification ID
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = name eq "Bob"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **name**: *eq, sw*  **email**: *eq, sw* (optional)
const sorters: string = name; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, email** (optional)
const result = await apiInstance.listCertificationReviewersV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-identity-access-review-items-v1
List of access review items
This API returns a list of access review items for an identity campaign certification. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-access-review-items-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** | [optional] [default to undefined]
**entitlements** | `string` | Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. | [optional] [default to undefined]
**accessProfiles** | `string` | Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. | [optional] [default to undefined]
**roles** | `string` | Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. | [optional] [default to undefined]

### Return type

`Array<AccessreviewitemV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **type**: *eq*  **access.type**: *eq*  **completed**: *eq, ne*  **identitySummary.id**: *eq, in*  **identitySummary.name**: *eq, sw*  **access.id**: *eq, in*  **access.name**: *eq, sw*  **entitlement.sourceName**: *eq, sw*  **accessProfile.sourceName**: *eq, sw* (optional)
const sorters: string = access.name,-accessProfile.sourceName; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **identitySummary.name, access.name, access.type, entitlement.sourceName, accessProfile.sourceName** (optional)
const entitlements: string = identityEntitlement; // Filter results to view access review items that pertain to any of the specified comma-separated entitlement IDs.  An error will occur if this param is used with **access-profiles** or **roles** as only one of these query params can be used at a time. (optional)
const accessProfiles: string = accessProfile1; // Filter results to view access review items that pertain to any of the specified comma-separated access-profle IDs.  An error will occur if this param is used with **entitlements** or **roles** as only one of these query params can be used at a time. (optional)
const roles: string = userRole; // Filter results to view access review items that pertain to any of the specified comma-separated role IDs.  An error will occur if this param is used with **entitlements** or **access-profiles** as only one of these query params can be used at a time. (optional)
const result = await apiInstance.listIdentityAccessReviewItemsV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## list-identity-certifications-v1
List identity campaign certifications
Use this API to get a list of identity campaign certifications for the specified query parameters. Any authenticated token can call this API, but only certifications you are authorized to review will be returned. This API does not support requests for certifications assigned to governance groups.

[API Spec](https://developer.sailpoint.com/docs/api/v1/list-identity-certifications-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**reviewerIdentity** | `string` | Reviewer\&#39;s identity. *me* indicates the current user. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** | [optional] [default to undefined]

### Return type

`Array<IdentitycertificationdtoV1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const reviewerIdentity: string = me; // Reviewer\&#39;s identity. *me* indicates the current user. (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const count: boolean = true; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const filters: string = id eq "ef38f94347e94562b5bb8424a56397d8"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **campaign.id**: *eq, in*  **phase**: *eq*  **completed**: *eq* (optional)
const sorters: string = name,due; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **name, due, signed** (optional)
const result = await apiInstance.listIdentityCertificationsV1({  });
console.log(result);
```

[[Back to top]](#)

## make-identity-decision-v1
Decide on a certification item
The API makes a decision to approve or revoke one or more identity campaign certification items. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v1/make-identity-decision-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID of the identity campaign certification on which to make decisions |  [default to undefined]
**reviewdecisionV1** | `Array<ReviewdecisionV1>` | A non-empty array of decisions to be made. | 

### Return type

`IdentitycertificationdtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The ID of the identity campaign certification on which to make decisions
const reviewdecisionV1: Array&lt;ReviewdecisionV1&gt; = [{"id":"ef38f94347e94562b5bb8424a56396b5","decision":"APPROVE","bulk":true,"comments":"This user still needs access to this source."},{"id":"ef38f94347e94562b5bb8424a56397d8","decision":"APPROVE","bulk":true,"comments":"This user still needs access to this source too."}]; // A non-empty array of decisions to be made.
const result = await apiInstance.makeIdentityDecisionV1({ id: id, reviewdecisionV1: reviewdecisionV1 });
console.log(result);
```

[[Back to top]](#)

## reassign-identity-certifications-v1
Reassign identities or items
This API reassigns up to 50 identities or items in an identity campaign certification to another reviewer. A token with ORG_ADMIN or CERT_ADMIN authority is required to call this API. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reassign-identity-certifications-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**reviewreassignV1** | `ReviewreassignV1` |  | 

### Return type

`IdentitycertificationdtoV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const reviewreassignV1: ReviewreassignV1 = ; // 
const result = await apiInstance.reassignIdentityCertificationsV1({ id: id, reviewreassignV1: reviewreassignV1 });
console.log(result);
```

[[Back to top]](#)

## sign-off-identity-certification-v1
Finalize identity certification decisions
This API finalizes all decisions made on an identity campaign certification and initiates any remediations required. Reviewers for this certification can also call this API. This API does not support requests for certifications assigned to Governance Groups.

[API Spec](https://developer.sailpoint.com/docs/api/v1/sign-off-identity-certification-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]

### Return type

`IdentitycertificationdtoV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const result = await apiInstance.signOffIdentityCertificationV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## submit-reassign-certs-async-v1
Reassign certifications asynchronously
This API initiates a task to reassign up to 500 identities or items in an identity campaign certification to another
reviewer. The `certification-tasks` API can be used to get an updated status on the task and determine when the
reassignment is complete. 

Reviewers for this certification can also call this API.


[API Spec](https://developer.sailpoint.com/docs/api/v1/submit-reassign-certs-async-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The identity campaign certification ID |  [default to undefined]
**reviewreassignV1** | `ReviewreassignV1` |  | 

### Return type

`CertificationtaskV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { CertificationsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new CertificationsV1Api(configuration);
const id: string = ef38f94347e94562b5bb8424a56397d8; // The identity campaign certification ID
const reviewreassignV1: ReviewreassignV1 = ; // 
const result = await apiInstance.submitReassignCertsAsyncV1({ id: id, reviewreassignV1: reviewreassignV1 });
console.log(result);
```

[[Back to top]](#)

