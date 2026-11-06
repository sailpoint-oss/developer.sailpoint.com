# Approval2

# Approval2

Import this model from the entry point of its package:

```typescript
import { Approval2 } from '@sailpoint/angular-sdk/approvals';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **(optional)** `string` | The Approval ID | [default to undefined]
**tenantId** | **(optional)** `string` | The Tenant ID of the Approval | [default to undefined]
**type** | **(optional)** `string` | The type of the approval, such as ENTITLEMENT_DESCRIPTIONS, CUSTOM_ACCESS_REQUEST_APPROVAL, GENERIC_APPROVAL | [default to undefined]
**approvers** | **(optional)** `Array<ApprovalIdentity>` | Object representation of an approver of an approval | [default to undefined]
**createdDate** | **(optional)** `string` | Date the approval was created | [default to undefined]
**dueDate** | **(optional)** `string` | Date the approval is due | [default to undefined]
**escalationStep** | **(optional)** `string` | Step in the escalation process. If set to 0, the approval is not escalated. If set to 1, the approval is escalated to the first approver in the escalation chain. | [default to undefined]
**serialStep** | **(optional)** `number` | The serial step of the approval in the approval chain. For example, serialStep 1 is the first approval to action in an approval request chain. Parallel approvals are set to 0. | [default to undefined]
**isEscalated** | **(optional)** `boolean` | Whether or not the approval has been escalated. Will reset to false when the approval is actioned on. | [default to false]
**name** | **(optional)** `Array<ApprovalName>` | The name of the approval for a given locale | [default to undefined]
**batchRequest** | **(optional)** `ApprovalBatch` |  | [default to undefined]
**approvalConfig** | **(optional)** `ApprovalConfig` |  | [default to undefined]
**description** | **(optional)** `Array<ApprovalDescription>` | The description of the approval for a given locale | [default to undefined]
**medium** | **(optional)** `string` | Signifies what medium to use when sending notifications (currently only email is utilized) | [default to undefined]
**priority** | **(optional)** `string` | The priority of the approval | [default to undefined]
**requester** | **(optional)** `ApprovalIdentity` |  | [default to undefined]
**requestee** | **(optional)** `ApprovalIdentity` |  | [default to undefined]
**comments** | **(optional)** `Array<ApprovalComment3>` | Object representation of a comment on the approval | [default to undefined]
**approvedBy** | **(optional)** `Array<ApprovalIdentityRecord>` | Array of approvers who have approved the approval | [default to undefined]
**rejectedBy** | **(optional)** `Array<ApprovalIdentityRecord>` | Array of approvers who have rejected the approval | [default to undefined]
**assignedTo** | **(optional)** `Array<ApprovalIdentity>` | Array of identities that the approval request is currently assigned to/waiting on. For parallel approvals, this is set to all approvers left to approve. | [default to undefined]
**completedDate** | **(optional)** `string` | Date the approval was completed | [default to undefined]
**approvalCriteria** | **(optional)** `Approval2ApprovalCriteria` |  | [default to undefined]
**additionalAttributes** | **(optional)** `string` | Json string representing additional attributes known about the object to be approved. | [default to undefined]
**referenceData** | **(optional)** `Array<ApprovalReference>` | Reference data related to the approval | [default to undefined]
**reassignmentHistory** | **(optional)** `Array<ApprovalReassignmentHistory>` | History of whom the approval request was assigned to | [default to undefined]
**staticAttributes** | **(optional)**  | Field that can include any static additional info that may be needed by the service that the approval request originated from | [default to undefined]
**modifiedDate** | **(optional)** `string` | Date/time that the approval request was last updated | [default to undefined]
**requestedTarget** | **(optional)** `Array<ApprovalRequestedTarget>` | RequestedTarget used to specify the actual object or target the approval request is for | [default to undefined]

