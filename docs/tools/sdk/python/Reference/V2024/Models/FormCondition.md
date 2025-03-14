---
id: v2024-form-condition
title: FormCondition
pagination_label: FormCondition
sidebar_label: FormCondition
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'FormCondition', 'V2024FormCondition'] 
slug: /tools/sdk/python/v2024/models/form-condition
tags: ['SDK', 'Software Development Kit', 'FormCondition', 'V2024FormCondition']
---

# FormCondition

Represent a form conditional.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule_operator** |  **Enum** [  'AND',    'OR' ] | ConditionRuleLogicalOperatorType value. AND ConditionRuleLogicalOperatorTypeAnd OR ConditionRuleLogicalOperatorTypeOr | [optional] 
**rules** | [**[]ConditionRule**](condition-rule) | List of rules. | [optional] 
**effects** | [**[]ConditionEffect**](condition-effect) | List of effects. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.form_condition import FormCondition

form_condition = FormCondition(
rule_operator='AND',
rules=[
                    sailpoint.v2024.models.condition_rule.ConditionRule(
                        source_type = 'ELEMENT', 
                        source = 'department', 
                        operator = 'EQ', 
                        value_type = 'STRING', 
                        value = 'Engineering', )
                    ],
effects=[
                    sailpoint.v2024.models.condition_effect.ConditionEffect(
                        effect_type = 'HIDE', 
                        config = sailpoint.v2024.models.condition_effect_config.ConditionEffect_config(
                            default_value_label = 'Access to Remove', 
                            element = '8110662963316867', ), )
                    ]
)

```
[[Back to top]](#) 

