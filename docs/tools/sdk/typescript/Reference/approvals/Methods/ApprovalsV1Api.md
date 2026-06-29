---
id: v1-approvals
title: Approvals
pagination_label: Approvals
sidebar_label: Approvals
sidebar_class_name: typescriptsdk
keywords: ['typescript', 'TypeScript', 'sdk', 'Approvals', 'v1Approvals']
slug: /tools/sdk/typescript/approvals/methods/approvals
tags: ['SDK', 'Software Development Kit', 'Approvals', 'v1Approvals']
---

# ApprovalsV1Api
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/v2025/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
All URIs are relative to *https://sailpoint.api.identitynow.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-approval-in-bulk-v1**](#approve-approval-in-bulk-v1) | **POST** `/generic-approvals/v1/bulk-approve` | Post Bulk Approve Approvals
[**approve-approval-v1**](#approve-approval-v1) | **POST** `/generic-approvals/v1/{id}/approve` | Post Approvals Approve
[**cancel-approval-by-id-v1**](#cancel-approval-by-id-v1) | **POST** `/generic-approvals/v1/{id}/cancel` | Post Approval Cancel
[**cancel-approval-v1**](#cancel-approval-v1) | **POST** `/generic-approvals/v1/bulk-cancel` | Post Bulk Cancel Approvals
[**delete-approval-config-request-v1**](#delete-approval-config-request-v1) | **DELETE** `/generic-approvals/v1/config/{id}/{scope}` | Delete Approval Configuration
[**get-approval-v1**](#get-approval-v1) | **GET** `/generic-approvals/v1/{id}` | Get an approval
[**get-approvals-config-v1**](#get-approvals-config-v1) | **GET** `/generic-approvals/v1/config/{id}` | Get Approval Config
[**get-approvals-v1**](#get-approvals-v1) | **GET** `/generic-approvals/v1` | Get approvals
[**move-approval-v1**](#move-approval-v1) | **POST** `/generic-approvals/v1/bulk-reassign` | Post Bulk Reassign Approvals
[**put-approvals-config-v1**](#put-approvals-config-v1) | **PUT** `/generic-approvals/v1/config/{id}/{scope}` | Put Approval Config
[**reject-approval-in-bulk-v1**](#reject-approval-in-bulk-v1) | **POST** `/generic-approvals/v1/bulk-reject` | Post Bulk Reject Approvals
[**reject-approval-v1**](#reject-approval-v1) | **POST** `/generic-approvals/v1/{id}/reject` | Post Approvals Reject
[**update-approvals-attributes-v1**](#update-approvals-attributes-v1) | **POST** `/generic-approvals/v1/{id}/attributes` | Post Approvals Attributes
[**update-approvals-comments-v1**](#update-approvals-comments-v1) | **POST** `/generic-approvals/v1/{id}/comments` | Post Approvals Comments
[**update-approvals-reassign-v1**](#update-approvals-reassign-v1) | **POST** `/generic-approvals/v1/{id}/reassign` | Post Approvals Reassign


## approve-approval-in-bulk-v1
Post Bulk Approve Approvals
Bulk Approves specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkapproverequestdtoV1** | `BulkapproverequestdtoV1` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const bulkapproverequestdtoV1: BulkapproverequestdtoV1 = ; // 
const result = await apiInstance.approveApprovalInBulkV1({ bulkapproverequestdtoV1: bulkapproverequestdtoV1 });
console.log(result);
```

[[Back to top]](#)

## approve-approval-v1
Post Approvals Approve
Approves a specified approval request on behalf of the caller. The approval request must be in a state that allows it to be approved. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/v1/approve-approval-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to approve. |  [default to undefined]
**approvalapproverequestV1** | `ApprovalapproverequestV1` |  | [optional]

### Return type

`Approval2V1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to approve.
const approvalapproverequestV1: ApprovalapproverequestV1 = ; //  (optional)
const result = await apiInstance.approveApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## cancel-approval-by-id-v1
Post Approval Cancel
Cancels a specified approval requests on behalf of the caller. 
Note: This endpoint does not support access request IDs. To cancel access request approvals, please use the following:
/access-requests/cancel

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-approval-by-id-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the approval request to cancel. |  [default to undefined]
**approvalcancelrequestV1** | `ApprovalcancelrequestV1` |  | [optional]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // ID of the approval request to cancel.
const approvalcancelrequestV1: ApprovalcancelrequestV1 = ; //  (optional)
const result = await apiInstance.cancelApprovalByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## cancel-approval-v1
Post Bulk Cancel Approvals
Bulk cancels specified approval requests on behalf of the caller. 
Note: To bulk cancel access request approvals, please use the following:
/access-requests/bulk-cancel

[API Spec](https://developer.sailpoint.com/docs/api/v1/cancel-approval-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkcancelrequestdtoV1** | `BulkcancelrequestdtoV1` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const bulkcancelrequestdtoV1: BulkcancelrequestdtoV1 = ; // 
const result = await apiInstance.cancelApprovalV1({ bulkcancelrequestdtoV1: bulkcancelrequestdtoV1 });
console.log(result);
```

[[Back to top]](#)

## delete-approval-config-request-v1
Delete Approval Configuration
Deletes an approval configuration.
Configurations at the APPROVAL_REQUEST scope cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/v1/delete-approval-config-request-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT |  [default to undefined]
**scope** | `'DOMAIN_OBJECT' | 'ROLE' | 'ACCESS_PROFILE' | 'ENTITLEMENT' | 'APPROVAL_TYPE' | 'TENANT'` | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = ACCESS_REQUEST_APPROVAL; // The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
const scope: string = APPROVAL_TYPE; // The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
const result = await apiInstance.deleteApprovalConfigRequestV1({ id: id, scope: scope });
console.log(result);
```

[[Back to top]](#)

## get-approval-v1
Get an approval
Fetches an approval request by it's approval ID. For lookups by access request ID please use the following:
/generic-approvals?filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-approval-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the approval that is to be returned |  [default to undefined]

### Return type

`Approval2V1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // ID of the approval that is to be returned
const result = await apiInstance.getApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-approvals-config-v1
Get Approval Config
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-approvals-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \&quot;ENTITLEMENT_DESCRIPTIONS\&quot;, \&quot;ACCESS_REQUEST_APPROVAL\&quot;, \&quot;ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, (tenantID)] |  [default to undefined]

### Return type

`ApprovalconfigV1`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 1.2345678901234567E+31; // The id of the object the config applies to, for example one of the following: [(approvalID), (roleID), (entitlementID), (accessProfileID), \&quot;ENTITLEMENT_DESCRIPTIONS\&quot;, \&quot;ACCESS_REQUEST_APPROVAL\&quot;, \&quot;ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST\&quot;, \&quot;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST\&quot;, (tenantID)]
const result = await apiInstance.getApprovalsConfigV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-approvals-v1
Get approvals
Gets a list of approvals.

One of the following query parameters should be present: 'mine', 'approverId', 'requesterId', 'requesteeId'.

The absence of all query parameters for non admins will default to mine=true (which is the equivalent of 'approverId=[your_identity_id]') 
while admins will default to mine=false (which will show all approvals in the org).

For lookups by access request ID please use the following:

'/generic-approvals?mine=false&filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"'

[API Spec](https://developer.sailpoint.com/docs/api/v1/get-approvals-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**mine** | `boolean` | Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of \&#39;approverId&#x3D;[your_identity_id]\&#39;). | [optional] [default to false]
**requesterId** | `string` | Returns the list of approvals for a given requester ID. Must match the calling user\&#39;s identity ID unless they are an admin. | [optional] [default to undefined]
**requesteeId** | `string` | Returns the list of approvals for a given requesteeId ID. Must match the calling user\&#39;s identity ID unless they are an admin. | [optional] [default to undefined]
**approverId** | `string` | Returns the list of approvals for a given approverId ID. Must match the calling user\&#39;s identity ID unless they are an admin. | [optional] [default to undefined]
**count** | `boolean` | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. | [optional] [default to false]
**countOnly** | `boolean` | Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. | [optional] [default to false]
**includeComments** | `boolean` | If set to true in the query, the approval requests returned will include comments. | [optional] [default to false]
**includeApprovers** | `boolean` | If set to true in the query, the approval requests returned will include approvers. | [optional] [default to false]
**includeReassignmentHistory** | `boolean` | If set to true in the query, the approval requests returned will include reassignment history. | [optional] [default to false]
**includeBatchInfo** | `boolean` | If set to true in the query, the approval requests returned will include batch information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]

### Return type

`Array<Approval2V1>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const mine: boolean = true; // Determines whether to return the list of approvals assigned to the current caller or all approvals in the org. Defaults to false if admin, true otherwise (which is the equivalent of \&#39;approverId&#x3D;[your_identity_id]\&#39;). (optional)
const requesterId: string = 17e633e7d57e481569df76323169deb6a; // Returns the list of approvals for a given requester ID. Must match the calling user\&#39;s identity ID unless they are an admin. (optional)
const requesteeId: string = 27e6334g757e481569df76323169db9sc; // Returns the list of approvals for a given requesteeId ID. Must match the calling user\&#39;s identity ID unless they are an admin. (optional)
const approverId: string = 37e6334g557e481569df7g2d3169db9sb; // Returns the list of approvals for a given approverId ID. Must match the calling user\&#39;s identity ID unless they are an admin. (optional)
const count: boolean = true; // Adds X-Total-Count to the header to give the amount of total approvals returned from the query. (optional)
const countOnly: boolean = true; // Adds X-Total-Count to the header to give the amount of total approvals returned from the query. Only returns the count and no approval objects. (optional)
const includeComments: boolean = true; // If set to true in the query, the approval requests returned will include comments. (optional)
const includeApprovers: boolean = true; // If set to true in the query, the approval requests returned will include approvers. (optional)
const includeReassignmentHistory: boolean = true; // If set to true in the query, the approval requests returned will include reassignment history. (optional)
const includeBatchInfo: boolean = true; // If set to true in the query, the approval requests returned will include batch information. (optional)
const filters: string = filters=status eq "PENDING" and type eq "ACCESS_REQUEST_APPROVAL"; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **status**: *eq, ne, in, co, sw*  **name**: *eq, ne, in, co, sw*  **priority**: *eq, ne, in, co, sw*  **type**: *eq, ne, in, co, sw*  **medium**: *eq, ne, in, co, sw*  **description**: *eq, ne, in, co, sw*  **batchId**: *eq, ne, in, co, sw*  **createdDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **dueDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **completedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **search**: *eq, ne, in, co, sw*  **referenceId**: *eq, ne, in, co, sw*  **referenceType**: *eq, ne, in, co, sw*  **referenceName**: *eq, ne, in, co, sw*  **requestedTargetId**: *eq, ne, in, co, sw*  **requestedTargetType**: *eq, ne, in, co, sw*  **requestedTargetName**: *eq, ne, in, co, sw*  **requestedTargetRequestType**: *eq, ne, in, co, sw*  **modifiedDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **decisionDate**: *eq, ne, in, co, sw, gt, ge, lt, le*  **approvalId**: *eq, ne, in, co, sw*  **requesterId**: *eq, ne, in, co, sw*  **requesteeId**: *eq, ne, in, co, sw*  **approverId**: *eq, ne, in, co, sw* (optional)
const limit: number = 250; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const offset: number = 0; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
const result = await apiInstance.getApprovalsV1({  });
console.log(result);
```

[[Back to top]](#)

## move-approval-v1
Post Bulk Reassign Approvals
Bulk reassigns specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v1/move-approval-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkreassignrequestdtoV1** | `BulkreassignrequestdtoV1` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const bulkreassignrequestdtoV1: BulkreassignrequestdtoV1 = ; // 
const result = await apiInstance.moveApprovalV1({ bulkreassignrequestdtoV1: bulkreassignrequestdtoV1 });
console.log(result);
```

[[Back to top]](#)

## put-approvals-config-v1
Put Approval Config
Upserts a singular approval configuration that matches the given configID and configScope. 
For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'

[API Spec](https://developer.sailpoint.com/docs/api/v1/put-approvals-config-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT |  [default to undefined]
**scope** | `'DOMAIN_OBJECT' | 'ROLE' | 'ACCESS_PROFILE' | 'ENTITLEMENT' | 'APPROVAL_TYPE' | 'TENANT'` | The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT |  [default to undefined]
**approvalconfigV1** | `ApprovalconfigV1` |  | 

### Return type

`ApprovalconfigV1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = ACCESS_REQUEST_APPROVAL; // The ID defined by the scope field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
const scope: string = APPROVAL_TYPE; // The scope of the field, where [[id]]:[[scope]] is the following [[roleID]]:ROLE [[entitlementID]]:ENTITLEMENT [[accessProfileID]]:ACCESS_PROFILE ENTITLEMENT_DESCRIPTIONS:APPROVAL_TYPE ACCESS_REQUEST_APPROVAL:APPROVAL_TYPE ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST:APPROVAL_TYPE MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST:APPROVAL_TYPE [[tenantID]]:TENANT [[domainObjectID]]:DOMAIN_OBJECT
const approvalconfigV1: ApprovalconfigV1 = ; // 
const result = await apiInstance.putApprovalsConfigV1({ id: id, scope: scope, approvalconfigV1: approvalconfigV1 });
console.log(result);
```

[[Back to top]](#)

## reject-approval-in-bulk-v1
Post Bulk Reject Approvals
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-in-bulk-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkrejectrequestdtoV1** | `BulkrejectrequestdtoV1` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const bulkrejectrequestdtoV1: BulkrejectrequestdtoV1 = ; // 
const result = await apiInstance.rejectApprovalInBulkV1({ bulkrejectrequestdtoV1: bulkrejectrequestdtoV1 });
console.log(result);
```

[[Back to top]](#)

## reject-approval-v1
Post Approvals Reject
Rejects a specified approval request on behalf of the caller. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user and approved.

[API Spec](https://developer.sailpoint.com/docs/api/v1/reject-approval-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to reject. |  [default to undefined]
**approvalrejectrequestV1** | `ApprovalrejectrequestV1` |  | [optional]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to reject.
const approvalrejectrequestV1: ApprovalrejectrequestV1 = ; //  (optional)
const result = await apiInstance.rejectApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## update-approvals-attributes-v1
Post Approvals Attributes
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-approvals-attributes-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. |  [default to undefined]
**approvalattributesrequestV1** | `ApprovalattributesrequestV1` |  | 

### Return type

`Approval2V1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
const approvalattributesrequestV1: ApprovalattributesrequestV1 = ; // 
const result = await apiInstance.updateApprovalsAttributesV1({ id: id, approvalattributesrequestV1: approvalattributesrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-approvals-comments-v1
Post Approvals Comments
Adds comments to a specified approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-approvals-comments-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to add a comment to. |  [default to undefined]
**approvalcommentsrequestV1** | `ApprovalcommentsrequestV1` |  | 

### Return type

`Approval2V1`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to add a comment to.
const approvalcommentsrequestV1: ApprovalcommentsrequestV1 = ; // 
const result = await apiInstance.updateApprovalsCommentsV1({ id: id, approvalcommentsrequestV1: approvalcommentsrequestV1 });
console.log(result);
```

[[Back to top]](#)

## update-approvals-reassign-v1
Post Approvals Reassign
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/v1/update-approvals-reassign-v1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to reassign. |  [default to undefined]
**approvalreassignrequestV1** | `ApprovalreassignrequestV1` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsV1Api } from 'sailpoint-api-client';
import { Configuration } from 'sailpoint-api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsV1Api(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to reassign.
const approvalreassignrequestV1: ApprovalreassignrequestV1 = ; // 
const result = await apiInstance.updateApprovalsReassignV1({ id: id, approvalreassignrequestV1: approvalreassignrequestV1 });
console.log(result);
```

[[Back to top]](#)

