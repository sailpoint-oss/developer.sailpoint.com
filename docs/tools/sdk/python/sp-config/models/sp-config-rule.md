# SpConfigRule

# SpConfigRule

Format of Config Hub object rules.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**value** | [**SpConfigRuleValue**](sp-config-rule-value) |  | [optional] 
**modes** | **[]str** | Draft modes the rule will apply to. | [optional] 
\}

## Example

```python
from sailpoint.sp_config.models.sp_config_rule import SpConfigRule

sp_config_rule = SpConfigRule(
path='$.enabled',
value=,
modes=["RESTORE","PROMOTE"]
)

```
[[Back to top]](#) 

