# LifecycleActionSubmitResponse

# LifecycleActionSubmitResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique identifier for the created lifecycle request. | [required]
**status** | **str** | Initial lifecycle request status. | [required]
**action** | **Lifecycleaction** |  | [required]
**target_id** | **str** | Internal machine identity UUID for the lifecycle target. | [required]
**resource_id** | **str** | Connector resource id for the lifecycle target, when present. | [optional] 
**created_at** | **datetime** | Time when the lifecycle request was created (ISO-8601). | [required]
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_submit_response import LifecycleActionSubmitResponse

lifecycle_action_submit_response = LifecycleActionSubmitResponse(
request_id='a1b2c3d4-e5f6-7890-abcd-ef1234567890',
status='RECEIVED',
action='DEACTIVATE',
target_id='1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0',
resource_id='aws:bedrock:agent-42',
created_at='2026-05-26T19:00Z'
)

```
[[Back to top]](#) 

