# NestedConfig

# NestedConfig

A NestedConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ancestor_id** | **str** | The unique identifier of the ancestor RightSet. | [optional] 
**depth** | **int** | The depth level of the configuration. | [optional] 
**parent_id** | **str** | The unique identifier of the parent RightSet. | [optional] 
**children_ids** | **[]str** | List of unique identifiers for child configurations. | [optional] 
\}

## Example

```python
from sailpoint.custom_user_levels.models.nested_config import NestedConfig

nested_config = NestedConfig(
ancestor_id='idn:ui-ancestor-example',
depth=2,
parent_id='idn:ui-parent-example',
children_ids=["idn:ui-child-one-example","idn:ui-child-two-example"]
)

```
[[Back to top]](#) 

