# GenericRequestApprovalActionConfig

# GenericRequestApprovalActionConfig

Import this model from the entry point of its package:

```typescript
import { GenericRequestApprovalActionConfig } from '@sailpoint/angular-sdk/generic_request_approval_config';
```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** | **(optional)** `string` | How the request is approved. Omitted when the action inherits the organization-level configuration. | [default to undefined]
**approvers** | **(optional)** `string` | APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action. | [default to undefined]
**comments** | **(optional)** `string` | APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF). | [default to undefined]
**workflowId** | **(optional)** `string` | WORKFLOW scheme only. The ID of the workflow that approves the request. | [default to undefined]

