# SpConfigRules

# SpConfigRules

Rules to be applied to the config object during the draft process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**take_from_target_rules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**default_rules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**editable** | **bool** | Indicates whether the object can be edited. | [optional] [default to False]
\}

## Example

```python
from sailpoint.sp_config.models.sp_config_rules import SpConfigRules

sp_config_rules = SpConfigRules(
take_from_target_rules=[
                    sailpoint.sp_config.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = ["RESTORE","PROMOTE"], )
                    ],
default_rules=[
                    sailpoint.sp_config.models.config_object_rule.Config Object Rule(
                        path = '$.enabled', 
                        value = null, 
                        modes = ["RESTORE","PROMOTE"], )
                    ],
editable=True
)

```
[[Back to top]](#) 

