# GenericRequestApprovalConfig

# GenericRequestApprovalConfig

Approval configuration for one scope. sourceId is never returned. approvalConfig always contains every action allowed for targetType. Unset actions are empty objects (no config at this scope). Submit uses RESOURCE, then GLOBAL, then org-level agent request configuration. There is no approvalRequired flag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Stable identifier for this scope. Use this value on PATCH. Created on first GET if the scope was never configured. | [required]
**target_type** | **GenericRequestTargetType** |  | [required]
**target_id** | **str** | Connector resource id for RESOURCE (for example aws:bedrock-agent-alias-version). Derived tenant id for GLOBAL. Not patchable. | [required]
**approval_config** | [**map[string]BaseGenericConfig**](base-generic-config) | Map keyed by action name. RESOURCE and GLOBAL emit ACTIVATE and DEACTIVATE. DELETE_AT_SOURCE is not returned and cannot be patched. | [required]
\}

## Example

```python
from sailpoint.generic_request_approval_config.models.generic_request_approval_config import GenericRequestApprovalConfig

generic_request_approval_config = GenericRequestApprovalConfig(
id='f0948adc-06f7-435b-a8fd-a06861012470',
target_type='RESOURCE',
target_id='aws:bedrock-agent-alias-version',
approval_config={"ACTIVATE":{"scheme":"APPROVAL","approvers":"sourceOwner, manager","comments":"REJECTION"},"DEACTIVATE":{}}
)

```
[[Back to top]](#) 

