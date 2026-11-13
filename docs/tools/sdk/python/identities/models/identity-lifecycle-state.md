# IdentityLifecycleState

# IdentityLifecycleState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_name** | **str** | The name of the lifecycle state | [required]
**manually_updated** | **bool** | Whether the lifecycle state has been manually or automatically set | [required]
\}

## Example

```python
from sailpoint.identities.models.identity_lifecycle_state import IdentityLifecycleState

identity_lifecycle_state = IdentityLifecycleState(
state_name='active',
manually_updated=True
)

```
[[Back to top]](#) 

