# GenericApprovalConfig

# GenericApprovalConfig

Generic (`scheme: APPROVAL`) configuration for one action. Approvers are resolved in the order listed. `accountOwner` is allowed only for the SUBTYPE DELETE pair; it is rejected for RESOURCE ACTIVATE and DEACTIVATE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** |  **Enum** [  'APPROVAL' ] | Discriminator. Must be APPROVAL for a serial approver chain. | [required]
**approvers** | **str** | Comma-separated approver tokens.  Allowed tokens for RESOURCE ACTIVATE and DEACTIVATE: sourceOwner, manager, machineIdentityPrimaryOwner, machineIdentitySecondaryOwners, machineIdentityAllOwners, workgroup:[workgroupId], identity:[identityId].  Role tokens (sourceOwner, manager, and the machineIdentity* tokens) may appear at most once and must not include an id suffix. workgroup: and identity: may repeat when each id is unique.  Approval request assignment follows the order of tokens in this string. | [required]
**comments** |  **Enum** [  'ALL',    'APPROVAL',    'REJECTION',    'OFF' ] | Comment requirement for the approval request. Use REJECTION (not REJECT) when comments are required only on deny. | [required]
\}

## Example

```python
from sailpoint.generic_request_approval_config.models.generic_approval_config import GenericApprovalConfig

generic_approval_config = GenericApprovalConfig(
scheme='APPROVAL',
approvers='sourceOwner, manager, workgroup:f76ff96a-0815-402a-be1a-18cdc693b79f',
comments='REJECTION'
)

```
[[Back to top]](#) 

