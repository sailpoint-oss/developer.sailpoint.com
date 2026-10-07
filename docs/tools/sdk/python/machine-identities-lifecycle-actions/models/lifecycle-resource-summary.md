# LifecycleResourceSummary

# LifecycleResourceSummary

Cached resource context for the lifecycle target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Internal machine identity UUID for the lifecycle target. | [optional] 
**resource_id** | **str** | Connector resource id for the lifecycle target. | [optional] 
**name** | **str** | Display name of the lifecycle target. | [optional] 
**source_id** | **str** | Source identifier for the lifecycle target. | [optional] 
**source_name** | **str** | Source name for the lifecycle target. | [optional] 
**subtype** | **str** | Machine identity subtype for the lifecycle target. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_resource_summary import LifecycleResourceSummary

lifecycle_resource_summary = LifecycleResourceSummary(
id='1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0',
resource_id='aws:bedrock:agent-42',
name='Support Agent',
source_id='6d28b7c1-620c-49c6-b6d5-cbf81eb4b5fa',
source_name='AWS Bedrock',
subtype='AI_AGENT'
)

```
[[Back to top]](#) 

