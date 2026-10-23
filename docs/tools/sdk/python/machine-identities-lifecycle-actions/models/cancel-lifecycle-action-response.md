# CancelLifecycleActionResponse

# CancelLifecycleActionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Lifecycle request identifier. | [required]
**status** | **str** | Updated lifecycle request status after cancel acceptance. | [required]
**action** | **Lifecycleaction** |  | [required]
**target_id** | **str** | Internal machine identity UUID for the lifecycle target. | [required]
**resource_id** | **str** | Connector resource id for the lifecycle target, when present. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.cancel_lifecycle_action_response import CancelLifecycleActionResponse

cancel_lifecycle_action_response = CancelLifecycleActionResponse(
request_id='a1b2c3d4-e5f6-7890-abcd-ef1234567890',
status='CANCELING',
action='DEACTIVATE',
target_id='1c9c8e1f-2f5f-4f77-9f7e-5d37e4fb3ef0',
resource_id='aws:bedrock:agent-42'
)

```
[[Back to top]](#) 

