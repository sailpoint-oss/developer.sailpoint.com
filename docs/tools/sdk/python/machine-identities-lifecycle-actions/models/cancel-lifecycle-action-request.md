# CancelLifecycleActionRequest

# CancelLifecycleActionRequest

Optional details for the cancel request. The request to cancel is identified by the `requestId` in the path.

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

