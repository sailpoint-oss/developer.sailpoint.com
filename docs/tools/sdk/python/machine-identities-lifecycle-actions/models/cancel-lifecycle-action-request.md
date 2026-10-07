# CancelLifecycleActionRequest

# CancelLifecycleActionRequest

Optional cancel metadata. The path `requestId`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | Optional cancel comment appended to the lifecycle request comment thread. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.cancel_lifecycle_action_request import CancelLifecycleActionRequest

cancel_lifecycle_action_request = CancelLifecycleActionRequest(
comment='Cancelling - will resubmit after maintenance window'
)

```
[[Back to top]](#) 

