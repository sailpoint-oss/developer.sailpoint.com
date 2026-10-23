# Approvals

# ApprovalsApi
  Use this API to implement approval functionality. With this functionality in place, you can get generic approvals and modify them. 

The main advantages this API has vs [Access Request Approvals](https://developer.sailpoint.com/docs/api/access-request-approvals) are that you can use it to get generic approvals individually or in batches and make changes to those approvals. 
 
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

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkApproveRequestDTO** | `BulkApproveRequestDTO` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BulkApproveRequestDTO } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const bulkApproveRequestDTO: BulkApproveRequestDTO = {
  "comment" : "Bulk approved by admin for monthly review",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ],
  "additionalAttributes" : {
    "source" : "automation",
    "urgency" : "high"
  }
}; // 
const result = await apiInstance.approveApprovalInBulkV1({ bulkApproveRequestDTO: bulkApproveRequestDTO });
console.log(result);
```

[[Back to top]](#)

## approve-approval-v1
Post Approvals Approve
Approves a specified approval request on behalf of the caller. The approval request must be in a state that allows it to be approved. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user.

[API Spec](https://developer.sailpoint.com/docs/api/approve-approval-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to approve. |  [default to undefined]
**approvalApproveRequest** | `ApprovalApproveRequest` |  | [optional]

### Return type

`Approval2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalApproveRequest } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to approve.
const approvalApproveRequest: ApprovalApproveRequest = {
  "overrideApproverID" : "12345678901234567890123456789012",
  "comment" : "comment",
  "additionalAttributes" : {
    "additionalProp1" : "string",
    "additionalProp2" : "string",
    "additionalProp3" : "string"
  }
}; //  (optional)
const result = await apiInstance.approveApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## cancel-approval-by-id-v1
Post Approval Cancel
Cancels a specified approval requests on behalf of the caller. 
Note: This endpoint does not support access request IDs. To cancel access request approvals, please use the following:
/access-requests/cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-by-id-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the approval request to cancel. |  [default to undefined]
**approvalCancelRequest** | `ApprovalCancelRequest` |  | [optional]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalCancelRequest } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // ID of the approval request to cancel.
const approvalCancelRequest: ApprovalCancelRequest = {
  "comment" : "Cancelled by administrator"
}; //  (optional)
const result = await apiInstance.cancelApprovalByIdV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## cancel-approval-v1
Post Bulk Cancel Approvals
Bulk cancels specified approval requests on behalf of the caller. 
Note: To bulk cancel access request approvals, please use the following:
/access-requests/bulk-cancel

[API Spec](https://developer.sailpoint.com/docs/api/cancel-approval-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkCancelRequestDTO** | `BulkCancelRequestDTO` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BulkCancelRequestDTO } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const bulkCancelRequestDTO: BulkCancelRequestDTO = {
  "comment" : "Bulk cancellation by admin",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}; // 
const result = await apiInstance.cancelApprovalV1({ bulkCancelRequestDTO: bulkCancelRequestDTO });
console.log(result);
```

[[Back to top]](#)

## delete-approval-config-request-v1
Delete Approval Configuration
Deletes an approval configuration.
Configurations at the APPROVAL_REQUEST scope cannot be deleted.

[API Spec](https://developer.sailpoint.com/docs/api/delete-approval-config-request-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID defined by the scope field, where id/scope is the following:  * &#x60;\{accountID\}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;\{roleID\}&#x60;/&#x60;ROLE&#x60; * &#x60;\{entitlementID\}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;\{accessProfileID\}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;\{domainObjectID\}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;\{tenantID\}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;\{roleID\}&#x60; with the actual resource ID.  |  [default to undefined]
**scope** | `'DOMAIN_OBJECT' | 'ACCOUNT' | 'ROLE' | 'ACCESS_PROFILE' | 'ENTITLEMENT' | 'APPROVAL_TYPE' | 'TENANT'` | The scope that defines the type of id, where id/scope is the following:  * &#x60;\{accountID\}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;\{roleID\}&#x60;/&#x60;ROLE&#x60; * &#x60;\{entitlementID\}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;\{accessProfileID\}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;\{domainObjectID\}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;\{tenantID\}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;\{roleID\}&#x60; with the actual resource ID.  |  [default to undefined]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = ACCESS_REQUEST_APPROVAL; // The ID defined by the scope field, where id/scope is the following:  * &#x60;{accountID}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;{roleID}&#x60;/&#x60;ROLE&#x60; * &#x60;{entitlementID}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;{accessProfileID}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;{domainObjectID}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;{tenantID}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;{roleID}&#x60; with the actual resource ID. 
const scope: string = APPROVAL_TYPE; // The scope that defines the type of id, where id/scope is the following:  * &#x60;{accountID}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;{roleID}&#x60;/&#x60;ROLE&#x60; * &#x60;{entitlementID}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;{accessProfileID}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;{domainObjectID}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;{tenantID}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;{roleID}&#x60; with the actual resource ID. 
const result = await apiInstance.deleteApprovalConfigRequestV1({ id: id, scope: scope });
console.log(result);
```

[[Back to top]](#)

## get-approval-v1
Get an approval
Fetches an approval request by it's approval ID. For lookups by access request ID please use the following:
/generic-approvals?filters=referenceType+eq+"accessRequestId"+and+referenceId+eq+"12345678901234567890123456789012"

[API Spec](https://developer.sailpoint.com/docs/api/get-approval-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | ID of the approval that is to be returned |  [default to undefined]

### Return type

`Approval2`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // ID of the approval that is to be returned
const result = await apiInstance.getApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## get-approvals-config-v1
Get Approval Config
Retrieves a singular approval configuration that matches the given ID

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID defined by the scope field, where id/scope is the following:  * &#x60;\{accountID\}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;\{roleID\}&#x60;/&#x60;ROLE&#x60; * &#x60;\{entitlementID\}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;\{accessProfileID\}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;\{domainObjectID\}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;\{tenantID\}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;\{roleID\}&#x60; with the actual resource ID.  |  [default to undefined]

### Return type

`ApprovalConfig`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = ACCESS_REQUEST_APPROVAL; // The ID defined by the scope field, where id/scope is the following:  * &#x60;{accountID}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;{roleID}&#x60;/&#x60;ROLE&#x60; * &#x60;{entitlementID}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;{accessProfileID}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;{domainObjectID}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;{tenantID}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;{roleID}&#x60; with the actual resource ID. 
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

[API Spec](https://developer.sailpoint.com/docs/api/get-approvals-v-1)

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

`Array<Approval2>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
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

[API Spec](https://developer.sailpoint.com/docs/api/move-approval-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkReassignRequestDTO** | `BulkReassignRequestDTO` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BulkReassignRequestDTO } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const bulkReassignRequestDTO: BulkReassignRequestDTO = {
  "reassignTo" : "32454251-6ce2-5d8f-df93-5ce19e295238",
  "comment" : "Bulk reassignment by admin",
  "reassignFrom" : "12353251-6be2-5f8f-df93-5ce19b6e5837",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}; // 
const result = await apiInstance.moveApprovalV1({ bulkReassignRequestDTO: bulkReassignRequestDTO });
console.log(result);
```

[[Back to top]](#)

## put-approvals-config-v1
Put Approval Config
Upserts a singular approval configuration that matches the given configID and configScope. 
For example to update the approval configurations for all Access Request Approvals please use: '/generic-approvals/config/ACCESS_REQUEST_APPROVAL/APPROVAL_TYPE'

[API Spec](https://developer.sailpoint.com/docs/api/put-approvals-config-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | The ID defined by the scope field, where id/scope is the following:  * &#x60;\{accountID\}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;\{roleID\}&#x60;/&#x60;ROLE&#x60; * &#x60;\{entitlementID\}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;\{accessProfileID\}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;\{domainObjectID\}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;\{tenantID\}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;\{roleID\}&#x60; with the actual resource ID.  |  [default to undefined]
**scope** | `'DOMAIN_OBJECT' | 'ACCOUNT' | 'ROLE' | 'ACCESS_PROFILE' | 'ENTITLEMENT' | 'APPROVAL_TYPE' | 'TENANT'` | The scope that defines the type of id, where id/scope is the following:  * &#x60;\{accountID\}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;\{roleID\}&#x60;/&#x60;ROLE&#x60; * &#x60;\{entitlementID\}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;\{accessProfileID\}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;\{domainObjectID\}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;\{tenantID\}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;\{roleID\}&#x60; with the actual resource ID.  |  [default to undefined]
**approvalConfig** | `ApprovalConfig` |  | 

### Return type

`ApprovalConfig`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalConfig } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = ACCESS_REQUEST_APPROVAL; // The ID defined by the scope field, where id/scope is the following:  * &#x60;{accountID}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;{roleID}&#x60;/&#x60;ROLE&#x60; * &#x60;{entitlementID}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;{accessProfileID}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;{domainObjectID}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;{tenantID}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;{roleID}&#x60; with the actual resource ID. 
const scope: string = APPROVAL_TYPE; // The scope that defines the type of id, where id/scope is the following:  * &#x60;{accountID}&#x60;/&#x60;ACCOUNT&#x60; * &#x60;{roleID}&#x60;/&#x60;ROLE&#x60; * &#x60;{entitlementID}&#x60;/&#x60;ENTITLEMENT&#x60; * &#x60;{accessProfileID}&#x60;/&#x60;ACCESS_PROFILE&#x60; * &#x60;{domainObjectID}&#x60;/&#x60;DOMAIN_OBJECT&#x60; * &#x60;ENTITLEMENT_DESCRIPTIONS&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCESS_REQUEST_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_CREATE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;MACHINE_ACCOUNT_DELETE_APPROVAL_REQUEST&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_ACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;AGENT_DEACTIVATE_APPROVAL&#x60;/&#x60;APPROVAL_TYPE&#x60; * &#x60;{tenantID}&#x60;/&#x60;TENANT&#x60;  Replace placeholders such as &#x60;{roleID}&#x60; with the actual resource ID. 
const approvalConfig: ApprovalConfig = {
  "timeoutConfig" : {
    "daysUntilTimeout" : 2,
    "enabled" : true,
    "timeoutResult" : "EXPIRED"
  },
  "requiresComment" : "ALL",
  "cronTimezone" : {
    "offset" : "",
    "location" : "America/New_York"
  },
  "fallbackApprover" : {
    "identityID" : "fdfda352157d4cc79bb749953131b457",
    "type" : "MANAGER_OF"
  },
  "reminderConfig" : {
    "reminderCronSchedule" : "@every 24h",
    "daysUntilFirstReminder" : 0,
    "maxReminders" : 5,
    "enabled" : false
  },
  "circumventApprovalProcess" : false,
  "escalationConfig" : {
    "escalationCronSchedule" : "@every 72h",
    "escalationChain" : [ {
      "identityType" : "IDENTITY",
      "identityId" : "fdfda352157d4cc79bb749953131b457"
    }, {
      "identityType" : "IDENTITY",
      "identityId" : "fdfda352157d4cc79bb749953131b457"
    } ],
    "daysUntilFirstEscalation" : 2,
    "enabled" : true
  },
  "serialChain" : [ {
    "identityType" : "IDENTITY",
    "identityId" : "2c9180858090ea8801809a0465e829da"
  }, {
    "identityType" : "IDENTITY",
    "identityId" : "2c9180858090ea8801809a0465e829da"
  } ],
  "machineIdentityManagerAssignment" : "MACHINE_IDENTITY_OWNER",
  "autoApprove" : "OFF"
}; // 
const result = await apiInstance.putApprovalsConfigV1({ id: id, scope: scope, approvalConfig: approvalConfig });
console.log(result);
```

[[Back to top]](#)

## reject-approval-in-bulk-v1
Post Bulk Reject Approvals
Bulk reject specified approval requests on behalf of the caller

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-in-bulk-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**bulkRejectRequestDTO** | `BulkRejectRequestDTO` |  | 

### Return type

`object`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { BulkRejectRequestDTO } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const bulkRejectRequestDTO: BulkRejectRequestDTO = {
  "comment" : "Bulk reject by admin",
  "approvalIds" : [ "38453251-6be2-5f8f-df93-5ce19e295837", "38453251-6be2-5f8f-df93-5ce19e295838" ]
}; // 
const result = await apiInstance.rejectApprovalInBulkV1({ bulkRejectRequestDTO: bulkRejectRequestDTO });
console.log(result);
```

[[Back to top]](#)

## reject-approval-v1
Post Approvals Reject
Rejects a specified approval request on behalf of the caller. This endpoint does not support access request IDs.
If called by an admin and the admin is not listed as an approver, the approval request will be reassigned from a random approver to the admin user and approved.

[API Spec](https://developer.sailpoint.com/docs/api/reject-approval-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to reject. |  [default to undefined]
**approvalRejectRequest** | `ApprovalRejectRequest` |  | [optional]

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalRejectRequest } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to reject.
const approvalRejectRequest: ApprovalRejectRequest = {
  "overrideApproverID" : "12345678901234567890123456789012",
  "comment" : "string"
}; //  (optional)
const result = await apiInstance.rejectApprovalV1({ id: id });
console.log(result);
```

[[Back to top]](#)

## update-approvals-attributes-v1
Post Approvals Attributes
Allows for the edit/addition/removal of the key/value pair additional attributes map for an existing approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-attributes-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to change the attributes of. |  [default to undefined]
**approvalAttributesRequest** | `ApprovalAttributesRequest` |  | 

### Return type

`Approval2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalAttributesRequest } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to change the attributes of.
const approvalAttributesRequest: ApprovalAttributesRequest = {
  "removeAttributeKeys" : [ "string" ],
  "comment" : "comment",
  "additionalAttributes" : {
    "additionalProp1" : "string",
    "additionalProp2" : "string",
    "additionalProp3" : "string"
  }
}; // 
const result = await apiInstance.updateApprovalsAttributesV1({ id: id, approvalAttributesRequest: approvalAttributesRequest });
console.log(result);
```

[[Back to top]](#)

## update-approvals-comments-v1
Post Approvals Comments
Adds comments to a specified approval request. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-comments-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to add a comment to. |  [default to undefined]
**approvalCommentsRequest** | `ApprovalCommentsRequest` |  | 

### Return type

`Approval2`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalCommentsRequest } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to add a comment to.
const approvalCommentsRequest: ApprovalCommentsRequest = {
  "comment" : "Approval comment."
}; // 
const result = await apiInstance.updateApprovalsCommentsV1({ id: id, approvalCommentsRequest: approvalCommentsRequest });
console.log(result);
```

[[Back to top]](#)

## update-approvals-reassign-v1
Post Approvals Reassign
Reassigns an approval request to another identity resulting in that identity being added as an authorized approver. This endpoint does not support access request IDs.

[API Spec](https://developer.sailpoint.com/docs/api/update-approvals-reassign-v-1)

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**id** | `string` | Approval ID that correlates to an existing approval request that a user wants to reassign. |  [default to undefined]
**approvalReassignRequest** | `ApprovalReassignRequest` |  | 

### Return type

(empty response body)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { ApprovalsApi } from '@sailpoint/api-client';
import { Configuration } from '@sailpoint/api-client';
import { ApprovalReassignRequest } from '@sailpoint/api-client/dist/approvals/api';

const configuration = new Configuration();
const apiInstance = new ApprovalsApi(configuration);
const id: string = 38453251-6be2-5f8f-df93-5ce19e295837; // Approval ID that correlates to an existing approval request that a user wants to reassign.
const approvalReassignRequest: ApprovalReassignRequest = {
  "reassignTo" : "152354832eb6f8f539fd738592e19ec5",
  "comment" : "comment",
  "reassignFrom" : "384532516be25f8fdf935ce19e295837"
}; // 
const result = await apiInstance.updateApprovalsReassignV1({ id: id, approvalReassignRequest: approvalReassignRequest });
console.log(result);
```

[[Back to top]](#)

