# LifecycleResourceSummary

# LifecycleResourceSummary

Details of the machine identity at the time the request was submitted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ID of the machine identity. | [optional] 
**resource_id** | **str** | ID of the machine identity in its source system. | [optional] 
**name** | **str** | Name of the machine identity. | [optional] 
**source_id** | **str** | ID of the source the machine identity belongs to. | [optional] 
**source_name** | **str** | Name of the source the machine identity belongs to. | [optional] 
**subtype** | **str** | Type of machine identity. | [optional] 
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

