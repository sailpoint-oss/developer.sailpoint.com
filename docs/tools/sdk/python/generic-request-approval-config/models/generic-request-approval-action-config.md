# GenericRequestApprovalActionConfig

# GenericRequestApprovalActionConfig

The approval setting for one action. It is either an empty object, which inherits the organization-level approval configuration, an APPROVAL setting with `approvers` and `comments`, or a WORKFLOW setting with `workflowId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** |  **Enum** [  'APPROVAL',    'WORKFLOW' ] | How the request is approved. Omitted when the action inherits the organization-level configuration. | [optional] 
**approvers** | **str** | APPROVAL scheme only. A comma-separated list of approver tokens: `sourceOwner`, `manager`, `machineIdentityPrimaryOwner`, `machineIdentitySecondaryOwners`, `machineIdentityAllOwners`, `workgroup:{governanceGroupId}`, and `identity:{identityId}`. `accountOwner` is also allowed for the SUBTYPE DELETE action. | [optional] 
**comments** |  **Enum** [  'ALL',    'APPROVAL',    'REJECTION',    'OFF' ] | APPROVAL scheme only. When approvers must comment: on both decisions (ALL), on approval only (APPROVAL), on rejection only (REJECTION), or never (OFF). | [optional] 
**workflow_id** | **str** | WORKFLOW scheme only. The ID of the workflow that approves the request. | [optional] 
\}

## Example

```python
from sailpoint.generic_request_approval_config.models.generic_request_approval_action_config import GenericRequestApprovalActionConfig

generic_request_approval_action_config = GenericRequestApprovalActionConfig(
scheme='APPROVAL',
approvers='machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10',
comments='REJECTION',
workflow_id='5a7c9e1b-2d4f-4a6c-8e0b-1d3f5a7c9e2b'
)

```
[[Back to top]](#) 

