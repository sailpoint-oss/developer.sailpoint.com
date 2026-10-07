# LifecycleActionSubmitRequest

# LifecycleActionSubmitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **Lifecycleaction** |  | [required]
**comments** | [**[]LifecycleActionSubmitComment**](lifecycle-action-submit-comment) | Optional submit-time comments. At most 10 comments are allowed per request; each comment must be non-empty and at most 1000 characters. | [optional] 
\}

## Example

```python
from sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_submit_request import LifecycleActionSubmitRequest

lifecycle_action_submit_request = LifecycleActionSubmitRequest(
action='DEACTIVATE',
comments=[
                    sailpoint.machine_identities_lifecycle_actions.models.lifecycle_action_submit_comment.Lifecycle Action Submit Comment(
                        comment = 'Suspending agent until security review completes', )
                    ]
)

```
[[Back to top]](#) 

