# ApprovalConfig

# ApprovalConfig

Import this model from the entry point of its package:

```typescript
import { ApprovalConfig } from '@sailpoint/angular-sdk/sources';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reminderConfig** | **(optional)** `ApprovalConfigReminderConfig` |  | [default to undefined]
**escalationConfig** | **(optional)** `ApprovalConfigEscalationConfig` |  | [default to undefined]
**timeoutConfig** | **(optional)** `ApprovalConfigTimeoutConfig` |  | [default to undefined]
**cronTimezone** | **(optional)** `ApprovalConfigCronTimezone` |  | [default to undefined]
**serialChain** | **(optional)** `Array<ApprovalConfigSerialChainInner>` | If the approval request has an approvalCriteria of SERIAL this chain will be used to determine the assignment order. | [default to undefined]
**requiresComment** | **(optional)** `string` | Determines whether a comment is required when approving or rejecting the approval request. | [default to undefined]
**fallbackApprover** | **(optional)** `ApprovalConfigFallbackApprover` |  | [default to undefined]
**machineIdentityManagerAssignment** | **(optional)** `string` | Specifies how to treat the identity type \"MANAGER_OF\" when the requestee is a machine identity. | [default to MachineIdentityManagerAssignmentEnum_ManagerOfRequester]
**circumventApprovalProcess** | **(optional)** `boolean` | When true, all approvals will be created with the status \"PASSED\" effectively skipping the approval process. Note this field should only be used for Machine Account or Machine related approvals. | [default to false]
**autoApprove** | **(optional)** `string` | OFF will prevent the approval request from being assigned to the requester or requestee by assigning it to their manager instead. DIRECT when the requester != requestee this will cause steps assigned directly to the requester to be auto-approved. INDIRECT when the requester != requestee this will cause steps assigned to the requester or a group containing the requester to be auto-approved. This field will only be effective if requestedTarget.reauthRequired is set to false, otherwise the approval will have to be manually approved. | [default to undefined]

