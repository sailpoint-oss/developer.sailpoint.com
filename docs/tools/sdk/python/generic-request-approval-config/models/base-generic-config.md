# BaseGenericConfig

# BaseGenericConfig

Per-action approval configuration. An empty object means no configuration at this scope and is not persisted. At submit, RESOURCE is used first, then GLOBAL, then org-level agent request configuration. A non-empty object is either generic (`scheme: APPROVAL`) or adaptive (`scheme: WORKFLOW`).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** |  **Enum** [  'WORKFLOW' ] | Discriminator. Must be WORKFLOW for adaptive platform-workflow approval. | [required]
**approvers** | **str** | Comma-separated approver tokens.  Allowed tokens for RESOURCE ACTIVATE and DEACTIVATE: sourceOwner, manager, machineIdentityPrimaryOwner, machineIdentitySecondaryOwners, machineIdentityAllOwners, workgroup:[workgroupId], identity:[identityId].  Role tokens (sourceOwner, manager, and the machineIdentity* tokens) may appear at most once and must not include an id suffix. workgroup: and identity: may repeat when each id is unique.  Approval request assignment follows the order of tokens in this string. | [required]
**comments** |  **Enum** [  'ALL',    'APPROVAL',    'REJECTION',    'OFF' ] | Comment requirement for the approval request. Use REJECTION (not REJECT) when comments are required only on deny. | [required]
**workflow_id** | **str** | Identifier of the platform workflow that decides the request. | [required]
\}

## Example

```python
from sailpoint.generic_request_approval_config.models.base_generic_config import BaseGenericConfig

base_generic_config = BaseGenericConfig(
scheme='WORKFLOW',
approvers='sourceOwner, manager, workgroup:f76ff96a-0815-402a-be1a-18cdc693b79f',
comments='REJECTION',
workflow_id='8c190e67-2a90-4c2a-9f1e-1c5d0b6a4e21'
)

```
[[Back to top]](#) 

