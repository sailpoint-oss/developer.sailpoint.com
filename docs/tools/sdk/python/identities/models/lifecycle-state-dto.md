# LifecycleStateDto

# LifecycleStateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**state_name** | **str** | The name of the lifecycle state | [required]
**manually_updated** | **bool** | Whether the lifecycle state has been manually or automatically set | [required]
\}

## Example

```python
from sailpoint.identities.models.lifecycle_state_dto import LifecycleStateDto

lifecycle_state_dto = LifecycleStateDto(
state_name='active',
manually_updated=True
)

```
[[Back to top]](#) 

