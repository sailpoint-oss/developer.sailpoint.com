# CancelLifecycleActionResponse

# CancelLifecycleActionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Lifecycle request identifier. | [required]
**status** |  **Enum** [  'CANCELING' ] | Status of the request after the cancel is accepted. Always `CANCELING`. | [required]
**action** | **Lifecycleaction** |  | [required]
**target_id** | **str** | ID of the machine identity the request applies to. | [required]
**resource_id** | **str** | ID of the machine identity in its source system, when available. | [optional] 
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

