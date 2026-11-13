# ConditionEffectConfig

# ConditionEffectConfig

Arbitrary map containing a configuration based on the EffectType.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value_label** | **str** | Effect type's label. | [optional] 
**element** | **str** | Element's identifier. | [optional] 
\}

## Example

```python
from sailpoint.custom_forms.models.condition_effect_config import ConditionEffectConfig

condition_effect_config = ConditionEffectConfig(
default_value_label='Access to Remove',
element='8110662963316867'
)

```
[[Back to top]](#) 

