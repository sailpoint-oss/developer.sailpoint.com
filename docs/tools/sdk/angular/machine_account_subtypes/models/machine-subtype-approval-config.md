# MachineSubtypeApprovalConfig

# MachineSubtypeApprovalConfig

Import this model from the entry point of its package:

```typescript
import { MachineSubtypeApprovalConfig } from '@sailpoint/angular-sdk/machine_account_subtypes';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approvers** | **(optional)** `string` | Comma separated string of approvers.  Following are the options for approver types: manager, sourceOwner, accountOwner, workgroup:[workgroupId] (Governance group).  Approval request will be assigned based on the order of the approvers passed.  Multiple workgroups(governance groups) can be selected as an approver.  >**Note:** accountOwner approver type is only for machine account delete approval settings. | [default to undefined]
**comments** | **(optional)** `string` | Comment configurations for the approval request.  Following are the options for comments: ALL, OFF, APPROVAL, REJECT. | [default to undefined]

