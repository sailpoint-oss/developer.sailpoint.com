# IdentityV2LifecycleState

# IdentityV2LifecycleState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_name** | **str** | The name of the lifecycle state | [required]
**manually_updated** | **bool** | Whether the lifecycle state has been manually or automatically set | [required]
\}

## Example

```python
from sailpoint.identities.models.identity_v2_lifecycle_state import IdentityV2LifecycleState

identity_v2_lifecycle_state = IdentityV2LifecycleState(
state_name='active',
manually_updated=True
)

```
[[Back to top]](#) 

