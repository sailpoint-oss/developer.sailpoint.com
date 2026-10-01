# AdaptiveApprovalConfig

# AdaptiveApprovalConfig

Adaptive (`scheme: WORKFLOW`) configuration for one action. The decision is delegated to the platform workflow identified by workflowId instead of a generic-approvals serial chain. GLOBAL writes accept this scheme only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**scheme** |  **Enum** [  'WORKFLOW' ] | Discriminator. Must be WORKFLOW for adaptive platform-workflow approval. | [required]
**workflow_id** | **str** | Identifier of the platform workflow that decides the request. | [required]
\}

## Example

```python
from sailpoint.generic_request_approval_config.models.adaptive_approval_config import AdaptiveApprovalConfig

adaptive_approval_config = AdaptiveApprovalConfig(
scheme='WORKFLOW',
workflow_id='8c190e67-2a90-4c2a-9f1e-1c5d0b6a4e21'
)

```
[[Back to top]](#) 

