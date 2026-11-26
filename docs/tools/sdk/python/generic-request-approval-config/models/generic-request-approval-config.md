# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

The approval configuration for one scope, with one entry per action the scope's target type supports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The approval configuration ID. Use it with the update API. | [optional] 
**target_type** |  **Enum** [  'RESOURCE',    'SUBTYPE',    'SOURCE',    'GLOBAL' ] | The kind of scope. | [optional] 
**target_id** | **str** | The scope target: the source resource ID for RESOURCE, the subtype ID for SUBTYPE, the source ID for SOURCE, and the tenant ID for GLOBAL. | [optional] 
**approval_config** | [**map[string]GenericRequestApprovalActionConfig**](generic-request-approval-action-config) | The approval setting for each action, keyed by action name (ACTIVATE, DEACTIVATE, CREATE, or DELETE, depending on the target type). An empty object means the action inherits the organization-level approval configuration. | [optional] 
\}

## Example

```python
from sailpoint.generic_request_approval_config.models.generic_request_approval_config import GenericRequestApprovalConfig

generic_request_approval_config = GenericRequestApprovalConfig(
id='0f2c7a9e-3b4d-4e5f-8a6b-7c8d9e0f1a2b',
target_type='RESOURCE',
target_id='aws:bedrock-agent-alias-version',
approval_config={"ACTIVATE":{"scheme":"APPROVAL","approvers":"machineIdentityPrimaryOwner,workgroup:8d3e0094-8a5e-4c6f-9a0b-2e5a1c7d4f10","comments":"REJECTION"},"DEACTIVATE":{}}
)

```
[[Back to top]](#) 

