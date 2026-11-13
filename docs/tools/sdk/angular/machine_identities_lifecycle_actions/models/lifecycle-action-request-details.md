# LifecycleActionRequestDetails

# LifecycleActionRequestDetails

Import this model from the entry point of its package:

```typescript
import { LifecycleActionRequestDetails } from '@sailpoint/angular-sdk/machine_identities_lifecycle_actions';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **(optional)** `Lifecyclestatus` |  | [default to undefined]
**action** | **(optional)** `Lifecycleaction` |  | [default to undefined]
**approver** | **(optional)** `LifecycleApproverReference` |  | [default to undefined]
**approvedAt** | **(optional)** `string` | Time when the request was approved (ISO-8601). | [default to undefined]
**canceller** | **(optional)** `LifecycleRequesterReference` |  | [default to undefined]
**canceledAt** | **(optional)** `string` | Time when the request was canceled (ISO-8601). | [default to undefined]
**cancelComment** | **(optional)** `string` | Comment provided when the request was canceled. | [default to undefined]
**comments** | **(optional)** `Array<LifecycleComment>` | Comments on the lifecycle request, in the order they were added. | [default to undefined]
**failurePhase** | **(optional)** `string` | Stage where the request failed, when applicable. | [default to undefined]
**failureReason** | **(optional)** `string` | Failure reason for the lifecycle request, when applicable. | [default to undefined]
**resource** | **(optional)** `LifecycleResourceSummary` |  | [default to undefined]
**resourceOwners** | **(optional)** `Array<LifecycleOwnerReference>` | Owners of the machine identity at the time the request was submitted. | [default to undefined]
**sourceOwner** | **(optional)** `LifecycleOwnerReference` |  | [default to undefined]
**requester** | **(optional)** `LifecycleRequesterReference` |  | [default to undefined]
**approvalRequestId** | **(optional)** `string` | ID of the approval request created for this lifecycle request. | [default to undefined]
**approvalSettingsId** | **(optional)** `string` | ID of the approval settings used for the request. | [default to undefined]
**provisioning** | **(optional)** `LifecycleProvisioning` |  | [default to undefined]

