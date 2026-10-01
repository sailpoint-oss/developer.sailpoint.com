# AccessRequestApprovals

# AccessRequestApprovalsService
  Use this API to implement and customize access request approval functionality. 
With this functionality in place, administrators can delegate qualified users to review users&#39; requests for access or managers&#39; requests to revoke team members&#39; access to applications, entitlements, or roles.      
This enables more qualified users to review access requests and the others to spend their time on other tasks.  

In Identity Security Cloud, users can request access to applications, entitlements, and roles, and managers can request that team members&#39; access be revoked.   
For applications and entitlements, administrators can set access profiles to require approval from the access profile owner, the application owner, the source owner, the requesting user&#39;s manager, or a governance group for access to be granted or revoked.   
For roles, administrators can also set roles to allow access requests and require approval from the role owner, the requesting user&#39;s manager, or a governance group for access to be granted or revoked.   
If the administrator designates a governance group as the required approver, any governance group member can approve the requests.

When a user submits an access request, Identity Security Cloud sends the first required approver in the queue an email notification, based on the access request configuration&#39;s approval and reminder escalation configuration.

In Approvals in Identity Security Cloud, required approvers can view pending access requests under the Requested tab and approve or deny them, or the approvers can reassign the requests to different reviewers for approval.   
If the required approver approves the request and is the only reviewer required, Identity Security Cloud grants or revokes access, based on the request.   
If multiple reviewers are required, Identity Security Cloud sends the request to the next reviewer in the queue, based on the access request configuration&#39;s approval reminder and escalation configuration.   
The required approver can then view any completed access requests under the Reviewed tab.   

Refer to [Access Requests](https://documentation.sailpoint.com/saas/help/requests/index.html) for more information about access request approvals.
 
Every method returns an `Observable`. All request paths are relative to the `baseUrl` you pass to `provideSailPoint()`.

Method | HTTP request | Description
------------- | ------------- | -------------
[**approve-access-request-v1**](#approve-access-request-v1) | **POST** `/access-request-approvals/v1/{approvalId}/approve` | Approve access request approval
[**forward-access-request-v1**](#forward-access-request-v1) | **POST** `/access-request-approvals/v1/{approvalId}/forward` | Forward access request approval
[**get-access-request-approval-summary-v1**](#get-access-request-approval-summary-v1) | **GET** `/access-request-approvals/v1/approval-summary` | Get access requests approvals number
[**list-access-request-approvers-v1**](#list-access-request-approvers-v1) | **GET** `/access-request-approvals/v1/{accessRequestId}/approvers` | Access request approvers
[**list-completed-approvals-v1**](#list-completed-approvals-v1) | **GET** `/access-request-approvals/v1/completed` | Completed access request approvals list
[**list-pending-approvals-v1**](#list-pending-approvals-v1) | **GET** `/access-request-approvals/v1/pending` | Pending access request approvals list
[**reject-access-request-v1**](#reject-access-request-v1) | **POST** `/access-request-approvals/v1/{approvalId}/reject` | Reject access request approval


## approve-access-request-v1
Approve access request approval
Use this endpoint to approve an access request approval. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/approve-access-request-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ApproveAccessRequestV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**approvalId** | `string` | Approval ID. |  [default to undefined]
**commentDto** | `CommentDto` | Reviewer\&#39;s comment. | [optional]

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';
import { CommentDto } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  approveAccessRequestV1(): void {
    const approvalId: string = ; // Approval ID.
    const commentDto: CommentDto = ; // Reviewer\&#39;s comment. (optional)
    this.api.approveAccessRequestV1({ approvalId: approvalId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## forward-access-request-v1
Forward access request approval
Use this API to forward an access request approval to a new owner. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action. Only the owner of the approval and ORG_ADMIN users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/forward-access-request-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ForwardAccessRequestV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**approvalId** | `string` | Approval ID. |  [default to undefined]
**forwardApprovalDto** | `ForwardApprovalDto` | Information about the forwarded approval. | 

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';
import { ForwardApprovalDto } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  forwardAccessRequestV1(): void {
    const approvalId: string = ; // Approval ID.
    const forwardApprovalDto: ForwardApprovalDto = ; // Information about the forwarded approval.
    this.api.forwardAccessRequestV1({ approvalId: approvalId, forwardApprovalDto: forwardApprovalDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## get-access-request-approval-summary-v1
Get access requests approvals number
Use this API to return the number of pending, approved and rejected access requests approvals. See the "owner-id" query parameter for authorization information. info.

[API Spec](https://developer.sailpoint.com/docs/api/get-access-request-approval-summary-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `GetAccessRequestApprovalSummaryV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
**fromDate** | `string` | This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. | [optional] [default to undefined]

### Return type

`Observable<ApprovalSummary>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  getAccessRequestApprovalSummaryV1(): void {
    const ownerId: string = ; // The ID of the owner or approver identity of the approvals. If present, the value returns approval summary for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN user can also fetch all the approvals in the org, when owner-id is not used.    * Non ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    const fromDate: string = ; // This is the date and time the results will be shown from. It must be in a valid ISO-8601 format. (optional)
    this.api.getAccessRequestApprovalSummaryV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-access-request-approvers-v1
Access request approvers
This API endpoint returns the list of approvers for the given access request id.


[API Spec](https://developer.sailpoint.com/docs/api/list-access-request-approvers-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListAccessRequestApproversV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**accessRequestId** | `string` | Access Request ID. |  [default to undefined]
**limit** | `number` | Max number of results to return. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. | [optional] [default to undefined]
**count** | `boolean` | If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. | [optional] [default to false]

### Return type

`Observable<Array<AccessRequestApproversListResponse>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  listAccessRequestApproversV1(): void {
    const accessRequestId: string = ; // Access Request ID.
    const limit: number = ; // Max number of results to return. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. Defaults to 0 if not specified. (optional)
    const count: boolean = ; // If this is true, the *X-Total-Count* response header populates with the number of results that would be returned if limit and offset were ignored. (optional)
    this.api.listAccessRequestApproversV1({ accessRequestId: accessRequestId }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-completed-approvals-v1
Completed access request approvals list
This endpoint returns list of completed approvals. See *owner-id* query parameter below for authorization info. For access requests for machines, each approval will include 'identityType' as 'MACHINE' and 'requestedFor' with 'type: MACHINE_IDENTITY' and the machine id. Approvals without a stored identity type are returned as 'HUMAN' / 'IDENTITY'.
When a requested object has an associated form, each approval may include a `form` object with the form definition ID, instance ID, and answers (`formData`).


[API Spec](https://developer.sailpoint.com/docs/api/list-completed-approvals-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListCompletedApprovalsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<CompletedApproval>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  listCompletedApprovalsV1(): void {
    const ownerId: string = ; // If present, the value returns only completed approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **requestedFor.id**: *eq, in, ge, gt, le, lt, ne, isnull, sw*  **modified**: *gt, lt, ge, le, eq, in, ne, sw* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)
    this.api.listCompletedApprovalsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## list-pending-approvals-v1
Pending access request approvals list
This endpoint returns a list of pending approvals. See "owner-id" query parameter below for authorization info.
For access requests for machines, each approval will include `identityType` as `MACHINE` and `requestedFor` with `type: MACHINE_IDENTITY` and the machine id. Approvals without a stored identity type are returned as `HUMAN` / `IDENTITY`.
When a requested object has an associated form, each approval may include a `form` object with the form definition ID, instance ID, and answers (`formData`).


[API Spec](https://developer.sailpoint.com/docs/api/list-pending-approvals-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `ListPendingApprovalsV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ownerId** | `string` | If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. | [optional] [default to undefined]
**limit** | `number` | Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 250]
**offset** | `number` | Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to 0]
**count** | `boolean` | If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. | [optional] [default to false]
**filters** | `string` | Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in* | [optional] [default to undefined]
**sorters** | `string` | Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** | [optional] [default to undefined]

### Return type

`Observable<Array<PendingApproval>>`

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  listPendingApprovalsV1(): void {
    const ownerId: string = ; // If present, the value returns only pending approvals for the specified identity.    * ORG_ADMIN users can call this with any identity ID value.    * ORG_ADMIN users can also fetch all the approvals in the org, when owner-id is not used.    * Non-ORG_ADMIN users can only specify *me* or pass their own identity ID value. (optional)
    const limit: number = ; // Max number of results to return. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const offset: number = ; // Offset into the full result set. Usually specified with *limit* to paginate through the results. See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const count: boolean = ; // If *true* it will populate the *X-Total-Count* response header with the number of results that would be returned if *limit* and *offset* were ignored.  Since requesting a total count can have a performance impact, it is recommended not to send **count&#x3D;true** if that value will not be used.  See [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters) for more information. (optional)
    const filters: string = ; // Filter results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#filtering-results)  Filtering is supported for the following fields and operators:  **id**: *eq, in*  **requestedFor.id**: *eq, in*  **modified**: *gt, lt, ge, le, eq, in*  **accessRequestId**: *eq, in*  **created**: *gt, lt, ge, le, eq, in* (optional)
    const sorters: string = ; // Sort results using the standard syntax described in [V3 API Standard Collection Parameters](https://developer.sailpoint.com/idn/api/standard-collection-parameters#sorting-results)  Sorting is supported for the following fields: **created, modified** (optional)
    this.api.listPendingApprovalsV1({  }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

## reject-access-request-v1
Reject access request approval
Use this API to reject an access request approval. Only the owner of the approval and admin users are allowed to perform this action.

[API Spec](https://developer.sailpoint.com/docs/api/reject-access-request-v-1)

### Parameters

The service takes one object that holds every parameter. Its type is `RejectAccessRequestV1RequestParams`.


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**approvalId** | `string` | Approval ID. |  [default to undefined]
**commentDto** | `CommentDto` | Reviewer\&#39;s comment. | 

### Return type

`Observable<object>`

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

### Example

```typescript
import { Component, inject } from '@angular/core';
import { AccessRequestApprovalsService } from '@sailpoint/angular-sdk/access_request_approvals';
import { CommentDto } from '@sailpoint/angular-sdk/access_request_approvals';

@Component({ selector: 'app-example', template: '' })
export class ExampleComponent {
  private readonly api = inject(AccessRequestApprovalsService);

  rejectAccessRequestV1(): void {
    const approvalId: string = ; // Approval ID.
    const commentDto: CommentDto = ; // Reviewer\&#39;s comment.
    this.api.rejectAccessRequestV1({ approvalId: approvalId, commentDto: commentDto }).subscribe({
      next: (result) => console.log(result),
      error: (error) => console.error(error),
    });
  }
}
```

[[Back to top]](#)

