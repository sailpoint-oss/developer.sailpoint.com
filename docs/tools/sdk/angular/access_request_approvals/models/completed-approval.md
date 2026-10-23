# CompletedApproval

# CompletedApproval

Import this model from the entry point of its package:

```typescript
import { CompletedApproval } from '@sailpoint/angular-sdk/access_request_approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The approval id. | [default to undefined]
**name** | **(optional)** `string` | The name of the approval. | [default to undefined]
**created** | **(optional)** `string` | When the approval was created. | [default to undefined]
**modified** | **(optional)** `string` | When the approval was modified last time. | [default to undefined]
**requestCreated** | **(optional)** `string` | When the access-request was created. | [default to undefined]
**requestType** | **(optional)** `AccessRequestType` |  | [default to undefined]
**identityType** | **(optional)** `string` | Type of identity the access was requested for. Requests without a stored identity type are returned as `HUMAN`.  | [default to undefined]
**requester** | **(optional)** `AccessItemRequester` |  | [default to undefined]
**requestedFor** | **(optional)** `CompletedApprovalRequestedFor` |  | [default to undefined]
**reviewedBy** | **(optional)** `AccessItemReviewedBy` |  | [default to undefined]
**owner** | **(optional)** `OwnerDto` |  | [default to undefined]
**requestedObject** | **(optional)** `RequestableObjectReference` |  | [default to undefined]
**requesterComment** | **(optional)** `CompletedApprovalRequesterComment` |  | [default to undefined]
**reviewerComment** | **(optional)** `CompletedApprovalReviewerComment` |  | [default to undefined]
**previousReviewersComments** | **(optional)** `Array<CommentDto>` | The history of the previous reviewers comments. | [default to undefined]
**forwardHistory** | **(optional)** `Array<ApprovalForwardHistory>` | The history of approval forward action. | [default to undefined]
**commentRequiredWhenRejected** | **(optional)** `boolean` | When true the rejector has to provide comments when rejecting | [default to false]
**state** | **(optional)** `CompletedApprovalState` |  | [default to undefined]
**removeDate** | **(optional)** `string` | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [default to undefined]
**removeDateUpdateRequested** | **(optional)** `boolean` | If true, then the request was to change the remove date or sunset date. | [default to false]
**currentRemoveDate** | **(optional)** `string` | The remove date or sunset date that was assigned at the time of the request. | [default to undefined]
**startDate** | **(optional)** `string` | The date the role or access profile or entitlement is/will assigned to the specified identity. | [default to undefined]
**startUpdateRequested** | **(optional)** `boolean` | If true, then the request is to change the start date or sunrise date. | [default to false]
**currentStartDate** | **(optional)** `string` | The start date or sunrise date that was assigned at the time of the request. | [default to undefined]
**sodViolationContext** | **(optional)** `SodViolationContextCheckCompleted` |  | [default to undefined]
**preApprovalTriggerResult** | **(optional)** `CompletedApprovalPreApprovalTriggerResult` |  | [default to undefined]
**clientMetadata** | **(optional)**  | Arbitrary key-value pairs provided during the request. | [default to undefined]
**requestedAccounts** | **(optional)** `Array<RequestedAccountRef>` | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [default to undefined]
**privilegeLevel** | **(optional)** `string` | The privilege level of the requested access item, if applicable. | [default to undefined]
**maxPermittedAccessDuration** | **(optional)** `PendingApprovalMaxPermittedAccessDuration` |  | [default to undefined]
**jitDetails** | **(optional)** `Array<EntitlementStateSnapshotJitDetail>` | JIT (Just-In-Time) details for the requested access item, if applicable. | [default to undefined]
**form** | **(optional)** `PendingApprovalForm` |  | [default to undefined]

